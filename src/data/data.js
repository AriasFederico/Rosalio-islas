// imagenes con nombre de profesionales
//

const clinicInfo = {
  name: 'lumen',
  phone_number: '5491234567',
  hours: '',
  location: '',
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
      { id: 'about', label: 'Ubicación', href: '#about' },
      { id: 'location', label: 'Opiniones', href: '#location' },
    ],
    cta: {
      icon: 'message',
      label: 'Reserva de turnos',
      href: '#',
      size: 'sm',
      variant: '',
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
          icon: 'icon',
          label: 'Consultar por este servicio',
          href: '#',
          variant: 'secondary',
        },
        delay: '.15',
      },
      {
        icon: 'icon',
        id: 2,
        title: 'Título del servicio',
        desc: 'Descripción de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cta: {
          icon: 'icon',
          label: 'Consultar por este servicio',
          href: '#',
          variant: 'secondary',
        },
        delay: '.15',
      },
      {
        icon: 'icon',
        id: 3,
        title: 'Título del servicio',
        desc: 'Descripción de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cta: {
          icon: 'icon',
          label: 'Consultar por este servicio',
          href: '#',
          variant: 'secondary',
        },
        delay: '.15',
      },
      {
        icon: 'icon',
        id: 4,
        title: 'Título del servicio',
        desc: 'Descripción de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cta: {
          icon: 'icon',
          label: 'Consultar por este servicio',
          href: '#',
          variant: 'secondary',
        },
        delay: '.25',
      },
      {
        icon: 'icon',
        id: 5,
        title: 'Título del servicio',
        desc: 'Descripción de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cta: {
          icon: 'icon',
          label: 'Consultar por este servicio',
          href: '#',
          variant: 'secondary',
        },
        delay: '.25',
      },
      {
        icon: 'icon',
        id: 6,
        title: 'Título del servicio',
        desc: 'Descripción de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cta: {
          icon: 'icon',
          label: 'Consultar por este servicio',
          href: '#',
          variant: 'secondary',
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
          icon: 'icon',
          label: 'Consultar por este servicio',
          href: '#',
          variant: 'secondary',
        },
        delay: '.15',
      },
      {
        icon: 'icon',
        id: 8,
        title: 'Título del servicio',
        desc: 'Descripción de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cta: {
          icon: 'icon',
          label: 'Consultar por este servicio',
          href: '#',
          variant: 'secondary',
        },
        delay: '.15',
      },
      {
        icon: 'icon',
        id: 9,
        title: 'Título del servicio',
        desc: 'Descripción de referencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cta: {
          icon: 'icon',
          label: 'Consultar por este servicio',
          href: '#',
          variant: 'secondary',
        },
        delay: '.15',
      },
    ],
    cta: { icon: '', label: 'Mostrar más', variant: 'secondary' },
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
          icon: 'icon',
          label: 'Reservar turno',
          href: '#',
          variant: 'secondary',
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
          icon: 'icon',
          label: 'Reservar turno',
          href: '#',
          variant: 'secondary',
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
          icon: 'icon',
          label: 'Reservar turno',
          href: '#',
          variant: 'secondary',
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
};
