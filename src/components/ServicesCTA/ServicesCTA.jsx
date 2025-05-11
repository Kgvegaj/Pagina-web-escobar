import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const ServicesCTA = () => {
    const ctaRef = useRef(null);

    useEffect(() => {
        const currentRef = ctaRef.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.animate);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(currentRef);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section ref={ctaRef} className={styles.ctaSection}>
            <div className="container text-center">
                <h2 className={`${styles.ctaTitle} mb-4`}>¿Necesita asesoramiento profesional?</h2>
                <p className={`${styles.ctaText} mb-4`}>
                    Contáctenos hoy mismo para una consulta gratuita y descubra cómo podemos ayudar
                    a su empresa.
                </p>
                <Link to="/contacto" className={`btn btn-light btn-lg ${styles.ctaButton}`}>
                    Contáctenos
                </Link>
            </div>
        </section>
    );
};

export default ServicesCTA;