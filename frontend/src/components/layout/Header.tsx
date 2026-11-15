import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, m } from 'framer-motion'
import { Logo } from '../brand/Logo'
import { Button } from '../ui/Button'
import { navLinks } from '../../data/site'
import './Header.css'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`site-header ${scrolled || open ? 'is-solid' : ''}`}>
      <div className="container site-header-inner">
        <Logo />
        <nav className="site-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-cta">
          <Button to="/contact" variant="primary">
            Book a visit
          </Button>
        </div>
        <button
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <m.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Mobile">
              {navLinks.map((link, i) => (
                <m.div
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <NavLink to={link.to} onClick={() => setOpen(false)}>
                    {link.label}
                  </NavLink>
                </m.div>
              ))}
            </nav>
            <Button
              to="/contact"
              variant="primary"
              className="mobile-cta"
              onClick={() => setOpen(false)}
            >
              Book a visit
            </Button>
          </m.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
