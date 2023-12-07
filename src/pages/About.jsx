import "../styles/page.css";
import { FadeIn, FadeOpacity } from "../components/Animations";

function About() {
  return (
    <div className='wrap'>
      <FadeIn>
        <div>O mnie</div>
      </FadeIn>
      <FadeOpacity>
        <div><h1>LOL</h1></div>
      </FadeOpacity>
    </div>
  );
}

export default About;
