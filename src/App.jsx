import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@css/main.scss'

import GridIconCard from '@layouts/GridIconCard'
import IconCard from './reactjs/comopnents/IconCard'
import Navbar from './reactjs/comopnents/Navbar'

//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const stack = [
    { type: 'react', href:'https://react.dev' },
    { type: 'redux', href:'https://redux.js.org' },
    { type: 'vite', href: 'https://vite.dev' },
    { type: 'webpack', href: 'https://webpack.js.org'},
    { type: 'storybook', href:'https://storybook.js.org'},
    { type: 'jest', href: 'https://jestjs.io'},
    { type: 'nodejs', href: 'https://nodejs.org'},
    { type: 'js', href: 'https://developer.mozilla.org/fr/docs/Web/JavaScript'},
    { type: 'html', href: 'https://developer.mozilla.org/fr/docs/Web/HTML'},
    { type: 'css', href: 'https://developer.mozilla.org/fr/docs/Web/CSS'},
    { type: 'figma', href: 'https://www.figma.com/'}
  ];
  
  return (
    <>
      <Navbar />
      <br></br>
      <h1 style={{textAlign:'center'}}>COMPETENCES</h1>
      <GridIconCard icons={stack} />
    </>
  )
}

export default App
