/* eslint-disable no-console */
import { User } from '@supabase/supabase-js';
import { useCallback, useEffect, useState } from 'react';
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
  //   const [todos, setTodos] = useState<Todo[]>([]);
  //   const [errorText, setError] = useState('');

  /**
   * supabaseからtodoデータをfetchする
   */
  //   const fetchTodos = useCallback(async () => {
  //     const { data: todos, error } = await supabase
  //       .from('todos')
  //       .select('*')
  //       .order('id');
  //     if (error) {
  //       // eslint-disable-next-line no-console
  //       console.log('error', error);
  //       // eslint-disable-next-line no-console
  //       console.log('errorText', errorText);
  //     } else {
  //       setTodos(todos);
  //     }
  //   }, []);

  useEffect(() => {
    const fetchTodos = async () => {
      const { data: todos } = await supabase
        .from('todos')
        .select('*')
        .order('id');
      return todos;
      //   if (error) {
      //     // eslint-disable-next-line no-console
      //     console.log('error', error);
      //     // eslint-disable-next-line no-console
      //     // console.log('errorText', errorText);
      //   } else {
      //     console.log(
      //       'fetch'
      //     );
      //     setTodos(todos);
      //   }
    };

    fetchTodos().then((todos) => {
      console.log('fetch');
      setTodos(todos);
    });
  }, []);

  //   const fetchTodos = async () => {
  //     const { data: todos, error } = await supabase
  //       .from('todos')
  //       .select('*')
  //       .order('id');
  //     if (error) {
  //       // eslint-disable-next-line no-console
  //       console.log('error', error);
  //       // eslint-disable-next-line no-console
  //       console.log('errorText', errorText);
  //     } else {
  //       setTodos(todos);
  //     }
  //   };

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
      //   setTodos((todos) => [...todos, newTodo]);
      //   setTodos([...todos, newTodo]);
    });
  };
  //   const addTodo = useCallback(async (user: User, taskText: string) => {
  //     const task = taskText.trim();
  //     if (task.length) {
  //       const { data: todo, error } = await supabase
  //         .from('todos')
  //         .insert({ task, user_id: user.id })
  //         .single();
  //       if (error) {
  //         setError(error.message);
  //       } else {
  //         console.log(
  //           'before: ==========================================================='
  //         );
  //         console.log(todos);
  //         console.log(todo);
  //         setTodos([...todos, todo]);
  //         console.log(
  //           'after: ==========================================================='
  //         );
  //         console.log(todos);
  //       }
  //     }
  //   }, []);
  //   const addTodo = async (user: User, taskText: string) => {
  //     const task = taskText.trim();
  //     if (task.length) {
  //       const { data: todo, error } = await supabase
  //         .from('todos')
  //         .insert({ task, user_id: user.id })
  //         .single();
  //       if (error) {
  //         setError(error.message);
  //       } else {
  //         setTodos([...todos, todo]);
  //       }
  //     }
  //   };

  const updateTodo = useCallback(
    async (user: User, title: string, description: string, id: number) => {
      const { data: todo } = await supabase
        .from('todos')
        .update({ task: title, description: description })
        .match({ id: id })
        .single();
      setTodos(todo);
    },
    []
  );

  /**
   * supabaseからtodoを削除する
   * @param id
   */
  const deleteTodo = useCallback(async (id: number) => {
    try {
      await supabase.from('todos').delete().eq('id', id);
      setTodos(todos.filter((todo) => todo.id != id));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error);
    }
  }, []);

  return {
    todos,
    // fetchTodos,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};
