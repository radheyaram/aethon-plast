import React from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <Link to="/" className="footer-logo">
                        <img src="/transperent aethon.png" alt="Aethon Plast" style={{ height: '60px', width: 'auto' }} />
                    </Link>
                    <p>
                        Leading manufacturer of high-quality plastic packaging solutions. We serve industries globally with innovation and integrity.
                    </p>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><Facebook size={18} /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><Instagram size={18} /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={18} /></a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/products">Our Products</Link></li>
                        <li><Link to="/our-segments">Our Segments</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <ul className="footer-links">
                        <li style={{ display: 'flex', gap: '10px' }}>
                            <MapPin size={24} className="text-primary" />
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=AGM+Chambers,+390/A,+446/15/E,+Sai+Colony,+R.C+Puram,+Sangareddy+District,+502032,+Telangana"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'inherit', textDecoration: 'none' }}
                            >
                                AGM Chambers, 390/A, 446/15/E, <br />Sai Colony, R.C Puram, Sangareddy District, 502032, Telangana
                            </a>
                        </li>
                        <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <Phone size={20} className="text-primary" />
                            <a href="tel:+919000386555" style={{ color: 'inherit', textDecoration: 'none' }}>9000386555</a>
                        </li>
                        <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <Mail size={20} className="text-primary" />
                            <a href="mailto:info@aethonplast.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@aethonplast.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container footer-bottom">
                <p>&copy; {new Date().getFullYear()} Aethon Plast Pvt Ltd. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
