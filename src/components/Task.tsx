import React, { useState } from 'react';
// import { useTodos } from '../hooks/useTodos';
import TaskModal from './TaskModal';

/**
 * TaskのProps
 */
export interface TaskProps {
  /** タスク名 */
  title: string;
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
  const [isOpen, setOpen] = useState(false);
  // const { deleteTodo } = useTodos();

  return (
    <React.Fragment>
      <div className='flex flex-row items-center border-t border-gray-200 mb-2 pt-2'>
        <input
          type='checkbox'
          className='h-5 w-5 form-checkbox rounded-full mx-2 border-gray-300 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50 text-indigo-500'
        />
        <span className='text-lg text-blueGray-700 ml-2 truncate'>
          {props.title}
        </span>
        <button
          className='fas fa-ellipsis-v h-5 w-5 text-gray-400 ml-auto mr-2'
          onClick={() => setOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <TaskModal title={props.title} id={props.id} onClickHandler={setOpen} />
      )}
    </React.Fragment>
  );
};

export default Task;
