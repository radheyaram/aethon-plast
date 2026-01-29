import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, ArrowRight } from 'lucide-react';
import './ProductList.css';
import { productData } from '../data/products';

const ProductList = () => {
    const { id } = useParams();
    const category = productData[id];

    if (!category) {
        return (
            <div className="product-list-page container" style={{ padding: '100px 0', textAlign: 'center' }}>
                <h2>Category not found</h2>
                <Link to="/products" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Categories</Link>
            </div>
        );
    }

    // Group items by subCategory
    const groupedItems = category.items.reduce((acc, item) => {
        const sub = item.subCategory || 'Other';
        if (!acc[sub]) acc[sub] = [];
        acc[sub].push(item);
        return acc;
    }, {});

    const subCategories = Object.keys(groupedItems);

    const [activeSub, setActiveSub] = useState(null);

    // Set initial active sub-category
    useEffect(() => {
        if (subCategories.length > 0 && !activeSub) {
            setActiveSub(subCategories[0]);
        }
    }, [subCategories, activeSub]);

    const scrollToSection = (sub) => {
        setActiveSub(sub);
        const element = document.getElementById(sub.replace(/\s+/g, '-').toLowerCase());
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="product-list-page">
            <div className="product-list-header">
                <div className="container">
                    <div className="breadcrumb-nav">
                        <Link to="/products" className="breadcrumb-link">Products</Link>
                        <span className="breadcrumb-separator">»</span>
                        <span className="breadcrumb-current">{category.title}</span>
                    </div>
                    <h1>{category.title}</h1>
                    <p>{category.description}</p>
                </div>
            </div>

            <div className="container">
                <div className="product-layout-container">
                    {subCategories.length > 1 && (
                        <aside className="product-sidebar">
                            <h3>{category.title}</h3>
                            <nav className="sidebar-nav">
                                {subCategories.map(sub => (
                                    <button
                                        key={sub}
                                        onClick={() => scrollToSection(sub)}
                                        className={`sidebar-link ${activeSub === sub ? 'active' : ''}`}
                                    >
                                        {sub}
                                    </button>
                                ))}
                            </nav>
                        </aside>
                    )}

                    {/* Main Content */}
                    <main className="product-main-content">
                        {subCategories.map(sub => (
                            <section
                                key={sub}
                                id={sub.replace(/\s+/g, '-').toLowerCase()}
                                className="sub-category-section"
                            >
                                {subCategories.length > 1 && <h2 className="sub-category-title">{sub}</h2>}
                                <div className="product-list-grid">
                                    {groupedItems[sub].map(item => (
                                        <div key={item.id} className="detail-card">
                                            <div className="detail-image">
                                                <img src={item.image} alt={item.name} />
                                                <span className="detail-tag">{sub}</span>
                                            </div>
                                            <div className="detail-info">
                                                <h3>{item.name}</h3>
                                                {item.description && <p className="detail-desc">{item.description}</p>}
                                                {item.spec && (
                                                    <div className="specs">
                                                        <span><strong>Size:</strong> {item.spec}</span>
                                                        <span><strong>Mat:</strong> {item.material}</span>
                                                    </div>
                                                )}
                                                <Link to={`/product/${item.id}`} className="btn-inquire">
                                                    View Details <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
