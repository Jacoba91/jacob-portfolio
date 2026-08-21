import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BentoCard } from "../components/ui";
import { Briefcase, Calendar, ChevronDown } from "lucide-react";

interface Role {
  role: string;
  period: string;
  highlights: string[];
}

interface ExperienceItem {
  company: string;
  period: string; // overall span across roles
  tech: string[];
  roles: Role[];
  link?: string;
}

// Icon color classes for each experience entry (full class strings for Tailwind)
const experienceIconClasses = [
  "dark:text-mocha-mauve text-latte-mauve",       // NationGraph
  "dark:text-mocha-green text-latte-green",        // CareHive Health
  "dark:text-mocha-blue text-latte-blue",          // Clearer.io
];

const experiences: ExperienceItem[] = [
  {
    company: "NationGraph",
    period: "May 2026 - Aug 2026",
    link: "https://nationgraph.com/",
    tech: [
      "React",
      "TypeScript",
      "Tailwind",
      "Python",
      "FastAPI",
      "Go",
      "PostgreSQL",
    ],
    roles: [
      {
        role: "Software Engineering Intern",
        period: "May 2026 - Aug 2026",
        highlights: [
          "Helped take the shared component library from 0 → 1, building 16 tested, documented components (~26% of it) and rebuilding app pages on top of them during a full UI overhaul.",
          "Owned the Signals feed overhaul, the primary user-facing page, rebuilding it into an inbox that stays fast under heavy data loads; query tuning cut bulk actions from ~10s to sub-second and a 504-prone query to ~30ms.",
          "Helped shape Compass, the agent-first experience, taking a product-engineering approach to what belonged on the agent homepage, which suggestions to surface, and where to draw the line between a quick action and a full workflow.",
          "Shipped a next-best-action recommendation feature end to end across the UI, API, and Go worker, parallelizing it into 3 streamed LLM calls that roughly halved round-trip latency.",
          "Drove product direction from the frontline (9 customer interviews and a ~40-ticket triage rotation), carrying opinions across AM, design, sales, and engineering into shipped work.",
        ],
      },
    ],
  },
  {
    company: "CareHive Health",
    period: "May 2025 - Aug 2025",
    link: "https://carehive.com/",
    tech: [
      "TypeScript",
      "SolidJS",
      "Node.js",
      "PostgreSQL",
      "Vitest",
      "Tailwind",
      "GitLab",
    ],
    roles: [
      {
        role: "Software Engineering Intern",
        period: "May 2025 - Aug 2025",
        highlights: [
          "Built and shipped a full-stack Reminder Engine to re-engage members on incomplete cost-saving actions; rolled out from 0 → 9 services with per-service checkpoints and deep links.",
          "Designed a multi-reminder stack UI with a custom sorting algorithm, surfacing the highest-value next step and boosting action completion rates.",
          "Proactively identified and fixed a data-integrity defect in referral navigation that caused missing records, resulting in restored referral histories.",
          "Refactored reminders into an isolated component and added extensive unit tests, improving reliability and developer velocity.",
          "Implemented custom Braze funnel events (entry, checkpoint, completion) to enable targeted email/SMS outreach.",
        ],
      },
    ],
  },
  {
    company: "Clearer.io",
    period: "May 2024 - Apr 2025",
    link: "https://www.clearer.io/",
    tech: ["React", "JavaScript", "Node.js", "PostgreSQL", "Redis", "AWS S3"],
    roles: [
      {
        role: "Junior Software Engineer",
        period: "Sep 2024 - Apr 2025",
        highlights: [
          "Worked on the Rich Returns Shopify app, implementing full-stack features using a CI/CD pipeline.",
          "Identified and patched a critical vulnerability in user checkout by implementing stricter server-side validation in Node.js.",
          'Spearheaded the creation of the "Instant Exchanges" feature, integrating Stripe payments directly into the return flow, streamlining for 39% of customers.',
          "Enhanced the user dashboard by integrating live shipment status updates, boosting shipment-related user insights by 50%.",
        ],
      },
      {
        role: "Software Engineering Intern",
        period: "May 2024 - Aug 2024",
        highlights: [
          "Developed a full-stack solution with a new API endpoint and controller to remove photo references from the front-end, database, and AWS S3.",
          "Executed a seamless production database migration, resolving a critical issue and impacting over 900 users with minimal downtime.",
        ],
      },
    ],
  },
];

