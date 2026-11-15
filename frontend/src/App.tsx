import { lazy, Suspense, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AnimatePresence, m } from 'framer-motion'
import { Layout } from './components/layout/Layout'
import { AppLoader } from './components/loading/AppLoader'
import { useAppPreload } from './hooks/useAppPreload'

const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })))
const Courts = lazy(() => import('./pages/Courts').then((m) => ({ default: m.Courts })))
const Programs = lazy(() => import('./pages/Programs').then((m) => ({ default: m.Programs })))
const Membership = lazy(() =>
  import('./pages/Membership').then((m) => ({ default: m.Membership })),
)
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })))
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })))

export default function App() {
  const preload = useAppPreload()

  useEffect(() => {
    document.documentElement.classList.toggle('is-preloading', !preload.ready)
    document.body.style.overflow = preload.ready ? '' : 'hidden'
    return () => {
      document.documentElement.classList.remove('is-preloading')
      document.body.style.overflow = ''
    }
  }, [preload.ready])

  return (
    <>
      <AppLoader state={preload} />
      <AnimatePresence>
        {preload.ready ? (
          <m.div
            key="app-shell"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Suspense fallback={null}>
              <Routes>
                <Route element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="courts" element={<Courts />} />
                  <Route path="programs" element={<Programs />} />
                  <Route path="membership" element={<Membership />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
              </Routes>
            </Suspense>
          </m.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
