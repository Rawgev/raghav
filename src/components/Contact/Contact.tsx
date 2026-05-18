import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import FadeSection from '../ui/FadeSection'
import MagicButton from '../ui/MagicButton'
import { personal } from '../../data'

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)

const confettiPieces = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: 12 + ((i * 37) % 76),
  color: ['#c084fc', '#8b5cf6', '#22d3ee', '#f0abfc'][i % 4],
  rotate: (i % 2 ? 1 : -1) * (80 + i * 9),
  x: (i % 2 ? 1 : -1) * (24 + (i % 5) * 11),
}))

export default function Contact() {
  const [copyMessage, setCopyMessage] = useState('')
  const [showBurst, setShowBurst] = useState(false)
  const [burstKey, setBurstKey] = useState(0)
  const messageTimer = useRef<number>()
  const burstTimer = useRef<number>()

  useEffect(() => {
    return () => {
      if (messageTimer.current) window.clearTimeout(messageTimer.current)
      if (burstTimer.current) window.clearTimeout(burstTimer.current)
    }
  }, [])

  const handleClick = async () => {
    if (messageTimer.current) window.clearTimeout(messageTimer.current)
    if (burstTimer.current) window.clearTimeout(burstTimer.current)

    setBurstKey(key => key + 1)
    setShowBurst(true)

    try {
      await navigator.clipboard.writeText(personal.email)
      setCopyMessage('Copied mail')
    } catch {
      window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent("Let's connect")}`
      setCopyMessage('Opening mail app')
    }

    messageTimer.current = window.setTimeout(() => setCopyMessage(''), 3000)
    burstTimer.current = window.setTimeout(() => setShowBurst(false), 1200)
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
          <AnimatePresence>
            {showBurst && (
              <motion.div
                key={burstKey}
                aria-hidden="true"
                className="pointer-events-none absolute -top-10 left-1/2 h-24 w-72 -translate-x-1/2"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {confettiPieces.map(piece => (
                  <motion.span
                    key={piece.id}
                    className="absolute block h-2 w-2 rounded-[2px]"
                    style={{ left: `${piece.left}%`, top: 44, background: piece.color }}
                    initial={{ y: 0, x: 0, opacity: 1, rotate: 0, scale: 1 }}
                    animate={{ y: -72 - (piece.id % 4) * 12, x: piece.x, opacity: 0, rotate: piece.rotate, scale: 0.7 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          <MagicButton
            title="Get in touch"
            icon={<SendIcon />}
            position="right"
            handleClick={handleClick}
          />
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
