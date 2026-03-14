'use strict';

/* ═══════════════════════════════════════════
   TRENDING.JS — Aurevia E-Commerce
   Trending page functionality
   ═══════════════════════════════════════════ */

// ═══ Top 7 Data with Images ═══
const top7Data = [
  { rank: 1, name: "Elegant Summer Dress", category: "Clothing", price: 7387, views: 2340, badge: "hot", image: "images/cloths/Dresses/dress1.jpeg" },
  { rank: 2, name: "Silk Wrap Dress", category: "Clothing", price: 129, views: 1890, badge: "bestseller", image: "images/cloths/Dresses/dress2.jpeg" },
  { rank: 3, name: "Linen Blouse", category: "Clothing", price: 4897, views: 1560, badge: "rising", image: "images/cloths/Tops & T-shirts/dress1.jpeg" },
  { rank: 4, name: "Tailored Trousers", category: "Clothing", price: 6557, views: 1420, badge: "hot", image: "images/cloths/Bottoms/derss1.jpeg" },
  { rank: 5, name: "Cashmere Hoodie", category: "Clothing", price: 7885, views: 1280, badge: "bestseller", image: "images/cloths/Hoodies and Sweatshirts/dress1.jpeg" },
  { rank: 6, name: "Classic Leather Tote", category: "Bags", price: 10707, views: 1150, badge: "rising", image: "images/bags/tote bags/tote1.jpeg" },
  { rank: 7, name: "Mini Crossbody Bag", category: "Bags", price: 7387, views: 1080, badge: "bestseller", image: "images/bags/sling bags/sling1.jpeg" }
];

const trendingByCategory = {
  clothing: [
    { name: "Elegant Summer Dress", price: 7387, image: "images/cloths/Dresses/dress1.jpeg" },
    { name: "Silk Wrap Dress", price: 129, image: "images/cloths/Dresses/dress2.jpeg" },
    { name: "Linen Blouse", price: 4897, image: "images/cloths/Tops & T-shirts/dress1.jpeg" },
    { name: "Tailored Trousers", price: 6557, image: "images/cloths/Bottoms/derss1.jpeg" },
    { name: "Cashmere Hoodie", price: 7885, image: "images/cloths/Hoodies and Sweatshirts/dress1.jpeg" }
  ],
  bags: [
    { name: "Classic Leather Tote", price: 10707, image: "images/bags/tote bags/tote1.jpeg" },
    { name: "Mini Crossbody Bag", price: 7387, image: "images/bags/sling bags/sling1.jpeg" },
    { name: "Evening Clutch", price: 6566, image: "images/bags/clutch bags/clutch3.jpeg" },
    { name: "Quilted Mini Bag", price: 8200, image: "images/bags/clutch bags/clutch4.jpeg" },
    { name: "Weekender Duffle", price: 12500, image: "images/bags/tote bags/tote3.jpeg" }
  ],
  fragrances: [
    { name: "Vanilla Dream", price: 4599 },
    { name: "Oud Collection", price: 5999 },
    { name: "Floral Essence", price: 3899 },
    { name: "Citrus Blend", price: 3299 },
    { name: "Amber Nights", price: 5299 }
  ],
  gifts: [
    { name: "Luxury Gift Set", price: 7999 },
    { name: "Premium Hamper", price: 9999 },
    { name: "Self Care Box", price: 4599 },
    { name: "Accessory Bundle", price: 3299 },
    { name: "Mini Surprise Box", price: 1999 }
  ]
};

const mostLovedData = [
  { name: "Elegant Summer Dress", viewers: 23, sold: 156, popularity: 95, image: "images/cloths/Dresses/dress1.jpeg" },
  { name: "Silk Wrap Dress", viewers: 18, sold: 134, popularity: 88, image: "images/cloths/Dresses/dress2.jpeg" },
  { name: "Classic Leather Tote", viewers: 31, sold: 128, popularity: 92, image: "images/bags/tote bags/tote1.jpeg" },
  { name: "Cashmere Hoodie", viewers: 15, sold: 98, popularity: 82, image: "images/cloths/Hoodies and Sweatshirts/dress1.jpeg" },
  { name: "Luxury Gift Set", viewers: 12, sold: 87, popularity: 78 },
  { name: "Oud Collection", viewers: 19, sold: 76, popularity: 85 }
];

// ═══ Get Image HTML ═══
function getImageHtml(name, imagePath) {
  if (imagePath) {
    return `<img src="${imagePath}" alt="${name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0;z-index:2;" onerror="this.style.display='none';">`;
  }
  return '';
}

