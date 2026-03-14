'use strict';

/* ═══════════════════════════════════════════
   TRENDING.JS — Aurevia E-Commerce
   Trending page functionality
   ═══════════════════════════════════════════ */

// ═══ Top 7 Data with Images ═══
const top7Data = [
  { rank: 1, name: "Denim Corset Asymmetrical Dress", category: "Clothing", price: 1250, views: 2340, badge: "hot", image: "images/cloths/Dresses/dress1.jpeg" },
  { rank: 2, name: "Midnight Stardust Embellished Dress", category: "Clothing", price: 2500, views: 1890, badge: "bestseller", image: "images/cloths/Dresses/dress2.jpeg" },
  { rank: 3, name: "Noir Back Butterfly Tee", category: "Clothing", price: 1100, views: 1560, badge: "rising", image: "images/cloths/Tops & T-shirts/dress1.jpeg" },
  { rank: 4, name: "Floral Vine Flare Denim Jeans", category: "Clothing", price: 1200, views: 1420, badge: "hot", image: "images/cloths/Bottoms/derss1.jpeg" },
  { rank: 5, name: "Midnight Star Cut-Out Hoodie", category: "Clothing", price: 1250, views: 1280, badge: "bestseller", image: "images/cloths/Hoodies and Sweatshirts/dress1.jpeg" },
  { rank: 6, name: "Regal Emerald Clutch", category: "Bags", price: 1800, views: 1150, badge: "rising", image: "images/bags/tote bags/tote1.jpeg" },
  { rank: 7, name: "Button Heart Canvas Tote Bag", category: "Bags", price: 500, views: 1080, badge: "bestseller", image: "images/bags/sling bags/sling1.jpeg" }
];

const trendingByCategory = {
  clothing: [
    { name: "Denim Corset Asymmetrical Dress", price: 1250, image: "images/cloths/Dresses/dress1.jpeg" },
    { name: "Midnight Stardust Embellished Dress", price: 2500, image: "images/cloths/Dresses/dress2.jpeg" },
    { name: "Noir Back Butterfly Tee", price: 1100, image: "images/cloths/Tops & T-shirts/dress1.jpeg" },
    { name: "Floral Vine Flare Denim Jeans", price: 1200, image: "images/cloths/Bottoms/derss1.jpeg" },
    { name: "Midnight Star Cut-Out Hoodie", price: 1250, image: "images/cloths/Hoodies and Sweatshirts/dress1.jpeg" }
  ],
  bags: [
    { name: "Regal Emerald Clutch", price: 1800, image: "images/bags/tote bags/tote1.jpeg" },
    { name: "Button Heart Canvas Tote Bag", price: 500, image: "images/bags/sling bags/sling1.jpeg" },
    { name: "Pearl Cascade Clutch", price: 1000, image: "images/bags/clutch bags/clutch3.jpeg" },
    { name: "Antique Blossom Clutch", price: 1000, image: "images/bags/clutch bags/clutch4.jpeg" },
    { name: "Ivory Blossom Brocade Clutch", price: 1200, image: "images/bags/clutch bags/clutch5.jpeg" }
  ],
  fragrances: [
    { name: "Vanilla Dream EDP", price: 1133, image: "images/fragrances/sweet/vanilla.jpg" },
    { name: "Tropical Breeze EDP", price: 1070, image: "images/fragrances/woddy/Oud.jpeg" },
    { name: "Citrus Spark EDP", price: 1110, image: "images/fragrances/fresh/floral.jpeg" },
    { name: "Aquatic Mist EDP", price: 1020, image: "images/fragrances/sweet/citrus.jpg" },
    { name: "Floral Rain EDP", price: 1095, image: "images/fragrances/woddy/leather.jpeg" }
  ]
};

const mostLovedData = [
  { name: "Denim Corset Asymmetrical Dress", viewers: 23, sold: 156, popularity: 95, image: "images/cloths/Dresses/dress1.jpeg" },
  { name: "Midnight Stardust Embellished Dress", viewers: 18, sold: 134, popularity: 88, image: "images/cloths/Dresses/dress2.jpeg" },
  { name: "Regal Emerald Clutch", viewers: 31, sold: 128, popularity: 92, image: "images/bags/tote bags/tote1.jpeg" },
  { name: "Midnight Star Cut-Out Hoodie", viewers: 15, sold: 98, popularity: 82, image: "images/cloths/Hoodies and Sweatshirts/dress1.jpeg" },
  { name: "Vanilla Dream EDP", viewers: 19, sold: 76, popularity: 85, image: "images/fragrances/woddy/Oud.jpeg" }
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
        <button class="quick-add-btn buy-now-btn" data-product="${item.name}">Buy Now</button>
      </div>
    </div>
  `).join('');

  // Add click handlers for Buy Now buttons
  container.querySelectorAll('.buy-now-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productName = btn.dataset.product;
      const id = productName.toLowerCase().replace(/\s+/g, '-');
      window.location.href = `product.html?id=${encodeURIComponent(id)}`;
    });
  });
}

// ═══ Render Trending by Category ═══
function renderTrendingCategory(category) {
  const container = document.getElementById(`trending-${category}-grid`);
  if (!container) return;

  const products = trendingByCategory[category] || [];

  container.innerHTML = products.map(product => `
    <div class="product-card" data-id="${product.name.toLowerCase().replace(/\s+/g, '-')}">
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
        <button class="add-to-cart-btn buy-now-btn">Buy Now</button>
      </div>
    </div>
  `).join('');
  
  // Attach Buy Now click handlers to dynamically rendered buttons
  container.querySelectorAll('.buy-now-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const card = btn.closest('.product-card');
      const id = card?.dataset.id;
      if (id) {
        window.location.href = `product.html?id=${encodeURIComponent(id)}`;
      }
    });
  });
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
