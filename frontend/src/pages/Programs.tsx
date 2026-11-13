import { PageHero } from '../components/ui/PageHero'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { IconCoaching, IconCommunity, IconCourt } from '../components/icons/AnimatedIcons'
import { programs } from '../data/site'
import './pages.css'

const extras = [
  {
    icon: <IconCourt />,
    title: 'Open Play bands',
    copy: 'Beginner, intermediate, and advanced windows so every stack feels fair.',
  },
  {
    icon: <IconCoaching />,
    title: 'Clinic tracks',
    copy: 'Kitchen control, transition defense, and doubles patterns in short bursts.',
  },
  {
    icon: <IconCommunity />,
    title: 'Social ladders',
    copy: 'Seasonal mixers, barkada nights, and partner sessions that keep the Cebu club feeling alive.',
  },
]

export function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Practice with purpose."
        lead="From walk-in open play to private coaching in Compostela — every session is designed to leave your game cleaner than it arrived."
        image="/images/coaching-session.jpg?v=fil"
        imageAlt="Coach working with players on court"
        actions={
          <>
            <Button to="/contact" variant="primary">
              Ask about scheduling
            </Button>
            <Button to="/membership" variant="ghost">
              Member credits
            </Button>
          </>
        }
      />

      <section className="section">
        <div className="container">
          <div className="program-grid">
            {programs.map((program, i) => (
              <Reveal key={program.id} delay={0.08 * i}>
                <article className="program-card">
                  <img src={program.image} alt="" />
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
        </div>
      </section>

      <section className="section light-surface">
        <div className="container">
          <Reveal>
            <p className="eyebrow">How it runs</p>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', marginTop: '0.7rem' }}>
              Structure without the stiffness.
            </h2>
          </Reveal>
          <div className="feature-strip">
            {extras.map((item, i) => (
              <Reveal key={item.title} delay={0.08 * i}>
                <article className="feature-item">
                  <div className="icon-tile">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal className="split-media">
            <img src="/images/players-rally.jpg?v=fil" alt="Two players in a mid-rally exchange" />
          </Reveal>
          <Reveal className="split-copy" delay={0.1}>
            <p className="eyebrow">Private coaching</p>
            <h2>Your game, dissected with care.</h2>
            <p className="lead">
              Video notes, pattern drills, and partner work when you want progress without the
              generic ladder.
            </p>
            <div className="btn-row" style={{ marginTop: '1.4rem' }}>
              <Button to="/contact" variant="primary">
                Request a coach
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
