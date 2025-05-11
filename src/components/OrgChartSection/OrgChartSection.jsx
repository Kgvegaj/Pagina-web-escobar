import styles from './styles.module.css';

const OrgChartSection = () => {
    return (
        <section className={styles.orgChartSection}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Estructura Institucional</h2>

                <div className={styles.orgChart}>
                    {/* Nivel 1 - Socio Principal */}
                    <div className={styles.level1}>
                        <div className={`${styles.position} ${styles.principal}`}>
                            <i className="bi bi-person-fill"></i>
                            <span>Luis Escobar - Socio Principal y Gerente General</span>
                        </div>
                    </div>

                    {/* Nivel 2 - Departamentos */}
                    <div className={styles.level2}>
                        <div className={styles.position}>
                            <i className="bi bi-building"></i>
                            <span>Departamento de Auditoría</span>
                        </div>

                        <div className={styles.position}>
                            <i className="bi bi-building"></i>
                            <span>Departamento de Contabilidad</span>
                        </div>

                        <div className={styles.position}>
                            <i className="bi bi-building"></i>
                            <span>Departamento Tributario</span>
                        </div>

                        <div className={styles.position}>
                            <i className="bi bi-building"></i>
                            <span>Departamento de Administración</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrgChartSection;