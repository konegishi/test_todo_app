import { User } from '@supabase/supabase-js';
import React, { useState } from 'react';
import { useTodos } from '../hooks/useTodos';
// import { supabase } from '../lib/supabase';

/**
 * TaskInputFormのProps
 */
interface TaskInputFormProps {
  /** ユーザー情報 */
  user: User;
  /** タスク名 */
  name?: string;
}

/**
 * TaskInputFormコンポーネント
 * タスクを入力するコンポーネント
 *
 * @param props TaskInputFormのProps
 * @returns TaskInputFormコンポーネント
 */
const TaskInputForm: React.FC<TaskInputFormProps> = (props) => {
  const [isOpen, setOpen] = useState(false);
  // const [todos, setTodos] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');
  // const [errorText, setError] = useState('');
  const { todos, addTodo } = useTodos();
  // const { todos, fetchTodos, addTodo } = useTodos();

  // eslint-disable-next-line no-console
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  // eslint-disable-next-line no-console
  console.log(todos);

  // useEffect(() => {
  //   fetchTodos();
  // }, []);

  // const fetchTodos = async () => {
  //   const { data: todos, error } = await supabase
  //     .from('todos')
  //     .select('*')
  //     .order('id');
  //   if (error) {
  //     // eslint-disable-next-line no-console
  //     console.log('error', error);
  //     // eslint-disable-next-line no-console
  //     console.log('errorText', errorText);
  //   } else {
  //     setTodos(todos);
  //   }
  // };

  // const addTodo = async (taskText) => {
  //   const task = taskText.trim();
  //   if (task.length) {
  //     const { data: todo, error } = await supabase
  //       .from('todos')
  //       .insert({ task, user_id: props.user.id })
  //       .single();
  //     if (error) {
  //       setError(error.message);
  //     } else {
  //       setTodos([...todos, todo]);
  //     }
  //   }
  // };

  return (
    <React.Fragment>
      <div className='flex justify-center shadow-2xl sticky bottom-0'>
        <button
          className='fas fa-plus rounded-full h-12 w-12 mb-2 bg-blue-500 text-white text-xl'
          type='button'
          onClick={() => setOpen(!isOpen)}
        />
      </div>

      {/* Collapse */}
      <div
        className={`shadow absolute bottom-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded-t ${
          isOpen ? 'bg-white p-2' : 'hidden'
        }`}
      >
        {/* Collapse Footer */}
        <div className='block mb-2'>
          <div className='flex flex-row items-center'>
            <div className='w-6/12'>
              <span className='text-left text-gray-700 mr-0 inline-block whitespace-nowrap text-sm font-bold px-0'>
                タスクを入力してみましょう
              </span>
            </div>
            <div className='w-6/12 flex justify-end'>
              <button
                type='button'
                className='cursor-pointer text-black opacity-50 px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
                onClick={() => setOpen(!isOpen)}
              >
                <i className='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>
        {/* Form */}
        <form className='flex flex-row'>
          <input
            className='appearance-none border rounded-l py-2 px-3 w-11/12 text-gray-700 border-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500'
            id='taskTitle'
            // value={newTaskText}
            type='text'
            placeholder='新しいタスクの名前'
            onChange={(event) => {
              // setError('');
              setNewTaskText(event.target.value);
            }}
          />
          <button
            className='fas fa-arrow-circle-up flex-grow-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline'
            type='button'
            onClick={() => addTodo(props.user, newTaskText)}
          />
        </form>
      </div>
    </React.Fragment>
  );
};

export default TaskInputForm;
