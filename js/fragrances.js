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
      localStorage.setItem('lumina_custom_fragrance', JSON.stringify(formula));
      saveBtn.textContent = 'Saved!';
      setTimeout(() => { saveBtn.textContent = 'Save Formula'; }, 2000);
    });
  }

  updatePreview();
});
