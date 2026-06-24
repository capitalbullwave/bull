export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function observeReveal(
  selector: string,
  activeClasses: string[],
  threshold = 0.15,
): () => void {
  const elements = document.querySelectorAll(selector);

  if (!elements.length) {
    return () => undefined;
  }

  if (prefersReducedMotion()) {
    elements.forEach((element) => {
      activeClasses.forEach((className) => element.classList.add(className));
    });
    return () => undefined;
  }

  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => {
      activeClasses.forEach((className) => element.classList.add(className));
    });
    return () => undefined;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        activeClasses.forEach((className) => entry.target.classList.add(className));
        observer.unobserve(entry.target);
      });
    },
    { threshold },
  );

  elements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}

export function observeCounters(): () => void {
  const counters = document.querySelectorAll('.counter');

  if (!counters.length || !('IntersectionObserver' in window)) {
    return () => undefined;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const counter = entry.target as HTMLElement;
        const target = Number(counter.dataset.target || 0);
        let count = 0;

        const updateCounter = () => {
          const increment = target / 100;
          count += increment;

          if (count < target) {
            counter.innerText = Math.ceil(count).toLocaleString();
            requestAnimationFrame(updateCounter);
          } else {
            counter.innerText = target.toLocaleString();
          }
        };

        updateCounter();
        observer.unobserve(counter);
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((counter) => observer.observe(counter));

  return () => observer.disconnect();
}
