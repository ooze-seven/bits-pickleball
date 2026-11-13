import { Link } from 'react-router-dom'
import { Logo } from '../brand/Logo'
import { IconMail, IconPin } from '../icons/AnimatedIcons'
import { contact, navLinks } from '../../data/site'
import './Footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            A modern pickleball club in Hi-ka, Compostela, Cebu — built for clean rallies, sharp
            coaching, and a community that sticks around after the match.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Visit</h3>
          <ul className="footer-meta">
            <li>
              <span className="icon-tile footer-icon">
                <IconPin />
              </span>
              <span>
                {contact.address}
                <br />
                {contact.city}
                <br />
                {contact.region}
              </span>
            </li>
            <li>
              <span className="icon-tile footer-icon">
                <IconMail />
              </span>
              <span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                <br />
                <a href={contact.phoneHref}>{contact.phone}</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} BitsPickleball · Compostela, Cebu</p>
        <p>Open play · Coaching · Community</p>
      </div>
    </footer>
  )
}
