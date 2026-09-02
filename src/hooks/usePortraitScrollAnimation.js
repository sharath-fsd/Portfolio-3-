// import { useEffect } from "react";

// export default function usePortraitScrollAnimation(sectionRef) {
//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return undefined;

//     const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
//     let animationFrameId = 0;

//     const render = () => {
//       animationFrameId = 0;

//       if (reducedMotion.matches) {
//         section.style.setProperty("--portrait-shift", "0px");
//         section.style.setProperty("--portrait-scale", "1.02");
//         section.style.setProperty("--portrait-opacity", "1");
//         return;
//       }

//       const animationStart = section.offsetTop - window.innerHeight;
//       const animationEnd = document.documentElement.scrollHeight - window.innerHeight;
//       const scrollRange = Math.max(1, animationEnd - animationStart);
//       const progress = Math.min(
//         1,
//         Math.max(0, (window.scrollY - animationStart) / scrollRange),
//       );

//       section.style.setProperty("--portrait-shift", `${28 - progress * 56}px`);
//       section.style.setProperty("--portrait-scale", String(1.08 - progress * 0.06));
//       section.style.setProperty("--portrait-opacity", String(0.72 + progress * 0.28));
//     };

//     const requestRender = () => {
//       if (!animationFrameId) animationFrameId = window.requestAnimationFrame(render);
//     };

//     window.addEventListener("scroll", requestRender, { passive: true });
//     window.addEventListener("resize", requestRender);
//     reducedMotion.addEventListener("change", requestRender);
//     render();

//     return () => {
//       window.removeEventListener("scroll", requestRender);
//       window.removeEventListener("resize", requestRender);
//       reducedMotion.removeEventListener("change", requestRender);
//       window.cancelAnimationFrame(animationFrameId);
//       section.style.removeProperty("--portrait-shift");
//       section.style.removeProperty("--portrait-scale");
//       section.style.removeProperty("--portrait-opacity");
//     };
//   }, [sectionRef]);
// }
