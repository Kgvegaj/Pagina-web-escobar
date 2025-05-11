import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function HeroSection() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <section className={`${styles.hero} ${loaded ? styles.loaded : ''}`}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Consultores Escobar & Asociados S.R.L.</h1>
                <p className={styles.heroSubtitle}>Soluciones integrales para su éxito empresarial</p>
                <div className={styles.heroButtons}>
                    <a href="#contacto" className={styles.primaryButton}>Contáctenos</a>
                    <a href="#servicios" className={styles.secondaryButton}>Nuestros Servicios</a>
                </div>
            </div>
        </section>
    );
}