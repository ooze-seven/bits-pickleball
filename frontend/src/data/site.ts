import { images } from './images'

export const navLinks = [
  { to: '/courts', label: 'Courts' },
  { to: '/programs', label: 'Programs' },
  { to: '/membership', label: 'Membership' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const

export const contact = {
  phone: '+63 917 555 0148',
  phoneHref: 'tel:+639175550148',
  email: 'play@bitspickleball.com',
  address: 'Hi-ka',
  city: 'Compostela, Cebu',
  region: 'Philippines',
  mapQuery: 'Hi-ka, Compostela, Cebu, Philippines',
  hours: [
    { day: 'Mon–Thu', time: '6:00 AM – 10:00 PM' },
    { day: 'Fri', time: '6:00 AM – 11:00 PM' },
    { day: 'Sat–Sun', time: '6:00 AM – 9:00 PM' },
  ],
}

export const programs = [
  {
    id: 'open-play',
    title: 'Open Play',
    copy: 'Rotating courts, fair stacking, and skill-banded sessions so every rally stays sharp — morning to night in Compostela.',
    detail: 'Walk-in · Daily',
    image: images.playersRally,
  },
  {
    id: 'clinics',
    title: 'Skill Clinics',
    copy: 'Short, focused sessions on dinks, resets, third shots, and transition footwork with local coaches.',
    detail: '₱450 · 45–60 min',
    image: images.coachingSession,
  },
  {
    id: 'private',
    title: 'Private Coaching',
    copy: 'One-on-one or partner sessions built around your goals, not a generic ladder.',
    detail: 'From ₱800 / session',
    image: images.paddleDetail,
  },
]

export const membershipTiers = [
  {
    name: 'Court Pass',
    price: '₱1,999',
    period: '/month',
    blurb: 'For players who want reliable court time without the full social calendar.',
    perks: [
      'Priority open play',
      'Member rates on clinics',
      '1 guest pass each month',
      'Walk-in rate waived on weekdays',
    ],
    featured: false,
  },
  {
    name: 'Club',
    price: '₱2,999',
    period: '/month',
    blurb: 'The everyday Bits experience — courts, community nights, and coaching credit.',
    perks: [
      'Unlimited open play',
      '2 clinic credits / month',
      'Event early access',
      'Locker day-use',
    ],
    featured: true,
  },
  {
    name: 'Pro Lane',
    price: '₱4,499',
    period: '/month',
    blurb: 'For competitive players chasing sharper edges and reserved evening lanes.',
    perks: [
      'Everything in Club',
      'Reserved evening lane (weeknights)',
      'Quarterly video review',
      'Local tournament entry discount',
    ],
    featured: false,
  },
]

export const walkInRates = [
  { label: 'Weekday open play', price: '₱250', note: 'per player' },
  { label: 'Weekend open play', price: '₱300', note: 'per player' },
  { label: 'Court rental', price: '₱600', note: 'per hour / court' },
]

export const courtFeatures = [
  {
    title: 'Outdoor courts in Hi-ka',
    copy: 'True-bounce surfaces with LED night play — built for Cebu heat and evening sessions.',
  },
  {
    title: 'Smart stacking',
    copy: 'Digital waitlists keep rotations fair without the clipboard chaos.',
  },
  {
    title: 'Clubhouse calm',
    copy: 'Lounge seating, lockers, and a cool reset between matches.',
  },
]
