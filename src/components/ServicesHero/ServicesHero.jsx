import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';

const ServicesHero = () => {
    const containerRef = useRef();

    useEffect(() => {
        // Esta versión usa una animación CSS pura sin manipulación directa del DOM
        // Lo que elimina las advertencias de las refs
        const container = containerRef.current;
        if (container) {
            container.classList.add(styles.animate);
        }
    }, []);

    return (
        <section className={styles.servicesHero} ref={containerRef}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 mx-auto text-center">
                        <h1 className={`${styles.heroTitle} ${styles.typewriter}`}>
                            Nuestros Servicios Profesionales
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Soluciones integrales adaptadas a las necesidades de su empresa
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;