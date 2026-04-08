import { useState, useEffect } from 'react'

export function useTypewriter(words, typingSpeed = 90, deletingSpeed = 55, pauseMs = 1800) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) setTimeout(() => setDeleting(true), pauseMs)
      } else {
        const next = current.slice(0, text.length - 1)
        setText(next)
        if (next === '') {
          setDeleting(false)
          setWordIndex(i => (i + 1) % words.length)
        }
      }
    }, deleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs])

  return text
}
