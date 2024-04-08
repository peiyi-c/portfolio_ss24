import { createContext, useEffect, useState } from "react";

// create context
export type ValueProps = {
  mode: string;
  setMode: (c: string) => void;
};

export const ThemeContext = createContext<ValueProps>({
  mode: "light",
  setMode: () => {},
});

interface ThemeProviderProps {
  value?: ValueProps;
  children: React.ReactNode | undefined;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const initialMode = "light";
  // theme state
  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    const local = window.localStorage.getItem("theme");
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (local) {
        let check = local === "dark" ? "dark" : "";
        if (check) setMode(check);
      } else if (mediaQuery.matches) {
        let check = mediaQuery.matches ? "dark" : "light";
        if (check) setMode(check);
      }

      if (mode === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
    if (mode === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
