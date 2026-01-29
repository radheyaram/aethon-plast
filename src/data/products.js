const bottleImg = '/assets/product_bottle_iso_1769615333186.png';
const capImg = '/assets/product_cap_iso_1769615408540.png';
const closureImg = '/assets/product_cap_iso_1769615408540.png';
const crClosureHs130Img = '/assets/28mm_cr_closure_hs130.png';
const sp400MStyleImg = '/assets/28mm_sp400_m_style.png';
const ppCrHs035Img = '/assets/28mm_pp_cr_hs035.png';
const safCap38Img = '/assets/38mm_saf_cap_iiia.png';
const safCap33Img = '/assets/33mm_saf_cap_iiia.png';
const cr45mmImg = '/assets/45mm_cr_closures.png';
const cr45mmHs035Img = '/assets/45mm_cr_hs035.png';
const safCap38AssyImg = '/assets/38mm_saf_cap_assembly.png';
const safevistopImg = '/assets/safevistop_pp28.png';
const levodopaImg = '/assets/levodopa_entacapone_closure.png';
const caAcetateImg = '/assets/calcium_acetate_closure.png';
const fenoprofenImg = '/assets/fenoprofen_closure.png';
const cr400ArgImg = '/assets/28mm_cr_400_arg.png';
const whiteCap14Img = '/assets/14mm_white_cap.png';
const ctClosure38Img = '/assets/38mm_closure_ct.png';
const ctClosure53Img = '/assets/ct_closure_53mm.png';
const ctClosure38LineImg = '/assets/ct_closure_38mm.png';
const ppCtHeatsealImg = '/assets/38mm_pp_ct_heatseal.png';
const bottle45ccImg = '/assets/45cc_28mm_292.png';

