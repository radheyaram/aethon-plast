import React from 'react';
import './Pages.css';
import { Factory, Utensils, Home, Briefcase, ShoppingBag, Droplets } from 'lucide-react';

const WhomWeServe = () => {
    const industries = [
        {
            id: 1,
            title: 'Beverages',
            icon: <Utensils size={40} />,
            description: 'Providing high-quality PET bottles for mineral water, juices, and carbonated drinks. Our bottles ensure freshness and durability.',
        },
        {
            id: 2,
            title: 'Pharmaceuticals',
            icon: <Droplets size={40} />,
            description: 'Safe and sterile packaging solutions for liquid medicines, syrups, and healthcare products, meeting strict hygiene standards.',
        },
        {
            id: 3,
            title: 'Home Care',
            icon: <Home size={40} />,
            description: 'Durable containers for cleaning agents, detergents, and disinfectants. Designed to withstand chemical properties.',
        },
        {
            id: 4,
            title: 'Personal Care',
            icon: <ShoppingBag size={40} />,
            description: 'Aesthetic and functional packaging for shampoos, lotions, and oils that enhance shelf appeal.',
        },
        {
            id: 5,
            title: 'Industrial',
            icon: <Factory size={40} />,
            description: 'Robust packaging solutions for industrial lubricants, oils, and chemicals requiring high strength and resistance.',
        },
        {
            id: 6,
            title: 'Corporate Clients',
            icon: <Briefcase size={40} />,
            description: 'Customized branding and bulk packaging solutions for corporate events and promotional needs.',
        }
    ];

    return (
        <div className="whom-we-serve-page">
            <header className="page-header" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80")' }}>
                <div className="container">
                    <h1>Whom We Serve</h1>
                    <p>Trusted partners across diverse industries.</p>
                </div>
            </header>

            <section className="section page-content container">
                <div className="grid-3">
                    {industries.map((item) => (
                        <div key={item.id} className="card">
                            <div className="card-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section bg-light" style={{ backgroundColor: '#f1f5f9', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '2rem' }}>Join Our Growing Network</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto 2rem auto' }}>
                        We are proud to serve a wide range of clients who trust us for quality and reliability. Partner with Aethon Plast for your packaging needs.
                    </p>
                    <a href="/contact" className="btn btn-primary">Become a Partner</a>
                </div>
            </section>
        </div>
    );
};

export default WhomWeServe;
