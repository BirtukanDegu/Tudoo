"use client";

import { useTheme } from "@/context/themeContext";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      className="relative flex items-center justify-center text-brand-orange dark:text-brand-cream size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <Sun
        className={`size-[1.2rem] transition-all ${
          isDark ? "scale-0 -rotate-90" : "scale-100 rotate-0"
        } text-gray-7`}
      />
      <Moon
        className={`absolute size-[1.2rem] transition-all ${
          isDark ? "scale-100 rotate-0" : "scale-0 rotate-90"
        } text-brand-cream`}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
