import Link from 'next/link'
import styles from './page.module.css'

export default function Page() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link href="/">&larr; Volver al inicio</Link>
        <h1 className={styles.title}>
          Ventajas
        </h1>
        <h2>En la educación</h2>
        <ul>
          <li>Acceso a diversas fuentes de información.</li>
          <li>Comunicación en tiempo real.</li>
          <li>Mayor Interacción.</li>
          <li>Desarrollo de nuevas habilidades fuera del currículo oficial.</li>
          <li>Aprendizaje personalizado.</li>
        </ul>
        <h2>En la Sociedad</h2>
        <ul>
          <li>Eficiencia en la toma de decisiones.</li>
          <li>Nuevas modalidades de trabajo.</li>
          <li>Nuevas modalidades de crecimiento.</li>
        </ul>
        <h2>En el hogar</h2>
        <ul>
          <li>Facilitan la comunicación.</li>
          <li>Permiten el acceso a la educación y el trabajo.</li>
        </ul>
        <Link href="/">Volver al inicio</Link>
      </main>
    </div>
  )
}
