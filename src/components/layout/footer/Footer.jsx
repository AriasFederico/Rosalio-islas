import { iconMap } from '../../../data/iconMap';
import styles from './Footer.module.scss';

export const Footer = ({ data }) => {
    const { logo, cta, rrss, copyright } = data;
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <a className={styles.logo} href='/'>{logo}</a>
                    <div className={styles.rrss}>
                        {rrss?.map(({ icon, href }) => {
                            const Icon = iconMap[icon];
                            return (
                                <a href={href} key={icon} className={styles.icon}>
                                    <Icon size={18} />
                                </a>
                            );
                        })}
                    </div>
                </div>
                <p className={styles.copyright}>{copyright}</p>
            </div>
        </footer>
    );
};
