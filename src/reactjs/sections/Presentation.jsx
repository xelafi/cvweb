import React from 'react';
import presentationData from '@data/presentation.json';

const Presentation = () => {
  return (
    <section id="presentation" className="presentation">
      <div className="presentation__container">
        <div className="presentation__photo">
          <img 
            src={presentationData.photo} 
            alt="Photo de profil" 
            className="presentation__photo-img"
          />
        </div>
        <div className="presentation__content">
          <h1 className="presentation__name">{presentationData.name}</h1>
          <h2 className="presentation__title">{presentationData.title}</h2>
          <p className="presentation__description">
            {presentationData.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
