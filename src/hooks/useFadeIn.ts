import { useEffect, useRef, useState, type RefObject } from 'react'

interface UseFadeInReturn {
  ref: RefObject<HTMLDivElement>
  visible: boolean
}

export function useFadeIn(threshold = 0.12): UseFadeInReturn {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}
