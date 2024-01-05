import { motion } from "framer-motion";
import "../styles/skill.css";


function Skill({ skills }) {
    
  return (
    <>
      {skills.map((skill, i) => (
        <motion.div
           
          className='skill-card'
          initial={{ opacity: 0, scale: 1.3}}
          animate={{ opacity: 1, scale: 1}}
          exit={{ opacity: 0, scale: 0.7}}
          transition={{ duration: 0.2, delay: i * 0.07, ease: "easeInOut" }}>
          <img src={`./assets/icons/${skill.image}`} />
          <p>{skill.name}</p>
        </motion.div>
      ))}
    </>
  );
}

export default Skill;
