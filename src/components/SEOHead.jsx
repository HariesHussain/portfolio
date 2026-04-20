import { useEffect } from 'react';
import { SITE_URL, SEO } from '../seo.config.js';

/**
 * SEOHead — Dynamically injects all SEO meta tags and JSON-LD structured data
 * into the document head. Reads everything from seo.config.js so changing your
 * domain in ONE place updates the entire SEO layer.
 */
const SEOHead = () => {
  useEffect(() => {
    const url = SITE_URL;
    const ogImageFull = `${url}${SEO.ogImage}`;

    // ── Document Title ──
    document.title = SEO.title;

    // ── Helper: set or create a meta tag ──
    const setMeta = (attr, attrValue, content) => {
      let el = document.querySelector(`meta[${attr}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // ── Primary SEO Meta ──
    setMeta('name', 'description', SEO.description);
    setMeta('name', 'keywords', SEO.keywords);
    setMeta('name', 'author', SEO.name);
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // ── Canonical ──
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${url}/`);

    // ── Open Graph ──
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', `${SEO.name} — ${SEO.jobTitle}`);
    setMeta('property', 'og:title', SEO.ogTitle);
    setMeta('property', 'og:description', SEO.ogDescription);
    setMeta('property', 'og:url', `${url}/`);
    setMeta('property', 'og:image', ogImageFull);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:locale', 'en_IN');

    // ── Twitter / X ──
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', SEO.ogTitle);
    setMeta('name', 'twitter:description', SEO.ogDescription);
    setMeta('name', 'twitter:image', ogImageFull);

    // ── Geo ──
    setMeta('name', 'geo.region', SEO.location.countryCode);
    setMeta('name', 'geo.placename', `${SEO.location.city}, ${SEO.location.state}, ${SEO.location.country}`);

    // ── JSON-LD Structured Data ──
    const existingLd = document.querySelector('script[data-seo-ld]');
    if (existingLd) existingLd.remove();

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${url}/#website`,
          url: `${url}/`,
          name: `${SEO.name} — ${SEO.jobTitle}`,
          description: SEO.description,
          inLanguage: 'en-IN',
          publisher: { '@id': `${url}/#person` },
        },
        {
          '@type': 'Person',
          '@id': `${url}/#person`,
          name: SEO.name,
          url: `${url}/`,
          image: ogImageFull,
          email: SEO.email,
          telephone: SEO.phone,
          jobTitle: SEO.jobTitle,
          address: {
            '@type': 'PostalAddress',
            addressLocality: SEO.location.city,
            addressRegion: SEO.location.state,
            addressCountry: SEO.location.countryCode,
          },
          sameAs: SEO.socialLinks, // <-- Added SameAs Links Here
        },
        {
          '@type': 'LocalBusiness', // <-- Changed to LocalBusiness for stronger Local SEO
          '@id': `${url}/#service`,
          name: `${SEO.name} — Web Development Services`,
          url: `${url}/`,
          image: ogImageFull,
          description: SEO.description,
          telephone: SEO.phone,
          email: SEO.email,
          address: {
            '@type': 'PostalAddress',
            addressLocality: SEO.location.city,
            addressRegion: SEO.location.state,
            addressCountry: SEO.location.countryCode,
          },
          priceRange: '$$',
          areaServed: [
            { '@type': 'City', name: SEO.location.city },
            { '@type': 'State', name: SEO.location.state },
            { '@type': 'Country', name: SEO.location.country },
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Web Development Services',
            itemListElement: SEO.services.map((name) => ({
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name },
            })),
          },
          sameAs: SEO.socialLinks,
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${url}/#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${url}/`,
            },
          ],
        },
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-ld', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const ldScript = document.querySelector('script[data-seo-ld]');
      if (ldScript) ldScript.remove();
    };
  }, []);

  return null; // This component renders nothing visually
};

export default SEOHead;
