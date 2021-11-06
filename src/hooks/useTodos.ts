import { User } from '@supabase/supabase-js';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [errorText, setError] = useState('');

  /**
   * supabaseからtodoデータをfetchする
   */
  const fetchTodos = async () => {
    const { data: todos, error } = await supabase
      .from('todos')
      .select('*')
      .order('id');
    if (error) {
      // eslint-disable-next-line no-console
      console.log('error', error);
      // eslint-disable-next-line no-console
      console.log('errorText', errorText);
    } else {
      setTodos(todos);
    }
  };

  /**
   * supabaseにtodoデータを追加する
   * @param user
   * @param taskText
   */
  const addTodo = async (user: User, taskText: string) => {
    const task = taskText.trim();
    if (task.length) {
      const { data: todo, error } = await supabase
        .from('todos')
        .insert({ task, user_id: user.id })
        .single();
      if (error) {
        setError(error.message);
      } else {
        setTodos([...todos, todo]);
      }
    }
  };

  /**
   * supabaseからtodoを削除する
   * @param id
   */
  const deleteTodo = async (id: number) => {
    try {
      await supabase.from('todos').delete().eq('id', id);
      setTodos(todos.filter((x) => x.id != id));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error);
    }
  };

  return {
    todos,
    fetchTodos,
    addTodo,
    deleteTodo,
  };
};
