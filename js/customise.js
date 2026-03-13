'use strict';

/* ═══════════════════════════════════════════
   CUSTOMISE.JS — Aurevia E-Commerce
   Customise page functionality
   ═══════════════════════════════════════════ */

// ═══ Initialize Lucide Icons ═══
document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Initialize scroll reveal animations
  initScrollReveal();
});

// ═══ Scroll Reveal Animations ═══
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add stagger delay for grid items
        const parent = entry.target.closest('.options-grid, .process-steps');
        if (parent) {
          const siblings = Array.from(parent.querySelectorAll('.reveal'));
          const delay = siblings.indexOf(entry.target) * 0.1;
          entry.target.style.transitionDelay = `${delay}s`;
        }

        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

// ═══ CTA Button Animation ═══
document.querySelectorAll('.cta-button').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    const arrow = btn.querySelector('.cta-arrow');
    if (arrow) {
      arrow.style.transform = 'translateX(5px)';
    }
  });

  btn.addEventListener('mouseleave', () => {
    const arrow = btn.querySelector('.cta-arrow');
    if (arrow) {
      arrow.style.transform = 'translateX(0)';
    }
  });
});

// ═══ Option Cards Hover Effect ═══
document.querySelectorAll('.option-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px)';
    card.style.boxShadow = '0 15px 35px rgba(59, 48, 48, 0.1)';
    card.style.borderColor = '#795757';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
    card.style.borderColor = '';
  });
});

// ═══ Process Step Number Animation ═══
document.querySelectorAll('.process-step').forEach(step => {
  const number = step.querySelector('.step-number');
  if (!number) return;

  step.addEventListener('mouseenter', () => {
    number.style.transform = 'scale(1.05)';
  });

  step.addEventListener('mouseleave', () => {
    number.style.transform = 'scale(1)';
  });
});
