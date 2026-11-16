import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, m } from 'framer-motion'
import { Header } from './Header'
import { Footer } from './Footer'
import { useScrollToTop } from '../../hooks/useScrollToTop'
import './Layout.css'

export function Layout() {
  useScrollToTop()
  const location = useLocation()

  return (
    <div className="site-shell">
      <Header />
      <AnimatePresence mode="wait">
        <m.main
          key={location.pathname}
          className="site-main"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          // A short exit keeps navigation snappy: mode="wait" holds the new page until it ends.
          exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeIn' } }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </m.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
