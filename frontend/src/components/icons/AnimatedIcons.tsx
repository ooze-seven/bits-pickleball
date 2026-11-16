import { m } from 'framer-motion'
import { useEffect, useRef, type CSSProperties, type SVGProps } from 'react'
import { watchVisibility } from '../../lib/visibility'
import './AnimatedIcons.css'

/**
 * Pauses an icon's looping CSS animations while it is off screen, so hidden
 * icons don't keep the browser busy every frame. Sets a data attribute
 * directly instead of React state, so nothing re-renders while scrolling.
 */
function usePauseOffscreen() {
  const ref = useRef<SVGSVGElement>(null)
  useEffect(() => {
    const svg = ref.current
    if (!svg) return
    return watchVisibility(svg, (visible) => {
      if (visible) svg.removeAttribute('data-offscreen')
      else svg.setAttribute('data-offscreen', '')
    })
  }, [])
  return ref
}

type IconProps = SVGProps<SVGSVGElement> & { title?: string }

/**
 * Settings for the looping CSS animations in AnimatedIcons.css. Infinite loops run
 * as CSS so the browser animates them off the main thread instead of framer
 * updating SVG attributes every frame.
 */
type LoopVars = {
  /** Duration in seconds. */
  d: number
  /** Start delay in seconds. */
  delay?: number
  /** Peak scale (ai-scale, ai-scale-fade). */
  s?: number
  /** Resting scale (ai-scale-fade). */
  s0?: number
  /** Resting opacity (ai-fade, ai-scale-fade). */
  o0?: number
}

const loop = ({ d, delay = 0, s, s0, o0 }: LoopVars): CSSProperties =>
  ({
    '--d': `${d}s`,
    '--delay': `${delay}s`,
    ...(s === undefined ? {} : { '--s': s }),
    ...(s0 === undefined ? {} : { '--s0': s0 }),
    ...(o0 === undefined ? {} : { '--o0': o0 }),
  }) as CSSProperties

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function IconCourt({ title = 'Courts', ...props }: IconProps) {
  const ref = usePauseOffscreen()
  return (
    <svg viewBox="0 0 48 48" className="anim-icon" {...props} ref={ref}>
      <title>{title}</title>
      <m.rect
        x="6"
        y="8"
        width="36"
        height="32"
        rx="4"
        {...base}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      />
      <m.line
        x1="24"
        y1="8"
        x2="24"
        y2="40"
        {...base}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
      />
      <m.rect
        x="14"
        y="18"
        width="20"
        height="12"
        rx="1"
        {...base}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.4 }}
      />
      <circle
        cx="24"
        cy="24"
        r="2.2"
        fill="currentColor"
        stroke="none"
        className="ai-loop ai-scale"
        style={loop({ d: 2.2, s: 1.25 })}
      />
    </svg>
  )
}

export function IconCoaching({ title = 'Coaching', ...props }: IconProps) {
  const ref = usePauseOffscreen()
  return (
    <svg viewBox="0 0 48 48" className="anim-icon" {...props} ref={ref}>
      <title>{title}</title>
      <m.path
        d="M16 34c2.5-4 6-6 8-6s5.5 2 8 6"
        {...base}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      />
      <m.circle
        cx="24"
        cy="18"
        r="5"
        {...base}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.15 }}
      />
      <m.path
        d="M33 14l4-3m0 0l-1.5 4.5L39 17"
        {...base}
        initial={{ opacity: 0, x: -4 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
        animate={{ rotate: [0, 8, 0] }}
        style={{ transformOrigin: '33px 14px' }}
      />
      <circle
        cx="37"
        cy="11"
        r="1.4"
        fill="currentColor"
        stroke="none"
        className="ai-loop ai-bob"
        style={loop({ d: 1.8 })}
      />
    </svg>
  )
}

export function IconCommunity({ title = 'Community', ...props }: IconProps) {
  const ref = usePauseOffscreen()
  return (
    <svg viewBox="0 0 48 48" className="anim-icon" {...props} ref={ref}>
      <title>{title}</title>
      <m.circle
        cx="18"
        cy="18"
        r="4.2"
        {...base}
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      />
      <m.circle
        cx="30"
        cy="18"
        r="4.2"
        {...base}
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.1 }}
      />
      <m.path
        d="M10 34c1.5-5 4.8-8 8-8s6.5 3 8 8"
        {...base}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      />
      <m.path
        d="M22 34c1.5-5 4.8-8 8-8s6.5 3 8 8"
        {...base}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      />
      <circle
        cx="24"
        cy="26"
        r="1.6"
        fill="currentColor"
        stroke="none"
        className="ai-loop ai-scale-fade"
        style={loop({ d: 2.4, s: 1.35, o0: 0.7 })}
      />
    </svg>
  )
}

