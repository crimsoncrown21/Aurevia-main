'use strict';

/* ─── 1. Navbar: transparent → solid on scroll ─── */
const navbar = document.getElementById('navbar');

function updateNav() {
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

/* ─── 2. Active link detection ─── */
(function setActiveLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage) {
      a.classList.add('active');
    }
  });
})();

/* ─── 3. Mobile menu ─── */
const mobileMenu    = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');
const hamburgerBtn  = document.getElementById('hamburgerBtn');
const closeMenuBtn  = document.getElementById('closeMenuBtn');

let isMenuOpen = false;
let savedScrollY = 0;

function openMenu() {
  if (!mobileMenu) return;

  isMenuOpen = true;

  // iOS-safe scroll lock: save position, pin body with top offset instead of position:fixed jump
  savedScrollY = window.scrollY;
  document.body.style.overflow = 'hidden';
  // Don't use position:fixed (causes page jump on iOS); overflow:hidden alone is enough on most
  // For extra iOS safety we also set touch-action
  document.body.style.touchAction = 'none';

  if (hamburgerBtn) hamburgerBtn.classList.add('active');
  mobileMenu.classList.add('open');
  mobileMenu.setAttribute('aria-hidden', 'false');
  if (mobileOverlay) mobileOverlay.classList.add('visible');
  if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  if (!mobileMenu) return;

  isMenuOpen = false;

  // Restore scroll without page jump
  document.body.style.overflow = '';
  document.body.style.touchAction = '';

  if (hamburgerBtn) hamburgerBtn.classList.remove('active');
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  if (mobileOverlay) mobileOverlay.classList.remove('visible');
  if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
}

function toggleMenu() {
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

if (hamburgerBtn) hamburgerBtn.addEventListener('click', toggleMenu);
if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
if (mobileOverlay) mobileOverlay.addEventListener('click', closeMenu);

if (mobileMenu) {
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    closeMenu();
  }));
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && isMenuOpen) {
    closeMenu();
  }
});

// Close menu when resizing to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && isMenuOpen) {
    closeMenu();
  }
}, { passive: true });

/* ─── 4. Scroll-reveal via Intersection Observer ─── */
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

// Fallback: show immediately if IntersectionObserver isn't supported or if user prefers reduced motion
var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!window.IntersectionObserver || prefersReducedMotion) {
  revealEls.forEach(function(el) {
    el.classList.add('visible');
    el.style.transitionDuration = '0s';
  });
} else {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      /* Stagger items inside grid containers */
      const grid = entry.target.closest(
        '.problems-grid, .categories-grid, .trust-grid, .project-features, .product-grid, .footer-grid'
      );
      if (grid) {
        const siblings = Array.from(
          grid.querySelectorAll('.reveal, .reveal-left, .reveal-right')
        );
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = (idx * 0.1) + 's';
      }

      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

  revealEls.forEach(el => observer.observe(el));
}

/* ─── 5. Smooth-scroll anchor links (with polyfill for older browsers) ─── */
function smoothScrollTo(targetY, duration) {
  // Native smooth scroll if supported (wrapped in try/catch for safety)
  try {
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
      return;
    }
  } catch (e) { /* fall through to polyfill */ }

  // JS polyfill for browsers without scroll-behavior support (old Safari, WebView)
  var startY   = window.scrollY;
  var diff     = targetY - startY;
  var startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    var elapsed  = timestamp - startTime;
    var progress = Math.min(elapsed / duration, 1);
    // Ease in-out cubic
    var ease     = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    window.scrollTo(0, startY + diff * ease);
    if (elapsed < duration) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    smoothScrollTo(target.offsetTop - 68, 600);
  });
});
