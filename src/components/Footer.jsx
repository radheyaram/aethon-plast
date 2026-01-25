import React from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <Link to="/" className="footer-logo">Aethon<span>Plast</span></Link>
                    <p>
                        Leading manufacturer of high-quality plastic packaging solutions. We serve industries globally with innovation and integrity.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon"><Facebook size={18} /></a>
                        <a href="#" className="social-icon"><Instagram size={18} /></a>
                        <a href="#" className="social-icon"><Linkedin size={18} /></a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/products">Our Products</Link></li>
                        <li><Link to="/whom-we-serve">Whom We Serve</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <ul className="footer-links">
                        <li style={{ display: 'flex', gap: '10px' }}>
                            <MapPin size={20} className="text-primary" />
                            <span>123 Industrial Area, Phase 2, <br />New Delhi, India - 110020</span>
                        </li>
                        <li style={{ display: 'flex', gap: '10px' }}>
                            <Phone size={20} className="text-primary" />
                            <span>+91 98765 43210</span>
                        </li>
                        <li style={{ display: 'flex', gap: '10px' }}>
                            <Mail size={20} className="text-primary" />
                            <span>info@aethonplast.com</span>
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
