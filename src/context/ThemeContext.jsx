import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  // Read from localStorage or fallback to defaults
  const [theme, setThemeState] = useState(() => {
    return localStorage.getItem("theme") || "zinc";
  });

  const [mode, setModeState] = useState(() => {
    const saved = localStorage.getItem("mode");
    if (saved) return saved;
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return systemPrefersDark ? "dark" : "light";
  });

  // Apply theme and mode to document root
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("dark", mode === "dark");

    localStorage.setItem("theme", theme);
    localStorage.setItem("mode", mode);
  }, [theme, mode]);

  // Ensure theme stays in sync with system on first mount
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = (e) => {
      if (!localStorage.getItem("mode")) {
        setModeState(e.matches ? "dark" : "light");
      }
    };
    mediaQuery.addEventListener("change", handleSystemChange);

    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, []);

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const setMode = (newMode) => {
    setModeState(newMode);
    localStorage.setItem("mode", newMode);
  };
  const value = { theme, setTheme, mode, setMode };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
