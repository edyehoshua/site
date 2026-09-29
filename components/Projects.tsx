"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { LinkIcon } from "@/components/LinkIcon";

// Inline GitHub icon
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Project {
  name: string;
  description: string;
  url?: string;
  githubUrl?: string;
  isWip: boolean;
  isPrivate?: boolean;
}

export function Projects() {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      name: "davar",
      description: t.projectDescriptions.davar,
      url: "https://davar.bible",
      githubUrl: "https://github.com/jhonnyisaacc/davar",
      isWip: false,
    },
    {
      name: "rocket",
      description: t.projectDescriptions.rocket,
      githubUrl: "https://github.com/jhonnyisaacc/rocket",
      isWip: false,
    },
    {
      name: "car",
      description: t.projectDescriptions.car,
      url: "https://car-demo.pages.dev",
      githubUrl: "https://github.com/jhonnyisaacc/car",
      isWip: false,
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-lg font-medium tracking-wide mb-6">{t.projects}</h2>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.name} className="flex items-center gap-3">
            <span>—</span>
            <span className="text-foreground">{project.name}</span>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:opacity-60 transition-opacity"
                aria-label={`Open ${project.name}`}
              >
                <LinkIcon />
              </a>
            )}
            <span className="text-muted">{project.description}</span>
            {project.isWip && (
              <span className="font-mono italic text-sm text-faint">
                {t.wip}
              </span>
            )}
            {project.isPrivate && (
              <span className="font-mono italic text-sm text-faint">
                {t.privateLabel}
              </span>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:opacity-60 transition-opacity"
                aria-label={`GitHub repository for ${project.name}`}
              >
                <GithubIcon />
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
