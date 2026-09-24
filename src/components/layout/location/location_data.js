import { buildWaLink } from '../../../utils/message';

export const location_data = {
  title: 'Dónde estamos',
  subtitle:
    'Visítanos en nuestro consultorio o solicita tu atención médica a domicilio.',
  coordenates: `20°03'58.1"N 98°43'49.9"W`,
  items: [
    {
      icon: 'location',
      name: 'Dirección',
      info: 'Pachuca de Soto, Hidalgo (Atención en consultorio y servicio a domicilio)',
    },
    {
      icon: 'clock',
      name: 'Horarios',
      info: 'Lunes a Viernes: Previa cita | Sábados: Previa cita',
    },
    { icon: 'tel', name: 'Teléfono', info: '+5217711853601' },
  ],
  ctas: [
    {
      label: 'Google Maps',
      href: 'https://maps.google.com/?q=20.066139,-98.730528',
      variant: 'secondary',
    },
    {
      label: 'Reservar turno',
      href: buildWaLink('Hola Rosario! quisiera reservar un turno.'),
      variant: 'primary',
    },
  ],
};
