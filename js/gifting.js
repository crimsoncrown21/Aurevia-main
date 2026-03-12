/* ═══════════════════════════════════════════
   GIFTING PAGE — js/gifting.js
   ═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Gift Builder ── */
  const containerOpts = document.getElementById('containerOptions');
  const productOpts   = document.getElementById('productOptions');
  const bouquetOpts   = document.getElementById('bouquetOptions');
  const totalEl       = document.getElementById('builderTotal');
  const counterEl     = document.getElementById('selectionCounter');
  const messageEl     = document.getElementById('giftMessage');
  const charCountEl   = document.getElementById('charCount');

  if (!containerOpts) return;

  let selectedContainer = 15;
  let selectedProducts  = [];
  let selectedBouquet   = 0;

  function updateTotal() {
    const prodTotal = selectedProducts.reduce((s, p) => s + p, 0);
    const total = selectedContainer + prodTotal + selectedBouquet;
    totalEl.textContent = `$${total.toFixed(2)}`;
  }

  // Single-select helper
  function initSingleSelect(wrapper, callback) {
    wrapper.addEventListener('click', (e) => {
      const btn = e.target.closest('.builder-option');
      if (!btn) return;
      wrapper.querySelectorAll('.builder-option').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      callback(parseFloat(btn.dataset.price) || 0);
      updateTotal();
    });
  }

  // Container (single)
  initSingleSelect(containerOpts, (price) => { selectedContainer = price; });

  // Bouquet (single)
  initSingleSelect(bouquetOpts, (price) => { selectedBouquet = price; });

  // Products (multi-select, max 5)
  productOpts.addEventListener('click', (e) => {
    const btn = e.target.closest('.builder-option');
    if (!btn) return;
    const price = parseFloat(btn.dataset.price) || 0;

    if (btn.classList.contains('active')) {
      btn.classList.remove('active');
      const idx = selectedProducts.indexOf(price);
      if (idx > -1) selectedProducts.splice(idx, 1);
    } else {
      if (selectedProducts.length >= 5) return;
      btn.classList.add('active');
      selectedProducts.push(price);
    }
    counterEl.textContent = `Selected: ${selectedProducts.length} / 5`;
    updateTotal();
  });

  // Character counter
  if (messageEl && charCountEl) {
    messageEl.addEventListener('input', () => {
      charCountEl.textContent = messageEl.value.length;
    });
  }

  /* ── Consultation Time Slots ── */
  const slots = document.querySelectorAll('.time-slot');
  slots.forEach(slot => {
    slot.addEventListener('click', () => {
      slots.forEach(s => s.classList.remove('selected'));
      slot.classList.add('selected');
    });
  });

  const bookBtn = document.querySelector('.book-consultation-btn');
  if (bookBtn) {
    bookBtn.addEventListener('click', () => {
      const selected = document.querySelector('.time-slot.selected');
      if (!selected) {
        alert('Please select a time slot first.');
        return;
      }
      alert(`Consultation booked for ${selected.textContent}! We'll send a confirmation email.`);
    });
  }

  /* ── Gift Category Filtering ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const giftCards  = document.querySelectorAll('.gift-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.category;

      giftCards.forEach(card => {
        if (cat === 'all' || card.dataset.category === cat) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

});
