import React, { useState } from 'react';
import Link from 'next/link';

/**
 * TaskInputFormのProps
 */
interface TaskInputFormProps {
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
const TaskInputForm: React.FC<TaskInputFormProps> = () => {
  //   const [isOpen, setOpen] = useState(false);
  const [collapseShow, setCollapseShow] = useState('hidden');

  return (
    <React.Fragment>
      <form className='bg-white rounded-t-xl shadow-lg p-2 flex flex-row'>
        <input
          className='appearance-none border rounded-l py-2 px-3 w-11/12 text-gray-700 border-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500'
          id='taskTitle'
          type='text'
          placeholder='新しいタスクの名前'
        />
        <button
          className='fas fa-plus flex-grow-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline'
          type='button'
          onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
          //   onClick={() => setOpen(!isOpen)}
        />
      </form>

      {/* Collapse */}
      <div
        className={
          'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute bottom-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
          collapseShow
        }
      >
        {/* Collapse header */}
        <div className='md:min-w-full md:hidden block pb-3 mb-4 border-b border-solid border-blueGray-200'>
          <div className='flex flex-wrap'>
            <div className='w-6/12'>
              <span className='md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm font-bold px-0'>
                Ape PEX
              </span>
            </div>
            <div className='w-6/12 flex justify-end'>
              <button
                type='button'
                className='cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
                onClick={() => setCollapseShow('hidden')}
              >
                <i className='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>
        {/* Navigation */}
        <ul className='md:flex-col md:min-w-full flex flex-col list-none'>
          <li className='items-center'>
            <Link href='/dashboard'>
              <a className='text-pink-500 hover:text-pink-600 text-xs uppercase py-3 font-bold block'>
                <i className='fas fa-tv opacity-75 mr-2 text-sm'></i> Dashboard
              </a>
            </Link>
          </li>

          <li className='items-center'>
            <Link href='/'>
              <a className='text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block'>
                <i className='fas fa-tv opacity-75 mr-2 text-sm'></i> Landing
                Page
              </a>
            </Link>
          </li>

          <li className='items-center'>
            <Link href='/'>
              <a className='text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block'>
                <i className='fas fa-user-circle text-blueGray-400 mr-2 text-sm'></i>{' '}
                Profile Page
              </a>
            </Link>
          </li>

          <li className='items-center'>
            <Link href='/'>
              <a className='text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block'>
                <i className='fas fa-fingerprint text-blueGray-400 mr-2 text-sm'></i>{' '}
                Login
              </a>
            </Link>
          </li>

          <li className='items-center'>
            <a
              className='text-blueGray-300 text-xs uppercase py-3 font-bold block'
              href='#pablo'
              onClick={(e) => e.preventDefault()}
            >
              <i className='fas fa-clipboard-list text-blueGray-300 mr-2 text-sm'></i>{' '}
              Register (soon)
            </a>
          </li>

          <li className='items-center'>
            <button>ログアウト</button>
          </li>
        </ul>
      </div>
      {/* <div
        className={`md:flex 
          ${
            !isOpen
              ? 'hidden'
              : 'bg-white absolute left-0 right-0 z-40 px-6 pt-4 overflow-y-auto overflow-x-hidden h-auto rounded'
          }`}
      >
        <div className='flex flex-col md:flex-row'>
          <span>hoge</span>
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default TaskInputForm;
