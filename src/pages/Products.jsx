import { Package, Droplets, FlaskConical, SprayCan } from 'lucide-react';
import './Pages.css';
import './Products.css';

const Products = () => {
    const products = [
        {
            id: 1,
            title: "HDPE Pharmaceutical Bottles",
            category: "Pharma",
            desc: "Robust bottles designed for tablets, capsules, and powders. Moisture-resistant and child-safe options available.",
            icon: <FlaskConical size={48} />
        },
        {
            id: 2,
            title: "Cosmetic Jars & Containers",
            category: "Cosmetic",
            desc: "Aesthetic jars for creams and lotions. Customizable finishes including matte, gloss, and frosted.",
            icon: <Droplets size={48} />
        },
        {
            id: 3,
            title: "PET Liquid Bottles",
            category: "FMCG",
            desc: "Crystal clear PET bottles for syrups, oils, and beverages. High clarity and impact resistance.",
            icon: <SprayCan size={48} />
        },
        {
            id: 4,
            title: "Dropper Bottles",
            category: "Healthcare",
            desc: "Precision dropper bottles for essential oils and eye drops. Leak-proof design.",
            icon: <Droplets size={48} />
        },
        {
            id: 5,
            title: "Customized Packaging",
            category: "Custom",
            desc: "Bespoke mold development and branding support to bring your unique product vision to life.",
            icon: <Package size={48} />
        },
        {
            id: 6,
            title: "Bulk HDPE Canisters",
            category: "Industrial",
            desc: "Large volume containers for bulk powders and supplements. Stackable and durable.",
            icon: <Package size={48} />
        }
    ];

    return (
        <div className="products-page">
            <div className="page-header">
                <div className="container">
                    <h1>Our Products</h1>
                    <p>Precision-molded packaging solutions for every industry need.</p>
                </div>
            </div>

            <div className="container">
                <div className="products-grid">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <div className="product-img">
                                {product.icon}
                            </div>
                            <div className="product-info">
                                <span className="tag">{product.category}</span>
                                <h3>{product.title}</h3>
                                <p>{product.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
