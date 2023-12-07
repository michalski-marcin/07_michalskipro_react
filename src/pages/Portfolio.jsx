import "../styles/page.css";
import "../styles/portfolio.css"
import {Project} from "../components/Project";
import projectsData from "../data/projects"
import { FadeIn } from "../components/Animations";

function Portfolio() {
    const projectTabs = projectsData.map(item => {
        return (
            <FadeIn>
            <Project
                key={item.id}
                {...item}
            />
            </FadeIn>
        )
    })
    return (
        <div className="wrap">
            <div>Projekty</div>
            <div className="projects-container">
                
            {projectTabs}
            
            </div>
            </div>
    )
}

export default Portfolio;