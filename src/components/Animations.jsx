import { motion } from 'framer-motion';

const fadeInSettings = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 100, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const FadeIn = ({ children, delay = 0.1 }) => {
  return (
    <motion.div
      variants={fadeInSettings}
      initial='initial'
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.9, ease: [0.445, 0.05, 0.55, 0.95], delay }}>
      {children}
    </motion.div>
  );
};

const FadeOpacity = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  );
};

export { FadeIn, FadeOpacity };
