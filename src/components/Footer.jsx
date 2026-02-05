
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, SOCIAL_LINKS, NAV_LINKS } from '../utils/constants';
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
                        <a href={SOCIAL_LINKS.FACEBOOK} target="_blank" rel="noopener noreferrer" className="social-icon"><Facebook size={24} /></a>
                        <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="social-icon"><Instagram size={24} /></a>
                        <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={24} /></a>
                    </div>
                </div>

                <div className="footer-section quick-links">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        {NAV_LINKS.map(link => (
                            <li key={link.name}><Link to={link.path}>{link.name}</Link></li>
                        ))}
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <ul className="footer-links">
                        <li style={{ display: 'flex', gap: '15px' }}>
                            <div style={{ width: '40px', display: 'flex', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                                <MapPin size={32} className="text-primary" />
                            </div>
                            <a
                                href={CONTACT_INFO.MAP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'inherit', textDecoration: 'none', lineHeight: '1.5' }}
                            >
                                {CONTACT_INFO.ADDRESS}
                            </a>
                        </li>
                        <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                            <div style={{ width: '40px', display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
                                <Phone size={24} className="text-primary" />
                            </div>
                            <a href="https://wa.me/919000386555" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{CONTACT_INFO.PHONE}</a>
                        </li>
                        <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                            <div style={{ width: '40px', display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
                                <Mail size={24} className="text-primary" />
                            </div>
                            <a href={`mailto:${CONTACT_INFO.EMAIL}`} style={{ color: 'inherit', textDecoration: 'none' }}>{CONTACT_INFO.EMAIL}</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container footer-bottom">
                <p>&copy; {new Date().getFullYear()} Aethon Plast Pvt Ltd. All rights reserved.</p>
                <p className="developer-credit">dev by <a href="https://semixon.com" target="_blank" rel="noopener noreferrer">@Semixon</a></p>
            </div>
        </footer >
    );
};

export default Footer;
