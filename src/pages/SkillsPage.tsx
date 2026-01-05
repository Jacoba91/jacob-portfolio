import { BentoCard } from "../components/ui";
import { BentoGrid } from "../components/layout";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Wrench,
  MessageSquare,
  Zap,
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL",
      "GraphQL",
      "HTML",
      "CSS",
      "Java",
      "C",
    ],
    color: "mauve",
  },
  {
    title: "Frameworks & Libraries",
    icon: <Zap className="w-5 h-5" />,
    skills: ["React", "Node.js", "Django", "SolidJS", "Flask", "Tailwind CSS"],
    color: "blue",
  },
  {
    title: "Databases & Storage",
    icon: <Database className="w-5 h-5" />,
    skills: ["PostgreSQL", "Firebase", "Redis", "AWS S3"],
    color: "green",
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    skills: ["AWS", "Git", "CI/CD", "Docker"],
    color: "sapphire",
  },
  {
    title: "Testing & Tools",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Jest", "Vitest", "unittest", "ESLint"],
    color: "peach",
  },
  {
    title: "API Integration",
    icon: <Server className="w-5 h-5" />,
    skills: [
      "RESTful APIs",
      "Shopify",
      "ShipStation",
      "OpenAI",
      "Stripe",
      "Braze",
    ],
    color: "yellow",
  },
];

const softSkills = [
  "Problem Solver",
  "Collaborative Team Player",
  "Agile Learner",
  "Clear Communicator",
  "Detail-Oriented",
];

function SkillCard({
  category,
  delay,
}: {
  category: SkillCategory;
  delay: number;
}) {
  const colorClasses: Record<string, string> = {
    mauve:
      "dark:text-mocha-mauve text-latte-mauve dark:bg-mocha-mauve/10 bg-latte-mauve/10",
    blue: "dark:text-mocha-blue text-latte-blue dark:bg-mocha-blue/10 bg-latte-blue/10",
    green:
      "dark:text-mocha-green text-latte-green dark:bg-mocha-green/10 bg-latte-green/10",
    sapphire:
      "dark:text-mocha-sapphire text-latte-sapphire dark:bg-mocha-sapphire/10 bg-latte-sapphire/10",
    peach:
      "dark:text-mocha-peach text-latte-peach dark:bg-mocha-peach/10 bg-latte-peach/10",
    yellow:
      "dark:text-mocha-yellow text-latte-peach dark:bg-mocha-yellow/10 bg-latte-peach/10",
  };

  return (
    <BentoCard
      title={category.title.toLowerCase().replace(/\s+/g, "-")}
      delay={delay}
    >
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div
            className={`icon-container p-2 rounded-lg ${
              colorClasses[category.color]
            }`}
          >
            {category.icon}
          </div>
          <h3 className="font-serif dark:text-mocha-text text-bone-ink">
            {category.title}
          </h3>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="skill-tag px-2 py-1 text-xs font-mono rounded-md
                bg-bone-cream text-bone-pencil
                hover:bg-bone-ash/30
                transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

export function SkillsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <BentoCard title="~/skills" colSpan={4} delay={0}>
        <div>
          <h1 className="text-3xl font-serif font-bold dark:text-mocha-text text-bone-ink mb-2">
            Skills & Technologies
          </h1>
          <p className="dark:text-mocha-subtext1 text-bone-pencil">
            Tools and technologies I work with regularly.
          </p>
        </div>
      </BentoCard>

      {/* Technical Skills */}
      <BentoGrid>
        {skillCategories.map((category, index) => (
          <SkillCard
            key={category.title}
            category={category}
            delay={0.1 + index * 0.05}
          />
        ))}

        {/* Soft Skills */}
        <BentoCard title="soft-skills" colSpan={2} delay={0.4}>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="icon-container p-2 rounded-lg dark:bg-mocha-red/10 bg-latte-red/10 
                dark:text-mocha-red text-latte-red"
              >
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-serif dark:text-mocha-text text-bone-ink">
                Soft Skills
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="skill-tag px-3 py-1.5 text-sm font-mono rounded-full
                    bg-bone-cream text-bone-pencil
                    border border-bone-ash/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* Learning */}
        <BentoCard title="currently-learning" colSpan={2} delay={0.45}>
          <div className="space-y-3">
            <p className="text-sm dark:text-mocha-subtext0 text-bone-pencil">
              Always expanding my toolkit:
            </p>
            <div className="flex flex-wrap gap-2">
              {["Rust", "Go", "Kubernetes", "System Design"].map((tech) => (
                <span
                  key={tech}
                  className="accent-tag px-2 py-1 text-xs font-mono rounded-md
                    bg-latte-mauve/20 text-latte-mauve
                    border border-latte-mauve/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </BentoCard>
      </BentoGrid>
    </div>
  );
}
