import { Download, Eye } from 'lucide-react';
import { profile } from '../data/content';
import Reveal from './ui/Reveal';
import './CV.css';

export default function CV() {
  return (
    <section id="cv" className="section" aria-labelledby="cv-title">
      <div className="container">
        <Reveal className="cv card">
          <div className="cv-text">
            <p className="eyebrow">Resume</p>
            <h2 className="section-title" id="cv-title">
              Interested in my full background?
            </h2>
            <p className="section-lead">
              Download my CV to explore my education, experience, projects, and technical skills.
            </p>
          </div>
          <div className="cv-actions">
            <a href={profile.cv} className="btn btn-primary" download={profile.cvFileName}>
              <Download className="icon-down" aria-hidden="true" />
              Download CV
            </a>
            <a href={profile.cv} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
              <Eye aria-hidden="true" />
              View CV
              <span className="visually-hidden">(opens in a new tab)</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
