'use strict';

/* ═══════════════════════════════════════════
   TRENDING.JS — Aurevia E-Commerce
   Trending page functionality
   ═══════════════════════════════════════════ */

// ═══ Sample Trending Data ═══
const top20Data = [
  { rank: 1, name: "Vanilla Dream Eau de Parfum", category: "Fragrance", price: 89, views: 2340, badge: "hot", image: "fragrance-1" },
  { rank: 2, name: "Silk Midi Dress - Cream", category: "Clothing", price: 165, views: 1890, badge: "bestseller", image: "dress-1" },
  { rank: 3, name: "Leather Crossbody Bag", category: "Bags", price: 185, views: 1560, badge: "rising", image: "bag-1" },
  { rank: 4, name: "Oud & Spice Collection", category: "Fragrance", price: 120, views: 1420, badge: "hot", image: "fragrance-2" },
  { rank: 5, name: "Cashmere Blend Sweater", category: "Clothing", price: 145, views: 1280, badge: "bestseller", image: "sweater-1" },
  { rank: 6, name: "The Essential Gift Set", category: "Gifts", price: 129, views: 1150, badge: "rising", image: "gift-1" },
  { rank: 7, name: "Tote Bag - Canvas", category: "Bags", price: 120, views: 1080, badge: "bestseller", image: "bag-2" },
  { rank: 8, name: "Floral Silk Scarf", category: "Clothing", price: 75, views: 980, badge: "rising", image: "scarf-1" },
  { rank: 9, name: "Arabic Night Perfume", category: "Fragrance", price: 150, views: 920, badge: "hot", image: "fragrance-3" },
  { rank: 10, name: "Weekend Travel Set", category: "Gifts", price: 199, views: 890, badge: "bestseller", image: "gift-2" },
  { rank: 11, name: "Linen Blazer - Sand", category: "Clothing", price: 195, views: 840, badge: "rising", image: "blazer-1" },
  { rank: 12, name: "Sling Bag - Mini", category: "Bags", price: 95, views: 780, badge: "rising", image: "bag-3" },
  { rank: 13, name: "Custom Fragrance Kit", category: "Gifts", price: 79, views: 720, badge: "bestseller", image: "gift-3" },
  { rank: 14, name: "Cotton Wide-Leg Trousers", category: "Clothing", price: 110, views: 680, badge: "rising", image: "bottom-1" },
  { rank: 15, name: "Laptop Sleeve - Leather", category: "Bags", price: 135, views: 640, badge: "bestseller", image: "bag-4" },
  { rank: 16, name: "Tropical Breeze Cologne", category: "Fragrance", price: 85, views: 590, badge: "hot", image: "fragrance-4" },
  { rank: 17, name: "Embroidered Tote", category: "Bags", price: 145, views: 560, badge: "rising", image: "bag-5" },
  { rank: 18, name: "Luxury Bath Set", category: "Gifts", price: 89, views: 520, badge: "bestseller", image: "gift-4" },
  { rank: 19, name: "Wool Blend Coat", category: "Clothing", price: 285, views: 480, badge: "rising", image: "coat-1" },
  { rank: 20, name: "Mystery Surprise Box", category: "Gifts", price: 59, views: 450, badge: "hot", image: "gift-5" }
];

const trendingByCategory = {
  clothing: [
    { name: "Silk Midi Dress", price: 165, image: "dress-1" },
    { name: "Cashmere Sweater", price: 145, image: "sweater-1" },
    { name: "Linen Blazer", price: 195, image: "blazer-1" },
    { name: "Wide-Leg Trousers", price: 110, image: "bottom-1" },
    { name: "Wool Coat", price: 285, image: "coat-1" }
  ],
  bags: [
    { name: "Leather Crossbody", price: 185, image: "bag-1" },
    { name: "Canvas Tote", price: 120, image: "bag-2" },
    { name: "Mini Sling", price: 95, image: "bag-3" },
    { name: "Laptop Sleeve", price: 135, image: "bag-4" },
    { name: "Embroidered Tote", price: 145, image: "bag-5" }
  ],
  fragrances: [
    { name: "Vanilla Dream", price: 89, image: "fragrance-1" },
    { name: "Oud & Spice", price: 120, image: "fragrance-2" },
    { name: "Arabic Night", price: 150, image: "fragrance-3" },
    { name: "Tropical Breeze", price: 85, image: "fragrance-4" },
    { name: "Cinnamon Woods", price: 95, image: "fragrance-5" }
  ],
  gifts: [
    { name: "Essential Set", price: 129, image: "gift-1" },
    { name: "Travel Set", price: 199, image: "gift-2" },
    { name: "Fragrance Kit", price: 79, image: "gift-3" },
    { name: "Bath Set", price: 89, image: "gift-4" },
    { name: "Mystery Box", price: 59, image: "gift-5" }
  ]
};

