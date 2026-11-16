// Every image the site shows. The files in src/assets/ are generated from
// assets-src/ by `npm run images`; importing them gives Vite content-hashed URLs.
// Spread an entry onto an <img> to set src, width and height together.
import clubEntrance from '../assets/images/club-entrance.webp'
import clubLounge from '../assets/images/club-lounge.webp'
import coachingSession from '../assets/images/coaching-session.webp'
import communityCelebrate from '../assets/images/community-celebrate.webp'
import courtsOverview from '../assets/images/courts-overview.webp'
import gearFlatlay from '../assets/images/gear-flatlay.webp'
import heroCourt from '../assets/images/hero-court.webp'
import memberPortrait from '../assets/images/member-portrait.webp'
import nightCourts from '../assets/images/night-courts.webp'
import paddleDetail from '../assets/images/paddle-detail.webp'
import playersRally from '../assets/images/players-rally.webp'
import brandMark from '../assets/brand/mark.webp'
import brandWordmark from '../assets/brand/wordmark.webp'
import brandWordmarkText from '../assets/brand/wordmark-text.webp'

export type SiteImage = { src: string; width: number; height: number }

const image = (src: string, width: number, height: number): SiteImage => ({
  src,
  width,
  height,
})

const landscape = (src: string) => image(src, 1280, 720)
const fourByThree = (src: string) => image(src, 1152, 864)

export const images = {
  clubEntrance: landscape(clubEntrance),
  clubLounge: landscape(clubLounge),
  coachingSession: fourByThree(coachingSession),
  communityCelebrate: landscape(communityCelebrate),
  courtsOverview: landscape(courtsOverview),
  gearFlatlay: fourByThree(gearFlatlay),
  heroCourt: landscape(heroCourt),
  memberPortrait: image(memberPortrait, 864, 1152),
  nightCourts: landscape(nightCourts),
  paddleDetail: image(paddleDetail, 1024, 1024),
  playersRally: fourByThree(playersRally),
} satisfies Record<string, SiteImage>

export const brand = {
  mark: image(brandMark, 251, 320),
  wordmark: image(brandWordmark, 856, 191),
  /** The name alone, for places that already show the mark (loading screen). */
  wordmarkText: image(brandWordmarkText, 659, 191),
} satisfies Record<string, SiteImage>
