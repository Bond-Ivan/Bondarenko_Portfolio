const animationProjects = {
  hidden: {
    opacity: 0,
    x: -300,
  },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.5, duration: 0.5 },
  }),
};

const animationStack = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};

const animationAbout = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.2, duration: 0.6 },
  },
};

const animationInfo = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.2, duration: 0.6 },
  },
};

const animationActivity = {
  hidden: {
    opacity: 0,
    x: 300,
  },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.5, duration: 0.5 },
  }),
};


export { animationProjects, animationStack, animationAbout, animationInfo, animationActivity };
