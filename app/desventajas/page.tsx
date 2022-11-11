import Link from 'next/link'
import styles from './page.module.css'

export default function Page() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link href="/">&larr; Volver al inicio</Link>
        <h1 className={styles.title}>
          Desventajas
        </h1>
        <h2>En la educación</h2>
        <ul>
          <li>Riesgo de desigualdad y exclusión.</li>
          <li>Pueden ser una fuente de distracción.</li>
          <li>Acceso a información de baja calidad.</li>
          <li>Disminuyen las habilidades manuales.</li>
        </ul>
        <h2>En la Sociedad</h2>
        <ul>
          <li>Peligro de exposición de datos personales.</li>
          <li>Acceso a información falsa.</li>
          <li>Exclusión y desigualdad.</li>
        </ul>
        <h2>En las empresas</h2>
        <ul>
          <li>Reducción de puestos de trabajo.</li>
          <li>Riesgo de ciberataques.</li>
        </ul>
        <h2>En el hogar</h2>
        <ul>
          <li>Menos interacción familiar.</li>
          <li>Exposición a contenido inapropiado.</li>
        </ul>
      </main>
    </div>
  )
}
