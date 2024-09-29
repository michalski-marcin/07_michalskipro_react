import '../styles/page.css';
import { motion } from 'framer-motion';
import Skill from '../components/Skill';
import { frontend, backend, tools } from '../data/skills';

function Skills() {
  return (
    <div className='wrap'>
      <div className='skills-wrap'>
        <div className='skills-section'>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 200, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.5, ease: [0.445, 0.05, 0.55, 0.95] }}>
            <div className='skills-title'>// BACK END</div>
          </motion.div>
          <div className='skills-container'>
            <Skill skills={backend} />
          </div>
        </div>

        <div className='skills-section'>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 200, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{
              duration: 0.5,
              ease: [0.445, 0.05, 0.55, 0.95],
              delay: 0.2,
            }}>
            <div className='skills-title'>// FRONT END</div>
          </motion.div>
          <div className='skills-container'>
            <Skill skills={frontend} />
          </div>
        </div>

        <div className='skills-section tools'>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 200, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{
              duration: 0.5,
              ease: [0.445, 0.05, 0.55, 0.95],
              delay: 0.4,
            }}>
            <div className='skills-title'>// TOOLS</div>
          </motion.div>
          <div className='skills-container'>
            <Skill skills={tools} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
