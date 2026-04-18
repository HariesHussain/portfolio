// ============================================================
// SEO CONFIGURATION — Single Source of Truth
// ============================================================
//
// ⚡ CHANGE YOUR DOMAIN HERE ONCE — everything else updates automatically.
//    When you decide on .com / .in / .tech / .dev / .vercel.app etc,
//    just update SITE_URL below and rebuild.
//
// ============================================================

export const SITE_URL = 'https://harieshussain.vercel.app'; // ← CHANGE THIS TO YOUR FINAL DOMAIN

export const SEO = {
  // ─── Identity ───────────────────────────────────────────
  name: 'Haries Hussain',
  jobTitle: 'Web Developer',
  email: 'shaikharieshussain09@gmail.com',
  phone: '+919391175096',
  location: {
    city: 'Nandyal',
    state: 'Andhra Pradesh',
    country: 'India',
    countryCode: 'IN',
  },

  // ─── Page Meta ──────────────────────────────────────────
  title: 'Haries Hussain | Premium Web Developer in Nandyal | Business Websites',
  description:
    'Haries Hussain builds premium business websites, portfolios, landing pages and SEO-friendly websites for clients in Nandyal and worldwide.',
  keywords: [
    'web developer in Nandyal',
    'freelance web developer India',
    'business website developer',
    'portfolio website developer',
    'React developer Nandyal',
    'e-commerce developer India',
    'SEO optimization',
    'premium website design',
    'website redesign',
    'Haries Hussain',
  ].join(', '),

  // ─── Open Graph / Social ────────────────────────────────
  ogTitle: 'Haries Hussain | Web Developer in Nandyal — Premium Websites for Business',
  ogDescription:
    'I build premium, fast, mobile-friendly websites for businesses that want to grow. Modern design, SEO optimization, and high-converting pages.',
  ogImage: '/hero-profile.png', // resolved dynamically via SITE_URL

  // ─── Services (for Schema) ──────────────────────────────
  services: [
    'Business Websites',
    'Portfolio Websites',
    'E-commerce Stores',
    'Landing Pages',
    'Website Redesign',
    'SEO Optimization',
  ],
};
