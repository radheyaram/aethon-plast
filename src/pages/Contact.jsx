import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { CONTACT_INFO, CONTACT_SUBJECTS } from '../utils/constants';
import './Pages.css';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you soon.");
    };

    return (
        <div className="contact-page">
            <div className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch for quotes, custom inquiries, or partnership opportunities.</p>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="contact-container">
                        <div className="contact-info">
                            <h2>Get in Touch</h2>
                            <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
                                Our team is ready to assist you with your packaging requirements.
                            </p>

                            <div className="info-item">
                                <MapPin size={24} />
                                <div>
                                    <h4>Headquarters</h4>
                                    <p>{CONTACT_INFO.ADDRESS}</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <Phone size={24} />
                                <div>
                                    <h4>Phone</h4>
                                    <p>{CONTACT_INFO.PHONE}</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <Mail size={24} />
                                <div>
                                    <h4>Email</h4>
                                    <p>{CONTACT_INFO.EMAIL}</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" className="form-control" placeholder="John Doe" required />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" className="form-control" placeholder="john@company.com" required />
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <select className="form-control">
                                        {CONTACT_SUBJECTS.map(subject => (
                                            <option key={subject}>{subject}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea className="form-control" placeholder="Tell us about your requirements..." required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Send Message <Send size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
