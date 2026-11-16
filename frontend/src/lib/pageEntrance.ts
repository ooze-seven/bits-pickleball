import { createContext, useContext } from 'react'
import type { Target } from 'framer-motion'

/**
 * How the current page was reached. `returning` is true when the visitor came
 * back to it with the browser's back/forward buttons: the page then shows up
 * as they left it, without replaying its entrance animations.
 * Provided per page by Layout.tsx.
 */
export const PageEntranceContext = createContext({ returning: false })

export const usePageEntrance = () => useContext(PageEntranceContext)

/**
 * Returns a helper for framer's `initial` prop: the given starting state on a
 * normal visit, or `false` (start already in place) when returning.
 */
export function useEntranceInitial() {
  const { returning } = usePageEntrance()
  return (initial: Target): Target | false => (returning ? false : initial)
}
