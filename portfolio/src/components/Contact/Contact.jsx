import FadeSection from '../ui/FadeSection'
import CornerButton from '../ui/CornerButton'
import { personal } from '../../data'

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)

export default function Contact() {
  const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent("Let's connect")}`

  return (
    <FadeSection>
      <section id="contact" style={{ textAlign: 'center', padding: '5rem 2rem 3rem', borderTop: '1px solid var(--border)' }}>
        <p style={{ color: 'var(--muted)', marginBottom: '0.4rem', fontSize: '0.88rem' }}>
          Ready to take your digital presence to a new level?
        </p>
        <h2 style={{ color: 'rgba(200,185,255,0.55)', marginBottom: '2.5rem', fontSize: '0.95rem', fontWeight: 400, maxWidth: 520, margin: '0 auto 2.5rem' }}>
          Reach out to me today and let's discuss how I can help you achieve your goals
        </h2>
        <CornerButton
          href={mailtoLink}
          onClick={(event) => {
            event.preventDefault()
            window.location.href = mailtoLink
          }}
        >
          Get in touch <SendIcon />
        </CornerButton>
      </section>
    </FadeSection>
  )
}
