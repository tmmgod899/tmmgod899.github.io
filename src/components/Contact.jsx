import { ArrowUpRight, Mail } from 'lucide-react';
import { contact } from '../data/content';
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';
import './Contact.css';

const channels = [
  {
    key: 'email',
    label: 'Email',
    Icon: Mail,
    placeholder: '[Add my email here]',
    href: (v) => `mailto:${v}`,
    display: (v) => v,
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    Icon: LinkedinIcon,
    placeholder: '[Add LinkedIn URL]',
    href: (v) => v,
    display: (v) => v.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''),
  },
  {
    key: 'github',
    label: 'GitHub',
    Icon: GithubIcon,
    placeholder: '[Add GitHub URL]',
    href: (v) => v,
    display: (v) => v.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <SectionHeader
          id="contact-title"
          eyebrow="Contact"
          title="Let's work together."
          lead="I'm open to Data Analyst and Data Science opportunities. Feel free to reach out. I'd be glad to connect."
        />

        <ul className="contact-list" role="list">
          {channels.map(({ key, label, Icon, placeholder, href, display }, i) => {
            const value = contact[key];
            const inner = (
              <>
                <span className="contact-icon" aria-hidden="true">
                  <Icon size={18} />
                </span>
                <span className="contact-text">
                  <span className="contact-label">{label}</span>
                  <span className="contact-value">{value ? display(value) : placeholder}</span>
                </span>
                {value && <ArrowUpRight className="contact-arrow" size={18} aria-hidden="true" />}
              </>
            );

            return (
              <Reveal as="li" key={key} delay={i * 80}>
                {value ? (
                  <a
                    className="contact-item card"
                    href={href(value)}
                    {...(key !== 'email' && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="contact-item card is-empty">{inner}</div>
                )}
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
