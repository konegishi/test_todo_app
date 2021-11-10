import { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import useSWR, { useSWRConfig } from 'swr';

// interface Todo {
//   /** タスク名 */
//   task: string;
//   /** タスクのid */
//   id: number;
//   /** タスクの説明 */
//   description: string;
// }

/**
 * Todo処理用のカスタムフック
 * @returns
 */
export const useTodos = () => {
  const { mutate } = useSWRConfig();
  const fetcher = async () =>
    await supabase.from('todos').select('*').order('id');
  const { data, error } = useSWR('/todos', fetcher);

  // eslint-disable-next-line no-console
  console.log('swr: ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  // eslint-disable-next-line no-console
  console.log(data);
  // eslint-disable-next-line no-console
  console.log(error);

  /**
   * supabaseにtodoデータを追加する
   * @param user
   * @param taskText
   */
  const addTodo = async (user: User, taskText: string) => {
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
  const updateTodo = async (title: string, description: string, id: number) => {
    // titleとdescriptionの更新
    await supabase
      .from('todos')
      .update({ task: title, description: description })
      .match({ id: id })
      .single();
    // refetch
    mutate('/todos');
  };

  /**
   * Supabaseのtodoを更新する
   * @param isComplete todoの完了フラグ
   * @param id todoのid
   */
  const updateCompleteFlag = async (isComplete: boolean, id: number) => {
    // is_completeの更新
    await supabase
      .from('todos')
      .update({ isComplete: isComplete })
      //   .update({ is_complete: isComplete })
      .match({ id: id })
      .single();
    // refetch
    mutate('/todos');
  };

  /**
   * supabaseからtodoを削除する
   * @param id
   */
  const deleteTodo = async (id: number) => {
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
    // todos,
    // error,
    isLoading: !data && !error,
    addTodo,
    updateTodo,
    updateCompleteFlag,
    deleteTodo,
  };
};
