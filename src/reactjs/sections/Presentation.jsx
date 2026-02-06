import React from 'react';
import useIntersectionObserver from '@/reactjs/hooks/useIntersectionObserver';
import presentationDataFr from '@data/fr/presentation.json';
import presentationDataEn from '@data/en/presentation.json';
import profilePhoto from '@/assets/profile.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const Presentation = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const { language } = useLanguage();
  const presentationData = language === 'fr' ? presentationDataFr : presentationDataEn;

  return (
    <section id="presentation" className="presentation" ref={ref}>
      <div className="presentation__container">
        <div className={`presentation__photo animate-on-scroll ${isVisible ? 'animate-scale-in' : ''}`}>
          <img 
            src={profilePhoto} 
            alt="Photo de profil" 
            className="presentation__photo-img"
          />
        </div>
        <div className="presentation__content">
          <h1 className={`presentation__name animate-on-scroll ${isVisible ? 'animate-fade-in-up' : ''}`}>
            {presentationData.name}
          </h1>
          <h2 className={`presentation__title animate-on-scroll ${isVisible ? 'animate-fade-in-up animate-delay-200' : ''}`}>
            {presentationData.title}
          </h2>
          <p className={`presentation__description animate-on-scroll ${isVisible ? 'animate-fade-in-up animate-delay-300' : ''}`}>
            {presentationData.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
