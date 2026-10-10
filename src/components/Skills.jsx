import { BrainCircuit, Code2, Database, LayoutDashboard, Users } from 'lucide-react';
import { skills } from '../data/content';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';
import './Skills.css';

// Icons matched to skill groups by position in content.js
const icons = [Code2, BrainCircuit, LayoutDashboard, Database, Users];

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeader
          id="skills-title"
          eyebrow="Skills"
          title="Tools & capabilities"
          lead="The tools and methods I use to clean, analyze, model, and communicate data."
        />

        <div className="skills-grid">
          {skills.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal as="article" key={group.title} className="skill-card card" delay={(i % 3) * 80}>
                <h3 className="skill-title">
                  <span className="skill-icon" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  {group.title}
                </h3>
                <ul className="tags">
                  {group.items.map((s) => (
                    <li key={s} className="tag">
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
