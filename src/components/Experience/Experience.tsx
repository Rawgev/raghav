import { useIsMobile } from '../../hooks/useIsMobile'
import FadeSection from '../ui/FadeSection'
import SectionLabel from '../ui/SectionLabel'
import { GlowCard } from '../ui/spotlight-card'
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
          margin: '0 auto',
        }}
      >
        <SectionLabel>My Work Experience</SectionLabel>

        <div
          style={{
            marginTop: '1.8rem',
            position: 'relative',
            paddingLeft: isMobile ? '1.35rem' : '2rem',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 8,
              bottom: 8,
              width: 2,
              background: 'linear-gradient(180deg,var(--violet2),rgba(120,50,220,0.1))',
              borderRadius: 2,
            }}
          />

          {experience.map(job => (
            <GlowCard
              key={job.id}
              customSize
              glowColor="purple"
              className="mb-8 w-full overflow-visible rounded-[14px] bg-transparent p-0 shadow-none"
            >
              <div
                style={{
                  position: 'relative',
                  background: 'var(--card2)',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  padding: isMobile ? '1.1rem' : '1.4rem 1.6rem',
                  transition: 'border-color 0.25s, transform 0.25s',
                }}
                onMouseEnter={event => {
                  if (!isMobile) {
                    event.currentTarget.style.borderColor = 'var(--border2)'
                    event.currentTarget.style.transform = 'translateX(4px)'
                  }
                }}
                onMouseLeave={event => {
                  event.currentTarget.style.borderColor = 'var(--border)'
                  event.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: isMobile ? '-1.75rem' : '-2.45rem',
                    top: '1.6rem',
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: 'var(--violet2)',
                    border: '2px solid var(--violet3)',
                    boxShadow: '0 0 10px rgba(160,84,252,0.5)',
                  }}
                />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <div style={{ fontSize: isMobile ? '0.92rem' : '0.98rem', fontWeight: 700 }}>
                      {job.title}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
                      <span>{job.company}</span>
                      <span style={{ color: 'rgba(140,80,255,0.4)' }}>-</span>
                      <span>{job.type}</span>
                      <span style={{ color: 'rgba(140,80,255,0.4)' }}>-</span>
                      <span>{job.period}</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.68rem', padding: '3px 10px', borderRadius: 20, background: 'rgba(100,40,200,0.2)', border: '1px solid rgba(140,60,240,0.3)', color: 'var(--violet3)', whiteSpace: 'nowrap' }}>
                    {job.badge}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {job.bullets?.map((bullet, index) => (
                    <div key={index} style={{ fontSize: '0.8rem', color: 'rgba(180,170,220,0.75)', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--violet3)', fontSize: '0.9rem', flexShrink: 0, marginTop: -1 }}>
                        ›
                      </span>
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>
    </FadeSection>
  )
}
