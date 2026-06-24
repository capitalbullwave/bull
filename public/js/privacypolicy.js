/* =========================================================
   PRIVACY POLICY PAGE - BULL WAVE CAPITAL JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MOBILE MENU
  ========================= */

  const menuBtn = document.querySelector(".menu-btn");
  const mobileNav = document.querySelector(".mobile-nav");

  function closeMobileMenu() {
    if (!menuBtn || !mobileNav) return;

    mobileNav.classList.remove("active");
    menuBtn.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "true");
  }

  if (menuBtn && mobileNav) {

    menuBtn.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "true");

    menuBtn.addEventListener("click", () => {

      const isOpen = mobileNav.classList.toggle("active");

      menuBtn.classList.toggle("active", isOpen);
      menuBtn.setAttribute("aria-expanded", String(isOpen));
      mobileNav.setAttribute("aria-hidden", String(!isOpen));

    });

    document.querySelectorAll(".mobile-nav a").forEach(link => {
      link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    });
  }

  /* =========================
     SCROLL REVEAL
  ========================= */

  const reveals = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }

      });

    }, {
      threshold: 0.15
    });

    reveals.forEach(el => observer.observe(el));

  } else {

    reveals.forEach(el => el.classList.add("active"));

  }

  /* =========================
     SCROLL PROGRESS BAR
  ========================= */

  const scrollProgress = document.querySelector(".scroll-progress");

  function updateScrollProgress() {

    if (!scrollProgress) return;

    const scrollTop =
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const percentage =
      height > 0 ? (scrollTop / height) * 100 : 0;

    scrollProgress.style.width = percentage + "%";
  }

  updateScrollProgress();

  window.addEventListener(
    "scroll",
    updateScrollProgress,
    { passive: true }
  );

  /* =========================
     NAVBAR SHADOW
  ========================= */

  const navbar = document.querySelector(".navbar");

  function updateNavbarShadow() {

    if (!navbar) return;

    navbar.style.boxShadow =
      window.scrollY > 50
        ? "0 10px 30px rgba(15,23,42,0.08)"
        : "none";
  }

  updateNavbarShadow();

  window.addEventListener(
    "scroll",
    updateNavbarShadow,
    { passive: true }
  );

  /* =========================
     FLOATING BACKGROUND EFFECT
  ========================= */

  const ball1 = document.querySelector(".ball-1");
  const ball2 = document.querySelector(".ball-2");

  const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const isTouchDevice =
    window.matchMedia("(pointer: coarse)").matches;

  if (
    ball1 &&
    ball2 &&
    !prefersReducedMotion &&
    !isTouchDevice
  ) {

    let frame = null;

    document.addEventListener("mousemove", event => {

      if (frame) cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {

        const x = event.clientX / 35;
        const y = event.clientY / 35;

        ball1.style.transform =
          `translate(${x}px, ${y}px)`;

        ball2.style.transform =
          `translate(${-x}px, ${-y}px)`;

      });

    });
  }

});