import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ToDoList App</title>
        <meta name="author" content="Guillaume-FAURE" />
        <meta name="description" content="ToDo list app with local storage of information created with next.js" />
        <meta  charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          ToDoList App
        </h1>
        <h1 className={styles.title}>
          <Link href="/settings">
            <a>Go to settings</a>
          </Link>
        </h1>
        <div className={`${styles.addButton} ${styles.mainButton}`}>
        </div>
        <div className={styles.todolist}>
          <a href="https://nextjs.org/docs" className={styles.todoContainer}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.todoContainer}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.todoContainer}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.todoContainer}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home