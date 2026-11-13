import { motion } from 'framer-motion'
import type { SVGProps } from 'react'
import './AnimatedIcons.css'

type IconProps = SVGProps<SVGSVGElement> & { title?: string }

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function IconCourt({ title = 'Courts', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className="anim-icon" {...props}>
      <title>{title}</title>
      <motion.rect
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
      <motion.line
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
      <motion.rect
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
      <motion.circle
        cx="24"
        cy="24"
        r="2.2"
        fill="currentColor"
        stroke="none"
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  )
}

export function IconCoaching({ title = 'Coaching', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className="anim-icon" {...props}>
      <title>{title}</title>
      <motion.path
        d="M16 34c2.5-4 6-6 8-6s5.5 2 8 6"
        {...base}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      />
      <motion.circle
        cx="24"
        cy="18"
        r="5"
        {...base}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.15 }}
      />
      <motion.path
        d="M33 14l4-3m0 0l-1.5 4.5L39 17"
        {...base}
        initial={{ opacity: 0, x: -4 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
        animate={{ rotate: [0, 8, 0] }}
        style={{ transformOrigin: '33px 14px' }}
      />
      <motion.circle
        cx="37"
        cy="11"
        r="1.4"
        fill="currentColor"
        stroke="none"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  )
}

export function IconCommunity({ title = 'Community', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className="anim-icon" {...props}>
      <title>{title}</title>
      <motion.circle
        cx="18"
        cy="18"
        r="4.2"
        {...base}
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      />
      <motion.circle
        cx="30"
        cy="18"
        r="4.2"
        {...base}
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.1 }}
      />
      <motion.path
        d="M10 34c1.5-5 4.8-8 8-8s6.5 3 8 8"
        {...base}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      />
      <motion.path
        d="M22 34c1.5-5 4.8-8 8-8s6.5 3 8 8"
        {...base}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      />
      <motion.circle
        cx="24"
        cy="26"
        r="1.6"
        fill="currentColor"
        stroke="none"
        animate={{ scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      />
    </svg>
  )
}

export function IconClock({ title = 'Hours', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className="anim-icon" {...props}>
      <title>{title}</title>
      <motion.circle
        cx="24"
        cy="24"
        r="14"
        {...base}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <motion.line
        x1="24"
        y1="24"
        x2="24"
        y2="16"
        {...base}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '24px 24px' }}
      />
      <motion.line
        x1="24"
        y1="24"
        x2="30"
        y2="27"
        {...base}
        animate={{ rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '24px 24px' }}
      />
      <motion.circle cx="24" cy="24" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconPin({ title = 'Location', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className="anim-icon" {...props}>
      <title>{title}</title>
      <motion.path
        d="M24 8c-7 0-12 5.2-12 12.2C12 29 24 40 24 40s12-11 12-19.8C36 13.2 31 8 24 8z"
        {...base}
        initial={{ pathLength: 0, opacity: 0.4 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <motion.circle
        cx="24"
        cy="20"
        r="4"
        {...base}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '24px 20px' }}
      />
      <motion.circle
        cx="24"
        cy="40"
        r="1.5"
        fill="currentColor"
        stroke="none"
        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      />
    </svg>
  )
}

export function IconMembership({ title = 'Membership', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className="anim-icon" {...props}>
      <title>{title}</title>
      <motion.rect
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
      <motion.line
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
      <motion.circle
        cx="16"
        cy="29"
        r="1.6"
        fill="currentColor"
        stroke="none"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      />
      <motion.circle
        cx="22"
        cy="29"
        r="1.6"
        fill="currentColor"
        stroke="none"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.6, repeat: Infinity, delay: 0.25 }}
      />
      <motion.circle
        cx="28"
        cy="29"
        r="1.6"
        fill="currentColor"
        stroke="none"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.6, repeat: Infinity, delay: 0.5 }}
      />
    </svg>
  )
}

export function IconSpark({ title = 'Signal', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className="anim-icon" {...props}>
      <title>{title}</title>
      <motion.path
        d="M10 24h6l3-8 5 16 4-10 3 6h7"
        {...base}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      />
      <motion.circle
        cx="10"
        cy="24"
        r="2"
        fill="currentColor"
        stroke="none"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.4, repeat: Infinity }}
      />
      <motion.circle
        cx="38"
        cy="28"
        r="2"
        fill="currentColor"
        stroke="none"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, delay: 0.4 }}
      />
    </svg>
  )
}

export function IconMail({ title = 'Email', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className="anim-icon" {...props}>
      <title>{title}</title>
      <motion.rect
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
      <motion.path
        d="M10 16l14 11L38 16"
        {...base}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      />
      <motion.circle
        cx="34"
        cy="30"
        r="1.5"
        fill="currentColor"
        stroke="none"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  )
}
