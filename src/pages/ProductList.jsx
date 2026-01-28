import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import './ProductList.css'; // We'll create this or reuse Products.css style logic
import bottleImg from '../assets/product_bottle_iso_1769615333186.png';
import capImg from '../assets/product_cap_iso_1769615408540.png';
import closureImg from '../assets/product_cap_iso_1769615408540.png'; // Using cap as placeholder

const productData = {
    bottles: {
        title: 'Pharmaceutical Bottles',
        description: 'High-quality HDPE and PET bottles designed for stability and safety.',
        items: [
            { id: '60ml-hdpe-bottle', name: '60ml HDPE Bottle', spec: '60ml', material: 'HDPE', image: bottleImg },
            { id: '100ml-pet-bottle', name: '100ml PET Bottle', spec: '100ml', material: 'PET', image: bottleImg },
            { id: '250ml-syrup-bottle', name: '250ml Syrup Bottle', spec: '250ml', material: 'HDPE', image: bottleImg },
            { id: '500ml-bulk-container', name: '500ml Bulk Container', spec: '500ml', material: 'HDPE', image: bottleImg },
        ]
    },
    caps: {
        title: 'Precision Caps',
        description: 'Secure sealing solutions including screw caps and measuring cups.',
        items: [
            { id: '28mm-screw-cap', name: '28mm Screw Cap', spec: '28mm', material: 'PP', image: capImg },
            { id: 'measuring-cup-5-10ml', name: 'Measuring Cup 5ml-10ml', spec: 'Universal', material: 'PP', image: capImg },
            { id: '38mm-child-resistant', name: '38mm Child Resistant', spec: '38mm', material: 'PP/HDPE', image: capImg },
        ]
    },
    closures: {
        title: 'Closures',
        description: 'Advanced closure systems including child-resistant and tamper-evident options.',
        items: [
            { id: '28mm-cr-closure-hs130', name: '28 mm CR closure with HS 130 liner', description: 'Child-resistant closure with heat seal liner for induction sealing.', tag: 'Closures', image: closureImg },
            { id: '28mm-sp400-m-style', name: '28mm-SP400-"M" style-CR closure', description: 'Specialized M-style child-resistant closure.', tag: 'Closures', image: closureImg },
            { id: '28mm-pp-cr-hs035', name: '28 MM PP CR Closure with liner HS035/25W', description: 'Polypropylene CR closure with high-quality liner.', tag: 'Closures', image: closureImg },
            { id: '38mm-saf-cap-iiia', name: '38 MM SAF CAP IIIA', description: 'Safety cap designed for rigorous pharmaceutical standards.', tag: 'Closures', image: closureImg },
            { id: 'levodopa-entacapone-closure', name: 'Levodopa/Entacapone Bottle Closure', description: 'Specific closure designed for sensitive medication bottles.', tag: 'Closures', image: closureImg },
            { id: '38mm-closure-ct', name: '38 MM Closure CT caps', description: 'Continuous thread closure for secure sealing.', tag: 'Closures', image: closureImg },
            { id: '45mm-cr-closures', name: '45 mm CR Closures with Liner HS035', description: 'Larger diameter CR closure with protective liner.', tag: 'Closures', image: closureImg },
            { id: 'calcium-acetate-closure', name: 'Calcium Acetate Bottle Closure', description: 'Reliable closure for supplement and medicine containers.', tag: 'Closures', image: closureImg },
            { id: '33mm-saf-cap-iiia', name: '33 MM SAF CAP IIIA', description: 'Mid-size safety cap for pharmaceutical use.', tag: 'Closures', image: closureImg },
            { id: 'fenoprofen-closure', name: 'Fenoprofen Calcium Bottle Closure', description: 'Specialized closure for specific pharmaceutical forms.', tag: 'Closures', image: closureImg },
            { id: 'safevistop-pp28', name: 'Safevistop PP28 tamper evident CR Cap', description: 'Combined tamper-evident and child-resistant features.', tag: 'Closures', image: closureImg },
            { id: '45mm-crc-closures', name: '45 MM CRC Closures', description: 'Child-resistant cap for 45mm neck finish.', tag: 'Closures', image: closureImg },
            { id: '28mm-cr-400-arg', name: '28mm CR closure 400-ARG-Assembly', description: 'Assembled CR closure ready for line application.', tag: 'Closures', image: closureImg },
            { id: '14mm-white-cap', name: '14 mm White cap with inner ring', description: 'Small precision cap with inner sealing ring.', tag: 'Closures', image: closureImg },
            { id: 'top-cover-shampoo', name: 'Top cover with shampoo cap for 215g', description: 'Personal care dispensing cap.', tag: 'Closures', image: closureImg },
            { id: '33mm-child-resistant', name: '33 mm Child Resistant cap/closure', description: 'Standard 33mm safety closure.', tag: 'Closures', image: closureImg },
            { id: '38mm-child-resistant-std', name: '38 mm Child Resistant cap/closure', description: 'Standard 38mm safety closure.', tag: 'Closures', image: closureImg },
            { id: 'ct-closure-53mm', name: 'CT Closure 53 mm with Liner', description: 'Large 53mm continuous thread closure with liner.', tag: 'Closures', image: closureImg },
            { id: '28mm-pp-cr-tg-ii', name: '28 mm PP CR Closure with liner TG II-TS', description: 'Premium PP closure with specialized liner.', tag: 'Closures', image: closureImg },
            { id: '38mm-pp-ct-heatseal', name: '38 mm PP CT Closure (HeatSeal)', description: 'Polypropylene CT closure with heat seal capability.', tag: 'Closures', image: closureImg },
            { id: '38mm-pp-cr-heatseal', name: '38 mm PP CR Closure (HeatSeal)', description: 'Child-resistant version with heat seal.', tag: 'Closures', image: closureImg },
            { id: 'ct-closure-38mm', name: 'CT Closure 38 mm with Line', description: 'Lined continuous thread closure.', tag: 'Closures', image: closureImg },
            { id: 'white-nasal-cap', name: 'White Nasal cap with cover', description: 'Specialized screw cap for nasal spray bottles.', tag: 'Closures', image: closureImg },
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

    return (
        <div className="product-list-page">
            <div className="product-list-header">
                <div className="container">
                    <Link to="/products" className="back-link"><ArrowLeft size={20} /> Back to Categories</Link>
                    <h1>{category.title}</h1>
                    <p>{category.description}</p>
                </div>
            </div>

            <div className="container product-list-container">
                <div className="product-list-grid">
                    {category.items.map(item => (
                        <div key={item.id} className="detail-card">
                            <div className="detail-image">
                                <img src={item.image} alt={item.name} />
                                <span className="detail-tag">{item.tag || 'Standard'}</span>
                            </div>
                            <div className="detail-info">
                                <h3>{item.name}</h3>
                                {item.description && <p className="detail-desc">{item.description}</p>}
                                {!item.description && (
                                    <div className="specs">
                                        <span><strong>Size:</strong> {item.spec}</span>
                                        <span><strong>Material:</strong> {item.material}</span>
                                    </div>
                                )}
                                <Link to={`/product/${item.id}`} className="btn-inquire">READ MORE</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
