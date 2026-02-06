import React, { createContext, useContext, useState, useEffect } from 'react';
import frTranslations from '@data/translations/fr.json';
import enTranslations from '@data/translations/en.json';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    // Si aucune langue n'est sauvegardée, on initialise avec 'fr'
    if (!savedLanguage) {
      localStorage.setItem('language', 'fr');
      return 'fr';
    }
    return savedLanguage;
  });

  const translations = {
    fr: frTranslations,
    en: enTranslations
  };

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const t = translations[language];

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
