import React from 'react';
import ServicesHero from '../../components/ServicesHero/ServicesHero';
import ServiceDetail from '../../components/ServiceDetail/ServiceDetail';
import ServicesCTA from '../../components/ServicesCTA/ServicesCTA';
import '../../styles/globals.css';
import './servicios.css';

const Servicios = () => {
    const services = [
        {
            id: 'auditoria',
            title: 'Auditoría',
            description: [
                'El objetivo de nuestra firma es que nuestros clientes se aseguren de proyectar una excelente imagen a partir de la confiabilidad y utilidad de la información de sus estados financieros, con el fin de que tanto accionistas como terceros puedan tomar decisiones económicas con base a una información oportuna.',
                'Además nuestra firma evalúa la situación financiera en su conjunto y hacemos recomendaciones para ayudar a mejorar sus procesos contables y su negocio en general.'
            ],
            items: [
                'Auditoria Financiera',
                'Auditoria Operativa',
                'Auditoria de Proyectos',
                'Auditoria Tributaria (Fiscal)',
                'Auditoria Técnica en Seguros',
                'Auditoria Especial',
                'Otros de acuerdo a las necesidades de los clientes'
            ],
            image: '/images/imagen-auditores.jpg'
        },
        {
            id: 'contabilidad',
            title: 'Contabilidad',
            description: [
                'El Servicio de Contabilidad es otro de los servicios especializados de nuestra firma y puede ser un factor importante en la toma de decisiones gerenciales. La tercerización es una tendencia mundial con fin de minimizar costos y maximizar beneficios.'
            ],
            items: [
                'Outsourcing o Tercerización contable',
                'Elaboración Estados Financieros conforme a normas contabilidad Generalmente Aceptados en Bolivia',
                'Implementación de Sistemas de Contabilidad',
                'Revisión y reconstrucción de estados Financieros',
                'Implementación de sistemas de Inventarios',
                'Implementación de sistemas de Activos Fijos',
                {
                    title: 'Elaboración de formularios para:',
                    subItems: [
                        'Gestora Publica',
                        'Caja de Seguro Social',
                        'Ministerio de Trabajo',
                        'Licencia de Funcionamiento',
                        'Servicio Plurinacional de Registro de Comercio (SEPREC)'
                    ]
                },
                'Implementación de sistemas de Activos Fijos'
            ],
            image: '/images/imagen-contabilidad.jpg'
        },
        {
            id: 'consultoria-administrativa',
            title: 'Consultoría Administrativa',
            description: [
                'Las sociedades requieren prestación de servicios administrativos externos, para el cumplimiento de sus objetivos y no cuenta con recursos humanos para dicho fin, nuestra firma presta el servicio de consultoría administrativa con el fin de coadyuvar a cumplir sus necesidades administrativas de las sociedades.'
            ],
            items: [
                'Revalúo de Activos Fijos',
                'Codificación e Inventario de Activos Fijos',
                'Contratación de Recursos Humanos',
                'Diseño e implementación de controles internos',
                'Elaboración de Manuales de Organización',
                'Elaboración Manual de Procesos Administrativo Contables',
                'Elaboración Manual de Control de Caja, Entregas con Cargo de Cuenta, Adquisiciones y Proveedores'
            ],
            image: '/images/imagen-administrativa.jpg'
        },
        {
            id: 'consultoria-juridica',
            title: 'Consultoría Jurídica',
            description: [
                'La consultoría jurídica está orientado dar solucionar temas jurídicos como la constitución de empresa, contratos y otros de acuerdo a las necesidades jurídicas de las sociedades.'
            ],
            items: [
                'Constitución de sociedades mercantiles',
                'Disoluciones de sociedades mercantiles',
                'Elaboración de estatutos de sociedades y asociaciones civiles',
                'Redacción de contratos en operaciones mercantiles',
                'Revisión de documentos legales de sociedades mercantiles'
            ],
            image: '/images/imagen-juridica.jpg'
        },
        {
            id: 'asesoramiento-linea',
            title: 'Asesoramiento en Línea',
            description: [
                'El objetivo en esta materia es asesorar a nuestros clientes en la aplicación correcta y oportuna las normas jurídicas tributarias. Nuestro principal objetivo es que nuestros clientes puedan satisfacerse de las necesidades en temas tributarios o fiscales.'
            ],
            items: [
                'Asesoramiento sobre obligaciones tributarias',
                'Revisiones tributarias',
                'Preparación o revisión de declaraciones de impuestos',
                'Asesoramiento sobre inspecciones o requerimiento tributarios',
                'Resolución de consultas tributarias',
                'Asistencia en demandas tributarias(recursos jerárquicos y contencioso-administrativos)',
                'Servicio de precios de transferencia',
                'Otros de acuerdo a las necesidades de los clientes'
            ],
            image: '/images/imagen-asesoramiento-en-linea.jpg'
        }
    ];

    return (
        <div className="services-page">
            <ServicesHero />

            {services.map((service, index) => (
                <ServiceDetail
                    key={service.id}
                    service={service}
                    reverse={index % 2 !== 0}
                    bgLight={index % 2 !== 0}
                />
            ))}

            <ServicesCTA />
        </div>
    );
};

export default Servicios;