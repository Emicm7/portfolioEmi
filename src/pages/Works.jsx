import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import rtoPreview from '../assets/rto/Captura de pantalla 2025-11-27 152251.png';
import calingastaPreview from '../assets/calingasta/Captura de pantalla 2025-12-01 155233.png';
import torchainPreview from '../assets/torchain/Captura de pantalla 2025-12-01 155843.png';
import '../styles/Works.css';

const Works = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: t.works.rto.title,
      description: t.works.rto.description,
      technologies: ['Node.js', 'Express', 'TypeScript', 'MySQL', 'OAuth', 'JWT', 'AWS S3'],
      website: 'https://www.rtosanjuan.com.ar',
      image: rtoPreview
    },
    {
      title: t.works.ticketera.title,
      description: t.works.ticketera.description,
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Google Maps API', 'SEO'],
      website: 'https://www.calingasta.gob.ar',
      image: calingastaPreview
    },
    {
      title: t.works.torchain.title,
      description: t.works.torchain.description,
      technologies: ['React.js', 'HTML', 'CSS'],
      website: 'https://www.fundaciontorchain.com',
      image: torchainPreview
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <div className="works-container">
      <h1 className="works-title">{t.works.title}</h1>
      <div className="works-content">
        <div className="works-card">
          <div className="works-card-content">
            <h2 className="works-card-title">{project.title}</h2>
            <div className="works-tech-stack">
              {project.technologies.map((tech) => (
                <span key={tech} className="works-tech-pill">
                  {tech}
                </span>
              ))}
            </div>
            <div className="works-card-buttons">
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="works-button website"
              >
                {t.works.website}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
          </div>
          <div className="works-card-images">
            {project.previewUrl ? (
              <div className="works-iframe-wrapper">
                <iframe
                  src={project.previewUrl}
                  title={project.title}
                  loading="lazy"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-pointer-lock allow-popups allow-top-navigation-by-user-activation"
                />
                <div className="works-iframe-overlay">
                  <p>Hover para interactuar</p>
                </div>
              </div>
            ) : project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="works-image"
                loading="lazy"
              />
            ) : (
              <div className="works-image-placeholder">
                <span>{project.title}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <button className="works-nav-button prev" onClick={prevProject}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className="works-nav-button next" onClick={nextProject}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
};

export default Works;



