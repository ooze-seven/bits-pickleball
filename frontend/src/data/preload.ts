import { brand, images } from './images'

/** Every visual asset referenced across all pages (the same URLs the pages use). */
export const PRELOAD_IMAGES = [
  brand.mark.src,
  brand.wordmark.src,
  brand.wordmarkText.src,
  images.heroCourt.src,
  images.courtsOverview.src,
  images.playersRally.src,
  images.coachingSession.src,
  images.paddleDetail.src,
  images.communityCelebrate.src,
  images.memberPortrait.src,
  images.clubEntrance.src,
  images.clubLounge.src,
  images.nightCourts.src,
  images.gearFlatlay.src,
] as const

/** Warm every route module so navigation never waits on code. */
export const PRELOAD_ROUTES = [
  () => import('../pages/Home'),
  () => import('../pages/Courts'),
  () => import('../pages/Programs'),
  () => import('../pages/Membership'),
  () => import('../pages/About'),
  () => import('../pages/Contact'),
] as const
