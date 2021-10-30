import Head from 'next/head';
import TaskCard from '../components/TaskCard';
import TaskInputForm from '../components/TaskInputForm';

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
      <TaskInputForm />
    </main>
  </div>
);

export default Home;
