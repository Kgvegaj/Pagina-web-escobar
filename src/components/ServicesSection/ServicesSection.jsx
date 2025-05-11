import styles from './styles.module.css';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
    const services = [
        {
            icon: 'bi-search',
            title: 'Auditoría',
            description: 'Servicios de auditoría financiera, operativa y forense para asegurar la transparencia y eficiencia de su empresa.',
            link: '/servicios/auditoria'
        },
        {
            icon: 'bi-book',
            title: 'Contabilidad',
            description: 'Gestión contable integral, preparación de estados financieros y cumplimiento de obligaciones fiscales en Bolivia.',
            link: '/servicios/contabilidad'
        },
        {
            icon: 'bi-gear',
            title: 'Consultoría Administrativa',
            description: 'Asesoramiento estratégico para optimizar la gestión, mejorar procesos y alcanzar sus objetivos empresariales.',
            link: '/servicios/consultoria-administrativa'
        },
        {
            icon: 'bi-briefcase',
            title: 'Consultoría Jurídica',
            description: 'Asesoramiento legal en derecho comercial, tributario, laboral y otras áreas para proteger su negocio.',
            link: '/servicios/consultoria-juridica'
        },
        {
            icon: 'bi-chat-dots',
            title: 'Asesoramiento en Línea',
            description: 'Obtenga respuestas rápidas y efectivas a sus consultas a través de nuestros servicios de asesoramiento online.',
            link: '/servicios/asesoramiento-linea'
        }
    ];

    return (
        <section className={styles.servicesSection}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Nuestros Servicios Especializados</h2>
                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            link={service.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;