import Link from 'next/link'
import styles from './page.module.css'

export default function Page() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link href="/">&larr; Volver al inicio</Link>
        <h1 className={styles.title}>
          Impacto
        </h1>
        <h2>En la educación</h2>
        <p>Desde la irrupción de Internet se ha generado todo tipo de expectativas respecto a su impacto en el ejercicio de la gobernabilidad, la política y la democracia. Para el Gobierno puede ser una enorme ventaja “debido a que aumenta la eficiencia en la gestión mediante la automatización de procesos y la integración informática de distintos servicios”, generando ahorros, transparencia y acercamiento a la ciudadanía.
        </p>
        <p>Así esta progresiva comunicación entre Estado y ciudadanos por medios electrónicos ha sido un componente novedoso del proceso de modernización del Estado; pero cabe advertir que lo nuevo no es el uso de la tecnología en sí, sino la posibilidad de abrir canales de comunicación cada día más directos para acercar a autoridades, funcionarios y ciudadanos. Es una nueva forma de mediación que afecta los esquemas tradicionales de representación.</p>
      </main>
    </div>
  )
}
