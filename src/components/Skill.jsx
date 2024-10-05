import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
// import SelectedSkill from "./SelectedSkill";
import '../styles/skill.css';

import PropTypes from 'prop-types';

function Skill({ skills }) {
  // OPTIONAL MODAL
  // const expandedSkillRef = useRef(null);
  // const [selectedSkill, setSelectedSkill] = useState(null);
  // const [skillExpanded, setSkillExpanded] = useState(false);

  // function handleClick(skill) {
  //   setSelectedSkill(skill);
  //   setSkillExpanded(true);
  // }

  // const handleClose = () => {
  //   setSkillExpanded(false);
  // };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (expandedSkillRef.current && !expandedSkillRef.current.contains(event.target)) {
  //       setSkillExpanded(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleClose);
  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     window.removeEventListener("scroll", handleClose);
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <>
      {skills.map((skill, i) => (
        <motion.div
          // onClick={() => handleClick(skill)}
          className='skill-card'
          key={i}
          initial={{ opacity: 0, scale: 1.3 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.2, delay: i * 0.07, ease: 'easeInOut' }}>
          <img
            src={`./assets/icons/${skill.image}`}
            alt={skill.name}
          />
          <p>{skill.name}</p>
        </motion.div>
      ))}
      {/* {skillExpanded && selectedSkill && (
        <AnimatePresence>
          <motion.div
            className="expanded-skill"
            ref={expandedSkillRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <div className="x-close-button" onClick={handleClose}>
              <i className='bx bx-x'></i>
            </div>
            <div className="expanded-skill-content">
             <SelectedSkill {...selectedSkill} />
            </div>
          </motion.div>
        </AnimatePresence>
      )} */}
    </>
  );
}

Skill.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Skill;


