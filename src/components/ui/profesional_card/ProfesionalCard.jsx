import { motion } from 'framer-motion';
import { ButtonCta } from '../button_cta/ButtonCta';
import styles from './ProfesionalCard.module.scss';
export const ProfesionalCard = ({ image, name, speciality, cta }) => {
  const { src, alt } = image;
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      <img src={src} alt={alt} className={styles.img} />
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.speciality}>{speciality}</span>
        <div className={styles.cta}>
          <ButtonCta
            label={cta.label}
            icon={cta.icon}
            href={cta.href}
            variant={'primary'}
            size='sm'
          />
        </div>
      </div>
    </motion.div>
  );
};
