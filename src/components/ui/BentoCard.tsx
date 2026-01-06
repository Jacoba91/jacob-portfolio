import { motion } from "framer-motion";
import { TrafficLights } from "./TrafficLights";
import { cn } from "../../lib/utils";

interface BentoCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2 | 3;
  showTrafficLights?: boolean;
  delay?: number;
}

const colSpanClasses = {
  1: "col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
};

const rowSpanClasses = {
  1: "row-span-1",
  2: "md:row-span-2",
  3: "md:row-span-3",
};

export function BentoCard({
  title,
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
  showTrafficLights = true,
  delay = 0,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "bento-card rounded-xl border overflow-hidden",
        "dark:bg-mocha-mantle/70 dark:border-mocha-mauve/20",
        "bg-bone-paper/95 border-bone-ash/30",
        "backdrop-blur-md",
        "dark:shadow-lg dark:shadow-mocha-mauve/10",
        "hover:dark:border-mocha-mauve/40 hover:dark:bg-mocha-mantle/80",
        "hover:border-bone-ash/50",
        "transition-all duration-300",
        colSpanClasses[colSpan],
        rowSpanClasses[rowSpan],
        className
      )}
    >
      {/* Card Header */}
      <div className="bento-card-header flex items-center gap-4 pl-4 pr-[40px] py-4 border-b dark:border-mocha-mauve/10 dark:bg-mocha-crust/30 border-bone-ash/20">
        {showTrafficLights && <TrafficLights />}
        {title && (
          <span className="bento-card-title text-sm font-mono dark:text-mocha-subtext1 text-bone-pencil">
            {title}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="px-[40px] py-5">{children}</div>
    </motion.div>
  );
}
