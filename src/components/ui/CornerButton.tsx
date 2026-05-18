import type { ReactNode, MouseEvent } from 'react'

interface CornerButtonProps {
  href?: string
  children: ReactNode
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

export default function CornerButton({ href = '#', children, onClick }: CornerButtonProps) {
  return (
    <a href={href} className="corner-btn" onClick={onClick}>
      <span className="c3" />
      <span className="c4" />
      {children}
    </a>
  )
}
