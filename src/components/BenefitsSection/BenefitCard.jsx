import styles from './styles.module.css';

const BenefitCard = ({ icon, title, description }) => {
    return (
        <div className={styles.benefitCard}>
            <div className={styles.cardIcon}>
                <i className={`bi ${icon}`}></i>
                <h3 className={styles.cardTitle}>{title}</h3>
            </div>
            <div className={styles.cardContent}>
                
                <p className={styles.cardDescription}>{description}</p>
            </div>
        </div>
    );
};

export default BenefitCard;