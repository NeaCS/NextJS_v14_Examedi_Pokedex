import React from 'react';

interface Certification {
  title: string;
  href: string;
}

const certifications: Certification[] = [
  { title: 'Scrum', href: 'https://drive.google.com/file/d/1iiOoY8RlGfR4In778887SiO4y4lPW4sQ/view?usp=drive_link' },
  { title: 'AWS Essentialist', href: 'https://drive.google.com/file/d/1_H2Rzz0YxdhsWH3qgDkFKhEfX-nZk3WY/view?usp=drive_link' },
  { title: 'Herramientas Data Science', href: 'https://drive.google.com/file/d/1tLU4DGY1r8UevghOqzWWZ2t5tmlsBT-F/view?usp=drive_link' },
  { title: 'Ruby on Rails', href: 'https://drive.google.com/file/d/1kjbZUNjQ0ywiY-rUimEvL2fVQpDffHVH/view?usp=drive_link' },
  { title: 'Fullstack Ruby on Rails', href: 'https://drive.google.com/file/d/1twraiQjMLWo9owm-ZGnY-eoA8JILYjk8/view?usp=drive_link' },
  { title: 'Gestión de Proyectos', href: 'https://drive.google.com/file/d/1RaiwOFnYjjyNKqLsJdgvsiEreTOihgV7/view?usp=drive_link' },
  { title: 'Wordpress WooCommerce', href: 'https://drive.google.com/file/d/1v79LkNM4DPZRV_u8uH6cHu-10LcOOD5X/view?usp=drive_link' },
];

const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-800 text-white py-10 mx-auto flex max-w-9xl items-center justify-between p-6 lg:px-8" >
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <div className="text-center certifications">
              <h2 className="font-sans text-lg mb-4">Certificaciones</h2>
              <ul className="flex flex-wrap justify-center gap-4 text-base">
                {certifications.map((cert) => (
                  <li key={cert.title} className="text-sm">
                    <a
                      href={cert.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:bg-gray-700 inline-flex items-center rounded-md bg-gray-50 px-2 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                    >
                      {cert.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  

export default Footer;
