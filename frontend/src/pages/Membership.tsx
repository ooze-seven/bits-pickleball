import { PageHero } from '../components/ui/PageHero'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { IconMembership } from '../components/icons/AnimatedIcons'
import { membershipTiers, walkInRates } from '../data/site'
import './pages.css'

export function Membership() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Pick your rhythm."
        lead="Peso pricing for Compostela players — flexible passes, full club access, and pro lanes for the competitive set."
        image="/images/member-portrait.jpg?v=fil"
        imageAlt="Member smiling with paddle after a match"
        actions={
          <Button to="/contact" variant="primary">
            Start with a visit
          </Button>
        }
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <div
              style={{
                display: 'flex',
                gap: '0.85rem',
                alignItems: 'center',
                marginBottom: '0.5rem',
              }}
            >
              <div className="icon-tile">
                <IconMembership />
              </div>
              <p className="eyebrow" style={{ margin: 0 }}>
                Monthly plans
              </p>
            </div>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
              Clear pricing. Real perks.
            </h2>
          </Reveal>

          <div className="tier-grid">
            {membershipTiers.map((tier, i) => (
              <Reveal key={tier.name} delay={0.08 * i}>
                <article className={`tier ${tier.featured ? 'is-featured' : ''}`}>
                  <div>
                    <h3>{tier.name}</h3>
                    <p className="muted" style={{ marginTop: '0.55rem' }}>
                      {tier.blurb}
                    </p>
                  </div>
                  <p className="tier-price">
                    {tier.price}
                    <span>{tier.period}</span>
                  </p>
                  <ul>
                    {tier.perks.map((perk) => (
                      <li key={perk}>{perk}</li>
                    ))}
                  </ul>
                  <Button to="/contact" variant={tier.featured ? 'primary' : 'ghost'}>
                    Choose {tier.name}
                  </Button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Walk-in rates</p>
            <h2
              className="display"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginTop: '0.6rem' }}
            >
              No membership? Still welcome.
            </h2>
          </Reveal>
          <div className="feature-strip">
            {walkInRates.map((rate, i) => (
              <Reveal key={rate.label} delay={0.08 * i}>
                <article className="feature-item">
                  <h3>{rate.label}</h3>
                  <p className="tier-price" style={{ fontSize: '2rem', margin: '0.4rem 0' }}>
                    {rate.price}
                  </p>
                  <p>{rate.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section light-surface">
        <div className="container split">
          <Reveal className="split-media">
            <img src="/images/club-entrance.jpg" alt="Modern club entrance pathway" />
          </Reveal>
          <Reveal className="split-copy" delay={0.1}>
            <p className="eyebrow">Included for all members</p>
            <h2>Access that feels considered.</h2>
            <p className="lead">
              Day-use lockers, member rates on clinics, and early notice for Cebu tournaments and
              social ladders.
            </p>
            <div className="btn-row" style={{ marginTop: '1.4rem' }}>
              <Button to="/contact" variant="dark">
                Talk membership
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
