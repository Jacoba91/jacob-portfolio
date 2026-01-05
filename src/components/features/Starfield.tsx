import { useRef } from "react";
import { useStarfield } from "../../hooks/useStarfield";
import { useTheme } from "../../hooks/useTheme";

interface StarfieldProps {
  className?: string;
}

export function Starfield({ className = "" }: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  // Stars visible in dark mode with purple tints, subtle in light mode
  useStarfield(canvasRef, {
    starCount: theme === "dark" ? 500 : 250,
    speed: theme === "dark" ? 1.8 : 1.0,
    starColor: theme === "dark" ? "#b4befe" : "#a69c89",
  });

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{
        zIndex: 0,
        opacity: theme === "dark" ? 0.85 : 0.25,
        transition: "opacity 0.5s ease",
      }}
    />
  );
}
