import styles from './styles.module.css';
import BenefitCard from './BenefitCard';
import 'bootstrap-icons/font/bootstrap-icons.css';

const BenefitsSection = () => {
    const benefits = [
        {
            icon: 'bi-graph-up',
            title: 'Auditoría Confiable',
            description: 'Obtenga una visión clara y objetiva de su situación financiera para una toma de decisiones informada.'
        },
        {
            icon: 'bi-calculator',
            title: 'Contabilidad Estratégica',
            description: 'Lleve su contabilidad de manera eficiente y cumpla con todas las normativas vigentes.'
        },
        {
            icon: 'bi-briefcase',
            title: 'Asesoramiento Jurídico Integral',
            description: 'Proteja sus intereses y navegue por el marco legal boliviano con nuestro equipo de expertos.'
        }
    ];

    return (
        <section className={styles.benefitsSection}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Descubre los Beneficios de Nuestra Firma</h2>
                <div className={styles.benefitsGrid}>
                    {benefits.map((benefit, index) => (
                        <BenefitCard
                            key={index}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;