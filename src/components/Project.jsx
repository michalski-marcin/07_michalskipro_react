import "../styles/project.css";
import { projects } from "../data/projects"
import { motion } from "framer-motion";

 function Project() {
  return (
    <div className="projects-container">
      {projects.map((project, i) => (
    <motion.div
      className='project-card'
      initial={{ opacity: 0, x: 300}}
      animate={{ opacity: 1, x:0 }}
      exit={{ opacity: 0, x: 300}}
      transition={{duration: 0.3, delay: i * 0.4}}>
  
      <div className='project-img'>
        <img src={`../projectimg/${project.image}`} alt='project' />
      </div>
      <div className="project-text">
      <h3>{project.name}</h3>
      <p>{project.description}</p>

      <div className='project-techs'>
        {project.technology.map((title) => {
          return <div key={title}>{title}</div>;
        })}
      </div>
      if ({project.github}) {
      <div className='project-github'>
        <img src='ikona githuba' alt='git' />
        <p>
          <a href='#'>{project.github}</a>
        </p>
      </div>}
      <div className='project-website'>
        <img src='ikona web' alt='' />
        <p>
          <a href='#'>{project.webpage}</a>
        </p></div>
      </div>
    </motion.div>
    ))}
    </div>
  );
}
export default Project;