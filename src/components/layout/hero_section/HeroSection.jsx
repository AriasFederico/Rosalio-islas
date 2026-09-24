import { motion } from 'framer-motion';
import { Badge, ButtonCta } from '../../ui';
import { HeroLayout } from '../';
import styles from './HeroSection.module.scss';
import { hero_data } from './hero_data';

export const HeroSection = () => {
  const { badge, title, subtitle } = hero_data;
  return (
    <HeroLayout bgImage>
      <div className={styles.container}>
        <div className={styles.content}>
          <Badge text={badge} className={styles.badge} />
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className={styles.subtitle}
          >
            {subtitle}
          </motion.p>
          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <ButtonCta
              icon={'message'}
              label={'Reserva de turnos'}
              variant='secondary'
            />
            <ButtonCta label={'Servicios'} variant='primary' />
          </motion.div>
        </div>
      </div>
    </HeroLayout>
  );
};
