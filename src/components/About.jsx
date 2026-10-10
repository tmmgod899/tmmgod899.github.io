import { about } from '../data/content';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader id="about-title" eyebrow="About" title="Turning raw data into clear, usable insight." />

        <div className="about-grid">
          <Reveal className="about-text">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>

          <Reveal as="aside" className="about-focus card" delay={120} aria-label="Focus areas">
            <h3 className="about-focus-title mono">Focus areas</h3>
            <ul className="about-focus-list" role="list">
              {about.focus.map((item, i) => (
                <li key={item}>
                  <span className="about-index mono" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
