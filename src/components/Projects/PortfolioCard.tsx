import { useRef } from 'react'
import type { CSSProperties } from 'react'
import type { Project } from '../../data'

interface PortfolioCardProps {
  project: Project
}

interface FloatPosition {
  top?: number
  bottom?: number
  left?: number
  right?: number
}

const FLOAT_POSITIONS: FloatPosition[] = [
  { top: 14, left: 10 },
  { top: 14, right: 10 },
  { bottom: 14, left: 10 },
  { bottom: 14, right: 10 },
]

const windowDotColors = ['#ff5f57', '#febc2e', '#28c840'] as const

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const screenRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (screenRef.current) {
      screenRef.current.style.transform = 'scale(1.04) translateY(-4px)'
      screenRef.current.style.boxShadow = '0 12px 40px rgba(120,40,255,0.25)'
    }
  }
  const handleMouseLeave = () => {
    if (screenRef.current) {
      screenRef.current.style.transform = ''
      screenRef.current.style.boxShadow = ''
    }
  }

  return (
    <div
      style={{ background: 'var(--card)', border: '1px solid rgba(140,80,255,0.18)', borderRadius: 18, padding: '1.6rem', display: 'flex', flexDirection: 'column', transition: 'border-color 0.3s' }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border2)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(140,80,255,0.18)')}
    >
      {/* Preview area */}
      <div style={{ position: 'relative', height: 200, borderRadius: 12, background: '#060410', border: '1px solid var(--border)', overflow: 'hidden', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        {/* Pulsing glow */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 60%,rgba(120,40,220,0.18) 0%,transparent 70%)', animation: 'glowPulse 3s ease-in-out infinite', pointerEvents: 'none' }} />

        {/* Floating tech tags */}
        {(project.floatTags ?? []).map((tag, i) => (
          <div key={tag} style={{
            position: 'absolute',
            fontSize: '0.62rem', fontWeight: 600,
            background: 'rgba(14,10,30,0.9)', border: '1px solid rgba(140,80,255,0.3)',
            borderRadius: 6, padding: '3px 8px', color: 'var(--violet3)',
            animation: 'floatTag 4s ease-in-out infinite',
            animationDelay: `${i * 0.5}s`,
            zIndex: 3, pointerEvents: 'none',
            ...(FLOAT_POSITIONS[i] as CSSProperties),
          }}>
            {tag}
          </div>
        ))}

        {/* Browser mockup */}
        <div
          ref={screenRef}
          style={{ width: '68%', height: '68%', background: 'rgba(10,7,24,0.95)', borderRadius: 8, border: '1px solid rgba(140,80,255,0.3)', display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative', zIndex: 2, transition: 'transform 0.4s ease, box-shadow 0.4s ease' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Browser bar */}
          <div style={{ background: 'rgba(100,50,200,0.18)', padding: '5px 10px', display: 'flex', alignItems: 'center', gap: 5 }}>
            {windowDotColors.map(c => (
              <div key={c} style={{ width: 6, height: 6, borderRadius: '50%', background: c }} />
            ))}
            <span style={{ fontSize: '0.52rem', color: 'var(--muted)', flex: 1, textAlign: 'center', letterSpacing: '0.03em' }}>
              raghav.dev
            </span>
          </div>
          {/* Screen body */}
          <div style={{ flex: 1, padding: '8px 10px', display: 'flex', flexDirection: 'column', gap: 4, overflow: 'hidden' }}>
            <div style={{ fontSize: '0.62rem', fontWeight: 700, color: 'rgba(192,132,252,0.9)', fontFamily: "'Dancing Script',cursive" }}>
              Raghav<span className="typed-cursor" style={{ width: 2, height: 8 }} />
            </div>
            {(['90%', '70%', '80%'] as const).map((w, i) => (
              <div key={i} style={{ height: 5, borderRadius: 2, background: 'rgba(140,80,255,0.15)', width: w, margin: '1px 0' }} />
            ))}
            <div style={{ height: 14, width: 60, borderRadius: 4, background: 'rgba(120,50,220,0.3)', border: '1px solid rgba(160,80,255,0.3)', marginTop: 4 }} />
          </div>
        </div>
      </div>

      {/* Text */}
      <p style={{ fontSize: '0.68rem', color: 'var(--muted)', marginBottom: '0.6rem', letterSpacing: '0.03em' }}>{project.url}</p>
      <p style={{ fontSize: '1rem', fontWeight: 700, fontStyle: 'italic', marginBottom: '0.3rem' }}>{project.title} — {project.subtitle}</p>
      <p style={{ color: 'var(--muted)', fontSize: '0.8rem', lineHeight: 1.65, marginBottom: '1rem', flex: 1 }}>{project.description}</p>

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto' }}>
        <div style={{ display: 'flex', gap: '0.4rem' }}>
          {project.techIcons.map(t => (
            <div key={t} style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(100,50,200,0.14)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', color: 'var(--muted)', fontWeight: 700 }}>{t}</div>
          ))}
        </div>
        <a href={project.liveLink} target="_blank" rel="noreferrer" style={{ marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--violet3)', textDecoration: 'none', transition: 'opacity 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Live Site ➤
        </a>
      </div>
    </div>
  )
}
