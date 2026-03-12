'use strict';

/* ─── Product Filtering ─── */
function filterProducts(category) {
  const products = document.querySelectorAll('.product-card');
  products.forEach(product => {
    if (category === 'all' || product.dataset.category === category) {
      product.style.display = '';
      product.style.opacity = '0';
      product.style.transform = 'translateY(12px)';
      requestAnimationFrame(() => {
        product.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        product.style.opacity = '1';
        product.style.transform = 'translateY(0)';
      });
    } else {
      product.style.display = 'none';
    }
  });

  updateResultsCount();
}

/* ─── Filter Button Handlers ─── */
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      filterProducts(this.dataset.category);
    });
  });
});

/* ─── Product Sorting ─── */
function sortProducts(criteria) {
  const grid = document.querySelector('.product-grid');
  if (!grid) return;
  const products = Array.from(grid.querySelectorAll('.product-card'));

  products.sort((a, b) => {
    const priceA = parseFloat(a.dataset.price) || 0;
    const priceB = parseFloat(b.dataset.price) || 0;
    const dateA  = parseInt(a.dataset.date) || 0;
    const dateB  = parseInt(b.dataset.date) || 0;

    switch (criteria) {
      case 'price-low':  return priceA - priceB;
      case 'price-high': return priceB - priceA;
      case 'newest':     return dateB - dateA;
      default:           return 0;
    }
  });

  products.forEach(product => grid.appendChild(product));
}

/* Sort select handler */
document.addEventListener('DOMContentLoaded', () => {
  const sortSelect = document.querySelector('.sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', function () {
      sortProducts(this.value);
    });
  }
});

/* ─── Results Count Update ─── */
function updateResultsCount() {
  const countEl = document.querySelector('.results-count');
  if (!countEl) return;
  const visible = document.querySelectorAll('.product-card[style*="display: none"]').length;
  const total   = document.querySelectorAll('.product-card').length;
  const showing = total - visible;
  countEl.textContent = `Showing ${showing} of ${total} products`;
}

/* ─── Tab Switching (for pages with tabs) ─── */
document.addEventListener('DOMContentLoaded', () => {
  const tabBtns = document.querySelectorAll('.tab-btn, .cat-tab');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const tabGroup = this.closest('section') || this.closest('.tab-buttons')?.parentElement;
      if (!tabGroup) return;

      /* Deactivate siblings */
      const siblings = this.parentElement.querySelectorAll('.tab-btn, .cat-tab');
      siblings.forEach(s => s.classList.remove('active'));
      this.classList.add('active');

      /* Show matching tab content */
      const tabId = this.dataset.tab || this.dataset.category;
      const contents = tabGroup.querySelectorAll('.tab-content');
      contents.forEach(c => c.classList.remove('active'));

      const target = tabGroup.querySelector('#' + tabId + '-tab') ||
                     tabGroup.querySelector('[data-tab-content="' + tabId + '"]');
      if (target) target.classList.add('active');
    });
  });
});
