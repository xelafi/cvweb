import React from 'react';
import formationsData from '@data/formations.json';

const Education = () => {
  const formatDate = (dateStr) => {
    const [year, month] = dateStr.split('-');
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section className="formations">
      <div className="formations__container">
        <h2 className="formations__title">Formation</h2>
        <div className="formations__list">
          {formationsData.map((formation, index) => (
            <div key={index} className="formation-card">
              <div className="formation-card__header">
                <div className="formation-card__info">
                  <h3 className="formation-card__diplome">{formation.formation}</h3>
                  <h4 className="formation-card__etablissement">{formation.etablissement}</h4>
                  <p className="formation-card__lieu">{formation.lieu}</p>
                </div>
                <div className="formation-card__periode">
                  {formatDate(formation.debut)} - {formatDate(formation.fin)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
