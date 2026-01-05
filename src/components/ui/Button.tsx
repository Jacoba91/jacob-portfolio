import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const variantClasses = {
  primary: cn(
    "dark:bg-mocha-mauve dark:text-mocha-base",
    "bg-latte-mauve text-white",
    "hover:opacity-90"
  ),
  secondary: cn(
    "dark:bg-mocha-surface0 dark:text-mocha-text",
    "bg-bone-cream text-bone-ink",
    "hover:opacity-80"
  ),
  ghost: cn(
    "dark:text-mocha-text dark:hover:bg-mocha-surface0/50",
    "text-bone-ink hover:bg-bone-cream/50",
    "bg-transparent"
  ),
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "font-mono rounded-lg transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "dark:focus:ring-mocha-mauve dark:focus:ring-offset-mocha-base",
        "focus:ring-latte-mauve focus:ring-offset-bone-base",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
