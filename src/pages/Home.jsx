import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import SocialLinks from '../components/SocialLinks';
import '../styles/Home.css';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const fullText = t.home.roleFull;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    setDisplayText('');
    setCharIndex(0);
    setIsDeleting(false);
  }, [language]);

  useEffect(() => {
    let timeout;

    if (!isDeleting && charIndex < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex === fullText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, fullText, language]);

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-greeting">{t.home.greeting}</h1>
        <h1 className="home-name">
          {t.home.name} {t.home.lastName}
        </h1>
        <div className="home-role">
          <span className="typing-text">{displayText}</span>
          <span className="cursor">|</span>
        </div>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Home;

