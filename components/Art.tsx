"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { LinkIcon } from "@/components/LinkIcon";

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
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

type ArtLink = {
  label: string;
  href?: string;
  icon: () => React.JSX.Element;
};

export function Art() {
  const { t } = useLanguage();

  const artItems = [
    {
      name: "4s4f",
      description: t.artDescriptions.music,
      url: "https://suno.com/@4s4f",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/jhonnyisaacc/4s4f",
          icon: GithubIcon,
        },
      ] as ArtLink[],
    },
    {
      name: "shaul",
      description: t.artDescriptions.bible,
      url: "https://shaul.vercel.app",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/jhonnyisaacc/shaul",
          icon: GithubIcon,
        },
      ] as ArtLink[],
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-lg font-medium tracking-wide mb-6">{t.art}</h2>
      <ul className="space-y-2">
        {artItems.map((item) => (
          <li key={item.name} className="flex flex-wrap items-center gap-3">
            <span>—</span>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground no-underline hover:opacity-60 transition-opacity"
            >
              {item.name}
            </a>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:opacity-60 transition-opacity"
              aria-label={`Open ${item.name}`}
            >
              <LinkIcon />
            </a>
            <span className="text-muted">{item.description}</span>
            {item.links.length > 0 && (
              <div className="flex items-center gap-2">
                {item.links.map(({ label, href, icon: Icon }) =>
                  href ? (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-foreground hover:opacity-60 transition-opacity"
                    >
                      <Icon />
                    </a>
                  ) : (
                    <span
                      key={label}
                      aria-label={`${label} (no URL yet)`}
                      title={`${label} (no URL yet)`}
                      className="text-foreground/45"
                    >
                      <Icon />
                    </span>
                  ),
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
