/* ═══════════════════════════════════════════════
   VASTRA HERITAGE — Indian Luxury Fashion
   main.js
═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Custom Cursor (desktop only) ──
  const isPointerDevice = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (isPointerDevice) {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');

    if (cursor && follower) {
      let mx = window.innerWidth / 2;
      let my = window.innerHeight / 2;
      let fx = mx, fy = my;

      // Show cursors
      cursor.style.display = 'block';
      follower.style.display = 'block';

      document.addEventListener('mousemove', e => {
        mx = e.clientX;
        my = e.clientY;
      });

      (function animateCursor() {
        cursor.style.left = mx + 'px';
        cursor.style.top  = my + 'px';
        fx += (mx - fx) * 0.12;
        fy += (my - fy) * 0.12;
        follower.style.left = fx + 'px';
        follower.style.top  = fy + 'px';
        requestAnimationFrame(animateCursor);
      })();

      document.querySelectorAll('a, button, .collection-card, .designer-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursor.style.transform = 'translate(-50%,-50%) scale(2.2)';
          cursor.style.background = 'var(--gold)';
          follower.style.opacity = '0.2';
        });
        el.addEventListener('mouseleave', () => {
          cursor.style.transform = 'translate(-50%,-50%) scale(1)';
          cursor.style.background = 'var(--black)';
          follower.style.opacity = '0.6';
        });
      });
    }
  }

  // ── Close mobile menu when a nav link is clicked ──
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navMenu = document.getElementById('navMenu');
      if (navMenu && navMenu.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navMenu);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });

  // ── Navbar scroll ──
  const nav = document.getElementById('mainNav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  // ── Prevent body scroll when mobile menu is open ──
  const navMenu = document.getElementById('navMenu');
  if (navMenu) {
    navMenu.addEventListener('show.bs.collapse', () => document.body.style.overflow = 'hidden');
    navMenu.addEventListener('hide.bs.collapse', () => document.body.style.overflow = '');
  }

  // ── Reveal on scroll ──
  const revealEls = document.querySelectorAll('.reveal, .reveal-left');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 70);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => io.observe(el));

});