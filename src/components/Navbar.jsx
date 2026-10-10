import { useEffect, useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { navLinks, profile } from '../data/content';
import useActiveSection from '../hooks/useActiveSection';
import './Navbar.css';

const sectionIds = navLinks.map((l) => l.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock page scroll and allow Escape to close while the mobile menu is open.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth > 860 && setOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav${scrolled || open ? ' is-scrolled' : ''}`}>
      <nav className="nav-inner container" aria-label="Main">
        <a href="#home" className="nav-logo" onClick={close} aria-label={`${profile.name} — back to top`}>
          {profile.name}
          <span aria-hidden="true">.</span>
        </a>

        <ul className="nav-links" role="list">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? 'is-active' : undefined} aria-current={active === id ? 'true' : undefined}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a href="#cv" className="btn btn-ghost btn-sm nav-cv">
            <FileText aria-hidden="true" />
            CV
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`nav-mobile${open ? ' is-open' : ''}`} hidden={!open}>
        <ul className="container" role="list">
          {navLinks.map(({ id, label }, i) => (
            <li key={id} style={{ '--i': i }}>
              <a href={`#${id}`} onClick={close} className={active === id ? 'is-active' : undefined}>
                {label}
              </a>
            </li>
          ))}
          <li style={{ '--i': navLinks.length }}>
            <a href="#cv" onClick={close} className="btn btn-primary nav-mobile-cv">
              <FileText aria-hidden="true" />
              View CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
