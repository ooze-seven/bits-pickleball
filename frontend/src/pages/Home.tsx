import { m, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import {
  IconClock,
  IconCoaching,
  IconCommunity,
  IconCourt,
  IconSpark,
} from '../components/icons/AnimatedIcons'
import { programs } from '../data/site'
import { brand, images } from '../data/images'
import './pages.css'

export function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', '16%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <>
      <section className="home-hero" ref={heroRef}>
        <m.div className="home-hero-media" style={{ y: mediaY }}>
          <img
            {...images.heroCourt}
            alt="Outdoor pickleball court at golden hour"
          />
          <div className="home-hero-shade" />
        </m.div>

        <m.div className="container home-hero-content" style={{ opacity: contentOpacity }}>
          <m.img
            className="home-brand-wordmark"
            {...brand.wordmark}
            alt="BitsPickleball"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          />

          <m.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Courts with a signal.
          </m.h1>

          <m.p
            className="lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            A forest-green clubhouse in Hi-ka, Compostela, Cebu — for open play, coaching, and
            nights that stretch past the last point.
          </m.p>

          <m.div
            className="btn-row"
            style={{ marginTop: '1.6rem' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
          >
            <Button to="/membership" variant="primary">
              Join the club
            </Button>
            <Button to="/courts" variant="ghost">
              See the courts
            </Button>
          </m.div>
        </m.div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">The Bits difference</p>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', marginTop: '0.7rem' }}>
              Built like sport. Tuned like software.
            </h2>
          </Reveal>

          <div className="feature-strip">
            <Reveal delay={0.05}>
              <article className="feature-item">
                <div className="icon-tile">
                  <IconCourt />
                </div>
                <h3>True-bounce courts</h3>
                <p>Six outdoor lanes with night LEDs and clean kitchen geometry.</p>
              </article>
            </Reveal>
            <Reveal delay={0.12}>
              <article className="feature-item">
                <div className="icon-tile">
                  <IconCoaching />
                </div>
                <h3>Coaching that sticks</h3>
                <p>Clinics and private sessions designed around your actual game.</p>
              </article>
            </Reveal>
            <Reveal delay={0.19}>
              <article className="feature-item">
                <div className="icon-tile">
                  <IconCommunity />
                </div>
                <h3>Community nights</h3>
                <p>Skill-banded play that keeps rallies fair and social energy high.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section light-surface">
        <div className="container split">
          <Reveal className="split-media">
            <img {...images.courtsOverview} alt="Multiple outdoor pickleball courts" />
          </Reveal>
          <Reveal className="split-copy" delay={0.1}>
            <p className="eyebrow">Courts</p>
            <h2>Room to rally without the waitlist circus.</h2>
            <p className="lead">
              Digital stacking, reserved evening lanes, and a clubhouse that feels like a reset —
              not a hallway.
            </p>
            <div className="stats-row">
              <div className="stat">
                <strong>6</strong>
                <span>outdoor courts</span>
              </div>
              <div className="stat">
                <strong>7–11</strong>
                <span>night play hours</span>
              </div>
              <div className="stat">
                <strong>2.4s</strong>
                <span>avg queue refresh</span>
              </div>
            </div>
            <div className="btn-row" style={{ marginTop: '1.6rem' }}>
              <Button to="/courts" variant="dark">
                Explore courts
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Programs</p>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 3.3rem)', marginTop: '0.7rem' }}>
              Play sharper every week.
            </h2>
          </Reveal>

          <div className="program-grid">
            {programs.map((program, i) => (
              <Reveal key={program.id} delay={0.08 * i}>
                <article className="program-card">
                  <img {...program.image} alt="" />
                  <div className="program-card-shade" />
                  <div className="program-card-body">
                    <span>{program.detail}</span>
                    <h3>{program.title}</h3>
                    <p>{program.copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="btn-row" style={{ marginTop: '1.8rem' }}>
              <Button to="/programs" variant="ghost">
                View all programs
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div className="orbit-panel">
              <div className="split" style={{ gap: '1.5rem' }}>
                <div>
                  <p className="eyebrow">Signal check</p>
                  <h2
                    className="display"
                    style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', margin: '0.6rem 0 0.8rem' }}
                  >
                    Soft edges. Hard focus.
                  </h2>
                  <p className="lead">
                    BitsPickleball mixes clubhouse calm with competitive rhythm — green courts in
                    Compostela, white lines, and a Cebu community that shows up.
                  </p>
                </div>
                <div className="feature-strip" style={{ marginTop: 0 }}>
                  <article className="feature-item">
                    <div className="icon-tile">
                      <IconSpark />
                    </div>
                    <h3>Live stacking</h3>
                    <p>Fair rotations without the clipboard.</p>
                  </article>
                  <article className="feature-item">
                    <div className="icon-tile">
                      <IconClock />
                    </div>
                    <h3>Night sessions</h3>
                    <p>LED courts that stay sharp after dusk.</p>
                  </article>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section light-surface">
        <div className="container split reverse">
          <Reveal className="split-media">
            <img
              {...images.communityCelebrate}
              alt="Players celebrating a point together"
            />
          </Reveal>
          <Reveal className="split-copy" delay={0.1}>
            <p className="eyebrow">Membership</p>
            <h2>Your lane on the calendar.</h2>
            <p className="lead">
              From flexible court passes to reserved evening lanes — pick the rhythm that matches
              how you play.
            </p>
            <div className="btn-row" style={{ marginTop: '1.5rem' }}>
              <Button to="/membership" variant="dark">
                Compare plans
              </Button>
              <Button to="/contact" variant="light">
                Talk to us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <p className="eyebrow">Visit</p>
              <h2>Come hit a few. Stay for the culture.</h2>
              <p className="lead">
                Tour the courts, meet the desk, and lock a first open-play window.
              </p>
              <div className="btn-row" style={{ marginTop: '1.4rem' }}>
                <Button to="/contact" variant="primary">
                  Book a visit
                </Button>
                <Button to="/about" variant="ghost">
                  Our story
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
