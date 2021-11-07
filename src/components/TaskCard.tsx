import React from 'react';
import Task from './Task';

/**
 * TaskCardのProps
 */
interface TaskCardProps {
  /** タスクのリスト */
  todos: {
    task: string;
    id: number;
    description: string;
    is_complete: boolean;
  }[];
  /** DeleteボタンのHandler */
  deleteTodoHandler: (id: number) => void;
  /** UpdateボタンのHandler */
  updateTodoHandler: (title: string, description: string, id: number) => void;
  /** CompleteチェックボックスのHandler */
  updateCompleteFlagHandler: (isComplete: boolean, id: number) => void;
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
        <div className=' bg-white rounded mb-4 shadow-lg p-2'>
          <h2 className='ml-2 mb-2 font-semibold text-2xl text-blueGray-700'>
            今日
          </h2>
          {props.todos.map((todo) => {
            return (
              <Task
                title={todo.task}
                id={todo.id}
                description={todo.description}
                key={todo.id}
                isComplete={todo.is_complete}
                deleteTodoHandler={props.deleteTodoHandler}
                updateTodoHandler={props.updateTodoHandler}
                updateCompleteFlagHandler={props.updateCompleteFlagHandler}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TaskCard;
