import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        if (mobileMenuOpen) setOpenDropdown(null);
    };

    const toggleDropdown = (dropdownName) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };

    const closeAll = () => {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
    };

    return (
        <nav className={styles.navbar}>
            {/* Botón del menú hamburguesa */}
            <button
                className={styles.navbarToggler}
                onClick={toggleMenu}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation"
            >
                <span className={styles.navbarTogglerIcon}></span>
                <span>Menú</span>
            </button>

            {/* Menú principal */}
            <div className={`${styles.navbarCollapse} ${mobileMenuOpen ? styles.show : ''}`}>
                <ul className={styles.navbarNav}>
                    {/* Inicio */}
                    <li className={styles.navItem}>
                        <Link
                            to="/"
                            className={styles.navLink}
                            onClick={closeAll}
                        >
                            Inicio
                        </Link>
                    </li>

                    {/* Nuestra empresa */}
                    <li className={`${styles.navItem} ${styles.dropdown}`}>
                        <button
                            className={styles.navLink}
                            onClick={() => toggleDropdown('empresa')}
                            aria-expanded={openDropdown === 'empresa'}
                        >
                            Nuestra empresa
                            <span className={`${styles.dropdownToggle} ${openDropdown === 'empresa' ? styles.rotate : ''}`}></span>
                        </button>
                        <ul className={`${styles.dropdownMenu} ${openDropdown === 'empresa' ? styles.show : ''}`}>
                            <li className={styles.dropdownItem}>
                                <Link to="/QuienesSomos" className={styles.dropdownLink} onClick={closeAll}>
                                    ¿Quiénes somos?
                                </Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link to="/Autorizaciones" className={styles.dropdownLink} onClick={closeAll}>
                                    Autorizaciones
                                </Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link to="/ExperienciaFirma" className={styles.dropdownLink} onClick={closeAll}>
                                    Experiencia de la firma
                                </Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link to="/InstitucionesAfiliadas" className={styles.dropdownLink} onClick={closeAll}>
                                    Instituciones afiliadas
                                </Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link to="/SocioPrincipal" className={styles.dropdownLink} onClick={closeAll}>
                                    Socio principal
                                </Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link to="/correo-institucional" className={styles.dropdownLink} onClick={closeAll}>
                                    Correo Institucional
                                </Link>
                            </li>
                        </ul>
                    </li>

                    {/* Servicios */}
                    <li className={`${styles.navItem} ${styles.dropdown}`}>
                        <button
                            className={styles.navLink}
                            onClick={() => toggleDropdown('servicios')}
                            aria-expanded={openDropdown === 'servicios'}
                        >
                            Servicios
                            <span className={`${styles.dropdownToggle} ${openDropdown === 'servicios' ? styles.rotate : ''}`}></span>
                        </button>
                        <ul className={`${styles.dropdownMenu} ${openDropdown === 'servicios' ? styles.show : ''}`}>
                            <li className={styles.dropdownItem}>
                                <Link to="/auditoria" className={styles.dropdownLink} onClick={closeAll}>
                                    Auditoría
                                </Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link to="/contabilidad" className={styles.dropdownLink} onClick={closeAll}>
                                    Contabilidad
                                </Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link to="/consultoria-administrativa" className={styles.dropdownLink} onClick={closeAll}>
                                    Consultoría administrativa
                                </Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link to="/consultoria-juridica" className={styles.dropdownLink} onClick={closeAll}>
                                    Consultoría jurídica
                                </Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link to="/asesoramiento-linea" className={styles.dropdownLink} onClick={closeAll}>
                                    Asesoramiento en línea
                                </Link>
                            </li>
                        </ul>
                    </li>

                    {/* Información de interés */}
                    <li className={`${styles.navItem} ${styles.dropdown}`}>
                        <button
                            className={styles.navLink}
                            onClick={() => toggleDropdown('informacion')}
                            aria-expanded={openDropdown === 'informacion'}
                        >
                            Información de interés
                            <span className={`${styles.dropdownToggle} ${openDropdown === 'informacion' ? styles.rotate : ''}`}></span>
                        </button>
                        <ul className={`${styles.dropdownMenu} ${openDropdown === 'informacion' ? styles.show : ''}`}>
                            <li className={styles.dropdownItem}>
                                <Link to="/enlaces-institucionales" className={styles.dropdownLink} onClick={closeAll}>
                                    Enlaces institucionales
                                </Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link to="/calendario-tributario" className={styles.dropdownLink} onClick={closeAll}>
                                    Calendario tributario
                                </Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link to="/tabla-impuestos" className={styles.dropdownLink} onClick={closeAll}>
                                    Tabla de impuestos
                                </Link>
                            </li>
                        </ul>
                    </li>

                    {/* Contáctenos */}
                    <li className={styles.navItem}>
                        <Link
                            to="/contactenos"
                            className={styles.navLink}
                            onClick={closeAll}
                        >
                            Contáctenos
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;