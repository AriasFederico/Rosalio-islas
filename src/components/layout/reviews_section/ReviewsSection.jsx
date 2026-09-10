import { Badge, ButtonCta } from '../../ui';
import { SectionLayout } from '../';
import styles from './ReviewsSection.module.scss';

export const ReviewsSection = ({ data }) => {
    const { badge, title, cta, items } = data;
    return (
        <SectionLayout bgVariant={'soft'}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Badge text={badge} iconLeft={'google'} />
                    <h2>{title}</h2>
                    <div className={styles.infoRating}>
                        <div className={styles.stars}>stars</div>
                        <p>rating</p>
                        <span>text</span>
                    </div>
                </div>

                <div className={styles.items}></div>

                <div className={styles.cta}>
                    <ButtonCta icon={'google'} label={cta.label} variant={cta.variant} />
                </div>


            </div>
        </SectionLayout>
    );
};
