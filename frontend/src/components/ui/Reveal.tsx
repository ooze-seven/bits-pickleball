import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { watchVisibility } from '../../lib/visibility'
import './Reveal.css'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
}

/**
 * Fades and slides its children in when they scroll into view. The motion is a
 * CSS transition (see Reveal.css), so the browser runs it off the main thread
 * and it can't stall scrolling.
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 36,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const stop = watchVisibility(
      element,
      (isVisible) => {
        if (isVisible) {
          setVisible(true)
          if (once) stop()
        } else if (!once) {
          setVisible(false)
        }
      },
      '-8% 0px',
    )
    return stop
  }, [once])

  const style = { '--reveal-y': `${y}px`, '--reveal-delay': `${delay}s` } as CSSProperties

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  )
}
