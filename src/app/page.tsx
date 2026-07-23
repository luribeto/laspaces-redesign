import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Band from '@/components/sections/Band'
import About from '@/components/sections/About'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Las Paces',
  description:
    'Consultoría especializada en atención psicosocial, daño psicosocial, derechos humanos y construcción de paz.',
  url: 'https://laspaces.co',
  foundingDate: '2006',
  areaServed: ['Colombia'],
  founder: {
    '@type': 'Person',
    name: 'Lina Rondón Daza',
    jobTitle: 'Psicóloga Social',
  },
  serviceType: [
    'Evaluación de Daño Psicosocial',
    'Protocolos de Atención Psicosocial',
    'Agotamiento por Empatía',
    'Mediación y Diálogo',
    'Formación Especializada',
    'Asesorías Institucionales',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+57-320-343-3353',
    email: 'laspaces.sas@gmail.com',
    contactType: 'customer service',
    availableLanguage: 'Spanish',
  },
  sameAs: [
    'https://www.facebook.com/laspaces',
    'https://twitter.com/laspaces',
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Services />
      <Band />
      <About />
      <Testimonials />
      <Contact />
    </>
  )
}
