'use strict';

/* ─── Shopping Cart (localStorage) ─── */

let cart = JSON.parse(localStorage.getItem('aurevia_cart')) || [];

function addToCart(productId, name, price, image, quantity) {
  quantity = quantity || 1;
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ id: productId, name: name, price: price, image: image, quantity: quantity });
  }

  saveCart();
  updateCartUI();
  showAddedAnimation();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
}

function updateQuantity(productId, newQty) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  if (newQty <= 0) {
    removeFromCart(productId);
  } else {
    item.quantity = newQty;
    saveCart();
    updateCartUI();
  }
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function saveCart() {
  localStorage.setItem('aurevia_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const badges = document.querySelectorAll('.cart-badge');
  const count = getCartCount();
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  });
}

function showAddedAnimation() {
  const badge = document.querySelector('.cart-badge');
  if (!badge) return;
  badge.style.transform = 'scale(1.4)';
  setTimeout(() => { badge.style.transform = 'scale(1)'; }, 300);
}

/* Initialize cart badge on load */
document.addEventListener('DOMContentLoaded', updateCartUI);

/* Attach add-to-cart listeners */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const card = this.closest('.product-card') || this.closest('.gift-card') || this.closest('.mystery-card');
      if (!card) return;
      const id    = card.dataset.id || card.querySelector('.product-name, .gift-name, h3')?.textContent.trim().replace(/\s+/g, '-').toLowerCase();
      const name  = card.querySelector('.product-name, .gift-name, h3')?.textContent.trim() || 'Product';
      const price = parseFloat(card.dataset.price || card.querySelector('.current-price, .gift-price, .mystery-price')?.textContent.replace(/[^0-9.]/g, '') || 0);
      const image = card.querySelector('img')?.src || '';
      addToCart(id, name, price, image, 1);
    });
  });
});
