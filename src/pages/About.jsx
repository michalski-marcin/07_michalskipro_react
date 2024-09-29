import '../styles/page.css';
import '../styles/about.css';
import { FaSquareGithub, FaLinkedin, FaSquareTwitter } from "react-icons/fa6";
import { FadeIn } from '../components/Animations';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className='wrap'>
      <section className='about-container'>
        <div className='hi-container'>
          <FadeIn>
            <h1>Hi, my name is</h1>
          </FadeIn>
          <motion.div v
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 100, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.9, ease: [0.68, -0.55, 0.265, 1.55] }}>
            <h2>MARCIN </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 100, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.9, ease: [0.68, -0.55, 0.265, 1.55] }}>
            <h2>
              <span>MICHALSKI</span>
            </h2>
          </motion.div>
          <div className='about-bottom-container'>
            <motion.div
              className='about-bottom-socials'
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.35,
                ease: [0.445, 0.05, 0.55, 0.95],
              }}>
              <p className='p-comment'>// More about me</p>
              <div className='social-buttons'>
                <div className='social-button'>
                  <a
                    href='https://github.com/michalski-marcin'
                    target='_blank'>
                    <FaSquareGithub className='social-icon' />

                  </a>
                </div>
                <div className='social-button'>
                  <a
                    href='https://www.linkedin.com/in/michalski-marcin/'
                    target='_blank'>
                    <FaLinkedin className='social-icon' />
                  </a>
                </div>
                <div className='social-button'>
                  <a
                    href='https://github.com/michalski-marcin'
                    target='_blank'>
                    <FaSquareTwitter className='social-icon' />

                  </a>
                </div>
                <div className='social-button resume'>
                  <div className='download-resume'>
                    {' '}
                    <a
                      href='./resume.pdf'
                      download='marcin-michalski-resume'>
                      <i class='bx bxs-download'></i>RESUME
                    </a>
                  </div>
                </div>
              </div>
              <div className='mail-to'>
                <a href='mailto:marcin@michalski.pro'>marcin@michalski.pro</a>
              </div>
            </motion.div>

            <motion.div
              className='about-bottom-intro'
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.45,
                ease: [0.445, 0.05, 0.55, 0.95],
              }}>
              <p className='p-comment'>// Short story</p>
              <p>
                I’m a front-end developer, passionate about coding and focused
                on building websites and apps with React.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
