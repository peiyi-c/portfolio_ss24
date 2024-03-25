export const fadeIn1 = {
  initial: {
    opacity: 0.7,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.45,
      staggerChildren: 0.08,
    },
  },
};

export const fadeIn2 = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
