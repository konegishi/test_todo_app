import React, { useState } from 'react';

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
  const [isOpen, setOpen] = useState(false);

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
          onClick={() => setOpen(!isOpen)}
        />
      </form>

      {/* Collapse */}
      <div
        className={`shadow absolute bottom-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded-t ${
          isOpen ? 'bg-white p-2' : 'hidden'
        }`}
      >
        {/* Collapse header */}
        <div className='block mb-4 border-b border-solid border-blueGray-200'>
          <div className='flex flex-wrap'>
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
        {/* Navigation */}
        <form className='flex flex-row'>
          <input
            className='appearance-none border rounded-l py-2 px-3 w-11/12 text-gray-700 border-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500'
            id='taskTitle'
            type='text'
            placeholder='新しいタスクの名前'
          />
          <button
            className='fas fa-plus flex-grow-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline'
            type='button'
          />
        </form>
      </div>
    </React.Fragment>
  );
};

export default TaskInputForm;
