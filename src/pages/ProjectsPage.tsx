import { BentoCard, GithubIcon } from "../components/ui";
import { BentoGrid } from "../components/layout";
import { FolderGit2, ExternalLink, Play } from "lucide-react";

interface Project {
  name: string;
  description: string;
  tech: string[];
  highlights: string[];
  link?: string;
  github?: string;
  video?: string;
}

// Icon color classes for each project (full class strings for Tailwind)
const projectIconClasses = [
  "dark:text-mocha-blue text-latte-blue",         // VentureCircle
  "dark:text-mocha-sapphire text-latte-sapphire", // Vantage
  "dark:text-mocha-peach text-latte-peach",       // FantasyGuide
];

const projects: Project[] = [
  {
    name: "VentureCircle",
    description:
      'All-in-one entrepreneurship platform facilitating the "Idea to IPO" lifecycle.',
    tech: ["React", "Django", "Python", "Firebase", "unittest"],
    highlights: [
      "Co-founded an all-in-one entrepreneurship platform; built a community forum and an AI-driven support ecosystem.",
      "Engineered a comprehensive unit test suite using Python's unittest framework to verify backend controller functions and ensure data integrity across Firebase interactions.",
      "Selected for McGill's competitive TechAccel Program (Summer 2025); validated the business model through mentorship and market research, securing $1,250 in grant funding.",
    ],
    link: "https://venturecircle.io/",
  },
  {
    name: "Vantage",
    description:
      "Real-time multimodal voice assistant with screen context awareness.",
    tech: ["Django Channels", "Gemini API", "WebSocket", "MongoDB", "Docker", "pytest-asyncio"],
    highlights: [
      "Built a real-time multimodal voice assistant using Django Channels and Google's Gemini 2.5 Flash Native Audio API with full-duplex WebSocket streaming for audio capture, screen context, and AI response playback.",
      "Engineered a Push-to-Talk system with deferred screen capture that synchronizes visual context with voice queries.",
      "Containerized with Docker Compose and implemented MongoDB persistence with async test coverage using pytest-asyncio.",
    ],
    video: "https://www.youtube.com/watch?v=O69Y7m8nO_I",
  },
  {
    name: "FantasyGuide",
    description:
      "Full-stack web app for fantasy football optimization with AI-driven recommendations.",
    tech: ["React", "Flask", "SQL", "BeautifulSoup", "Pandas", "OpenAI API"],
    highlights: [
      "Built a full-stack web app for fantasy football optimization using React, Flask, and SQL.",
      "Automated player data scraping with BeautifulSoup and analyzed it using Pandas.",
      "Integrated OpenAI's API to provide AI-driven roster recommendations, improving user engagement with personalized insights.",
    ],
    video: "https://youtu.be/EM8tWZOGKWI",
  },
];

function ProjectCard({ project, delay, colorIndex }: { project: Project; delay: number; colorIndex: number }) {
  const iconColorClass = projectIconClasses[colorIndex] || projectIconClasses[0];
  
  return (
    <BentoCard
      title={project.name.toLowerCase().replace(/\s/g, "-")}
      colSpan={2}
      delay={delay}
    >
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="icon-container p-2 rounded-lg dark:bg-mocha-surface0 bg-bone-cream shrink-0">
              <FolderGit2 className={`w-5 h-5 ${iconColorClass}`} />
            </div>
            <div>
              <h3 className="font-serif text-lg dark:text-mocha-text text-bone-ink">
                {project.name}
              </h3>
              <p className="text-sm dark:text-mocha-subtext0 text-bone-pencil mt-1">
                {project.description}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link p-2 rounded-lg dark:bg-mocha-surface0 bg-bone-cream
                  dark:hover:bg-mocha-surface1 hover:bg-bone-ash/30 transition-colors"
                title="Visit site"
              >
                <ExternalLink className="w-4 h-4 dark:text-mocha-blue text-latte-blue" />
              </a>
            )}
            {project.video && (
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link p-2 rounded-lg dark:bg-mocha-surface0 bg-bone-cream
                  dark:hover:bg-mocha-surface1 hover:bg-bone-ash/30 transition-colors"
                title="Watch demo"
              >
                <Play className="w-4 h-4 dark:text-mocha-red text-latte-red" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link p-2 rounded-lg dark:bg-mocha-surface0 bg-bone-cream
                  dark:hover:bg-mocha-surface1 hover:bg-bone-ash/30 transition-colors"
                title="View source"
              >
                <GithubIcon className="w-4 h-4 dark:text-mocha-text text-bone-ink" />
              </a>
            )}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="skill-tag px-2 py-1 text-xs font-mono rounded-md
                bg-bone-cream text-bone-pencil"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <ul className="space-y-2">
          {project.highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm dark:text-mocha-subtext1 text-bone-pencil"
            >
              <span className={`${iconColorClass} mt-1`}>
                ▸
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </BentoCard>
  );
}

export function ProjectsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <BentoCard title="~/projects" colSpan={4} delay={0}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-serif font-bold dark:text-mocha-text text-bone-ink mb-2">
              Projects
            </h1>
            <p className="dark:text-mocha-subtext1 text-bone-pencil">
              Side projects and ventures I've been working on.
            </p>
          </div>
          <a
            href="https://github.com/Jacoba91"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-card-link flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm
              dark:bg-mocha-surface0 dark:text-mocha-text
              bg-bone-cream text-bone-ink
              dark:hover:bg-mocha-surface1 hover:bg-bone-ash/30
              transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View GitHub</span>
          </a>
        </div>
      </BentoCard>

      {/* Project Cards */}
      <BentoGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            delay={0.1 + index * 0.1}
            colorIndex={index}
          />
        ))}

        {/* More Projects Coming */}
        <BentoCard title="more-coming" colSpan={2} delay={0.3}>
          <div
            className="flex items-center justify-center h-32 rounded-lg 
            border-2 border-dashed dark:border-mocha-surface1 border-bone-ash/50"
          >
            <p className="font-mono text-sm dark:text-mocha-subtext0 text-bone-pencil">
              More projects coming soon...
            </p>
          </div>
        </BentoCard>
      </BentoGrid>
    </div>
  );
}