function ExperienceCard({
  experience,
  delay,
  colorIndex,
}: {
  experience: ExperienceItem;
  delay: number;
  colorIndex: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const iconColorClass =
    experienceIconClasses[colorIndex] || experienceIconClasses[0];
  const isMultiRole = experience.roles.length > 1;
  const primaryRole = experience.roles[0];

  return (
    <BentoCard
      title={experience.company.toLowerCase().replace(/\./g, "")}
      colSpan={4}
      delay={delay}
      className="w-full"
    >
      <div className="space-y-4 min-w-0">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
          <div className="flex items-start gap-3 min-w-0">
            <div className="icon-container p-2 rounded-lg dark:bg-mocha-surface0 bg-bone-cream shrink-0">
              <Briefcase className={`w-5 h-5 ${iconColorClass}`} />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-serif text-lg dark:text-mocha-text text-bone-ink">
                  {primaryRole.role}
                </h3>
                {isMultiRole && (
                  <span
                    className={`skill-tag px-2 py-0.5 text-xs font-mono rounded-full bg-bone-cream text-bone-pencil ${iconColorClass}`}
                  >
                    +{experience.roles.length - 1} earlier role
                  </span>
                )}
              </div>
              {experience.link ? (
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm dark:text-mocha-subtext0 text-bone-pencil hover:underline"
                >
                  @ {experience.company}
                </a>
              ) : (
                <p className="font-mono text-sm dark:text-mocha-subtext0 text-bone-pencil">
                  @ {experience.company}
                </p>
              )}
            </div>
          </div>
          <div className="date-display flex items-center gap-2 text-sm dark:text-mocha-subtext0 text-bone-pencil sm:shrink-0 ml-11 sm:ml-0">
            <Calendar className="w-4 h-4 shrink-0" />
            <span className="font-mono whitespace-nowrap">
              {experience.period}
            </span>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {experience.tech.map((tech) => (
            <span
              key={tech}
              className="skill-tag px-2 py-1 text-xs font-mono rounded-md
                bg-bone-cream text-bone-pencil"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights - Collapsible */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="space-y-4">
                {experience.roles.map((role, roleIndex) => (
                  <div
                    key={role.role}
                    className={
                      isMultiRole && roleIndex > 0
                        ? "pt-4 border-t dark:border-mocha-surface0/60 border-bone-ash/30"
                        : ""
                    }
                  >
                    {/* Per-role subheading only when a company had multiple roles */}
                    {isMultiRole && (
                      <div className="flex items-baseline justify-between gap-3 mb-2">
                        <span
                          className={`font-mono text-sm font-medium ${iconColorClass}`}
                        >
                          {role.role}
                        </span>
                        <span className="font-mono text-xs dark:text-mocha-subtext0 text-bone-pencil whitespace-nowrap">
                          {role.period}
                        </span>
                      </div>
                    )}
                    <ul className="space-y-2">
                      {role.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2.5 text-sm leading-6 dark:text-mocha-subtext1 text-bone-pencil"
                        >
                          <span
                            className={`${iconColorClass} shrink-0 leading-6`}
                            aria-hidden
                          >
                            ▸
                          </span>
                          <span className="break-words min-w-0">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="chevron-toggle w-full flex justify-center pt-2"
          aria-label={isExpanded ? "Collapse details" : "Expand details"}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="p-1 rounded-full dark:hover:bg-mocha-surface0 hover:bg-bone-cream transition-colors"
          >
            <ChevronDown className="w-5 h-5 dark:text-mocha-subtext0 text-bone-pencil" />
          </motion.div>
        </button>
      </div>
    </BentoCard>
  );
}

export function ExperiencePage() {
  return (
    <div className="space-y-6 w-full max-w-full overflow-hidden">
      {/* Header */}
      <BentoCard title="~/experience" colSpan={4} delay={0} className="w-full">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-serif font-bold dark:text-mocha-text text-bone-ink mb-2">
              Work Experience
            </h1>
            <p className="dark:text-mocha-subtext1 text-bone-pencil">
              My professional journey building software at scale.
            </p>
          </div>
        </div>
      </BentoCard>

      {/* Experience Cards - Vertical Timeline */}
      <div className="space-y-6 w-full">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={exp.company}
            experience={exp}
            delay={0.1 + index * 0.1}
            colorIndex={index}
          />
        ))}
      </div>
    </div>
  );
}
