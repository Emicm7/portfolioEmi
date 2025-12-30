import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import SocialLinks from '../components/SocialLinks';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailConfig';
import '../styles/Contact.css';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({ show: false, message: '', type: 'success' });
      }, 5000); // Ocultar después de 5 segundos

      return () => clearTimeout(timer);
    }
  }, [notification.show]);

  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };
    let isValid = true;

    // Validar nombre
    if (!formData.name.trim()) {
      newErrors.name = t.contact.errors.required;
      isValid = false;
    }

    // Validar email
    if (!formData.email.trim()) {
      newErrors.email = t.contact.errors.required;
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.contact.errors.emailInvalid;
      isValid = false;
    }

    // Validar mensaje
    if (!formData.message.trim()) {
      newErrors.message = t.contact.errors.required;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar formulario
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: emailConfig.recipientEmail
        },
        emailConfig.publicKey
      );

      showNotification(
        t.contact.success,
        'success'
      );
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      showNotification(
        t.contact.error,
        'error'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">{t.contact.title}</h1>
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-group">
            <label htmlFor="name">{t.contact.name}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'contact-input-error' : ''}
            />
            {errors.name && <span className="contact-error-message">{errors.name}</span>}
          </div>
          <div className="contact-form-group">
            <label htmlFor="email">{t.contact.email}</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'contact-input-error' : ''}
            />
            {errors.email && <span className="contact-error-message">{errors.email}</span>}
          </div>
          <div className="contact-form-group">
            <label htmlFor="message">{t.contact.message}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className={errors.message ? 'contact-input-error' : ''}
            />
            {errors.message && <span className="contact-error-message">{errors.message}</span>}
          </div>
          {notification.show ? (
            <div className={`contact-notification contact-notification-${notification.type}`}>
              <span className="contact-notification-icon">
                {notification.type === 'success' ? '✓' : '✕'}
              </span>
              <span className="contact-notification-message">{notification.message}</span>
            </div>
          ) : (
            <button type="submit" className="contact-submit" disabled={isSubmitting}>
              {isSubmitting 
                ? t.contact.sending
                : t.contact.submit
              }
            </button>
          )}
        </form>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Contact;



