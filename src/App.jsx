import profilePic from './assets/profilepic.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Blog from './pages/blog';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import PostDetail from './components/PostDetail'
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import AnimatedCursor from 'react-animated-cursor';

function App() {
  const maxWidth = 1024;
  const isTouchDevice =
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;

  const isMobileTouchDevice = isTouchDevice && window.innerWidth < maxWidth;
  const location = useLocation();
  return (
    <>
      <Navbar />
     
      <AnimatePresence mode='wait'>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      </AnimatePresence>
      {!isMobileTouchDevice && (
        <AnimatedCursor
          className='animated-cursor'
          innerSize={14}
          outerSize={12}
          color='1, 173, 181'
          trailingSpeed={15}
          outerAlpha={0.2}
          innerScale={0}
          outerScale={2}
          innerStyle={{
            borderRadius: 0,
            border: '2px solid rgba(1, 173, 181, 1)',
            backgroundColor: 'transparent',
          }}
          outerStyle={{
            borderRadius: 0,
            border: '1px solid rgba(1, 173, 181, 0.5)',
            backgroundColor: 'transparent',
          }}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
            '.project-title-left',
            '.x-close-button',
            
            '.post-card',
            '.category-box',
          ]}
        />
      )}
    </>
  );
}
export default App;
