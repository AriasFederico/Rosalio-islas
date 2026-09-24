import profesional from '../../../assets/profesional.png';
import { buildWaLink } from '../../../utils/message';
export const team_data = {
  title: 'Conoce a tu Especialista',
  subtitle: 'Pasión, preparación y calidez humana al servicio de tu salud.',
  items: [
    {
      id: 1,
      image: {
        src: profesional,
        alt: 'Lic. Rosario Islas - Especialista en Fisioterapia y Neurorehabilitación',
      },
      name: 'Lic. Rosario Islas',
      speciality: 'Fisioterapia y Neurorehabilitación',
      cta: {
        icon: 'message',
        label: 'Reservar turno',
        href: buildWaLink('Hola Rosario! quisiera reservar un turno.'),
      },
    },
  ],

  about: [
    '¡Hola! Soy Rosario Islas, Licenciada en Terapia Física por la UPP Hidalgo y Maestra en Neurorehabilitación egresada de CMUCH. Cuento con experiencia en los ámbitos deportivo, pediátrico y neurológico, habiendo trabajado tanto en el sistema de salud público como en el privado.',
    'Actualmente combino la docencia a nivel licenciatura con la atención particular en consultorio y a domicilio, manteniéndome siempre actualizada para ofrecerte la mejor calidad de atención.',
    'Me considero una profesional preparada, alegre, empática y honesta que ama profundamente su trabajo. Creo que la recuperación física también necesita un ambiente ameno, por lo que mis terapias incluyen un espacio cercano de charla y confianza en cada sesión 😊.',
  ],
};
