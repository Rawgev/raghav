export default function CornerButton({ href = '#', children, onClick }) {
  return (
    <a href={href} className="corner-btn" onClick={onClick}>
      <span className="c3" />
      <span className="c4" />
      {children}
    </a>
  )
}
