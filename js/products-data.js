'use strict';

/* =============================================
   PRODUCTS-DATA.JS — Aurevia E-Commerce
   Shared product catalogue used by product.html,
   category pages, and related products carousel.
   ============================================= */

const AUREVIA_PRODUCTS = [

  /* ─── CLOTHING ─────────────────────────────── */
  {
    id: 'dress-001',
    name: 'Denim Corset Asymmetrical Dress',
    category: 'clothing',
    subcategory: 'dresses',
    brand: 'Aurevia',
    price: 1250.00,
    originalPrice: 3000.00,
    discount: 20,
    rating: 4.2,
    reviewCount: 42,
    colors: [
      { name: 'Brown',  hex: '#3B3030' },
      { name: 'Warm Brown',  hex: '#795757' },
      { name: 'Cream',  hex: '#E8D9B8' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 5, S: 12, M: 8, L: 3, XL: 0 },
    images: [
      'images/cloths/Dresses/dress1.jpeg',
      'images/cloths/Dresses/dress2.jpeg',
      'images/cloths/Dresses/dress3.jpeg',
      'images/cloths/Dresses/dress4.jpeg',
      'images/cloths/Dresses/dress5.jpeg'
    ],
    description: 'A beautifully crafted summer dress that seamlessly blends elegance with comfort. Made from 100% organic cotton, this midi-length piece features a graceful silhouette that flatters every body type. The hidden zipper closure and v-neck design add subtle sophistication to your everyday wardrobe.',
    keyFeatures: [
      'Premium 100% organic cotton for lasting comfort',
      'Elegant midi length flattering all body types',
      'Concealed zipper for a clean, polished finish',
      'Versatile design — from brunch to evening events',
      'Available in four sophisticated colourways'
    ],
    stylingTips: 'Pair with leather sandals and a structured tote for daytime effortlessness. Layer with a fine-knit cardigan for cooler evenings.',
    details: {
      'Material':           '100% Organic Cotton',
      'Fit':                'Regular Fit',
      'Length':             'Midi (45″)',
      'Closure':            'Hidden Zipper',
      'Neckline':           'V-Neck',
      'Sleeve Length':      'Short Sleeve',
      'Care Instructions':  'Machine wash cold, tumble dry low'
    },
    measurements: {
      'Bust (Size M)':   '36 inches (91 cm)',
      'Waist (Size M)':  '28 inches (71 cm)',
      'Length (Size M)': '45 inches (114 cm)'
    },
    shipping: {
      standard: { days: '5–7 business days', price: 'Free on orders over ₹50' },
      express:  { days: '2–3 business days', price: '₹12.99'  },
      nextDay:  { days: '1 business day',    price: '₹24.99'  }
    },
    reviews: [
      { author: 'Sarah M.', verified: true, rating: 5, date: '2 days ago',    text: 'Absolutely love this dress! The quality is amazing and it fits perfectly. The colour is exactly as shown in the pictures. Highly recommend!',             size: 'M', color: 'Brown', helpful: 12 },
      { author: 'Jessica K.', verified: true, rating: 4, date: '1 week ago',  text: 'Great product, runs slightly large so I\'d recommend sizing down. The fabric is luxurious and the colour is beautiful.',                                     size: 'S', color: 'Cream', helpful: 8 },
      { author: 'Priya M.',   verified: true, rating: 5, date: '2 weeks ago', text: 'This dress exceeded my expectations. The stitching is flawless and the organic cotton feels so gentle on the skin. Will definitely be ordering more.',        size: 'M', color: 'Brown', helpful: 15 }
    ],
    badge: 'sale',
    isNew: false,
    isBestseller: true,
    customization: {
      available: true,
      options: [
        { type: 'embroidery', name: 'Personalized Embroidery', description: 'Add initials or name (up to 10 characters)', price: 15 },
        { type: 'length', name: 'Custom Length', description: 'Adjust dress length to your preference', price: 25 },
        { type: 'sleeves', name: 'Sleeve Modification', description: 'Change sleeve length or style', price: 20 }
      ]
    }
  },

  {
    id: 'dress-002',
    name: 'Midnight Stardust Embellished Dress',
    category: 'clothing',
    subcategory: 'dresses',
    brand: 'Aurevia',
    price: 2500.00,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviewCount: 31,
    colors: [
      { name: 'Deep Brown', hex: '#664343' },
      { name: 'Cream',      hex: '#E8D9B8' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 3, S: 7, M: 10, L: 6, XL: 2 },
    images: [
      'images/cloths/Dresses/dress1.jpeg',
      'images/cloths/Dresses/dress2.jpeg',
      'images/cloths/Dresses/dress3.jpeg'
    ],
    description: 'Crafted from the finest silk-blend fabric, our Silk Wrap Dress drapes beautifully over the body, offering an adjustable, universally flattering silhouette. A timeless investment piece that transitions effortlessly from day to evening.',
    keyFeatures: [
      'Premium silk-blend fabric with natural sheen',
      'Adjustable wrap tie for a personalised fit',
      'Bias-cut design that flatters all figures',
      'Versatile styling from day through evening',
      'Dry-clean for lasting luxury'
    ],
    stylingTips: 'Wear with block-heeled mules and drop earrings for understated glamour.',
    details: {
      'Material':          '70% Silk, 30% Polyester',
      'Fit':               'Wrap, Adjustable',
      'Length':            'Midi',
      'Closure':           'Tie Belt',
      'Neckline':          'V-Neck Wrap',
      'Sleeve Length':     'Long Sleeve',
      'Care Instructions': 'Dry clean only'
    },
    measurements: {
      'Length (Size M)': '44 inches (112 cm)'
    },
    shipping: {
      standard: { days: '5–7 business days', price: 'Free on orders over ₹50' },
      express:  { days: '2–3 business days', price: '₹12.99' },
      nextDay:  { days: '1 business day',    price: '₹24.99' }
    },
    reviews: [
      { author: 'Emma T.',  verified: true, rating: 5, date: '3 days ago',  text: 'This is genuinely the most beautiful dress I have ever owned. The silk drapes like a dream.',   size: 'M', color: 'Deep Brown', helpful: 20 },
      { author: 'Lena K.',  verified: true, rating: 4, date: '5 days ago',  text: 'Stunning piece. Fits perfectly and the colour is even richer in person.',                        size: 'S', color: 'Cream',      helpful: 9 }
    ],
    badge: 'new',
    isNew: true,
    isBestseller: false,
    customization: {
      available: true,
      options: [
        { type: 'embroidery', name: 'Personalized Embroidery', description: 'Add initials or name (up to 10 characters)', price: 15 },
        { type: 'length', name: 'Custom Length', description: 'Adjust dress length to your preference', price: 25 }
      ]
    }
  },

  {
    id: 'top-001',
    name: 'Noir Back Butterfly Tee',
    category: 'clothing',
    subcategory: 'tops',
    brand: 'Aurevia',
    price: 1100.00,
    originalPrice: null,
    discount: 0,
    rating: 4.5,
    reviewCount: 27,
    colors: [
      { name: 'Natural', hex: '#FFF8E7' },
      { name: 'Warm Brown', hex: '#795757' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 8, S: 15, M: 12, L: 9, XL: 4 },
    images: [
      'images/cloths/Tops & T-shirts/dress1.jpeg',
      'images/cloths/Tops & T-shirts/dress2.jpeg',
      'images/cloths/Tops & T-shirts/dress3.jpeg'
    ],
    description: 'A relaxed linen blouse with effortless style. Breathable, lightweight, and naturally textured, this blouse pairs beautifully with both casual and smart-casual looks.',
    keyFeatures: [
      '100% European linen, naturally breathable',
      'Relaxed silhouette for all-day comfort',
      'Button-front with subtle collar detail',
      'Easy-care fabric that improves with washing'
    ],
    stylingTips: 'Tuck into tailored trousers or let it hang loose over straight-leg jeans.',
    details: {
      'Material':          '100% European Linen',
      'Fit':               'Relaxed',
      'Closure':           'Button-Front',
      'Sleeve Length':     'Long Sleeve (rollable)',
      'Care Instructions': 'Machine wash at 30°C'
    },
    measurements: { 'Chest (Size M)': '40 inches (102 cm)' },
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [
      { author: 'Anya R.', verified: true, rating: 5, date: '1 week ago', text: 'Perfect summer blouse. Breathable and elegant.', size: 'M', color: 'Natural', helpful: 7 }
    ],
    badge: null,
    isNew: false,
    isBestseller: false,
    customization: {
      available: true,
      options: [
        { type: 'embroidery', name: 'Personalized Embroidery', description: 'Add initials or name (up to 10 characters)', price: 15 },
        { type: 'monogram', name: 'Monogram Patch', description: 'Custom embroidered patch on chest or sleeve', price: 12 }
      ]
    }
  },

  {
    id: 'trousers-001',
    name: 'Floral Vine Flare Denim Jeans',
    category: 'clothing',
    subcategory: 'bottoms',
    brand: 'Aurevia',
    price: 1200.00,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    reviewCount: 19,
    colors: [
      { name: 'Charcoal', hex: '#3B3030' },
      { name: 'Deep Brown', hex: '#664343' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 4, S: 10, M: 14, L: 8, XL: 3 },
    images: [
      'images/cloths/Bottoms/derss1.jpeg',
      'images/cloths/Bottoms/dress2.jpeg',
      'images/cloths/Bottoms/dress3.jpeg'
    ],
    description: 'Classic tailored trousers with a refined, modern cut. Crafted from a premium viscose blend that drapes elegantly and resists creasing throughout the day.',
    keyFeatures: [
      'Premium viscose blend for fluid drape',
      'Structured waistband with concealed zip',
      'Straight-leg cut — eternally sophisticated',
      'Crease-resistant fabrication'
    ],
    stylingTips: 'Pair with the Linen Blouse or Silk Camisole for a complete, polished look.',
    details: { 'Material': '65% Viscose, 35% Polyester', 'Fit': 'Tailored Straight', 'Closure': 'Concealed Zip + Hook', 'Rise': 'High Waist', 'Care Instructions': 'Dry clean recommended' },
    measurements: { 'Waist (Size M)': '28 inches (71 cm)', 'Inseam (Size M)': '30 inches (76 cm)' },
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [
      { author: 'Olivia P.', verified: true, rating: 5, date: '4 days ago', text: 'These trousers are incredible. The fit is flawless and the fabric barely wrinkles.', size: 'M', color: 'Charcoal', helpful: 11 }
    ],
    badge: 'new',
    isNew: true,
    isBestseller: false,
    customization: {
      available: true,
      options: [
        { type: 'embroidery', name: 'Personalized Embroidery', description: 'Add initials or name on waistband', price: 10 },
        { type: 'length', name: 'Custom Inseam', description: 'Adjust trouser length to your height', price: 15 }
      ]
    }
  },

  {
    id: 'hoodie-001',
    name: 'Midnight Star Cut-Out Hoodie',
    category: 'clothing',
    subcategory: 'sweatshirts',
    brand: 'Aurevia',
    price: 1250.00,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviewCount: 54,
    colors: [
      { name: 'Cream', hex: '#E8D9B8' },
      { name: 'Charcoal', hex: '#3B3030' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 6, S: 9, M: 14, L: 11, XL: 5 },
    images: [
      'images/cloths/Hoodies and Sweatshirts/dress1.jpeg',
      'images/cloths/Hoodies and Sweatshirts/dress2.jpeg',
      'images/cloths/Hoodies and Sweatshirts/dress3.jpeg'
    ],
    description: 'Luxuriously soft cashmere-blend hoodie for effortless warmth and style. An elevated essential that belongs in every considered wardrobe.',
    keyFeatures: [
      '80% Cashmere, 20% Wool — cloud-soft warmth',
      'Relaxed "easy" fit with kangaroo pocket',
      'Subtle ribbed cuffs and hem for structure',
      'Double-layered hood for extra comfort'
    ],
    stylingTips: 'Wear with Tailored Trousers for a chic athleisure look, or layer over a dress for a casual-luxe feel.',
    details: { 'Material': '80% Cashmere, 20% Wool', 'Fit': 'Relaxed', 'Closure': 'Pullover', 'Pocket': 'Kangaroo', 'Care Instructions': 'Hand wash cold, lay flat to dry' },
    measurements: { 'Chest (Size M)': '42 inches (107 cm)', 'Length (Size M)': '26 inches (66 cm)' },
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [
      { author: 'Claire S.', verified: true, rating: 5, date: '1 week ago', text: 'Absolutely the softest thing I have ever worn. Worth every penny.', size: 'M', color: 'Cream', helpful: 22 },
      { author: 'Naomi T.',  verified: true, rating: 5, date: '2 weeks ago', text: 'Exceptional quality. The cashmere is genuine and the construction is faultless.', size: 'S', color: 'Charcoal', helpful: 18 }
    ],
    badge: null,
    isNew: false,
    isBestseller: true,
    customization: {
      available: true,
      options: [
        { type: 'embroidery', name: 'Personalized Embroidery', description: 'Add initials or name', price: 12 },
        { type: 'patches', name: 'Custom Patches', description: 'Add decorative patches', price: 8 }
      ]
    }
  },

  /* ─── BAGS ──────────────────────────────────── */
  {
    id: 'bag-001',
    name: 'Regal Emerald Clutch',
    category: 'bags',
    subcategory: 'clutch',
    brand: 'Aurevia',
    price: 1800.00,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviewCount: 67,
    colors: [
      { name: 'Emerald',   hex: '#3B3030' }
    ],
    sizes: null,
    stock: { Tan: 15, Black: 20, Brown: 8 },
    images: [
      'images/bags/tote bags/tote1.jpeg',
      'images/bags/tote bags/tote2.jpeg',
      'images/bags/tote bags/tote3.jpeg',
      'images/bags/tote bags/tote4.jpeg',
      'images/bags/tote bags/tote5.jpeg'
    ],
    description: 'A spacious and elegant full-grain leather tote designed for the modern woman. Handcrafted with meticulous attention to detail, this bag will only improve in beauty with age — developing a rich patina that makes each piece uniquely yours.',
    keyFeatures: [
      'Full-grain vegetable-tanned leather',
      'Hand-stitched reinforced handles',
      '3 interior pockets + 1 exterior zip pocket',
      'Magnetic snap closure for security',
      'Fits a 13″ laptop with ease'
    ],
    stylingTips: 'A true workhorse bag — equally at home at the office and the farmers\' market.',
    details: { 'Material': 'Full-Grain Vegetable-Tanned Leather', 'Dimensions': '14″ × 16″ × 6″', 'Pockets': '3 interior, 1 exterior zip', 'Closure': 'Magnetic Snap', 'Strap': 'Fixed Double Handle (10″ drop)', 'Lining': 'Cotton Canvas', 'Hardware': 'Brushed Gold' },
    measurements: {},
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [
      { author: 'Mei L.',    verified: true, rating: 5, date: '3 days ago', text: 'This bag is an heirloom. The leather is remarkable and the construction is perfect.', color: 'Tan', helpful: 30 },
      { author: 'Sandra O.', verified: true, rating: 5, date: '1 week ago', text: 'Bought in Black — it is the most beautiful bag I own. Incredibly spacious.', color: 'Black', helpful: 24 }
    ],
    badge: 'bestseller',
    isNew: false,
    isBestseller: true,
    customization: {
      available: true,
      options: [
        { type: 'embossing', name: 'Leather Embossing', description: 'Add initials or name (up to 5 characters)', price: 25 },
        { type: 'strap', name: 'Custom Strap Length', description: 'Adjust strap drop to your preference', price: 15 },
        { type: 'lining', name: 'Custom Lining Color', description: 'Choose from premium lining options', price: 35 }
      ]
    }
  },

  {
    id: 'bag-002',
    name: 'Button Heart Canvas Tote Bag',
    category: 'bags',
    subcategory: 'tote',
    brand: 'Aurevia',
    price: 500.00,
    originalPrice: null,
    discount: 0,
    rating: 4.5,
    reviewCount: 38,
    colors: [
      { name: 'Canvas', hex: '#8B5E3C' }
    ],
    sizes: null,
    stock: { Cognac: 10, Black: 18 },
    images: [
      'images/bags/sling bags/sling1.jpeg',
      'images/bags/sling bags/sling2.jpeg',
      'images/bags/sling bags/sling3.jpeg',
      'images/bags/sling bags/sling4.jpeg'
    ],
    description: 'A refined mini crossbody bag in supple pebbled leather. Compact yet remarkably functional, with an adjustable strap that takes you effortlessly from day to evening.',
    keyFeatures: [
      'Supple pebbled leather exterior',
      'Adjustable and detachable shoulder strap',
      'Interior card slots and zip compartment',
      'Turn-lock closure in brushed gold'
    ],
    stylingTips: 'The perfect companion for evenings out — holds your essentials without compromise.',
    details: { 'Material': 'Pebbled Italian Leather', 'Dimensions': '8″ × 6″ × 2.5″', 'Closure': 'Turn-Lock', 'Strap Drop': 'Adjustable 20″–24″', 'Lining': 'Suede', 'Hardware': 'Brushed Gold' },
    measurements: {},
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [
      { author: 'Fatima H.', verified: true, rating: 5, date: '5 days ago', text: 'Perfect size, beautiful leather. The cognac colour is stunning in person.', color: 'Cognac', helpful: 14 }
    ],
    badge: 'sale',
    isNew: false,
    isBestseller: false,
    customization: {
      available: true,
      options: [
        { type: 'embossing', name: 'Leather Embossing', description: 'Add initials or name (up to 5 characters)', price: 20 },
        { type: 'strap', name: 'Custom Strap Length', description: 'Adjust strap to your preference', price: 10 },
        { type: 'charm', name: 'Bag Charm', description: 'Add a matching leather charm', price: 18 }
      ]
    }
  },

  {
    id: 'bag-003',
    name: 'Pearl Cascade Clutch',
    category: 'bags',
    subcategory: 'clutch',
    brand: 'Aurevia',
    price: 1000.00,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviewCount: 29,
    colors: [
      { name: 'Pearl', hex: '#D4AF37' }
    ],
    sizes: null,
    stock: { Gold: 8, Black: 15, Navy: 6 },
    images: [
      'images/bags/clutch bags/clutch3.jpeg'
    ],
    description: 'A sophisticated evening clutch with metallic accents. The perfect accessory for formal occasions, featuring a sleek silhouette and secure magnetic closure.',
    keyFeatures: [
      'Metallic textured exterior',
      'Compact interior with card slots',
      'Magnetic snap closure',
      'Detachable chain strap'
    ],
    stylingTips: 'Pairs beautifully with evening gowns and cocktail dresses.',
    details: { 'Material': 'Metallic Faux Leather', 'Dimensions': '10″ × 6″ × 2″', 'Closure': 'Magnetic Snap', 'Strap': 'Detachable Chain 48″', 'Lining': 'Satin', 'Hardware': 'Gold Tone' },
    measurements: {},
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: 'new',
    isNew: true,
    isBestseller: false,
    customization: {
      available: true,
      options: [
        { type: 'embossing', name: 'Leather Embossing', description: 'Add initials (up to 3 characters)', price: 15 }
      ]
    }
  },

  {
    id: 'bag-004',
    name: 'Antique Blossom Clutch',
    category: 'bags',
    subcategory: 'clutch',
    brand: 'Aurevia',
    price: 1000.00,
    originalPrice: 9954.00,
    discount: 20,
    rating: 4.6,
    reviewCount: 22,
    colors: [
      { name: 'Blush', hex: '#F5E6E8' },
      { name: 'Black', hex: '#1a1a1a' }
    ],
    sizes: null,
    stock: { Blush: 12, Black: 18 },
    images: [
      'images/bags/clutch bags/clutch4.jpeg'
    ],
    description: 'A chic quilted mini bag with gold-tone hardware. The diamond-quilted pattern adds timeless elegance to this versatile piece.',
    keyFeatures: [
      'Diamond quilted pattern',
      'Gold-tone chain strap',
      'Multiple interior compartments',
      'Turn-lock closure'
    ],
    stylingTips: 'Perfect for both daytime and evening wear.',
    details: { 'Material': 'Quilted Vegan Leather', 'Dimensions': '9″ × 6″ × 3″', 'Closure': 'Turn-Lock', 'Strap': 'Chain 22″–48″', 'Lining': 'Polyester', 'Hardware': 'Gold Tone' },
    measurements: {},
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: 'sale',
    isNew: false,
    isBestseller: false,
    customization: {
      available: true,
      options: [
        { type: 'embossing', name: 'Leather Embossing', description: 'Add initials', price: 15 },
        { type: 'strap', name: 'Chain Length', description: 'Adjust chain length', price: 10 }
      ]
    }
  },

  {
    id: 'bag-005',
    name: 'Ivory Blossom Brocade Clutch',
    category: 'bags',
    subcategory: 'clutch',
    brand: 'Aurevia',
    price: 1200.00,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviewCount: 18,
    colors: [
      { name: 'Ivory', hex: '#FFFFF0' }
    ],
    sizes: null,
    stock: { Multi: 6 },
    images: [
      'images/bags/clutch bags/clutch5.jpeg'
    ],
    description: 'An artisanal beaded clutch featuring intricate hand-stitched patterns. A statement piece that elevates any evening ensemble.',
    keyFeatures: [
      'Hand-beaded exterior',
      'One-of-a-kind artisanal design',
      'Soft satin lining',
      'Snap closure with hidden magnet'
    ],
    stylingTips: 'Let this clutch be the star — pair with understated jewelry.',
    details: { 'Material': 'Hand-beaded with Satin Lining', 'Dimensions': '11″ × 7″ × 2″', 'Closure': 'Magnetic Snap', 'Strap': 'None', 'Lining': 'Satin', 'Hardware': 'Hidden Magnet' },
    measurements: {},
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: 'bestseller',
    isNew: false,
    isBestseller: true,
    customization: { available: false, options: [] }
  },

  {
    id: 'bag-006',
    name: 'Pearl Handle Clutch',
    category: 'bags',
    subcategory: 'clutch',
    brand: 'Aurevia',
    price: 9130.00,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviewCount: 24,
    colors: [
      { name: 'Ivory', hex: '#FFFFF0' },
      { name: 'Sage', hex: '#9CAF88' }
    ],
    sizes: null,
    stock: { Ivory: 9, Sage: 7 },
    images: [
      'images/bags/clutch bags/clutch2.jpeg'
    ],
    description: 'A romantic clutch with an elegant pearl handle. The structured design and lustrous finish make it perfect for weddings and special occasions.',
    keyFeatures: [
      'Elegant pearl handle',
      'Structured box design',
      'Satin interior with mirror',
      'Secure clasp closure'
    ],
    stylingTips: 'The perfect accessory for weddings and garden parties.',
    details: { 'Material': 'Faux Leather with Pearl Handle', 'Dimensions': '8″ × 5″ × 3″', 'Closure': 'Clasp', 'Strap': 'Pearl Handle 5″', 'Lining': 'Satin with Mirror', 'Hardware': 'Gold Tone' },
    measurements: {},
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: 'new',
    isNew: true,
    isBestseller: false,
    customization: { available: false, options: [] }
  },

  {
    id: 'bag-007',
    name: 'Starry Night Laptop Bag',
    category: 'bags',
    subcategory: 'laptop',
    brand: 'Aurevia',
    price: 700.00,
    originalPrice: 2000.00,
    discount: 12,
    rating: 4.7,
    reviewCount: 42,
    colors: [
      { name: 'Navy', hex: '#2c3e50' },
      { name: 'Black', hex: '#1a1a1a' }
    ],
    sizes: null,
    stock: { Tan: 10, Black: 14 },
    images: [
      'images/bags/laptop bags/laptop1.jpeg'
    ],
    description: 'A professional leather briefcase designed for the modern executive. Fits up to 15" laptops with dedicated padding and organization compartments.',
    keyFeatures: [
      'Full-grain leather construction',
      'Padded 15" laptop compartment',
      'Multiple organizational pockets',
      'Detachable shoulder strap',
      'TSA-friendly design'
    ],
    stylingTips: 'The perfect companion for business travel and daily commutes.',
    details: { 'Material': 'Full-Grain Leather', 'Dimensions': '16″ × 12″ × 4″', 'Closure': 'Zipper + Buckle', 'Strap': 'Detachable Shoulder Strap 48″', 'Lining': 'Nylon', 'Hardware': 'Brushed Silver' },
    measurements: {},
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: 'sale',
    isNew: false,
    isBestseller: false,
    customization: {
      available: true,
      options: [
        { type: 'embossing', name: 'Leather Embossing', description: 'Add initials on front pocket', price: 25 },
        { type: 'monogram', name: 'Interior Monogram', description: 'Personalized interior tag', price: 15 }
      ]
    }
  },

  {
    id: 'bag-008',
    name: 'Serene Floret Laptop Bag',
    category: 'bags',
    subcategory: 'laptop',
    brand: 'Aurevia',
    price: 1000.00,
    originalPrice: null,
    discount: 0,
    rating: 4.5,
    reviewCount: 31,
    colors: [
      { name: 'Charcoal', hex: '#3B3030' },
      { name: 'Navy', hex: '#2c3e50' }
    ],
    sizes: null,
    stock: { Charcoal: 8, Navy: 10 },
    images: [
      'images/bags/laptop bags/laptop2.jpeg'
    ],
    description: 'A rolling laptop bag with premium features for the frequent traveler. Smooth-rolling wheels and a telescopic handle make airport navigation effortless.',
    keyFeatures: [
      'Smooth dual-wheel system',
      'Telescopic handle with multiple stops',
      'Padded 17" laptop compartment',
      'Quick-access front pocket',
      'Durable ballistic nylon'
    ],
    stylingTips: 'Essential for business travelers who value both style and function.',
    details: { 'Material': 'Ballistic Nylon', 'Dimensions': '18″ × 14″ × 9″', 'Closure': 'Zipper', 'Strap': 'Telescopic Handle + Top Carry', 'Lining': 'Padded Nylon', 'Hardware': 'Gunmetal' },
    measurements: {},
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: null,
    isNew: false,
    isBestseller: false,
    customization: { available: false, options: [] }
  },

  {
    id: 'bag-009',
    name: 'Ivory Quilted Laptop Bag',
    category: 'bags',
    subcategory: 'laptop',
    brand: 'Aurevia',
    price: 950.00,
    originalPrice: 3000.00,
    discount: 12,
    rating: 4.8,
    reviewCount: 53,
    colors: [
      { name: 'Ivory', hex: '#FFFFF0' },
      { name: 'Black', hex: '#1a1a1a' }
    ],
    sizes: null,
    stock: { Brown: 15, Black: 20 },
    images: [
      'images/bags/laptop bags/laptop3.jpeg'
    ],
    description: 'A versatile bag that converts from briefcase to backpack in seconds. Perfect for commuters who need flexibility throughout their day.',
    keyFeatures: [
      '2-in-1 convertible design',
      'Hidden backpack straps',
      'Padded 16" laptop sleeve',
      'RFID-blocking pocket',
      'Water-resistant coating'
    ],
    stylingTips: 'Switch from professional meetings to casual commuting effortlessly.',
    details: { 'Material': 'Water-Resistant Canvas', 'Dimensions': '17″ × 12″ × 5″', 'Closure': 'Zipper', 'Strap': 'Convertible Handle + Backpack Straps', 'Lining': 'Padded Polyester', 'Hardware': 'Matte Black' },
    measurements: {},
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: 'bestseller',
    isNew: false,
    isBestseller: true,
    customization: {
      available: true,
      options: [
        { type: 'embossing', name: 'Leather Tag', description: 'Custom leather luggage tag', price: 20 }
      ]
    }
  },

  {
    id: 'bag-010',
    name: 'Heritage Patchwork Embroidered Sling Bag',
    category: 'bags',
    subcategory: 'sling',
    brand: 'Aurevia',
    price: 1500.00,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    reviewCount: 37,
    colors: [
      { name: 'Multi', hex: '#D4A77D' },
      { name: 'Black', hex: '#1a1a1a' }
    ],
    sizes: null,
    stock: { Natural: 18, Black: 22 },
    images: [
      'images/bags/sling bags/sling3.jpeg'
    ],
    description: 'A stylish woven bucket bag with a drawstring closure. The bohemian-inspired design features artisanal weaving and premium leather accents.',
    keyFeatures: [
      'Hand-woven straw body',
      'Genuine leather base and trim',
      'Drawstring closure with tassel',
      'Adjustable leather shoulder strap',
      'Cotton canvas lining'
    ],
    stylingTips: 'Perfect for summer outings and beach days.',
    details: { 'Material': 'Woven Straw + Leather Trim', 'Dimensions': '10″ × 10″ × 7″', 'Closure': 'Drawstring', 'Strap': 'Adjustable Leather 20″–26″', 'Lining': 'Cotton Canvas', 'Hardware': 'Antique Brass' },
    measurements: {},
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: 'new',
    isNew: true,
    isBestseller: false,
    customization: { available: false, options: [] }
  },

  {
    id: 'bag-011',
    name: 'Shringaar Tote Bag',
    category: 'bags',
    subcategory: 'tote',
    brand: 'Aurevia',
    price: 950.00,
    originalPrice: 6225.00,
    discount: 15,
    rating: 4.4,
    reviewCount: 28,
    colors: [
      { name: 'Natural', hex: '#F5F5DC' },
      { name: 'Navy', hex: '#2c3e50' }
    ],
    sizes: null,
    stock: { Natural: 25, Navy: 20 },
    images: [
      'images/bags/tote bags/tote3.jpeg'
    ],
    description: 'A durable canvas tote perfect for weekend markets and daily errands. The reinforced handles and spacious interior make it an everyday essential.',
    keyFeatures: [
      'Heavy-duty 16oz canvas',
      'Reinforced double-stitched handles',
      'Interior zip pocket',
      'Key leash with clip',
      'Water-resistant bottom panel'
    ],
    stylingTips: 'Ideal for farmers markets, beach days, and daily errands.',
    details: { 'Material': '16oz Cotton Canvas', 'Dimensions': '18″ × 15″ × 6″', 'Closure': 'Open Top', 'Strap': 'Double Handle 12″ drop', 'Lining': 'Unlined with Zip Pocket', 'Hardware': 'Nickel' },
    measurements: {},
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: 'sale',
    isNew: false,
    isBestseller: false,
    customization: {
      available: true,
      options: [
        { type: 'embroidery', name: 'Custom Embroidery', description: 'Add name or monogram', price: 18 },
        { type: 'monogram', name: 'Canvas Patch', description: 'Sewn canvas patch with initials', price: 12 }
      ]
    }
  },

  {
    id: 'bag-012',
    name: 'Daisy Crochet Shoulder Tote Bag',
    category: 'bags',
    subcategory: 'tote',
    brand: 'Aurevia',
    price: 1200.00,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviewCount: 45,
    colors: [
      { name: 'Cream', hex: '#F5F5DC' }
    ],
    sizes: null,
    stock: { Cognac: 10, Chestnut: 8 },
    images: [
      'images/bags/tote bags/tote4.jpeg'
    ],
    description: 'A spacious leather shopper tote with a relaxed silhouette. The supple leather drapes beautifully while maintaining structure and durability.',
    keyFeatures: [
      'Full-grain leather with natural grain',
      'Unlined interior with leather pockets',
      'Magnetic snap closure',
      'Reinforced rolled handles',
      'Ages beautifully with patina'
    ],
    stylingTips: 'A classic that pairs with everything from jeans to business attire.',
    details: { 'Material': 'Full-Grain Leather', 'Dimensions': '16″ × 14″ × 5″', 'Closure': 'Magnetic Snap', 'Strap': 'Rolled Handle 10″ drop', 'Lining': 'Unlined Leather', 'Hardware': 'Antique Brass' },
    measurements: {},
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: 'bestseller',
    isNew: false,
    isBestseller: true,
    customization: {
      available: true,
      options: [
        { type: 'embossing', name: 'Leather Embossing', description: 'Add initials on interior pocket', price: 25 }
      ]
    }
  },

  {
    id: 'bag-013',
    name: 'Denim Stellar Patchwork Tote Bag',
    category: 'bags',
    subcategory: 'tote',
    brand: 'Aurevia',
    price: 1000.00,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviewCount: 33,
    colors: [
      { name: 'Denim', hex: '#556B2F' },
      { name: 'Black', hex: '#1a1a1a' }
    ],
    sizes: null,
    stock: { Olive: 12, Black: 16 },
    images: [
      'images/bags/tote bags/tote5.jpeg'
    ],
    description: 'A generously sized weekend tote designed for short getaways. Features a luggage sleeve to slide over suitcase handles for easy travel.',
    keyFeatures: [
      'Durable waxed canvas exterior',
      'Luggage sleeve for travel convenience',
      'Padded 15" laptop compartment',
      'Shoe compartment with ventilation',
      'Detachable padded shoulder strap'
    ],
    stylingTips: 'The perfect companion for weekend escapes and overnight trips.',
    details: { 'Material': 'Waxed Canvas', 'Dimensions': '20″ × 13″ × 9″', 'Closure': 'Zipper', 'Strap': 'Handle 9″ + Shoulder Strap 48″', 'Lining': 'Water-Resistant Nylon', 'Hardware': 'Gunmetal' },
    measurements: {},
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: 'new',
    isNew: true,
    isBestseller: false,
    customization: {
      available: true,
      options: [
        { type: 'embroidery', name: 'Monogram Patch', description: 'Canvas monogram patch', price: 15 },
        { type: 'tag', name: 'Luggage Tag', description: 'Matching leather luggage tag', price: 20 }
      ]
    }
  },

  /* ─── FRAGRANCES ────────────────────────────── */
  {
    id: 'fragrance-001',
    name: 'Vanilla Dream EDP',
    category: 'fragrances',
    subcategory: 'vanilla',
    brand: 'Aurevia',
    price: 1133.00,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    reviewCount: 89,
    colors: null,
    sizes: ['30ml', '50ml', '100ml'],
    stock: { '30ml': 25, '50ml': 18, '100ml': 10 },
    images: [
      'images/fragrances/vanilla-1.jpg',
      'images/fragrances/vanilla-2.jpg',
      'images/fragrances/vanilla-3.jpg'
    ],
    description: 'A warm and inviting oriental fragrance that wraps you in a comforting embrace. Vanilla Dream opens with a bright citrus burst before settling into a lush floral heart and a deeply sensual base of vanilla and sandalwood.',
    keyFeatures: [
      'Long-lasting sillage of 6–8 hours',
      'Hand-crafted by a Grasse master perfumer',
      'Vegan and cruelty-free formulation',
      'Refillable bottle design to reduce waste',
      'Presented in a signature Aurevia gift box'
    ],
    stylingTips: 'Perfect for cooler evenings and autumn days. Layer with our Vanilla Dream Body Lotion for enhanced longevity.',
    details: { 'Concentration': 'Eau de Parfum (18% concentrate)', 'Top Notes': 'Bergamot, Vanilla Blossom', 'Middle Notes': 'Jasmine, Orchid, Rose Absolute', 'Base Notes': 'Madagascar Vanilla, Sandalwood, Ambergris', 'Longevity': '6–8 hours', 'Sillage': 'Moderate to Strong', 'Origin': 'Grasse, France' },
    measurements: {},
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [
      { author: 'Isabella R.', verified: true, rating: 5, date: '1 week ago', text: 'This is my signature scent now. The vanilla is warm without being sweet — it\'s sophisticated and sensual. Lasts all day effortlessly.', size: '50ml', helpful: 41 },
      { author: 'Chen W.',     verified: true, rating: 4, date: '2 weeks ago', text: 'Beautiful fragrance. The dry-down reveals the sandalwood beautifully. Bought the 100ml — it\'s a daily staple now.', size: '100ml', helpful: 28 },
      { author: 'Amara J.',   verified: true, rating: 5, date: '3 weeks ago', text: 'I have received more compliments wearing this than anything else. Magnificent.', size: '50ml', helpful: 35 }
    ],
    badge: 'new',
    isNew: true,
    isBestseller: false,
    customization: {
      available: true,
      options: [
        { type: 'engraving', name: 'Bottle Engraving', description: 'Personalize with name or message (up to 20 characters)', price: 15 },
        { type: 'giftwrap', name: 'Premium Gift Wrapping', description: 'Luxury gift box with ribbon', price: 12 },
        { type: 'scent', name: 'Scent Modification', description: 'Adjust fragrance intensity', price: 0 }
      ]
    }
  },

  {
    id: 'fragrance-002',
    name: 'Aquatic Mist EDP',
    category: 'fragrances',
    subcategory: 'fresh',
    brand: 'Aurevia',
    price: 1020.00,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviewCount: 114,
    colors: null,
    sizes: ['30ml', '50ml', '100ml'],
    stock: { '30ml': 20, '50ml': 15, '100ml': 8 },
    images: [
      'images/fragrances/fresh-1.jpg',
      'images/fragrances/fresh-2.jpg'
    ],
    description: 'An opulent meeting of Bulgarian Rose and rare Agarwood Oud. This is a fragrance for those who appreciate depth, mystery, and the ancient art of Arabic perfumery translated into a contemporary context.',
    keyFeatures: [
      'Steam-distilled Bulgarian rose absolute',
      'Hand-selected Oud from sustainable sources',
      'Projection lasts 8–10 hours',
      'Outstanding compliment-getter',
      'Perfect for special occasions'
    ],
    stylingTips: 'Best for evening wear or special occasions. Wear sparingly — a little goes a long way.',
    details: { 'Concentration': 'Eau de Parfum (20% concentrate)', 'Top Notes': 'Aldehydes, Pink Pepper', 'Middle Notes': 'Bulgarian Rose Absolute, Iris Root', 'Base Notes': 'Agarwood Oud, Vetiver, Musk', 'Longevity': '8–10 hours', 'Sillage': 'Strong', 'Origin': 'Dubai / Grasse collaborative' },
    measurements: {},
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [
      { author: 'Layla A.', verified: true, rating: 5, date: '2 days ago', text: 'I have no words. This fragrance is pure art. The rose and oud combination is intoxicating. My most-complimented scent.', size: '50ml', helpful: 55 },
      { author: 'Riya S.',  verified: true, rating: 5, date: '4 days ago', text: 'The longevity is exceptional — I sprayed it in the morning and could still smell it the next day. Extraordinary.', size: '100ml', helpful: 43 }
    ],
    badge: 'bestseller',
    isNew: false,
    isBestseller: true,
    customization: {
      available: true,
      options: [
        { type: 'engraving', name: 'Bottle Engraving', description: 'Personalize with name or message (up to 20 characters)', price: 15 },
        { type: 'giftwrap', name: 'Premium Gift Wrapping', description: 'Luxury gift box with ribbon', price: 12 },
        { type: 'scent', name: 'Scent Layering Kit', description: 'Add complementary scent samples', price: 25 }
      ]
    }
  },

  /* ─── ADDITIONAL CLOTHING PRODUCTS ──────────── */
  {
    id: 'top-002',
    name: 'Eclipse Butterfly Embellished Top',
    category: 'clothing',
    subcategory: 'tops',
    brand: 'Aurevia',
    price: 1200.00,
    originalPrice: null,
    discount: 0,
    rating: 4.3,
    reviewCount: 23,
    colors: [
      { name: 'Charcoal', hex: '#3B3030' },
      { name: 'Cream', hex: '#E8D9B8' },
      { name: 'Warm Brown', hex: '#795757' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 10, S: 18, M: 15, L: 12, XL: 6 },
    images: [
      'images/cloths/Tops & T-shirts/dress2.jpeg'
    ],
    description: 'A relaxed cotton tee with effortless style. Soft, breathable, and naturally textured, this tee pairs beautifully with both casual and smart-casual looks.',
    keyFeatures: [
      '100% Organic cotton, naturally breathable',
      'Relaxed silhouette for all-day comfort',
      'Classic crew neck design',
      'Easy-care fabric that improves with washing'
    ],
    stylingTips: 'Tuck into tailored trousers or let it hang loose over straight-leg jeans.',
    details: { 'Material': '100% Organic Cotton', 'Fit': 'Relaxed', 'Neckline': 'Crew Neck', 'Sleeve Length': 'Short Sleeve', 'Care Instructions': 'Machine wash at 30°C' },
    measurements: { 'Chest (Size M)': '40 inches (102 cm)' },
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: null,
    isNew: false,
    isBestseller: false,
    customization: {
      available: true,
      options: [
        { type: 'embroidery', name: 'Personalized Embroidery', description: 'Add initials or name on chest', price: 12 },
        { type: 'monogram', name: 'Monogram Patch', description: 'Custom embroidered patch on chest', price: 10 }
      ]
    }
  },

  {
    id: 'bottom-002',
    name: 'Vintage Garden Embroidered Denim Skirt',
    category: 'clothing',
    subcategory: 'bottoms',
    brand: 'Aurevia',
    price: 1150.00,
    originalPrice: 2200.00,
    discount: 15,
    rating: 4.5,
    reviewCount: 28,
    colors: [
      { name: 'Cream', hex: '#E8D9B8' },
      { name: 'Warm Brown', hex: '#795757' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 6, S: 12, M: 15, L: 10, XL: 5 },
    images: [
      'images/cloths/Bottoms/dress2.jpeg'
    ],
    description: 'A classic pleated midi skirt with a refined, elegant drape. Crafted from a premium viscose blend that flows beautifully and resists creasing throughout the day.',
    keyFeatures: [
      'Premium viscose blend for fluid drape',
      'Timeless pleated design',
      'Midi length for versatile styling',
      'Comfortable elastic waistband'
    ],
    stylingTips: 'Pair with the Linen Blouse or Silk Camisole for a complete, polished look.',
    details: { 'Material': '65% Viscose, 35% Polyester', 'Fit': 'Regular', 'Length': 'Midi', 'Waistband': 'Elastic', 'Care Instructions': 'Dry clean recommended' },
    measurements: { 'Waist (Size M)': '28 inches (71 cm)', 'Length (Size M)': '30 inches (76 cm)' },
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: 'sale',
    isNew: false,
    isBestseller: false,
    customization: {
      available: true,
      options: [
        { type: 'embroidery', name: 'Personalized Embroidery', description: 'Add initials on waistband', price: 10 },
        { type: 'length', name: 'Custom Length', description: 'Adjust skirt length', price: 15 }
      ]
    }
  },

  {
    id: 'sweatshirt-002',
    name: 'Indigo Bloom Quarter Zip Hoodie',
    category: 'clothing',
    subcategory: 'sweatshirts',
    brand: 'Aurevia',
    price: 1200.00,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    reviewCount: 32,
    colors: [
      { name: 'Warm Brown', hex: '#795757' },
      { name: 'Cream', hex: '#FFF0D1' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 5, S: 8, M: 14, L: 12, XL: 7 },
    images: [
      'images/cloths/Hoodies and Sweatshirts/dress2.jpeg'
    ],
    description: 'A cozy oversized sweatshirt for effortless warmth and style. Made from soft cotton blend with a relaxed fit for ultimate comfort.',
    keyFeatures: [
      '80% Cotton, 20% Polyester blend',
      'Relaxed oversized fit',
      'Ribbed cuffs and hem',
      'Soft brushed interior'
    ],
    stylingTips: 'Wear with Tailored Trousers for a chic athleisure look, or pair with leggings for casual comfort.',
    details: { 'Material': '80% Cotton, 20% Polyester', 'Fit': 'Oversized', 'Closure': 'Pullover', 'Care Instructions': 'Machine wash cold, tumble dry low' },
    measurements: { 'Chest (Size M)': '44 inches (112 cm)', 'Length (Size M)': '28 inches (71 cm)' },
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: null,
    isNew: false,
    isBestseller: false,
    customization: {
      available: true,
      options: [
        { type: 'embroidery', name: 'Personalized Embroidery', description: 'Add initials or name', price: 12 },
        { type: 'patches', name: 'Custom Patches', description: 'Add decorative patches', price: 8 }
      ]
    }
  },

  {
    id: 'dress-003',
    name: 'Blue Porcelain Garden Dress',
    category: 'clothing',
    subcategory: 'dresses',
    brand: 'Aurevia',
    price: 1200.00,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviewCount: 19,
    colors: [
      { name: 'Charcoal', hex: '#3B3030' },
      { name: 'Deep Brown', hex: '#664343' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 3, S: 6, M: 10, L: 8, XL: 4 },
    images: [
      'images/cloths/Dresses/dress3.jpeg'
    ],
    description: 'An elegant evening gown for special occasions. Featuring a flowing silhouette and luxurious fabric that drapes beautifully.',
    keyFeatures: [
      'Luxurious flowing fabric',
      'Elegant floor-length design',
      'Flattering silhouette',
      'Perfect for formal occasions'
    ],
    stylingTips: 'Pair with statement jewelry and elegant heels for a stunning evening look.',
    details: { 'Material': '100% Polyester', 'Fit': 'Regular', 'Length': 'Floor Length', 'Neckline': 'V-Neck', 'Sleeve Length': 'Sleeveless', 'Care Instructions': 'Dry clean only' },
    measurements: { 'Bust (Size M)': '36 inches (91 cm)', 'Waist (Size M)': '28 inches (71 cm)', 'Length (Size M)': '58 inches (147 cm)' },
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: 'new',
    isNew: true,
    isBestseller: false,
    customization: {
      available: true,
      options: [
        { type: 'embroidery', name: 'Personalized Embroidery', description: 'Add initials or name', price: 20 },
        { type: 'length', name: 'Custom Length', description: 'Adjust gown length', price: 30 }
      ]
    }
  },

  {
    id: 'top-003',
    name: 'Indigo Star Embroidered Tee',
    category: 'clothing',
    subcategory: 'tops',
    brand: 'Aurevia',
    price: 850.00,
    originalPrice: null,
    discount: 0,
    rating: 4.4,
    reviewCount: 15,
    colors: [
      { name: 'Natural', hex: '#FFF8E7' },
      { name: 'Cream', hex: '#E8D9B8' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 8, S: 14, M: 18, L: 12, XL: 6 },
    images: [
      'images/cloths/Tops & T-shirts/dress3.jpeg'
    ],
    description: 'A luxurious silk camisole perfect for layering or wearing alone. Soft, smooth, and elegantly simple.',
    keyFeatures: [
      '100% Mulberry silk',
    'Smooth, lustrous finish',
      'Adjustable spaghetti straps',
      'Elegant v-neckline'
    ],
    stylingTips: 'Layer under a blazer for work, or wear with jeans for a casual-chic look.',
    details: { 'Material': '100% Mulberry Silk', 'Fit': 'Regular', 'Straps': 'Adjustable', 'Care Instructions': 'Hand wash cold or dry clean' },
    measurements: { 'Chest (Size M)': '36 inches (91 cm)' },
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: null,
    isNew: false,
    isBestseller: false,
    customization: {
      available: true,
      options: [
        { type: 'embroidery', name: 'Personalized Embroidery', description: 'Add initials on hem', price: 15 },
        { type: 'monogram', name: 'Monogram Tag', description: 'Custom embroidered tag', price: 8 }
      ]
    }
  },

  {
    id: 'bottom-003',
    name: 'Midnight Stardust Wide-Leg Jeans',
    category: 'clothing',
    subcategory: 'bottoms',
    brand: 'Aurevia',
    price: 1200.00,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviewCount: 26,
    colors: [
      { name: 'Charcoal', hex: '#3B3030' },
      { name: 'Cream', hex: '#E8D9B8' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 5, S: 10, M: 16, L: 14, XL: 8 },
    images: [
      'images/cloths/Bottoms/dress3.jpeg'
    ],
    description: 'Elegant wide-leg pants with a flattering high-waist design. Perfect for both office and evening wear.',
    keyFeatures: [
      'Premium viscose blend',
      'Flattering high-waist',
      'Flowing wide-leg silhouette',
      'Comfortable elastic back waist'
    ],
    stylingTips: 'Pair with a fitted top or blouse for a balanced silhouette.',
    details: { 'Material': '70% Viscose, 30% Polyester', 'Fit': 'High-Waist Wide Leg', 'Closure': 'Zip + Hook', 'Care Instructions': 'Dry clean recommended' },
    measurements: { 'Waist (Size M)': '28 inches (71 cm)', 'Inseam (Size M)': '32 inches (81 cm)' },
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: null,
    isNew: false,
    isBestseller: false,
    customization: {
      available: true,
      options: [
        { type: 'embroidery', name: 'Personalized Embroidery', description: 'Add initials on waistband', price: 12 },
        { type: 'length', name: 'Custom Length', description: 'Adjust pant length', price: 20 }
      ]
    }
  },

  {
    id: 'sweatshirt-003',
    name: 'Ocean Patchwork Hoodie',
    category: 'clothing',
    subcategory: 'sweatshirts',
    brand: 'Aurevia',
    price: 1200.00,
    originalPrice: 2500.00,
    discount: 10,
    rating: 4.5,
    reviewCount: 21,
    colors: [
      { name: 'Warm Brown', hex: '#795757' },
      { name: 'Cream', hex: '#E8D9B8' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 4, S: 9, M: 12, L: 10, XL: 5 },
    images: [
      'images/cloths/Hoodies and Sweatshirts/dress3.jpeg'
    ],
    description: 'A cozy knit jumpsuit that combines comfort with style. One-piece dressing made effortless.',
    keyFeatures: [
      'Soft knit fabric blend',
      'Relaxed fit with cinched waist',
      'Functional side pockets',
      'Easy pull-on style'
    ],
    stylingTips: 'Wear with sneakers for a casual look, or dress up with ankle boots.',
    details: { 'Material': '65% Cotton, 35% Polyester', 'Fit': 'Relaxed', 'Pockets': 'Side pockets', 'Care Instructions': 'Machine wash cold, lay flat to dry' },
    measurements: { 'Chest (Size M)': '40 inches (102 cm)', 'Waist (Size M)': '30 inches (76 cm)', 'Inseam (Size M)': '28 inches (71 cm)' },
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: 'sale',
    isNew: false,
    isBestseller: false,
    customization: {
      available: true,
      options: [
        { type: 'embroidery', name: 'Personalized Embroidery', description: 'Add initials or name', price: 15 },
        { type: 'patches', name: 'Custom Patches', description: 'Add decorative patches', price: 10 }
      ]
    }
  },

  /* ─── ADDITIONAL DRESS PRODUCTS ──────────── */
  {
    id: 'dress-004',
    name: 'Aurora Drift Ruffle Gown',
    category: 'clothing',
    subcategory: 'dresses',
    brand: 'Aurevia',
    price: 1500.00,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    reviewCount: 34,
    colors: [
      { name: 'Cream', hex: '#E8D9B8' },
      { name: 'Navy', hex: '#2c3e50' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 6, S: 12, M: 16, L: 10, XL: 5 },
    images: [
      'images/cloths/Dresses/dress4.jpeg'
    ],
    description: 'A flowing maxi dress with a beautiful floral print. The lightweight fabric and tiered design create effortless movement and elegance.',
    keyFeatures: [
      'Lightweight chiffon fabric',
      'Elegant tiered design',
      'Adjustable waist tie',
      'Flattering V-neckline',
      'Lined for comfort'
    ],
    stylingTips: 'Perfect for garden parties, brunches, or vacation getaways.',
    details: { 'Material': '100% Polyester Chiffon', 'Fit': 'Relaxed with Tie Waist', 'Length': 'Maxi', 'Neckline': 'V-Neck', 'Sleeve Length': 'Short Sleeve', 'Care Instructions': 'Machine wash cold, hang dry' },
    measurements: { 'Bust (Size M)': '38 inches (97 cm)', 'Waist (Size M)': '30 inches (76 cm)', 'Length (Size M)': '52 inches (132 cm)' },
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: 'new',
    isNew: true,
    isBestseller: false,
    customization: {
      available: true,
      options: [
        { type: 'embroidery', name: 'Personalized Embroidery', description: 'Add initials on hem', price: 15 },
        { type: 'length', name: 'Custom Length', description: 'Adjust dress length', price: 20 }
      ]
    }
  },

  {
    id: 'dress-005',
    name: 'Azure Crochet Dress',
    category: 'clothing',
    subcategory: 'dresses',
    brand: 'Aurevia',
    price: 2200.00,
    originalPrice: 4500.00,
    discount: 18,
    rating: 4.8,
    reviewCount: 41,
    colors: [
      { name: 'Burgundy', hex: '#800020' },
      { name: 'Black', hex: '#1a1a1a' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 4, S: 10, M: 14, L: 12, XL: 6 },
    images: [
      'images/cloths/Dresses/dress5.jpeg'
    ],
    description: 'A sophisticated cocktail dress with elegant lace detailing. The fitted bodice and flared skirt create a timeless silhouette for special occasions.',
    keyFeatures: [
      'Elegant lace overlay',
      'Fitted bodice with boning',
      'Flared A-line skirt',
      'Invisible back zipper',
      'Fully lined interior'
    ],
    stylingTips: 'Pair with statement heels and minimal jewelry for a stunning evening look.',
    details: { 'Material': 'Lace with Polyester Lining', 'Fit': 'Fitted Bodice, Flared Skirt', 'Length': 'Knee Length', 'Neckline': 'Boat Neck', 'Sleeve Length': 'Cap Sleeve', 'Care Instructions': 'Dry clean only' },
    measurements: { 'Bust (Size M)': '36 inches (91 cm)', 'Waist (Size M)': '28 inches (71 cm)', 'Length (Size M)': '38 inches (97 cm)' },
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: 'sale',
    isNew: false,
    isBestseller: true,
    customization: {
      available: true,
      options: [
        { type: 'embroidery', name: 'Personalized Embroidery', description: 'Add initials inside neckline', price: 12 }
      ]
    }
  },

  /* ─── ADDITIONAL TOP PRODUCTS ──────────── */
  {
    id: 'top-004',
    name: 'Denim Drape Asymmetrical Camisole',
    category: 'clothing',
    subcategory: 'tops',
    brand: 'Aurevia',
    price: 900.00,
    originalPrice: null,
    discount: 0,
    rating: 4.3,
    reviewCount: 19,
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Taupe', hex: '#8B7D6B' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 15, S: 20, M: 25, L: 18, XL: 10 },
    images: [
      'images/cloths/Tops & T-shirts/dress4.jpeg'
    ],
    description: 'A versatile ribbed knit tank with a flattering fitted silhouette. The stretchy fabric provides all-day comfort and easy layering.',
    keyFeatures: [
      'Soft ribbed knit fabric',
      'Figure-hugging fit',
      'High neckline',
      'Thick shoulder straps',
      'Breathable cotton blend'
    ],
    stylingTips: 'Layer under blazers or wear alone with high-waisted bottoms.',
    details: { 'Material': '95% Cotton, 5% Spandex', 'Fit': 'Fitted', 'Neckline': 'High Neck', 'Sleeve Length': 'Sleeveless', 'Care Instructions': 'Machine wash cold, lay flat to dry' },
    measurements: { 'Chest (Size M)': '34 inches (86 cm)', 'Length (Size M)': '24 inches (61 cm)' },
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: null,
    isNew: false,
    isBestseller: false,
    customization: { available: false, options: [] }
  },

  {
    id: 'top-005',
    name: 'Obsidian Floret Halter Top',
    category: 'clothing',
    subcategory: 'tops',
    brand: 'Aurevia',
    price: 1200.00,
    originalPrice: 3000.00,
    discount: 17,
    rating: 4.7,
    reviewCount: 27,
    colors: [
      { name: 'Champagne', hex: '#F7E7CE' },
      { name: 'Emerald', hex: '#50C878' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 8, S: 12, M: 15, L: 10, XL: 5 },
    images: [
      'images/cloths/Tops & T-shirts/dress5.jpeg'
    ],
    description: 'An elegant satin blouse with delicate draping. The lustrous fabric and refined details make it perfect for both office and evening wear.',
    keyFeatures: [
      'Luxurious satin fabric',
      'Elegant cowl neckline',
      'Long sleeves with button cuffs',
      'Relaxed, flowing fit',
      'Mother-of-pearl buttons'
    ],
    stylingTips: 'Tuck into tailored trousers for work or pair with a satin skirt for evening.',
    details: { 'Material': '100% Polyester Satin', 'Fit': 'Relaxed', 'Neckline': 'Cowl Neck', 'Sleeve Length': 'Long Sleeve', 'Care Instructions': 'Hand wash cold or dry clean' },
    measurements: { 'Chest (Size M)': '40 inches (102 cm)', 'Length (Size M)': '26 inches (66 cm)' },
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: 'sale',
    isNew: false,
    isBestseller: false,
    customization: {
      available: true,
      options: [
        { type: 'monogram', name: 'Cuff Monogram', description: 'Add initials on cuff', price: 10 }
      ]
    }
  },

  /* ─── ADDITIONAL BOTTOM PRODUCTS ──────────── */
  {
    id: 'bottom-004',
    name: 'Denim Mini Skirt',
    category: 'clothing',
    subcategory: 'bottoms',
    brand: 'Aurevia',
    price: 4562.00,
    originalPrice: null,
    discount: 0,
    rating: 4.5,
    reviewCount: 22,
    colors: [
      { name: 'Light Wash', hex: '#ADD8E6' },
      { name: 'Dark Wash', hex: '#191970' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 10, S: 18, M: 20, L: 15, XL: 8 },
    images: [
      'images/cloths/Bottoms/derss1.jpeg'
    ],
    description: 'A classic denim mini skirt with a modern A-line cut. The versatile design pairs effortlessly with everything from tees to blouses.',
    keyFeatures: [
      'Premium stretch denim',
      'Flattering A-line silhouette',
      'Classic five-pocket styling',
      'Raw hem detail',
      'Button-fly closure'
    ],
    stylingTips: 'Style with the Relaxed Cotton Tee and sneakers for a casual weekend look.',
    details: { 'Material': '98% Cotton, 2% Elastane', 'Fit': 'A-Line Mini', 'Length': 'Mini (16″)', 'Closure': 'Button Fly', 'Care Instructions': 'Machine wash cold, tumble dry low' },
    measurements: { 'Waist (Size M)': '28 inches (71 cm)', 'Length (Size M)': '16 inches (41 cm)' },
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: 'new',
    isNew: true,
    isBestseller: false,
    customization: {
      available: true,
      options: [
        { type: 'embroidery', name: 'Pocket Embroidery', description: 'Add initials on back pocket', price: 12 }
      ]
    }
  },

  {
    id: 'bottom-005',
    name: 'Daisy Laced Trim Denim Shorts',
    category: 'clothing',
    subcategory: 'bottoms',
    brand: 'Aurevia',
    price: 850.00,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    reviewCount: 18,
    colors: [
      { name: 'Natural', hex: '#F5F5DC' },
      { name: 'Sage', hex: '#9CAF88' },
      { name: 'Navy', hex: '#2c3e50' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 6, S: 12, M: 16, L: 12, XL: 6 },
    images: [
      'images/cloths/Bottoms/dress4.jpeg'
    ],
    description: 'Breezy linen culottes perfect for warm-weather dressing. The cropped, wide-leg design offers comfort without sacrificing style.',
    keyFeatures: [
      '100% European linen',
      'Cropped wide-leg silhouette',
      'Elastic back waistband',
      'Front pleat detail',
      'Side pockets'
    ],
    stylingTips: 'Pair with the Silk Camisole and sandals for effortless summer elegance.',
    details: { 'Material': '100% Linen', 'Fit': 'Wide-Leg Culotte', 'Length': 'Cropped (24″)', 'Waistband': 'Partial Elastic', 'Care Instructions': 'Machine wash cold, hang to dry' },
    measurements: { 'Waist (Size M)': '28 inches (71 cm)', 'Inseam (Size M)': '24 inches (61 cm)' },
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: null,
    isNew: false,
    isBestseller: false,
    customization: { available: false, options: [] }
  },

  {
    id: 'bottom-006',
    name: 'Ornate Charm Denim Mini Skirt',
    category: 'clothing',
    subcategory: 'bottoms',
    brand: 'Aurevia',
    price: 900.00,
    originalPrice: 1020.00,
    discount: 17,
    rating: 4.4,
    reviewCount: 16,
    colors: [
      { name: 'Khaki', hex: '#C3B091' },
      { name: 'Black', hex: '#1a1a1a' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 8, S: 14, M: 18, L: 12, XL: 6 },
    images: [
      'images/cloths/Bottoms/dress5.jpeg'
    ],
    description: 'Stylish paperbag waist shorts with a self-tie belt. The high-rise design and relaxed fit make them a summer wardrobe essential.',
    keyFeatures: [
      'Lightweight cotton twill',
      'Paperbag waist with belt',
      'High-rise design',
      'Side and back pockets',
      'Cuffed hem'
    ],
    stylingTips: 'Wear with a tucked-in tank and espadrilles for a chic summer look.',
    details: { 'Material': '100% Cotton Twill', 'Fit': 'Relaxed with Tie Waist', 'Length': 'Mid-Thigh (4″ inseam)', 'Rise': 'High Rise', 'Care Instructions': 'Machine wash cold, tumble dry low' },
    measurements: { 'Waist (Size M)': '28 inches (71 cm)', 'Inseam (Size M)': '4 inches (10 cm)' },
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: 'sale',
    isNew: false,
    isBestseller: false,
    customization: {
      available: true,
      options: [
        { type: 'embroidery', name: 'Belt Embroidery', description: 'Add initials on belt', price: 10 }
      ]
    }
  },

  /* ─── ADDITIONAL HOODIE/ SWEATSHIRT PRODUCTS ──────────── */
  {
    id: 'sweatshirt-004',
    name: 'Rainbow Heart Knit Sweater',
    category: 'clothing',
    subcategory: 'sweatshirts',
    brand: 'Aurevia',
    price: 1400.00,
    originalPrice: null,
    discount: 0,
    rating: 4.5,
    reviewCount: 31,
    colors: [
      { name: 'Heather Grey', hex: '#B8B8B8' },
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Navy', hex: '#2c3e50' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 8, S: 15, M: 22, L: 18, XL: 10 },
    images: [
      'images/cloths/Hoodies and Sweatshirts/dress4.jpeg'
    ],
    description: 'A versatile zip-up hoodie with a relaxed fit. Perfect for layering during transitional weather or casual lounging.',
    keyFeatures: [
      'Soft fleece-lined interior',
      'Full front zipper',
      'Adjustable drawstring hood',
      'Kangaroo front pockets',
      'Ribbed cuffs and hem'
    ],
    stylingTips: 'Layer over a tee with joggers for a relaxed athleisure look.',
    details: { 'Material': '80% Cotton, 20% Polyester', 'Fit': 'Relaxed', 'Closure': 'Full Zip', 'Pockets': 'Kangaroo', 'Care Instructions': 'Machine wash cold, tumble dry low' },
    measurements: { 'Chest (Size M)': '44 inches (112 cm)', 'Length (Size M)': '27 inches (69 cm)' },
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: null,
    isNew: false,
    isBestseller: false,
    customization: {
      available: true,
      options: [
        { type: 'embroidery', name: 'Chest Embroidery', description: 'Add initials or small design', price: 15 },
        { type: 'patches', name: 'Sleeve Patch', description: 'Custom fabric patch', price: 10 }
      ]
    }
  },

  {
    id: 'sweatshirt-005',
    name: 'Denim Star Street-Style Hoodie',
    category: 'clothing',
    subcategory: 'sweatshirts',
    brand: 'Aurevia',
    price: 1050.00,
    originalPrice: 3200.00,
    discount: 13,
    rating: 4.7,
    reviewCount: 24,
    colors: [
      { name: 'Blush', hex: '#F5E6E8' },
      { name: 'Lilac', hex: '#C8A2C8' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 12, S: 18, M: 20, L: 14, XL: 6 },
    images: [
      'images/cloths/Hoodies and Sweatshirts/dress5.jpeg'
    ],
    description: 'A trendy cropped sweatshirt with a relaxed, boxy fit. The shorter length pairs perfectly with high-waisted bottoms.',
    keyFeatures: [
      'Soft brushed fleece',
      'Boxy, cropped silhouette',
      'Dropped shoulder design',
      'Ribbed neckline and hem',
      'Relaxed crew neck'
    ],
    stylingTips: 'Pair with high-waisted Wide-Leg Pants for a modern, balanced look.',
    details: { 'Material': '85% Cotton, 15% Polyester', 'Fit': 'Boxy Cropped', 'Length': 'Cropped (20″)', 'Neckline': 'Crew Neck', 'Care Instructions': 'Machine wash cold, tumble dry low' },
    measurements: { 'Chest (Size M)': '46 inches (117 cm)', 'Length (Size M)': '20 inches (51 cm)' },
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over ₹50' }, express: { days: '2–3 business days', price: '₹12.99' }, nextDay: { days: '1 business day', price: '₹24.99' } },
    reviews: [],
    badge: 'sale',
    isNew: false,
    isBestseller: false,
    customization: {
      available: true,
      options: [
        { type: 'embroidery', name: 'Chest Monogram', description: 'Add initials', price: 12 }
      ]
    }
  }

];

/* ─── Utility Functions ─────────────────────── */

/** Find a product by its id */
function getProductById(id) {
  return AUREVIA_PRODUCTS.find(p => {
    if (p.id === id) return true;
    // Fallback for cart items that were added without a data-id
    const slug = p.name.trim().replace(/\s+/g, '-').toLowerCase();
    return slug === id;
  }) || null;
}

/** Get related products (same category, excluding current) */
function getRelatedProducts(product, limit = 4) {
  return AUREVIA_PRODUCTS
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

/** Get category display name */
function getCategoryName(slug) {
  const map = { clothing: 'Clothing', bags: 'Bags', fragrances: 'Fragrances', customise: 'Customise' };
  return map[slug] || slug;
}

/** Get category page link */
function getCategoryLink(slug) {
  const map = { clothing: 'clothing.html', bags: 'bags.html', fragrances: 'fragrances.html', customise: 'customise.html' };
  return map[slug] || 'index.html';
}
