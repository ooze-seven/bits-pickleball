import { useEffect, useLayoutEffect, useState } from 'react'
import { useLocation, useNavigationType, useOutlet } from 'react-router-dom'
import { AnimatePresence, m } from 'framer-motion'
import { Header } from './Header'
import { Footer } from './Footer'
import { PageEntranceContext } from '../../lib/pageEntrance'
import './Layout.css'

// Scroll position is set by hand when each page mounts (see Page), so stop
// the browser jumping the old page around on back/forward.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

/** Last scroll position of each history entry, by location key. */
const scrollPositions = new Map<string, number>()

type PageProps = {
  /** Reached with back/forward: restore the old scroll and skip entrances. */
  returning: boolean
  scrollTop: number
}

/**
 * One page in the transition. It captures the route's content and its entry
 * details when it mounts, so the page fading out keeps showing its own content
 * (a plain <Outlet /> would switch to the new route at once and flash it
 * inside the old page's exit).
 */
function Page({ returning, scrollTop }: PageProps) {
  const outlet = useOutlet()
  const [frozen] = useState(() => ({ outlet, entrance: { returning }, scrollTop }))

  // Runs after the old page has gone and before this one is painted, so the
  // jump (to the top, or back to where the visitor was) is never visible.
  useLayoutEffect(() => {
    window.scrollTo({ top: frozen.scrollTop, left: 0, behavior: 'instant' })
  }, [frozen])

  return (
    <PageEntranceContext.Provider value={frozen.entrance}>
      {frozen.outlet}
    </PageEntranceContext.Provider>
  )
}

export function Layout() {
  const location = useLocation()
  const navigationType = useNavigationType()

  // Remember where each history entry was scrolled to when the visitor left
  // it. The cleanup runs as the next location commits, while the old page is
  // still on screen and still at the position the visitor left it.
  useEffect(() => {
    const key = location.key
    return () => {
      scrollPositions.set(key, window.scrollY)
    }
  }, [location.key])

  const saved = navigationType === 'POP' ? scrollPositions.get(location.key) : undefined
  const returning = saved !== undefined

  return (
    <div className="site-shell">
      <Header />
      {/* mode="wait": the old page fades out, then the new one fades in.
          Returning with back/forward is a plain, quicker fade. */}
      <AnimatePresence mode="wait">
        <m.main
          key={location.pathname}
          className="site-main"
          initial={returning ? { opacity: 0 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          // A short exit keeps navigation snappy: mode="wait" holds the new page until it ends.
          exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeIn' } }}
          transition={{ duration: returning ? 0.3 : 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Page returning={returning} scrollTop={saved ?? 0} />
        </m.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
