import { useState, type FormEvent } from 'react'
import { PageHero } from '../components/ui/PageHero'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { IconClock, IconMail, IconPin } from '../components/icons/AnimatedIcons'
import { contact } from '../data/site'
import { images } from '../data/images'
import './pages.css'

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a visit. Ask anything."
        lead="Message us about open play, membership, or coaching — we’re in Hi-ka, Compostela, Cebu."
        image={images.clubLounge}
        imageAlt="Club lounge seating area"
      />

      <section className="section">
        <div className="container contact-grid">
          <Reveal>
            <aside className="contact-panel">
              <div
                className="feature-item"
                style={{ padding: 0, border: 'none', background: 'none', boxShadow: 'none' }}
              >
                <div className="icon-tile">
                  <IconPin />
                </div>
                <h3 style={{ marginTop: '0.9rem' }}>Find us</h3>
                <p>
                  {contact.address}
                  <br />
                  {contact.city}
                  <br />
                  {contact.region}
                </p>
                <p style={{ marginTop: '0.75rem' }}>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapQuery)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </p>
              </div>

              <div style={{ marginTop: '1.6rem' }}>
                <div className="icon-tile">
                  <IconMail />
                </div>
                <h3 style={{ marginTop: '0.9rem' }}>Reach out</h3>
                <p className="muted">
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  <br />
                  <a href={contact.phoneHref}>{contact.phone}</a>
                </p>
              </div>

              <div style={{ marginTop: '1.6rem' }}>
                <div className="icon-tile">
                  <IconClock />
                </div>
                <h3 style={{ marginTop: '0.9rem' }}>Hours</h3>
                <ul className="hours-list">
                  {contact.hours.map((row) => (
                    <li key={row.day}>
                      <span>{row.day}</span>
                      <span>{row.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                />
              </div>
              <div className="field">
                <label htmlFor="phone">Mobile</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+63 9XX XXX XXXX"
                />
              </div>
              <div className="field">
                <label htmlFor="interest">I’m interested in</label>
                <select id="interest" name="interest" defaultValue="visit">
                  <option value="visit">A club visit</option>
                  <option value="membership">Membership</option>
                  <option value="coaching">Coaching</option>
                  <option value="walk-in">Walk-in rates</option>
                  <option value="event">Private event / barkada booking</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us your level, preferred days, or questions."
                />
              </div>
              {sent ? (
                <p className="form-note" role="status">
                  Salamat — we’ll follow up shortly. For now this form stays on the frontend; the
                  backend will handle delivery next.
                </p>
              ) : (
                <Button type="submit" variant="primary">
                  Send message
                </Button>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div className="gallery-item contact-wide-shot">
              <img {...images.nightCourts} alt="Evening courts ready for play" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
