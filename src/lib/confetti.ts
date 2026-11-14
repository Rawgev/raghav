interface ConfettiParticle {
  x: number
  y: number
  vx: number
  vy: number
  w: number
  h: number
  color: string
  rotation: number
  rotationSpeed: number
  wobble: number
  wobbleSpeed: number
  shape: 'rect' | 'circle' | 'ribbon'
  opacity: number
  decay: number
  gravity: number
  drag: number
}

const COLORS = [
  '#a855f7', // violet
  '#c084fc', // purple light
  '#8b5cf6', // violet deep
  '#22d3ee', // cyan
  '#38bdf8', // sky
  '#f472b6', // pink
  '#e879f9', // fuchsia
  '#6366f1', // indigo
  '#fbbf24', // gold sparkle
  '#ffffff', // bright sparkle
]

let activeCanvas: HTMLCanvasElement | null = null
let activeCtx: CanvasRenderingContext2D | null = null
let particles: ConfettiParticle[] = []
let animationFrameId: number | null = null

function ensureCanvas(): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D } | null {
  if (typeof window === 'undefined') return null

  if (activeCanvas && activeCtx) {
    return { canvas: activeCanvas, ctx: activeCtx }
  }

  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  const dpr = window.devicePixelRatio || 1
  canvas.style.position = 'fixed'
  canvas.style.inset = '0'
  canvas.style.width = '100vw'
  canvas.style.height = '100vh'
  canvas.style.pointerEvents = 'none'
  canvas.style.zIndex = '99999'
  document.body.appendChild(canvas)

  const updateSize = () => {
    canvas.width = window.innerWidth * dpr
    canvas.height = window.innerHeight * dpr
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.scale(dpr, dpr)
  }
  updateSize()

  activeCanvas = canvas
  activeCtx = ctx

  return { canvas, ctx }
}

function loop() {
  if (!activeCtx || !activeCanvas) return

  activeCtx.clearRect(0, 0, window.innerWidth, window.innerHeight)

  let alive = 0

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]
    if (p.opacity <= 0) continue

    alive++

    p.x += p.vx
    p.y += p.vy
    p.vx *= p.drag
    p.vy = p.vy * p.drag + p.gravity
    p.opacity -= p.decay
    p.rotation += p.rotationSpeed
    p.wobble += p.wobbleSpeed

    activeCtx.save()
    activeCtx.translate(p.x, p.y)
    activeCtx.rotate(p.rotation)
    activeCtx.scale(Math.cos(p.wobble), 1)
    activeCtx.globalAlpha = Math.max(0, p.opacity)
    activeCtx.fillStyle = p.color

    if (p.shape === 'circle') {
      activeCtx.beginPath()
      activeCtx.arc(0, 0, p.w / 2, 0, Math.PI * 2)
      activeCtx.fill()
    } else {
      activeCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
    }

    activeCtx.restore()
  }

  // Filter dead particles periodically
  if (particles.length > 250) {
    particles = particles.filter(p => p.opacity > 0)
  }

  if (alive > 0) {
    animationFrameId = requestAnimationFrame(loop)
  } else {
    // Teardown canvas
    if (animationFrameId) cancelAnimationFrame(animationFrameId)
    animationFrameId = null
    particles = []
    if (activeCanvas && activeCanvas.parentNode) {
      activeCanvas.parentNode.removeChild(activeCanvas)
    }
    activeCanvas = null
    activeCtx = null
  }
}

export function triggerConfetti(origin?: { x: number; y: number }, count = 75) {
  const ready = ensureCanvas()
  if (!ready) return

  const startX = origin?.x ?? window.innerWidth / 2
  const startY = origin?.y ?? window.innerHeight / 2

  for (let i = 0; i < count; i++) {
    // Wide celebratory explosion upward (between -145° and -35°)
    const angle = (Math.random() * 110 - 145) * (Math.PI / 180)
    const speed = Math.random() * 16 + 8

    const shapeRoll = Math.random()
    const shape: 'rect' | 'circle' | 'ribbon' =
      shapeRoll < 0.6 ? 'rect' : shapeRoll < 0.85 ? 'ribbon' : 'circle'

    particles.push({
      x: startX + (Math.random() - 0.5) * 20,
      y: startY + (Math.random() - 0.5) * 10,
      vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 6,
      vy: Math.sin(angle) * speed - Math.random() * 3,
      w: shape === 'ribbon' ? Math.random() * 4 + 3 : Math.random() * 8 + 6,
      h: shape === 'ribbon' ? Math.random() * 16 + 10 : Math.random() * 8 + 6,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.22,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.12 + 0.06,
      shape,
      opacity: 1,
      decay: Math.random() * 0.007 + 0.007,
      gravity: 0.36,
      drag: 0.94,
    })
  }

  if (!animationFrameId) {
    animationFrameId = requestAnimationFrame(loop)
  }
}

/**
 * Fires a multi-stage celebratory burst:
 * Primary burst straight up from the button, followed by left & right flank cannons.
 */
export function fireCelebrationBurst(origin?: { x: number; y: number }) {
  triggerConfetti(origin, 85)

  setTimeout(() => {
    if (origin) {
      triggerConfetti({ x: origin.x - 35, y: origin.y - 10 }, 45)
      triggerConfetti({ x: origin.x + 35, y: origin.y - 10 }, 45)
    } else {
      triggerConfetti(undefined, 60)
    }
  }, 160)
}
