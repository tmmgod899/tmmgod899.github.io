import { Calendar, GraduationCap } from 'lucide-react';
import { education } from '../data/content';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeader id="education-title" eyebrow="Education" title="Academic background" />

        <Reveal as="article" className="edu card">
          <div className="edu-icon" aria-hidden="true">
            <GraduationCap size={24} />
          </div>

          <div className="edu-body">
            <div className="edu-head">
              <div>
                <h3 className="edu-degree">{education.degree}</h3>
                <p className="edu-school">
                  {education.university} <span aria-hidden="true">·</span> {education.college}
                </p>
              </div>
              <span className="badge badge-dot">{education.status}</span>
            </div>

            <p className="edu-period">
              <Calendar size={14} aria-hidden="true" />
              {education.period}
            </p>

            <h4 className="edu-label mono">Relevant coursework</h4>
            <ul className="tags" aria-label="Relevant coursework">
              {education.coursework.map((c) => (
                <li key={c} className="tag">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
