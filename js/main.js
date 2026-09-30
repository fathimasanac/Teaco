/**
 * TEACO Official Website - Main JavaScript Logic & Products Catalogue System
 */

// Centralized Configuration for Contact & Business Details
window.TEACO_CONFIG = {
  phoneDisplay: '+971 50 901 3234 / +971 56 667 2737',
  phoneRaw: '+971509013234',
  whatsappUrl: 'https://wa.me/971509013234',
  email: 'ajmalacm@gmail.com',
  emailUrl: 'mailto:ajmalacm@gmail.com',
  location: 'Fico Foods & Packaging, Ajman Free Zone, Gate No. 1',
  companyName: 'Teaco'
};

document.addEventListener('DOMContentLoaded', () => {
  // --- Element References ---
  const header = document.getElementById('site-header');
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navLinkItems = document.querySelectorAll('.nav-links a');
  const quoteForm = document.getElementById('quote-form');
  const homepageView = document.getElementById('homepage-view');
  const productDetailView = document.getElementById('product-detail-view');
  const originalTitle = document.title;

  // --- Sticky Header Scroll Controller ---
  const handleScroll = () => {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // --- Mobile Navigation Drawer Toggle ---
  if (mobileNavToggle && navLinks) {
    mobileNavToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isOpen = navLinks.classList.contains('active');
      mobileNavToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinkItems.forEach(link => {
      link.addEventListener('click', (e) => {
        navLinks.classList.remove('active');
        if (mobileNavToggle) {
          mobileNavToggle.setAttribute('aria-expanded', 'false');
        }

        // Handle clicking PRODUCTS link when on detail view
        const href = link.getAttribute('href');
        if (href && (href.endsWith('#products') || href.includes('/#products')) && homepageView && productDetailView) {
          showHomepageView();
        }
      });
    });
  }

  // --- Quote / Inquiry Form Interactive Feedback ---
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="10">
            <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.8s" repeatCount="indefinite"/>
          </circle>
        </svg>
        Sending Request...
      `;

      setTimeout(() => {
        const formPanel = quoteForm.closest('.contact-form-panel') || quoteForm.parentElement;
        formPanel.innerHTML = `
          <div style="text-align: center; padding: 2.5rem 1rem;">
            <div style="width: 64px; height: 64px; border-radius: 50%; background-color: var(--about-teaco-gold); color: #18201C; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto; box-shadow: 0 8px 24px rgba(217, 169, 40, 0.35);">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 style="font-family: var(--font-ramillas); font-size: 1.75rem; margin-bottom: 0.75rem; color: #F7F3E8;">Sample Request Received</h3>
            <p style="color: #D8D4C7; max-width: 460px; margin: 0 auto 1.75rem auto; font-family: var(--font-sans-modern); font-size: 0.95rem; line-height: 1.6;">
              Thank you. Your enquiry has been received. The TEACO DISTRIBUTORS team will contact you shortly.
            </p>
            <button type="button" onclick="location.reload()" class="btn btn-gold" style="font-size: 0.8125rem;">Submit Another Request</button>
          </div>
        `;
      }, 1000);
    });
  }

  // --- SVG Icon Helper for Suitable For ---
  const getSuitableIconSvg = (type) => {
    switch (type) {
      case 'cafe':
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>`;
      case 'tea-shop':
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A9 9 0 0 0 20 11V3h-8a9 9 0 0 0-9 9v8h8z"/><path d="M11 20v-9"/></svg>`;
      case 'restaurant':
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>`;
      case 'hotel':
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12h12"/><path d="M6 7h12"/><path d="M6 17h12"/></svg>`;
      case 'catering':
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`;
      case 'cafeteria':
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>`;
      case 'beverage':
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M12 2v4"/><path d="M16 2v4"/><rect x="4" y="8" width="16" height="12" rx="2"/></svg>`;
      default:
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`;
    }
  };

  // --- Dynamic Product Detail Page Renderer ---
  const renderProductDetailView = (slug) => {
    if (!window.TEACO_PRODUCTS_DATA || !window.TEACO_PRODUCTS_DATA[slug]) return false;
    const p = window.TEACO_PRODUCTS_DATA[slug];

    // Build Suitable For HTML
    const suitableHtml = p.suitableFor.map(item => `
      <div class="suitable-card">
        <div class="suitable-icon-circle">
          ${getSuitableIconSvg(item.type)}
        </div>
        <span class="suitable-title">${item.title}</span>
      </div>
    `).join('');

    // Build Sub-products HTML (if any)
    let subProductsHtml = '';
    if (p.subProducts && p.subProducts.length > 0) {
      const sectionTitle = p.slug === 'speciality-tea' ? 'Speciality Range' : 'Coffee Range';
      const subCards = p.subProducts.map(sub => {
        const descHtml = sub.description ? sub.description.split('\n\n').map(d => `<p class="sub-product-desc">${d}</p>`).join('') : '';
        let highlightsHtml = '';
        if (sub.highlights && sub.highlights.length > 0) {
          const hCards = sub.highlights.map(h => `
            <div class="sub-highlight-card">
              <h4 class="sub-highlight-title">${h.title}</h4>
              <p class="sub-highlight-desc">${h.desc}</p>
            </div>
          `).join('');
          highlightsHtml = `<div class="sub-product-highlights">${hCards}</div>`;
        }
        let idealForHtml = '';
        if (sub.idealFor) {
          idealForHtml = `
            <p class="sub-product-ideal">
              <span class="sub-product-ideal-label">Ideal for:</span> <span class="sub-product-ideal-cats">${sub.idealFor}</span>
            </p>
          `;
        }
        return `
          <article class="sub-product-card">
            <div class="sub-product-img-box">
              <img src="${sub.image}" alt="${sub.imageAlt || sub.name}" class="sub-product-img">
            </div>
            <div class="sub-product-content">
              <h3 class="sub-product-title">${sub.name}</h3>
              ${descHtml}
              ${highlightsHtml}
              ${idealForHtml}
            </div>
          </article>
        `;
      }).join('');

      subProductsHtml = `
        <section class="sub-products-section">
          <h2 class="pdetail-section-title">${sectionTitle}</h2>
          <div class="sub-products-grid">
            ${subCards}
          </div>
        </section>
      `;
    }

    // Build Product Overview HTML
    let overviewParagraphsHtml = p.overview ? p.overview.split('\n\n').map(para => `<p class="product-overview-text">${para}</p>`).join('') : '';
    let highlightsHtml = '';
    if (p.highlights && p.highlights.length > 0) {
      const cards = p.highlights.map(h => `
        <div class="product-highlight-card">
          <h3 class="highlight-title">${h.title}</h3>
          <p class="highlight-desc">${h.desc}</p>
        </div>
      `).join('');
      highlightsHtml = `<div class="product-highlights-grid">${cards}</div>`;
    }

    const html = `
      <div class="container">
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs-nav" aria-label="Breadcrumb">
          <a href="#" class="breadcrumb-link js-go-home">Home</a>
          <span class="breadcrumb-sep">→</span>
          <a href="#" class="breadcrumb-link js-go-products">Products</a>
          <span class="breadcrumb-sep">→</span>
          <span class="breadcrumb-current">${p.title}</span>
        </nav>

        <!-- Product Hero Section -->
        <section class="product-detail-hero">
          <div class="product-detail-hero-grid">
            <div class="product-detail-hero-media">
              <div class="product-detail-hero-img-box">
                <img src="${p.image}" alt="${p.imageAlt || p.title}" class="product-detail-hero-img">
              </div>
            </div>
            <div class="product-detail-hero-info">
              <span class="product-detail-label">${p.heroLabel || 'TEACO DISTRIBUTORS'}</span>
              <h1 class="product-detail-title">${p.title}</h1>
              <p class="product-detail-hero-desc">${p.heroDescription}</p>
              <div class="product-detail-hero-actions">
                <a href="#contact" class="btn btn-gold js-request-sample">Request A Sample</a>
                <a href="${window.TEACO_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M19.05 4.95A9.87 9.87 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02z" fill="#FFFFFF"/>
                    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.21-.25-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.06 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" fill="#25D366"/>
                  </svg>
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        ${(overviewParagraphsHtml || highlightsHtml) ? `
        <!-- Product Overview Section -->
        <section class="product-overview-section">
          <h2 class="pdetail-section-title">Product Overview</h2>
          <div class="product-overview-box">
            ${overviewParagraphsHtml}
            ${highlightsHtml}
          </div>
        </section>
        ` : ''}

        ${subProductsHtml}

        <!-- Suitable For Section -->
        <section class="suitable-for-section">
          <h2 class="pdetail-section-title">Suitable For</h2>
          <div class="suitable-for-grid">
            ${suitableHtml}
          </div>
        </section>

        <!-- Back Button -->
        <div class="back-to-products-wrapper">
          <button type="button" class="btn-back-products js-go-products">← Back To Products</button>
        </div>
      </div>
    `;

    productDetailView.innerHTML = html;

    // Attach internal click handlers for SPA navigation inside rendered detail view
    productDetailView.querySelectorAll('.js-go-home, .js-go-products').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        showHomepageView();
      });
    });

    productDetailView.querySelectorAll('.js-request-sample').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        showHomepageView();
        setTimeout(() => {
          const contactSec = document.getElementById('contact');
          if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      });
    });

    // Update document title and show view
    document.title = p.seoTitle || `${p.title} | Teaco Distributors`;
    homepageView.style.display = 'none';
    productDetailView.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return true;
  };

  const showHomepageView = () => {
    if (!homepageView || !productDetailView) return;
    productDetailView.style.display = 'none';
    homepageView.style.display = 'block';
    document.title = originalTitle;
    if (window.location.hash.includes('products')) {
      const prodSec = document.getElementById('products');
      if (prodSec) prodSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle routing by hash or data-route
  const checkRoute = () => {
    const hash = window.location.hash;
    if (hash.startsWith('#/products/')) {
      const slug = hash.replace('#/products/', '').replace(/\/$/, '');
      if (window.TEACO_PRODUCTS_DATA && window.TEACO_PRODUCTS_DATA[slug]) {
        renderProductDetailView(slug);
        return;
      }
    }
    showHomepageView();
  };

  // Intercept Product Card CTA Clicks for SPA navigation
  document.addEventListener('click', (e) => {
    const targetLink = e.target.closest('[data-route]');
    if (targetLink && homepageView && productDetailView) {
      const route = targetLink.getAttribute('data-route');
      if (route.startsWith('/products/')) {
        e.preventDefault();
        const slug = route.replace('/products/', '');
        window.location.hash = `#/products/${slug}`;
        renderProductDetailView(slug);
      }
    }
  });

  window.addEventListener('hashchange', checkRoute);
  checkRoute(); // Initial route check

  // --- Scroll Reveal Animations ---
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    const animatedElements = document.querySelectorAll('.product-cat-card, .why-feature-col, .ceo-image-frame, .ceo-quote-box');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      revealObserver.observe(el);
    });
  }

  // --- Custom Mouse Cursor Indicator ---
  const initCustomCursor = () => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (document.querySelector('.custom-cursor')) return;

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    cursor.innerHTML = '<div class="cursor-dot"></div><div class="cursor-ring"></div>';
    document.body.appendChild(cursor);

    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    let isMoving = false;

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.18;
      cursorY += (mouseY - cursorY) * 0.18;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(animateCursor);
    };

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isMoving) {
        cursorX = mouseX;
        cursorY = mouseY;
        isMoving = true;
        cursor.classList.add('is-active');
        requestAnimationFrame(animateCursor);
      }
    });

    document.addEventListener('mouseleave', () => {
      cursor.classList.remove('is-active');
    });

    document.addEventListener('mouseenter', () => {
      cursor.classList.add('is-active');
    });

    document.addEventListener('mousedown', () => {
      cursor.classList.add('is-clicked');
    });

    document.addEventListener('mouseup', () => {
      cursor.classList.remove('is-clicked');
    });

    const interactiveSelector = 'a, button, input, select, textarea, label, .btn, .product-cat-card, .sub-product-card, .suitable-card, .faq-item, [role="button"]';

    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSelector)) {
        cursor.classList.add('is-hovering');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveSelector)) {
        cursor.classList.remove('is-hovering');
      }
    });
  };

  initCustomCursor();
});
