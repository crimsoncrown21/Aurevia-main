'use strict';

/* =============================================
   PRODUCT.JS — Aurevia E-Commerce
   Product Description Page Logic
   ============================================= */

/* ─── State ─────────────────────────────────── */
let currentProduct  = null;
let currentImageIdx = 0;
let selectedColor   = null;
let selectedSize    = null;
let quantity        = 1;
const MIN_QTY = 1, MAX_QTY = 10;

/* ─── DOM refs (set after DOMContentLoaded) ── */
let mainImg, mainPh, thumbBtns, colorLabel, sizeLabel, qtyInput, minusBtn, plusBtn, addCartBtn, wishlistBtn;

/* ─── Init ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const params    = new URLSearchParams(window.location.search);
  const productId = params.get('id') || 'dress-001';

  currentProduct = getProductById(productId);

  if (!currentProduct) {
    document.querySelector('.product-page-main').innerHTML =
      '<div style="text-align:center;padding:120px 20px;font-family:Montserrat,sans-serif;color:#795757;"><h2>Product not found</h2><a href="index.html" style="color:#3B3030;">Return Home</a></div>';
    return;
  }

  buildPage(currentProduct);
  initGallery();
  initColorOptions();
  initSizeOptions();
  initQuantity();
  initActionButtons();
  initTabs();
  renderRelated();
  updateBreadcrumb();
  updateMetaTitle();

  /* Pre-select first color & size */
  if (currentProduct.colors?.length) {
    const firstSwatch = document.querySelector('.color-swatch-btn');
    if (firstSwatch) firstSwatch.click();
  }
  if (currentProduct.sizes?.length) {
    const firstSize = document.querySelector('.size-btn:not(:disabled)');
    if (firstSize) firstSize.click();
  }
});