export const productData = {
    bottles: {
        title: 'Pharmaceutical Bottles',
        description: 'High-quality HDPE and PET bottles designed for stability and safety.',
        items: [
            { id: '60ml-hdpe-bottle', name: '60ml HDPE Bottle', subCategory: 'Bottles', image: bottleImg, description: 'Durable 60ml HDPE bottle designed for pharmaceutical applications.' },
            { id: '100ml-pet-bottle', name: '100ml PET Bottle', subCategory: 'Bottles', image: bottleImg, description: 'Clear 100ml PET bottle offering excellent product visibility and protection.' },
            { id: '250ml-syrup-bottle', name: '250ml Syrup Bottle', subCategory: 'Bottles', image: bottleImg, description: '250ml HDPE bottle specialized for syrups and liquid medications.' },
            { id: '500ml-bulk-container', name: '500ml Bulk Container', subCategory: 'Bottles', image: bottleImg, description: 'Robust 500ml HDPE container suitable for bulk storage and transport.' },
            { id: '45cc-28mm-292', name: '45cc 28mm 292', subCategory: 'Bottles', image: bottle45ccImg, description: 'Spacious 45cc translucent bottle with a 28mm neck for precise measurements.' },
            { id: '60cc-33mm-338', name: '60cc 33mm 338', subCategory: 'Bottles', image: bottle45ccImg, description: 'Larger-neck 60cc translucent bottle suitable for varying viscosities.' },
            { id: '50cc-33mm-337', name: '50cc 33mm 337', subCategory: 'Bottles', image: bottle45ccImg, description: 'Practical 50cc translucent bottle for general liquid storage.' },
        ]
    },
    caps: {
        title: 'Precision Caps',
        description: 'Secure sealing solutions including screw caps and measuring cups.',
        items: [
            { id: '28mm-screw-cap', name: '28mm Screw Cap', subCategory: 'Caps', image: capImg, description: 'Standard 28mm PP screw cap for secure bottle sealing.' },
            { id: 'measuring-cup-5-10ml', name: 'Measuring Cup 5ml-10ml', subCategory: 'Caps', image: capImg, description: 'Universal PP measuring cup with 5ml and 10ml markings.' },
            { id: '38mm-child-resistant-cap', name: '38mm Child Resistant', subCategory: 'Caps', image: capImg, description: 'Safety-focused 38mm child-resistant cap for medicine bottles.' },
        ]
    },
    closures: {
        title: 'Closures',
        description: 'Advanced closure systems including child-resistant and tamper-evident options.',
        items: [
            { id: '1', name: '28 mm CR closure with HS 130 liner', subCategory: 'CR Closures', image: crClosureHs130Img, description: 'Child-resistant closure with heat seal liner for secure sealing.' },
            { id: '2', name: '28mm-SP400 "M" style CR closure with liner', subCategory: 'CR Closures', image: sp400MStyleImg, description: '28mm SP400 closure featuring "M" style design with protective liner.' },
            { id: '3', name: '28 mm PP CR closure with liner HS035/25W', subCategory: 'CR Closures', image: ppCrHs035Img, description: 'Polypropylene CR closure with high-performance HS035 liner.' },
            { id: '4', name: '45 mm CR closure with liner HS035-0.025', subCategory: 'CR Closures', image: cr45mmHs035Img, description: 'Large 45mm child-resistant closure with precision liner.' },
            { id: '5', name: '45 mm CRC Closure – Aethon Plast', subCategory: 'CR Closures', image: cr45mmImg, description: 'Premium 45mm CRC closure manufactured by Aethon Plast.' },
            { id: '6', name: '28 mm CR Closure 400-ARG Assembly (with liner)', subCategory: 'CR Closures', image: cr400ArgImg, description: 'Complete 28mm CR closure assembly with 400-ARG finish.' },
            { id: '7', name: '33 mm Child Resistant Cap / Closure (Assembly)', subCategory: 'CR Closures', image: safCap33Img, description: '33mm child-resistant assembly for enhanced safety.' },
            { id: '8', name: '38 mm Child Resistant Cap / Closure (Assembly)', subCategory: 'CR Closures', image: safCap38AssyImg, description: 'Robust 38mm child-resistant cap assembly.' },
            { id: '9', name: '28 mm PP CR closure with liner TG II-TS', subCategory: 'CR Closures', image: ppCrHs035Img, description: '28mm PP closure with TG II-TS liner for specific applications.' },
            { id: '10', name: '38 mm PP CR closure (HS035 HeatSeal / 20)', subCategory: 'CR Closures', image: safCap38Img, description: 'Heat-sealable 38mm PP CR closure.' },

            { id: '11', name: '38 mm SAF Cap IIIA – Triveni Polymer', subCategory: 'SAF Caps', image: safCap38Img, description: '38mm SAF Cap IIIA designed for high reliability.' },
            { id: '12', name: '33 mm SAF Cap IIIA – Triveni Polymer', subCategory: 'SAF Caps', image: safCap33Img, description: '33mm SAF Cap IIIA offering superior sealing performance.' },

            { id: '13', name: '38 mm CT Closure – Pravesha Industries', subCategory: 'CT Closures', image: ctClosure38Img, description: 'Standard 38mm Continuous Thread (CT) closure.' },
            { id: '14', name: 'CT Closure 53 mm with liner (HS123-20)', subCategory: 'CT Closures', image: ctClosure53Img, description: 'Wide 53mm CT closure with HS123-20 liner.' },
            { id: '15', name: '38 mm PP CT closure (HS035 HeatSeal / 20)', subCategory: 'CT Closures', image: ppCtHeatsealImg, description: '38mm PP CT closure with heat seal capability.' },
            { id: '16', name: 'CT Closure 38 mm with liner – Aethon Plast', subCategory: 'CT Closures', image: ctClosure38LineImg, description: 'Quality 38mm CT closure with liner.' },


            { id: '17', name: 'Levodopa, Carbidopa & Entacapone Tablet Pack', subCategory: 'Pharmaceutical Packaging', image: levodopaImg, description: 'Specialized packaging for Levodopa/Carbidopa tablets.' },
            { id: '18', name: 'Calcium Acetate Capsules USP 667 mg Pack', subCategory: 'Pharmaceutical Packaging', image: caAcetateImg, description: 'Packaging solution for Calcium Acetate capsules.' },
            { id: '19', name: 'Fenoprofen Calcium Capsules USP 300 mg Pack', subCategory: 'Pharmaceutical Packaging', image: fenoprofenImg, description: 'Secure packaging for Fenoprofen Calcium capsules.' },
            { id: '20', name: 'Fenoprofen Calcium Capsules 310 mm × 600 mm', subCategory: 'Pharmaceutical Packaging', image: fenoprofenImg, description: 'Large format packaging for pharmaceutical use.' },


            { id: '21', name: 'Safevistop PP28 Tamper Evident CR Cap', subCategory: 'Tamper Evident CR Caps', image: safevistopImg, description: 'Tamper-evident PP28 cap for maximum security.' },


            { id: '22', name: '14 mm White cap with inner ring', subCategory: 'Specialty Caps', image: whiteCap14Img, description: 'Small 14mm white cap with inner sealing ring.' },
            { id: '23', name: 'White nasal cap with cover', subCategory: 'Specialty Caps', image: whiteCap14Img, description: 'Specialized white nasal cap with protective cover.' },


            { id: '24', name: 'Shampoo cap with top cover for 215 g', subCategory: 'Cosmetic Caps', image: closureImg, description: 'Cosmetic shampoo cap designed for 215g bottles.' },
        ]
    }
};

