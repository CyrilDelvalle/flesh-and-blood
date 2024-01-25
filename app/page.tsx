import styles from './page.module.css'
import Welcome from './components/pages/Welcome';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Welcome />
      </div>
    </main>
  )
}
