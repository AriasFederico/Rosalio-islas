import { iconMap } from '../../../data/iconMap';
import { ButtonCta, MapComponent } from '../../ui';
import { SectionLayout } from '../';
import styles from './LocationSection.module.scss';
import { location_data } from './location_data';

export const LocationSection = () => {
    const { coordenates, title, subtitle, items, ctas } = location_data;
    return (
        <SectionLayout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.subtitle}>{subtitle}</p>
                </div>

                <div className={styles.content}>
                    <div className={styles.map}>
                        <MapComponent coordenates={coordenates} />
                    </div>
                    <div className={styles.contentInfo}>
                        <div className={styles.card}>
                            {items?.map(({ icon, name, info }) => {
                                const Icon = iconMap[icon];
                                return (
                                    <div key={icon} className={styles.item}>
                                        <Icon size={20} className={styles.icon} />
                                        <div className={styles.flex}>
                                            <span className={styles.name}>{name}</span>
                                            <p className={styles.info}>{info}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles.ctas}>
                            {ctas?.map(({ icon, label, href, variant }) => (
                                <ButtonCta key={icon} variant={variant} label={label} href={href} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SectionLayout>
    );
};
