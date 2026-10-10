import { ArrowUp } from 'lucide-react';
import { profile } from '../data/content';
import SocialLinks from './ui/SocialLinks';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">© 2026 {profile.name}. All rights reserved.</p>
        <div className="footer-right">
          <SocialLinks />
          <a href="#home" className="footer-top" aria-label="Back to top">
            <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
