import { AnimatePresence, m } from 'framer-motion'
import { brand } from '../../data/images'
import type { PreloadState } from '../../hooks/useAppPreload'
import './AppLoader.css'

type AppLoaderProps = {
  state: PreloadState
}

export function AppLoader({ state }: AppLoaderProps) {
  const percent = Math.round(state.progress * 100)

  return (
    <AnimatePresence>
      {!state.ready ? (
        <m.div
          className="app-loader"
          role="status"
          aria-live="polite"
          aria-busy="true"
          aria-label={`Loading BitsPickleball, ${percent}%`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="app-loader-glow" aria-hidden="true" />
          <div className="app-loader-grid" aria-hidden="true" />

          <div className="app-loader-inner">
            <m.div
              className="app-loader-mark-wrap"
              initial={{ opacity: 0, scale: 0.82 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* The looping animations for these three live in AppLoader.css. */}
              <img {...brand.mark} alt="" className="app-loader-mark" />
              <span className="app-loader-bit" />
              <span className="app-loader-ring" />
            </m.div>

            <m.img
              {...brand.wordmarkText}
              alt="BitsPickleball"
              className="app-loader-wordmark"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            />

            <m.p
              className="app-loader-label"
              key={state.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 0.78, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              {state.label}
            </m.p>

            <div className="app-loader-track" aria-hidden="true">
              <m.div
                className="app-loader-fill"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: Math.max(state.progress, 0.04) }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            <p className="app-loader-percent">{percent}%</p>
          </div>
        </m.div>
      ) : null}
    </AnimatePresence>
  )
}
