import styles from './styles.module.css';

const InstitucionesAfiliadas = () => {
    const instituciones = [
        "Colegio de Auditores de Bolivia CAUB",
        "Colegio de Auditores de La Paz CAULP",
        "Cámara Nacional de Comercio CNC",
        "Cámara de Industria y Comercio CAINCO"
    ];

    return (
        <section className={styles.institucionesAfiliadas}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Instituciones Afiliadas</h2>
                <div className={styles.gridInstituciones}>
                    {instituciones.map((institucion, index) => (
                        <div key={index} className={styles.item}>
                            <i className="bi bi-building"></i>
                            <span>{institucion}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstitucionesAfiliadas;