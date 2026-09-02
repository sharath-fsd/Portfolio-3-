import { useEffect, useState } from "react";

export default function useTypewriter(text) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let characterIndex = 0;
    let deleting = false;
    let timerId;

    const run = () => {
      if (reducedMotion.matches) {
        setDisplayText(text);
        return;
      }

      setDisplayText(text.slice(0, characterIndex));

      if (!deleting && characterIndex === text.length) {
        deleting = true;
        timerId = window.setTimeout(run, 1350);
        return;
      }

      if (deleting && characterIndex === 0) {
        deleting = false;
        timerId = window.setTimeout(run, 500);
        return;
      }

      characterIndex += deleting ? -1 : 1;
      timerId = window.setTimeout(run, deleting ? 85 : 145);
    };

    const restart = () => {
      window.clearTimeout(timerId);
      characterIndex = reducedMotion.matches ? text.length : 0;
      deleting = false;
      run();
    };

    reducedMotion.addEventListener("change", restart);
    restart();

    return () => {
      reducedMotion.removeEventListener("change", restart);
      window.clearTimeout(timerId);
    };
  }, [text]);

  return displayText;
}
