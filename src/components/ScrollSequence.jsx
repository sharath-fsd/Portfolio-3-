import { useEffect, useRef } from "react";

const FRAME_COUNT = 240;
const FRAME_PATH = "/ezgif-5eed6a413f647cc1-jpg/ezgif-frame-";
const EASING = 0.16;

const frameSource = (index) =>
  `${FRAME_PATH}${String(index + 1).padStart(3, "0")}.jpg`;

export default function ScrollSequence({ endMarkerSelector }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: false, desynchronized: true });
    if (!canvas || !context) return undefined;

    const sequenceEndMarker = document.querySelector(endMarkerSelector);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const frames = new Array(FRAME_COUNT);
    let currentFrame = 0;
    let targetFrame = 0;
    let displayedFrame = -1;
    let animationFrameId = 0;
    let idleCallbackId = 0;
    let preloadTimerId = 0;
    let disposed = false;

    const nearestLoadedFrame = (index) => {
      if (frames[index]?.complete && frames[index].naturalWidth) return index;

      for (let offset = 1; offset < FRAME_COUNT; offset += 1) {
        const before = index - offset;
        const after = index + offset;

        if (before >= 0 && frames[before]?.complete && frames[before].naturalWidth) {
          return before;
        }

        if (after < FRAME_COUNT && frames[after]?.complete && frames[after].naturalWidth) {
          return after;
        }
      }

      return -1;
    };

    const drawFrame = (index) => {
      const image = frames[index];
      if (disposed || !image?.complete || !image.naturalWidth) return;

      const scale = Math.max(
        canvas.width / image.naturalWidth,
        canvas.height / image.naturalHeight,
      );
      const width = image.naturalWidth * scale;
      const height = image.naturalHeight * scale;
      const x = (canvas.width - width) * 0.5;
      const y = (canvas.height - height) * 0.5;

      context.drawImage(image, x, y, width, height);
      displayedFrame = index;
    };

    const drawNearestFrame = () => {
      const requestedFrame = Math.max(
        0,
        Math.min(FRAME_COUNT - 1, Math.round(currentFrame)),
      );
      loadFrame(requestedFrame);
      const availableFrame = nearestLoadedFrame(requestedFrame);

      if (availableFrame !== -1 && availableFrame !== displayedFrame) {
        drawFrame(availableFrame);
      }
    };

    function loadFrame(index) {
      if (disposed || index < 0 || index >= FRAME_COUNT || frames[index]) return;

      const image = new Image();
      frames[index] = image;
      image.decoding = "async";
      image.src = frameSource(index);
      image.addEventListener(
        "load",
        () => {
          if (!disposed && (index === 0 || index === Math.round(currentFrame))) {
            drawNearestFrame();
          }
        },
        { once: true },
      );
    }

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * pixelRatio);
      canvas.height = Math.round(window.innerHeight * pixelRatio);
      displayedFrame = -1;
      drawNearestFrame();
    };

    const scrollProgress = () => {
      const documentRange = document.documentElement.scrollHeight - window.innerHeight;
      const portraitBoundary = sequenceEndMarker
        ? sequenceEndMarker.offsetTop - window.innerHeight
        : documentRange;
      const scrollRange = Math.max(1, Math.min(documentRange, portraitBoundary));

      return scrollRange > 0
        ? Math.min(1, Math.max(0, window.scrollY / scrollRange))
        : 0;
    };

    const updateTargetFrame = () => {
      targetFrame = reducedMotion.matches ? 0 : scrollProgress() * (FRAME_COUNT - 1);
    };

    const animate = () => {
      const distance = targetFrame - currentFrame;
      currentFrame = Math.abs(distance) < 0.01 ? targetFrame : currentFrame + distance * EASING;
      drawNearestFrame();

      if (currentFrame !== targetFrame) {
        animationFrameId = window.requestAnimationFrame(animate);
      } else {
        animationFrameId = 0;
      }
    };

    const requestRender = () => {
      updateTargetFrame();
      if (!animationFrameId) animationFrameId = window.requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
      requestRender();
    };

    const preloadFrames = () => {
      loadFrame(0);

      const preload = () => {
        for (let index = 1; index < FRAME_COUNT; index += 1) loadFrame(index);
      };

      if ("requestIdleCallback" in window) {
        idleCallbackId = window.requestIdleCallback(preload, { timeout: 1200 });
      } else {
        preloadTimerId = window.setTimeout(preload, 0);
      }
    };

    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", handleResize);
    reducedMotion.addEventListener("change", requestRender);

    preloadFrames();
    resizeCanvas();
    requestRender();

    return () => {
      disposed = true;
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", handleResize);
      reducedMotion.removeEventListener("change", requestRender);
      window.cancelAnimationFrame(animationFrameId);
      window.clearTimeout(preloadTimerId);
      if (idleCallbackId && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleCallbackId);
      }
    };
  }, [endMarkerSelector]);

  return <canvas ref={canvasRef} id="sequence" aria-hidden="true" />;
}
