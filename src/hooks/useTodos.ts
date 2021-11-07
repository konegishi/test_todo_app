/* eslint-disable no-console */
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

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  console.log(
    'useState: 00000000000000000000000000000000000000000000000000000000'
  );
  console.log(todos);
  //   const [errorText, setError] = useState('');

  /**
   * supabaseからtodoデータをfetchする
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
      console.log('fetch');
      setTodos(todos);
    });
  }, []);

  /**
   * supabaseにtodoデータを追加する
   * @param user
   * @param taskText
   */
  const addTodo0 = async (user: User, taskText: string) => {
    const task = taskText.trim();
    if (task.length) {
      const { data: todo } = await supabase
        .from('todos')
        .insert({ task, user_id: user.id })
        .single();
      return todo;
    }
  };

  const addTodo = (user: User, taskText: string) => {
    addTodo0(user, taskText).then((newTodo) => {
      console.log('add');
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
    });
  };

  const updateTodo0 = async (
    user: User,
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
  const updateTodo = (
    user: User,
    title: string,
    description: string,
    id: number
  ) => {
    updateTodo0(user, title, description, id).then((updatedTodos) => {
      if (updatedTodos) {
        setTodos(updatedTodos);
      }
    });
  };

  /**
   * supabaseからtodoを削除する
   * @param id
   */
  const deleteTodo0 = async (id: number) => {
    try {
      await supabase.from('todos').delete().eq('id', id);
      return todos.filter((todo) => todo.id != id);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error);
    }
  };

  const deleteTodo = (id: number) => {
    deleteTodo0(id).then((deletedTodos) => {
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
