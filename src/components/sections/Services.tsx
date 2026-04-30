import Link from 'next/link'
import { services } from '@/lib/services'
import { illustrations } from '@/lib/illustrations'
import styles from './Services.module.scss'

export default function Services() {
  return (
    <section id="servicios" className={styles.section}>
      <div className="wrapper">
        <div className={styles.header}>
          <p className={styles.label}>Líneas de Servicio</p>
          <h2 className={styles.title}>
            Seis áreas de <em>especialización</em>
          </h2>
        </div>
      </div>

      <div className="wrapper">
        <div className={styles.grid}>
          {services.map((service, i) => {
            const isLight = i % 2 !== 0
            return (
              <Link
                key={service.slug}
                href={`/servicios/${service.slug}`}
                className={`${styles.card}${isLight ? ` ${styles.light}` : ''}`}
              >
                <div
                  className={styles.illustration}
                  dangerouslySetInnerHTML={{
                    __html: illustrations[service.illustrationKey] ?? '',
                  }}
                />
                <div className={styles.overlay}>
                  <p className={styles.num}>{service.num}</p>
                  <h3 className={styles.cardTitle}>{service.shortTitle}</h3>
                  <p className={styles.years}>{service.years}</p>
                  <span className={styles.arrow}>→</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
