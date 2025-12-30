import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import '../styles/Navigation.css';

const Navigation = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const t = translations[language];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { path: '/', key: 'home' },
    { path: '/about', key: 'about' },
    { path: '/works', key: 'works' },
    { path: '/services', key: 'services' },
    { path: '/contact', key: 'contact' }
  ];

  return (
    <nav className="navigation">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
        >
          {isActive(item.path) ? `{${t.nav[item.key]}}` : t.nav[item.key]}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;



