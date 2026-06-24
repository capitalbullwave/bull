'use client';

import { useEffect } from 'react';
import { createIcons, icons } from 'lucide';
import { observeCounters, observeReveal } from '@/lib/page-animations';

type PageName = 'home' | 'about' | 'services' | 'insight' | 'plans' | 'contact';

type PageEffectsProps = {
  page: PageName;
};

function refreshIcons() {
  createIcons({ icons });
}

function initHomeEffects(): () => void {
  const cleanups: Array<() => void> = [];

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  const navbar = document.querySelector('.navbar');
  const pageTransition = document.querySelector('.page-transition');

  if (mobileMenuBtn && navMenu) {
    const onMenuClick = () => {
      const isOpen = navMenu.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active', isOpen);
      mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
      mobileMenuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.setAttribute('aria-label', 'Open menu');
      }
    };

    mobileMenuBtn.addEventListener('click', onMenuClick);
    document.addEventListener('keydown', onKeyDown);

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.setAttribute('aria-label', 'Open menu');
      });
    });

    cleanups.push(() => {
      mobileMenuBtn.removeEventListener('click', onMenuClick);
      document.removeEventListener('keydown', onKeyDown);
    });
  }

  const onScroll = () => navbar?.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  cleanups.push(() => window.removeEventListener('scroll', onScroll));

  const preloader = document.getElementById('preloader');
  document.body.classList.add('page-loaded');

  const hidePreloader = () => preloader?.classList.add('hide');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const preloaderTimer = window.setTimeout(hidePreloader, reducedMotion ? 300 : 1850);
  const preloaderFallback = window.setTimeout(hidePreloader, 3000);
  cleanups.push(() => {
    window.clearTimeout(preloaderTimer);
    window.clearTimeout(preloaderFallback);
  });

  const animatedItems = document.querySelectorAll(
    '[data-animate], .stat-card, .tool-card, .trader-container, .telegram-box, .cta, .market-disclaimer, .footer-newsletter',
  );

  animatedItems.forEach((item) => item.classList.add('reveal'));
  cleanups.push(observeReveal(
    '[data-animate], .stat-card, .tool-card, .trader-container, .telegram-box, .cta, .market-disclaimer, .footer-newsletter',
    ['is-visible', 'show'],
    0.16,
  ));

  document.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute('href');
    if (
      !href ||
      href.startsWith('#') ||
      href.startsWith('http') ||
      link.getAttribute('target') === '_blank' ||
      link.hasAttribute('download')
    ) {
      return;
    }

    const onClick = (event: Event) => {
      if (!pageTransition) return;
      event.preventDefault();
      pageTransition.classList.add('active');
      window.setTimeout(() => {
        window.location.href = href;
      }, 260);
    };

    link.addEventListener('click', onClick);
    cleanups.push(() => link.removeEventListener('click', onClick));
  });

  const galleryImages = document.querySelectorAll('.gallery-img');
  const galleryDots = document.querySelectorAll('.gallery-dots button');
  let galleryIndex = 0;

  const showGalleryImage = (index: number) => {
    if (!galleryImages.length) return;
    galleryImages.forEach((image) => image.classList.remove('active'));
    galleryDots.forEach((dot) => dot.classList.remove('active'));
    galleryImages[index]?.classList.add('active');
    galleryDots[index]?.classList.add('active');
    galleryIndex = index;
  };

  galleryDots.forEach((dot, index) => {
    const onDotClick = () => showGalleryImage(index);
    dot.addEventListener('click', onDotClick);
    cleanups.push(() => dot.removeEventListener('click', onDotClick));
  });

  let galleryInterval: ReturnType<typeof setInterval> | undefined;
  if (galleryImages.length > 1) {
    galleryInterval = setInterval(() => {
      showGalleryImage((galleryIndex + 1) % galleryImages.length);
    }, 3000);
    cleanups.push(() => {
      if (galleryInterval) clearInterval(galleryInterval);
    });
  }

  return () => cleanups.forEach((cleanup) => cleanup());
}

