import { useRef } from 'react';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Routes, Route} from 'react-router-dom';
import NotFound from './components/NotFound';
import ReflowOven from './components/ReflowOven';
import './App.css';

function HomePage(){
  const scrollRef = useRef();

  return (
    <div className="container" ref={scrollRef}>
      <Hero />
      <Experience />
      <Projects /> 
      <Contact />
    </div>
  );
}

function App() {
  return (
    <div>
      <div className="navbar">
        <a className="heroLink" href="#hero">Bella Wang</a>
        <div className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button>View Resume</button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/reflowoven" element={<ReflowOven />} />
      </Routes>
    </div>
  )
}

export default App