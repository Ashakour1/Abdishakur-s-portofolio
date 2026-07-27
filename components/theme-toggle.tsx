"use client";

import { Moon, Sun } from "lucide-react";
import posthog from "posthog-js";

const THEME_STORAGE_KEY = "preferred-theme";

export function ThemeToggle() {
  function handleClick() {
    const currentTheme =
      document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    posthog.capture("theme_toggled", { theme: nextTheme });
  }

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className=" inline-flex h-10 w-10 items-center justify-center rounded-md  text-foreground"
      onClick={handleClick}
    >
      <Sun className="theme-toggle__sun h-4 w-4" aria-hidden="true" />
      <Moon className="theme-toggle__moon h-4 w-4" aria-hidden="true" />
    </button>
  );
}
