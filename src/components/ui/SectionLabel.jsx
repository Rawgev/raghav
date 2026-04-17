export default function SectionLabel({ children }) {
  return (
    <p style={{
      fontSize: '0.72rem',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginBottom: '0.5rem',
    }}>
      {children}
    </p>
  )
}
