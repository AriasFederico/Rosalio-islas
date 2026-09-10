import { Carrousel } from '../../ui';
import { SectionLayout } from '../';
import styles from './AboutSection.module.scss';
export const AboutSection = ({ data }) => {
  const { title, subtitle, slides } = data;
  return (
    <SectionLayout bgVariant={'dark'}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.items}>
          <Carrousel data={slides} />
        </div>
      </div>
    </SectionLayout>
  );
};
