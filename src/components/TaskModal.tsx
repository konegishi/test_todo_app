import React, { Dispatch, SetStateAction } from 'react';

/**
 * TaskModalのProps
 */
export interface TaskModalProps {
  /** タスク名 */
  name?: string;
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
              <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
                {/* <!-- Heroicon name: outline/exclamation --> */}
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
              </div>
              <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                <h3
                  className='text-lg leading-6 font-medium text-gray-900'
                  id='modal-title'
                >
                  Deactivate account
                </h3>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Are you sure you want to deactivate your account? All of
                    your data will be permanently removed. This action cannot be
                    undone.
                  </p>
                </div>
              </div>
            </div>
            <div className='bg-gray-50 px-4 py-3'>
              <button
                type='button'
                className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white'
              >
                Deactivate
              </button>
              <button
                type='button'
                className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700'
                onClick={() => props.onClickHandler(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TaskModal;
