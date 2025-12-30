import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import profileImage from '../assets/IMG_7330d.jpg';
import '../styles/About.css';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">{t.about.title}</h1>
        <div className="about-grid">
          <div className="about-image-container">
            <img
              src={profileImage}
              alt="Emiliano Castro"
              className="about-image"
              loading="lazy"
            />
          </div>
          <div className="about-text">
            <p className="about-description">{t.about.description}</p>
            
            <div className="about-section">
              <h2 className="about-section-title">{t.about.education.title}</h2>
              <p className="about-info">
                <strong>{t.about.education.degree}</strong>
                <br />
                {t.about.education.year} - {t.about.education.university}
              </p>
            </div>

            <div className="about-section">
              <h2 className="about-section-title">{t.about.experience.title}</h2>
              <p className="about-info">{t.about.experience.years}</p>
            </div>

            <div className="about-section">
              <h2 className="about-section-title">{t.about.interests.title}</h2>
              <p className="about-info">{t.about.interests.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;



