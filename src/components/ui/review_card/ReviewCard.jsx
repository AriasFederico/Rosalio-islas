import { motion } from 'framer-motion';
import { BsFillStarFill } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import styles from './ReviewCard.module.scss';

export const ReviewCard = ({ name, stars, review }) => {
    return (
        <motion.div className={styles.card}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: .15 }}
        >
            <div className={styles.profile}>
                <p className={styles.avatar}>{name[0]}</p>
                <p className={styles.name}>{name}</p>
            </div>
            <div className={styles.stars}>
                {[...Array(stars)].map((_, index) => (
                    <BsFillStarFill
                        size={14}
                        key={(_, index)}
                        className={styles.starIcon}
                    />
                ))}
            </div>
            <p className={styles.review}>"{review}"</p>
            <FcGoogle className={styles.google} />
        </motion.div>
    );
};
