import React from 'react';
import { useTodos } from '../hooks/useTodos';

/**
 * TaskのProps
 */
export interface TaskProps {
  /** タスク名 */
  name: string;
  /** タスクのid */
  id: number;
}

/**
 * Taskコンポーネント
 * 1タスクを表すコンポーネント
 *
 * @param props TaskのProps
 * @returns Taskコンポーネント
 */
const Task: React.FC<TaskProps> = (props) => {
  const { deleteTodo } = useTodos();

  return (
    <React.Fragment>
      <div className='flex flex-row items-center border-t border-gray-200 mb-2 pt-2'>
        <input
          type='checkbox'
          className='h-5 w-5 form-checkbox rounded-full mx-2 border-gray-300 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50 text-indigo-500'
        />
        <span className='text-xl text-blueGray-700 ml-2'>{props.name}</span>
        <button
          className='far fa-trash-alt h-5 w-5 text-gray-500 ml-auto mr-2'
          onClick={() => deleteTodo(props.id)}
        />
      </div>
    </React.Fragment>
  );
};

export default Task;
