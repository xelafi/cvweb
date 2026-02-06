import React from 'react';
import useIntersectionObserver from '@/reactjs/hooks/useIntersectionObserver';
import GridIconCard from '@layouts/GridIconCard';
import { useLanguage } from '@/contexts/LanguageContext';

const Skills = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const { t } = useLanguage();

  const stack = [
    { type: 'react', href:'https://react.dev' },
    { type: 'redux', href:'https://redux.js.org' },
    { type: 'vite', href: 'https://vite.dev' },
    { type: 'webpack', href: 'https://webpack.js.org'},
    { type: 'storybook', href:'https://storybook.js.org'},
    { type: 'jest', href: 'https://jestjs.io'},
    { type: 'nodejs', href: 'https://nodejs.org'},
    { type: 'typescript', href: 'https://www.typescriptlang.org'},
    { type: 'js', href: 'https://developer.mozilla.org/fr/docs/Web/JavaScript'},
    { type: 'html', href: 'https://developer.mozilla.org/fr/docs/Web/HTML'},
    { type: 'css', href: 'https://developer.mozilla.org/fr/docs/Web/CSS'},
    { type: 'figma', href: 'https://www.figma.com/'}
  ];

  return (
    <section id="skills" className="competences" ref={ref}>
      <div className="competences__container">
        <h2 className={`competences__title animate-on-scroll ${isVisible ? 'animate-fade-in-up' : ''}`}>
          {t.sections.skills}
        </h2>
        <div className={`animate-on-scroll ${isVisible ? 'animate-fade-in-up animate-delay-200' : ''}`}>
          <GridIconCard icons={stack} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
