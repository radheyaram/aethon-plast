import { useEffect, useState, useMemo, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import './ProductList.css';
import { productData } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
    const { id } = useParams();


    const segmentMap = {
        'pharma': { title: 'Pharmaceutical Solutions', description: 'Specialized packaging compliant with pharmaceutical standards.' },
        'nutra': { title: 'Nutraceutical Packaging', description: 'Packaging solutions designed for nutritional supplements.' },
        'cosmetics': { title: 'Cosmetic Packaging', description: 'Premium aesthetic packaging for beauty products.' },
        'fmcg': { title: 'FMCG Solutions', description: 'Cost-effective high-volume packaging for consumer goods.' }
    };

    const { category, isSegment } = useMemo(() => {
        const standardCat = productData[id];
        if (standardCat) {
            return { category: standardCat, isSegment: false };
        }

        if (segmentMap[id]) {
            const segmentInfo = segmentMap[id];
            const allProducts = [];
            Object.values(productData).forEach(cat => {
                cat.items.forEach(item => {
                    if (item.segments && item.segments.includes(id)) {
                        allProducts.push(item);
                    }
                });
            });

            return {
                category: {
                    title: segmentInfo.title,
                    description: segmentInfo.description,
                    items: allProducts
                },
                isSegment: true
            };
        }

        return { category: null, isSegment: false };
    }, [id]);

    const groupedData = useMemo(() => {
        if (!category) return {};

        let newGroupedData = {};

        if (isSegment) {
            // Group by Parent Category first
            Object.entries(productData).forEach(([key, cat]) => {
                const parentTitle = key.toUpperCase();
                const relevantItems = cat.items.filter(item => item.segments && item.segments.includes(id));

                if (relevantItems.length > 0) {
                    const subGroups = relevantItems.reduce((acc, item) => {
                        const sub = item.subCategory || 'Other';
                        if (!acc[sub]) acc[sub] = [];
                        acc[sub].push(item);
                        return acc;
                    }, {});
                    newGroupedData[parentTitle] = subGroups;
                }
            });
        } else {
            const subGroups = category.items.reduce((acc, item) => {
                const sub = item.subCategory || 'Other';
                if (!acc[sub]) acc[sub] = [];
                acc[sub].push(item);
                return acc;
            }, {});
            newGroupedData["MAIN"] = subGroups;
        }
        return newGroupedData;
    }, [category, id, isSegment]);

    if (!category || (category.items.length === 0)) {
        return (
            <div className="product-list-page container" style={{ padding: '100px 0', textAlign: 'center' }}>
                <h2>{isSegment ? 'No products found in this segment' : 'Category not found'}</h2>
                <Link to="/products" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Categories</Link>
            </div>
        );
    }

    const [activeSub, setActiveSub] = useState(null);

    useEffect(() => {
        if (!activeSub) {
            setActiveSub('All');
        }
    }, [activeSub]);


    const [expandedKeys, setExpandedKeys] = useState({});

    useEffect(() => {
        if (Object.keys(groupedData).length > 0) {
            const firstKey = Object.keys(groupedData)[0];
            setExpandedKeys({ [firstKey]: true });
        }
    }, [id, groupedData]);

    const toggleGroup = (key) => {
        setExpandedKeys(prev => {
            if (prev[key]) {
                return {};
            }
            return { [key]: true };
        });
    };

    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 12;

    useEffect(() => {
        setCurrentPage(1);
    }, [activeSub, id]);

    // Flatten data for "All" view and extract filter options
    const { allProducts, filterOptions } = useMemo(() => {
        let products = [];
        let options = [];

        if (isSegment) {
            Object.entries(groupedData).forEach(([parentKey, subGroups]) => {
                options.push(parentKey);
                Object.values(subGroups).forEach(items => {
                    products = [...products, ...items];
                });
            });
        } else {
            Object.values(groupedData).forEach(subGroups => {
                Object.entries(subGroups).forEach(([subName, items]) => {
                    products = [...products, ...items];
                    if (!options.includes(subName)) {
                        options.push(subName);
                    }
                });
            });
        }
        return { allProducts: products, filterOptions: options };
    }, [groupedData, isSegment]);

    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');

    useEffect(() => {
        setSearchQuery('');
        setDebouncedSearchQuery('');
    }, [id]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearchQuery(searchQuery);
        }, 300);

        return () => clearTimeout(timer);
    }, [searchQuery]);

    useEffect(() => {
        if (searchQuery.trim().length > 0) {
            setActiveSub('All');
        }
    }, [searchQuery]);

    const displayedProducts = useMemo(() => {
        let filtered = [];

        if (!activeSub || activeSub === 'All') {
            filtered = allProducts;
        } else if (isSegment) {
            if (groupedData[activeSub]) {
                Object.values(groupedData[activeSub]).forEach(items => {
                    filtered = [...filtered, ...items];
                });
            } else {
                Object.values(groupedData).forEach(subGroups => {
                    if (subGroups[activeSub]) {
                        filtered = [...filtered, ...subGroups[activeSub]];
                    }
                });
            }
        } else {
            Object.values(groupedData).forEach(subGroups => {
                if (subGroups[activeSub]) {
                    filtered = [...filtered, ...subGroups[activeSub]];
                }
            });
        }

        if (debouncedSearchQuery.trim()) {
            const lowerQuery = debouncedSearchQuery.toLowerCase();
            filtered = filtered.filter(item =>
                item.name.toLowerCase().includes(lowerQuery) ||
                (item.description && item.description.toLowerCase().includes(lowerQuery)) ||
                (item.subCategory && item.subCategory.toLowerCase().includes(lowerQuery)) ||
                (item.actualName && item.actualName.toLowerCase().includes(lowerQuery))
            );
        }

        return filtered;
    }, [activeSub, allProducts, groupedData, isSegment, debouncedSearchQuery]);

    const totalPages = Math.ceil(displayedProducts.length / ITEMS_PER_PAGE);
    const paginatedProducts = displayedProducts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const gridRef = useRef(null);
    const searchInputRef = useRef(null);

    useEffect(() => {
        if (currentPage > 1 || (currentPage === 1 && gridRef.current)) {
            if (gridRef.current) {
                const headerOffset = 120;
                const elementPosition = gridRef.current.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }, [currentPage]);

    useEffect(() => {
        if (activeSub && searchInputRef.current) {
            const headerOffset = 180;
            const elementPosition = searchInputRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }, [activeSub]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const handleSubClick = (sub) => {
        setActiveSub(sub);
    };

    const hasData = Object.keys(groupedData).length > 0;

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
                <div className="product-layout-container" ref={gridRef}>
                    {hasData && (
                        <aside className="product-sidebar">
                            <h3>{isSegment ? category.title : 'Categories'}</h3>
                            <nav className="sidebar-nav">
                                {Object.entries(groupedData).map(([parentKey, subGroups]) => (
                                    <div key={parentKey} className="sidebar-group">
                                        {parentKey !== "MAIN" ? (
                                            <button
                                                className={`sidebar-group-title accordion-trigger ${expandedKeys[parentKey] ? 'active' : ''}`}
                                                onClick={() => toggleGroup(parentKey)}
                                            >
                                                {parentKey}
                                                <span className="accordion-icon">
                                                    {expandedKeys[parentKey] ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                                                </span>
                                            </button>
                                        ) : null}

                                        <div className={`sidebar-sub-list ${parentKey === "MAIN" || expandedKeys[parentKey] ? 'open' : ''}`}>
                                            {Object.keys(subGroups).map(sub => (
                                                <button
                                                    key={sub}
                                                    onClick={() => handleSubClick(sub)}
                                                    className={`sidebar-link ${activeSub === sub ? 'active' : ''}`}
                                                >
                                                    {sub}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </nav>
                        </aside>
                    )}

                    <main className="product-main-content">
                        <div className="product-search-bar" ref={searchInputRef}>
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input"
                            />
                            <div className="search-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                            </div>
                        </div>



                        <div className="product-list-grid">
                            {paginatedProducts.length > 0 ? (
                                paginatedProducts.map(item => (
                                    <ProductCard key={item.id} product={item} />
                                ))
                            ) : (
                                <p className="no-products-msg">No products found in this category.</p>
                            )}
                        </div>



                        {totalPages > 1 && (
                            <div className="pagination-controls">
                                <button
                                    className="page-btn prev"
                                    disabled={currentPage === 1}
                                    onClick={() => handlePageChange(currentPage - 1)}
                                >
                                    <ArrowLeft size={16} style={{ marginRight: '5px' }} /> Previous
                                </button>
                                <span className="page-info">
                                    Page {currentPage} of {totalPages}
                                </span>
                                <button
                                    className="page-btn next"
                                    disabled={currentPage === totalPages}
                                    onClick={() => handlePageChange(currentPage + 1)}
                                >
                                    Next <ArrowRight size={16} style={{ marginLeft: '5px' }} />
                                </button>
                            </div>
                        )}
                    </main>
                </div >
            </div >
        </div >
    );
};

export default ProductList;
