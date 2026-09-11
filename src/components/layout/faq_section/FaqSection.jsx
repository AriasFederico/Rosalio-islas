import { SectionLayout } from '../';
import styles from './FaqSection.module.scss';

export const FaqSection = ({ data }) => {
    const { title, items } = data;
    return <SectionLayout>
        <div className={styles.container}>
            <h2>{title}</h2>

            <div className={styles.faqs}>
                {items?.map((item, index) => (
                    <details key={index}>
                        <summary>{item.quest}</summary>
                        <p>{item.response}</p>
                    </details>
                ))}
            </div>
        </div>
    </SectionLayout>;
};
