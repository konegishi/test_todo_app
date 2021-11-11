import { User } from '@supabase/supabase-js';
import { UseTodos } from './todos';

/**
 * TaskInputFormコンポーネントのProps
 */
export interface TaskInputFormProps {
  /** ユーザー情報 */
  user: User;
  /** タスク名 */
  name?: string;
  /** AddボタンのHandler */
  addTodoHandler: UseTodos['addTodo'];
}
