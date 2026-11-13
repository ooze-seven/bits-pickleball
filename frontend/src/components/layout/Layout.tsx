import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Header } from './Header'
import { Footer } from './Footer'
import { useLenis } from '../../hooks/useLenis'
import './Layout.css'

export function Layout() {
  useLenis()
  const location = useLocation()

  return (
    <div className="site-shell">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className="site-main"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
