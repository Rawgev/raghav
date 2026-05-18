import { useState, useEffect } from 'react'

export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(() => window.innerWidth <= breakpoint)

  useEffect(() => {
    const query = window.matchMedia(`(max-width: ${breakpoint}px)`)
    const handler = () => setIsMobile(query.matches)

    handler()
    query.addEventListener('change', handler)
    return () => query.removeEventListener('change', handler)
  }, [breakpoint])

  return isMobile
}
