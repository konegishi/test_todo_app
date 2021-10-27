import React from 'react';
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
const TaskCard: React.FC<TaskCardProps> = (props) => {
  return (
    <React.Fragment>
      <div className='flex-grow pt-4 px-4'>
        <div className=' bg-white rounded-xl mb-4 shadow-lg p-2'>
          <h2 className='ml-2 font-semibold text-2xl text-blueGray-700 mb-2'>
            今日
          </h2>
          {props.tasks.map((task, index) => {
            return <Task name={task.name} key={index} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TaskCard;