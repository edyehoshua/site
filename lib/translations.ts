export type Language = "en" | "es";

export type Translations = {
  greeting: string;
  projects: string;
  education: string;
  art: string;
  projectDescriptions: {
    davar: string;
    rocket: string;
    car: string;
  };
  educationItem: string;
  artDescriptions: {
    music: string;
    bible: string;
  };
  wip: string;
  privateLabel: string;
  themeToDark: string;
  themeToLight: string;
  themeToggle: string;
};

export const translations: Record<Language, Translations> = {
  en: {
    greeting: "hello friend",
    projects: "PROJECTS",
    education: "EDUCATION",
    art: "ART",
    projectDescriptions: {
      davar: "Emunah app",
      rocket: "markets copilot data",
      car: "long distance ride sharing",
    },
    educationItem: "Major in Business Administration",
    artDescriptions: {
      music: "making music with AI",
      bible: "learning about the bible and doing midrash",
    },
    wip: "[wip]",
    privateLabel: "private",
    themeToDark: "dark",
    themeToLight: "light",
    themeToggle: "Switch color theme",
  },
  es: {
    greeting: "hello friend",
    projects: "PROYECTOS",
    education: "EDUCACIÓN",
    art: "ARTE",
    projectDescriptions: {
      davar: "app de Emunah",
      rocket: "datos del copiloto de mercados",
      car: "ride sharing de larga distancia",
    },
    educationItem: "Licenciatura en Administración de Empresas",
    artDescriptions: {
      music: "haciendo música con IA",
      bible: "aprendiendo sobre la biblia y haciendo midrash",
    },
    wip: "[en desarrollo]",
    privateLabel: "privado",
    themeToDark: "oscuro",
    themeToLight: "claro",
    themeToggle: "Cambiar tema",
  },
};

export function detectLanguage(): Language {
  if (typeof window === "undefined") return "en";

  const browserLang = navigator.language.toLowerCase();

  if (browserLang.startsWith("es")) {
    return "es";
  }

  return "en";
}
