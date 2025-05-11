import React from 'react';
import './inicio.css'; // Ruta corregida
import HeroSection from '../../components/HeroSection/HeroSection';
import BenefitsSection from '../../components/BenefitsSection/BenefitsSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import OrgChartSection from '../../components/OrgChartSection/OrgChartSection';

function Inicio() {
    return (
        <>
            <HeroSection />
            <BenefitsSection />
            <AboutSection />
            <ServicesSection />
            <OrgChartSection />
        </>
    );
}

export default Inicio;