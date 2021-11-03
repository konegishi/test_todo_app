import React, { useEffect } from 'react';
import { useTodos } from '../hooks/useTodos';
import Task, { TaskProps } from './Task';

/**
 * TaskCardのProps
 */
interface TaskCardProps {
  /** タスクのリスト */
  tasks: TaskProps[];
}

/**
 * TaskCardコンポーネント
 * 複数のタスクを1つにまとめるためのコンポーネント
 *
 * @param props TaskCardのProps
 * @returns TaskCardコンポーネント
 */
const TaskCard: React.FC<TaskCardProps> = () => {
  const { todos, fetchTodos } = useTodos();

  useEffect(() => {
    fetchTodos();
  });

  return (
    <React.Fragment>
      <div className='flex-grow pt-4 px-4'>
        <div className=' bg-white rounded mb-4 shadow-lg p-2'>
          <h2 className='ml-2 mb-2 font-semibold text-2xl text-blueGray-700'>
            今日
          </h2>
          {todos.map((todo) => {
            return <Task name={todo.task} key={todo.id} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TaskCard;
