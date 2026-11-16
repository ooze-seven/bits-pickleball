// One IntersectionObserver per rootMargin, shared by every element that asks.
// Hundreds of observers each firing their own callbacks while scrolling is
// what this avoids.

type Listener = (visible: boolean) => void

const observers = new Map<string, IntersectionObserver>()
const listeners = new WeakMap<Element, Listener>()

function observerFor(rootMargin: string): IntersectionObserver {
  let observer = observers.get(rootMargin)
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) listeners.get(entry.target)?.(entry.isIntersecting)
      },
      { rootMargin },
    )
    observers.set(rootMargin, observer)
  }
  return observer
}

/**
 * Calls `listener` with whether `element` is on screen: once right away, then
 * on every change. Returns a function that stops watching.
 */
export function watchVisibility(
  element: Element,
  listener: Listener,
  rootMargin = '0px',
): () => void {
  const observer = observerFor(rootMargin)
  listeners.set(element, listener)
  observer.observe(element)
  return () => {
    observer.unobserve(element)
    listeners.delete(element)
  }
}
