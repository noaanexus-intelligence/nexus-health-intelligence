/* ==========================================================================
   Nexus Health Intelligence — script.js
   Vanilla JS · no dependencies
   Mobile menu · active nav · smooth scroll · back-to-top · reveal-on-scroll
   ========================================================================== */
(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Navbar shadow on scroll ---------- */
  var navbar = document.getElementById('navbar');
  function onScrollNavbar() {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 8);
  }

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById('nav-toggle');
  var nav = document.querySelector('.nav');
  var navList = document.getElementById('nav-list');

  function closeMenu() {
    if (!nav || !toggle) return;
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'เปิดเมนู');
  }
  function openMenu() {
    if (!nav || !toggle) return;
    nav.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'ปิดเมนู');
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      if (nav.classList.contains('open')) closeMenu();
      else openMenu();
    });
  }

  /* ---------- Smooth scroll + close menu on nav click ---------- */
  // Native CSS scroll-behavior handles the smoothness; here we just
  // close the mobile menu and keep focus management tidy.
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href');
      if (!id || id === '#') return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      closeMenu();
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
      // Update the URL hash without an extra jump
      if (history.replaceState) history.replaceState(null, '', id);
    });
  });

  // Close menu when clicking outside / pressing Escape / resizing up
  document.addEventListener('click', function (e) {
    if (!nav || !nav.classList.contains('open')) return;
    if (nav.contains(e.target) || (toggle && toggle.contains(e.target))) return;
    closeMenu();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 860) closeMenu();
  });

  /* ---------- Active nav link (scroll spy) ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
  var sections = navLinks
    .map(function (l) { return document.querySelector(l.getAttribute('href')); })
    .filter(Boolean);

  function setActive(id) {
    navLinks.forEach(function (l) {
      l.classList.toggle('active', l.getAttribute('href') === '#' + id);
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  } else {
    var revealObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function (el) { revealObs.observe(el); });
  }

  /* ---------- Back to top ---------- */
  var toTop = document.getElementById('to-top');
  function onScrollToTop() {
    if (!toTop) return;
    var show = window.scrollY > 500;
    toTop.classList.toggle('show', show);
    toTop.hidden = !show;
  }
  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

  /* ---------- Throttled scroll handler (rAF) ---------- */
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      onScrollNavbar();
      onScrollToTop();
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // Initial paint
  onScrollNavbar();
  onScrollToTop();
})();
