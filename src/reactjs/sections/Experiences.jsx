import React from 'react';
import experiencesDataFr from '@data/fr/experiences.json';
import experiencesDataEn from '@data/en/experiences.json';
import Timeline from '@components/Timeline';
import { useLanguage } from '@/contexts/LanguageContext';

const Experiences = () => {
  const { language, t } = useLanguage();
  const experiencesData = language === 'fr' ? experiencesDataFr : experiencesDataEn;

  const formatDate = (dateStr) => {
    if (dateStr.toLowerCase() === 'present') return t.common.present;
    const [year, month] = dateStr.split('-');
    const months = [t.months.jan, t.months.feb, t.months.mar, t.months.apr, t.months.may, t.months.jun, t.months.jul, t.months.aug, t.months.sep, t.months.oct, t.months.nov, t.months.dec];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section id="experiences" className="experiences">
      <div className="experiences__container">
        <h2 className="experiences__title">
          {t.sections.experiences}
        </h2>
        <Timeline>
          {experiencesData.map((exp, index) => (
            <Timeline.Item key={index}>
              <div className="experience-card">
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
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default Experiences;
