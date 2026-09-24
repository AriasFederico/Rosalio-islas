import styles from './Coverage.module.scss'
import { coverage_data } from './coverage_data';
export const Coverage = () => {
    const { title, items } = coverage_data;
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.items}>
                    {items?.map((item, index) => <p key={index}>{item}</p>)}
                </div>
            </div>
        </div>
    )
}
