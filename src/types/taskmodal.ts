import { Dispatch, SetStateAction } from 'react';
import { UseTodos } from './todos';

/**
 * TaskModalコンポーネントのProps
 */
export interface TaskModalProps {
  /** タスク名 */
  title: string;
  /** タスクのid */
  id: number;
  /** タスクの説明 */
  description: string;
  /** Modal開閉用メソッド */
  onClickHandler: Dispatch<SetStateAction<boolean>>;
  /** DeleteボタンのHandler */
  deleteTodoHandler: UseTodos['deleteTodo'];
  /** UpdateボタンのHandler */
  updateTodoHandler: UseTodos['updateTodo'];
}
