import { useEffect, useState } from 'react'
import { PRELOAD_IMAGES, PRELOAD_ROUTES } from '../data/preload'

export type PreloadState = {
  ready: boolean
  progress: number
  label: string
}

/** The loading curtain always stays up at least this long, even when everything is cached. */
const MIN_DISPLAY_MS = 3000

function loadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image()
    img.decoding = 'async'
    const finish = () => resolve()
    img.onload = () => {
      if (typeof img.decode === 'function') {
        img.decode().then(finish).catch(finish)
      } else {
        finish()
      }
    }
    img.onerror = finish
    img.src = src
  })
}

function waitForWindowLoad(): Promise<void> {
  if (document.readyState === 'complete') return Promise.resolve()
  return new Promise((resolve) => {
    window.addEventListener('load', () => resolve(), { once: true })
  })
}

function waitForFonts(): Promise<void> {
  if (!document.fonts?.ready) return Promise.resolve()
  return document.fonts.ready.then(() => undefined).catch(() => undefined)
}

export function useAppPreload(): PreloadState {
  const [ready, setReady] = useState(false)
  const [progress, setProgress] = useState(0)
  const [label, setLabel] = useState('Warming up the courts')

  useEffect(() => {
    let cancelled = false
    const startedAt = performance.now()

    const tasks: Array<{ label: string; run: () => Promise<void> }> = [
      { label: 'Lacing up', run: waitForFonts },
      { label: 'Marking the lines', run: () => Promise.all(PRELOAD_ROUTES.map((load) => load())).then(() => undefined) },
      ...PRELOAD_IMAGES.map((src) => ({
        label: 'Lighting the courts',
        run: () => loadImage(src),
      })),
      { label: 'Final touches', run: waitForWindowLoad },
    ]

    const total = tasks.length
    let completed = 0

    const bump = (nextLabel: string) => {
      if (cancelled) return
      completed += 1
      setProgress(Math.min(1, completed / total))
      setLabel(nextLabel)
    }

    ;(async () => {
      for (const task of tasks) {
        if (cancelled) return
        setLabel(task.label)
        try {
          await task.run()
        } catch {
          // Never block the experience on a single failed asset.
        }
        bump(task.label)
      }

      const elapsed = performance.now() - startedAt
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed)
      if (remaining > 0) {
        setLabel('Almost ready')
        await new Promise((resolve) => setTimeout(resolve, remaining))
      }

      if (!cancelled) {
        setProgress(1)
        setLabel('Welcome')
        setReady(true)
      }
    })()

    return () => {
      cancelled = true
    }
  }, [])

  return { ready, progress, label }
}
