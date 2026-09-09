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
};
