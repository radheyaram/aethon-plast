import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Send } from 'lucide-react';
import { getProductById } from '../data/products';
import { COUNTRIES, COMPANY_NAME } from '../utils/constants';
import useDocumentTitle from '../utils/useDocumentTitle';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const product = getProductById(id);

    useDocumentTitle(product ? `${product.name} | ${COMPANY_NAME}` : `Product Not Found | ${COMPANY_NAME}`);

    const [showForm, setShowForm] = useState(false);
    const formRef = useRef(null);

    const handleInquireClick = () => {
        setShowForm(prev => !prev);
        if (!showForm) {
            setTimeout(() => {
                formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    };

    if (!product) {
        return (
            <div className="product-detail-page container" style={{ padding: '100px 0', textAlign: 'center' }}>
                <h2>Product not found</h2>
                <Link to="/products" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Products</Link>
            </div>
        );
    }

    return (
        <div className="product-detail-page">
            <div className="container">
                <div className="breadcrumb-nav">
                    <Link to="/products" className="breadcrumb-link">Products</Link>
                    <span className="breadcrumb-separator">»</span>
                    <Link to={`/products/${product.categoryId}`} className="breadcrumb-link">{product.categoryTitle}</Link>
                    <span className="breadcrumb-separator">»</span>
                    <span className="breadcrumb-current">{product.name}</span>
                </div>

                <div className="product-detail-wrapper">
                    <div className="product-image-section">
                        <div className="image-container">
                            <img src={product.image} alt={product.name} />
                        </div>

                    </div>

                    <div className="product-info-section">
                        <h1>{product.name}</h1>

                        <div className="product-details-content">
                            <h3>Product Details</h3>
                            <ul className="feature-list">
                                {product.features && product.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <button
                            onClick={handleInquireClick}
                            className={`inquire-btn-toggle ${showForm ? 'active' : ''}`}
                            style={{ marginTop: '1rem' }}
                        >
                            INQUIRE NOW
                        </button>
                    </div>
                </div>

                {showForm && (
                    <div ref={formRef} className="inquiry-form-container">
                        <p className="form-note"><span className="red-quote">“*“</span> indicates required fields</p>
                        <form className="inquiry-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Name <span className="required">*</span></label>
                                    <input type="text" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Company <span className="required">*</span></label>
                                    <input type="text" className="form-control" placeholder="Enter your company name..." required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Email <span className="required">*</span></label>
                                    <input type="email" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Phone <span className="required">*</span></label>
                                    <input type="tel" className="form-control" required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Country <span className="required">*</span></label>
                                    <select className="form-control" required>
                                        <option value="">Select Country</option>
                                        {COUNTRIES.map((country) => (
                                            <option key={country} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Quantity</label>
                                    <input type="text" className="form-control" placeholder="Estimated Annual Quantity" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea className="form-control" rows="4"></textarea>
                                    <button type="submit" className="btn-send-message">Send Message <Send size={18} /></button>
                                </div>
                                <div></div>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;
