import About from '../components/About.js'
import Contact from '../components/Contact/Contact.js'
import Navbar from '../components/Navbar/Navbar.jsx'
import Presentation from '../components/Presentation.js'
import Projects from '../components/Projects.js'
import TranslateButton from '../components/TranslateButton.js'

export default function Home() {
  return (
    <div className='wrapper'>
      <Navbar />
      <Presentation />

      <About />

      <Projects />

      <Contact />

      <TranslateButton />
    </div>
  )
}
