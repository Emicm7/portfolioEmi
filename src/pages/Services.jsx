import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import '../styles/Services.css';

const Services = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const categories = [
    {
      title: t.services.categories.languages,
      tech: t.services.tech.languages,
      icon: '<>'
    },
    {
      title: t.services.categories.frameworks,
      tech: t.services.tech.frameworks,
      icon: '⚛️'
    },
    {
      title: t.services.categories.others,
      tech: t.services.tech.others,
      icon: '⚡'
    },
    {
      title: t.services.categories.databases,
      tech: t.services.tech.databases,
      icon: '{}'
    },
    {
      title: t.services.categories.cloud,
      tech: t.services.tech.cloud,
      icon: '☁️'
    }
  ];

  return (
    <div className="services-container">
      <h1 className="services-title">{t.services.title}</h1>
      <div className="services-content">
        <div className="services-main-card">
          <h2 className="services-main-title">{t.services.backend.title}</h2>
          <p className="services-main-description">{t.services.backend.description}</p>
          
          <div className="services-categories">
            {categories.map((category, index) => (
              <div key={index} className="services-category-card">
                <div className="services-category-icon">{category.icon}</div>
                <h3 className="services-category-title">{category.title}</h3>
                <ul className="services-category-list">
                  {category.tech.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;



