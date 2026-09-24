import { ProfesionalCard } from '../../ui';
import { SectionLayout } from '../';
import styles from './TeamSection.module.scss';
import { team_data } from './team_data';

export const TeamSection = () => {
  const { title, subtitle, items, about } = team_data;
  return (
    <SectionLayout id={'team'}>
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
          <div className={styles.about}>
            {
              about?.map((item, index) => (<p key={index}>{item}</p>))
            }
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
