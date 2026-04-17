import { useGreeting } from '../../hooks/useGreeting'
import { useTypewriter } from '../../hooks/useTypewriter'
import { personal } from '../../data'
import CornerButton from '../ui/CornerButton'

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)

export default function Hero() {
  const greeting   = useGreeting()
  const typedRole  = useTypewriter(personal.roles)

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
      <p style={{ fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.4rem' }}>
        {greeting}
      </p>

      <h1 style={{ fontSize: 'clamp(3rem,8vw,5.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.2rem' }}>
        Welcome to{' '}
        <span style={{ fontFamily: "'Dancing Script', cursive", color: 'var(--violet3)', fontSize: '1.1em' }}>
          {personal.name}'s
        </span>
      </h1>

      <p style={{ fontSize: 'clamp(0.95rem,2vw,1.2rem)', color: 'rgba(200,190,255,0.65)', marginBottom: '2.5rem', maxWidth: 520 }}>
        Hi, I'm {personal.name}, a{' '}
        <span>{typedRole}</span>
        <span className="typed-cursor" />
        {' '}based in {personal.location}.
      </p>

      <CornerButton href="#projects">
        Show My Work <SendIcon />
      </CornerButton>
    </section>
  )
}
