import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { LightBulbDark, LightBulb } from "./Icons";

const ModeSwitcher = () => {
  const { mode, setMode } = useThemeSwitcher();

  return (
    <button
      id="theme-button"
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      className="w-10 mt-2 text-dark dark:text-light"
      type="button"
      role="switch"
      aria-checked={mode === "dark" ? true : false}
    >
      {mode === "light" ? <LightBulbDark /> : <LightBulb />}
    </button>
  );
};

export default ModeSwitcher;
