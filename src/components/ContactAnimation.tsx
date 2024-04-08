// import component
import { Dandelion, Star } from "./Icons";
// import context
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

const ContactAnimation = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <div className="absolute right-[20%] top-[5%] lg:top-[15rem]">
      {mode === "light" ? <Dandelion /> : <Star />}
    </div>
  );
};

export default ContactAnimation;
