import { easeInOut, motion } from "framer-motion";

type ButtomTopProps = {
  children: React.ReactNode;
  className: string;
};

const ButtomTop = ({ children, className }: ButtomTopProps) => {
  const divVariants = {
    initial: {
      opacity: 0.5,
      y: "100%",
    },
    animate: {
      opacity: 1,
      y: "0",
      transition: {
        duration: 1.3,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      y: "100%",
    },
  };
  return (
    <motion.div
      variants={divVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ButtomTop;
