import React from 'react';
import experiencesData from '@data/experiences.json';

const Experiences = () => {
  const formatDate = (dateStr) => {
    if (dateStr.toLowerCase() === 'present') return 'Présent';
    const [year, month] = dateStr.split('-');
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section className="experiences">
      <div className="experiences__container">
        <h2 className="experiences__title">Expériences Professionnelles</h2>
        <div className="experiences__list">
          {experiencesData.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-card__header">
                <div className="experience-card__info">
                  <h3 className="experience-card__poste">{exp.poste}</h3>
                  <h4 className="experience-card__nom">{exp.nom} - {exp.lieu}</h4>
                </div>
                <div className="experience-card__periode">
                  {formatDate(exp.debut)} - {formatDate(exp.fin)}
                </div>
              </div>
              <ul className="experience-card__missions">
                {exp.missions.map((mission, idx) => (
                  <li key={idx} className="experience-card__mission">{mission}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
