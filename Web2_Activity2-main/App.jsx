import { useState } from 'react'
import Header from './assets/Components/Header'
import Contact from './assets/Components/Contact'
import Skills from './assets/Components/Skills'
import WorkExp from './assets/Components/WorkExp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-100vh'>
    <Header name="June Angel Montecastro"/>
      <Contact email="juneangelmontecastro12@gmail.com " phone="09917233673" address="kidaco, Daraga, Albay"/>
      <Skills skill1="HTML" skill2="Css" skill3="JavaScript"  skill4="React"  Skill5="C++"/>
      <WorkExp date="2023-2025" date2="2020-2023"/>
    </div>
       
    </>
  )
}

export default App
