import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Las TIC
        </h1>
        <h2 className={styles.textcenter}>en el Gobierno Electrónico</h2>

        <p className={styles.description}>
          Las TIC no son buenas o malas en sí mismas, sino que son los usuarios quienes pueden hacer un uso bueno o malo de estas.
        </p>

        <div className={styles.grid}>
          <Link href="/introduccion" className={styles.card}>
            <h2>Introducción &rarr;</h2>
          </Link>

          <Link href="/ventajas" className={styles.card}>
            <h2>Ventajas &rarr;</h2>
          </Link>

          <Link href="/desventajas" className={styles.card}>
            <h2>Desventajas &rarr;</h2>
          </Link>

          <Link
            href="/impacto"
            className={styles.card}
          >
            <h2>Impacto &rarr;</h2>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        Hecho por {' '} Caribito ^_^
      </footer>
    </div>
  )
}
