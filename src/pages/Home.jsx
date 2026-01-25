import { ArrowRight, CheckCircle, Package, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero-overlay"></div>

                {/* Decorative Arrows */}
                <div className="hero-arrow hero-prev">
                    <ChevronLeft size={30} />
                </div>
                <div className="hero-arrow hero-next">
                    <ChevronRight size={30} />
                </div>

                <div className="container hero-content">
                    <h1>Your Trusted Partner in</h1>
                    <span className="hero-title-sub">Plastic Packaging Excellence</span>

                    <p>Delivering premium quality pharmaceutical, cosmetic, and FMCG packaging solutions to international standards with reliability and commitment into plastic molding.</p>

                    <div className="hero-btns">
                        <Link to="/products" className="btn btn-cta">Explore Our Products</Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section features-section">
                <div className="container">
                    <div className="feature-grid">
                        <div className="feature-card">
                            <div className="icon-box"><ShieldCheck size={32} /></div>
                            <h3>Pharma Grade</h3>
                            <p>Strict adherence to hygiene and regulatory compliance for medical packaging.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-box"><Package size={32} /></div>
                            <h3>Custom Molding</h3>
                            <p>Tailored shapes and designs to make your brand stand out on the shelf.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-box"><CheckCircle size={32} /></div>
                            <h3>Quality Assured</h3>
                            <p>Rigorous testing and quality control processes for consistent durability.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Preview */}
            <section className="section bg-light">
                <div className="container about-preview">
                    <div className="about-text">
                        <h2>Reliable Manufacturing <br /> Partner</h2>
                        <p>At Aethon Plast, we combine advanced technology with manufacturing expertise to deliver superior packaging solutions. From startups to enterprises, we enable growth through quality.</p>
                        <Link to="/about" className="learn-more">Learn More <ArrowRight size={16} /></Link>
                    </div>
                    <div className="about-stats">
                        <div className="stat-item">
                            <h4>0+</h4>
                            <p>Units/Month</p>
                        </div>
                        <div className="stat-item">
                            <h4>0+</h4>
                            <p>Clients</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
