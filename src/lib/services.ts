export interface Service {
  slug: string
  num: string
  title: string
  shortTitle: string
  years: string
  description: string
  longDescription: string[]
  backImg: string
  previewImg: string
  illustrationKey: string
}

export const services: Service[] = [
  {
    slug: 'dano',
    num: '01',
    title: 'Daño Psicosocial',
    shortTitle: 'Daño Psicosocial',
    years: '19 años',
    description:
      'Evaluación y documentación del daño psicosocial en contextos de violaciones a derechos humanos y conflicto armado.',
    longDescription: [
      'La evaluación del daño psicosocial es un proceso especializado que permite documentar de manera rigurosa las afectaciones emocionales, relacionales y sociales que sufren las personas víctimas de violaciones a los derechos humanos.',
      'Nuestro enfoque integra perspectivas individuales, familiares y comunitarias, reconociendo que el daño no solo afecta a las personas de manera aislada sino que impacta el tejido social y las redes de apoyo.',
      'Contamos con más de 19 años de experiencia trabajando con víctimas del conflicto armado, desplazamiento forzado, violencia sexual y otras formas de violencia sistemática, habiendo acompañado procesos en Colombia, México y otros países de América Latina.',
    ],
    backImg: '/images/back-dano.png',
    previewImg: '/portfolio/in-dano.png',
    illustrationKey: 'danos',
  },
  {
    slug: 'protocolos',
    num: '02',
    title: 'Protocolos de Atención Psicosocial',
    shortTitle: 'Protocolos',
    years: '17 años',
    description:
      'Diseño e implementación de protocolos institucionales para la atención psicosocial a personas víctimas.',
    longDescription: [
      'Los protocolos de atención psicosocial son herramientas fundamentales para que las instituciones puedan brindar una respuesta efectiva, ética y culturalmente pertinente a las necesidades de las personas que han vivido situaciones traumáticas.',
      'Diseñamos protocolos adaptados a contextos específicos: entidades del Estado, organizaciones de la sociedad civil, instituciones de salud y organismos internacionales. Cada protocolo incorpora enfoque diferencial de género, edad, étnico y territorial.',
      'Llevamos 17 años desarrollando y actualizando marcos de referencia para la atención psicosocial, con presencia en más de 15 departamentos de Colombia y en México.',
    ],
    backImg: '/images/back-protocolos.png',
    previewImg: '/portfolio/in-protocolos.png',
    illustrationKey: 'protocolos',
  },
  {
    slug: 'agotamiento',
    num: '03',
    title: 'Agotamiento por Empatía',
    shortTitle: 'Agotamiento',
    years: '12 años',
    description:
      'Prevención y manejo del agotamiento por empatía en equipos que trabajan con poblaciones vulnerables y víctimas.',
    longDescription: [
      'El agotamiento por empatía, también conocido como fatiga por compasión, es una consecuencia frecuente en profesionales que trabajan cotidianamente con el sufrimiento humano. Reconocer y atender este fenómeno es esencial para sostener equipos comprometidos y efectivos.',
      'Ofrecemos procesos formativos y de acompañamiento para equipos de salud mental, trabajadores sociales, operadores judiciales, defensores de derechos humanos y cualquier profesional que brinde atención directa a personas en situación de vulnerabilidad.',
      'Nuestros programas combinan marcos teóricos actualizados con herramientas prácticas de autocuidado, regulación emocional y construcción de resiliencia organizacional.',
    ],
    backImg: '/images/back-estrategias.png',
    previewImg: '/portfolio/in-agotamiento.png',
    illustrationKey: 'agotamiento',
  },
  {
    slug: 'mediacion',
    num: '04',
    title: 'Mediación y Diálogo',
    shortTitle: 'Mediación',
    years: '14 años',
    description:
      'Procesos de mediación y facilitación del diálogo en contextos de conflicto social, comunitario e institucional.',
    longDescription: [
      'La mediación y la facilitación del diálogo son herramientas poderosas para transformar conflictos y construir acuerdos sostenibles. Aplicamos enfoques restaurativos que ponen en el centro la dignidad de las personas y la posibilidad de reparación.',
      'Acompañamos procesos de diálogo en contextos comunitarios, institucionales y de justicia transicional. Nuestro equipo tiene experiencia en la facilitación de espacios de encuentro entre víctimas e instituciones, comunidades en conflicto y actores con intereses divergentes.',
      'Llevamos 14 años desarrollando metodologías de mediación adaptadas al contexto latinoamericano, combinando marcos de referencia internacionales con saberes y prácticas locales.',
    ],
    backImg: '/images/back-mediacion.png',
    previewImg: '/portfolio/in-mediacion.png',
    illustrationKey: 'mediacion',
  },
  {
    slug: 'formacion',
    num: '05',
    title: 'Formación Especializada',
    shortTitle: 'Formación',
    years: '19 años',
    description:
      'Programas de formación especializada en atención psicosocial, derechos humanos y justicia transicional.',
    longDescription: [
      'La formación especializada es el corazón de nuestro trabajo. Durante 19 años hemos desarrollado currículos y metodologías pedagógicas que forman a profesionales en la intersección entre salud mental, derechos humanos y construcción de paz.',
      'Ofrecemos diplomados, talleres, seminarios y procesos de formación continua para instituciones, organizaciones y grupos de profesionales. Nuestros contenidos se actualizan permanentemente para incorporar los avances en investigación y las lecciones aprendidas en campo.',
      'Hemos formado a más de 3.000 profesionales en Colombia y México, entre ellos operadores de justicia, personal de salud, defensores de derechos humanos, líderes comunitarios y funcionarios públicos.',
    ],
    backImg: '/images/back-formacion.png',
    previewImg: '/portfolio/in-formacion.png',
    illustrationKey: 'formacion',
  },
  {
    slug: 'asesorias',
    num: '06',
    title: 'Asesorías Institucionales',
    shortTitle: 'Asesorías',
    years: '19 años',
    description:
      'Consultoría y asesoría especializada a instituciones públicas, privadas y organismos internacionales.',
    longDescription: [
      'Las asesorías institucionales permiten acompañar a organizaciones en el diseño, implementación y evaluación de sus estrategias de atención psicosocial y construcción de paz.',
      'Trabajamos con entidades del Estado, organizaciones no gubernamentales, organismos internacionales y empresas privadas que buscan incorporar enfoques psicosociales en su quehacer institucional.',
      'Nuestra consultoría combina el rigor académico con la experiencia práctica acumulada durante 19 años de trabajo en contextos de alta complejidad, ofreciendo soluciones pertinentes y sostenibles.',
    ],
    backImg: '/images/back-asesorias.png',
    previewImg: '/portfolio/in-asesorias.png',
    illustrationKey: 'asesorias',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
