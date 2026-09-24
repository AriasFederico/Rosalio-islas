import logo from '../../../assets/logo.png';
import { buildWaLink } from '../../../utils/message';

export const header_data = {
  // en caso de usar logo
  logo: {
    src: logo,
    href: '/',
    alt: 'FIR FISIOTERAPIA',
    text: 'FIR FISIOTERAPIA',
    text_secondary: 'by Rosario Islas',
  },

  nav_links: [
    { id: 'services', label: 'Servicios', href: '#services' },
    { id: 'reviews', label: 'Sobre mí', href: '#team' },
    { id: 'location', label: 'Ubicación', href: '#location' },
  ],

  cta: {
    icon: 'message',
    label: 'Reserva de turnos',
    href: buildWaLink('Buenas Rosario!, quisiera reservar un turno.'),
    size: 'sm',
    variant: 'secondary',
  },
};
