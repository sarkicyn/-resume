import { navItems } from '../data/portfolio.js';

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Artem Sarkisyan home">
        <span>Artem Sarkisyan</span>
        <small>Junior Unity Developer</small>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a className="rolling-link" href={item.href} key={item.href}>
            <span data-copy={item.label}>{item.label}</span>
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
