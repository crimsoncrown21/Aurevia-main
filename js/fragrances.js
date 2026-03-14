'use strict';

/* ─── Scent Customizer ─── */
document.addEventListener('DOMContentLoaded', () => {
  const basePrice = 89;
  let selectedBase = 'vanilla';
  let selectedNotes = [];
  let intensity = 3;

  const previewName  = document.getElementById('previewName');
  const previewDesc  = document.getElementById('previewDesc');
  const previewPrice = document.getElementById('previewPrice');

  const baseNames = {
    vanilla: 'Vanilla Dreams',
    floral: 'Floral Whisper',
    woody: 'Woodland Spirit',
    fruity: 'Citrus Bloom',
    oud: 'Royal Oud'
  };

  const baseDescs = {
    vanilla: 'A warm, inviting base',
    floral: 'A romantic, fresh bouquet',
    woody: 'An earthy, grounding foundation',
    fruity: 'A playful, vibrant opening',
    oud: 'A luxurious, mysterious depth'
  };

  function updatePreview() {
    if (!previewName || !previewDesc || !previewPrice) return;

    let total = basePrice;

    /* Base price add-on */
    const activeBase = document.querySelector('#baseOptions .option-btn.active');
    if (activeBase) total += parseInt(activeBase.dataset.price) || 0;

    /* Notes price add-ons */
    document.querySelectorAll('#noteOptions .option-btn.active').forEach(btn => {
      total += parseInt(btn.dataset.price) || 0;
    });

    /* Intensity modifier */
    const intensityMod = [0.9, 0.95, 1, 1.1, 1.2];
    total = Math.round(total * intensityMod[intensity - 1]);

    const noteStr = selectedNotes.length > 0
      ? ' with ' + selectedNotes.join(' & ')
      : '';

    previewName.textContent = (baseNames[selectedBase] || 'Custom Blend') + noteStr;
    previewDesc.textContent = baseDescs[selectedBase] || 'Your custom creation';
    previewPrice.textContent = '$' + total.toFixed(2);
  }

  /* Base selection (single select) */
  const baseOptions = document.getElementById('baseOptions');
  if (baseOptions) {
    baseOptions.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        baseOptions.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        selectedBase = this.dataset.value;
        updatePreview();
      });
    });
  }

  /* Notes selection (multi select) */
  const noteOptions = document.getElementById('noteOptions');
  if (noteOptions) {
    noteOptions.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        this.classList.toggle('active');
        selectedNotes = Array.from(noteOptions.querySelectorAll('.option-btn.active'))
          .map(b => b.dataset.value);
        updatePreview();
      });
    });
  }

  /* Intensity slider */
  const intensityRange = document.getElementById('intensityRange');
  if (intensityRange) {
    intensityRange.addEventListener('input', function() {
      intensity = parseInt(this.value);
      updatePreview();
    });
  }

  /* Save formula */
  const saveBtn = document.querySelector('.save-formula-btn');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const formula = { base: selectedBase, notes: selectedNotes, intensity: intensity };
      localStorage.setItem('Aurevia_custom_fragrance', JSON.stringify(formula));
      saveBtn.textContent = 'Saved!';
      setTimeout(() => { saveBtn.textContent = 'Save Formula'; }, 2000);
    });
  }

  /* Add to Cart for custom fragrance */
  const customizerAddBtn = document.querySelector('.customizer-preview .add-to-cart-btn');
  if (customizerAddBtn) {
    customizerAddBtn.addEventListener('click', () => {
      const name = previewName ? previewName.textContent.trim() : 'Custom Fragrance';
      const priceText = previewPrice ? previewPrice.textContent : '$89.00';
      const price = parseFloat(priceText.replace(/[^0-9.]/g, '')) || 89;

      // Generate unique ID based on configuration
      const noteStr = selectedNotes.length > 0 ? selectedNotes.join('-') : 'none';
      const uniqueId = `custom-${selectedBase}-${noteStr}-${intensity}`;

      // Build description of the custom formula
      const intensityLabels = ['Very Light', 'Light', 'Medium', 'Strong', 'Very Strong'];
      const intensityLabel = intensityLabels[intensity - 1] || 'Medium';
      const formulaDesc = `Base: ${selectedBase}${selectedNotes.length > 0 ? ', Notes: ' + selectedNotes.join(', ') : ''}, Intensity: ${intensityLabel}`;

      addToCart({
        id: uniqueId,
        name: name,
        price: price,
        image: '',
        quantity: 1,
        category: 'Custom Fragrance',
        color: formulaDesc
      });

      if (typeof animateCartBadge === 'function') animateCartBadge();
      if (typeof showGlobalToast === 'function') showGlobalToast('Custom fragrance added to cart!', 'success');
    });
  }

  updatePreview();
});
