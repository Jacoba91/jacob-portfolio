import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { Navbar } from "../components/layout";
import { Starfield, CommandPalette } from "../components/features";

export function RootLayout() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const location = useLocation();

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setIsCommandPaletteOpen((prev) => !prev);
    }
  }, []);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="min-h-screen transition-colors duration-300 relative">
      <Starfield />
      <Navbar onCommandPaletteOpen={() => setIsCommandPaletteOpen(true)} />
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />
      <main className="relative z-10 min-h-screen pt-24 px-4 pb-12 flex justify-center">
        <div className="w-full max-w-6xl flex items-center justify-center min-h-[calc(100vh-120px)]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
