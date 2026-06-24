/* =========================================================
   SERVICES PAGE - BULL WAVE CAPITAL JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const scrollBar = document.querySelector(".scroll-bar");
  const reveals = document.querySelectorAll(".reveal");
  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector(".nav-menu");
  const navbar = document.querySelector(".navbar");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-menu a");

  const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* =====================================
     SCROLL PROGRESS BAR
  ===================================== */

  function updateScrollProgress() {

    if (!scrollBar) return;

    const scrollTop =
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const percentage =
      height > 0 ? (scrollTop / height) * 100 : 0;

    scrollBar.style.width = percentage + "%";
  }

  /* =====================================
     NAVBAR SHADOW
  ===================================== */

  function updateNavbarShadow() {

    if (!navbar) return;

    navbar.classList.toggle(
      "scrolled",
      window.scrollY > 20
    );
  }

  /* =====================================
     REVEAL ANIMATION
  ===================================== */

  if (prefersReducedMotion) {

    reveals.forEach(element => {
      element.classList.add("active");
    });

  } else if ("IntersectionObserver" in window) {

    const revealObserver =
      new IntersectionObserver(entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("active");

            revealObserver.unobserve(
              entry.target
            );
          }

        });

      }, {
        threshold: 0.15
      });

    reveals.forEach(element => {
      revealObserver.observe(element);
    });

  } else {

    function revealElements() {

      const windowHeight =
        window.innerHeight;

      reveals.forEach(element => {

        const elementTop =
          element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
          element.classList.add("active");
        }

      });
    }

    revealElements();

    window.addEventListener(
      "scroll",
      revealElements,
      { passive: true }
    );
  }

  /* =====================================
     MOBILE MENU
  ===================================== */

  function closeMobileMenu() {

    if (!menuBtn || !navMenu) return;

    navMenu.classList.remove("active");

    menuBtn.classList.remove("active");

    menuBtn.setAttribute(
      "aria-expanded",
      "false"
    );
  }

  if (menuBtn && navMenu) {

    menuBtn.setAttribute(
      "aria-expanded",
      "false"
    );

    menuBtn.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        const isOpen =
          navMenu.classList.toggle("active");

        menuBtn.classList.toggle(
          "active",
          isOpen
        );

        menuBtn.setAttribute(
          "aria-expanded",
          String(isOpen)
        );
      }
    );

    navLinks.forEach(link => {
      link.addEventListener(
        "click",
        closeMobileMenu
      );
    });

    document.addEventListener(
      "keydown",
      event => {

        if (event.key === "Escape") {
          closeMobileMenu();
        }
      }
    );

    document.addEventListener(
      "click",
      event => {

        if (
          navMenu.classList.contains("active") &&
          !navMenu.contains(event.target) &&
          !menuBtn.contains(event.target)
        ) {
          closeMobileMenu();
        }
      }
    );
  }

  /* =====================================
     ACTIVE NAVIGATION
  ===================================== */

  function updateActiveNavigation() {

    if (
      !sections.length ||
      !navLinks.length
    ) return;

    let currentSection = "";

    sections.forEach(section => {

      const sectionTop =
        section.offsetTop - 180;

      if (
        window.scrollY >= sectionTop
      ) {
        currentSection =
          section.getAttribute("id");
      }

    });

    navLinks.forEach(link => {

      const href =
        link.getAttribute("href");

      link.classList.remove("active");

      if (
        currentSection &&
        href &&
        href.includes(
          "#" + currentSection
        )
      ) {
        link.classList.add("active");
      }
    });
  }

  /* =====================================
     SCROLL EVENTS
  ===================================== */

  let ticking = false;

  function handleScroll() {

    if (ticking) return;

    ticking = true;

    requestAnimationFrame(() => {

      updateScrollProgress();
      updateNavbarShadow();
      updateActiveNavigation();

      ticking = false;
    });
  }

  updateScrollProgress();
  updateNavbarShadow();
  updateActiveNavigation();

  window.addEventListener(
    "scroll",
    handleScroll,
    { passive: true }
  );

});