import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { SunIcon, MoonIcon } from "../components/Icons";

const ModeSwitcher = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <button
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      className="w-8 rounded-full dark:bg-light"
    >
      {mode === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ModeSwitcher;
