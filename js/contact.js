'use strict';

/* ═══════════════════════════════════════════
   CONTACT.JS — Lumina E-Commerce
   Contact page functionality
   ═══════════════════════════════════════════ */

// ═══ Form Handling ═══
function initContactForm() {
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('form-success');

  if (!form) return;

  // Character counter
  const textarea = form.querySelector('textarea[name="message"]');
  const charCount = form.querySelector('.char-count');

  if (textarea && charCount) {
    textarea.addEventListener('input', () => {
      const count = textarea.value.length;
      charCount.textContent = `${count} / 500`;
      if (count > 500) {
        charCount.style.color = '#e74c3c';
      } else {
        charCount.style.color = 'var(--warm-brown)';
      }
    });
  }

  // Form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('.submit-btn');
    const formData = new FormData(form);

    // Validate
    const email = formData.get('email');
    if (!isValidEmail(email)) {
      showFieldError(form.querySelector('input[name="email"]'), 'Please enter a valid email address');
      return;
    }

    const message = formData.get('message');
    if (message.length < 20) {
      showFieldError(textarea, 'Message must be at least 20 characters');
      return;
    }

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Show success
    form.style.display = 'none';
    successMessage.classList.add('visible');

    // Reset after delay
    setTimeout(() => {
      form.reset();
      form.style.display = 'block';
      successMessage.classList.remove('visible');
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
      if (charCount) charCount.textContent = '0 / 500';
    }, 5000);
  });

  // Clear errors on input
  form.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('input', () => clearFieldError(field));
    field.addEventListener('change', () => clearFieldError(field));
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFieldError(field, message) {
  if (!field) return;
  field.style.borderColor = '#e74c3c';
  
  let error = field.parentElement.querySelector('.field-error');
  if (!error) {
    error = document.createElement('span');
    error.className = 'field-error';
    error.style.cssText = 'color:#e74c3c;font-size:0.8rem;margin-top:4px;display:block;font-family:var(--font-secondary);';
    field.parentElement.appendChild(error);
  }
  error.textContent = message;
}

function clearFieldError(field) {
  if (!field) return;
  field.style.borderColor = '';
  const error = field.parentElement.querySelector('.field-error');
  if (error) error.remove();
}

// ═══ Accordion ═══
function initAccordion() {
  const accordion = document.getElementById('faq-accordion');
  if (!accordion) return;

  const headers = accordion.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const isExpanded = header.getAttribute('aria-expanded') === 'true';

      // Close all (optional - for single-open accordion)
      headers.forEach(h => h.setAttribute('aria-expanded', 'false'));

      // Toggle current
      header.setAttribute('aria-expanded', !isExpanded);
    });
  });
}

// ═══ Smooth Scroll for Anchor Links ═══
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const offset = target.offsetTop - 100;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    });
  });
}

// ═══ Initialize ═══
document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initAccordion();
  initSmoothScroll();
});
