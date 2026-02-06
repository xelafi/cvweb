import React from 'react';
import formationsDataFr from '@data/fr/formations.json';
import formationsDataEn from '@data/en/formations.json';
import Timeline from '@components/Timeline';
import { useLanguage } from '@/contexts/LanguageContext';

const Education = () => {
  const { language, t } = useLanguage();
  const formationsData = language === 'fr' ? formationsDataFr : formationsDataEn;

  const formatDate = (dateStr) => {
    const [year, month] = dateStr.split('-');
    const months = [t.months.jan, t.months.feb, t.months.mar, t.months.apr, t.months.may, t.months.jun, t.months.jul, t.months.aug, t.months.sep, t.months.oct, t.months.nov, t.months.dec];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section id="education" className="formations">
      <div className="formations__container">
        <h2 className="formations__title">
          {t.sections.education}
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
