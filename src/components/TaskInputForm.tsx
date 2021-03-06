import React, { useRef, useState } from 'react';
import { TaskInputFormProps } from '../types/taskinputform';

/**
 * TaskInputFormコンポーネント
 * タスクを入力するコンポーネント
 *
 * @param props TaskInputFormのProps
 * @returns TaskInputFormコンポーネント
 */
const TaskInputForm: React.FC<TaskInputFormProps> = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [hasValidCharNum, setHasValidCharNum] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * ファームのタスク追加ボタンのhandler
   */
  const handleOnClickAddButton = () => {
    if (
      inputRef.current.value.length >= 3 &&
      inputRef.current.value.length <= 100
    ) {
      props.addTodoHandler(props.user, inputRef.current.value);
      inputRef.current.value = '';
      setHasValidCharNum(true);
      setOpen(!isOpen);
    } else {
      setHasValidCharNum(false);
    }
  };

  return isOpen ? (
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
        className={`${
          !isOpen
            ? 'hidden'
            : 'shadow sticky bottom-0 left-0 right-0 z-40 items-center rounded-t bg-white p-2'
        }`}
      >
        <div className='block mb-2'>
          <div className='flex flex-row items-center'>
            <div className='w-6/12'>
              <span className='text-left text-gray-700 mr-0 inline-block whitespace-nowrap text-sm font-bold px-0 ml-3'>
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
            className='rounded-l py-2 px-3 w-11/12 text-gray-700 border-gray-200 leading-tight'
            id='taskTitle'
            ref={inputRef}
            type='text'
            placeholder='新しいタスクの名前'
          />
          <button
            className='fas fa-arrow-circle-up flex-grow-0 bg-blue-500 text-white font-bold py-2 px-4 rounded-r'
            type='button'
            onClick={() => handleOnClickAddButton()}
          />
        </form>
        <span
          className={`${
            !hasValidCharNum ? 'text-red-500' : 'text-gray-400'
          } text-sm ml-3`}
        >
          3文字以上100文字以下{!hasValidCharNum && 'で入力し直してください'}
        </span>
      </div>
    </React.Fragment>
  ) : (
    <React.Fragment>
      {/* FAB */}
      <div className='sticky mx-auto bottom-0'>
        <button
          className='fas fa-plus mb-2 rounded-full h-12 w-12 bg-blue-500 text-white text-xl'
          type='button'
          onClick={() => setOpen(!isOpen)}
        />
      </div>
    </React.Fragment>
  );
};

export default TaskInputForm;
