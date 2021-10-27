import Head from 'next/head';
import Task from '../components/Task';

export const Home = (): JSX.Element => (
  <div className='container'>
    <Head>
      <title>Create Next App</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main className='bg-gray-100 flex flex-col min-h-screen'>
      <span>今日</span>
      <div className='flex-grow pb-4 px-4'>
        <Task title='買い物に行く！！！' />
        <Task title='買い物に行く！！！' />
        <Task title='買い物に行く！！！' />
      </div>
      {/* Card型 */}
      <div className='flex-grow pt-4 px-4'>
        <div className=' bg-white rounded-xl mb-4 shadow-lg p-2'>
          <h2 className='ml-2 font-semibold text-2xl text-blueGray-700 mb-2'>
            今日
          </h2>
          <div className='flex flex-row items-center border-t border-gray-200 m-2'>
            <input
              type='checkbox'
              className='h-5 w-5 rounded m-2 border-gray-300 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50 text-indigo-500'
            />
            <span className='text-xl text-blueGray-700'>買い物に行く</span>
          </div>
          <div className='flex flex-row items-center border-t border-gray-200 m-2'>
            <input
              type='checkbox'
              className='h-5 w-5 rounded m-2 border-gray-300 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50 text-indigo-500'
            />
            <span className='text-xl text-blueGray-700'>買い物に行く</span>
          </div>
          <div className='flex flex-row items-center border-t border-gray-200 m-2'>
            <input
              type='checkbox'
              className='h-5 w-5 rounded m-2 border-gray-300 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50 text-indigo-500'
            />
            <span className='text-xl text-blueGray-700'>買い物に行く</span>
          </div>
          <div className='flex flex-row items-center border-t border-gray-200 m-2'>
            <input
              type='checkbox'
              className='h-5 w-5 rounded m-2 border-gray-300 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50 text-indigo-500'
            />
            <span className='text-xl text-blueGray-700'>買い物に行く</span>
          </div>
        </div>
      </div>
      <div>
        <form className='bg-white rounded-t-xl shadow-lg p-2 flex flex-row'>
          <input
            className='appearance-none border rounded-l py-2 px-3 w-11/12 text-gray-700 border-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500'
            id='taskTitle'
            type='text'
            placeholder='新しいタスクの名前'
          />
          <button
            className='fas fa-plus flex-grow-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline'
            type='button'
          />
        </form>
      </div>
    </main>
  </div>
);

export default Home;
