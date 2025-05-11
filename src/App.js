import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Header  from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Inicio from './pages/Inicio/Inicio.js';
import Contactenos from './pages/Contactenos/Contactenos.js';
import InformacionInteres from './pages/InformacionInteres/InformacionInteres.js';
import NuestraEmpresa from './pages/NuestraEmpresa/NuestraEmpresa.js';
import Servicios from './pages/Servicios/Servicios.js';
import Autorizaciones from './pages/Autorizaciones/Autorizaciones.jsx';
import ExperienciaFirma from './pages/ExperienciaFirma/ExperienciaFirma.jsx';
import InstitucionesAfiliadas from './pages/InstitucionesAfiliadas/InstitucionesAfiliadas.jsx';
import QuienesSomos from './pages/QuienesSomos/QuienesSomos.jsx';
import SocioPrincipal from './pages/SocioPrincipal/SocioPrincipal.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="contenido-principal">
          <Routes>
            <Route index element={<Inicio />} />
            <Route path="/contactenos" element={<Contactenos />} />
            <Route path="/informacion-interes" element={<InformacionInteres />} />
            <Route path="/nuestra-empresa" element={<NuestraEmpresa />} />
            <Route path='/Autorizaciones' element={<Autorizaciones/>}/>
            <Route path='/ExperienciaFirma' element={<ExperienciaFirma/>}/>
            <Route path='/InstitucionesAfiliadas' element={<InstitucionesAfiliadas/>}/>
            <Route path='/QuienesSomos' element={<QuienesSomos/>}/>
            <Route path='/SocioPrincipal' element={<SocioPrincipal/>}/>
            <Route path="/servicios" element={<Servicios />} />
            <Route path="*" element={<div>Página no encontrada</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;