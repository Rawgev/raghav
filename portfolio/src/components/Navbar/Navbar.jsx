import { personal } from '../../data'

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.1rem 3rem',
      borderBottom: '1px solid var(--border)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(7,6,15,0.88)',
      backdropFilter: 'blur(14px)',
    }}>
      <a
        href="#home"
        style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', textDecoration: 'none' }}
      >
        Welcome to{' '}
        <span style={{
          fontFamily: "'Dancing Script', cursive",
          color: 'var(--violet3)',
          fontSize: '1.25rem',
        }}>
          {personal.name}'s
        </span>
      </a>

      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        {links.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.82rem', letterSpacing: '0.04em', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.target.style.color = 'var(--violet3)')}
              onMouseLeave={e => (e.target.style.color = 'var(--muted)')}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
