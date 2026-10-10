import { Mail } from 'lucide-react';
import { contact } from '../../data/content';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import './SocialLinks.css';

const items = [
  { key: 'linkedin', label: 'LinkedIn', Icon: LinkedinIcon, href: (v) => v },
  { key: 'github', label: 'GitHub', Icon: GithubIcon, href: (v) => v },
  { key: 'email', label: 'Email', Icon: Mail, href: (v) => `mailto:${v}` },
];

/** Icon row for LinkedIn / GitHub / Email. Unset links render as muted placeholders. */
export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`social ${className}`} role="list">
      {items.map(({ key, label, Icon, href }) => {
        const value = contact[key];
        const external = key !== 'email';

        return (
          <li key={key}>
            {value ? (
              <a
                className="social-link"
                href={href(value)}
                aria-label={label}
                title={label}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                <Icon size={18} />
              </a>
            ) : (
              <span className="social-link is-empty" aria-label={`${label} (coming soon)`} title={`${label} — coming soon`}>
                <Icon size={18} aria-hidden="true" />
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