function initMenuBtnEffects(menuBtnId: string, mobileMenuId: string): () => void {
  const menuBtn = document.getElementById(menuBtnId);
  const mobileMenu = document.getElementById(mobileMenuId);
  if (!menuBtn || !mobileMenu) return () => undefined;

  const closeMenu = () => {
    mobileMenu.classList.remove('active');
    menuBtn.textContent = '☰';
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Open menu');
  };

  const toggleMenu = () => {
    const isOpen = mobileMenu.classList.toggle('active');
    menuBtn.textContent = isOpen ? '✕' : '☰';
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    menuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  };

  const onResize = () => {
    if (window.innerWidth > 768) closeMenu();
  };

  menuBtn.addEventListener('click', toggleMenu);
  window.addEventListener('resize', onResize);

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  return () => {
    menuBtn.removeEventListener('click', toggleMenu);
    window.removeEventListener('resize', onResize);
  };
}

function initServicesEffects(): () => void {
  const cleanups: Array<() => void> = [];
  const scrollBar = document.querySelector('.scroll-bar') as HTMLElement | null;
  const menuBtn = document.querySelector('.menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a');

  const updateScrollProgress = () => {
    if (!scrollBar) return;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    scrollBar.style.width = `${height > 0 ? (scrollTop / height) * 100 : 0}%`;
  };

  const updateNavbarShadow = () => navbar?.classList.toggle('scrolled', window.scrollY > 20);

  const updateActiveNavigation = () => {
    if (!sections.length || !navLinks.length) return;
    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop - 180;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      link.classList.remove('active');
      if (currentSection && href?.includes(`#${currentSection}`)) {
        link.classList.add('active');
      }
    });
  };

  let ticking = false;
  const handleScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateScrollProgress();
      updateNavbarShadow();
      updateActiveNavigation();
      ticking = false;
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  updateScrollProgress();
  updateNavbarShadow();
  updateActiveNavigation();
  cleanups.push(() => window.removeEventListener('scroll', handleScroll));
  cleanups.push(observeReveal('.reveal', ['active'], 0.15));

  const closeMobileMenu = () => {
    navMenu?.classList.remove('active');
    menuBtn?.classList.remove('active');
    menuBtn?.setAttribute('aria-expanded', 'false');
  };

  if (menuBtn && navMenu) {
    const onMenuClick = (event: Event) => {
      event.stopPropagation();
      const isOpen = navMenu.classList.toggle('active');
      menuBtn.classList.toggle('active', isOpen);
      menuBtn.setAttribute('aria-expanded', String(isOpen));
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMobileMenu();
    };

    const onDocumentClick = (event: Event) => {
      if (
        navMenu.classList.contains('active') &&
        !navMenu.contains(event.target as Node) &&
        !menuBtn.contains(event.target as Node)
      ) {
        closeMobileMenu();
      }
    };

    menuBtn.addEventListener('click', onMenuClick);
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('click', onDocumentClick);
    navLinks.forEach((link) => link.addEventListener('click', closeMobileMenu));

    cleanups.push(() => {
      menuBtn.removeEventListener('click', onMenuClick);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('click', onDocumentClick);
    });
  }

  return () => cleanups.forEach((cleanup) => cleanup());
}

