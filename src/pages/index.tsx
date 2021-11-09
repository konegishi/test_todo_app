import { Auth } from '@supabase/ui';
import Head from 'next/head';
import TaskCard from '../components/TaskCard';
import TaskInputForm from '../components/TaskInputForm';
import { useTodos } from '../hooks/useTodos';
import { supabase } from '../lib/supabase';

const Home = (): JSX.Element => {
  const { user } = Auth.useUser();
  const { todos, addTodo, deleteTodo, updateTodo, updateCompleteFlag } =
    useTodos();

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
          {/* <button
            className='btn-black w-full mt-12'
            onClick={async () => {
              const { error } = await supabase.auth.signOut();
              // eslint-disable-next-line no-console
              if (error) console.log('Error logging out:', error.message);
            }}
          >
            Logout
          </button> */}
          <Head>
            <title>Create Next App</title>
            <link rel='icon' href='/favicon.ico' />
          </Head>

          <main className='absolute bg-gray-100 flex flex-col min-h-full w-full'>
            {todos && todos.length !== 0 && (
              <TaskCard
                todos={todos}
                deleteTodoHandler={deleteTodo}
                updateTodoHandler={updateTodo}
                updateCompleteFlagHandler={updateCompleteFlag}
              />
            )}
            <TaskInputForm user={user} addTodoHandler={addTodo} />
          </main>
        </div>
      )}
    </div>
  );
};

export default Home;
