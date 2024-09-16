import '../styles/page.css';
import Project from '../components/Project';
import { projects } from '../data/projects';
import '../styles/project.css';
import { FadeIn } from '../components/Animations';
import { motion } from 'framer-motion';

function Portfolio() {
  const projectsByYear = projects.reduce((acc, project) => {
    const year = project.year || 'Unknown';
    acc[year] = acc[year] || [];
    acc[year].push(project);
    return acc;
  }, {});
  const years = Object.keys(projectsByYear).reverse();
  return (
    <div className='wrap-projects'>
      <motion.p
        className='projects-intro'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}>
        On my{' '}
        <a
          href='https://github.com/michalski-marcin'
          target='_blank'>
          GitHub
        </a>
        , you can find all my projects, including those I'm currently working
        on. I'll highlight here the most important ones for a quick overview.
      </motion.p>
      {years.map((year, yearIndex) => (
        <div key={year}>
          <FadeIn delay={yearIndex * 0.05}>
            <div className='projects-year'>{`// ${year}`}</div>
          </FadeIn>
          <div className='projects-container'>
            {projectsByYear[year].map((project, projectIndex) => (
              <Project
                key={project.id}
                {...project}
                index={yearIndex * projectsByYear[year].length + projectIndex}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
