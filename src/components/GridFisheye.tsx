"use client";

import { useEffect, useRef } from "react";

/**
 * Faint square grid that reacts to the cursor:
 *  - whole grid drifts slightly toward the pointer (parallax / "background moves")
 *  - a circular lens magnifies the grid lines under the pointer (fisheye bulge)
 * ponytail: CSS-magnifier fake fisheye, no WebGL/SVG-displacement. Good enough; swap for
 * feDisplacementMap if a true lens warp is ever needed.
 */
export default function GridFisheye({ dark = false }: { dark?: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  const lens = useRef<HTMLDivElement>(null);
  const base = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        // parallax: drift base grid a few px toward cursor
        const dx = (x / r.width - 0.5) * 24;
        const dy = (y / r.height - 0.5) * 24;
        if (base.current)
          base.current.style.transform = `translate(${dx}px, ${dy}px) scale(1.05)`;
        // lens follows cursor
        if (lens.current) {
          lens.current.style.opacity = "1";
          lens.current.style.setProperty("--lx", `${x}px`);
          lens.current.style.setProperty("--ly", `${y}px`);
          // align magnified grid so lines flow continuously into the lens
          lens.current.style.backgroundPosition = `${-x * 0.5}px ${-y * 0.5}px`;
        }
      });
    };
    const onLeave = () => {
      if (lens.current) lens.current.style.opacity = "0";
      if (base.current) base.current.style.transform = "scale(1.05)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  const gridClass = dark ? "bg-grid-dark" : "bg-grid";

  return (
    <div ref={root} className="absolute inset-0 overflow-hidden" aria-hidden>
      <div
        ref={base}
        className={`absolute inset-[-3%] ${gridClass} transition-transform duration-300 ease-out will-change-transform ${
          dark ? "" : "opacity-70"
        }`}
        style={{ transform: "scale(1.05)" }}
      />
      {/* fisheye lens: bigger grid cells, clipped to a circle that tracks the cursor */}
      <div
        ref={lens}
        className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 ${gridClass}`}
        style={{
          backgroundSize: "108px 108px",
          WebkitMaskImage:
            "radial-gradient(circle 130px at var(--lx, -999px) var(--ly, -999px), #000 0%, #000 45%, transparent 75%)",
          maskImage:
            "radial-gradient(circle 130px at var(--lx, -999px) var(--ly, -999px), #000 0%, #000 45%, transparent 75%)",
        }}
      />
    </div>
  );
}
