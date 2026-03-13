'use strict';

/* =============================================
   CART.JS — Aurevia E-Commerce
   Shared cart utility used on ALL pages.
   Handles localStorage, count badge, add-to-cart.
   ============================================= */

const CART_KEY = 'aurevia_cart';

/* ─── Getters ─────────────────────────────── */

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + (item.quantity || 0), 0);
}

function getCartTotal() {
  return getCart().reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

/* ─── Core Operations ─────────────────────── */

/**
 * Add an item to cart. If an item with same id+color+size exists, increment quantity.
 * @param {object} itemData - { id, name, price, image, quantity, color, size, category }
 */
function addToCart(itemData) {
  const cart = getCart();
  const qty = itemData.quantity || 1;

  const existingIdx = cart.findIndex(item =>
    item.id === itemData.id &&
    (item.color || '') === (itemData.color || '') &&
    (item.size  || '') === (itemData.size  || '')
  );

  if (existingIdx > -1) {
    cart[existingIdx].quantity = Math.min(10, cart[existingIdx].quantity + qty);
  } else {
    cart.push({
      id:       itemData.id,
      name:     itemData.name,
      price:    itemData.price,
      image:    itemData.image || '',
      quantity: qty,
      color:    itemData.color  || '',
      size:     itemData.size   || '',
      category: itemData.category || '',
      addedAt:  new Date().toISOString()
    });
  }

  saveCart(cart);
  updateCartCountUI();
  return cart;
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  updateCartCountUI();
  return cart;
}

function updateCartItemQty(index, newQty) {
  const cart = getCart();
  if (!cart[index]) return cart;
  if (newQty <= 0) return removeFromCart(index);
  cart[index].quantity = Math.min(10, Math.max(1, newQty));
  saveCart(cart);
  updateCartCountUI();
  return cart;
}

/* ─── UI Helpers ──────────────────────────── */

/** Update every .cart-count / #cartCount element on the page */
function updateCartCountUI() {
  const count = getCartCount();
  document.querySelectorAll('#cartCount, .cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

/** Brief scale-bounce animation on the badge */
function animateCartBadge() {
  const badge = document.querySelector('#cartCount, .cart-count');
  if (!badge) return;
  badge.style.transform = 'scale(1.5)';
  badge.style.transition = 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
  setTimeout(() => { badge.style.transform = 'scale(1)'; }, 300);
}

/* ─── Init ────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  updateCartCountUI();

  /* Make cart icon navigate to cart.html */
  document.querySelectorAll('.nav-icon-btn[aria-label="Bag"]').forEach(btn => {
    btn.style.cursor = 'pointer';
    btn.addEventListener('click', () => {
      window.location.href = 'cart.html';
    });
  });

  /* Legacy add-to-cart buttons on category pages (no variant selection) */
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const card = this.closest('[data-id], .product-card, .gift-card, .mystery-card');
      if (!card) return;

      const id    = card.dataset.id || card.querySelector('.product-name, h3')?.textContent.trim().replace(/\s+/g, '-').toLowerCase() || 'product';
      const name  = card.querySelector('.product-name, h3')?.textContent.trim() || 'Product';
      const price = parseFloat(card.dataset.price || card.querySelector('.current-price')?.textContent.replace(/[^0-9.]/g, '') || 0);
      const image = card.querySelector('img')?.src || '';

      addToCart({ id, name, price, image, quantity: 1 });
      animateCartBadge();
      showGlobalToast('Added to cart!', 'success');
    });
  });
});

/* ─── Global Toast (used by all pages) ──── */

function showGlobalToast(message, type = 'info') {
  const existing = document.querySelector('.g-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `g-toast g-toast--${type}`;
  toast.innerHTML = `
    <span class="g-toast__msg">${message}</span>
    <button class="g-toast__close" aria-label="Close">×</button>
  `;

  // Inline base styles (no extra CSS file needed)
  Object.assign(toast.style, {
    position:     'fixed',
    bottom:       '30px',
    right:        '30px',
    zIndex:       '9999',
    display:      'flex',
    alignItems:   'center',
    gap:          '12px',
    padding:      '14px 20px',
    borderRadius: '6px',
    fontFamily:   "'Montserrat', sans-serif",
    fontSize:     '0.9rem',
    fontWeight:   '500',
    background:   type === 'success' ? '#4a7c59' : type === 'error' ? '#cc3333' : '#795757',
    color:        '#fff',
    boxShadow:    '0 8px 30px rgba(59,48,48,0.25)',
    transform:    'translateY(20px)',
    opacity:      '0',
    transition:   'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease'
  });

  toast.querySelector('.g-toast__close').style.cssText =
    'background:none;border:none;color:#fff;font-size:1.2rem;cursor:pointer;padding:0;line-height:1;opacity:0.7;';

  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity   = '1';
  });

  const remove = () => {
    toast.style.transform = 'translateY(20px)';
    toast.style.opacity   = '0';
    setTimeout(() => toast.remove(), 350);
  };

  toast.querySelector('.g-toast__close').addEventListener('click', remove);
  setTimeout(remove, 3200);
}
