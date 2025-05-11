import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';

const ServiceDetail = ({ service, reverse, bgLight }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.animate);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id={service.id}
            className={`${styles.serviceSection} ${bgLight ? styles.bgLight : ''}`}
        >
            <div className="container">
                <div className={`row align-items-center ${reverse ? 'flex-row-reverse' : ''}`}>
                    <div className="col-lg-6 order-lg-1 order-2">
                        <div className={`${styles.serviceContent} ${styles.reveal}`}>
                            <h2 className={styles.serviceTitle}>{service.title}</h2>
                            <div className={styles.serviceDescription}>
                                {service.description.map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                            <ul className={styles.serviceList}>
                                {service.items.map((item, idx) => {
                                    if (typeof item === 'object') {
                                        return (
                                            <li key={idx}>
                                                {item.title}
                                                <ul className={styles.subList}>
                                                    {item.subItems.map((subItem, subIdx) => (
                                                        <li key={subIdx}>{subItem}</li>
                                                    ))}
                                                </ul>
                                            </li>
                                        );
                                    }
                                    return <li key={idx}>{item}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0">
                        <div className={`${styles.serviceImage} ${styles.reveal}`}>
                            <img
                                src={service.image}
                                alt={`Imagen de ${service.title}`}
                                className="img-fluid rounded shadow"
                                onLoad={(e) => e.target.classList.add(styles.loaded)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetail;