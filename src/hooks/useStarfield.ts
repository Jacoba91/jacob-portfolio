import { useEffect, useRef, useCallback } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  pz: number;
}

interface UseStarfieldOptions {
  starCount?: number;
  speed?: number;
  starColor?: string;
}

export function useStarfield(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  options: UseStarfieldOptions = {}
) {
  const { starCount = 800, speed = 2, starColor = '#cdd6f4' } = options;
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>(0);

  const initStars = useCallback((width: number, height: number) => {
    const stars: Star[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * width,
        pz: 0,
      });
    }
    starsRef.current = stars;
  }, [starCount]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars(canvas.width, canvas.height);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;

      // Clear canvas completely for transparent background
      ctx.clearRect(0, 0, width, height);

      for (const star of starsRef.current) {
        star.pz = star.z;
        star.z -= speed;

        if (star.z <= 0) {
          star.x = Math.random() * width - centerX;
          star.y = Math.random() * height - centerY;
          star.z = width;
          star.pz = star.z;
        }

        // 3D perspective projection
        const sx = (star.x / star.z) * 300 + centerX;
        const sy = (star.y / star.z) * 300 + centerY;
        const px = (star.x / star.pz) * 300 + centerX;
        const py = (star.y / star.pz) * 300 + centerY;

        // Size based on depth
        const size = Math.max(0, (1 - star.z / width) * 3);
        
        // Draw star trail
        ctx.beginPath();
        ctx.strokeStyle = starColor;
        ctx.lineWidth = size;
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.stroke();

        // Draw star point
        ctx.beginPath();
        ctx.fillStyle = starColor;
        ctx.arc(sx, sy, size / 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, [canvasRef, initStars, speed, starColor]);

  return { starsRef };
}
