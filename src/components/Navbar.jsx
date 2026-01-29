import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../utils/constants';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">
          <img src="/transperent aethon.png" alt="Aethon Plast" />
        </Link>
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={link.name === 'Contact Us' ? 'nav-btn-highlight' : ''}
                end={link.path === '/'}
              >
                {link.name.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
