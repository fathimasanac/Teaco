/**
 * TEACO Official Single-Page Website - Main JavaScript Logic
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
  const heroVideo = document.getElementById('hero-video');
  const heroPoster = document.querySelector('.hero-poster-fallback');

  // --- Sticky Header Scroll Controller ---
  const handleScroll = () => {
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

    // Close menu when clicking any nav link
    navLinkItems.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        if (mobileNavToggle) {
          mobileNavToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // --- Hero Video Playback & Fallback Controller ---
  if (heroVideo) {
    // Check if video actually plays
    const handleVideoPlaying = () => {
      heroVideo.classList.add('playing');
    };

    heroVideo.addEventListener('playing', handleVideoPlaying);

    const playPromise = heroVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log('Video autoplay deferred or not supported. Displaying poster image.', error);
        if (heroPoster) {
          heroPoster.style.display = 'block';
        }
      });
    }
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
        quoteForm.innerHTML = `
          <div style="text-align: center; padding: 3rem 1rem;">
            <div style="width: 64px; height: 64px; border-radius: 50%; background-color: var(--brand-green-light); color: var(--brand-green); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto;">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 style="font-family: var(--font-serif); font-size: 1.75rem; margin-bottom: 0.75rem; color: var(--text-main);">Quote Request Received</h3>
            <p style="color: var(--text-muted); max-width: 440px; margin: 0 auto 1.75rem auto;">
              Thank you for reaching out to TEACO. Our commercial tea supply team in Dubai will review your requirements and get back to you shortly.
            </p>
            <button type="button" onclick="location.reload()" class="btn btn-outline-dark" style="font-size: 0.8125rem;">Submit Another Inquiry</button>
          </div>
        `;
      }, 1200);
    });
  }

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

    const animatedElements = document.querySelectorAll('.why-strip-item, .product-card, .product-card-fico, .contact-form-card, .ceo-image-frame, .ceo-quote-box');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      revealObserver.observe(el);
    });
  }
});
