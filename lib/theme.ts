export const themeInitScript = `(function(){try{var stored=localStorage.getItem("theme");var dark=stored==="dark"||(stored!=="light"&&matchMedia("(prefers-color-scheme: dark)").matches);var root=document.documentElement;root.classList.toggle("dark",dark);root.classList.toggle("light",stored==="light");root.style.colorScheme=dark?"dark":"light";}catch(e){}})();`;

export function toggleTheme() {
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  const currentlyDark =
    root.classList.contains("dark") ||
    (stored !== "light" &&
      !root.classList.contains("light") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  const nextDark = !currentlyDark;

  root.classList.toggle("dark", nextDark);
  root.classList.toggle("light", !nextDark);
  root.style.colorScheme = nextDark ? "dark" : "light";
  localStorage.setItem("theme", nextDark ? "dark" : "light");

  const color = nextDark ? "#141311" : "#FAF9F6";
  document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
    meta.setAttribute("content", color);
  });
}
