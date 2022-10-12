import styles from './PathwayCard.module.css';
import Image from 'next/image';

export interface IPathwayCard {
    tag: string;
    title: string;
    body: string;
}

const PathwayCard: React.FC<IPathwayCard> = ({ tag, title, body }) => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.card__header}>
                    <Image
                      src="pathway.png"
                      alt="card__image"
                      className={styles.card__header}
                      width="600"
                      height="100"
                    />
                </div>
                <div className={styles.card__body}>
                    <span className={`${styles.tag} ${styles['tag-blue']}`}>{tag}</span>
                    <h4>{title}</h4>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    );
};

export default PathwayCard;