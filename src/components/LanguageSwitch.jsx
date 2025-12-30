import { useLanguage } from '../context/LanguageContext';
import '../styles/LanguageSwitch.css';

const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button className="language-switch" onClick={toggleLanguage}>
      {language === 'es' ? (
        <>
          <span className="flag">🇪🇸</span>
          <span>ES</span>
        </>
      ) : (
        <>
          <span className="flag">🇬🇧</span>
          <span>EN</span>
        </>
      )}
    </button>
  );
};

export default LanguageSwitch;

