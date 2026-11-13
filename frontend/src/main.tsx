import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/syne'
import '@fontsource-variable/outfit'
import './styles/global.css'
import './components/brand/Logo.css'
import './components/icons/AnimatedIcons.css'
import './components/ui/Button.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
