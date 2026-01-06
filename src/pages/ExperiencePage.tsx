import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BentoCard } from "../components/ui";
import { Briefcase, Calendar, ChevronDown } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  tech: string[];
  highlights: string[];
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "CareHive Health",
    role: "Software Engineering Intern",
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
    highlights: [
      "Built and shipped a full-stack Reminder Engine to re-engage members on incomplete cost-saving actions; rolled out from 0 → 9 services with per-service checkpoints and deep links.",
      "Designed a multi-reminder stack UI with a custom sorting algorithm, surfacing the highest-value next step and boosting action completion rates.",
      "Proactively identified and fixed a data-integrity defect in referral navigation that caused missing records, resulting in restored referral histories.",
      "Refactored reminders into an isolated component and added extensive unit tests, improving reliability and developer velocity.",
      "Implemented custom Braze funnel events (entry, checkpoint, completion) to enable targeted email/SMS outreach.",
    ],
  },
  {
    company: "Clearer.io",
    role: "Junior Software Engineer",
    period: "Sep 2024 - Apr 2025",
    link: "https://www.clearer.io/",
    tech: ["React", "JavaScript", "Node.js", "PostgreSQL", "Redis", "AWS S3"],
    highlights: [
      "Worked on the Rich Returns Shopify app, implementing full-stack features using a CI/CD pipeline.",
      "Identified and patched a critical vulnerability in user checkout by implementing stricter server-side validation in Node.js.",
      'Spearheaded the creation of the "Instant Exchanges" feature, integrating Stripe payments directly into the return flow, streamlining for 39% of customers.',
      "Enhanced the user dashboard by integrating live shipment status updates, boosting shipment-related user insights by 50%.",
    ],
  },
  {
    company: "Clearer.io",
    role: "Software Engineering Intern",
    period: "May 2024 - Aug 2024",
    link: "https://www.clearer.io/",
    tech: ["React", "Node.js", "PostgreSQL", "AWS S3"],
    highlights: [
      "Developed a full-stack solution with a new API endpoint and controller to remove photo references from the front-end, database, and AWS S3.",
      "Executed a seamless production database migration, resolving a critical issue and impacting over 900 users with minimal downtime.",
    ],
  },
];

function ExperienceCard({
  experience,
  delay,
}: {
  experience: ExperienceItem;
  delay: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <BentoCard
      title={experience.company.toLowerCase().replace(/\./g, "")}
      colSpan={4}
      delay={delay}
    >
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="icon-container p-2 rounded-lg dark:bg-mocha-surface0 bg-bone-cream shrink-0">
              <Briefcase className="w-5 h-5 dark:text-mocha-mauve text-latte-mauve" />
            </div>
            <div>
              <h3 className="font-serif text-lg dark:text-mocha-text text-bone-ink">
                {experience.role}
              </h3>
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
          <div className="date-display flex items-center gap-2 text-sm dark:text-mocha-subtext0 text-bone-pencil shrink-0">
            <Calendar className="w-4 h-4" />
            <span className="font-mono">{experience.period}</span>
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
        <AnimatePresence>
          {isExpanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2 overflow-hidden"
            >
              {experience.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm dark:text-mocha-subtext1 text-bone-pencil"
                >
                  <span className="dark:text-mocha-green text-latte-green mt-1">
                    ▸
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="chevron-toggle w-full flex justify-center pt-2"
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
    <div className="space-y-6">
      {/* Header */}
      <BentoCard title="~/experience" colSpan={4} delay={0}>
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
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={`${exp.company}-${exp.period}`}
            experience={exp}
            delay={0.1 + index * 0.1}
          />
        ))}
      </div>
    </div>
  );
}
