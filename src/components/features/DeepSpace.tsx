import { useEffect, useRef } from "react";
import { useTheme } from "../../hooks/useTheme";

interface StillStar {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  phase: number;
  twinkleSpeed: number;
}

// Calm counterpart to Starfield for reading pages: stars hold position and
// only twinkle in place (or freeze entirely under prefers-reduced-motion).
export function DeepSpace() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const starColor = theme === "dark" ? "180, 190, 254" : "166, 156, 137";
    let stars: StillStar[] = [];
    let animationId = 0;

    const initStars = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.round((canvas.width * canvas.height) / 3800);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() < 0.88 ? Math.random() * 0.9 + 0.3 : Math.random() * 1.4 + 1.1,
        baseAlpha: Math.random() * 0.55 + 0.25,
        phase: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.9 + 0.35,
      }));
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const star of stars) {
        const alpha =
          star.baseAlpha *
          (0.7 + 0.3 * Math.sin(star.phase + (time / 1000) * star.twinkleSpeed));
        ctx.beginPath();
        ctx.fillStyle = `rgba(${starColor}, ${alpha})`;
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        // faint cross glow on the handful of bigger stars
        if (star.radius > 1.1) {
          ctx.fillStyle = `rgba(${starColor}, ${alpha * 0.25})`;
          ctx.fillRect(star.x - star.radius * 3, star.y - 0.5, star.radius * 6, 1);
          ctx.fillRect(star.x - 0.5, star.y - star.radius * 3, 1, star.radius * 6);
        }
      }
    };

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const loop = (time: number) => {
      draw(time);
      animationId = requestAnimationFrame(loop);
    };

    const start = () => {
      initStars();
      cancelAnimationFrame(animationId);
      if (reducedMotion) {
        draw(0);
      } else {
        animationId = requestAnimationFrame(loop);
      }
    };

    start();
    window.addEventListener("resize", start);

    return () => {
      window.removeEventListener("resize", start);
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* nebula glows, dark mode only; keyed on the theme hook because dark:
          utilities here track the OS scheme, not the site toggle */}
      {theme === "dark" && (
        <div className="absolute inset-0">
          <div className="absolute -top-48 -left-48 w-[46rem] h-[46rem] rounded-full bg-mocha-mauve/10 blur-3xl" />
          <div className="absolute top-1/3 -right-56 w-[42rem] h-[42rem] rounded-full bg-mocha-blue/10 blur-3xl" />
          <div className="absolute -bottom-56 left-1/4 w-[40rem] h-[40rem] rounded-full bg-mocha-sapphire/5 blur-3xl" />
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{
          opacity: theme === "dark" ? 0.9 : 0.35,
          transition: "opacity 0.5s ease",
        }}
      />
    </div>
  );
}
