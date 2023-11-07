export const titleVariant = {
  initial: {
    opacity: 0,
  },

  animate: (i: number) => ({
    opacity: 1,
    transition: {
      delay: 0.1 * i,
    },
  }),
} as const;

export const loremVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: 0.3 * index,
    },
  }),
} as const;

export const latest_card = {
  initial: {
    opacity: 0,
    x: -20,
  },

  animate: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      delay: 0.3 * i,
    },
  }),
};

export const staggerChildren = (index: number) => ({
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
    delay: 0.3 * index,
  },
});
