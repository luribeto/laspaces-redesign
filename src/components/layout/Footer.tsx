import Link from 'next/link'
import styles from './Footer.module.scss'

const logoFooterSrc = '/logo-5-side-mono-cropped.svg'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`wrapper ${styles.inner}`}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoFooterSrc as string} alt="Las Paces" height={32} />
          </Link>
          <p className={styles.copy}>
            © {year} Las Paces — Todos los derechos reservados
          </p>
        </div>
        <a href="#inicio" className={styles.toTop}>
          ↑ Inicio
        </a>
      </div>
    </footer>
  )
}
