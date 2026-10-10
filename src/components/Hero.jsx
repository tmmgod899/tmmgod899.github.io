import { useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { experience, education, profile } from '../data/content';
import SocialLinks from './ui/SocialLinks';
import './Hero.css';

const current = experience.find((e) => e.current);

export default function Hero() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="hero-status hero-in" style={{ '--d': '0ms' }}>
            <span className="badge badge-dot">Open to Data Analyst &amp; Data Science roles</span>
          </p>

          <h1 id="hero-title" className="hero-in" style={{ '--d': '80ms' }}>
            <span className="hero-hi">Hi, I&rsquo;m</span> {profile.name}
          </h1>

          <p className="hero-title mono hero-in" style={{ '--d': '160ms' }}>
            {profile.title}
          </p>

          <p className="hero-intro hero-in" style={{ '--d': '240ms' }}>
            {profile.intro}
          </p>

          <div className="hero-cta hero-in" style={{ '--d': '320ms' }}>
            <a href="#projects" className="btn btn-primary">
              View My Projects
              <ArrowRight className="icon-shift" aria-hidden="true" />
            </a>
            <a href={profile.cv} className="btn btn-ghost" download={profile.cvFileName}>
              <Download className="icon-down" aria-hidden="true" />
              Download CV
            </a>
          </div>

          <div className="hero-meta hero-in" style={{ '--d': '400ms' }}>
            <SocialLinks />
            <dl className="hero-facts">
              {current && (
                <div>
                  <dt>Currently</dt>
                  <dd>
                    {current.role}, {current.companyShort || current.company}
                  </dd>
                </div>
              )}
              <div>
                <dt>Education</dt>
                <dd>B.Sc. Data Science, UQU</dd>
              </div>
              {profile.location && (
                <div>
                  <dt>Based in</dt>
                  <dd>{profile.location}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>

        <div className="hero-photo hero-in" style={{ '--d': '200ms' }}>
          <div className="hero-photo-frame">
            {imgFailed ? (
              <div className="hero-photo-fallback" role="img" aria-label={`${profile.name} — profile photo placeholder`}>
                {profile.name.charAt(0)}
              </div>
            ) : (
              <img
                src={profile.image}
                alt={`Portrait of ${profile.name}`}
                width="420"
                height="420"
                fetchPriority="high"
                decoding="async"
                onError={() => setImgFailed(true)}
              />
            )}
          </div>
          <p className="hero-photo-caption mono" aria-hidden="true">
            {education.university}
          </p>
        </div>
      </div>
    </section>
  );
}
