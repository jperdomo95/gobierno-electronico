import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <header>
          <p className={styles.header}>
            REPÚBLICA BOLIVARIANA DE VENEZUELA <br/>
            MINISTERIO DEL PODER POPULAR DE ECONOMÍA FINANZAS Y COMERCIO EXTERIOR<br/>
            ESCUELA NACIONAL DE ADMINISTRACIÓN Y HACIENDA PÚBLICA<br/>
            DIRECCIÓN DE POSTGRADO Y ADIESTRAMIENTO<br/>
            ESPECIALIZACIÓN EN CONTROL DE LA GESTIÓN PÚBLICA<br/>
            GOBIERNO ELECTRÓNICO SECCIÓN 83
          </p>
        </header>
        <h4>
          LAS TIC EN EL GOBIERNO ELECTRÓNICO
        </h4>

        {/* <p className={styles.description}>
          Las TIC no son buenas o malas en sí mismas, sino que son los usuarios quienes pueden hacer un uso bueno o malo de estas.
        </p> */}

        <div className={styles.credits}>
          <div>Facilitador: Adrián Castro</div>
          <div>
            <p>Participante:</p>
            <p>Xavier Mora <br />C.I 22904725</p>
          </div>
        </div>

        <p>Caracas, Noviembre 2022</p>

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
