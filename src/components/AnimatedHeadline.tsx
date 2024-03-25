import React from "react";
// import motion
import { motion } from "framer-motion";
import { fadeIn1, fadeIn2 } from "../styles/motions";

type AnimatedHeadlineProps = {
  text: string;
  className?: string;
};

const AnimatedHeadline = ({ text, className }: AnimatedHeadlineProps) => {
  return (
    <motion.h1
      variants={fadeIn1}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className={`h1 ${className}`}
    >
      {text.split(" ").map((word, index) => (
        <motion.span variants={fadeIn2} key={word + "-" + index}>
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedHeadline;
