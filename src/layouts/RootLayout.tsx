import { Outlet } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { Navbar } from "../components/layout";
import { Starfield, CommandPalette } from "../components/features";

export function RootLayout() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setIsCommandPaletteOpen((prev) => !prev);
    }
  }, []);

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
      <main className="relative z-10 min-h-screen flex items-center justify-center pt-24 px-4 pb-12">
        <div className="w-full max-w-6xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
