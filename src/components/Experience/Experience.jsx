import { useIsMobile } from '../../hooks/useIsMobile'
import FadeSection from '../ui/FadeSection'
import SectionLabel from '../ui/SectionLabel'
import { experience } from '../../data'

export default function Experience() {
  const isMobile = useIsMobile()
  return (
    <FadeSection>
      <section
        id="experience"
        style={{
          padding: isMobile ? '3rem 1.2rem' : '5rem 3rem',
          maxWidth: 1180,
          margin: '0 auto'
        }}
      >
        <SectionLabel>My Work Experience</SectionLabel>

        <div
          style={{
            marginTop: '1.8rem',
            position: 'relative',
            paddingLeft: isMobile ? '1.5rem' : '2rem'
          }}
        >

          {/* Vertical timeline line */}
          <div style={{
            position: 'absolute', left: 0, top: 8, bottom: 8,
            width: 2,
            background: 'linear-gradient(180deg,var(--violet2),rgba(120,50,220,0.1))',
            borderRadius: 2,
          }} />

          {experience.map(job => (
            <div
              key={job.id}
              style={{ position: 'relative', marginBottom: '2rem', background: 'var(--card2)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.4rem 1.6rem', transition: 'border-color 0.25s, transform 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.transform = 'translateX(4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateX(0)' }}
            >
              {/* Dot on timeline */}
              <div style={{ position: 'absolute', left: '-2.45rem', top: '1.6rem', width: 12, height: 12, borderRadius: '50%', background: 'var(--violet2)', border: '2px solid var(--violet3)', boxShadow: '0 0 10px rgba(160,84,252,0.5)' }} />

              {/* Header row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 700 }}>{job.title}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
                    <span>🏢 {job.company}</span>
                    <span style={{ color: 'rgba(140,80,255,0.4)' }}>•</span>
                    <span>🌐 {job.type}</span>
                    <span style={{ color: 'rgba(140,80,255,0.4)' }}>•</span>
                    <span>📅 {job.period}</span>
                  </div>
                </div>
                <div style={{ fontSize: '0.68rem', padding: '3px 10px', borderRadius: 20, background: 'rgba(100,40,200,0.2)', border: '1px solid rgba(140,60,240,0.3)', color: 'var(--violet3)', whiteSpace: 'nowrap' }}>
                  {job.badge}
                </div>
              </div>

              {/* Bullets */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {job.bullets?.map((b, i) => (
                  <div key={i} style={{ fontSize: '0.8rem', color: 'rgba(180,170,220,0.75)', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--violet3)', fontSize: '0.7rem', flexShrink: 0, marginTop: 2 }}>▸</span>
                    {b}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeSection>
  )
}
