import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import bottleImg from '../assets/product_bottle_iso_1769615333186.png'; // Update with actual filename
import capImg from '../assets/product_cap_iso_1769615408540.png'; // Update with actual filename
// Reusing cap image for closure placeholder since generation failed
import closureImg from '../assets/product_cap_iso_1769615408540.png';
import './Products.css';

const Products = () => {
    const categories = [
        {
            id: 'bottles',
            name: 'Bottles',
            image: bottleImg,
            description: 'High-quality pharma-grade plastic bottles available in various sizes and colors.',
            tag: 'Pharma Packaging'
        },
        {
            id: 'caps',
            name: 'Caps',
            image: capImg,
            description: 'Precision-molded screw caps ensuring tight sealing and safety.',
            tag: 'Accessories'
        },
        {
            id: 'closures',
            name: 'Closures',
            image: closureImg,
            description: 'Advanced closure systems including child-resistant and tamper-evident options.',
            tag: 'Safety Solutions'
        }
    ];

    return (
        <div className="products-page">
            <div className="products-header">
                <div className="container">
                    <h1>Our Products</h1>
                    <p>Specialized plastic packaging solutions for the pharmaceutical industry.</p>
                </div>
            </div>

            <div className="container products-section">
                <div className="products-grid">
                    {categories.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-image-wrapper">
                                <img src={product.image} alt={product.name} />
                                <span className="product-tag">{product.tag}</span>
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <Link to={`/products/${product.id}`} className="btn-product-view">View Products <ArrowRight size={16} /></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container cta-section">
                <h2>Need a Custom Solution?</h2>
                <p>We specialize in custom molding to meet your specific requirements.</p>
                <Link to="/contact" className="btn btn-primary">Contact Us <ArrowRight size={18} /></Link>
            </div>
        </div>
    );
};

export default Products;
