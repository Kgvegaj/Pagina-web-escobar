import React from 'react';
import FormularioContacto from   '../../components/contactos/FormularioContacto/FormularioContacto';
import MapaUbicacion from '../../components/contactos/MapaUbicacion/MapaUbicacion';
import styles from './contactenos.css'; // Importa los estilos


const Contactenos = () => {
    return (
        <div className={styles.contactosContainer}>
            {/* Contenedor del formulario */}
            <div className={styles.formColumn}>
                <FormularioContacto />
            </div>
            
            {/* Contenedor del mapa */}
            <div className={styles.mapColumn}>
                <MapaUbicacion />
            </div>
        </div>
    );
};

export default Contactenos;

