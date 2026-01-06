import { motion } from "framer-motion";
import { BentoCard } from "../components/ui";
import { BentoGrid } from "../components/layout";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <BentoGrid>
      {/* Hero Card - Large */}
      <BentoCard title="~/home" colSpan={2} rowSpan={2} delay={0}>
        <div className="h-full flex flex-col justify-between min-h-[280px]">
          <div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-serif font-bold mb-4 dark:text-mocha-text text-bone-ink"
            >
              Jacob Aragao
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg dark:text-mocha-subtext1 text-bone-pencil font-mono mb-6"
            >
              Software Engineering @ McGill University
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="dark:text-mocha-subtext0 text-bone-pencil leading-relaxed"
            >
              Building full-stack applications with a focus on clean
              architecture and user experience. Currently working with
              TypeScript, React, and Node.js.
            </motion.p>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://github.com/Jacoba91"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link p-2 rounded-lg dark:bg-mocha-surface0 bg-bone-cream 
                dark:hover:bg-mocha-surface1 hover:bg-bone-ash/30 transition-colors"
            >
              <Github className="w-5 h-5 dark:text-mocha-text text-bone-ink" />
            </a>
            <a
              href="https://www.linkedin.com/in/jacob-aragao-710664255/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link p-2 rounded-lg dark:bg-mocha-surface0 bg-bone-cream 
                dark:hover:bg-mocha-surface1 hover:bg-bone-ash/30 transition-colors"
            >
              <Linkedin className="w-5 h-5 dark:text-mocha-text text-bone-ink" />
            </a>
            <a
              href="mailto:jacobaragao1@gmail.com"
              className="icon-link p-2 rounded-lg dark:bg-mocha-surface0 bg-bone-cream 
                dark:hover:bg-mocha-surface1 hover:bg-bone-ash/30 transition-colors"
            >
              <Mail className="w-5 h-5 dark:text-mocha-text text-bone-ink" />
            </a>
          </div>
        </div>
      </BentoCard>

      {/* Location Card */}
      <BentoCard title="location" delay={0.1}>
        <div className="flex items-center gap-4">
          <div className="icon-container p-4 rounded-lg dark:bg-mocha-surface0 bg-bone-cream">
            <MapPin className="w-6 h-6 dark:text-mocha-mauve text-latte-mauve" />
          </div>
          <div className="space-y-1">
            <p className="font-serif text-lg dark:text-mocha-text text-bone-ink">
              Toronto, Canada
            </p>
            <p className="text-sm dark:text-mocha-subtext0 text-bone-pencil font-mono">
              EST (UTC-5)
            </p>
          </div>
        </div>
      </BentoCard>

      {/* Education Card */}
      <BentoCard title="education" delay={0.15}>
        <div className="flex items-center gap-4">
          <div className="icon-container p-4 rounded-lg dark:bg-mocha-surface0 bg-bone-cream">
            <GraduationCap className="w-6 h-6 dark:text-mocha-blue text-latte-blue" />
          </div>
          <div className="space-y-1">
            <p className="font-serif dark:text-mocha-text text-bone-ink">
              McGill University
            </p>
            <p className="text-sm dark:text-mocha-subtext0 text-bone-pencil font-mono">
              B.Eng Software (Co-op)
            </p>
            <p className="text-xs dark:text-mocha-subtext0 text-bone-pencil font-mono">
              2022 - 2027
            </p>
          </div>
        </div>
      </BentoCard>

      {/* Current Role Card */}
      <BentoCard title="recent work" colSpan={2} delay={0.2}>
        <div className="flex items-start gap-5">
          <div className="icon-container p-4 rounded-lg dark:bg-mocha-surface0 bg-bone-cream">
            <Briefcase className="w-6 h-6 dark:text-mocha-green text-latte-green" />
          </div>
          <div className="flex-1 space-y-2">
            <p className="font-serif text-lg dark:text-mocha-text text-bone-ink">
              Software Engineering Intern
            </p>
            <p className="dark:text-mocha-mauve text-latte-mauve font-mono">
              @ CareHive Health
            </p>
            <p className="text-sm dark:text-mocha-subtext0 text-bone-pencil mt-1">
              Building reminder engines and multi-service features with
              TypeScript, SolidJS, and PostgreSQL.
            </p>
          </div>
        </div>
      </BentoCard>

      {/* Quick Links */}
      <BentoCard title="quick-nav" colSpan={2} delay={0.25}>
        <div className="grid grid-cols-2 gap-4">
          <Link
            to="/experience"
            className="nav-card-link flex items-center justify-between p-4 rounded-lg
              dark:bg-mocha-surface0/50 bg-bone-cream/50
              dark:hover:bg-mocha-surface0 hover:bg-bone-cream
              transition-colors group"
          >
            <span className="font-mono text-sm dark:text-mocha-text text-bone-ink">
              experience
            </span>
            <ArrowRight
              className="w-4 h-4 dark:text-mocha-subtext0 text-bone-pencil 
              group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            to="/projects"
            className="nav-card-link flex items-center justify-between p-4 rounded-lg
              dark:bg-mocha-surface0/50 bg-bone-cream/50
              dark:hover:bg-mocha-surface0 hover:bg-bone-cream
              transition-colors group"
          >
            <span className="font-mono text-sm dark:text-mocha-text text-bone-ink">
              projects
            </span>
            <ArrowRight
              className="w-4 h-4 dark:text-mocha-subtext0 text-bone-pencil 
              group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            to="/skills"
            className="nav-card-link flex items-center justify-between p-4 rounded-lg
              dark:bg-mocha-surface0/50 bg-bone-cream/50
              dark:hover:bg-mocha-surface0 hover:bg-bone-cream
              transition-colors group"
          >
            <span className="font-mono text-sm dark:text-mocha-text text-bone-ink">
              skills
            </span>
            <ArrowRight
              className="w-4 h-4 dark:text-mocha-subtext0 text-bone-pencil 
              group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            to="/about"
            className="nav-card-link flex items-center justify-between p-4 rounded-lg
              dark:bg-mocha-surface0/50 bg-bone-cream/50
              dark:hover:bg-mocha-surface0 hover:bg-bone-cream
              transition-colors group"
          >
            <span className="font-mono text-sm dark:text-mocha-text text-bone-ink">
              about
            </span>
            <ArrowRight
              className="w-4 h-4 dark:text-mocha-subtext0 text-bone-pencil 
              group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </BentoCard>

      {/* Status Card */}
      <BentoCard title="status" delay={0.3}>
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-mocha-green animate-pulse" />
            <div className="absolute inset-0 w-3 h-3 rounded-full bg-mocha-green/50 animate-ping" />
          </div>
          <span className="font-mono text-sm dark:text-mocha-text text-bone-ink">
            Open to opportunities
          </span>
        </div>
      </BentoCard>

      {/* Achievements */}
      <BentoCard title="achievements" delay={0.35}>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="dark:text-mocha-yellow text-latte-peach">★</span>
            <p className="text-sm dark:text-mocha-subtext1 text-bone-pencil">
              Top 15% Faculty of Engineering (2024-25)
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="dark:text-mocha-yellow text-latte-peach">★</span>
            <p className="text-sm dark:text-mocha-subtext1 text-bone-pencil">
              McGill TechAccel Program (2025)
            </p>
          </div>
        </div>
      </BentoCard>

      {/* Resume Link */}
      <BentoCard title="resume" delay={0.4}>
        <a
          href={`${import.meta.env.BASE_URL}JacobAragaoResume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-card-link flex items-center justify-between p-4 rounded-lg
            dark:bg-mocha-surface0/50 bg-bone-cream/50
            dark:hover:bg-mocha-surface0 hover:bg-bone-cream
            transition-colors group"
        >
          <span className="font-mono text-sm dark:text-mocha-text text-bone-ink">
            Download Resume
          </span>
          <ExternalLink
            className="w-4 h-4 dark:text-mocha-subtext0 text-bone-pencil 
            group-hover:scale-110 transition-transform"
          />
        </a>
      </BentoCard>
    </BentoGrid>
  );
}
