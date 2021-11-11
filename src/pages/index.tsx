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
  const { todos, addTodo, deleteTodo, updateTodo } = useTodos(user);

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
            {todos && todos.length !== 0 && (
              <TaskCard
                todos={todos}
                deleteTodoHandler={deleteTodo}
                updateTodoHandler={updateTodo}
              />
            )}
            <div className='flex-grow'></div>
            <TaskInputForm user={user} addTodoHandler={addTodo} />
          </main>
        </div>
      )}
    </div>
  );
};

export default Home;