export function IconClock({ title = 'Hours', ...props }: IconProps) {
  const ref = usePauseOffscreen()
  return (
    <svg viewBox="0 0 48 48" className="anim-icon" {...props} ref={ref}>
      <title>{title}</title>
      <m.circle
        cx="24"
        cy="24"
        r="14"
        {...base}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <line
        x1="24"
        y1="24"
        x2="24"
        y2="16"
        {...base}
        className="ai-clock-hand"
        style={loop({ d: 8 })}
      />
      <line
        x1="24"
        y1="24"
        x2="30"
        y2="27"
        {...base}
        className="ai-clock-hand"
        style={loop({ d: 48 })}
      />
      <circle cx="24" cy="24" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconPin({ title = 'Location', ...props }: IconProps) {
  const ref = usePauseOffscreen()
  return (
    <svg viewBox="0 0 48 48" className="anim-icon" {...props} ref={ref}>
      <title>{title}</title>
      <m.path
        d="M24 8c-7 0-12 5.2-12 12.2C12 29 24 40 24 40s12-11 12-19.8C36 13.2 31 8 24 8z"
        {...base}
        initial={{ pathLength: 0, opacity: 0.4 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <circle
        cx="24"
        cy="20"
        r="4"
        {...base}
        className="ai-loop ai-scale"
        style={loop({ d: 2, s: 1.12 })}
      />
      <circle
        cx="24"
        cy="40"
        r="1.5"
        fill="currentColor"
        stroke="none"
        className="ai-loop ai-scale-fade"
        style={loop({ d: 2.2, s: 1.2, s0: 0.8, o0: 0.3 })}
      />
    </svg>
  )
}

export function IconMembership({ title = 'Membership', ...props }: IconProps) {
  const ref = usePauseOffscreen()
  return (
    <svg viewBox="0 0 48 48" className="anim-icon" {...props} ref={ref}>
      <title>{title}</title>
      <m.rect
        x="8"
        y="14"
        width="32"
        height="20"
        rx="4"
        {...base}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      />
      <m.line
        x1="8"
        y1="22"
        x2="40"
        y2="22"
        {...base}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      <circle
        cx="16"
        cy="29"
        r="1.6"
        fill="currentColor"
        stroke="none"
        className="ai-loop ai-fade"
        style={loop({ d: 1.6, o0: 0.4 })}
      />
      <circle
        cx="22"
        cy="29"
        r="1.6"
        fill="currentColor"
        stroke="none"
        className="ai-loop ai-fade"
        style={loop({ d: 1.6, delay: 0.25, o0: 0.4 })}
      />
      <circle
        cx="28"
        cy="29"
        r="1.6"
        fill="currentColor"
        stroke="none"
        className="ai-loop ai-fade"
        style={loop({ d: 1.6, delay: 0.5, o0: 0.4 })}
      />
    </svg>
  )
}

export function IconSpark({ title = 'Signal', ...props }: IconProps) {
  const ref = usePauseOffscreen()
  return (
    <svg viewBox="0 0 48 48" className="anim-icon" {...props} ref={ref}>
      <title>{title}</title>
      <m.path
        d="M10 24h6l3-8 5 16 4-10 3 6h7"
        {...base}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      />
      <circle
        cx="10"
        cy="24"
        r="2"
        fill="currentColor"
        stroke="none"
        className="ai-loop ai-scale"
        style={loop({ d: 1.4, s: 1.3 })}
      />
      <circle
        cx="38"
        cy="28"
        r="2"
        fill="currentColor"
        stroke="none"
        className="ai-loop ai-scale"
        style={loop({ d: 1.4, delay: 0.4, s: 1.3 })}
      />
    </svg>
  )
}

export function IconMail({ title = 'Email', ...props }: IconProps) {
  const ref = usePauseOffscreen()
  return (
    <svg viewBox="0 0 48 48" className="anim-icon" {...props} ref={ref}>
      <title>{title}</title>
      <m.rect
        x="8"
        y="14"
        width="32"
        height="22"
        rx="4"
        {...base}
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      />
      <m.path
        d="M10 16l14 11L38 16"
        {...base}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      />
      <circle
        cx="34"
        cy="30"
        r="1.5"
        fill="currentColor"
        stroke="none"
        className="ai-loop ai-fade"
        style={loop({ d: 2, o0: 0.2 })}
      />
    </svg>
  )
}
