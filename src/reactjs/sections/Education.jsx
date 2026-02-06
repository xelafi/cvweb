import React from 'react';
import formationsData from '@data/formations.json';
import Timeline from '@components/Timeline';

const Education = () => {
  const formatDate = (dateStr) => {
    const [year, month] = dateStr.split('-');
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section id="education" className="formations">
      <div className="formations__container">
        <h2 className="formations__title">
          Formation
        </h2>
        <Timeline>
          {formationsData.map((formation, index) => (
            <Timeline.Item key={index}>
              <div className="formation-card">
                <div className="formation-card__header">
                  <div className="formation-card__info">
                    <h3 className="formation-card__diplome">{formation.formation}</h3>
                    <h4 className="formation-card__etablissement">{formation.etablissement} - {formation.lieu}</h4>
                  </div>
                  <div className="formation-card__periode">
                    {formatDate(formation.debut)} - {formatDate(formation.fin)}
                  </div>
                </div>
              </div>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default Education;
