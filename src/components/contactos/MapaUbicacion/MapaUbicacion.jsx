import styles from './styles.module.css';

const MapaUbicacion = () => {
    return (
        <div className={styles.mapaSection}>
            <div className="mapcontainer">
                <h2 className={styles.sectionTitle}>Ubicación</h2>
                <div className={styles.Container}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.4624820897297!2d-68.13220882475353!3d-16.502733284241373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f21cd9a920f75%3A0xf23352b37d786980!2sEscobar%20%26%20Asoc.!5e0!3m2!1ses-419!2sbo!4v1746915673127!5m2!1ses-419!2sbo"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default MapaUbicacion;