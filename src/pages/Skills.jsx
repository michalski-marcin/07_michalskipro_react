import '../styles/page.css';
import { motion } from 'framer-motion';
import Skill from '../components/Skill';
import Certificate from '../components/Certificate';
import { languages, frameworks, tools } from '../data/skills';
import { certificates } from '../data/certificates';


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
            <div className='skills-title'>// Programming languages</div>
          </motion.div>
          <div className='skills-container'>
            <Skill skills={languages} />
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
            <div className='skills-title'>// Frameworks and Styling</div>
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
              delay: 0.4,
            }}>
            <div className='skills-title'>// Tools</div>
          </motion.div>
          <div className='skills-container'>
            <Skill skills={tools} />
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
              delay: 0.4,
            }}>
            <div className='skills-title'>// Certificates</div>
          </motion.div>
          <div className='certificates-container'>
            <Certificate certificates={certificates} />
          </div>
          </div>
      </div>
    </div>
  );
}

export default Skills;
