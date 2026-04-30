'use client'

import { useState, useRef, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.scss'

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? ''
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ''
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!formRef.current) return

    setSending(true)
    setError(false)

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      setSuccess(true)
      formRef.current.reset()
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contacto" className={styles.section}>
      <div className="wrapper">
        <div className={styles.grid}>
          {/* Form side */}
          <div className={styles.formSide}>
            <p className={styles.label}>Contacto</p>
            <h2 className={styles.title}>
              Hablemos sobre <em>tu proyecto</em>
            </h2>

            <form
              ref={formRef}
              className={styles.form}
              onSubmit={handleSubmit}
              noValidate
            >
              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label htmlFor="from_name">Nombre</label>
                  <input
                    id="from_name"
                    name="from_name"
                    type="text"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="from_phone">Teléfono</label>
                  <input
                    id="from_phone"
                    name="from_phone"
                    type="tel"
                    placeholder="+57 300 000 0000"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="from_email">Correo electrónico</label>
                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  placeholder="tu@correo.com"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                  required
                />
              </div>

              {error && (
                <p
                  style={{
                    color: 'var(--earth-light)',
                    fontFamily: 'var(--ff-body)',
                    fontSize: '14px',
                  }}
                >
                  Hubo un error al enviar el mensaje. Por favor intenta de
                  nuevo o contáctanos directamente por correo.
                </p>
              )}

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={sending}
              >
                {sending ? 'Enviando…' : 'Enviar mensaje'}
              </button>
            </form>
          </div>

          {/* Info sidebar */}
          <div className={styles.infoSide}>
            <p className={styles.bigNumber}>19</p>
            <p className={styles.bigLabel}>Años de experiencia</p>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <span className={styles.contactItemLabel}>Teléfono</span>
                <a
                  href="tel:+573158369832"
                  className={styles.contactItemValue}
                >
                  +57 315 836 9832
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactItemLabel}>Correo</span>
                <a
                  href="mailto:contacto@laspaces.co"
                  className={styles.contactItemValue}
                >
                  contacto@laspaces.co
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactItemLabel}>País</span>
                <span
                  className={styles.contactItemValue}
                  style={{ cursor: 'default' }}
                >
                  Colombia · México
                </span>
              </div>
            </div>

            <div className={styles.socials}>
              <a
                href="https://www.facebook.com/laspaces"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Facebook"
              >
                Fb
              </a>
              <a
                href="https://twitter.com/laspaces"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Twitter / X"
              >
                Tw
              </a>
              <a
                href="https://www.youtube.com/@laspaces"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="YouTube"
              >
                Yt
              </a>
            </div>
          </div>
        </div>
      </div>

      {success && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSuccess(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              onClick={() => setSuccess(false)}
              aria-label="Cerrar"
            >
              Cerrar
            </button>
            <h3 id="modal-title" className={styles.modalTitle}>
              ¡Mensaje recibido!
            </h3>
            <p className={styles.modalText}>
              Gracias por contactarte con Las Paces. Revisaremos tu mensaje y
              te responderemos a la brevedad posible.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
