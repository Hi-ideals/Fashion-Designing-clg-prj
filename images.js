/* ═══════════════════════════════════════════════
   VASTRA HERITAGE — Indian Luxury Fashion
   images.js
   
   Centralised image references.
   Replace URLs with your own local paths, e.g.:
     hero:        'images/hero-bg.jpg'
     collection1: 'images/collections/lehenga.jpg'
   etc.
═══════════════════════════════════════════════ */

const IMAGES = {
  // Hero background — saree / Indian couture editorial
  hero: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1600&q=80',

  // Collections — Indian bridal & festive wear
  collections: {
    bridal:   'https://images.unsplash.com/photo-1617627143233-a6c0ab1b1f3a?w=700&q=80',
    lehenga:  'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=700&q=80',
    saree:    'https://images.unsplash.com/photo-1644362832977-8dc7c3c44f4a?w=700&q=80',
    sherwani: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80',
  },

  // Featured piece — bridal lehenga close-up
  featured: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80',

  // Lookbook — Indian fashion editorial shots
  lookbook: [
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80',
    'https://images.unsplash.com/photo-1617627143233-a6c0ab1b1f3a?w=400&q=80',
    'https://images.unsplash.com/photo-1644362832977-8dc7c3c44f4a?w=400&q=80',
    'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&q=80',
    'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=800&q=80',
    'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&q=80',
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80',
  ],

  // Designers — Indian artisan portraits
  designers: {
    priya:   'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    arjun:   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    meera:   'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&q=80',
    vikram:  'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&q=80',
  },
};

// Export for use in other scripts (optional — or just reference directly)
// If you're not using modules, this object is globally available.
window.VASTRA_IMAGES = IMAGES;
