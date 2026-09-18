// imagenes con nombre de profesionales
//

const clinicInfo = {
  name: 'lumen',
  phone_number: '5491234567',
  hours: 'Lun a Vie: 9-20 hs · Sáb: 9-13 hs',
  location: 'Dirección de referencia 1234, Ciudad',
};

const { name, phone_number } = clinicInfo;

const buildWaLink = (message) =>
  `https://wa.me/${phone_number}?text=${encodeURIComponent(message)}`;

// data estatica
export const landing_data = {
  header: {
    logo: {
      // en caso de usar logo
      src: '',
      href: '/',
      alt: clinicInfo.name,
      text: clinicInfo.name,
    },

    nav_links: [
      { id: 'services', label: 'Servicios', href: '#services' },
      { id: 'reviews', label: 'Opiniones', href: '#reviews' },
      { id: 'location', label: 'Ubicación', href: '#location' },
    ],
    cta: {
      icon: 'message',
      label: 'Reserva de turnos',
      href: '#',
      size: 'sm',
      variant: 'secondary',
    },
  },

  hero: {
    badge: 'Texto de referencia para el badge.',
    title: 'Título de tu consultorio.',
    cards: [
      {
        id: 1,
        icon: 'icon',
        title: 'Titulo de la tarjeta',
        text: 'Descripción de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cta: {
          icon: '',
          label: 'Texto del botón',
          href: '#',
          variant: 'secondary',
        },
        // delay de la animacion motion
        delay: '.15',
      },
      {
        id: 2,
        icon: 'icon',
        title: 'Titulo de la tarjeta',
        text: 'Descripción de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cta: {
          icon: '',
          label: 'Texto del botón',
          href: '#',
          variant: 'secondary',
        },
        // delay de la animacion motion
        delay: '.25',
      },
    ],
  },

  services: {
    title: 'Servicios',
    subtitle: 'Subtítulo de referencia del contenido.',

    // cards
    items: [
      {
        icon: 'icon',
        id: 1,
        title: 'Título del servicio',
        desc: 'Descripción de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cta: {
          icon: 'message',
          label: 'Consultar por este servicio',
          href: '#',
        },
        delay: '.15',
      },
      {
        icon: 'icon',
        id: 2,
        title: 'Título del servicio',
        desc: 'Descripción de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cta: {
          icon: 'message',
          label: 'Consultar por este servicio',
          href: '#',
        },
        delay: '.15',
      },
      {
        icon: 'icon',
        id: 3,
        title: 'Título del servicio',
        desc: 'Descripción de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cta: {
          icon: 'message',
          label: 'Consultar por este servicio',
          href: '#',
        },
        delay: '.15',
      },
      {
        icon: 'icon',
        id: 4,
        title: 'Título del servicio',
        desc: 'Descripción de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cta: {
          icon: 'message',
          label: 'Consultar por este servicio',
          href: '#',
        },
        delay: '.25',
      },
      {
        icon: 'icon',
        id: 5,
        title: 'Título del servicio',
        desc: 'Descripción de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cta: {
          icon: 'message',
          label: 'Consultar por este servicio',
          href: '#',
        },
        delay: '.25',
      },
      {
        icon: 'icon',
        id: 6,
        title: 'Título del servicio',
        desc: 'Descripción de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cta: {
          icon: 'message',
          label: 'Consultar por este servicio',
          href: '#',
        },
        delay: '.25',
      },

      // MOTRAR MAS ///////////////////////////////////////////////////////////////////////////////////

      {
        icon: 'icon',
        id: 7,
        title: 'Título del servicio',
        desc: 'Descripción de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cta: {
          icon: 'message',
          label: 'Consultar por este servicio',
          href: '#',
          variant: 'tertiary',
        },
        delay: '.15',
      },
      {
        icon: 'icon',
        id: 8,
        title: 'Título del servicio',
        desc: 'Descripción de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cta: {
          icon: 'message',
          label: 'Consultar por este servicio',
          href: '#',
          variant: 'tertiary',
        },
        delay: '.15',
      },
      {
        icon: 'icon',
        id: 9,
        title: 'Título del servicio',
        desc: 'Descripción de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cta: {
          icon: 'message',
          label: 'Consultar por este servicio',
          href: '#',
          variant: 'tertiary',
        },
        delay: '.15',
      },
    ],
    cta: { icon: '', label: 'Mostrar más', variant: 'tertiary' },
  },

  team: {
    title: 'Profesionales',
    subtitle: 'Subtítulo de referencia del contenido.',
    items: [
      {
        id: 2,
        image: {
          src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
          alt: 'Profesional',
        },
        name: 'Lic. Nombre Apellido',
        speciality: 'Rol del profesional',
        cta: {
          icon: 'message',
          label: 'Reservar turno',
          href: '#',
        },
      },
      {
        id: 3,
        image: {
          src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
          alt: 'Profesional',
        },
        name: 'Lic. Nombre Apellido',
        speciality: 'Rol del profesional',
        cta: {
          icon: 'message',
          label: 'Reservar turno',
          href: '#',
        },
      },
      {
        id: 4,
        image: {
          src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80',
          alt: 'Profesional',
        },
        name: 'Lic. Nombre Apellido',
        speciality: 'Rol del profesional',
        cta: {
          icon: 'message',
          label: 'Reservar turno',
          href: '#',
        },
      },
    ],
  },

  about: {
    title: 'Consultorio',
    subtitle: 'Subtítulo de referencia del contenido.',
    slides: [
      {
        src: 'https://media.base44.com/images/public/6aa06bba015b4b49d1737659/4907e4d45_generated_image.png/v1/fill/w_511,h_319,al_c,q_90,usm_0.66_1.00_0.01,enc_webp,quality_auto/4907e4d45_generated_image.webp',
        alt: '2',
      },
      {
        src: 'https://media.base44.com/images/public/6aa06bba015b4b49d1737659/4ad7e40e5_generated_image.png/v1/fill/w_511,h_319,al_c,q_90,usm_0.66_1.00_0.01,enc_webp,quality_auto/4ad7e40e5_generated_image.webp',
        alt: '1',
      },
      {
        src: 'https://media.base44.com/images/public/6aa06bba015b4b49d1737659/09563da99_generated_image.png/v1/fill/w_511,h_319,al_c,q_90,usm_0.66_1.00_0.01,enc_webp,quality_auto/09563da99_generated_image.webp',
        alt: '4',
      },
      {
        src: 'https://media.base44.com/images/public/6aa06bba015b4b49d1737659/7716add0e_generated_image.png/v1/fill/w_511,h_319,al_c,q_90,usm_0.66_1.00_0.01,enc_webp,quality_auto/7716add0e_generated_image.webp',
        alt: '3',
      },
    ],
  },

  reviews_section: {
    badge: 'Opiniones de Google',
    title: 'Opiniones',
    stars: 5,
    rating: '0.0',
    text: '· 0 reseñas',

    items: [
      {
        id: 1,
        name: 'Nombre Apellido',
        rating: 5,
        review:
          'Opinión de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      },
      {
        id: 2,
        name: 'Nombre Apellido',
        rating: 5,
        review:
          'Opinión de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      },
      {
        id: 3,
        name: 'Nombre Apellido',
        rating: 5,
        review:
          'Opinión de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      },
    ],

    cta: {
      label: 'Ver todas las opiniones en Google',
      href: '', // link a google coments
      variant: '',
    },
  },

  cta_section: {
    title: 'Titulo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    cta: [
      {
        icon: 'message',
        label: 'Reservar turno',
        variant: 'secondary',
      },
      {
        icon: '',
        label: 'Ubicación',
        variant: '',
      },
    ],
  },

  faq_section: {
    title: 'Preguntas frecuentes',

    items: [
      {
        id: 1,
        quest: 'Pregunta de referencia',
        response:
          'Respuesta de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        quest: 'Pregunta de referencia',
        response:
          'Respuesta de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        quest: 'Pregunta de referencia',
        response:
          'Respuesta de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 4,
        quest: 'Pregunta de referencia',
        response:
          'Respuesta de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 5,
        quest: 'Pregunta de referencia',
        response:
          'Respuesta de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 6,
        quest: 'Pregunta de referencia',
        response:
          'Respuesta de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 7,
        quest: 'Pregunta de referencia',
        response:
          'Respuesta de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },

  coverage_section: {
    title: 'Obras sociales y prepagas',
    items: [
      'OSDE',
      'OMINT',
      'OSPJN',
      'SANCOR',
      'AVALIAN',
      'AMFFA',
      'OPDEA',
      'OSMISS',
    ],
  },

  location_section: {
    title: 'Dónde estamos',
    subtitle: 'Texto de referencia — reemplazá con la dirección real.',
    coordenates: `34°56'21.2"S 57°58'26.9"W`,
    items: [
      {
        icon: 'location',
        name: 'Dirección',
        info: clinicInfo.location,
      },
      {
        icon: 'clock',
        name: 'Horarios',
        info: clinicInfo.hours,
      },
      { icon: 'tel', name: 'Teléfono', info: clinicInfo.phone_number },
    ],
    ctas: [
      { label: 'Google Maps', href: '#', variant: 'secondary' },
      { label: 'Reservar turno', href: '#', variant: 'primary' },
    ],
  },

  footer: {
    logo: clinicInfo.name,
    cta: { icon: 'message', label: 'Reserva de turnos', variant: '' },

    rrss: [
      { icon: 'facebook', href: '#' },
      { icon: 'instagram', href: '#' },
    ],

    copyright: `© 2026 ${clinicInfo.name}. Todos los derechos reservados.`,
  },
};