export const getAllProducts = () => {
    const allProducts = [];
    Object.values(productData).forEach(category => {
        allProducts.push(...category.items);
    });
    return allProducts;
};

const generateProductFeatures = (product) => {
    const features = [];
    const name = product.name.toLowerCase();
    const spec = product.spec || '';
    const material = product.material || '';
    const desc = product.description || '';


    features.push('Manufactured under strict quality control standards.');
    features.push('Consistent dimensions ensuring seamless compatibility.');


    if (product.subCategory === 'Bottles') {
        if (spec) features.push(`Spacious ${spec} design optimized for precise measurements and storage.`);
        features.push(`Durable translucent ${material || 'plastic'} material for product visibility and protection.`);
        if (name.includes('28mm')) features.push('28mm neck ensures compatibility with a range of dispensing systems.');
        if (name.includes('33mm')) features.push('33mm neck opening allows for easier filling and pouring.');
        features.push('Lightweight construction for easy handling and reduced shipping costs.');
        features.push('Suitable for liquid, dry, and powder storage in healthcare and labs.');
        features.push('Compact size allows for efficient stacking in bulk storage setups.');
        features.push('Resistant to moisture and impact for long-term durability.');
        features.push('Ideal for pharmaceutical syrups, tablets, and chemical storage.');
    } else if (product.subCategory === 'Caps' || product.subCategory === 'Specialty Caps') {
        if (spec) features.push(`Standard ${spec} fitment for industry-standard containers.`);
        features.push(`Made from high-grade ${material || 'polypropylene'} for chemical resistance.`);
        features.push('Precision-molded threads ensuring a leak-proof seal.');
        if (name.includes('child')) features.push('Child-resistant mechanism to prevent accidental opening.');
        if (name.includes('measuring')) features.push('Clear calibration markings for accurate dosage measurement.');
        features.push('Smooth finish for ergonomic handling and capping efficiency.');
    } else if (product.subCategory && product.subCategory.includes('Closure')) {

        if (name.includes('28')) features.push('Standard 28mm finish compatible with various bottle types.');
        if (name.includes('38')) features.push('38mm wide-mouth design for easy access products.');
        if (name.includes('cr') || name.includes('child')) {
            features.push('Certified Child-Resistant (CR) design for enhanced safety.');
            features.push('Push-and-turn mechanism prevents unauthorized access by children.');
        }
        if (name.includes('liner') || desc.includes('liner')) {
            features.push('Includes high-performance liner for superior induction sealing.');
            features.push('Hermetic seal preserves product freshness and extends shelf life.');
        }
        if (name.includes('saf')) features.push('SAF Cap design offers premium aesthetic and functional grip.');
        if (name.includes('tamper') || name.includes('evident')) features.push('Tamper-evident ring provides visible proof of first opening.');
        features.push('Engineered for high-speed capping lines and automated filling.');
        features.push('Robust construction prevents deformation under stacking load.');
    } else if (product.subCategory === 'Pharmaceutical Packaging') {
        features.push('Specialized packaging solution complying with pharmaceutical standards.');
        features.push('Barrier protection against light, moisture, and oxygen.');
        features.push('Designed for specific dosage forms like tablets and capsules.');
        features.push('High-purity material ensures no leaching or contamination.');
    }



    return features;
};

export const getProductById = (id) => {
    let foundProduct = null;
    let categoryInfo = null;

    Object.entries(productData).forEach(([catId, catData]) => {
        const product = catData.items.find(p => p.id === id);
        if (product) {
            foundProduct = product;
            categoryInfo = {
                categoryId: catId,
                categoryTitle: catData.title
            };
        }
    });

    if (foundProduct) {
        const productWithDetails = { ...foundProduct, ...categoryInfo };
        productWithDetails.features = generateProductFeatures(productWithDetails);
        return productWithDetails;
    }
    return null;
};
