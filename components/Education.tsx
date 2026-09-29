'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { LinkIcon } from '@/components/LinkIcon';

export function Education() {
  const { t } = useLanguage();

  return (
    <section className="mb-12">
      <h2 className="text-lg font-medium tracking-wide mb-6">{t.education}</h2>
      <ul className="space-y-2">
        <li className="text-foreground">
          — {t.educationItem}, Universidad Monteávila{" "}
          <a
            href="https://www.uma.edu.ve/ciencias-administrativas/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex align-middle hover:opacity-60 transition-opacity"
            aria-label="Universidad Monteávila — Ciencias Administrativas"
          >
            <LinkIcon />
          </a>{" "}
          (2018–2022)
        </li>
      </ul>
    </section>
  );
}
