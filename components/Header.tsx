"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { ThemeToggle } from "@/components/ThemeToggle";

// Inline SVG icons for reliability
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
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

const TelegramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.03 6.653a2.26 2.26 0 0 0-.126 4.089l3.9 1.307a1.082 1.082 0 0 0 .612.003l7.143-2.47a.72.72 0 0 1 .898.956l-2.52 5.083c-.165.334-.006.738.346.899l5.032 2.265a2.25 2.25 0 0 0 3.074-2.097L22.74 3.86a2.25 2.25 0 0 0-1.542-2.427Z" />
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <path d="M2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

const SpotifyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M7.5 10.5c3.6-1.2 6.8-.9 9.6.8" />
    <path d="M8.3 13.4c2.7-.9 5.1-.7 7.1.6" />
    <path d="M9.2 16.1c1.8-.6 3.4-.5 4.8.3" />
  </svg>
);

const AppleMusicIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 4v11.5a2.5 2.5 0 1 1-1.5-2.29V7.9L8 9.1v8.4A2.5 2.5 0 1 1 6.5 15.2V6.9L16 4z" />
  </svg>
);

const YouTubeMusicIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3" />
    <path d="M10.8 10.4l3 1.6-3 1.6v-3.2z" fill="currentColor" stroke="none" />
  </svg>
);

type SocialLink = {
  icon: () => React.JSX.Element;
  label: string;
  href?: string;
};

export function Header() {
  const { t } = useLanguage();

  const socialLinks: SocialLink[] = [
    { icon: GithubIcon, href: "https://github.com/jhonnyisaacc", label: "GitHub" },
    { icon: TelegramIcon, href: "https://t.me/jhonnyisaacc", label: "Telegram" },
    { icon: XIcon, href: "https://x.com/jhonnyisaacc", label: "X" },
    {
      icon: LinkedInIcon,
      href: "https://www.linkedin.com/in/jhonny-vergara/",
      label: "LinkedIn",
    },
    {
      icon: InstagramIcon,
      href: "https://www.instagram.com/jhonnyisaacc/",
      label: "Instagram",
    },
    {
      icon: SpotifyIcon,
      href: "https://open.spotify.com/album/7d5fJGUBbTlQcw2g5KqRSD?si=Z9oJ2gMNShyWc9zPQYhKSg",
      label: "Spotify",
    },
    { icon: AppleMusicIcon, label: "Apple Music" },
    {
      icon: YouTubeMusicIcon,
      href: "https://youtube.com/playlist?list=OLAK5uy_k67q5bEF-ZwgZGLwpgQcTCYo_ZdkdmqPU&si=Vdbu144Odvh1Nbe9",
      label: "YouTube Music",
    },
  ];

  return (
    <header className="mb-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold tracking-tight mb-6">
        {t.greeting}
      </h1>
      <div className="flex gap-4">
        {socialLinks.map(({ icon: Icon, href, label }) =>
          href ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:opacity-60 transition-opacity"
              aria-label={label}
            >
              <Icon />
            </a>
          ) : (
            <span
              key={label}
              className="text-foreground"
              aria-label={`${label} (no URL yet)`}
              title={`${label} (no URL yet)`}
            >
              <Icon />
            </span>
          ),
        )}
        <ThemeToggle />
      </div>
    </header>
  );
}
