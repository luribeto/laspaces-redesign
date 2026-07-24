import Image from 'next/image'
import styles from './About.module.scss'

export default function About() {
  return (
    <section id="nosotros" className={styles.section}>
      <div className="wrapper">
        <div className={styles.grid}>
          <div className={styles.bio}>
            <p className={styles.label}>Sobre Nosotros</p>
            <h2 className={styles.name}>Lina Rondón Daza</h2>
            <div className={styles.text}>
              <p>
                Psicóloga con más de {new Date().getFullYear() - 2003} años de experiencia especializada
                en atención psicosocial, evaluación del daño psicosocial y
                construcción de paz en contextos de conflicto armado y
                violaciones a los derechos humanos.
              </p>
              <p>
                Ha acompañado procesos con víctimas del conflicto armado
                colombiano, instituciones del Estado, organizaciones de la
                sociedad civil y organismos internacionales en Colombia y
                México. Su trabajo integra perspectivas individuales,
                familiares y comunitarias en la comprensión del sufrimiento
                humano y las vías de reparación.
              </p>
              <p>
                Fundadora de Las Paces, ha formado a más de 3.000 profesionales
                en la intersección entre salud mental, derechos humanos y
                justicia transicional, desarrollando metodologías propias que
                hoy son referente en el campo.
              </p>
            </div>
          </div>

          <div className={styles.photoWrap}>
            <div className={styles.frame}>
              <div className={styles.photo}>
                <Image
                  src="/images/lina-photo.png"
                  alt="Lina Rondón Daza"
                  fill
                  sizes="(max-width: 900px) 320px, 380px"
                />
              </div>
              <div className={styles.caption}>
                <span className={styles.captionName}>Lina Rondón Daza</span>
                <span className={styles.captionRole}>
                  Psicóloga Social · Fundadora
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
