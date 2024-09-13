import React from 'react';
import './Acerca.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Importar íconos de GitHub y LinkedIn

const Acerca = () => {
  return (
    <div className="acerca-container">
      <h1>Acerca de Mí</h1>
      <p>
        ¡Hola! Mi nombre es Mario Tomás y soy un desarrollador con amplia experiencia en tecnologías como Node.js, Angular, y React. 
        A lo largo de mi carrera, he trabajado en múltiples proyectos donde he implementado y gestionado servidores utilizando 
        <strong> Nginx</strong> y <strong>PM2</strong> para asegurar el despliegue y la escalabilidad de aplicaciones en producción.
      </p>
      <p>
        He sido líder de proyectos y <strong>Scrum Master</strong>, guiando a mis compañeros en la organización y gestión de tareas, siempre manteniendo un enfoque ágil y eficiente. 
        Además, tengo un profundo conocimiento en el desarrollo de aplicaciones backend utilizando Node.js, así como en la creación de interfaces modernas y responsivas con Angular y React.
      </p>
      <p>
        Si deseas conocer más sobre mi trabajo, puedes visitar mis perfiles:
      </p>
      <div className="social-links">
        <a href="https://github.com/rayemer" target="_blank" rel="noopener noreferrer" className="github-link">
          <FontAwesomeIcon icon={faGithub} size="2x" /> {}
          <span>github.com/rayemer</span>
        </a>
        <a href="https://www.linkedin.com/in/rayemer/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
          <FontAwesomeIcon icon={faLinkedin} size="2x" /> {}
          <span>linkedin.com/in/rayemer</span>
        </a>
      </div>
    </div>
  );
};

export default Acerca;
