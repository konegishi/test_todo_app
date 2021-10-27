import Head from 'next/head';
import TaskCard from '../components/TaskCard';

export const Home = (): JSX.Element => (
  <div className='container'>
    <Head>
      <title>Create Next App</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main className='bg-gray-100 flex flex-col min-h-screen'>
      <TaskCard
        tasks={[
          { name: 'メール返信' },
          { name: 'OSS申請' },
          { name: 'SpringBootの環境構築' },
        ]}
      />
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
