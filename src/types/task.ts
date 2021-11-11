import { UseTodos } from './todos';

/**
 * TaskコンポーネントのProps
 */
export interface TaskProps {
  /** タスク名 */
  title: string;
  /** タスクのid */
  id: number;
  /** タスクの説明 */
  description: string;
  /** タスクの完了フラグ */
  isComplete: boolean;
  /** DeleteボタンのHandler */
  deleteTodoHandler: UseTodos['deleteTodo'];
  /** UpdateボタンのHandler */
  updateTodoHandler: UseTodos['updateTodo'];
}
