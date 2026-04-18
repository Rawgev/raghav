import { useIsMobile } from '../../hooks/useIsMobile'
import FadeSection from '../ui/FadeSection'
import SectionLabel from '../ui/SectionLabel'
import { techStack } from '../../data'
const codeBg = `// Raghav's stack
import React from 'react'
import express from 'express'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)

const App = () => {
  const [todos, setTodos]
    = useState([])
  return <TodoList />
}`

export default function About() {
  const isMobile = useIsMobile()
  return (
    <FadeSection>
      <section id="about" style={{ padding: '5rem 3rem', maxWidth: 1180, margin: '0 auto' }}>
        <SectionLabel>About me</SectionLabel>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>

          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {/* Passion card */}
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: '2rem', position: 'relative' }}>
              <span style={{ position: 'absolute', top: 10, left: 13, fontSize: '0.85rem', color: 'rgba(180,140,255,0.2)' }}>+</span>
              <span style={{ position: 'absolute', top: 10, right: 13, fontSize: '0.85rem', color: 'rgba(180,140,255,0.2)' }}>+</span>
              <h2 style={{ fontSize: '1.45rem', fontWeight: 800 }}>
                Tech enthusiast with a passion for development.
              </h2>
            </div>

            {/* Collab card */}
            <div style={{ background: 'linear-gradient(135deg,#1a0840 0%,#0c0a1a 100%)', border: '1px solid var(--border)', borderRadius: 16, padding: '2rem', position: 'relative' }}>
              <span style={{ position: 'absolute', top: 10, left: 13, fontSize: '0.85rem', color: 'rgba(180,140,255,0.2)' }}>+</span>
              <span style={{ position: 'absolute', top: 10, right: 13, fontSize: '0.85rem', color: 'rgba(180,140,255,0.2)' }}>+</span>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.4rem' }}>
                I'm very flexible with time zone communications
              </h2>
              <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.7 }}>
                I prioritize client collaboration, fostering open communication at every step of the process.
              </p>
            </div>
          </div>

          {/* Right: code bg + stack */}
          <div style={{ position: 'relative', minHeight: 340 }}>
            <div style={{
              position: 'absolute', inset: 0, borderRadius: 16,
              fontFamily: 'monospace', fontSize: '0.9rem',
              color: 'rgba(180,140,255,0.13)', padding: '1.5rem',
              lineHeight: 1.65, whiteSpace: 'pre', overflow: 'hidden',
              pointerEvents: 'none', background: 'var(--card)',
              border: '1px solid var(--border)',
            }}>
              {codeBg}
            </div>

            <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2rem' }}>
              <SectionLabel>My tech stack</SectionLabel>
              <p style={{ color: 'var(--muted)', fontSize: '0.8rem', margin: '0.3rem 0 0.8rem' }}>
                I constantly try to improve
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '0.6rem' }}>
                {techStack.map(tech => (
                  <div
                    key={tech}
                    style={{ background: 'rgba(100,50,200,0.12)', border: '1px solid rgba(130,70,230,0.2)', borderRadius: 8, padding: '0.55rem 0.8rem', fontSize: '0.82rem', fontWeight: 500, color: 'var(--text)', textAlign: 'center', cursor: 'default', transition: 'background 0.2s, border-color 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(120,60,220,0.22)'; e.currentTarget.style.borderColor = 'rgba(160,90,255,0.45)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(100,50,200,0.12)'; e.currentTarget.style.borderColor = 'rgba(130,70,230,0.2)' }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeSection>
  )
}
