import "../styles/page.css";
import Project from "../components/Project";
import { FadeIn, FadeOpacity } from "../components/Animations";



function Portfolio() {
   
    return (
        <div className="wrap">
            <FadeIn>
            <div>// 2023</div>
            </FadeIn>
            <Project />
            </div>
    )
}

export default Portfolio;