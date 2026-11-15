import { m, useScroll, useTransform } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import type { SiteImage } from '../../data/images'
import './PageHero.css'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  lead: string
  image: SiteImage
  imageAlt: string
  actions?: ReactNode
}

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  actions,
}: PageHeroProps) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0.15])

  return (
    <section className="page-hero" ref={ref}>
      <m.div className="page-hero-media" style={{ y: imageY }}>
        <img {...image} alt={imageAlt} />
        <div className="page-hero-shade" />
      </m.div>
      <m.div className="page-hero-content container" style={{ opacity: fade }}>
        <m.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow}
        </m.p>
        <m.h1
          className="display page-hero-title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </m.h1>
        <m.p
          className="lead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
        >
          {lead}
        </m.p>
        {actions ? (
          <m.div
            className="btn-row page-hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
          >
            {actions}
          </m.div>
        ) : null}
      </m.div>
    </section>
  )
}
