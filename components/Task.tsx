import React from 'react';

/**
 * TaskのProps
 */
export interface TaskProps {
  /** タスクのタイトル */
  title: string;
}

/**
 * Taskコンポーネント
 * @param props TaskのProps
 * @returns Taskコンポーネント
 */
const Task: React.FC<TaskProps> = (props) => {
  return (
    <React.Fragment>
      <div className='relative bg-white rounded-xl mb-4 shadow-lg p-2'>
        <div className='flex flex-row items-center'>
          <input
            type='checkbox'
            className='h-6 w-6 rounded m-2 border-gray-300 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50 text-indigo-500'
          />
          <span className='text-xl text-blueGray-700'>{props.title}</span>
          <button className='fas fa-ellipsis-v text-gray-500 absolute right-4 ' />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Task;
