'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.scss'

const logoSrc = '/logo.svg'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeDrawer = () => setOpen(false)

  return (
    <>
      <nav className={`${styles.nav}${scrolled ? ` ${styles.scrolled}` : ''}`}>
        <div className={`wrapper ${styles.inner}`}>
          <Link href="/" className={styles.logo} onClick={closeDrawer}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc as string} alt="Las Paces" height={38} />
          </Link>

          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <button
            className={`${styles.ham}${open ? ` ${styles.open}` : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`${styles.drawer}${open ? ` ${styles.open}` : ''}`}
        aria-hidden={!open}
      >
        <button className={styles.drawerClose} onClick={closeDrawer}>
          Cerrar
        </button>
        <ul className={styles.drawerLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeDrawer}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
