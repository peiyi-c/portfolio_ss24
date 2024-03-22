import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { SunIcon, MoonIcon } from "../components/Icons";

const ModeSwitcher = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <button
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      className="w-8 rounded-full dark:bg-light"
      type="button"
      role="switch"
      aria-checked={mode === "dark" ? true : false}
    >
      {mode === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ModeSwitcher;
