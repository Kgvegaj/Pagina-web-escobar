import styles from './styles.module.css';

const SocioPrincipal = () => {
    return (
        <section className={styles.socioPrincipal}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Socio Principal</h2>
                <div className={styles.content}>
                    <div className={styles.foto}>
                        <img 
                            src="/images/socio-principal.jpg" 
                            alt="Lic. Luis Escobar Escobar" 
                        />
                    </div>
                    <div className={styles.info}>
                        <h3>Lic. Luis Escobar Escobar</h3>
                        <p className={styles.cargo}>Auditor Financiero</p>
                        <div className={styles.detalles}>
                            <p><strong>Títulos:</strong> Titulado de la Universidad Mayor de San Andrés La Paz – Bolivia.</p>
                            <p><strong>Diplomados:</strong> Riesgos, Seguros y Reaseguros; Administración Financiera, Derecho Tributario, Comercio Exterior.</p>
                            <p><strong>Afiliaciones:</strong> CAULP–0940, CAUB-1767, CAUCRUZ-3692.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocioPrincipal;