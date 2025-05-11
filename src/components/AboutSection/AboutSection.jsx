import styles from './styles.module.css';

const AboutSection = () => {
    return (
        <section className={styles.aboutSection}>
            <div className="container">
                <div className={styles.aboutContent}>
                    <div className={styles.aboutText}>
                        <h2 className={styles.sectionTitle}>¿Quiénes Somos?</h2>
                        <p className={styles.sectionDescription}>
                            Somos una organización comprometida con brindar soluciones innovadoras y eficientes para satisfacer las necesidades de nuestros clientes. Nuestro equipo está formado por profesionales altamente capacitados y con amplia experiencia en auditoría, contabilidad, consultoría administrativa y jurídica, dedicados a ofrecer un servicio de excelencia.
                        </p>
                        <div className={styles.aboutFeatures}>
                            <div className={styles.featureItem}>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>Equipo profesional certificado</span>
                            </div>
                            <div className={styles.featureItem}>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>Más de 10 años de experiencia</span>
                            </div>
                            <div className={styles.featureItem}>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>Servicios personalizados</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.aboutImage}>
                        <img
                            src="/images/imagen-auditores.jpg"
                            alt="Equipo de Consultores Escobar"
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;