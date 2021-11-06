import React, { useState } from 'react';
// import { useTodos } from '../hooks/useTodos';
import TaskModal from './TaskModal';

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
  const [isOpen, setOpen] = useState(false);
  // const { deleteTodo } = useTodos();

  return (
    <React.Fragment>
      <div className='flex flex-row items-center border-t border-gray-200 mb-2 pt-2'>
        <input
          type='checkbox'
          className='h-5 w-5 form-checkbox rounded-full mx-2 border-gray-300 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50 text-indigo-500'
        />
        <span className='text-xl text-blueGray-700 ml-2'>{props.name}</span>
        <button
          className='fas fa-chevron-right h-5 w-5 text-gray-400 ml-auto mr-2'
          onClick={() => setOpen(!isOpen)}
        />
        {/* <i class="fas fa-chevron-right"></i> */}
        {/* <button
          className='far fa-trash-alt h-5 w-5 text-gray-500 ml-auto mr-2'
          onClick={() => deleteTodo(props.id)}
        /> */}
      </div>
      {isOpen && <TaskModal onClickHandler={setOpen} />}
    </React.Fragment>
  );
};

export default Task;
