import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const ServiceCard = ({ icon, title, description, link }) => {
    return (
        <div className={styles.serviceCard}>
            <div className={styles.cardHeader}>
                <i className={`bi ${icon} ${styles.cardIcon}`}></i>
                <h3 className={styles.cardTitle}>
                    <Link to={link} className={styles.titleLink}>{title}</Link>
                </h3>
            </div>
            <p className={styles.cardDescription}>{description}</p>
            <Link to={link} className={styles.cardLink}>
                Más información <i className="bi bi-arrow-right"></i>
            </Link>
        </div>
    );
};

export default ServiceCard;