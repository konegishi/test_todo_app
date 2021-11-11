import { Todo, UseTodos } from './todos';

/**
 * TaskCardコンポーネントのProps
 */
export interface TaskCardProps {
  /** タスクのリスト */
  todos: Todo[];
  /** DeleteボタンのHandler */
  deleteTodoHandler: UseTodos['deleteTodo'];
  /** UpdateボタンのHandler */
  updateTodoHandler: UseTodos['updateTodo'];
}
