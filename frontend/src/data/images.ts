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

export type SiteImage = { src: string; width: number; height: number }

const landscape = (src: string): SiteImage => ({ src, width: 1280, height: 720 })
const fourByThree = (src: string): SiteImage => ({ src, width: 1152, height: 864 })

export const images = {
  clubEntrance: landscape(clubEntrance),
  clubLounge: landscape(clubLounge),
  coachingSession: fourByThree(coachingSession),
  communityCelebrate: landscape(communityCelebrate),
  courtsOverview: landscape(courtsOverview),
  gearFlatlay: fourByThree(gearFlatlay),
  heroCourt: landscape(heroCourt),
  memberPortrait: { src: memberPortrait, width: 864, height: 1152 },
  nightCourts: landscape(nightCourts),
  paddleDetail: { src: paddleDetail, width: 1024, height: 1024 },
  playersRally: fourByThree(playersRally),
} satisfies Record<string, SiteImage>

export const brand = {
  mark: { src: brandMark, width: 251, height: 320 },
  wordmark: { src: brandWordmark, width: 856, height: 191 },
} satisfies Record<string, SiteImage>
