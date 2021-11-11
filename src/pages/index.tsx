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
        <div className='absolute w-full h-full bg-gray-200'>
          <div className='flex content-center items-center justify-center h-full'>
            <div className='bg-white rounded shadow p-4 w-11/12'>
              <h2 className='text-xl text-center border-b mb-4 pb-4 text-gray-800 font-bold'>
                ToDo App
              </h2>
              <Auth
                supabaseClient={supabase}
                providers={['google', 'github']}
                socialLayout='horizontal'
                socialButtonSize='xlarge'
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Head>
            <title>ToDo App</title>
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
