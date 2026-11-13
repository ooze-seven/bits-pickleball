import { useEffect } from 'react'
import Lenis from 'lenis'
import { useLocation } from 'react-router-dom'

export function useLenis() {
  const location = useLocation()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      touchMultiplier: 1.1,
    })

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)
    document.documentElement.classList.add('lenis', 'lenis-smooth')

    return () => {
      cancelAnimationFrame(frame)
      document.documentElement.classList.remove('lenis', 'lenis-smooth')
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [location.pathname])
}
