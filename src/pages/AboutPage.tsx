import { BentoCard } from "../components/ui";
import { BentoGrid } from "../components/layout";
import {
  GraduationCap,
  MapPin,
  Rocket,
  Trophy,
  Plane,
  Globe,
} from "lucide-react";

export function AboutPage() {
  return (
    <BentoGrid>
      {/* Main About Card */}
      <BentoCard title="~/about" colSpan={2} rowSpan={2} delay={0}>
        <div className="space-y-4">
          <h1 className="text-3xl font-serif font-bold dark:text-mocha-text text-bone-ink">
            About Me
          </h1>
          <div className="space-y-4 dark:text-mocha-subtext1 text-bone-pencil leading-relaxed">
            <p>
              I'm Jacob, a Software Engineering student at McGill University
              with a passion for solving problems.
            </p>
            <p>
              My journey in tech started with writing short scripts that made my
              life easier. That curiosity has evolved into a deep appreciation
              for full-stack development, where I get to see ideas transform
              from concept to deployment.
            </p>
            <p>
              Outside of work/school, I love pushing my limits athletically in
              competitive settings. I particularly enjoy going to the gym and
              playing hockey.
            </p>
          </div>
        </div>
      </BentoCard>

      {/* Education Card */}
      <BentoCard title="education" colSpan={2} delay={0.1}>
        <div className="flex items-start gap-4">
          <div className="icon-container p-3 rounded-lg dark:bg-mocha-surface0 bg-bone-cream shrink-0">
            <GraduationCap className="w-6 h-6 dark:text-mocha-blue text-latte-blue" />
          </div>
          <div>
            <h3 className="font-serif text-lg dark:text-mocha-text text-bone-ink">
              McGill University
            </h3>
            <p className="font-mono text-sm dark:text-mocha-mauve text-latte-mauve">
              Bachelor of Engineering in Software Engineering (Co-op)
            </p>
            <p className="text-sm dark:text-mocha-subtext0 text-bone-pencil mt-1">
              August 2022 - April 2027 • Montreal, Quebec
            </p>
            <p className="text-sm dark:text-mocha-subtext1 text-bone-pencil mt-2">
              Achieved distinction by placing in the top 15% of the Faculty of
              Engineering (2024-2025).
            </p>
          </div>
        </div>
      </BentoCard>

      {/* Location */}
      <BentoCard title="based-in" delay={0.15}>
        <div className="flex items-center gap-3">
          <div className="icon-container p-3 rounded-lg dark:bg-mocha-surface0 bg-bone-cream">
            <MapPin className="w-5 h-5 dark:text-mocha-red text-latte-red" />
          </div>
          <div>
            <p className="font-mono dark:text-mocha-text text-bone-ink">
              Toronto, Canada
            </p>
            <p className="text-sm dark:text-mocha-subtext0 text-bone-pencil">
              Open to remote & relocation
            </p>
          </div>
        </div>
      </BentoCard>

      {/* Languages */}
      <BentoCard title="languages" delay={0.2}>
        <div className="flex items-center gap-3">
          <div className="icon-container p-3 rounded-lg dark:bg-mocha-surface0 bg-bone-cream">
            <Globe className="w-5 h-5 dark:text-mocha-sapphire text-latte-sapphire" />
          </div>
          <div>
            <p className="font-mono dark:text-mocha-text text-bone-ink">
              English
            </p>
            <p className="text-sm dark:text-mocha-subtext0 text-bone-pencil">
              + Conversational French
            </p>
          </div>
        </div>
      </BentoCard>

      {/* Interests */}
      <BentoCard title="interests" colSpan={2} delay={0.25}>
        <div className="grid grid-cols-3 gap-4">
          <div
            className="icon-container flex flex-col items-center gap-2 p-3 rounded-lg 
            dark:bg-mocha-surface0/50 bg-bone-cream/50"
          >
            <Trophy className="w-6 h-6 dark:text-mocha-mauve text-latte-mauve" />
            <span className="text-sm font-mono dark:text-mocha-subtext1 text-bone-pencil text-center">
              Hockey
            </span>
          </div>
          <div
            className="icon-container flex flex-col items-center gap-2 p-3 rounded-lg 
            dark:bg-mocha-surface0/50 bg-bone-cream/50"
          >
            <Plane className="w-6 h-6 dark:text-mocha-peach text-latte-peach" />
            <span className="text-sm font-mono dark:text-mocha-subtext1 text-bone-pencil text-center">
              Traveling
            </span>
          </div>
          <div
            className="icon-container flex flex-col items-center gap-2 p-3 rounded-lg 
            dark:bg-mocha-surface0/50 bg-bone-cream/50"
          >
            <Rocket className="w-6 h-6 dark:text-mocha-red text-latte-red" />
            <span className="text-sm font-mono dark:text-mocha-subtext1 text-bone-pencil text-center">
              Startups
            </span>
          </div>
        </div>
      </BentoCard>

      {/* Philosophy */}
      <BentoCard title="quote" colSpan={2} delay={0.3}>
        <blockquote className="border-l-2 dark:border-mocha-mauve border-latte-mauve pl-4">
          <p className="font-serif italic text-lg dark:text-mocha-text text-bone-ink">
            "A problem well stated is a problem half solved."
          </p>
          <p className="font-serif text-lg dark:text-mocha-text text-bone-ink">
            — Charles Kettering
          </p>
        </blockquote>
      </BentoCard>
    </BentoGrid>
  );
}
