import { useState } from 'react'
import '@css/main.scss'
import { LanguageProvider } from './contexts/LanguageContext'

import Navbar from './reactjs/components/Navbar'
import Presentation from './reactjs/sections/Presentation'
import Skills from './reactjs/sections/Skills'
import Experiences from './reactjs/sections/Experiences'
import Education from './reactjs/sections/Education'

//import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <LanguageProvider>
      <Navbar />
      <Presentation />
      <Skills />
      <Experiences />
      <Education />
    </LanguageProvider>
  )
}

export default App
