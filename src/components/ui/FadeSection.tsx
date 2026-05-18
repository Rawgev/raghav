import type { ReactNode } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn'

interface FadeSectionProps {
  children: ReactNode
  className?: string
}

export default function FadeSection({ children, className = '' }: FadeSectionProps) {
  const { ref, visible } = useFadeIn()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.65s ease, transform 0.65s ease',
        contentVisibility: 'auto',
        containIntrinsicSize: '1px 640px',
      }}
    >
      {children}
    </div>
  )
}
