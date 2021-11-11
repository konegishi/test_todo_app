import { User } from '@supabase/supabase-js';

/**
 * Todoの型定義
 */
export interface Todo {
  /** todo名 */
  task: string;
  /** todoのid */
  id: number;
  /** 説明 */
  description: string;
  /** 完了フラグ */
  isComplete: boolean;
}

export interface UseTodos {
  /** todoのリスト */
  todos: Todo[];
  /** ローディング中フラグ */
  isLoading: boolean;
  /**addTodoメソッドの型定義 */
  addTodo: (user: User, taskText: string) => Promise<void>;
  /** updateTodoメソッドの型定義 */
  updateTodo: (
    id: number,
    todo: {
      task?: string;
      description?: string;
      isComplete?: boolean;
    }
  ) => Promise<void>;
  /** deleteTodoメソッドの型定義 */
  deleteTodo: (id: number) => Promise<void>;
}
