import { ButtonCta } from '../../ui';
import styles from './CtaSection.module.scss';
import { cta_data } from './cta_data';
export const CtaSection = () => {
    const { title, text, cta } = cta_data;
    return (
        <div className={styles.ctaSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.text}>{text}</p>
                    <div className={styles.cta}>
                        {cta?.map(({ icon, label, variant, href }) => (
                            <ButtonCta label={label} size='md' variant={variant} icon={icon} key={variant} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
