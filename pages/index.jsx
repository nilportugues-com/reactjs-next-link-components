import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { NextDocsLink, NextHomeLink, NextLearnLink } from '../components/Links/NextLinks'
import { GithubExamplesLink } from '../components/Links/GithubLink'
import { VercelDeployLink, VercelHomepageLink } from '../components/Links/VercelLinks'
import { SecondPageLink } from '../components/Links/InternalLinks'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <NextHomeLink>Next.js!</NextHomeLink>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <SecondPageLink className={styles.card}>
            <h3>Second Page &rarr;</h3>
            <p>This is a second page</p>
          </SecondPageLink>

          <NextDocsLink className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </NextDocsLink>

          <NextLearnLink className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </NextLearnLink>

          <GithubExamplesLink className={styles.card}>
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </GithubExamplesLink>

          <VercelDeployLink>
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </VercelDeployLink>
        </div>
      </main>

      <footer className={styles.footer}>
        <VercelHomepageLink>
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </VercelHomepageLink>
      </footer>
    </div>
  )
}
