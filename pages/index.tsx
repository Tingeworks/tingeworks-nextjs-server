import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tingeworks</title>
        <meta name="description" content="Tingeworks - The Web & Native App Factory" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a style={{ color: "rgb(226 62 90)" }} href="https://web.facebook.com/tingeworks">Tingeworks!</a>
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>Under Construction</code>
        </p>
      </main>
    </div>
  )
}
