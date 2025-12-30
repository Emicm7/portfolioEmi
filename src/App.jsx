import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navigation from './components/Navigation';
import LanguageSwitch from './components/LanguageSwitch';
import AnimatedBackground from './components/AnimatedBackground';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <AnimatedBackground />
          <LanguageSwitch />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Navigation />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
