import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { Sun, Moon, Terminal, Search } from "lucide-react";
import { motion } from "framer-motion";

interface NavbarProps {
  onCommandPaletteOpen: () => void;
}

export function Navbar({ onCommandPaletteOpen }: NavbarProps) {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Convert route to terminal-style path
  const terminalPath = `~${
    location.pathname === "/" ? "/home" : location.pathname
  }`;

  const navLinks = [
    { path: "/", label: "home" },
    { path: "/about", label: "about" },
    { path: "/experience", label: "experience" },
    { path: "/projects", label: "projects" },
    { path: "/skills", label: "skills" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div
        className="nav-bar flex items-center justify-between rounded-xl px-3 sm:px-6 py-3 sm:py-4 gap-2 sm:gap-4
          dark:bg-mocha-mantle/70 bg-bone-paper/95 
          dark:border-mocha-mauve/20 border-bone-ash/30 
          border backdrop-blur-md dark:shadow-lg dark:shadow-mocha-mauve/10"
      >
        {/* Terminal Path */}
        <Link
          to="/"
          className="flex items-center gap-1 sm:gap-2 hover:opacity-80 transition-opacity min-w-max"
        >
          <Terminal className="w-4 h-4 dark:text-mocha-mauve text-latte-mauve flex-shrink-0" />
          <span className="font-mono text-xs sm:text-sm">
            <span className="terminal-path-segment dark:text-mocha-green text-latte-green hidden sm:inline">
              jacob
            </span>
            <span className="terminal-path-segment dark:text-mocha-overlay2 text-bone-pencil hidden sm:inline">
              @
            </span>
            <span className="terminal-path-segment dark:text-mocha-blue text-latte-blue hidden sm:inline">
              portfolio
            </span>
            <span className="terminal-path-segment dark:text-mocha-overlay2 text-bone-pencil hidden sm:inline">
              :
            </span>
            <span className="terminal-path-segment dark:text-mocha-mauve text-latte-mauve">
              {terminalPath}
            </span>
            <span className="cursor-blink dark:text-mocha-text text-bone-ink">
              _
            </span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link px-3 py-1.5 rounded-md font-mono text-sm transition-colors
                  ${
                    location.pathname === link.path
                      ? "nav-link-active dark:bg-mocha-surface0 dark:text-mocha-mauve bg-bone-cream text-latte-mauve"
                      : "dark:text-mocha-subtext1 text-bone-pencil dark:hover:text-mocha-text hover:text-bone-ink dark:hover:bg-mocha-surface0/50 hover:bg-bone-cream/50"
                  }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Command Palette Button - Icon on small/medium, text on large */}
          <button
            onClick={onCommandPaletteOpen}
            className="keyboard-shortcut flex items-center justify-center p-1.5 lg:px-2 lg:py-1.5 rounded-md font-mono text-xs
                dark:text-mocha-subtext1 text-bone-pencil
                dark:hover:bg-mocha-surface0/50 hover:bg-bone-cream/50
                border transition-colors flex-shrink-0"
            aria-label="Open command palette (⌘/Ctrl + K)"
          >
            <Search className="w-4 h-4 lg:hidden" />
            <span className="hidden lg:inline">⌘/Ctrl + K</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 sm:p-2 rounded-md transition-colors
                dark:text-mocha-subtext1 text-bone-pencil
                dark:hover:bg-mocha-surface0/50 hover:bg-bone-cream/50
                flex-shrink-0"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
