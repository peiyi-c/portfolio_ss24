import { AnimatePresence, easeIn, motion } from "framer-motion";

type SectionFadeProps = {
  children: React.ReactNode;
  className: string;
};

const SectionFade = ({ children, className }: SectionFadeProps) => {
  const sectionVariants = {
    initial: {
      opacity: 0.65,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <AnimatePresence initial={true} mode="wait">
      <motion.section
        variants={sectionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={className}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  );
};

export default SectionFade;
