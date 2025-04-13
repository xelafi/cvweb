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

  return (
    <>
      <Navbar />
      <br></br>
      <GridIconCard icons={['react','redux','vite','webpack','storybook','jest','nodejs','js', 'html', 'css', 'figma']} />
    </>
  )
}

export default App
