import '../styles/page.css';
import { motion } from 'framer-motion';
import Skill from '../components/Skill';
import { programmingLanguages, frameworks, databasesAndMessaging, markupAndStyling, tools } from '../data/skills';

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
            <div className='skills-title'>// Programming Languages</div>
          </motion.div>
          <div className='skills-container'>
            <Skill skills={programmingLanguages} />
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
              delay: 0.1,
            }}>
            <div className='skills-title'>// Frameworks</div>
          </motion.div>
          <div className='skills-container'>
            <Skill skills={frameworks} />
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
            <div className='skills-title'>// Databases and Messaging</div>
          </motion.div>
          <div className='skills-container'>
            <Skill skills={databasesAndMessaging} />
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
              delay: 0.3,
            }}>
            <div className='skills-title'>// Markup and Styling</div>
          </motion.div>
          <div className='skills-container'>
            <Skill skills={markupAndStyling} />
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
            <div className='skills-title'>// Tools</div>
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
