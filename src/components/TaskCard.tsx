import React, { useEffect } from 'react';
import { useTodos } from '../hooks/useTodos';
import Task, { TaskProps } from './Task';

/**
 * TaskCardのProps
 */
interface TaskCardProps {
  /** タスクのリスト */
  todos?: [];
  hoge: number;
  tasks?: TaskProps[];
}

/**
 * TaskCardコンポーネント
 * 複数のタスクを1つにまとめるためのコンポーネント
 *
 * @param props TaskCardのProps
 * @returns TaskCardコンポーネント
 */
const TaskCard: React.FC<TaskCardProps> = (props) => {
  // const { fetchTodos } = useTodos();
  const { todos, fetchTodos } = useTodos();

  // eslint-disable-next-line no-console
  console.log('TaskCard: ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  // eslint-disable-next-line no-console
  console.log(todos);
  // eslint-disable-next-line no-console
  console.count();

  useEffect(() => {
    fetchTodos();
  }, [props.hoge]);

  return (
    <React.Fragment>
      <div className='flex-grow pt-4 px-4'>
        <div className=' bg-white rounded mb-4 shadow-lg p-2'>
          <h2 className='ml-2 mb-2 font-semibold text-2xl text-blueGray-700'>
            今日
          </h2>
          {todos.map((todo) => {
            return (
              <Task
                title={todo.task}
                id={todo.id}
                description={todo.description}
                key={todo.id}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TaskCard;
