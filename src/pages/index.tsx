import { Auth } from '@supabase/ui';
import Head from 'next/head';
import React from 'react';
import NavBar from '../components/NavBar';
import TaskCard from '../components/TaskCard';
import TaskInputForm from '../components/TaskInputForm';
import { useTodos } from '../hooks/useTodos';
import { supabase } from '../lib/supabase';

const Home = (): JSX.Element => {
  const { user } = Auth.useUser();
  const { todos, isLoading, addTodo, deleteTodo, updateTodo } = useTodos(user);

  return (
    <div>
      {!user ? (
        <div className='w-full h-full flex justify-center items-center p-4'>
          <Auth
            supabaseClient={supabase}
            providers={['google', 'github']}
            socialLayout='horizontal'
            socialButtonSize='xlarge'
          />
        </div>
      ) : (
        <div>
          <Head>
            <title>ToDo App</title>
            <link rel='icon' href='/favicon.ico' />
          </Head>

          <main className='absolute bg-gray-100 flex flex-col min-h-full w-full'>
            <NavBar />
            {isLoading ? (
              <i className='fas fa-circle-notch animate-spin-slow m-auto text-4xl text-blue-500' />
            ) : todos && todos.length !== 0 ? (
              <div>
                <TaskCard
                  todos={todos}
                  deleteTodoHandler={deleteTodo}
                  updateTodoHandler={updateTodo}
                />
              </div>
            ) : (
              <div className='flex flex-col my-auto'>
                <i className='fas fa-tasks text-6xl text-gray-400 mx-auto mb-4' />
                <span className='mx-auto text-gray-500 text-lg text-center'>
                  新しいタスクを追加してみましょう！
                </span>
              </div>
            )}
            {todos && todos.length !== 0 && <div className='flex-grow'></div>}
            <TaskInputForm user={user} addTodoHandler={addTodo} />
          </main>
        </div>
      )}
    </div>
  );
};

export default Home;
