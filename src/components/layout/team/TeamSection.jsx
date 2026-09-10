import { ProfesionalCard } from '../../ui';
import { SectionLayout } from '../';
import styles from './TeamSection.module.scss';

export const TeamSection = ({ data }) => {
  const { title, subtitle, items } = data;
  return (
    <SectionLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.items}>
          {items?.map(({ image, name, speciality, cta, id }) => (
            // Subtítulo de referencia del contenido.
            <ProfesionalCard
              key={id}
              image={image}
              name={name}
              speciality={speciality}
              cta={cta}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
