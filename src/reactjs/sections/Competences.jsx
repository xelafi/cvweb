import React from 'react';
import GridIconCard from '@layouts/GridIconCard';

const Competences = () => {
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
    <section className="competences">
      <div className="competences__container">
        <h2 className="competences__title">Compétences</h2>
        <GridIconCard icons={stack} />
      </div>
    </section>
  );
};

export default Competences;
