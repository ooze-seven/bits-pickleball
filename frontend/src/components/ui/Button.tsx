import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import './Button.css'

type Variant = 'primary' | 'ghost' | 'dark' | 'light'

type Common = {
  children: ReactNode
  className?: string
  variant?: Variant
  onClick?: () => void
}

type ButtonAsLink = Common & {
  to: string
  type?: never
}

type ButtonAsButton = Common & {
  to?: never
  type?: 'button' | 'submit'
}

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, className = '', variant = 'primary', onClick } = props
  const classes = `btn btn-${variant} ${className}`.trim()

  if ('to' in props && props.to) {
    return (
      <motion.div
        className={`btn-wrap ${className.includes('mobile-cta') ? 'btn-wrap-fill' : ''}`.trim()}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link to={props.to} className={classes} onClick={onClick}>
          <span>{children}</span>
          <span className="btn-sheen" aria-hidden="true" />
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      type={props.type ?? 'button'}
      className={classes}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <span>{children}</span>
      <span className="btn-sheen" aria-hidden="true" />
    </motion.button>
  )
}
