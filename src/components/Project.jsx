import '../styles/project.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSpring, animated, config } from 'react-spring';
import useMeasure from 'react-use-measure';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

function Project(project) {
  const { index } = project;
  const [isActive, setIsActive] = useState(project.isFirst === true);
  const handleClick = () => {
    setIsActive((current) => !current);
  };
  const [measureRef, { height }] = useMeasure();

  const styles = useSpring({
    config: config.stiff,
    from: {
      height: 0,
    },
    to: {
      height: isActive ? height : 0,
    },
  });
  console.log(height);
  return (
    <motion.div
      key={project.id}
      className='project-card'
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 300 }}
      transition={{ duration: 0.9, delay: index * 0.2, type: 'spring' }}>
      <div
        className='project-card-top'
        transition={{
          duration: 0.3,
          height: {
            duration: 0.3,
            ease: 'easeOut',
          },
        }}>
        <div className='project-title'>
          <div
            className='project-title-left'
            onClick={handleClick}
            style={{ color: isActive ? 'var(--cr2)' : '' }}>
            <MdOutlineArrowForwardIos
              className='project arrow'
              style={{
                transform: isActive ? 'rotate(0)' : '',
              }}
            />
            <h3 class='blue'>{project.name}</h3>
          </div>

          <div className='project-techs'>
            {project.technology.map((title) => {
              return (
                <div
                  key={title}
                  className='tech-img'>
                  <img src={`./assets/icons/${title}`} />
                </div>
              );
            })}

            {project.commercial ? (
              <div>
                <p className='project-tech commercial'>Commercial</p>
              </div>
            ) : null}
          </div>
        </div>

        <animated.div style={{ overflow: 'hidden', ...styles }}>
          <div
            ref={measureRef}
            className='project-details'>
            <div className='project-details-top'>
              <div className='project-img'>
                <img
                  src={`../projectimg/${project.image}`}
                  alt='project'
                />
              </div>
              <div className='project-description'>{project.description}</div>
            </div>
            <div className='project-card-bottom'>
              <div className='project-link'>
                {project.github && (
                  <div className='project-github'>
                    <i class='bx bxl-github'></i>
                    <a
                      href={project.github}
                      target='_blank'>
                      Code
                    </a>
                  </div>
                )}
                <div className='project-website'>
                  <i class='bx bx-link'></i>
                  <a
                    href={project.webpage}
                    target='_blank'>
                    Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </motion.div>
  );
}
export default Project;