function initInsightEffects(): () => void {
  const cleanups: Array<() => void> = [];
  const menuBtn = document.getElementById('menuBtn');
  const navMenu = document.getElementById('navMenu');

  if (menuBtn && navMenu) {
    const onMenuClick = () => {
      const isOpen = navMenu.classList.toggle('active');
      menuBtn.classList.toggle('active', isOpen);
      menuBtn.setAttribute('aria-expanded', String(isOpen));
    };

    menuBtn.addEventListener('click', onMenuClick);
    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    cleanups.push(() => menuBtn.removeEventListener('click', onMenuClick));
  }

  const onScroll = () => {
    document.querySelector('.navbar')?.classList.toggle('scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  cleanups.push(() => window.removeEventListener('scroll', onScroll));
  cleanups.push(observeReveal('.reveal', ['is-visible'], 0.12));

  return () => cleanups.forEach((cleanup) => cleanup());
}

function initPlansEffects(): () => void {
  const cleanups: Array<() => void> = [];
  const loader = document.getElementById('loader');
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburger');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const navbar = document.getElementById('navbar');
  const cursor = document.querySelector('.cursor-glow') as HTMLElement | null;

  const hideLoader = () => {
    if (!loader) return;
    loader.classList.add('hide');
    window.setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  };

  const loaderTimer = window.setTimeout(hideLoader, 2500);
  cleanups.push(() => window.clearTimeout(loaderTimer));

  const setMobileMenu = (open: boolean) => {
    if (!mobileMenu || !hamburger) return;
    mobileMenu.classList.toggle('open', open);
    mobileMenu.setAttribute('aria-hidden', String(!open));
    hamburger.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  const openMenu = () => setMobileMenu(true);
  const closeMenu = () => setMobileMenu(false);

  hamburger?.addEventListener('click', openMenu);
  closeMenuBtn?.addEventListener('click', closeMenu);
  mobileMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  const updateNavbar = () => navbar?.classList.toggle('scrolled', window.scrollY > 20);
  updateNavbar();
  window.addEventListener('scroll', updateNavbar, { passive: true });

  if (cursor) {
    const onMouseMove = (event: MouseEvent) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };
    window.addEventListener('mousemove', onMouseMove);
    cleanups.push(() => window.removeEventListener('mousemove', onMouseMove));
  }

  cleanups.push(observeReveal('.reveal', ['active'], 0.15));
  cleanups.push(observeCounters());

  const btnMonthly = document.getElementById('btnMonthly');
  const btnAnnual = document.getElementById('btnAnnual');
  const prices = {
    starter: { monthly: '999', annual: '749' },
    pro: { monthly: '5,999', annual: '4,499' },
    elite: { monthly: '9,999', annual: '7,499' },
  };

  const setBilling = (annual: boolean) => {
    btnMonthly?.classList.toggle('active', !annual);
    btnAnnual?.classList.toggle('active', annual);
    btnMonthly?.setAttribute('aria-selected', String(!annual));
    btnAnnual?.setAttribute('aria-selected', String(annual));

    const starter = document.getElementById('p-starter');
    const pro = document.getElementById('p-pro');
    const elite = document.getElementById('p-elite');
    if (starter) starter.textContent = annual ? prices.starter.annual : prices.starter.monthly;
    if (pro) pro.textContent = annual ? prices.pro.annual : prices.pro.monthly;
    if (elite) elite.textContent = annual ? prices.elite.annual : prices.elite.monthly;

    const billLabel = annual ? 'annually' : 'monthly';
    const billStarter = document.getElementById('bill-starter');
    const billPro = document.getElementById('bill-pro');
    const billElite = document.getElementById('bill-elite');
    if (billStarter) billStarter.textContent = billLabel;
    if (billPro) billPro.textContent = billLabel;
    if (billElite) billElite.textContent = billLabel;
  };

  btnMonthly?.addEventListener('click', () => setBilling(false));
  btnAnnual?.addEventListener('click', () => setBilling(true));

  cleanups.push(() => {
    window.removeEventListener('scroll', updateNavbar);
    hamburger?.removeEventListener('click', openMenu);
    closeMenuBtn?.removeEventListener('click', closeMenu);
  });

  return () => cleanups.forEach((cleanup) => cleanup());
}

function initContactEffects(): () => void {
  const cleanups: Array<() => void> = [];
  document.body.classList.add('page-loaded');

  const onScroll = () => {
    document.querySelector('.navbar')?.classList.toggle('scrolled', window.scrollY > 10);
  };

  window.addEventListener('scroll', onScroll);
  cleanups.push(() => window.removeEventListener('scroll', onScroll));
  cleanups.push(initMenuBtnEffects('menuBtn', 'mobileMenu'));
  cleanups.push(observeReveal('[data-animate], .reveal', ['is-visible', 'show'], 0.16));

  const contactForm = document.getElementById('contactForm') as HTMLFormElement | null;
  const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement | null;
  const formStatus = document.getElementById('formStatus');

  if (contactForm && submitBtn && formStatus) {
    const onSubmit = async (event: Event) => {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        formStatus.style.color = '#f04438';
        formStatus.textContent = 'Please fill all required fields correctly.';
        contactForm.reportValidity();
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      formStatus.textContent = '';

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { Accept: 'application/json' },
        });

        if (response.ok) {
          contactForm.reset();
          formStatus.style.color = '#16a34a';
          formStatus.textContent = 'Message sent successfully! We will get back to you soon.';
        } else {
          throw new Error('Form submission failed');
        }
      } catch {
        formStatus.style.color = '#f04438';
        formStatus.textContent = 'Message failed. Please try again or contact us directly.';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message →';
      }
    };

    contactForm.addEventListener('submit', onSubmit);
    cleanups.push(() => contactForm.removeEventListener('submit', onSubmit));
  }

  let selectedRating = 0;
  const stars = document.querySelectorAll('#stars button');
  const ratingText = document.getElementById('ratingText');
  const reviewForm = document.getElementById('reviewForm');
  const reviewsList = document.getElementById('reviewsList');
  const reviewMsg = document.getElementById('reviewMsg');

  const updateStars = (rating: number) => {
    stars.forEach((star) => {
      const value = Number((star as HTMLButtonElement).dataset.rating);
      star.classList.toggle('active', value <= rating);
    });
    if (ratingText) {
      ratingText.textContent = rating > 0 ? `${rating} out of 5 stars` : 'Select your rating';
    }
  };

  stars.forEach((star) => {
    star.addEventListener('click', () => {
      selectedRating = Number((star as HTMLButtonElement).dataset.rating);
      updateStars(selectedRating);
    });
  });

  if (reviewsList) {
    reviewsList.innerHTML = `
      <div class="review-item">
        <p>No reviews yet. Be the first to share your feedback.</p>
      </div>
    `;
  }

  if (reviewForm) {
    const onReviewSubmit = (event: Event) => {
      event.preventDefault();
      const email = (document.getElementById('reviewEmail') as HTMLInputElement).value.trim();
      const comment = (document.getElementById('reviewComment') as HTMLTextAreaElement).value.trim();

      if (!email || !comment || selectedRating === 0) {
        if (reviewMsg) {
          reviewMsg.style.color = '#f04438';
          reviewMsg.textContent = 'Please enter email, rating and comment.';
        }
        return;
      }

      if (reviewMsg) {
        reviewMsg.style.color = '#16a34a';
        reviewMsg.textContent = 'Thank you for your feedback!';
      }

      (reviewForm as HTMLFormElement).reset();
      selectedRating = 0;
      updateStars(0);
    };

    reviewForm.addEventListener('submit', onReviewSubmit);
    cleanups.push(() => reviewForm.removeEventListener('submit', onReviewSubmit));
  }

  return () => cleanups.forEach((cleanup) => cleanup());
}

function initAboutEffects(): () => void {
  const cleanups: Array<() => void> = [];
  cleanups.push(initMenuBtnEffects('menuBtn', 'mobileMenu'));
  cleanups.push(observeReveal('.reveal, [data-animate]', ['is-visible', 'show'], 0.16));

  const onScroll = () => {
    document.querySelector('.navbar')?.classList.toggle('scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  cleanups.push(() => window.removeEventListener('scroll', onScroll));

  return () => cleanups.forEach((cleanup) => cleanup());
}

const pageInitializers: Record<PageName, () => (() => void) | void> = {
  home: initHomeEffects,
  about: initAboutEffects,
  services: initServicesEffects,
  insight: initInsightEffects,
  plans: initPlansEffects,
  contact: initContactEffects,
};

export default function PageEffects({ page }: PageEffectsProps) {
  useEffect(() => {
    let cleanup: (() => void) | void;

    const timer = window.setTimeout(() => {
      refreshIcons();
      cleanup = pageInitializers[page]();
      refreshIcons();
    }, 0);

    return () => {
      window.clearTimeout(timer);
      cleanup?.();
    };
  }, [page]);

  return null;
}
