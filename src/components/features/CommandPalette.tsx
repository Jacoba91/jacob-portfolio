import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import {
  Search,
  Home,
  User,
  Briefcase,
  FolderGit2,
  Wrench,
  Sun,
  Moon,
  Github,
  Linkedin,
  Mail,
  X,
} from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Command {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
  keywords: string[];
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const commands: Command[] = [
    {
      id: "home",
      label: "cd ~/home",
      icon: <Home className="w-4 h-4" />,
      action: () => {
        navigate("/");
        onClose();
      },
      keywords: ["home", "main", "index", "cd"],
    },
    {
      id: "about",
      label: "cd ~/about",
      icon: <User className="w-4 h-4" />,
      action: () => {
        navigate("/about");
        onClose();
      },
      keywords: ["about", "me", "bio", "info", "cd"],
    },
    {
      id: "experience",
      label: "cd ~/experience",
      icon: <Briefcase className="w-4 h-4" />,
      action: () => {
        navigate("/experience");
        onClose();
      },
      keywords: ["experience", "work", "jobs", "career", "cd"],
    },
    {
      id: "projects",
      label: "cd ~/projects",
      icon: <FolderGit2 className="w-4 h-4" />,
      action: () => {
        navigate("/projects");
        onClose();
      },
      keywords: ["projects", "portfolio", "work", "cd"],
    },
    {
      id: "skills",
      label: "cd ~/skills",
      icon: <Wrench className="w-4 h-4" />,
      action: () => {
        navigate("/skills");
        onClose();
      },
      keywords: ["skills", "tech", "stack", "tools", "cd"],
    },
    {
      id: "theme-dark",
      label: "theme dark",
      icon: <Moon className="w-4 h-4" />,
      action: () => {
        setTheme("dark");
        onClose();
      },
      keywords: ["theme", "dark", "night", "midnight"],
    },
    {
      id: "theme-light",
      label: "theme light",
      icon: <Sun className="w-4 h-4" />,
      action: () => {
        setTheme("light");
        onClose();
      },
      keywords: ["theme", "light", "day", "bone", "white"],
    },
    {
      id: "github",
      label: "open github",
      icon: <Github className="w-4 h-4" />,
      action: () => {
        window.open("https://github.com/Jacoba91", "_blank");
        onClose();
      },
      keywords: ["github", "code", "repo", "open"],
    },
    {
      id: "linkedin",
      label: "open linkedin",
      icon: <Linkedin className="w-4 h-4" />,
      action: () => {
        window.open(
          "https://www.linkedin.com/in/jacob-aragao-710664255/",
          "_blank"
        );
        onClose();
      },
      keywords: ["linkedin", "social", "connect", "open"],
    },
    {
      id: "email",
      label: "send email",
      icon: <Mail className="w-4 h-4" />,
      action: () => {
        window.open("mailto:jacobaragao1@gmail.com", "_blank");
        onClose();
      },
      keywords: ["email", "mail", "contact", "send"],
    },
  ];

  const filteredCommands = commands.filter((cmd) => {
    if (!query) return true;
    const searchTerm = query.toLowerCase();
    return (
      cmd.label.toLowerCase().includes(searchTerm) ||
      cmd.keywords.some((kw) => kw.includes(searchTerm))
    );
  });

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((i) => (i + 1) % filteredCommands.length);
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex(
            (i) => (i - 1 + filteredCommands.length) % filteredCommands.length
          );
          break;
        case "Enter":
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action();
          }
          break;
        case "Escape":
          e.preventDefault();
          onClose();
          break;
      }
    },
    [isOpen, filteredCommands, selectedIndex, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="fixed left-1/2 top-[20%] z-50 -translate-x-1/2 w-full max-w-lg"
          >
            <div
              className="command-palette mx-4 rounded-xl overflow-hidden shadow-2xl
              dark:bg-mocha-mantle border dark:border-mocha-surface0
              bg-bone-paper border-bone-ash"
            >
              {/* Search Input */}
              <div className="command-palette-header flex items-center gap-3 px-4 py-3 border-b dark:border-mocha-surface0 border-bone-ash">
                <Search className="icon w-5 h-5 dark:text-mocha-subtext0 text-bone-pencil" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent outline-none font-mono text-sm
                    dark:text-mocha-text text-bone-ink
                    placeholder:dark:text-mocha-subtext0 placeholder:text-bone-pencil"
                  autoFocus
                />
                <button
                  onClick={onClose}
                  className="p-1 rounded dark:hover:bg-mocha-surface0 hover:bg-bone-cream"
                >
                  <X className="w-4 h-4 dark:text-mocha-subtext0 text-bone-pencil" />
                </button>
              </div>

              {/* Commands List */}
              <div className="max-h-80 overflow-y-auto py-2">
                {filteredCommands.length === 0 ? (
                  <div className="px-4 py-8 text-center font-mono text-sm dark:text-mocha-subtext0 text-bone-pencil">
                    No commands found
                  </div>
                ) : (
                  filteredCommands.map((cmd, index) => (
                    <button
                      key={cmd.id}
                      onClick={cmd.action}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`command-palette-item w-full flex items-center gap-3 px-4 py-2.5 font-mono text-sm transition-colors
                        ${
                          index === selectedIndex
                            ? "selected dark:bg-mocha-surface0 bg-bone-cream dark:text-mocha-mauve text-latte-mauve"
                            : "dark:text-mocha-text text-bone-ink dark:hover:bg-mocha-surface0/50 hover:bg-bone-cream/50"
                        }`}
                    >
                      <span
                        className={`icon ${
                          index === selectedIndex
                            ? "dark:text-mocha-mauve text-latte-mauve"
                            : "dark:text-mocha-subtext0 text-bone-pencil"
                        }`}
                      >
                        {cmd.icon}
                      </span>
                      <span>{cmd.label}</span>
                    </button>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="command-palette-footer flex items-center justify-between px-4 py-2 border-t dark:border-mocha-surface0 border-bone-ash">
                <div className="flex items-center gap-4 text-xs font-mono dark:text-mocha-subtext0 text-bone-pencil">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded dark:bg-mocha-surface0 bg-bone-cream">
                      ↑↓
                    </kbd>
                    navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded dark:bg-mocha-surface0 bg-bone-cream">
                      ↵
                    </kbd>
                    select
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded dark:bg-mocha-surface0 bg-bone-cream">
                      esc
                    </kbd>
                    close
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
