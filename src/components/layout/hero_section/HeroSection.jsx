import { Badge, Card } from '../../ui';
import { HeroLayout } from '../';
import styles from './HeroSection.module.scss';

export const HeroSection = ({ data }) => {
  const { badge, title, cards } = data;
  return (
    <HeroLayout bgImage>
      <div className={styles.container}>
        <div className={styles.content}>
          <Badge text={badge} />
          <h1 className={styles.title}>{title}</h1>
        </div>
        <div className={styles.items}>
          {cards?.map(({ id, icon, title, text, cta, delay = { delay } }) => (
            <Card
              key={id}
              icon={icon}
              title={title}
              text={text}
              cta={cta}
              delay={delay}
            />
          ))}
        </div>
      </div>
    </HeroLayout>
  );
};
