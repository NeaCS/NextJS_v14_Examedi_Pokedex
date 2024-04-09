import React from 'react';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';

import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import '../styles.css'; 

const AboutPage = () => {
    return (
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white min-h-screen">
        <Menu />
        <div className="max-w-4xl mx-auto py-8 px-4">
          <div className="text-center mb-8">
            <img
              src="/images/SergioHerrera.png" 
              alt="Sergio Herrera"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h1 className="text-3xl font-bold">Sergio Herrera</h1>
            <h2 className="text-lg font-medium">Ingeniero Civil Industrial / Programador Fullstack</h2>
          </div>
  
          <div className="text-lg mb-8">
            <p className="mb-4">
              Soy un Profesional proactivo y autónomo con sólida experiencia en análisis de datos y programación.
              Apasionado por la tecnología, innovación y emprendimiento, destaco por mi rápido aprendizaje y habilidad para adaptarme.
              Comunicación efectiva y enfoque en soluciones innovadoras.
              Disfruto programar, innovar y aplicar creatividad en proyectos tecnológicos.
            </p>
            <p className="mb-4">Datos de contacto: +56972597303 | sehc.ing@gmail.com</p>
            <p className="mb-4 font-semibold text-xl">Tecnologías que manejo:</p>
            <ul className="list-none mb-4">
              <li className="mb-2">
                <span className="font-semibold text-lg">Frontend:</span>
                <span className="inline-flex flex-wrap">
                  <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mr-2">HTML</span>
                  <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mr-2">CSS</span>
                  <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mr-2">JavaScript</span>
                  <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mr-2">TypeScript</span>
                  <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mr-2">React.js</span>
                </span>
              </li>
              <li className="mb-2">
                <span className="font-semibold text-lg">Backend:</span>
                <span className="inline-flex flex-wrap">
                  <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 mr-2">Ruby</span>
                  <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 mr-2">Python</span>
                  <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 mr-2">Node.js</span>
                  <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 mr-2">PHP</span>
                </span>
              </li>
              <li className="mb-2">
                <span className="font-semibold text-lg">Bases de datos:</span>
                <span className="inline-flex flex-wrap">
                  <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 mr-2">SQL Server</span>
                  <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 mr-2">PostgreSQL</span>
                  <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 mr-2">MySQL</span>
                </span>
              </li>
              
              <li className="mb-2">
                <span className="font-semibold text-lg">Herramientas de Desarrollo:</span>
                <span className="inline-flex flex-wrap">
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mr-2">WSL (Windows Subsystem for Linux)</span>
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mr-2">Ubuntu</span>
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mr-2">Terminal Linux</span>
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mr-2">Windows Terminal</span>
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mr-2">FileZilla</span>
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mr-2">PuTTY</span>
                </span>
              </li>
              <li className="mb-2">
                <span className="font-semibold text-lg">Otras Tecnologías:</span>
                <span className="inline-flex flex-wrap">
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-2">Power BI</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-2">Visio</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-2">Jira</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-2">ServiceDesk</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-2">Postman</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-2">Docker</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-2">WordPress</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-2">CRM Dynamics 365</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-2">Figma</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-2">Tableau</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-2">Git</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-2">GitHub</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-2">Bitbucket</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-2">Heroku</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-2">SharePoint</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-2">Excel</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-2">Macros</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-2">Tablas Dinámicas</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-2">Locker</span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-2">AWS</span>
                </span>
              </li>
            </ul>
          <p className="mt-4">
            Además, utilizo Next.js, Tailwind CSS y otras herramientas que aprendí con este proyecto.
          </p>
        </div>
      </div>
      <Footer/>

    </div>
  );
};

export default AboutPage;
