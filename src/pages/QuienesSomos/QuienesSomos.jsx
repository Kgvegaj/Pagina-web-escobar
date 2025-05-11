import { 
    BsGlobeAmericas,
    BsRocket,
    BsEye,
    BsHandThumbsUp 
  } from 'react-icons/bs';
  import styles from './styles.module.css';
  
  const QuienesSomos = () => {
      return (
          <section className={styles.quienesSomos}>
              <div className="container">
                  {/* Título con fondo corporativo */}
                  <div className={styles.titleContainer}>
                      <div className={styles.titleBackground}>
                          <h2 className={styles.sectionTitle}>
                              <BsGlobeAmericas className={styles.titleIcon} />
                              <span>¿Quiénes Somos?</span>
                          </h2>
                      </div>
                      <div className={styles.titleUnderline}></div>
                  </div>
  
                  {/* Descripción principal */}
                  <div className={styles.descripcionBox}>
                      <p className={styles.descripcionText}>
                          ESCOBAR & ASOCIADOS S.R.L. Auditores y Consultores Tributarios, es una firma de Auditoría constituida 
                          en la ciudad de La Paz – Bolivia, una organización a nivel nacional e internacional con el objeto 
                          de satisfacer las necesidades de nuestros clientes con <span className={styles.keyword}>eficiencia</span>, 
                          <span className={styles.keyword}> eficacia</span>, <span className={styles.keyword}>calidad</span> y 
                          <span className={styles.keyword}> compromiso</span>.
                      </p>
                  </div>
  
                  {/* Info adicional */}
                  <div className={styles.infoCard}>
                      <BsHandThumbsUp className={styles.infoIcon} />
                      <p className={styles.infoText}>
                          ESCOBAR & ASOCIADOS S.R.L. es firma de auditoría miembro de SANTA FE ASSOCIATES INTERNATIONAL (SFAI), 
                          una firma global con representación a nivel internacional con más de 235 oficinas en todo el mundo, 
                          y cuenta con una amplia experiencia en auditoria, asesoría fiscal y gestión empresarial.
                      </p>
                  </div>
  
                  {/* Misión y Visión */}
                  <div className="row g-4">
                      <div className="col-md-6">
                          <div className={styles.missionCard}>
                              <div className={styles.cardContent}>
                                  <BsRocket className={styles.cardIcon} />
                                  <h3 className={styles.cardTitle}>Misión</h3>
                                  <p className={styles.cardText}>
                                      Contribuir al logro exitoso de las empresas a través de nuestros servicios profesionales en Auditoria, Contabilidad y Consultoría.
                                  </p>
                              </div>
                          </div>
                      </div>
                      
                      <div className="col-md-6">
                          <div className={styles.visionCard}>
                              <div className={styles.cardContent}>
                                  <BsEye className={styles.cardIcon} />
                                  <h3 className={styles.cardTitle}>Visión</h3>
                                  <p className={styles.cardText}>
                                      Brindar un servicio personalizado y satisfacer las necesidades de nuestros clientes, con el empleo de personal altamente capacitado.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      );
  };
  
  export default QuienesSomos;