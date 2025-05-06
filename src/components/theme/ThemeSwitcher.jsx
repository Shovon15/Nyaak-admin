import { Moon, Sun, Laptop } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "@/context/ThemeContext";
import clsx from "clsx";

const themes = [
  { name: "zinc", label: "Zinc", color: "bg-zinc-800" },
  { name: "rose", label: "Rose", color: "bg-rose-500" },
  { name: "blue", label: "Blue", color: "bg-blue-500" },
  { name: "green", label: "Green", color: "bg-green-500" },
];

export function ThemeSwitcher() {
  const { theme, setTheme, mode, setMode } = useTheme();

  const isSystem = localStorage.getItem("mode") === null;

  const handleModeToggle = () => {
    if (isSystem) {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setMode(prefersDark ? "dark" : "light");
    } else {
      setMode(mode === "light" ? "dark" : "light");
    }
  };

  const handleSystemToggle = () => {
    localStorage.removeItem("mode");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setMode(prefersDark ? "dark" : "light");
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="flex gap-2">
        {themes.map((t) => (
          <button
            key={t.name}
            onClick={() => setTheme(t.name)}
            className={clsx(
              "w-8 h-8 rounded-full border-2 border-transparent transition-all",
              t.color,
              theme === t.name &&
                "ring-2 ring-offset-2 ring-black dark:ring-white",
            )}
            title={t.label}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" onClick={handleModeToggle}>
          {mode === "light" ? (
            <Moon className="w-4 h-4" />
          ) : (
            <Sun className="w-4 h-4" />
          )}
          <span className="sr-only">Toggle light/dark</span>
        </Button>
        <Button variant="outline" size="icon" onClick={handleSystemToggle}>
          <Laptop className="w-4 h-4" />
          <span className="sr-only">Use system theme</span>
        </Button>
      </div>
    </div>
  );
}
