import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { services, getServiceBySlug } from '@/lib/services'
import { illustrations } from '@/lib/illustrations'
import styles from './page.module.scss'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return { title: 'Servicio no encontrado' }
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      images: [{ url: service.backImg }],
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) notFound()

  const currentIndex = services.findIndex((s) => s.slug === slug)
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null
  const nextService =
    currentIndex < services.length - 1 ? services[currentIndex + 1] : null

  const svgContent = illustrations[service.illustrationKey] ?? ''

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src={service.backImg}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div
          className={styles.heroIllustration}
          dangerouslySetInnerHTML={{ __html: svgContent }}
          aria-hidden="true"
        />

        <div className={`wrapper ${styles.heroContent}`}>
          <Link href="/#servicios" className={styles.backLink}>
            ← Todos los servicios
          </Link>
          <p className={styles.heroNum}>{service.num}</p>
          <h1 className={styles.heroTitle}>{service.title}</h1>
          <p className={styles.heroYears}>{service.years} de experiencia</p>
        </div>
      </section>

      {/* Content */}
      <section className={styles.content}>
        <div className="wrapper">
          <div className={styles.contentGrid}>
            <div className={styles.illustrationBlock}>
              <div
                className={styles.illustrationWrap}
                dangerouslySetInnerHTML={{ __html: svgContent }}
                aria-hidden="true"
              />
            </div>

            <div className={styles.textBlock}>
              <p className={styles.descriptionLabel}>Descripción</p>
              <h2 className={styles.descriptionTitle}>{service.description}</h2>
              <div className={styles.descriptionText}>
                {service.longDescription.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className={styles.ctaWrap}>
                <Link href="/#contacto" className={styles.ctaBtn}>
                  Solicitar información
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pagination */}
      <nav className={styles.pagination} aria-label="Navegación de servicios">
        <div className={`wrapper ${styles.paginationInner}`}>
          {prevService ? (
            <Link
              href={`/servicios/${prevService.slug}`}
              className={styles.paginationLink}
            >
              <span className={styles.paginationDir}>← Anterior</span>
              <span className={styles.paginationTitle}>
                {prevService.shortTitle}
              </span>
            </Link>
          ) : (
            <div />
          )}

          <span className={styles.paginationArrow} aria-hidden="true">
            ◆
          </span>

          {nextService ? (
            <Link
              href={`/servicios/${nextService.slug}`}
              className={`${styles.paginationLink}`}
              style={{ textAlign: 'right' }}
            >
              <span className={styles.paginationDir}>Siguiente →</span>
              <span className={styles.paginationTitle}>
                {nextService.shortTitle}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </>
  )
}
