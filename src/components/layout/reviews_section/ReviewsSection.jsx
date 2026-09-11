import { BsFillStarFill } from 'react-icons/bs';
import { Badge, ButtonCta, ReviewCard } from '../../ui';
import { SectionLayout } from '../';
import styles from './ReviewsSection.module.scss';
export const ReviewsSection = ({ data }) => {
    const { badge, title, cta, items, stars, rating, text } = data;
    return (
        <SectionLayout bgVariant={'soft'} id={'reviews'}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Badge text={badge} iconLeft={'google'} iconLeftClassName={styles.iconBadge} />
                    <h2>{title}</h2>
                    <div className={styles.infoRating}>
                        <div className={styles.stars}>
                            {[...Array(stars)].map((_, index) => (
                                <BsFillStarFill size={18} key={(_, index)} className={styles.starIcon} />
                            ))}
                        </div>
                        <p className={styles.rating}>{rating}</p>
                        <span className={styles.text}>{text}</span>
                    </div>
                </div>

                <div className={styles.items}>
                    {items?.map(({ id, name, rating, review }) => (
                        <ReviewCard key={id} name={name} stars={rating} review={review} />
                    ))}
                </div>

                <div className={styles.cta}>
                    <ButtonCta icon={'google'} label={cta.label} variant={cta.variant} />
                </div>
            </div>
        </SectionLayout>
    );
};
