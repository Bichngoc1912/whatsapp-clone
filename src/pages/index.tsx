import Head from 'next/head';
import Image from 'next/image';
import styles from '@@/styles/Home.module.css';
import { Sidebar } from './components/Sidebar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>bngoc Chatapps Clone</title>
        <meta name="description" content="Generated by bngoc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
    </div>
  );
}
