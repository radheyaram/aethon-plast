import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, ArrowRight } from 'lucide-react';
import './ProductList.css';
import bottleImg from '../assets/product_bottle_iso_1769615333186.png';
import capImg from '../assets/product_cap_iso_1769615408540.png';
import closureImg from '../assets/product_cap_iso_1769615408540.png';
import crClosureHs130Img from '../assets/28mm_cr_closure_hs130.png';
import sp400MStyleImg from '../assets/28mm_sp400_m_style.png';
import ppCrHs035Img from '../assets/28mm_pp_cr_hs035.png';
import safCap38Img from '../assets/38mm_saf_cap_iiia.png';
import safCap33Img from '../assets/33mm_saf_cap_iiia.png';
import cr45mmImg from '../assets/45mm_cr_closures.png';
import safevistopImg from '../assets/safevistop_pp28.png';
import levodopaImg from '../assets/levodopa_entacapone_closure.png';
import caAcetateImg from '../assets/calcium_acetate_closure.png';
import fenoprofenImg from '../assets/fenoprofen_closure.png';
import cr400ArgImg from '../assets/28mm_cr_400_arg.png';
import whiteCap14Img from '../assets/14mm_white_cap.png';
import ctClosure38Img from '../assets/38mm_closure_ct.png';
import ctClosure53Img from '../assets/ct_closure_53mm.png';
import ctClosure38LineImg from '../assets/ct_closure_38mm.png';
import ppCtHeatsealImg from '../assets/38mm_pp_ct_heatseal.png';
import bottle45ccImg from '../assets/45cc_28mm_292.png';