/* ─── Build Page Content ─────────────────────── */
function buildPage(p) {
  /* Gallery main + thumbs */
  buildGalleryHTML(p);

  /* Product name / meta */
  const nameEl = document.getElementById('prodName');
  const metaEl = document.getElementById('prodMeta');
  if (nameEl) nameEl.textContent = p.name;
  if (metaEl) metaEl.textContent = `${getCategoryName(p.category)} · ${p.brand}`;

  /* Stars */
  renderStars(p.rating, document.getElementById('starsContainer'));
  const rcEl = document.getElementById('reviewCountLink');
  if (rcEl) rcEl.textContent = `(${p.reviewCount} reviews)`;

  /* Price */
  document.getElementById('currentPrice').textContent = `$${p.price.toFixed(2)}`;
  const origEl = document.getElementById('originalPrice');
  const discEl = document.getElementById('discountBadge');
  if (p.originalPrice) {
    if (origEl) { origEl.textContent = `$${p.originalPrice.toFixed(2)}`; origEl.style.display = ''; }
    if (discEl) { discEl.textContent = `-${p.discount}%`; discEl.style.display = ''; }
  } else {
    if (origEl) origEl.style.display = 'none';
    if (discEl) discEl.style.display = 'none';
  }

  /* Badges */
  const badgeWrap = document.getElementById('badgeOverlay');
  if (badgeWrap) {
    let html = '';
    if (p.badge === 'sale')       html += `<span class="prod-badge prod-badge--sale">-${p.discount}%</span>`;
    if (p.badge === 'new')        html += `<span class="prod-badge prod-badge--new">New</span>`;
    if (p.badge === 'bestseller') html += `<span class="prod-badge prod-badge--bestseller">Bestseller</span>`;
    badgeWrap.innerHTML = html;
  }

  /* Color options */
  const colorWrap = document.getElementById('colorOptions');
  const colorGroup = document.getElementById('colorGroup');
  if (!p.colors && colorGroup) { colorGroup.style.display = 'none'; }
  if (p.colors && colorWrap) {
    colorWrap.innerHTML = p.colors.map(c =>
      `<button class="color-swatch-btn" data-color="${c.name}" data-hex="${c.hex}"
        style="background:${c.hex}" aria-label="${c.name}" title="${c.name}"></button>`
    ).join('');
  }

  /* Size options */
  const sizeWrap  = document.getElementById('sizeOptions');
  const sizeGroup = document.getElementById('sizeGroup');
  if (!p.sizes && sizeGroup) { sizeGroup.style.display = 'none'; }
  if (p.sizes && sizeWrap) {
    sizeWrap.innerHTML = p.sizes.map(s => {
      const inStock = (p.stock[s] || 0) > 0;
      return `<button class="size-btn${inStock ? '' : ' out-of-stock'}" data-size="${s}"${inStock ? '' : ' disabled'}>${s}</button>`;
    }).join('');
  }

  /* Tab: Description */
  const descEl = document.getElementById('tabDescription');
  if (descEl) {
    const features = (p.keyFeatures || []).map(f => `<li>${f}</li>`).join('');
    descEl.innerHTML = `
      <h2 class="tab-heading">Product Description</h2>
      <div class="tab-body">
        <p>${p.description}</p>
        ${features ? `<p class="tab-subheading">Key Features</p><ul>${features}</ul>` : ''}
        ${p.stylingTips ? `<p class="tab-subheading">Styling Tips</p><p>${p.stylingTips}</p>` : ''}
      </div>`;
  }

  /* Tab: Details */
  const detailsEl = document.getElementById('tabDetails');
  if (detailsEl && p.details) {
    const rows = Object.entries(p.details).map(([k, v]) =>
      `<tr><td class="spec-label">${k}</td><td class="spec-value">${v}</td></tr>`).join('');
    const mRows = p.measurements && Object.keys(p.measurements).length
      ? Object.entries(p.measurements).map(([k, v]) =>
          `<tr><td class="spec-label">${k}</td><td class="spec-value">${v}</td></tr>`).join('')
      : '';
    detailsEl.innerHTML = `
      <h2 class="tab-heading">Product Specifications</h2>
      <table class="spec-table">${rows}</table>
      ${mRows ? `<h3 class="tab-subheading" style="margin-top:28px">Measurements</h3><table class="spec-table">${mRows}</table>` : ''}`;
  }

  /* Tab: Reviews */
  const reviewsEl = document.getElementById('tabReviews');
  if (reviewsEl) {
    const revCards = (p.reviews || []).map(r => {
      const metaParts = [];
      if (r.size)  metaParts.push(`Size: ${r.size}`);
      if (r.color) metaParts.push(`Colour: ${r.color}`);
      return `
        <div class="review-card">
          <div class="review-top">
            <div class="stars">${renderStarsHTML(r.rating)}</div>
            <span class="reviewer-name">${r.author}</span>
            ${r.verified ? '<span class="verified-badge">✓ Verified Purchase</span>' : ''}
            <span class="review-date">· ${r.date}</span>
          </div>
          <p class="review-text">"${r.text}"</p>
          ${metaParts.length ? `<p class="review-meta">${metaParts.join(' · ')}</p>` : ''}
          <div class="helpful-btns">
            <span class="helpful-text">Was this helpful?</span>
            <button class="helpful-btn">Yes (${r.helpful})</button>
            <button class="helpful-btn">No (0)</button>
          </div>
        </div>`;
    }).join('');
    reviewsEl.innerHTML = `
      <div class="reviews-header-row">
        <div class="reviews-avg">
          <div class="stars">${renderStarsHTML(p.rating)}</div>
          <span class="avg-score">${p.rating.toFixed(1)}</span>
          <span style="font-family:Montserrat,sans-serif;font-size:0.85rem;color:#795757;">${p.reviewCount} reviews</span>
        </div>
        <button class="write-review-btn">Write a Review</button>
      </div>
      <hr class="prod-divider">
      ${revCards || '<p style="font-family:Montserrat,sans-serif;color:#795757;">No reviews yet. Be the first!</p>'}`;
  }

  /* Tab: Shipping */
  const shippingEl = document.getElementById('tabShipping');
  if (shippingEl && p.shipping) {
    const s = p.shipping;
    shippingEl.innerHTML = `
      <h2 class="tab-heading">Shipping Information</h2>
      <table class="shipping-table">
        <thead><tr><th>Method</th><th>Delivery Time</th><th>Cost</th></tr></thead>
        <tbody>
          <tr><td>Standard Shipping</td><td>${s.standard.days}</td><td>${s.standard.price}</td></tr>
          <tr><td>Express Shipping</td><td>${s.express.days}</td><td>${s.express.price}</td></tr>
          <tr><td>Next Day Delivery</td><td>${s.nextDay.days}</td><td>${s.nextDay.price}</td></tr>
        </tbody>
      </table>
      <h2 class="tab-heading" style="margin-top:28px">Returns &amp; Exchanges</h2>
      <ul class="returns-list">
        <li>Free returns within 30 days of purchase</li>
        <li>Items must be unworn with original tags attached</li>
        <li>Fragrances must be unopened for return eligibility</li>
        <li>Sale items are final sale and cannot be returned</li>
        <li>Return shipping label provided for defective items</li>
      </ul>
      <button class="start-return-btn">Start a Return</button>`;
  }

  /* Tab: Customization */
  const customizationEl = document.getElementById('tabCustomization');
  if (customizationEl) {
    if (p.customization && p.customization.available && p.customization.options.length > 0) {
      const options = p.customization.options.map(opt => `
        <div class="customization-option" data-type="${opt.type}">
          <div class="customization-option-header">
            <div class="customization-option-info">
              <h3 class="customization-option-name">${opt.name}</h3>
              <p class="customization-option-desc">${opt.description}</p>
            </div>
            <div class="customization-option-price">${opt.price === 0 ? 'Free' : '+$' + opt.price.toFixed(2)}</div>
          </div>
          <label class="customization-checkbox">
            <input type="checkbox" name="customization" value="${opt.type}" data-price="${opt.price}">
            <span class="checkmark"></span>
            <span class="label-text">Add this customization</span>
          </label>
        </div>
      `).join('');
      
      customizationEl.innerHTML = `
        <h2 class="tab-heading">Customize Your ${p.name}</h2>
        <p class="customization-intro">Make it uniquely yours with our premium customization options. Each piece is carefully handcrafted to your specifications.</p>
        <div class="customization-options-grid">
          ${options}
        </div>
        <div class="customization-note">
          <p><strong>Note:</strong> Customized items require an additional 3-5 business days for processing. Personalized items cannot be returned unless defective.</p>
        </div>`;
      
      /* Add event listeners to checkboxes */
      setTimeout(() => {
        customizationEl.querySelectorAll('input[type="checkbox"]').forEach(cb => {
          cb.addEventListener('change', updateCustomizationTotal);
        });
      }, 0);
    } else {
      customizationEl.innerHTML = `
        <h2 class="tab-heading">Customization</h2>
        <p class="no-customization">This product is not eligible for customization. Browse our <a href="customise.html">Customise</a> page for bespoke options.</p>`;
    }
  }

  /* Update tab Review count label */
  const tabRevBtn = document.querySelector('[data-tab="reviews"]');
  if (tabRevBtn) tabRevBtn.textContent = `Reviews (${p.reviewCount})`;
}

