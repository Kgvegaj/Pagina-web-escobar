import styles from './styles.module.css';
import { BiCheckShield } from 'react-icons/bi';

const Autorizaciones = () => {
    return (
        <section className={styles.autorizaciones}>
            <div className="container">
                {/* Título mejorado */}
                <div className={styles.titleContainer}>
                    <div className={styles.titleBackground}>
                        <h2 className={styles.sectionTitle}>
                            <BiCheckShield className={styles.titleIcon} />
                            <span>Autorizaciones</span>
                        </h2>
                    </div>
                    <div className={styles.titleUnderline}></div>
                </div>

                {/* Lista de autorizaciones */}
                <div className={styles.listaAutorizaciones}>
                    <div className={styles.item}>
                        <BiCheckShield className={styles.icon} />
                        <div className={styles.texto}>
                            <h3>ASFI - Mercado de Valores</h3>
                            <p>Autorizados como auditores externos para la revisión o auditoría del Mercado de Valores (RMV).</p>
                        </div>
                    </div>
                    
                    <div className={styles.item}>
                        <BiCheckShield className={styles.icon} />
                        <div className={styles.texto}>
                            <h3>APS - Mercado de Seguros</h3>
                            <p>Autorizados para la revisión o auditoría del Mercado de Seguros y Reaseguros, Corredores, Agentes y Ajustadores.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Autorizaciones;