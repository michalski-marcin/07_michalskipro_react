import { motion } from "framer-motion";

const fadeInSettings = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 100, x: 0 },
  exit: { opacity: 0, x: -100 },
};



const FadeIn = ({children}) => {
  return (
    <motion.div
      variants={fadeInSettings}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.3 }}>
      {children}
    </motion.div>
  );
}

const FadeOpacity = ({children}) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 100}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
  >

      {children}
    </motion.div>
  )
}

export {FadeIn, FadeOpacity};
