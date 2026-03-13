'use strict';

/* =============================================
   CART-PAGE.JS — Aurevia E-Commerce
   Shopping Cart Page Logic (cart.html only)
   Depends on: cart.js (loaded first)
   ============================================= */

const PROMO_CODES = {
  WELCOME10: { discount: 10, type: 'percent', label: '10% off' },
  SAVE20:    { discount: 20, type: 'percent', label: '20% off' },
  FLAT15:    { discount: 15, type: 'fixed',   label: '$15 off'  }
};

const TAX_RATE       = 0.08;     // 8%
const FREE_SHIP_OVER = 50;       // free shipping threshold
const SHIP_COST      = 9.99;     // standard shipping cost

let appliedPromo = null;

const gradients = [
  'gallery-gradient-1', 'gallery-gradient-2',
  'gallery-gradient-3', 'gallery-gradient-4'
];

/* ─── DOM refs ──────────────────────────────── */
const cartItemsContainer = document.getElementById('cartItemsContainer');
const itemCountEl        = document.getElementById('cartItemCount');
const subtotalEl         = document.getElementById('subtotalValue');
const shippingEl         = document.getElementById('shippingValue');
const taxEl              = document.getElementById('taxValue');
const discountRowEl      = document.getElementById('discountRow');
const discountEl         = document.getElementById('discountValue');
const totalEl            = document.getElementById('totalValue');
const checkoutBtn        = document.getElementById('checkoutBtn');
const promoInput         = document.getElementById('promoInput');
const promoMsgEl         = document.getElementById('promoMsg');

/* ─── Main Load ─────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderCart();

  document.getElementById('promoApplyBtn')?.addEventListener('click', applyPromo);
  promoInput?.addEventListener('keydown', e => { if (e.key === 'Enter') applyPromo(); });
  checkoutBtn?.addEventListener('click', handleCheckout);
});

/* ─── Render ────────────────────────────────── */
function renderCart() {
  const cart = getCart();
  updateCartCountUI();

  if (!cart.length) {
    showEmptyState();
    updateSummary([]);
    return;
  }

  cartItemsContainer.innerHTML = cart.map((item, i) => buildCardHTML(item, i)).join('');
  updateSummary(cart);
  updateItemCount(cart);

  /* Stagger fade-in */
  document.querySelectorAll('.cart-item-card').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      card.style.opacity    = '1';
      card.style.transform  = 'translateY(0)';
    }, i * 80);
  });
}

function buildCardHTML(item, index) {
  const variantParts = [];
  if (item.color) variantParts.push(`Colour: ${item.color}`);
  if (item.size)  variantParts.push(`Size: ${item.size}`);
  const lineTotal = (item.price * item.quantity).toFixed(2);

  const imgContent = item.image
    ? `<img class="cart-item-img" src="${item.image}" alt="${item.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
       <div class="cart-item-img-ph ${gradients[index % gradients.length]}" style="display:none">${item.name.split(' ').slice(0,2).join(' ')}</div>`
    : `<div class="cart-item-img-ph ${gradients[index % gradients.length]}">${item.name.split(' ').slice(0,2).join(' ')}</div>`;

  return `
    <div class="cart-item-card" data-index="${index}" id="cart-card-${index}">
      <div class="cart-item-img-wrap" onclick="window.location.href='product.html?id=${item.id}'">
        ${imgContent}
      </div>
      <div class="cart-item-info">
        <a class="cart-item-name" href="product.html?id=${item.id}">${item.name}</a>
        ${variantParts.length ? `<p class="cart-item-variants">${variantParts.join(' · ')}</p>` : ''}
        <p class="cart-item-unit-price">$${item.price.toFixed(2)} each</p>
        <div class="cart-item-actions-row">
          <div class="cart-qty-control">
            <button class="cart-qty-btn cqb-minus" onclick="changeQty(${index}, -1)" aria-label="Decrease" ${item.quantity <= 1 ? 'disabled' : ''}>−</button>
            <input class="cart-qty-input" type="text" value="${item.quantity}" readonly aria-label="Quantity">
            <button class="cart-qty-btn cqb-plus"  onclick="changeQty(${index},  1)" aria-label="Increase" ${item.quantity >= 10 ? 'disabled' : ''}>+</button>
          </div>
          <div class="cart-item-total-remove">
            <span class="cart-item-total">$${lineTotal}</span>
            <button class="cart-remove-btn" onclick="removeItem(${index})" aria-label="Remove ${item.name}">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>`;
}

