'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedGradientBackgroundProps {
  className?: string
  children?: ReactNode
  intensity?: 'subtle' | 'medium' | 'strong'
}

interface Beam {
  x: number
  y: number
  width: number
  length: number
  angle: number
  speed: number
  opacity: number
  hue: number
  pulse: number
  pulseSpeed: number
}

function createBeam(width: number, height: number): Beam {
  const angle = -35 + Math.random() * 10

  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 30 + Math.random() * 60,
    length: height * 2.5,
    angle,
    speed: 0.6 + Math.random() * 1.2,
    opacity: 0.12 + Math.random() * 0.16,
    hue: 190 + Math.random() * 70,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.03,
  }
}

export function BeamsBackground({
  className,
  children,
  intensity = 'subtle',
}: AnimatedGradientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const beamsRef = useRef<Beam[]>([])
  const animationFrameRef = useRef<number>(0)
  const resizeFrameRef = useRef<number>(0)
  const minimumBeams = 6

  const opacityMap = {
    subtle: 0.7,
    medium: 0.85,
    strong: 1,
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const context = ctx

    const updateCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      const width = window.innerWidth
      const height = window.innerHeight

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)

      const totalBeams = Math.round(minimumBeams * 1.5)
      beamsRef.current = Array.from({ length: totalBeams }, () =>
        createBeam(width, height),
      )
    }

    updateCanvasSize()
    const handleResize = () => {
      if (resizeFrameRef.current) return
      resizeFrameRef.current = requestAnimationFrame(() => {
        resizeFrameRef.current = 0
        updateCanvasSize()
      })
    }
    window.addEventListener('resize', handleResize)

    function resetBeam(beam: Beam, index: number, totalBeams: number) {
      const width = window.innerWidth
      const height = window.innerHeight
      const column = index % 3
      const spacing = width / 3

      beam.y = height + 100
      beam.x =
        column * spacing +
        spacing / 2 +
        (Math.random() - 0.5) * spacing * 0.5
      beam.width = 100 + Math.random() * 100
      beam.length = height * 2.5
      beam.speed = 0.5 + Math.random() * 0.4
      beam.hue = 190 + (index * 70) / totalBeams
      beam.opacity = 0.2 + Math.random() * 0.1

      return beam
    }

    function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
      ctx.save()
      ctx.translate(beam.x, beam.y)
      ctx.rotate((beam.angle * Math.PI) / 180)

      const pulsingOpacity =
        beam.opacity *
        (0.8 + Math.sin(beam.pulse) * 0.2) *
        opacityMap[intensity]

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length)

      gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`)
      gradient.addColorStop(
        0.1,
        `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`,
      )
      gradient.addColorStop(
        0.4,
        `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`,
      )
      gradient.addColorStop(
        0.6,
        `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`,
      )
      gradient.addColorStop(
        0.9,
        `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`,
      )
      gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`)

      ctx.fillStyle = gradient
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length)
      ctx.restore()
    }

    const drawFrame = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      context.clearRect(0, 0, width, height)

      const totalBeams = beamsRef.current.length
      beamsRef.current.forEach((beam, index) => {
        beam.y -= beam.speed
        beam.pulse += beam.pulseSpeed

        if (beam.y + beam.length < -100) {
          resetBeam(beam, index, totalBeams)
        }

        drawBeam(context, beam)
      })
    }

    function animate() {
      drawFrame()

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion) {
      drawFrame()
    } else {
      animate()
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (resizeFrameRef.current) {
        cancelAnimationFrame(resizeFrameRef.current)
      }
    }
  }, [intensity])

  return (
    <div
      className={cn(
        'relative min-h-screen w-full overflow-hidden bg-neutral-950',
        className,
      )}
    >
      <canvas
        ref={canvasRef}
        className="fixed inset-0"
        style={{ filter: 'blur(10px)' }}
      />

      <div
        className="fixed inset-0 bg-neutral-950/5"
        style={{
          backdropFilter: 'blur(12px)',
        }}
      />

      {children ? (
        <div className="relative z-10 min-h-screen w-full">{children}</div>
      ) : (
        <div className="relative z-10 flex h-screen w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-6 px-4 text-center">
            <h1
              className="text-6xl font-semibold tracking-tighter text-white md:text-7xl lg:text-8xl"
            >
              Beams
              <br />
              Background
            </h1>
            <p
              className="text-lg tracking-tighter text-white/70 md:text-2xl lg:text-3xl"
            >
              For your pleasure
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
