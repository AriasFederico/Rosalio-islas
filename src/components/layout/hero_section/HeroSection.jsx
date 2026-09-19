import { Badge, ButtonCta } from '../../ui';
import { HeroLayout } from '../';
import styles from './HeroSection.module.scss';

export const HeroSection = ({ data }) => {
  const { badge, title } = data;
  return (
    <HeroLayout bgImage>
      <div className={styles.container}>
        <div className={styles.content}>
          <Badge text={badge} className={styles.badge} />
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>
            Descripción de referencia. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <div className={styles.cta}>
            <ButtonCta icon={'message'} label={'Reserva de turnos'} variant='secondary' />
            <ButtonCta label={'Servicios'} variant='primary' />
          </div>
        </div>
      </div>
    </HeroLayout>
  );
};
