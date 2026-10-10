import { Calendar, MapPin, Users } from 'lucide-react';
import { activities, experience } from '../data/content';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';
import './Experience.css';

function ExperienceItem({ item }) {
  return (
    <article className={`xp-item card${item.current ? ' is-current' : ''}`}>
      <header className="xp-head">
        <div>
          <h3 className="xp-role">{item.role}</h3>
          <p className="xp-company">
            {item.company}
            {item.companyAlt && (
              <span className="xp-company-alt" lang="ar" dir="rtl">
                {item.companyAlt}
              </span>
            )}
          </p>
        </div>
        {item.current && <span className="badge badge-dot">Current</span>}
      </header>

      <ul className="xp-meta" role="list">
        <li>
          <Calendar size={14} aria-hidden="true" />
          {item.period}
        </li>
        {item.location && (
          <li>
            <MapPin size={14} aria-hidden="true" />
            {item.location}
          </li>
        )}
      </ul>

      <p className="xp-summary">{item.summary}</p>

      {item.stats && (
        <dl className="xp-stats">
          {item.stats.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd className="mono">{s.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {item.points && (
        <ul className="check-list xp-points">
          {item.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}

      {item.tools && (
        <ul className="tags xp-tools" aria-label="Tools used">
          {item.tools.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeader
          id="experience-title"
          eyebrow="Experience"
          title="Where I've worked"
          lead="Professional roles and practical training working with real operational and project data."
        />

        <ol className="timeline" role="list">
          {experience.map((item, i) => (
            <Reveal as="li" key={`${item.company}-${item.role}`} className="timeline-item" delay={i * 60}>
              <span className="timeline-dot" aria-hidden="true" />
              <ExperienceItem item={item} />
            </Reveal>
          ))}
        </ol>

        <div className="activities">
          <Reveal>
            <h3 className="sub-title">
              <Users size={18} aria-hidden="true" />
              University Activities
            </h3>
          </Reveal>
          <div className="activities-grid">
            {activities.map((a, i) => (
              <Reveal as="article" key={a.org} className="activity card" delay={i * 80}>
                <p className="activity-unit mono">{a.unit}</p>
                <h4 className="activity-org">{a.org}</h4>
                <p className="activity-role">{a.role}</p>
                <p className="activity-summary">{a.summary}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