function showEmptyState() {
  cartItemsContainer.innerHTML = `
    <div class="empty-cart-box">
      <span class="empty-cart-icon">🛒</span>
      <h2 class="empty-cart-title">Your cart is empty</h2>
      <p class="empty-cart-desc">Looks like you haven't added anything yet.</p>
      <a href="index.html" class="empty-cart-cta">Start Shopping</a>
    </div>`;
  if (checkoutBtn) {
    checkoutBtn.disabled    = true;
    checkoutBtn.textContent = 'Proceed to Checkout';
  }
}

/* ─── Quantity & Remove ──────────────────────── */
function changeQty(index, delta) {
  const cart    = getCart();
  const newQty  = (cart[index]?.quantity || 1) + delta;
  if (newQty < 1) {
    if (confirm(`Remove "${cart[index]?.name}" from your cart?`)) removeItem(index);
    return;
  }
  updateCartItemQty(index, newQty);
  renderCart();
  showGlobalToast('Cart updated', 'info');
}

function removeItem(index) {
  const cart = getCart();
  const name = cart[index]?.name || 'Item';
  const card = document.getElementById(`cart-card-${index}`);
  if (card) {
    card.classList.add('removing');
    setTimeout(() => {
      removeFromCart(index);
      renderCart();
      showGlobalToast(`"${name}" removed from cart`, 'info');
    }, 320);
  } else {
    removeFromCart(index);
    renderCart();
  }
}

/* ─── Order Summary ──────────────────────────── */
function updateSummary(cart) {
  const subtotal   = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const shipping   = subtotal >= FREE_SHIP_OVER ? 0 : (subtotal > 0 ? SHIP_COST : 0);

  let discountAmt = 0;
  if (appliedPromo) {
    discountAmt = appliedPromo.type === 'percent'
      ? subtotal * (appliedPromo.discount / 100)
      : Math.min(appliedPromo.discount, subtotal);
  }

  const taxable = Math.max(0, subtotal - discountAmt);
  const tax     = taxable * TAX_RATE;
  const total   = taxable + shipping + tax;

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (shippingEl) {
    shippingEl.textContent = shipping === 0 && subtotal > 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    shippingEl.closest('.summary-row')?.classList.toggle('free-ship', shipping === 0 && subtotal > 0);
  }
  if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;

  if (discountRowEl) {
    discountRowEl.style.display = discountAmt > 0 ? 'flex' : 'none';
    if (discountEl) discountEl.textContent = `-$${discountAmt.toFixed(2)}`;
  }

  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;

  if (checkoutBtn) checkoutBtn.disabled = cart.length === 0;
}

function updateItemCount(cart) {
  const count = cart.reduce((s, i) => s + i.quantity, 0);
  if (itemCountEl) itemCountEl.textContent = `${count} item${count !== 1 ? 's' : ''} in cart`;
  /* Also update page header count */
  document.querySelectorAll('.cart-item-count').forEach(el => {
    el.textContent = `${count} item${count !== 1 ? 's' : ''} in cart`;
  });
}

/* ─── Promo Code ─────────────────────────────── */
function applyPromo() {
  if (!promoInput) return;
  const code  = promoInput.value.trim().toUpperCase();
  const promo = PROMO_CODES[code];

  if (!promo) {
    showPromoMsg('Invalid promo code. Try WELCOME10, SAVE20, or FLAT15.', 'error');
    appliedPromo = null;
  } else {
    appliedPromo = promo;
    showPromoMsg(`"${code}" applied — ${promo.label}!`, 'success');
    promoInput.disabled = true;
    document.getElementById('promoApplyBtn').disabled = true;
  }
  updateSummary(getCart());
}

function showPromoMsg(msg, type) {
  if (!promoMsgEl) return;
  promoMsgEl.textContent = msg;
  promoMsgEl.className   = `promo-msg ${type}`;
}

/* ─── Checkout ───────────────────────────────── */
function handleCheckout() {
  const cart = getCart();
  if (!cart.length) { showGlobalToast('Your cart is empty', 'error'); return; }
  showGlobalToast('Redirecting to checkout…', 'info');
  setTimeout(() => { window.location.href = '#checkout'; }, 1000);
}
