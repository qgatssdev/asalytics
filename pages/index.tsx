import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import Asalytics from '../components/asalytics';

export default function Home() {
 // 
  return (
    <div className={styles.container}>
      <Head>
        <title>Asalytics</title>
        <meta name="description" content="Asalytics coding challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Image src="/Header-logo.svg" alt="logo" width={150} height={62.94} />
        <button className={styles.header__button}>ANALYSE ASAs</button>
      </header>
      <main>
        <div className={styles.heading}>
          <h1>List of Algorand Standard Assets on ASAlytics</h1>
        </div>
        <Asalytics />
      </main>
    </div>
  );
}
