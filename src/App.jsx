import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <div className="grid-bg">
      {/* Glow blobs */}
      <div style={{ position: 'fixed', width: 380, height: 380, background: 'rgba(100,30,220,0.2)', borderRadius: '50%', filter: 'blur(90px)', top: -100, left: -100, zIndex: 0, pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', width: 280, height: 280, background: 'rgba(140,40,200,0.14)', borderRadius: '50%', filter: 'blur(90px)', top: -60, right: -60, zIndex: 0, pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', width: 260, height: 260, background: 'rgba(80,20,180,0.12)', borderRadius: '50%', filter: 'blur(90px)', top: '50%', left: '30%', zIndex: 0, pointerEvents: 'none' }} />
<div style={{ position: 'relative', zIndex: 1 }}>
  <Navbar />
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Experience />
  <Contact />
  <Footer />    
</div>
    </div>
  )
}
