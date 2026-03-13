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
const mobileMenu   = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');

let isMenuOpen = false;

function openMenu() {
  if (!mobileMenu) return;
  
  isMenuOpen = true;
  
  // Add class to body to prevent scrolling
  document.body.classList.add('menu-open');
  
  // Animate hamburger to X
  if (hamburgerBtn) hamburgerBtn.classList.add('active');
  
  // Slide in drawer
  mobileMenu.classList.add('open');
  mobileMenu.setAttribute('aria-hidden', 'false');
  
  // Fade in overlay
  if (mobileOverlay) mobileOverlay.classList.add('visible');
  
  // Set aria attributes for accessibility
  if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  if (!mobileMenu) return;
  
  isMenuOpen = false;
  
  // Remove class from body to allow scrolling
  document.body.classList.remove('menu-open');
  
  // Animate X back to hamburger
  if (hamburgerBtn) hamburgerBtn.classList.remove('active');
  
  // Slide out drawer
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  
  // Fade out overlay
  if (mobileOverlay) mobileOverlay.classList.remove('visible');
  
  // Set aria attributes for accessibility
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
});

/* ─── 4. Scroll-reveal via Intersection Observer ─── */
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

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
      entry.target.style.transitionDelay =
        siblings.indexOf(entry.target) * 0.1 + 's';
    }
    
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));

/* ─── 5. Smooth-scroll anchor links ─── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - 68, behavior: 'smooth' });
  });
});
