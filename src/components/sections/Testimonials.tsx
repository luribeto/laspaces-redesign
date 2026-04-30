'use client'

import { useState, useEffect, useCallback } from 'react'
import Image, { StaticImageData } from 'next/image'
import t1 from '@/assets/blog/testimonio-1.jpg'
import t3 from '@/assets/blog/testimonio-3.png'
import t4 from '@/assets/blog/testimonio-4.png'
import t5 from '@/assets/blog/testimonio-5.png'
import t6 from '@/assets/blog/testimonio-6.png'
import t7 from '@/assets/blog/testimonio-7.png'
import styles from './Testimonials.module.scss'

interface Testimonial {
  img: StaticImageData
  name: string
  role: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    img: t1,
    name: 'Carolina Jiménez Sandoval',
    role: 'Presidenta, WOLA',
    quote:
      'El trabajo de Lina Rondón y Las Paces ha sido fundamental para comprender las dimensiones psicosociales del daño causado a las víctimas del conflicto armado en Colombia. Su rigor metodológico y su profundo compromiso ético son un referente indispensable para quienes trabajamos en derechos humanos en la región.',
  },
  {
    img: t7,
    name: 'Graciela Frias Ojinaga',
    role: 'Directora, Sentit Nobis México',
    quote:
      'La colaboración con Las Paces transformó nuestra forma de acompañar a sobrevivientes de violencia en México. Los protocolos de atención psicosocial desarrollados con Lina nos permitieron brindar una respuesta más integral, ética y culturalmente pertinente a las personas que más lo necesitan.',
  },
  {
    img: t3,
    name: 'Oscar Parra Vera',
    role: 'Magistrado, JEP',
    quote:
      'Las peritaciones de daño psicosocial realizadas por Lina Rondón han aportado elementos fundamentales para la comprensión judicial de los impactos del conflicto armado en las víctimas. Su expertise en la intersección entre psicología social y justicia transicional es un aporte invaluable para los procesos de verdad y reparación.',
  },
  {
    img: t4,
    name: 'Olga Lucía Gomez',
    role: 'Gerente, Criterios de Ruta',
    quote:
      'Trabajar con Las Paces nos cambió la perspectiva sobre el acompañamiento psicosocial. Lina tiene una capacidad única para transmitir conocimiento complejo de manera accesible, y los equipos que han pasado por sus procesos de formación lo demuestran en su práctica cotidiana.',
  },
  {
    img: t5,
    name: 'Paula Gaviria Betancur',
    role: 'Directora, Fundación COMPAZ',
    quote:
      'En 15 años de trabajo en construcción de paz, pocas personas han impactado tanto nuestra labor como Lina Rondón. Las Paces ha sido un aliado estratégico en la formación de nuestro equipo y en el desarrollo de enfoques psicosociales que realmente responden a las necesidades de las comunidades.',
  },
  {
    img: t6,
    name: 'Marcos Morales',
    role: 'Director, FORENPSIC',
    quote:
      'La formación especializada de Las Paces eleva los estándares de toda la disciplina. Lina Rondón combina excelencia académica con experiencia de campo, y esa combinación produce profesionales que realmente hacen diferencia en los procesos de atención a víctimas y construcción de paz.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const id = setInterval(next, 8000)
    return () => clearInterval(id)
  }, [next])

  return (
    <section id="testimonios" className={styles.section}>
      <div className="wrapper">
        <div className={styles.header}>
          <p className={styles.label}>Testimonios</p>
          <h2 className={styles.title}>
            Lo que dicen <em>quienes confían</em> en nuestro trabajo
          </h2>
        </div>

        <div className={styles.carouselWrap}>
          <div
            className={styles.track}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className={styles.slide} aria-hidden={i !== current}>
                <div className={styles.photo}>
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={140}
                    height={140}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.quoteBody}>
                  <blockquote className={styles.quote}>{t.quote}</blockquote>
                  <div className={styles.author}>
                    <span className={styles.authorName}>{t.name}</span>
                    <span className={styles.authorRole}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.controls}>
          <button
            className={styles.navBtn}
            onClick={prev}
            aria-label="Testimonio anterior"
          >
            ←
          </button>
          <div className={styles.dots} role="tablist">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot}${i === current ? ` ${styles.active}` : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Ir al testimonio ${i + 1}`}
                role="tab"
                aria-selected={i === current}
              />
            ))}
          </div>
          <button
            className={styles.navBtn}
            onClick={next}
            aria-label="Siguiente testimonio"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
