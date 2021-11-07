import { User } from '@supabase/supabase-js';
import React, { useRef, useState } from 'react';

/**
 * TaskInputFormのProps
 */
interface TaskInputFormProps {
  /** ユーザー情報 */
  user: User;
  /** タスク名 */
  name?: string;
  /** AddボタンのHandler */
  addTodoHandler: (user: User, taskText: string) => void;
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
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * ファームのタスク追加ボタンのhandler
   */
  const handleOnClickAddButton = () => {
    props.addTodoHandler(props.user, inputRef.current.value);
    inputRef.current.value = '';
    setOpen(!isOpen);
  };

  if (isOpen) {
    return (
      <React.Fragment>
        {/* blackOverlay */}
        <div className='absolute w-full min-h-full'>
          <span
            id='blackOverlay'
            className='absolute w-full min-h-full bg-gray-500 bg-opacity-75'
          ></span>
        </div>
        {/* タスク入力フォーム */}
        <div
          className={`shadow absolute bottom-0 left-0 right-0 z-40 items-center flex-1 rounded-t bg-white p-2 sticky${
            !isOpen && ' hidden'
          }`}
        >
          <div className='block mb-2'>
            <div className='flex flex-row items-center'>
              <div className='w-6/12'>
                <span className='text-left text-gray-700 mr-0 inline-block whitespace-nowrap text-sm font-bold px-0'>
                  新しいタスクを入力してみましょう
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
              ref={inputRef}
              type='text'
              placeholder='新しいタスクの名前'
            />
            <button
              className='fas fa-arrow-circle-up flex-grow-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline'
              type='button'
              onClick={() => handleOnClickAddButton()}
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <div className='flex justify-center shadow-2xl sticky bottom-0'>
        <button
          className='fas fa-plus rounded-full h-12 w-12 mb-2 bg-blue-500 text-white text-xl'
          type='button'
          onClick={() => setOpen(!isOpen)}
        />
      </div>
    </React.Fragment>
  );
};

export default TaskInputForm;
