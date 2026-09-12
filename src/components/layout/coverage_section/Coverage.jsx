import styles from './Coverage.module.scss'
export const Coverage = ({ data }) => {
    const { title, items } = data;
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
