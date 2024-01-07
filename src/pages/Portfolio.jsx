import '../styles/page.css';
import Project from '../components/Project';
import { projects } from '../data/projects';
import '../styles/project.css';
import { FadeIn, FadeOpacity } from '../components/Animations';

function Portfolio() {
  return (
    <div className='wrap-projects'>
      <FadeIn>
        <div>// 2023</div>
      </FadeIn>
      <div className='projects-container'>
        {projects.map((project, i) => (
          <Project
            {...project}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
