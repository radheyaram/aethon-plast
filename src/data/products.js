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
const hdpe45ccImg = '/assets/hdpe_45cc_bottle.png';
const pet100mlImg = '/assets/pet_100ml_bottle.png';
const ophthalmic10mlImg = '/assets/ophthalmic_10ml_bottle.png';
const syrup60mlImg = '/assets/hdpe_60ml_syrup.png';
const tablet100ccImg = '/assets/hdpe_100cc_tablet.png';
const lotion200mlImg = '/assets/lotion_200ml_bottle.png';
const nasalCap18mmImg = '/assets/nasal_spray_cap_18mm.png';
const screwCap38mmImg = '/assets/pp_screw_cap_38mm.png';
const flipTop24mmImg = '/assets/flip_top_cap_24mm.png';
const tamperCap28mmImg = '/assets/tamper_evident_cap_28mm.png';

export const productData = {
    bottles: {
        title: 'Bottles',
        description: 'High-quality HDPE and PET bottles designed for stability and safety.',
        items: [
            {
                id: 'hdpe-45cc-bottle',
                name: 'HDPE 45cc Bottle',
                actualName: 'HDPE 45cc Bottle – 28mm Neck (292 Finish)',
                subCategory: 'HDPE Bottles',
                image: hdpe45ccImg,
                description: 'Spacious 45cc translucent HDPE bottle with a 28mm neck (292 Finish) for precise measurements.',
                segments: ['pharma'],
                features: [
                    'Precision-molded 28mm neck (292 Finish) ensures leak-proof sealing.',
                    'High-density polyethylene (HDPE) construction offers superior moisture barrier.',
                    'Compact 45cc capacity ideal for pharmaceutical samples or travel doses.',
                    'Translucent material allows for easy visual inspection of content levels.',
                    'Compatible with standard 28mm child-resistant and continuous thread caps.'
                ]
            },
            {
                id: 'pet-100ml-bottle',
                name: 'PET 100ml Bottle',
                actualName: 'PET 100ml Bottle – 38mm Neck',
                subCategory: 'PET Bottles',
                image: pet100mlImg,
                description: 'Lightweight transparent PET bottle with a 38mm neck, ideal for consumer and supplement packaging.',
                segments: ['fmcg'],
                features: [
                    'Crystal-clear PET material showcases product color and clarity.',
                    '38mm wide neck finish facilitates easy filling of tablets or viscous liquids.',
                    'Shatter-resistant construction safer than glass for consumer handling.',
                    '100ml volume perfect for nutritional supplements and personal care products.',
                    'FDA-compliant materials suitable for food and beverage contact.'
                ]
            },
            {
                id: 'ophthalmic-10ml-bottle',
                name: 'Ophthalmic 10ml Bottle',
                actualName: 'Ophthalmic 10ml Bottle with Dropper Tip',
                subCategory: 'Ophthalmic Bottles',
                image: ophthalmic10mlImg,
                description: 'Precision-molded 10ml bottle with dropper tip, designed for ophthalmic and nasal liquid formulations.',
                segments: ['pharma'],
                features: [
                    'Includes precision dropper tip for controlled dosage dispensing.',
                    'Soft squeeze action designed for elderly or dexterity-impaired users.',
                    '10ml capacity optimized for standard eye drop prescription volumes.',
                    'Gamma sterilization compatible for sterile pharmaceutical applications.',
                    'Tamper-evident ring compatibility for enhanced patient safety.'
                ]
            },
            {
                id: 'hdpe-60ml-syrup',
                name: 'HDPE 60ml Syrup Bottle',
                actualName: 'HDPE 60ml Syrup Bottle – 28mm Neck',
                subCategory: 'Syrup Bottles',
                image: syrup60mlImg,
                description: 'Durable HDPE bottle with 28mm neck for oral liquid pharmaceutical syrup packaging.',
                segments: ['pharma'],
                features: [
                    'Robust HDPE walls prevent paneling during vacuum filling processes.',
                    'Standard 28mm neck fits a wide variety of measuring cups and caps.',
                    'Opaque construction protects light-sensitive liquid medications.',
                    '60ml volume tailored for pediatric or short-course syrup treatments.',
                    'Chemically inert material suitable for a broad range of active ingredients.'
                ]
            },
            {
                id: 'hdpe-100cc-tablet',
                name: 'HDPE 100cc Tablet Bottle',
                actualName: 'HDPE 100cc Tablet Bottle – 38mm Neck',
                subCategory: 'Tablet Bottles',
                image: tablet100ccImg,
                description: 'Sturdy 100cc HDPE bottle with 38mm wide neck, suitable for tablets and capsules.',
                segments: ['nutra'],
                features: [
                    'Wide 38mm mouth enables high-speed filling of large tablets and capsules.',
                    '100cc volume accommodates standard 30-60 count supplement runs.',
                    'High impact resistance protects contents during shipping and handling.',
                    'Smooth surface area maximizes labeling efficiency and adhesion.',
                    'Designed to work seamlessly with induction heat seal liners.'
                ]
            },
            {
                id: '200ml-lotion-bottle',
                name: 'Soft-Touch Lotion Bottle',
                actualName: '200ml Soft-Touch Lotion Bottle',
                subCategory: 'Cosmetic Bottles',
                image: lotion200mlImg,
                description: 'Elegant 200ml bottle with soft-touch finish, perfect for premium lotions and creams.',
                segments: ['cosmetics'],
                features: [
                    'Premium soft-touch finish provides a luxurious tactile experience.',
                    'Ergonomic curved shape designed for comfortable one-handed use.',
                    '200ml capacity strikes balance between portability and value.',
                    'Compatible with aesthetic pump dispensers and disc-top caps.',
                    'High-quality molding minimizes parting lines for a clean look.'
                ]
            },
        ]
    },
    caps: {
        title: 'Precision Caps',
        description: 'Secure sealing solutions including screw caps and measuring cups.',
        items: [
            {
                id: 'nasal-spray-cap-18mm',
                name: 'Nasal Spray Cap',
                actualName: 'Nasal Spray Cap – 18mm',
                subCategory: 'Nasal Caps',
                image: nasalCap18mmImg,
                description: 'Precision-molded 18mm nasal cap designed for pharmaceutical spray applications.',
                segments: ['pharma'],
                features: [
                    'Fitment engineered for 18mm standard nasal pump systems.',
                    'Includes protective dust cover to maintain nozzle hygiene.',
                    'Smooth actuation channel ensures consistent spray mist pattern.',
                    'Medical-grade polypropylene construction supports cleanroom assembly.',
                    'Tight snap-fit closure prevents accidental dislodging during transport.'
                ]
            },
            {
                id: 'pp-screw-cap-38mm',
                name: 'PP Screw Cap',
                actualName: 'PP Screw Cap – 38mm',
                subCategory: 'Screw Caps',
                image: screwCap38mmImg,
                description: 'Durable 38mm polypropylene screw cap for supplement and vitamin bottles.',
                segments: ['nutra'],
                features: [
                    'Robust 38mm simplified screw thread for easy grip and twist.',
                    'Ribbed sidewalls enhance user torque application for tight sealing.',
                    'Compatible with induction heat seal liners for tamper evidence.',
                    'Durable PP material withstands repeated opening and closing.',
                    'Available in a variety of colors for brand differentiation.'
                ]
            },
            {
                id: 'flip-top-cap-24mm',
                name: 'Flip Top Cap',
                actualName: 'Flip Top Cap – 24mm',
                subCategory: 'Flip Top Caps',
                image: flipTop24mmImg,
                description: 'Easy-to-use 24mm flip top cap for cosmetic and personal care products.',
                segments: ['cosmetics'],
                features: [
                    'Convenient one-handed dispensing mechanism.',
                    'Audible "click" ensures the lid is securely closed to prevent leaks.',
                    '24mm neck finish fits standard shampoo and lotion tubes.',
                    'Smooth orifice designed to prevent clogging of viscous products.',
                    'Sleek aesthetic profile complements premium cosmetic packaging.'
                ]
            },
            {
                id: 'tamper-evident-cap-28mm',
                name: 'Tamper Evident Cap',
                actualName: 'Tamper Evident Cap – 28mm',
                subCategory: 'Tamper Evident Caps',
                image: tamperCap28mmImg,
                description: 'Secure 28mm tamper-evident cap for consumer goods and liquid packaging.',
                segments: ['fmcg'],
                features: [
                    'Break-away band gives immediate visible proof of first opening.',
                    '28mm standard thread fits a vast range of beverage and chemical bottles.',
                    'Leak-proof linerless seal design (bore seal) prevents spillage.',
                    'High torque retention prevents back-off during vibration or transit.',
                    'Recyclable single-material design supports sustainability goals.'
                ]
            },
        ]
    },
    closures: {
        title: 'Closures',
        description: 'Advanced closure systems including child-resistant and tamper-evident options.',
        items: [
            {
                id: '28mm-cr-closure-hs130',
                name: '28mm CR Closure',
                actualName: '28 mm CR closure with HS 130 liner',
                subCategory: 'CR Closures',
                image: crClosureHs130Img,
                description: 'Child-resistant closure with HS 130 heat seal liner for secure sealing.',
                segments: ['pharma'],
                features: [
                    'Certified Child-Resistant (CR) push-and-turn mechanism.',
                    'HS 130 induction liner provides strong, peelable seal on HDPE bottles.',
                    'Two-piece design with free-spinning outer shell prevents easy removal.',
                    'Meets CPSC and ISO safety standards for pharmaceutical packaging.',
                    'Excellent chemical resistance against aggressive pharmaceutical compounds.'
                ]
            },
            {
                id: '28mm-sp400-m-style',
                name: 'SP400 CR Closure',
                actualName: '28mm-SP400 "M" style CR closure with liner',
                subCategory: 'CR Closures',
                image: sp400MStyleImg,
                description: '28mm SP400 closure featuring "M" style design with protective liner.',
                segments: ['pharma'],
                features: [
                    '"M" Style fine-ribbed outer shell offers improved grip for adults.',
                    'Standard SP-400 finish ensures broad compatibility with glass and plastic bottles.',
                    'Integrated liner custom-selected for specific barrier requirements (moisture/oxygen).',
                    'Robust polypropylene construction withstands high-torque capping.',
                    'Visual indicators on top instruct users on proper opening method.'
                ]
            },
            {
                id: '28mm-pp-cr-closure-hs035',
                name: 'PP CR Closure',
                actualName: '28 mm PP CR closure with liner HS035/25W',
                subCategory: 'CR Closures',
                image: ppCrHs035Img,
                description: '28mm Polypropylene CR closure with high-performance HS035/25W liner.',
                segments: ['pharma'],
                features: [
                    'HS035 liner creates a welded bond for maximum tamper evidence.',
                    'Pulp backing provides reseal integrity after initial opening.',
                    '28mm heavy-wall design prevents "doming" or deformation.',
                    'Ideal for liquid pharmaceuticals requiring hermetic seals.',
                    'Smooth top surface suitable for branding or Warning text printing.'
                ]
            },
            {
                id: '45mm-cr-closure-hs035',
                name: '45mm CR Closure',
                actualName: '45 mm CR closure with liner HS035-0.025',
                subCategory: 'CR Closures',
                image: cr45mmHs035Img,
                description: 'Large 45mm child-resistant closure with precision HS035-0.025 liner.',
                segments: ['pharma'],
                features: [
                    'Wide 45mm diameter allows for easy dispensing of tablets and powders.',
                    'HS035-0.025 liner engineered for high-speed induction sealing lines.',
                    'Enhanced child-safety torque requirements for large-format bottles.',
                    'Textured sides prevent slippage during manual closing by patients.',
                    'FDA-approved materials used for both shell and liner components.'
                ]
            },
            {
                id: '45mm-crc-closure-aethon',
                name: '45mm CRC Closure',
                actualName: '45 mm CRC Closure – Aethon Plast',
                subCategory: 'CR Closures',
                image: cr45mmImg,
                description: 'Premium 45mm CRC closure manufactured by Aethon Plast.',
                segments: ['pharma'],
                features: [
                    'Proprietary Aethon Plast design for distinctive brand identity.',
                    'Optimized internal threads reduce cross-threading during capping.',
                    'Superior stress-crack resistance for long shelf-life products.',
                    'Dual-action opening mechanism effective against child access.',
                    'Compatible with standard 45mm neck finishes in both PET and HDPE.'
                ]
            },
            {
                id: '28mm-cr-closure-400-arg',
                name: '400-ARG CR Closure',
                actualName: '28 mm CR Closure 400-ARG Assembly (with liner)',
                subCategory: 'CR Closures',
                image: cr400ArgImg,
                description: 'Complete 28mm CR closure assembly with 400-ARG finish (includes liner).',
                segments: ['pharma'],
                features: [
                    '400-ARG finish designed specifically for strict pharmacopoeia compliance.',
                    'Pre-assembled liner system reduces manufacturing complexity.',
                    'High-contrast embossing options available for safety warnings.',
                    'Consistent removal torque for elder-friendly adult access.',
                    'Batch-tested for reliable child-resistant performance.'
                ]
            },
            {
                id: '33mm-child-resistant-cap',
                name: '33mm Child Resistant Closure',
                actualName: '33 mm Child Resistant Cap / Closure (Assembly)',
                subCategory: 'CR Closures',
                image: safCap33Img,
                description: '33mm child-resistant assembly for enhanced safety.',
                segments: ['pharma'],
                features: [
                    '33mm size bridges gap between standard liquid and tablet finishes.',
                    'Advanced ratchet system prevents back-off during shipping vibration.',
                    'Smooth outer shell for a clean, medical aesthetic.',
                    'Compatible with friction-fit or heat-induction liners.',
                    'Rigid inner cap ensures tight seal against bottle land.'
                ]
            },
            {
                id: '38mm-child-resistant-cap',
                name: '38mm Child Resistant Closure',
                actualName: '38 mm Child Resistant Cap / Closure (Assembly)',
                subCategory: 'CR Closures',
                image: safCap38AssyImg,
                description: 'Robust 38mm child-resistant cap assembly.',
                segments: ['pharma'],
                features: [
                    'Heavy-duty 38mm construction for bulk vitamin and supplement jars.',
                    'Double-shell assembly provides superior durability and impact resistance.',
                    'Deep thread engagement ensures closure stays secure if dropped.',
                    'Audible "click" feature confirms engagement of safety threads.',
                    'Designed for seamless integration with induction sealing equipment.'
                ]
            },
            {
                id: '28mm-pp-cr-closure-tg-ii-ts',
                name: 'PP CR Closure (TG II-TS)',
                actualName: '28 mm PP CR closure with liner TG II-TS',
                subCategory: 'CR Closures',
                image: ppCrHs035Img,
                description: '28mm PP closure with TG II-TS liner for specific applications.',
                segments: ['pharma'],
                features: [
                    'TG II-TS liner offers specific chemical resistance for aggressive solvents.',
                    'Top-Seal (TS) technology ensures clean peel without residue.',
                    'Ideal for specialized pharmaceutical formulations (e.g., strong syrups).',
                    'Precision injection molding ensures dimensional consistency.',
                    'Tamper-evident liner provides visible security for end-users.'
                ]
            },
            {
                id: '38mm-pp-cr-closure-hs035',
                name: '38mm PP CR Closure',
                actualName: '38 mm PP CR closure (HS035 HeatSeal / 20)',
                subCategory: 'CR Closures',
                image: safCap38Img,
                description: 'Heat-sealable 38mm PP CR closure (HS035 HeatSeal / 20).',
                segments: ['pharma'],
                features: [
                    'HS035 HeatSeal liner provides universal sealing on multiple plastic types.',
                    'Two-piece CR design keeps the liner intact during application.',
                    '38mm diameter optimized for nutraceutical powder filling.',
                    'Moisture-resistant seal protects hygroscopic products.',
                    'Ergonomic ribs on outer cap facilitate easy removal by adults.'
                ]
            },

            {
                id: '38mm-saf-cap-iiia-triveni',
                name: '38mm SAF Cap IIIA',
                actualName: '38 mm SAF Cap IIIA – Triveni Polymer',
                subCategory: 'SAF Caps',
                image: safCap38Img,
                description: '38mm SAF Cap IIIA designed for high reliability (Triveni Polymer).',
                segments: ['pharma'],
                features: [
                    'SAF IIIA design standard for established safety and functionality.',
                    '38mm profile suitable for widely used pharmaceutical packers.',
                    'Engineered by Triveni Polymer for consistent quality assurance.',
                    'Enhanced grip knurling for easy application and removal.',
                    'Compatible with standard 38mm induction seal liners.'
                ]
            },
            {
                id: '33mm-saf-cap-iiia-triveni',
                name: '33mm SAF Cap IIIA',
                actualName: '33 mm SAF Cap IIIA – Triveni Polymer',
                subCategory: 'SAF Caps',
                image: safCap33Img,
                description: '33mm SAF Cap IIIA offering superior sealing performance (Triveni Polymer).',
                segments: ['pharma'],
                features: [
                    'Compact 33mm SAF IIIA design for intermediate bottle sizes.',
                    'Precision sealing land ensures leak-free storage.',
                    'Durable polymer construction resists stress cracking.',
                    'Proven Triveni Polymer mold quality for high-output lines.',
                    'Cost-effective solution for bulk pharmaceutical packaging.'
                ]
            },
            {
                id: '38mm-ct-closure-pravesha',
                name: '38mm CT Closure',
                actualName: '38 mm CT Closure – Pravesha Industries',
                subCategory: 'CT Closures',
                image: ctClosure38Img,
                description: 'Standard 38mm Continuous Thread (CT) closure (Pravesha Industries).',
                segments: ['pharma'],
                features: [
                    'Continuous Thread (CT) design allows for simple, intuitive operation.',
                    '38mm finish widely compatible with stock jars and bottles.',
                    'Manufactured by Pravesha Industries to strict dimensional tolerances.',
                    'Ideal for non-regulated OTC products and supplements.',
                    'Plain top surface facilitates easy price marking or branding.'
                ]
            },
            {
                id: '53mm-ct-closure-hs123-20',
                name: '53mm CT Closure',
                actualName: 'CT Closure 53 mm with liner (HS123-20)',
                subCategory: 'CT Closures',
                image: ctClosure53Img,
                description: 'Wide 53mm CT closure with HS123-20 liner.',
                segments: ['fmcg'],
                features: [
                    'Extra-wide 53mm opening ideal for powders, protein mixes, and granules.',
                    'HS123-20 liner enables secure heat sealing on PE and PP containers.',
                    'Robust thread design prevents stripping even under high torque.',
                    'Matte finish options available to reduce scuffing during transit.',
                    'Food-grade materials compliant for nutritional and FMCG uses.'
                ]
            },
            {
                id: '38mm-pp-ct-closure-hs035',
                name: '38mm PP CT Closure',
                actualName: '38 mm PP CT closure (HS035 HeatSeal / 20)',
                subCategory: 'CT Closures',
                image: ppCtHeatsealImg,
                description: '38mm PP CT closure with heat seal capability (HS035 HeatSeal / 20).',
                segments: ['pharma'],
                features: [
                    'Polypropylene construction offers excellent fatigue resistance.',
                    'HS035 HeatSeal liner creates a tamper-evident hermetic barrier.',
                    '38mm standard thread compatible with SP-400 bottle finishes.',
                    'Designed for automated capping equipment with stable vertical stacking.',
                    'Resistant to moisture vapor transmission for sensitive dry products.'
                ]
            },
            {
                id: '38mm-ct-closure-aethon',
                name: '38mm CT Closure (Lined)',
                actualName: 'CT Closure 38 mm with liner – Aethon Plast',
                subCategory: 'CT Closures',
                image: ctClosure38LineImg,
                description: 'Quality 38mm CT closure with liner (Aethon Plast).',
                segments: ['fmcg'],
                features: [
                    'Aethon Plast quality assurance for reliable high-volume supply.',
                    'Pre-inserted liner ensures immediate readiness for production lines.',
                    '38mm CT design is the industry standard for bulk tablets and powders.',
                    'High-gloss finish options for premium shelf appeal.',
                    'Secure sealing performance protects against environmental contamination.'
                ]
            },


            {
                id: 'levodopa-carbidopa-entacapone-pack',
                name: 'Tablet Blister Packaging',
                actualName: 'Levodopa, Carbidopa & Entacapone Tablet Pack',
                subCategory: 'Pharmaceutical Packaging',
                image: levodopaImg,
                description: 'Specialized packaging for Levodopa/Carbidopa tablets.',
                segments: ['pharma'],
                features: [
                    'Custom cavity design for Levodopa/Carbidopa tablet protection.',
                    'High-barrier PVDC ensures stability of sensitive active ingredients.',
                    'Child-resistant backing foil options available for safety.',
                    'Print-ready surface for regulatory text and dosage instructions.',
                    'Compliance with moisture permeation standards for long-term storage.'
                ]
            },
            {
                id: 'calcium-acetate-capsules-pack',
                name: 'Capsule Packaging',
                actualName: 'Calcium Acetate Capsules USP 667 mg Pack',
                subCategory: 'Pharmaceutical Packaging',
                image: caAcetateImg,
                description: 'Packaging solution for Calcium Acetate capsules (USP 667 mg).',
                segments: ['nutra'],
                features: [
                    'Optimized geometry prevents crushing of 667mg Calcium Acetate capsules.',
                    'Protects hygroscopic capsules from ambient moisture ingress.',
                    'Patient-friendly push-through foil design.',
                    'Lightweight material limits shipping weight for bulk distribution.',
                    'USP standard compliant materials for direct drug contact.'
                ]
            },
            {
                id: 'fenoprofen-calcium-capsules-pack',
                name: 'Capsule Packaging',
                actualName: 'Fenoprofen Calcium Capsules USP 300 mg Pack',
                subCategory: 'Pharmaceutical Packaging',
                image: fenoprofenImg,
                description: 'Secure packaging for Fenoprofen Calcium capsules (USP 300 mg).',
                segments: ['nutra'],
                features: [
                    'Designed for secure containment of 300mg Fenoprofen Calcium doses.',
                    'Neutral material formulation prevents chemical interaction with the drug.',
                    'Compact blister layout maximizes carton efficiency.',
                    'Tamper-evident sealing assures patient of product integrity.',
                    'Easily customizable for varying pack sizes (e.g., 10s, 30s).'
                ]
            },
            {
                id: 'fenoprofen-calcium-capsules-large',
                name: 'Bulk Capsule Packaging',
                actualName: 'Fenoprofen Calcium Capsules 310 mm × 600 mm',
                subCategory: 'Pharmaceutical Packaging',
                image: fenoprofenImg,
                description: 'Large format packaging for pharmaceutical use (310mm × 600mm).',
                segments: ['nutra'],
                features: [
                    'Large format sheet (310mm × 600mm) for hospital or pharmacy bulk dispensing.',
                    'High-density layout maximizes capsules per square centimeter.',
                    'Compatible with automated de-blistering machines.',
                    'Superior stiffness protects capsules during bulk transport.',
                    'Transparent forming film for easy visual verification of contents.'
                ]
            },


            {
                id: 'safevistop-pp28-tamper-evident',
                name: 'Safevistop Tamper Evident Cap',
                actualName: 'Safevistop PP28 Tamper Evident CR Cap',
                subCategory: 'Tamper Evident CR Caps',
                image: safevistopImg,
                description: 'Tamper-evident PP28 cap for maximum security.',
                segments: ['pharma'],
                features: [
                    'Dual-functionality: Child-Resistant + Tamper-Evident protection.',
                    'Safevistop mechanism creates visible separation ring upon opening.',
                    'PP28 standard finish for broad European and International compatibility.',
                    'High fluid-tightness even without additional induction liners.',
                    'Distinctive audible visual indication of initial breach.'
                ]
            },


            {
                id: '14mm-white-cap-inner-ring',
                name: '14mm Specialty Cap',
                actualName: '14 mm White cap with inner ring',
                subCategory: 'Specialty Caps',
                image: whiteCap14Img,
                description: 'Small 14mm white cap with inner sealing ring.',
                segments: ['fmcg'],
                features: [
                    'Micro-precision 14mm size for vials and small dropper bottles.',
                    'Integrated inner ring eliminates need for separate liner.',
                    'Provides absolute seal integrity for low-viscosity volatiles.',
                    'Minimalist white design ideal for clean aesthetic branding.',
                    'Rapid application torque requirements for high-speed assembly.'
                ]
            },
            {
                id: 'white-nasal-cap-cover',
                name: 'Nasal Cap with Cover',
                actualName: 'White nasal cap with cover',
                subCategory: 'Specialty Caps',
                image: whiteCap14Img,
                description: 'Specialized white nasal cap with protective cover.',
                segments: ['pharma'],
                features: [
                    'Complete assembly includes actuator cap and protective over-cap.',
                    'Maintains sterility of the nasal applicator tip between uses.',
                    'Smooth surface finish prevents accumulation of dust or debris.',
                    'Ergonomic wings/ribs for easy actuation by patient.',
                    'Designed for snap-on fit to standard nasal spray bottles.'
                ]
            },


            {
                id: 'shampoo-cap-215g',
                name: 'Flip Top Shampoo Cap',
                actualName: 'Shampoo cap with top cover for 215 g',
                subCategory: 'Cosmetic Caps',
                image: closureImg,
                description: 'Cosmetic shampoo cap designed for 215g bottles.',
                segments: ['cosmetics'],
                features: [
                    'Engineered to match the center of gravity for 215g bottles.',
                    'Wide flip-top lid allows for upside-down storage (tottle-ready).',
                    'Drip-free silicon valve option available for clean dispensing.',
                    'High-gloss finish resistant to bathroom humidity and soaps.',
                    'Durable hinge withstands hundreds of open-close cycles.'
                ]
            },
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

        if (!productWithDetails.features) {
            productWithDetails.features = generateProductFeatures(productWithDetails);
        }
        return productWithDetails;
    }
    return null;
};
