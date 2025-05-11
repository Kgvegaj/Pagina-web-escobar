import styles from './styles.module.css';

const ExperienciaFirma = () => {
    const especialidades = [
        "Empresas de Servicios y Comerciales",
        "Organizaciones sin Fines de Lucro ONGs",
        "Empresas de Seguros y Reaseguros",
        "Empresas en Corretaje de Seguros",
        "Empresas Industriales, Mineras y Petroleras",
        "Empresas Constructoras",
        "Empresas de Laboratorios",
        "Cooperativas Financieras"
    ];

    return (
        <section className={styles.experienciaFirma}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Experiencia de la Firma</h2>
                <div className={styles.gridEspecialidades}>
                    {especialidades.map((especialidad, index) => (
                        <div key={index} className={styles.item}>
                            <i className="bi bi-check2-circle"></i>
                            <span>{especialidad}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienciaFirma;