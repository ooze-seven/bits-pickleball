import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LazyMotion } from 'framer-motion'
import '@fontsource-variable/syne'
import '@fontsource-variable/outfit'
import './styles/global.css'
import './components/brand/Logo.css'
import './components/icons/AnimatedIcons.css'
import './components/ui/Button.css'
import './components/ui/Reveal.css'
import './components/loading/AppLoader.css'
import App from './App'

const loadMotionFeatures = () => import('./motion-features').then((mod) => mod.default)

document.getElementById('boot-loader')?.setAttribute('hidden', '')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* Use the lightweight `m` components everywhere; `strict` throws if a full `motion` slips in. */}
      <LazyMotion features={loadMotionFeatures} strict>
        <App />
      </LazyMotion>
    </BrowserRouter>
  </StrictMode>,
)
