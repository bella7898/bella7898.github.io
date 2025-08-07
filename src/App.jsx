import { Canvas } from '@react-three/fiber'
import RoboticArm from './components/RoboticArm'
import { useRef } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  const scrollRef = useRef();

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
      <div className="container" style={{ height: '100vh', backgroundColor: '#f5f5f5' }}>
        <div className="left" ref={scrollRef}>
          <Hero />
          <Skills /> 
          <Projects /> 
          <Contact />
        </div>
      
        <div className="right">
          <Canvas camera={{ position: [-2, 1.75, -3], fov: 80}}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 4, 5]} intensity={1} />
            <RoboticArm scrollContainerRef={scrollRef}/>
          </Canvas>
        </div>
      </div>
    </div>
  )
}

export default App
