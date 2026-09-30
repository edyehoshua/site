"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { toggleTheme } from "@/lib/theme";

export function ThemeToggle() {
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t.themeToggle}
      className="theme-toggle mt-2 shrink-0 font-mono text-sm italic text-faint hover:text-foreground transition-colors"
    >
      <span className="when-light">{t.themeToDark}</span>
      <span className="when-dark">{t.themeToLight}</span>
    </button>
  );
}
