import { Package, ShieldCheck } from 'lucide-react';
import './Pages.css';
import './Products.css';

const Products = () => {
    const products = [
        {
            id: 1,
            title: "28 mm CR closure with HS 130 liner",
            category: "Closures",
            desc: "High-quality child-resistant closure with HS 130 liner for secure sealing.",
            icon: <ShieldCheck size={48} />
        },
        {
            id: 2,
            title: "28mm-SP400-\"M\" style-CR closure with lin",
            category: "Closures",
            desc: "Specialized 28mm SP400 M-style child-resistant closure.",
            icon: <ShieldCheck size={48} />
        },
        {
            id: 3,
            title: "28 MM PP CR Closure with liner HS035/25W",
            category: "Closures",
            desc: "Polypropylene child-resistant closure with HS035/25W liner.",
            icon: <ShieldCheck size={48} />
        },
        {
            id: 4,
            title: "38 MM SAF CAP IIIA Mfg: Triveni polyme",
            category: "Closures",
            desc: "38mm SAF CAP IIIA manufactured by Triveni Polymer.",
            icon: <Package size={48} />
        },
        {
            id: 5,
            title: "Levodopa, carbidopa and Entacapone table",
            category: "Closures",
            desc: "Specialized packaging solution for pharmaceutical tablets.",
            icon: <Package size={48} />
        },
        {
            id: 6,
            title: "38 MM Closure CT caps Mfg: Pravesha Ind",
            category: "Closures",
            desc: "38mm Continuous Thread (CT) caps manufactured by Pravesha Industries.",
            icon: <Package size={48} />
        },
        {
            id: 7,
            title: "45 mm CR Closures with Liner HS035-0.025",
            category: "Closures",
            desc: "45mm Child-Resistant closure with high-performance liner.",
            icon: <ShieldCheck size={48} />
        },
        {
            id: 8,
            title: "Calcium Acetate Capsules, USP 667mg – Pa",
            category: "Closures",
            desc: "Closure solution for Calcium Acetate Capsules packaging.",
            icon: <Package size={48} />
        },
        {
            id: 9,
            title: "33 MM SAF CAP IIIA Mfg: Triveni polyme",
            category: "Closures",
            desc: "33mm SAF CAP IIIA manufactured by Triveni Polymer.",
            icon: <Package size={48} />
        },
        {
            id: 10,
            title: "Fenoprofen Calcium Capsules, USP 300mg",
            category: "Closures",
            desc: "Packaging closure for Fenoprofen Calcium Capsules.",
            icon: <Package size={48} />
        },
        {
            id: 11,
            title: "Fenoprofen Calcium Capsules, 310mmX600mm",
            category: "Closures",
            desc: "Large format packaging solution.",
            icon: <Package size={48} />
        },
        {
            id: 12,
            title: "Safevistop PP28 tamper evident CR Cap",
            category: "Closures",
            desc: "PP28 Tamper Evident Child Resistant Cap for enhanced safety.",
            icon: <ShieldCheck size={48} />
        },
        {
            id: 13,
            title: "45 MM CRC Closures Mfg.: Shriji Polymer",
            category: "Closures",
            desc: "45mm Child Resistant Closure manufactured by Shriji Polymer.",
            icon: <ShieldCheck size={48} />
        },
        {
            id: 14,
            title: "28mm CR closure 400-ARG-Assembly (Liner)",
            category: "Closures",
            desc: "28mm CR closure assembly with liner.",
            icon: <ShieldCheck size={48} />
        },
        {
            id: 15,
            title: "14 mm White cap with inner ring",
            category: "Closures",
            desc: "14mm white cap featuring an inner ring for sealing.",
            icon: <Package size={48} />
        },
        {
            id: 16,
            title: "Top cover with shampoo cap for 215g",
            category: "Closures",
            desc: "Top cover assembly with shampoo cap.",
            icon: <Package size={48} />
        },
        {
            id: 17,
            title: "33 mm child Resistant cap/closure (Assembly)",
            category: "Closures",
            desc: "33mm Child Resistant cap assembly.",
            icon: <ShieldCheck size={48} />
        },
        {
            id: 18,
            title: "38 mm child Resistant cap/closure (Assembly)",
            category: "Closures",
            desc: "38mm Child Resistant cap assembly.",
            icon: <ShieldCheck size={48} />
        },
        {
            id: 19,
            title: "CT Closure 53 mm with Liner (HS123-20)",
            category: "Closures",
            desc: "53mm Continuous Thread closure with liner.",
            icon: <Package size={48} />
        },
        {
            id: 20,
            title: "28 mm PP CR Closure with liner TG II-TS",
            category: "Closures",
            desc: "28mm Polypropylene Child Resistant closure with specialized liner.",
            icon: <ShieldCheck size={48} />
        },
        {
            id: 21,
            title: "38 mm PP CT Closure (HS035 HeatSeal / 20)",
            category: "Closures",
            desc: "38mm PP Continuous Thread closure with HeatSeal liner.",
            icon: <Package size={48} />
        },
        {
            id: 22,
            title: "38 mm PP CR Closure (HS035 HeatSeal / 20)",
            category: "Closures",
            desc: "38mm PP Child Resistant closure with HeatSeal liner.",
            icon: <ShieldCheck size={48} />
        },
        {
            id: 23,
            title: "CT Closure 38 mm with Line Mfg.: Shriji",
            category: "Closures",
            desc: "38mm CT Closure manufactured by Shriji.",
            icon: <Package size={48} />
        },
        {
            id: 24,
            title: "White Nasal cap with cover",
            category: "Closures",
            desc: "Specialized white nasal cap with protective cover.",
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
