import { PageHero } from '../components/ui/PageHero'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { IconCommunity, IconSpark } from '../components/icons/AnimatedIcons'
import './pages.css'

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Clubhouse energy. Bits precision."
        lead="BitsPickleball in Hi-ka, Compostela, Cebu — make pickleball feel premium without making it precious."
        image="/images/club-entrance.jpg"
        imageAlt="BitsPickleball club entrance"
        actions={
          <Button to="/contact" variant="primary">
            Come see it
          </Button>
        }
      />

      <section className="section">
        <div className="container split">
          <Reveal className="split-copy">
            <p className="eyebrow">Origin</p>
            <h2>Named for the small things that change a rally.</h2>
            <p className="lead">
              A reset. A soft hold. A better stack. We built a Cebu club around the “bits” that turn
              good sessions into habits — then wrapped them in forest green and white.
            </p>
          </Reveal>
          <Reveal className="split-media" delay={0.1}>
            <img src="/images/gear-flatlay.jpg" alt="Club gear laid out on wood" />
          </Reveal>
        </div>
      </section>

      <section className="section light-surface">
        <div className="container">
          <div className="feature-strip">
            <Reveal>
              <article className="feature-item">
                <div className="icon-tile">
                  <IconSpark />
                </div>
                <h3>Design-led facility</h3>
                <p>Quiet luxury materials, readable courts, and lighting that respects the ball.</p>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <article className="feature-item">
                <div className="icon-tile">
                  <IconCommunity />
                </div>
                <h3>People first</h3>
                <p>Skill bands and fair rotations so newcomers and crushers can share the same roof.</p>
              </article>
            </Reveal>
            <Reveal delay={0.18}>
              <article className="feature-item">
                <div className="icon-tile">
                  <IconSpark />
                </div>
                <h3>Always iterating</h3>
                <p>Programs, hours, and stacking rules evolve with how the club actually plays.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split reverse">
          <Reveal className="split-media">
            <img
              src="/images/community-celebrate.jpg?v=fil"
              alt="Members celebrating after a point"
            />
          </Reveal>
          <Reveal className="split-copy" delay={0.1}>
            <p className="eyebrow">Culture</p>
            <h2>Competitive when it counts. Friendly by default.</h2>
            <p className="lead">
              We host ladders and clinics, but we also leave space for the after-match hang — the
              part that turns a facility into a club.
            </p>
            <div className="btn-row" style={{ marginTop: '1.4rem' }}>
              <Button to="/membership" variant="primary">
                Join Bits
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
