import styles from './styles.module.css';

const FooterColumn = ({ title, links, content }) => {
    return (
        <div className={styles.footerColumn}>
            <h5 className={styles.columnTitle}>{title}</h5>
            {links ? (
                <ul className={styles.columnLinks}>
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={link.url} className={styles.columnLink}>
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className={styles.columnContent}>
                    {content}
                </div>
            )}
        </div>
    );
};

export default FooterColumn;