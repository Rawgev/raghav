import { useEffect, useRef } from 'react'
import type { Project } from '../../data'

interface MernCardProps {
  project: Project
}

interface Particle {
  x: number
  y: number
  r: number
  dx: number
  dy: number
  alpha: number
}

export default function MernCard({ project }: MernCardProps) {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const mockupRef  = useRef<HTMLDivElement>(null)
  const visibleRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (!rect) return
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width  = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const width = canvas.parentElement?.clientWidth || canvas.width
    const height = canvas.parentElement?.clientHeight || canvas.height

    const particles: Particle[] = Array.from({ length: reducedMotion ? 14 : 24 }, () => ({
      x:     Math.random() * width,
      y:     Math.random() * height,
      r:     Math.random() * 1.8 + 0.4,
      dx:    (Math.random() - 0.5) * 0.35,
      dy:    (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.15,
    }))

    let animId: number
    const draw = () => {
      const logicalWidth = canvas.parentElement?.clientWidth || canvas.width
      const logicalHeight = canvas.parentElement?.clientHeight || canvas.height

      ctx.clearRect(0, 0, logicalWidth, logicalHeight)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(160,84,252,${p.alpha})`
        ctx.fill()
        p.x += p.dx; p.y += p.dy
        if (p.x < 0 || p.x > logicalWidth)  p.dx *= -1
        if (p.y < 0 || p.y > logicalHeight) p.dy *= -1
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x
          const dy   = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 70) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(140,60,230,${0.15 * (1 - dist / 70)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      if (visibleRef.current && !reducedMotion) {
        animId = requestAnimationFrame(draw)
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting
        if (entry.isIntersecting) {
          cancelAnimationFrame(animId)
          draw()
        }
      },
      { threshold: 0.1 },
    )

    const resizeObserver = new ResizeObserver(resize)
    observer.observe(canvas)
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement)

    draw()
    return () => {
      observer.disconnect()
      resizeObserver.disconnect()
      cancelAnimationFrame(animId)
    }
  }, [])

  const handleMouseEnter = () => {
    if (mockupRef.current) {
      mockupRef.current.style.transform = 'scale(1.04) translateY(-4px)'
      mockupRef.current.style.boxShadow = '0 12px 40px rgba(120,40,255,0.25)'
    }
  }
  const handleMouseLeave = () => {
    if (mockupRef.current) {
      mockupRef.current.style.transform = ''
      mockupRef.current.style.boxShadow = ''
    }
  }

  const todoRows: Array<[string, string]> = [
    ['done', '70%'],
    ['done', '85%'],
    ['',     '60%'],
    ['',     '75%'],
  ]

  return (
    <div
      style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 18, padding: '1.6rem', display: 'flex', flexDirection: 'column', transition: 'border-color 0.3s', cursor: 'default' }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border2)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
    >
      {/* Preview area */}
      <div style={{ position: 'relative', height: 200, borderRadius: 12, background: '#060410', border: '1px solid var(--border)', overflow: 'hidden', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        {/* Scan line */}
        <div style={{ position: 'absolute', left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,transparent,rgba(160,84,252,0.6),transparent)', animation: 'scan 3s ease-in-out infinite', zIndex: 3, pointerEvents: 'none' }} />

        {/* Particle canvas */}
        <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 1, width: '100%', height: '100%' }} />

        {/* Browser mockup */}
        <div
          ref={mockupRef}
          style={{ width: '68%', height: '68%', background: 'rgba(12,8,28,0.95)', borderRadius: 8, border: '1px solid rgba(130,70,230,0.35)', display: 'grid', gridTemplateRows: '26px 1fr', overflow: 'hidden', position: 'relative', zIndex: 2, transition: 'transform 0.4s ease, box-shadow 0.4s ease' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Top bar */}
          <div style={{ background: 'rgba(100,50,200,0.22)', display: 'flex', alignItems: 'center', gap: 5, padding: '0 10px' }}>
            {(['#ff5f57', '#febc2e', '#28c840'] as const).map(c => (
              <div key={c} style={{ width: 6, height: 6, borderRadius: '50%', background: c }} />
            ))}
          </div>
          {/* Body */}
          <div style={{ padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}>
            <div style={{ height: 9, borderRadius: 3, background: 'rgba(140,80,255,0.18)', width: '55%', marginBottom: 4 }} />
            {todoRows.map(([done, w], i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 9, height: 9, borderRadius: 2, flexShrink: 0, background: done ? 'rgba(160,84,252,0.6)' : 'transparent', border: done ? 'none' : '1px solid rgba(160,84,252,0.5)' }} />
                <div style={{ height: 7, borderRadius: 2, background: 'rgba(140,80,255,0.2)', width: w, flex: 1 }} />
              </div>
            ))}
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
