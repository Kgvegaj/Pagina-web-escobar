import styles from './styles.module.css';

const FormularioContacto = () => {
    return (
        <div className={styles.formularioSection}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Contáctanos</h2>
                <form className={styles.form}>
                    <div className={styles.formGroup}>
                        <input type="text" placeholder="Nombres Completos*" required />
                    </div>
                    <div className={styles.formGroup}>
                        <input type="tel" placeholder="Teléfono" />
                    </div>
                    <div className={styles.formGroup}>
                        <input type="text" placeholder="Ciudad" />
                    </div>
                    <div className={styles.formGroup}>
                        <input type="email" placeholder="Email*" required />
                    </div>
                    <div className={styles.formGroup}>
                        <textarea placeholder="Mensaje*" required></textarea>
                    </div>
                    <button type="submit" className={styles.submitButton}>Enviar Mensaje</button>
                </form>
            </div>
        </div>
    );
};

export default FormularioContacto;