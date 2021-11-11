import React from 'react';
import { TaskCardProps } from '../types/taskcard';
import Task from './Task';

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
        <div className=' bg-white rounded mb-4 shadow-lg pt-2 px-2'>
          <h2 className='ml-2 mb-2 font-semibold text-2xl text-blueGray-800'>
            今日
          </h2>
          {props.todos.map((todo) => {
            return (
              <Task
                title={todo.task}
                id={todo.id}
                description={todo.description}
                key={todo.id}
                isComplete={todo.isComplete}
                deleteTodoHandler={props.deleteTodoHandler}
                updateTodoHandler={props.updateTodoHandler}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TaskCard;
