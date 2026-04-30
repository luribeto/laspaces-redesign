import Image from 'next/image'
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.bg}>
        <Image
          src="/images/back-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>

      <div className={styles.body}>
        <div className={`wrapper ${styles.content}`}>
          <p className={styles.eyebrow}>Consultoría Psicosocial</p>
          <h1 className={styles.title}>
            Construyendo
            <br />
            <em>paz</em> desde la
            <br />
            psicología social
          </h1>

          <div className={styles.footerBar}>
            <p className={styles.description}>
              19 años acompañando procesos de atención psicosocial, formación
              especializada y construcción de paz en Colombia y México.
            </p>
            <div className={styles.ctas}>
              <a href="#servicios" className={styles.btnEarth}>
                Ver Servicios
              </a>
              <a href="#contacto" className={styles.btnGhost}>
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
