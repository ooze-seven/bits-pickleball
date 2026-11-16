import { useState } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, m } from 'framer-motion'
import { Header } from './Header'
import { Footer } from './Footer'
import './Layout.css'

// Scroll position is reset by hand after each page leaves (see onExitComplete),
// so stop the browser jumping the old page around on back/forward.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

/**
 * The route's page, captured when this copy mounts. The page that is fading
 * out keeps showing its own content; a plain <Outlet /> would switch to the
 * new route straight away, so the new page would flash inside the old one's
 * exit before fading in again.
 */
function FrozenOutlet() {
  const outlet = useOutlet()
  const [frozen] = useState(outlet)
  return frozen
}

export function Layout() {
  const location = useLocation()

  return (
    <div className="site-shell">
      <Header />
      {/* mode="wait": the old page fades out, the view jumps to the top while
          nothing is showing, then the new page fades in. */}
      <AnimatePresence mode="wait" onExitComplete={scrollToTop}>
        <m.main
          key={location.pathname}
          className="site-main"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          // A short exit keeps navigation snappy: mode="wait" holds the new page until it ends.
          exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeIn' } }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <FrozenOutlet />
        </m.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
