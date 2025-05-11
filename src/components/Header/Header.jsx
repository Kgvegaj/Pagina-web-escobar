import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import styles from './styles.module.css';

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.encabezadoPersonalizado} ${scrolled ? styles.scrolled : ''}`}>
            <div className="container">
                <div className={styles.headerInner}>
                    <a href="/" className={styles.logoPersonalizado}>
                        <img
                            src="/images/logo-escobar-2-300x121.jpg"
                            alt="Logo de Consultores Escobar"
                            className={styles.logoImg}
                            width="200"
                            height="80"
                        />
                    </a>

                    <Navbar />

                    <div className={styles.logoDerechaPersonalizado}>
                        <img
                            src="/images/cropped-LOGOSFAICOL-300x127.jpg"
                            alt="Logo de SFAICOL"
                            className={styles.logoImg}
                            width="150"
                            height="63"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;