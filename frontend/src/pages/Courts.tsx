import { PageHero } from '../components/ui/PageHero'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { IconClock, IconCourt, IconSpark } from '../components/icons/AnimatedIcons'
import { courtFeatures } from '../data/site'
import { images } from '../data/images'
import './pages.css'

export function Courts() {
  return (
    <>
      <PageHero
        eyebrow="Courts"
        title="Six lanes. Clean bounce. Night glow."
        lead="Outdoor courts in Hi-ka, Compostela — tuned for Cebu heat, daily open play, and LED night sessions."
        image={images.courtsOverview}
        imageAlt="Overview of outdoor pickleball courts"
        actions={
          <>
            <Button to="/contact" variant="primary">
              Reserve a visit
            </Button>
            <Button to="/membership" variant="ghost">
              Member access
            </Button>
          </>
        }
      />

      <section className="section">
        <div className="container">
          <div className="feature-strip">
            {courtFeatures.map((feature, i) => (
              <Reveal key={feature.title} delay={0.08 * i}>
                <article className="feature-item">
                  <div className="icon-tile">
                    {i === 0 ? <IconCourt /> : i === 1 ? <IconSpark /> : <IconClock />}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section light-surface">
        <div className="container split">
          <Reveal className="split-media">
            <img {...images.nightCourts} alt="Pickleball courts under evening lights" />
          </Reveal>
          <Reveal className="split-copy" delay={0.1}>
            <p className="eyebrow">Night play</p>
            <h2>When the day ends, the rallies continue.</h2>
            <p className="lead">
              LED coverage keeps the ball readable late into the evening — with stacking that
              respects your time.
            </p>
            <ul className="hours-list" style={{ maxWidth: '22rem' }}>
              <li>
                <span>Open play</span>
                <span>Daily</span>
              </li>
              <li>
                <span>Reserved lanes</span>
                <span>Evenings</span>
              </li>
              <li>
                <span>Clinic blocks</span>
                <span>Weeknights</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Clubhouse</p>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', marginTop: '0.7rem' }}>
              Between matches, breathe.
            </h2>
          </Reveal>
          <div className="gallery-grid">
            <Reveal className="gallery-item">
              <img {...images.clubLounge} alt="Club lounge with green accent wall" />
            </Reveal>
            <Reveal className="gallery-item" delay={0.08}>
              <img {...images.paddleDetail} alt="Paddle and pickleball on court" />
            </Reveal>
            <Reveal className="gallery-item" delay={0.14}>
              <img {...images.gearFlatlay} alt="Pickleball gear arranged on a table" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
