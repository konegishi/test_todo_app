import { User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

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
  const [todos, setTodos] = useState([]);
  //   const [errorText, setError] = useState('');

  /**
   * supabaseからtodoデータをfetchし、todosにsetする
   */
  useEffect(() => {
    const fetchTodos = async () => {
      const { data: todos } = await supabase
        .from('todos')
        .select('*')
        .order('id');
      return todos;
    };

    fetchTodos().then((todos) => {
      setTodos(todos);
    });
  }, []);

  /**
   * supabaseにtodoデータを追加する
   * @param user
   * @param taskText
   */
  const addTodoSupabase = async (user: User, taskText: string) => {
    const task = taskText.trim();
    if (task.length) {
      const { data: todo } = await supabase
        .from('todos')
        .insert({ task, user_id: user.id })
        .single();
      return todo;
    }
  };

  /**
   * 新規todoを追加する
   * @param user
   * @param taskText
   */
  const addTodo = (user: User, taskText: string) => {
    addTodoSupabase(user, taskText).then((newTodo) => {
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
    });
  };

  /**
   * Supabaseのtodoを更新する
   * @param title todoのタイトル
   * @param description todoの説明
   * @param id todoのid
   * @returns
   */
  const updateTodoSupabase = async (
    title: string,
    description: string,
    id: number
  ) => {
    const { data: todo } = await supabase
      .from('todos')
      .update({ task: title, description: description })
      .match({ id: id })
      .single();
    const updatedTodos = [...todos];
    const matchedId = updatedTodos.findIndex((todo) => todo.id === id);
    if (matchedId !== -1) {
      updatedTodos[matchedId] = todo;
      return updatedTodos;
    }
  };

  /**
   * todoを更新する
   * @param title
   * @param description
   * @param id
   */
  const updateTodo = (title: string, description: string, id: number) => {
    updateTodoSupabase(title, description, id).then((updatedTodos) => {
      if (updatedTodos) {
        setTodos(updatedTodos);
      }
    });
  };

  /**
   * supabaseからtodoを削除する
   * @param id
   */
  const deleteTodoSupabase = async (id: number) => {
    try {
      await supabase.from('todos').delete().eq('id', id);
      return todos.filter((todo) => todo.id != id);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error);
    }
  };

  /**
   * todoを削除する
   * @param id
   */
  const deleteTodo = (id: number) => {
    deleteTodoSupabase(id).then((deletedTodos) => {
      setTodos(deletedTodos);
    });
  };

  return {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};