const productData = {
    bottles: {
        title: 'Pharmaceutical Bottles',
        description: 'High-quality HDPE and PET bottles designed for stability and safety.',
        items: [
            { id: '60ml-hdpe-bottle', name: '60ml HDPE Bottle', spec: '60ml', material: 'HDPE', image: bottleImg, subCategory: 'Bottles' },
            { id: '100ml-pet-bottle', name: '100ml PET Bottle', spec: '100ml', material: 'PET', image: bottleImg, subCategory: 'Bottles' },
            { id: '250ml-syrup-bottle', name: '250ml Syrup Bottle', spec: '250ml', material: 'HDPE', image: bottleImg, subCategory: 'Bottles' },
            { id: '500ml-bulk-container', name: '500ml Bulk Container', spec: '500ml', material: 'HDPE', image: bottleImg, subCategory: 'Bottles' },
            { id: '45cc-28mm-292', name: '45cc 28mm 292', description: 'Spacious 45cc translucent bottle with a 28mm neck for precise measurements.', image: bottle45ccImg, subCategory: 'Bottles' },
            { id: '60cc-33mm-338', name: '60cc 33mm 338', description: 'Larger-neck 60cc translucent bottle suitable for varying viscosities.', image: bottle45ccImg, subCategory: 'Bottles' },
            { id: '50cc-33mm-337', name: '50cc 33mm 337', description: 'Practical 50cc translucent bottle for general liquid storage.', image: bottle45ccImg, subCategory: 'Bottles' },
        ]
    },
    caps: {
        title: 'Precision Caps',
        description: 'Secure sealing solutions including screw caps and measuring cups.',
        items: [
            { id: '28mm-screw-cap', name: '28mm Screw Cap', spec: '28mm', material: 'PP', image: capImg, subCategory: 'Caps' },
            { id: 'measuring-cup-5-10ml', name: 'Measuring Cup 5ml-10ml', spec: 'Universal', material: 'PP', image: capImg, subCategory: 'Caps' },
            { id: '38mm-child-resistant-cap', name: '38mm Child Resistant', spec: '38mm', material: 'PP/HDPE', image: capImg, subCategory: 'Caps' },
        ]
    },
    closures: {
        title: 'Closures',
        description: 'Advanced closure systems including child-resistant and tamper-evident options.',
        items: [
            // CR Closures
            { id: '1', name: '28 mm CR closure with HS 130 liner', subCategory: 'CR Closures', image: crClosureHs130Img, description: 'Child-resistant closure with heat seal liner for secure sealing.' },
            { id: '2', name: '28mm-SP400 "M" style CR closure with liner', subCategory: 'CR Closures', image: sp400MStyleImg, description: '28mm SP400 closure featuring "M" style design with protective liner.' },
            { id: '3', name: '28 mm PP CR closure with liner HS035/25W', subCategory: 'CR Closures', image: ppCrHs035Img, description: 'Polypropylene CR closure with high-performance HS035 liner.' },
            { id: '4', name: '45 mm CR closure with liner HS035-0.025', subCategory: 'CR Closures', image: cr45mmImg, description: 'Large 45mm child-resistant closure with precision liner.' },
            { id: '5', name: '45 mm CRC Closure – Aethon Plast', subCategory: 'CR Closures', image: cr45mmImg, description: 'Premium 45mm CRC closure manufactured by Aethon Plast.' },
            { id: '6', name: '28 mm CR Closure 400-ARG Assembly (with liner)', subCategory: 'CR Closures', image: cr400ArgImg, description: 'Complete 28mm CR closure assembly with 400-ARG finish.' },
            { id: '7', name: '33 mm Child Resistant Cap / Closure (Assembly)', subCategory: 'CR Closures', image: safCap33Img, description: '33mm child-resistant assembly for enhanced safety.' },
            { id: '8', name: '38 mm Child Resistant Cap / Closure (Assembly)', subCategory: 'CR Closures', image: safCap38Img, description: 'Robust 38mm child-resistant cap assembly.' },
            { id: '9', name: '28 mm PP CR closure with liner TG II-TS', subCategory: 'CR Closures', image: ppCrHs035Img, description: '28mm PP closure with TG II-TS liner for specific applications.' },
            { id: '10', name: '38 mm PP CR closure (HS035 HeatSeal / 20)', subCategory: 'CR Closures', image: safCap38Img, description: 'Heat-sealable 38mm PP CR closure.' },

            // SAF Caps
            { id: '11', name: '38 mm SAF Cap IIIA – Triveni Polymer', subCategory: 'SAF Caps', image: safCap38Img, description: '38mm SAF Cap IIIA designed for high reliability.' },
            { id: '12', name: '33 mm SAF Cap IIIA – Triveni Polymer', subCategory: 'SAF Caps', image: safCap33Img, description: '33mm SAF Cap IIIA offering superior sealing performance.' },

            // CT Closures
            { id: '13', name: '38 mm CT Closure – Pravesha Industries', subCategory: 'CT Closures', image: ctClosure38Img, description: 'Standard 38mm Continuous Thread (CT) closure.' },
            { id: '14', name: 'CT Closure 53 mm with liner (HS123-20)', subCategory: 'CT Closures', image: ctClosure53Img, description: 'Wide 53mm CT closure with HS123-20 liner.' },
            { id: '15', name: '38 mm PP CT closure (HS035 HeatSeal / 20)', subCategory: 'CT Closures', image: ppCtHeatsealImg, description: '38mm PP CT closure with heat seal capability.' },
            { id: '16', name: 'CT Closure 38 mm with liner – Aethon Plast', subCategory: 'CT Closures', image: ctClosure38LineImg, description: 'Quality 38mm CT closure with liner.' },

            // Pharmaceutical Packaging
            { id: '17', name: 'Levodopa, Carbidopa & Entacapone Tablet Pack', subCategory: 'Pharmaceutical Packaging', image: levodopaImg, description: 'Specialized packaging for Levodopa/Carbidopa tablets.' },
            { id: '18', name: 'Calcium Acetate Capsules USP 667 mg Pack', subCategory: 'Pharmaceutical Packaging', image: caAcetateImg, description: 'Packaging solution for Calcium Acetate capsules.' },
            { id: '19', name: 'Fenoprofen Calcium Capsules USP 300 mg Pack', subCategory: 'Pharmaceutical Packaging', image: fenoprofenImg, description: 'Secure packaging for Fenoprofen Calcium capsules.' },
            { id: '20', name: 'Fenoprofen Calcium Capsules 310 mm × 600 mm', subCategory: 'Pharmaceutical Packaging', image: fenoprofenImg, description: 'Large format packaging for pharmaceutical use.' },

            // Tamper Evident CR Caps
            { id: '21', name: 'Safevistop PP28 Tamper Evident CR Cap', subCategory: 'Tamper Evident CR Caps', image: safevistopImg, description: 'Tamper-evident PP28 cap for maximum security.' },

            // Specialty Caps
            { id: '22', name: '14 mm White cap with inner ring', subCategory: 'Specialty Caps', image: whiteCap14Img, description: 'Small 14mm white cap with inner sealing ring.' },
            { id: '23', name: 'White nasal cap with cover', subCategory: 'Specialty Caps', image: whiteCap14Img, description: 'Specialized white nasal cap with protective cover.' },

            // Cosmetic Caps
            { id: '24', name: 'Shampoo cap with top cover for 215 g', subCategory: 'Cosmetic Caps', image: closureImg, description: 'Cosmetic shampoo cap designed for 215g bottles.' },
        ]
    }
};

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

    const [activeSub, setActiveSub] = React.useState(null);

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
                    {/* Sidebar - Only show if there are multiple subcategories */}
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
