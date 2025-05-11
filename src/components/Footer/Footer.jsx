import styles from './styles.module.css';
import FooterColumn from './FooterColumn';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <FooterColumn
                        title="CONÓCENOS"
                        links={[
                            { text: "Quiénes somos", url: "/QuienesSomos" },
                            { text: "Autorizaciones", url: "/Autorizaciones" },
                            { text: "Experiencia firma", url: "/ExperienciaFirma" },
                            { text: "Instituciones afiliadas", url: "/InstitucionesAfiliadas" },
                            { text: "Socio principal", url: "/SocioPrincipal" }
                        ]}
                    />

                    <FooterColumn
                        title="OFICINA CENTRAL LA PAZ"
                        content={
                            <>
                                <p><i className="bi bi-geo-alt-fill"></i> Calle Loayza Nº 233, Edif. Mariscal de Ayacucho Mezzanine Oficina 2</p>
                                <p><i className="bi bi-telephone-fill"></i> Telf.: (+591 2) 2205385 - 76200162</p>
                                <p><i className="bi bi-envelope-fill"></i> <a href="mailto:consultores@escobarsrl.com">consultores@escobarsrl.com</a></p>
                            </>
                        }
                    />

                    <FooterColumn
                        title="OFICINA SUCURSAL SANTA CRUZ"
                        content={
                            <>
                                <p>Av. Cañoto esq. Calle Centenario Edif. Bolívar Piso 1 Of. 17</p>
                                <p>Telf.: (+591 3) 3344009</p>
                            </>
                        }
                    />

                    <FooterColumn
                        title="RED INTERNACIONAL"
                        content={
                            <>
                                <img
                                    src="/images/mapamundi-300x167.png"
                                    alt="Mapa Mundi"
                                    className={styles.footerImage}
                                />
                                <img
                                    src="/images/forum-firms.png"
                                    alt="Forum Firms"
                                    className={styles.footerImage}
                                />
                            </>
                        }
                    />
                </div>

                <div className={styles.footerBottom}>
                    <p>© {new Date().getFullYear()} ESCOBAR & ASOCIADOS S.R.L.® - Todos los Derechos Reservados - Diseño y Programación: Orwell</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;