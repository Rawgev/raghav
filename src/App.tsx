import Navbar     from './components/Navbar/Navbar'
import Hero       from './components/Hero/Hero'
import About      from './components/About/About'
import Projects   from './components/Projects/Projects'
import Skills     from './components/Skills/Skills'
import Contact    from './components/Contact/Contact'
import Footer     from './components/Footer/Footer'
import { BeamsBackground } from './components/ui/beams-background'

export default function App() {
  return (
    <BeamsBackground intensity="subtle" className="grid-bg">
    <div
  className="min-h-screen bg-[#060816]/50"
  style={{ position: 'relative', zIndex: 1 }}
>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </BeamsBackground>
  )
}
