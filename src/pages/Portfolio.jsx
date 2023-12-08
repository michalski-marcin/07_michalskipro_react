import "../styles/page.css";
import "../styles/portfolio.css"
import Project from "../components/Project";
import { FadeIn, FadeOpacity } from "../components/Animations";



function Portfolio() {
   
    return (
        <div className="wrap">
            <FadeIn>
            <div>Projekty</div>
            </FadeIn>
            <div className="projects-container">
                
            <Project />
            
            </div>
            </div>
    )
}

export default Portfolio;