import { useGreeting } from '../../hooks/useGreeting'
import { useTypewriter } from '../../hooks/useTypewriter'
import { personal } from '../../data'
import MagicButton from '../ui/MagicButton'

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)

export default function Hero() {
  const greeting  = useGreeting()
  const typedRole = useTypewriter(personal.roles)
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (

    <section id="home" style={{
      minHeight: '92vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4rem 2rem',
    }}>
      <p style={{ fontSize: '0.875rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.4rem' }}>
        {greeting}
      </p>


     <h1
  style={{
    fontSize: 'clamp(3.2rem,8vw,6rem)',
    fontWeight: 900,
    lineHeight: 1.05,
    marginBottom: '1.5rem',
    color: '#f5f0ff',
    minHeight: '120px',
  }}
>
  <span>{typedRole}</span>
  <span className="typed-cursor" />
</h1>

<p
  style={{
    fontSize: 'clamp(1rem,2vw,1.2rem)',
    color: 'rgba(200,190,255,0.68)',
    marginBottom: '2.5rem',
    maxWidth: 700,
    lineHeight: 1.7,
  }}
>
  Crafting immersive and modern web experiences with React, Javascript, TypeScript and MERN stack technologies.
</p>

      <MagicButton
        title="Show My Work"
        icon={<SendIcon />}
        position="right"
        handleClick={scrollToProjects}
      />
    </section>
    
  )
}