const mostLovedData = [
  { name: "Vanilla Dream Eau de Parfum", viewers: 23, sold: 156, popularity: 95, image: "fragrance-1" },
  { name: "Silk Midi Dress - Cream", viewers: 18, sold: 134, popularity: 88, image: "dress-1" },
  { name: "Leather Crossbody Bag", viewers: 31, sold: 128, popularity: 92, image: "bag-1" },
  { name: "Cashmere Blend Sweater", viewers: 15, sold: 98, popularity: 82, image: "sweater-1" },
  { name: "The Essential Gift Set", viewers: 12, sold: 87, popularity: 78, image: "gift-1" },
  { name: "Oud & Spice Collection", viewers: 19, sold: 76, popularity: 85, image: "fragrance-2" }
];

// ═══ Render Top 20 Ranking List ═══
function renderRankingList() {
  const container = document.getElementById('rankingList');
  if (!container) return;

  container.innerHTML = top20Data.map(item => `
    <div class="ranking-card reveal" data-rank="${item.rank}">
      <span class="rank-number">${String(item.rank).padStart(2, '0')}</span>
      <div class="rank-image">
        <div class="product-placeholder ${item.image}" style="width:100%;height:100%;background:var(--cream-bg);display:flex;align-items:center;justify-content:center;color:var(--warm-brown);font-family:var(--font-secondary);font-size:0.8rem;">
          ${item.name.split(' ')[0]}
        </div>
        ${item.badge ? `<span class="trend-badge ${item.badge}">${getBadgeText(item.badge)}</span>` : ''}
      </div>
      <div class="rank-info">
        <span class="rank-category">${item.category}</span>
        <h3 class="rank-name">${item.name}</h3>
        <div class="rank-price">$${item.price.toFixed(2)}</div>
        <div class="rank-stats">${item.views.toLocaleString()} views today</div>
        <button class="quick-add-btn" data-product="${item.name}">Quick Add</button>
      </div>
    </div>
  `).join('');

  // Add click handlers for quick add
  container.querySelectorAll('.quick-add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productName = btn.dataset.product;
      const product = top20Data.find(p => p.name === productName);
      if (product) {
        addToCart({
          id: product.name.toLowerCase().replace(/\s+/g, '-'),
          name: product.name,
          price: product.price,
          image: '',
          quantity: 1
        });
        showAddedFeedback(btn);
      }
    });
  });
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

// ═══ Render Trending by Category ═══
function renderTrendingCategory(category) {
  const container = document.getElementById(`trending-${category}-grid`);
  if (!container) return;

  const products = trendingByCategory[category] || [];
  
  container.innerHTML = products.map(product => `
    <div class="product-card reveal">
      <div class="product-image">
        <div class="product-placeholder" style="width:100%;aspect-ratio:3/4;background:var(--cream-bg);display:flex;align-items:center;justify-content:center;color:var(--warm-brown);font-family:var(--font-secondary);">
          <span>${product.name}</span>
        </div>
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
          <span class="current-price">$${product.price.toFixed(2)}</span>
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
    <div class="loved-card reveal">
      <div class="live-viewers">
        <span class="pulse-dot"></span>
        <span>${item.viewers} people viewing</span>
      </div>
      <div class="product-placeholder" style="width:100%;height:280px;background:var(--cream-bg);display:flex;align-items:center;justify-content:center;color:var(--warm-brown);font-family:var(--font-secondary);">
        <span>${item.name.split(' ')[0]}</span>
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

  // Animate bars on scroll
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

      // Update tabs
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update content
      contents.forEach(c => c.classList.remove('active'));
      const target = document.getElementById(`${category}-trending`);
      if (target) target.classList.add('active');

      // Render if not already done
      renderTrendingCategory(category);
    });
  });

  // Initial render
  renderTrendingCategory('clothing');
}

// ═══ Initialize ═══
document.addEventListener('DOMContentLoaded', () => {
  renderRankingList();
  initCategoryTabs();
  renderMostLoved();
});
