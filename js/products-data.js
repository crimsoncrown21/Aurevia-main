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
    name: 'Elegant Summer Dress',
    category: 'clothing',
    subcategory: 'dresses',
    brand: 'Aurevia',
    price: 89.00,
    originalPrice: 110.00,
    discount: 20,
    rating: 4.2,
    reviewCount: 42,
    colors: [
      { name: 'Brown',  hex: '#3B3030' },
      { name: 'Cream',  hex: '#E8D9B8' },
      { name: 'Black',  hex: '#1a1a1a' },
      { name: 'Navy',   hex: '#2c3e50' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 5, S: 12, M: 8, L: 3, XL: 0 },
    images: [
      'images/cloths/dress-1.jpg',
      'images/cloths/dress-2.jpg',
      'images/cloths/dress-3.jpg',
      'images/cloths/dress-4.jpg'
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
      standard: { days: '5–7 business days', price: 'Free on orders over $50' },
      express:  { days: '2–3 business days', price: '$12.99'  },
      nextDay:  { days: '1 business day',    price: '$24.99'  }
    },
    reviews: [
      { author: 'Sarah M.', verified: true, rating: 5, date: '2 days ago',    text: 'Absolutely love this dress! The quality is amazing and it fits perfectly. The colour is exactly as shown in the pictures. Highly recommend!',             size: 'M', color: 'Brown', helpful: 12 },
      { author: 'Jessica K.', verified: true, rating: 4, date: '1 week ago',  text: 'Great product, runs slightly large so I\'d recommend sizing down. The fabric is luxurious and the colour is beautiful.',                                     size: 'S', color: 'Cream', helpful: 8 },
      { author: 'Priya M.',   verified: true, rating: 5, date: '2 weeks ago', text: 'This dress exceeded my expectations. The stitching is flawless and the organic cotton feels so gentle on the skin. Will definitely be ordering more.',        size: 'M', color: 'Brown', helpful: 15 }
    ],
    badge: 'sale',
    isNew: false,
    isBestseller: true
  },

  {
    id: 'dress-002',
    name: 'Silk Wrap Dress',
    category: 'clothing',
    subcategory: 'dresses',
    brand: 'Aurevia',
    price: 129.00,
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
      'images/cloths/wrap-1.jpg',
      'images/cloths/wrap-2.jpg',
      'images/cloths/wrap-3.jpg'
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
      standard: { days: '5–7 business days', price: 'Free on orders over $50' },
      express:  { days: '2–3 business days', price: '$12.99' },
      nextDay:  { days: '1 business day',    price: '$24.99' }
    },
    reviews: [
      { author: 'Emma T.',  verified: true, rating: 5, date: '3 days ago',  text: 'This is genuinely the most beautiful dress I have ever owned. The silk drapes like a dream.',   size: 'M', color: 'Deep Brown', helpful: 20 },
      { author: 'Lena K.',  verified: true, rating: 4, date: '5 days ago',  text: 'Stunning piece. Fits perfectly and the colour is even richer in person.',                        size: 'S', color: 'Cream',      helpful: 9 }
    ],
    badge: 'new',
    isNew: true,
    isBestseller: false
  },

  {
    id: 'top-001',
    name: 'Linen Blouse',
    category: 'clothing',
    subcategory: 'tops',
    brand: 'Aurevia',
    price: 59.00,
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
      'images/cloths/blouse-1.jpg',
      'images/cloths/blouse-2.jpg',
      'images/cloths/blouse-3.jpg'
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
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over $50' }, express: { days: '2–3 business days', price: '$12.99' }, nextDay: { days: '1 business day', price: '$24.99' } },
    reviews: [
      { author: 'Anya R.', verified: true, rating: 5, date: '1 week ago', text: 'Perfect summer blouse. Breathable and elegant.', size: 'M', color: 'Natural', helpful: 7 }
    ],
    badge: null,
    isNew: false,
    isBestseller: false
  },

  {
    id: 'trousers-001',
    name: 'Tailored Trousers',
    category: 'clothing',
    subcategory: 'bottoms',
    brand: 'Aurevia',
    price: 79.00,
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
      'images/cloths/trousers-1.jpg',
      'images/cloths/trousers-2.jpg'
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
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over $50' }, express: { days: '2–3 business days', price: '$12.99' }, nextDay: { days: '1 business day', price: '$24.99' } },
    reviews: [
      { author: 'Olivia P.', verified: true, rating: 5, date: '4 days ago', text: 'These trousers are incredible. The fit is flawless and the fabric barely wrinkles.', size: 'M', color: 'Charcoal', helpful: 11 }
    ],
    badge: 'new',
    isNew: true,
    isBestseller: false
  },

  {
    id: 'hoodie-001',
    name: 'Cashmere Hoodie',
    category: 'clothing',
    subcategory: 'sweatshirts',
    brand: 'Aurevia',
    price: 95.00,
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
      'images/cloths/hoodie-1.jpg',
      'images/cloths/hoodie-2.jpg'
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
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over $50' }, express: { days: '2–3 business days', price: '$12.99' }, nextDay: { days: '1 business day', price: '$24.99' } },
    reviews: [
      { author: 'Claire S.', verified: true, rating: 5, date: '1 week ago', text: 'Absolutely the softest thing I have ever worn. Worth every penny.', size: 'M', color: 'Cream', helpful: 22 },
      { author: 'Naomi T.',  verified: true, rating: 5, date: '2 weeks ago', text: 'Exceptional quality. The cashmere is genuine and the construction is faultless.', size: 'S', color: 'Charcoal', helpful: 18 }
    ],
    badge: null,
    isNew: false,
    isBestseller: true
  },

  /* ─── BAGS ──────────────────────────────────── */
  {
    id: 'bag-001',
    name: 'Classic Leather Tote',
    category: 'bags',
    subcategory: 'tote',
    brand: 'Aurevia',
    price: 129.00,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviewCount: 67,
    colors: [
      { name: 'Tan',   hex: '#C4A77D' },
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Brown', hex: '#5D4037' }
    ],
    sizes: null,
    stock: { Tan: 15, Black: 20, Brown: 8 },
    images: [
      'images/bags/tote-1.jpg',
      'images/bags/tote-2.jpg',
      'images/bags/tote-3.jpg'
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
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over $50' }, express: { days: '2–3 business days', price: '$12.99' }, nextDay: { days: '1 business day', price: '$24.99' } },
    reviews: [
      { author: 'Mei L.',    verified: true, rating: 5, date: '3 days ago', text: 'This bag is an heirloom. The leather is remarkable and the construction is perfect.', color: 'Tan', helpful: 30 },
      { author: 'Sandra O.', verified: true, rating: 5, date: '1 week ago', text: 'Bought in Black — it is the most beautiful bag I own. Incredibly spacious.', color: 'Black', helpful: 24 }
    ],
    badge: 'bestseller',
    isNew: false,
    isBestseller: true
  },

  {
    id: 'bag-002',
    name: 'Mini Crossbody Bag',
    category: 'bags',
    subcategory: 'crossbody',
    brand: 'Aurevia',
    price: 89.00,
    originalPrice: 105.00,
    discount: 15,
    rating: 4.5,
    reviewCount: 38,
    colors: [
      { name: 'Cognac', hex: '#8B5E3C' },
      { name: 'Black',  hex: '#1a1a1a' }
    ],
    sizes: null,
    stock: { Cognac: 10, Black: 18 },
    images: [
      'images/bags/crossbody-1.jpg',
      'images/bags/crossbody-2.jpg'
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
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over $50' }, express: { days: '2–3 business days', price: '$12.99' }, nextDay: { days: '1 business day', price: '$24.99' } },
    reviews: [
      { author: 'Fatima H.', verified: true, rating: 5, date: '5 days ago', text: 'Perfect size, beautiful leather. The cognac colour is stunning in person.', color: 'Cognac', helpful: 14 }
    ],
    badge: 'sale',
    isNew: false,
    isBestseller: false
  },

  /* ─── FRAGRANCES ────────────────────────────── */
  {
    id: 'fragrance-001',
    name: 'Vanilla Dream Eau de Parfum',
    category: 'fragrances',
    subcategory: 'vanilla',
    brand: 'Aurevia',
    price: 89.00,
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
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over $50' }, express: { days: '2–3 business days', price: '$12.99' }, nextDay: { days: '1 business day', price: '$24.99' } },
    reviews: [
      { author: 'Isabella R.', verified: true, rating: 5, date: '1 week ago', text: 'This is my signature scent now. The vanilla is warm without being sweet — it\'s sophisticated and sensual. Lasts all day effortlessly.', size: '50ml', helpful: 41 },
      { author: 'Chen W.',     verified: true, rating: 4, date: '2 weeks ago', text: 'Beautiful fragrance. The dry-down reveals the sandalwood beautifully. Bought the 100ml — it\'s a daily staple now.', size: '100ml', helpful: 28 },
      { author: 'Amara J.',   verified: true, rating: 5, date: '3 weeks ago', text: 'I have received more compliments wearing this than anything else. Magnificent.', size: '50ml', helpful: 35 }
    ],
    badge: 'new',
    isNew: true,
    isBestseller: false
  },

  {
    id: 'fragrance-002',
    name: 'Rose & Oud Eau de Parfum',
    category: 'fragrances',
    subcategory: 'floral',
    brand: 'Aurevia',
    price: 105.00,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviewCount: 114,
    colors: null,
    sizes: ['30ml', '50ml', '100ml'],
    stock: { '30ml': 20, '50ml': 15, '100ml': 8 },
    images: [
      'images/fragrances/rose-1.jpg',
      'images/fragrances/rose-2.jpg'
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
    shipping: { standard: { days: '5–7 business days', price: 'Free on orders over $50' }, express: { days: '2–3 business days', price: '$12.99' }, nextDay: { days: '1 business day', price: '$24.99' } },
    reviews: [
      { author: 'Layla A.', verified: true, rating: 5, date: '2 days ago', text: 'I have no words. This fragrance is pure art. The rose and oud combination is intoxicating. My most-complimented scent.', size: '50ml', helpful: 55 },
      { author: 'Riya S.',  verified: true, rating: 5, date: '4 days ago', text: 'The longevity is exceptional — I sprayed it in the morning and could still smell it the next day. Extraordinary.', size: '100ml', helpful: 43 }
    ],
    badge: 'bestseller',
    isNew: false,
    isBestseller: true
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
