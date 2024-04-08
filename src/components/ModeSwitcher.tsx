//import useThemeSwitcher from "./hooks/useThemeSwitcher";
// import component
import { LightBulbDark, LightBulb } from "./Icons";
// import context
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

const ModeSwitcher = () => {
  //const { mode, setMode } = useThemeSwitcher();
  const { mode, setMode } = useContext(ThemeContext);

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
