import React, { Dispatch, SetStateAction, useState } from 'react';

/**
 * TaskModalのProps
 */
export interface TaskModalProps {
  /** タスク名 */
  title: string;
  /** タスクのid */
  id?: number;
  onClickHandler: Dispatch<SetStateAction<boolean>>;
}

/**
 * TaskModalコンポーネント
 * 1タスクを表すコンポーネント
 *
 * @param props TaskModalのProps
 * @returns TaskModalコンポーネント
 */
const TaskModal: React.FC<TaskModalProps> = (props) => {
  const [enableDelete, setEnableDelete] = useState(false);
  return (
    <React.Fragment>
      <div
        className='fixed z-10 inset-0 overflow-y-auto'
        aria-labelledby='modal-title'
        role='dialog'
        aria-modal='true'
      >
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center'>
          {/* <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    --> */}
          <div
            className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
            aria-hidden='true'
          ></div>

          {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
          <span className='hidden' aria-hidden='true'>
            &#8203;
          </span>

          {/* <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    --> */}
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
                    //   onClick={() => setOpen(!isOpen)}
                  >
                    <i className='far fa-trash-alt'></i>
                  </button>
                </div>
              </div>
              {/* <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100'>
                <svg
                  className='h-6 w-6 text-red-600'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                  />
                </svg>
              </div> */}
              <div className='mt-3'>
                <form className='flex flex-col'>
                  <span className='text-sm text-left'>タイトル</span>
                  <input
                    className='appearance-none border rounded-l py-2 px-3 text-gray-700 border-gray-200 leading-tight mb-4'
                    id='taskTitle'
                    // value={newTaskText}
                    type='text'
                    placeholder={props.title}
                    // onChange={(event) => {
                    //   // setError('');
                    //   setNewTaskText(event.target.value);
                    // }}
                  />
                  <span className='text-sm text-left'>説明</span>
                  <input
                    className='appearance-none border rounded-l py-2 px-3 text-gray-700 border-gray-200 leading-tight mb-4'
                    id='taskDescription'
                    type='text'
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
                onClick={() => props.onClickHandler(false)}
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
