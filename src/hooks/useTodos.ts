import { PostgrestResponse, User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import useSWR, { useSWRConfig } from 'swr';
import { Todo, UseTodos } from '../types/todos';

/**
 * Todo処理用のカスタムフック
 * @returns
 */
export const useTodos = (user: User): UseTodos => {
  const { mutate } = useSWRConfig();

  const fetcher = async () =>
    await supabase.from('todos').select('*').order('id');
  const { data, error } = useSWR<PostgrestResponse<Todo>, any>(
    user ? '/todos' : null,
    fetcher
  );

  /**
   * supabaseにtodoデータを追加する
   * @param user
   * @param taskText
   */
  const addTodo = async (user: User, taskText: string): Promise<void> => {
    const task = taskText.trim();
    if (task.length) {
      // supabaseに追加
      await supabase.from('todos').insert({ task, user_id: user.id }).single();
      // refetch
      mutate('/todos');
    }
  };

  /**
   * Supabaseのtodoを更新する
   * @param title todoのタイトル
   * @param description todoの説明
   * @param id todoのid
   * @returns
   */
  const updateTodo = async (
    id: number,
    todo: { task?: string; description?: string; isComplete?: boolean }
  ): Promise<void> => {
    // titleとdescriptionの更新
    await supabase.from('todos').update(todo).match({ id: id }).single();
    // refetch
    mutate('/todos');
  };

  /**
   * supabaseからtodoを削除する
   * @param id
   */
  const deleteTodo = async (id: number): Promise<void> => {
    try {
      await supabase.from('todos').delete().eq('id', id);
      // refetch
      mutate('/todos');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error);
    }
  };

  return {
    todos: data?.body,
    // error,
    isLoading: !data && !error,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};
