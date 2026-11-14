import { useEffect, useRef, useState } from 'react'
import FadeSection from '../ui/FadeSection'
import MagicButton from '../ui/MagicButton'
import { personal } from '../../data'
import { fireCelebrationBurst } from '../../lib/confetti'

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)

export default function Contact() {
  const [copyMessage, setCopyMessage] = useState('')
  const buttonWrapperRef = useRef<HTMLDivElement>(null)
  const messageTimer = useRef<number>()

  useEffect(() => {
    return () => {
      if (messageTimer.current) window.clearTimeout(messageTimer.current)
    }
  }, [])

  const handleClick = async () => {
    if (messageTimer.current) window.clearTimeout(messageTimer.current)

    // Trigger high-quality celebration confetti from button origin
    const rect = buttonWrapperRef.current?.getBoundingClientRect()
    const origin = rect
      ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
      : undefined

    fireCelebrationBurst(origin)

    try {
      await navigator.clipboard.writeText(personal.email)
      setCopyMessage('Copied mail')
    } catch {
      window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent("Let's connect")}`
      setCopyMessage('Opening mail app')
    }

    messageTimer.current = window.setTimeout(() => setCopyMessage(''), 3000)
  }

  return (
    <FadeSection>
      <section id="contact" style={{ textAlign: 'center', padding: '5rem 2rem 3rem', borderTop: '1px solid var(--border)' }}>
        <p style={{ color: 'var(--muted)', marginBottom: '0.4rem', fontSize: '0.88rem' }}>
          Ready to take your digital presence to a new level?
        </p>
        <h2 style={{ color: 'rgba(200,185,255,0.55)', marginBottom: '2.5rem', fontSize: '0.95rem', fontWeight: 400, maxWidth: 520, margin: '0 auto 2.5rem' }}>
          Reach out to me today and let's discuss how I can help you achieve your goals
        </h2>
        <div style={{ position: 'relative', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem' }}>
          <div ref={buttonWrapperRef}>
            <MagicButton
              title="Get in touch"
              icon={<SendIcon />}
              position="right"
              handleClick={handleClick}
            />
          </div>
          <p
            aria-live="polite"
            style={{
              minHeight: '1.25rem',
              color: 'var(--violet3)',
              fontSize: '0.88rem',
              fontWeight: 600,
            }}
          >
            {copyMessage}
          </p>
        </div>
      </section>
    </FadeSection>
  )
}
