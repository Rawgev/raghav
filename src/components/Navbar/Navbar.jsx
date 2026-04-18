import { useState } from 'react'
import { useIsMobile } from '../../hooks/useIsMobile'
import { personal } from '../../data'

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const isMobile = useIsMobile()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: isMobile ? '1rem 1.2rem' : '1.1rem 3rem',
        borderBottom: '1px solid var(--border)',
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(7,6,15,0.88)', backdropFilter: 'blur(14px)',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>
            Welcome to{' '}
            <span style={{ fontFamily: "'Dancing Script',cursive", color: 'var(--violet3)', fontSize: '1.2rem' }}>
              {personal.name}'s
            </span>
          </div>
        </div>

        {/* Desktop links */}
        {!isMobile && (
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
            {links.map(link => (
              <li key={link.href}>
                <a href={link.href}
                  style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.82rem', letterSpacing: '0.04em', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.target.style.color = 'var(--violet3)')}
                  onMouseLeave={e => (e.target.style.color = 'var(--muted)')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{ background: 'none', border: '1px solid var(--border)', borderRadius: 8, padding: '6px 10px', cursor: 'pointer', color: 'var(--text)', fontSize: '1.1rem' }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        )}
      </nav>

      {/* Mobile dropdown menu */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: 60, left: 0, right: 0, zIndex: 99,
          background: 'rgba(10,8,22,0.97)', backdropFilter: 'blur(14px)',
          borderBottom: '1px solid var(--border)',
          display: 'flex', flexDirection: 'column',
        }}>
          {links.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ padding: '1rem 1.5rem', color: 'var(--muted)', textDecoration: 'none', fontSize: '0.95rem', borderBottom: '1px solid var(--border)', transition: 'color 0.2s, background 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--violet3)'; e.currentTarget.style.background = 'rgba(120,50,220,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)';   e.currentTarget.style.background = 'transparent' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
