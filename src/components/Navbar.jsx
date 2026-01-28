import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Instagram, Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';
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
          <li><NavLink to="/" end>HOME</NavLink></li>
          <li><NavLink to="/about">ABOUT</NavLink></li>
          <li><NavLink to="/products">PRODUCTS</NavLink></li>
          <li><NavLink to="/our-segments">OUR SEGMENTS</NavLink></li>
          <li><NavLink to="/contact" className="nav-btn-highlight">CONTACT US</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
