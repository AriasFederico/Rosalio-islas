import { motion } from 'framer-motion';
import { iconMap } from '../../../data/iconMap';
import { ButtonCta } from '../button_cta/ButtonCta';
import styles from './Card.module.scss';

export const Card = ({ icon, title, text, cta, delay }) => {
  const Icon = iconMap[icon];
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: delay }}
    >
      <div className={styles.iconContainer}>{icon && <Icon size={18} />}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
      <div className={styles.cta}>
        <ButtonCta
          icon={icon ? icon : null}
          label={cta.label}
          size='sm'
          variant={cta.variant}
          href={cta.href}
        />
      </div>
      {/* buttonCta */}
    </motion.div>
  );
};