/* ─── Gallery ─────────────────────────────────── */
function buildGalleryHTML(p) {
  const wrap    = document.getElementById('mainImageWrap');
  const thumbGallery = document.getElementById('thumbnailGallery');
  if (!wrap) return;

  /* Use actual product images */
  const images = p.images || [];
  
  /* Main image */
  wrap.innerHTML = `
    <div id="badgeOverlay" class="product-badge-overlay"></div>
    <div class="gallery-main-image" id="mainPlaceholder">
      <img id="mainProductImg" class="main-product-img" src="${images[0] || ''}" alt="${p.name}" style="display:block;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="gallery-fallback" style="display:none;">${p.name.split(' ').slice(0,2).join(' ')}</div>
    </div>`;

  /* Thumbnails */
  if (thumbGallery && images.length > 0) {
    thumbGallery.innerHTML = images.map((src, i) =>
      `<button class="thumb-btn${i === 0 ? ' active' : ''}" data-index="${i}" data-src="${src}" aria-label="View image ${i+1}">
        <img src="${src}" alt="Thumbnail ${i+1}" class="thumb-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="thumb-fallback" style="display:none;">${i+1}</div>
      </button>`
    ).join('');
  } else if (thumbGallery) {
    thumbGallery.innerHTML = '';
  }
}

function initGallery() {
  thumbBtns = document.querySelectorAll('.thumb-btn');
  mainImg   = document.getElementById('mainProductImg');
  mainPh    = document.getElementById('mainPlaceholder');

  thumbBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index);
      changeImage(idx);
    });
  });

  /* Keyboard nav */
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') changeImage(Math.max(0, currentImageIdx - 1));
    if (e.key === 'ArrowRight') changeImage(Math.min((currentProduct?.images?.length || 1) - 1, currentImageIdx + 1));
  });
}

