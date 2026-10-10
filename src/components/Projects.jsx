import { ArrowUpRight, FlaskConical } from 'lucide-react';
import { projects } from '../data/content';
import { GithubIcon } from './ui/BrandIcons';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';
import './Projects.css';

const pct = (part, total) => (part / total) * 100;
const fmt = (n) => n.toLocaleString('en-US');

function TagList({ items, label, accent = false }) {
  return (
    <ul className="tags" aria-label={label}>
      {items.map((t) => (
        <li key={t} className={`tag${accent ? ' tag-accent' : ''}`}>
          {t}
        </li>
      ))}
    </ul>
  );
}

function ClassDistribution({ classes }) {
  const total = classes.reduce((sum, c) => sum + c.count, 0);

  return (
    <figure className="dist">
      <figcaption className="dist-caption">Class distribution</figcaption>
      <div className="dist-bar" role="img" aria-label={classes.map((c) => `${c.label}: ${fmt(c.count)}`).join(', ')}>
        {classes.map((c) => (
          <span key={c.label} className={`dist-seg is-${c.label.toLowerCase()}`} style={{ width: `${pct(c.count, total)}%` }} />
        ))}
      </div>
      <ul className="dist-legend" role="list">
        {classes.map((c) => (
          <li key={c.label}>
            <span className={`dist-swatch is-${c.label.toLowerCase()}`} aria-hidden="true" />
            <span className="dist-label">{c.label}</span>
            <span className="dist-value mono">{fmt(c.count)}</span>
            <span className="dist-pct mono">{pct(c.count, total).toFixed(1)}%</span>
          </li>
        ))}
      </ul>
    </figure>
  );
}

function FeaturedProject({ project }) {
  const { experiment } = project;

  return (
    <Reveal as="article" className="project-featured card" aria-labelledby="project-vitavision">
      <div className="pf-main">
        <div className="pf-top">
          <span className="badge">Featured project</span>
        </div>
        <h3 className="pf-name" id="project-vitavision">
          {project.name}
        </h3>
        <p className="pf-tagline">
          {project.tagline}
          {project.period && <span className="pf-period mono">{project.period}</span>}
        </p>
        <p className="pf-desc">{project.description}</p>

        <div className="pf-block">
          <h4 className="pf-label mono">Nutrients covered</h4>
          <TagList items={project.nutrients} label="Nutrients covered" />
        </div>

        <div className="pf-block">
          <h4 className="pf-label mono">Workflow</h4>
          <ol className="pf-steps" role="list">
            {project.workflow.map((step, i) => (
              <li key={step}>
                <span className="mono" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="pf-block">
          <h4 className="pf-label mono">Tech stack</h4>
          <TagList items={project.tech} label="Technologies" accent />
        </div>

        <div className="project-actions">
          <a href={project.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View Project
            <ArrowUpRight className="icon-shift" aria-hidden="true" />
            <span className="visually-hidden">(opens in a new tab)</span>
          </a>
          <GithubButton url={project.github} />
        </div>
      </div>

      <aside className="pf-panel" aria-label="Machine learning experiment results">
        <p className="pf-panel-title mono">
          <FlaskConical size={14} aria-hidden="true" />
          ML experiment
        </p>

        <dl className="pf-metrics">
          <div>
            <dt>Model accuracy</dt>
            <dd className="mono">{experiment.accuracy}</dd>
          </div>
          <div>
            <dt>Dataset size</dt>
            <dd className="mono">
              {experiment.samples}
              <small> samples</small>
            </dd>
          </div>
        </dl>

        <ClassDistribution classes={experiment.classes} />

        <p className="pf-note">{project.approach}</p>
      </aside>
    </Reveal>
  );
}

function GithubButton({ url }) {
  if (url) {
    return (
      <a href={url} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
        <GithubIcon size={16} />
        GitHub
        <span className="visually-hidden">(opens in a new tab)</span>
      </a>
    );
  }
  return (
    <span className="btn btn-ghost" aria-disabled="true" title="Repository link coming soon">
      <GithubIcon size={16} />
      GitHub — soon
    </span>
  );
}

function ProjectCard({ project, delay }) {
  const { progress } = project;

  return (
    <Reveal as="article" className="project-card card" delay={delay}>
      <p className="pc-context mono">{project.context}</p>
      <h3 className="pc-name">{project.name}</h3>
      <p className="pc-desc">{project.description}</p>

      {progress && (
        <figure className="progress">
          <div className="progress-numbers">
            <div>
              <span className="progress-big mono">{progress.done}</span>
              <span className="progress-of mono"> / {progress.total}</span>
            </div>
            <span className="progress-pct mono">{pct(progress.done, progress.total).toFixed(1)}%</span>
          </div>
          <div
            className="progress-track"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={progress.total}
            aria-valuenow={progress.done}
            aria-label={`${progress.doneLabel}: ${progress.done} of ${progress.total}`}
          >
            <span style={{ width: `${pct(progress.done, progress.total)}%` }} />
          </div>
          <figcaption className="progress-caption">
            {progress.doneLabel} of {progress.total} {progress.totalLabel.toLowerCase()}
          </figcaption>
        </figure>
      )}

      {project.features && (
        <ul className="check-list pc-list pc-two-col">
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      )}

      {project.groups && (
        <div className="pc-groups">
          {project.groups.map((g) => (
            <div key={g.title} className="pc-group">
              <h4 className="pc-group-title">{g.title}</h4>
              {g.items && <TagList items={g.items} label={`${g.title} methods`} />}
              {g.text && <p className="pc-group-text">{g.text}</p>}
            </div>
          ))}
        </div>
      )}

      <div className="pc-footer">
        <TagList items={project.tech} label="Technologies" accent />
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader
          id="projects-title"
          eyebrow="Projects"
          title="Selected work"
          lead="Data-driven projects spanning web applications, operational dashboards, and applied machine learning."
        />

        <div className="projects">
          <FeaturedProject project={projects.featured} />
          <div className="projects-grid">
            {projects.others.map((p, i) => (
              <ProjectCard key={p.name} project={p} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
