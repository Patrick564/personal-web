import Image from 'next/image'

import About from '../components/About.js'
import Contact from '../components/Contact.js'
import Presentation from '../components/Presentation.js'
import Projects from '../components/Projects.js'

export default function Home() {
  return (
    <div className='wrapper'>
      <Presentation />

      <About />

      <Projects />

      <Contact />
    </div>
  )
}
