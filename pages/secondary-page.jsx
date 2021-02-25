import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Second page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Second page
        </h1>

        <p className={styles.description}>
          I'm a second page for demo purposes
        </p>

      </main>
    </div>
  )
}
