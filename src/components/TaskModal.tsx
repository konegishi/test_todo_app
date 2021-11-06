import React, { Dispatch, SetStateAction, useState } from 'react';
import { useTodos } from '../hooks/useTodos';

/**
 * TaskModalのProps
 */
export interface TaskModalProps {
  /** タスク名 */
  title: string;
  /** タスクのid */
  id: number;
  /** Modal開閉用メソッド */
  onClickHandler: Dispatch<SetStateAction<boolean>>;
}

/**
 * TaskModalコンポーネント
 * タスクの更新や削除を行うためのコンポーネント
 *
 * @param props TaskModalのProps
 * @returns TaskModalコンポーネント
 */
const TaskModal: React.FC<TaskModalProps> = (props) => {
  const [enableDelete, setEnableDelete] = useState(false);
  const { deleteTodo } = useTodos();

  return (
    <React.Fragment>
      <div
        className='fixed z-10 inset-0 overflow-y-auto'
        aria-labelledby='modal-title'
        role='dialog'
        aria-modal='true'
      >
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center'>
          <div
            className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
            aria-hidden='true'
          ></div>

          <span className='hidden' aria-hidden='true'>
            &#8203;
          </span>

          <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all '>
            <div className='bg-white px-4 pt-5 pb-4'>
              <div className='flex'>
                <div className='flex-1 text-left'>
                  <button
                    type='button'
                    className='cursor-pointer text-black opacity-50 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
                    onClick={() => props.onClickHandler(false)}
                  >
                    <i className='fas fa-arrow-left'></i>
                  </button>
                </div>
                <div className='flex-1 text-right'>
                  <button
                    type='button'
                    className='cursor-pointer text-black opacity-50 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
                    onClick={() => setEnableDelete(true)}
                  >
                    <i className='far fa-trash-alt'></i>
                  </button>
                </div>
              </div>
              <div className='mt-3'>
                <form className='flex flex-col'>
                  <span className='text-sm text-left'>タイトル</span>
                  <input
                    className='appearance-none border rounded-l py-2 px-3 text-gray-700 border-gray-200 leading-tight mb-4'
                    id='taskTitle'
                    value={props.title}
                    type='text'
                    placeholder={props.title}
                    // onChange={(event) => {
                    //   // setError('');
                    //   setNewTaskText(event.target.value);
                    // }}
                  />
                  <span className='text-sm text-left'>説明</span>
                  <textarea
                    className='appearance-none border rounded-l py-2 px-3 text-gray-700 border-gray-200 leading-tight mb-4'
                    id='taskDescription'
                    value={props.title}
                    placeholder={props.title}
                  />
                  <button
                    type='button'
                    className='w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700'
                  >
                    タスクを更新する
                  </button>
                </form>
              </div>
            </div>
            <div className='bg-gray-50 px-4 py-3 border-t-2'>
              <div className='mb-2'>
                <p className='text-sm text-gray-500'>
                  タスクの削除を行うと復元することはできません。削除したい場合は右上の
                  <i className='far fa-trash-alt' />
                  をクリックしてから「削除を行う」ボタンをクリックしてください。
                </p>
              </div>

              <button
                type='button'
                disabled={!enableDelete}
                className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 disabled:bg-gray-500 disabled:line-through text-base font-medium text-white'
                onClick={() => deleteTodo(props.id)}
              >
                削除を行う
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TaskModal;
