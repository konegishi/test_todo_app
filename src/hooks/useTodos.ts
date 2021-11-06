import { User } from '@supabase/supabase-js';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [errorText, setError] = useState('');

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

  return {
    todos,
    fetchTodos,
    addTodo,
  };
};
