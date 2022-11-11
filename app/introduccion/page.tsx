import Link from 'next/link'
import styles from './page.module.css'

export default function Page() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link href="/">&larr; Volver al inicio</Link>
        <h1 className={styles.title}>
          Introducción
        </h1>
        <p>Hoy en día, existe una Ley de Infogobierno y algunas normativas-decretos que promueven, entre muchas otras cosas, la simplificación de trámites. Sin embargo, esto no ha sido suficiente para que la mayor parte de la gestión que promueve el gobierno electrónico en Venezuela sea cada vez más eficaz. Por eso, si esta ley no se acompaña de otros actos normativos sobre los que se edifique el sistema, se puede estimular de nuevo la burocracia y la corrupción.
        </p>
        <p>Se hace necesario, entonces, que el Estado invierta cada vez más en renovaciones de licencias, tecnologías en software y hardware, así como acompañar este plan de un sistema adecuado de educación al ciudadano y de las autoridades, que les permitan a ambos familiarizarse en las gestiones a través de la red.</p>
        <p>Las TIC son Tecnologías de la Información y la Comunicación. Es decir, son todos los dispositivos creados para almacenar, transmitir, recibir y enviar información combinando redes telefónicas, audiovisuales e informáticas. Por ejemplo, un teléfono móvil, una computadora, un televisor, etc.</p>
        <p>Algunas ventajas de las TIC son, por ejemplo, el acceso a multitud de recursos para el aprendizaje y la información, así como la facilidad para realizar trámites y acceder a determinados servicios.</p>
      </main>
    </div>
  )
}
