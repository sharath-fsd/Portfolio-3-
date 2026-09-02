import { useEffect } from "react";

export default function useRevealOnScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealItems = Array.from(document.querySelectorAll(".reveal"));

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8%" },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);
}
