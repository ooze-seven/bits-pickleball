import { m } from 'framer-motion'
import { Link } from 'react-router-dom'
import { brand } from '../../data/images'
import './Logo.css'

type LogoProps = {
  wordmark?: boolean
  className?: string
  to?: string
}

export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <m.span
      className={`logo-mark ${className}`}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.86, rotate: -8 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <img {...brand.mark} alt="" className="logo-mark-img" />
      <span className="logo-mark-pulse" />
    </m.span>
  )
}

export function Logo({ wordmark = true, className = '', to = '/' }: LogoProps) {
  return (
    <Link to={to} className={`brand-logo ${className}`} aria-label="BitsPickleball home">
      {wordmark ? (
        <m.img
          {...brand.wordmark}
          alt="BitsPickleball"
          className="brand-wordmark-img"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        />
      ) : (
        <LogoMark />
      )}
    </Link>
  )
}
