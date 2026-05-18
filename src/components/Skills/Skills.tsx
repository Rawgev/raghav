import { useIsMobile } from '../../hooks/useIsMobile'
import FadeSection from '../ui/FadeSection'
import SectionLabel from '../ui/SectionLabel'
import { skills } from '../../data'
import type { SkillVariant } from '../../data'
import type { CSSProperties } from 'react'

const variantStyles: Record<SkillVariant, CSSProperties> = {
  violet: { background: 'rgba(100,40,200,0.2)', border: '1px solid rgba(160,80,255,0.4)' },
  pink:   { background: 'rgba(160,40,160,0.18)', border: '1px solid rgba(200,80,200,0.35)' },
  teal:   { background: 'rgba(20,100,160,0.18)', border: '1px solid rgba(60,140,220,0.3)' },
}

interface OrbitRing {
  size: number
  duration: string
  reverse: boolean
}

const orbitRings: OrbitRing[] = [
  { size: 200, duration: '18s', reverse: false },
  { size: 310, duration: '28s', reverse: true },
  { size: 400, duration: '38s', reverse: false },
]

export default function Skills() {
  const isMobile = useIsMobile()

  return (
    <FadeSection>
      <section id="skills" style={{ padding: '5rem 3rem', maxWidth: 1180, margin: '0 auto' }}>
        <SectionLabel>What I work with</SectionLabel>

        <div style={{
          position: 'relative',
          height: isMobile ? 300 : 420,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '2rem',
          transform: isMobile ? 'scale(0.6)' : 'scale(1)',
          transformOrigin: 'center center',
        }}>
          {orbitRings.map(({ size, duration, reverse }) => (
            <div key={size} style={{
              position: 'absolute',
              borderRadius: '50%',
              width: size,
              height: size,
              border: '1px dashed rgba(120,60,220,0.2)',
              animation: `spin ${duration} linear infinite${reverse ? ' reverse' : ''}`,
            }} />
          ))}

          <div style={{
            width: 110,
            height: 110,
            borderRadius: '50%',
            background: 'radial-gradient(circle,#2a0a5a,#1a0640)',
            border: '2px solid rgba(160,80,255,0.4)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            position: 'relative',
            boxShadow: '0 0 40px rgba(140,40,255,0.2)',
          }}>
            <span style={{ fontSize: '1.5rem' }}>*</span>
            <span style={{ fontSize: '0.68rem', color: 'var(--muted)', marginTop: 2 }}>My Stack</span>
          </div>

          {skills.map(skill => (
            <div
              key={skill.label}
              style={{
                position: 'absolute',
                transform: `translate(${skill.x}px,${skill.y}px)`,
                transition: 'transform 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = `translate(${skill.x}px,${skill.y}px) scale(1.15)`)}
              onMouseLeave={e => (e.currentTarget.style.transform = `translate(${skill.x}px,${skill.y}px)`)}
            >
              <div style={{
                ...variantStyles[skill.variant],
                borderRadius: 10,
                padding: '6px 12px',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--text)',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 20px rgba(100,40,200,0.15)',
              }}>
                {skill.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeSection>
  )
}
