import Head from 'next/head'
import styles from '../styles/home.module.css'
import Task from '../components/task'



function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ToDoList App</title>
        <meta name="author" content="Guillaume-FAURE" />
        <meta name="description" content="ToDo list app with local storage of information created with next.js" />
        <meta  charSet="utf-8" />
        <link rel="icon" href="" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          ToDoList App
        </h1>
        <div className={styles.tasks}>
          <Task>
            <Task></Task>
            <Task>
              <Task></Task>  
            </Task>
          </Task>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}


export default Home