// ═══ Placeholder HTML ═══
function getPlaceholderHtml(name) {
  const shortName = name.split(' ').slice(0, 2).join(' ');
  return `<div class="product-placeholder" style="width:100%;height:100%;background:linear-gradient(135deg, #FFF0D1 0%, #E8D9B8 100%);display:flex;align-items:center;justify-content:center;color:#795757;font-family:'Montserrat',sans-serif;font-size:0.85rem;text-align:center;padding:15px;position:absolute;top:0;left:0;z-index:1;"><span>${shortName}</span></div>`;
}

function getBadgeText(badge) {
  const badges = {
    hot: '🔥 Hot',
    rising: '↑ Rising',
    bestseller: '⭐ Bestseller'
  };
  return badges[badge] || badge;
}

function showAddedFeedback(btn) {
  const originalText = btn.textContent;
  btn.textContent = 'Added!';
  btn.style.background = '#27ae60';
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
  }, 1500);
}

// ═══ Render Top 7 Ranking List ═══
function renderRankingList() {
  const container = document.getElementById('rankingList');
  if (!container) return;

  container.innerHTML = top7Data.map(item => `
    <div class="ranking-card" data-rank="${item.rank}">
      <span class="rank-number">${String(item.rank).padStart(2, '0')}</span>
      <div class="rank-image" style="position:relative; overflow:hidden;">
        ${getImageHtml(item.name, item.image)}
        ${getPlaceholderHtml(item.name)}
        ${item.badge ? `<span class="trend-badge ${item.badge}">${getBadgeText(item.badge)}</span>` : ''}
      </div>
      <div class="rank-info">
        <span class="rank-category">${item.category}</span>
        <h3 class="rank-name">${item.name}</h3>
        <div class="rank-price">₹${item.price.toLocaleString()}</div>
        <div class="rank-stats">${item.views.toLocaleString()} views today</div>
        <button class="quick-add-btn" data-product="${item.name}">Quick Add</button>
      </div>
    </div>
  `).join('');

  // Add click handlers
  container.querySelectorAll('.quick-add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productName = btn.dataset.product;
      const product = top7Data.find(p => p.name === productName);
      if (product && typeof addToCart === 'function') {
        addToCart({
          id: product.name.toLowerCase().replace(/\s+/g, '-'),
          name: product.name,
          price: product.price,
          image: product.image || '',
          quantity: 1
        });
        showAddedFeedback(btn);
      }
    });
  });
}

// ═══ Render Trending by Category ═══
function renderTrendingCategory(category) {
  const container = document.getElementById(`trending-${category}-grid`);
  if (!container) return;

  const products = trendingByCategory[category] || [];

  container.innerHTML = products.map(product => `
    <div class="product-card">
      <div class="product-image" style="position:relative; aspect-ratio:3/4; overflow:hidden;">
        ${getImageHtml(product.name, product.image)}
        ${getPlaceholderHtml(product.name)}
        <div class="product-overlay">
          <button class="quick-view-btn">Quick View</button>
        </div>
        <button class="wishlist-btn" aria-label="Add to Wishlist">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price">
          <span class="current-price">₹${product.price.toLocaleString()}</span>
        </div>
        <button class="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  `).join('');
}

// ═══ Render Most Loved Section ═══
function renderMostLoved() {
  const container = document.getElementById('lovedCarousel');
  if (!container) return;

  container.innerHTML = mostLovedData.map(item => `
    <div class="loved-card">
      <div class="live-viewers">
        <span class="pulse-dot"></span>
        <span>${item.viewers} people viewing</span>
      </div>
      <div class="loved-image" style="position:relative; height:280px; overflow:hidden;">
        ${getImageHtml(item.name, item.image)}
        ${getPlaceholderHtml(item.name)}
      </div>
      <div class="loved-info">
        <h3>${item.name}</h3>
        <div class="popularity-bar">
          <div class="bar-fill" style="width: ${item.popularity}%"></div>
        </div>
        <span class="sold-count">${item.sold} sold this week</span>
      </div>
    </div>
  `).join('');

  // Animate bars
  setTimeout(() => {
    container.querySelectorAll('.bar-fill').forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => bar.style.width = width, 100);
    });
  }, 300);
}

// ═══ Tab Switching ═══
function initCategoryTabs() {
  const tabs = document.querySelectorAll('.cat-tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.category;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      contents.forEach(c => c.classList.remove('active'));
      const target = document.getElementById(`${category}-trending`);
      if (target) target.classList.add('active');

      renderTrendingCategory(category);
    });
  });

  renderTrendingCategory('clothing');
}

// ═══ Initialize ═══
document.addEventListener('DOMContentLoaded', () => {
  renderRankingList();
  initCategoryTabs();
  renderMostLoved();
});