function changeImage(idx) {
  currentImageIdx = idx;
  thumbBtns.forEach((b, i) => b.classList.toggle('active', i === idx));
  
  /* Update main image with actual src */
  if (mainImg && thumbBtns[idx]) {
    const newSrc = thumbBtns[idx].dataset.src;
    if (newSrc) {
      mainImg.style.opacity = '0';
      setTimeout(() => {
        mainImg.src = newSrc;
        mainImg.style.display = 'block';
        mainImg.style.opacity = '1';
      }, 180);
    }
  }
}

/* ─── Color / Size ───────────────────────────── */
function initColorOptions() {
  colorLabel = document.getElementById('selectedColorLabel');
  document.getElementById('colorOptions')?.addEventListener('click', e => {
    const btn = e.target.closest('.color-swatch-btn');
    if (!btn) return;
    document.querySelectorAll('.color-swatch-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedColor = btn.dataset.color;
    if (colorLabel) colorLabel.textContent = selectedColor;
  });
}

function initSizeOptions() {
  sizeLabel = document.getElementById('selectedSizeLabel');
  document.getElementById('sizeOptions')?.addEventListener('click', e => {
    const btn = e.target.closest('.size-btn:not(:disabled)');
    if (!btn) return;
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedSize = btn.dataset.size;
    if (sizeLabel) sizeLabel.textContent = selectedSize;
  });
}

/* ─── Quantity ───────────────────────────────── */
function initQuantity() {
  qtyInput  = document.getElementById('qtyInput');
  minusBtn  = document.getElementById('minusBtn');
  plusBtn   = document.getElementById('plusBtn');
  updateQtyUI();

  minusBtn?.addEventListener('click', () => { if (quantity > MIN_QTY) { quantity--; updateQtyUI(); } });
  plusBtn?.addEventListener('click',  () => { if (quantity < MAX_QTY) { quantity++; updateQtyUI(); } });
}

function updateQtyUI() {
  if (qtyInput) qtyInput.value = quantity;
  if (minusBtn) minusBtn.disabled = quantity <= MIN_QTY;
  if (plusBtn)  plusBtn.disabled  = quantity >= MAX_QTY;
}

/* ─── Action Buttons ─────────────────────────── */
function initActionButtons() {
  addCartBtn  = document.getElementById('addToCartBtn');
  wishlistBtn = document.getElementById('wishlistBtn');

  addCartBtn?.addEventListener('click', handleAddToCart);
  wishlistBtn?.addEventListener('click', handleWishlist);

  /* Check if already wishlisted */
  const wl = JSON.parse(localStorage.getItem('aurevia_wishlist') || '[]');
  if (wl.includes(currentProduct?.id) && wishlistBtn) {
    wishlistBtn.classList.add('wishlisted');
    wishlistBtn.querySelector('.heart-icon').textContent = '♥';
  }
}

function handleAddToCart() {
  const needsColor = currentProduct.colors && currentProduct.colors.length > 0;
  const needsSize  = currentProduct.sizes  && currentProduct.sizes.length  > 0;

  if (needsColor && !selectedColor) {
    showGlobalToast('Please select a colour', 'error'); return;
  }
  if (needsSize && !selectedSize) {
    showGlobalToast('Please select a size', 'error'); return;
  }

  addToCart({
    id:       currentProduct.id,
    name:     currentProduct.name,
    price:    currentProduct.price,
    image:    currentProduct.images?.[0] || '',
    quantity: quantity,
    color:    selectedColor  || '',
    size:     selectedSize   || '',
    category: currentProduct.category
  });

  /* Button success state */
  if (addCartBtn) {
    const original = addCartBtn.innerHTML;
    addCartBtn.innerHTML = '✓ Added!';
    addCartBtn.classList.add('success');
    addCartBtn.disabled = true;
    setTimeout(() => {
      addCartBtn.innerHTML  = original;
      addCartBtn.classList.remove('success');
      addCartBtn.disabled   = false;
    }, 2200);
  }

  showGlobalToast(`${currentProduct.name} added to cart!`, 'success');
}

function handleWishlist() {
  let wl = JSON.parse(localStorage.getItem('aurevia_wishlist') || '[]');
  const idx = wl.indexOf(currentProduct.id);
  if (idx > -1) {
    wl.splice(idx, 1);
    wishlistBtn.classList.remove('wishlisted');
    wishlistBtn.querySelector('.heart-icon').textContent = '♡';
    showGlobalToast('Removed from wishlist', 'info');
  } else {
    wl.push(currentProduct.id);
    wishlistBtn.classList.add('wishlisted');
    wishlistBtn.querySelector('.heart-icon').textContent = '♥';
    showGlobalToast('Added to wishlist!', 'success');
  }
  localStorage.setItem('aurevia_wishlist', JSON.stringify(wl));
}

/* ─── Tabs ───────────────────────────────────── */
function initTabs() {
  const tabBtns    = document.querySelectorAll('.tab-nav-btn');
  const tabPanels  = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      tabPanels.forEach(p => p.classList.remove('active'));
      const target = document.getElementById(btn.dataset.tab + 'Panel');
      if (target) target.classList.add('active');
    });
  });

  /* Review count link scrolls to reviews tab */
  document.getElementById('reviewCountLink')?.addEventListener('click', () => {
    document.querySelector('[data-tab="reviews"]')?.click();
    document.querySelector('.product-tabs-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

/* ─── Related Products ───────────────────────── */
function renderRelated() {
  const grid = document.getElementById('relatedGrid');
  if (!grid || !currentProduct) return;

  const related = getRelatedProducts(currentProduct, 4);
  if (!related.length) {
    document.querySelector('.related-section')?.style && (document.querySelector('.related-section').style.display = 'none');
    return;
  }

  const gradients = ['gallery-gradient-1','gallery-gradient-2','gallery-gradient-3','gallery-gradient-4'];
  grid.innerHTML = related.map((p, i) => `
    <a class="related-card" href="product.html?id=${p.id}&category=${p.category}">
      <div class="related-img-wrap">
        <div class="related-img-ph ${gradients[i % gradients.length]}">${p.name.split(' ').slice(0,2).join(' ')}</div>
      </div>
      <div class="related-info">
        <p class="related-name">${p.name}</p>
        <p class="related-price">$${p.price.toFixed(2)}${p.originalPrice ? ` <span style="font-size:0.8em;color:#999;text-decoration:line-through;">$${p.originalPrice.toFixed(2)}</span>` : ''}</p>
      </div>
    </a>`).join('');
}

/* ─── Breadcrumb ─────────────────────────────── */
function updateBreadcrumb() {
  const p = currentProduct;
  if (!p) return;
  const catLink = document.getElementById('breadcrumbCatLink');
  const catName = document.getElementById('breadcrumbCatName');
  const prodName = document.getElementById('breadcrumbProdName');
  if (catLink)  catLink.href        = getCategoryLink(p.category);
  if (catName)  catName.textContent = getCategoryName(p.category);
  if (prodName) prodName.textContent = p.name;
}

function updateMetaTitle() {
  if (currentProduct) {
    document.title = `${currentProduct.name} | Aurevia`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = currentProduct.description?.slice(0, 155) + '…';
  }
}

/* ─── Star Helpers ───────────────────────────── */
function renderStarsHTML(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) html += '<span class="star filled">★</span>';
    else if (rating >= i - 0.5) html += '<span class="star half">★</span>';
    else html += '<span class="star">★</span>';
  }
  return html;
}

function renderStars(rating, container) {
  if (!container) return;
  container.innerHTML = renderStarsHTML(rating);
}

/* ─── Size Guide Modal ───────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const sgModal   = document.getElementById('sizeGuideModal');
  const sgOpenBtn = document.getElementById('sizeGuideBtn');
  const sgCloseBtn= document.getElementById('sizeGuideClose');

  sgOpenBtn?.addEventListener('click',  () => sgModal?.classList.add('open'));
  sgCloseBtn?.addEventListener('click', () => sgModal?.classList.remove('open'));
  sgModal?.addEventListener('click', e => { if (e.target === sgModal) sgModal.classList.remove('open'); });
});

/* ─── Customization ──────────────────────────── */
function updateCustomizationTotal(e) {
  const checkbox = e.target;
  const option = checkbox.closest('.customization-option');
  
  if (checkbox.checked) {
    option.classList.add('selected');
  } else {
    option.classList.remove('selected');
  }
  
  /* Calculate and display total customization cost */
  const checked = document.querySelectorAll('input[name="customization"]:checked');
  let total = 0;
  checked.forEach(cb => total += parseFloat(cb.dataset.price) || 0);
  
  /* You can add logic here to update the main price display */
  console.log('Customization total: $' + total.toFixed(2));
}
