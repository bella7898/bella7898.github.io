import { useState } from 'react';

import simpleCPU from '../assets/simplecpu.png';
import retroTron from '../assets/retrotron.jpg';
import dreamTravels from '../assets/dreamtravels.jpg';
import coolItDown from '../assets/coolitdown.jpg';
import spamSense from '../assets/spamsenseai.png';
export default function Projects() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoverImage, setHoverImage] = useState(null);

  const projects = [
    { title: 'Simple CPU', 
      desc: 'Simple CPU capable of reading and executing instructions from machine code',
      img: simpleCPU },
    { title: 'Retro TRON Video Game', 
      desc: 'Embedded C video game on FPGA using VGA display and interrupts', 
      img: retroTron },
    { title: 'Dream Travels', 
      desc: 'Your dream travel board React Website that uses Foursquare Places API', 
      img: dreamTravels },
    { title: 'Cool It Down! Prebuilt Machine', 
      desc: 'UBC Physics Olympics prebuild machine - gravity powered copper cooling machine', 
      img: coolItDown },
    { title: 'Spam Sense AI', 
      desc: 'Trained DistilBERT model to identify spam vs non-spam (ham) messages', 
      img: spamSense},
  ];

  return (
    <div>
      <h1>Projects</h1>
    <section id="projects" className="projects" 
      onMouseMove={e => setMousePos({ x: e.clientX, y: e.clientY })}>
        
      
      {projects.map((p, i) => (
        <div 
          key={i} 
          className="project-card"
          onMouseEnter={() => setHoverImage(p.img)}
          onMouseLeave={() => setHoverImage(null)}
        >
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </div>
      ))}

      {hoverImage && (
        <img 
          src={hoverImage} 
          alt="" 
          className="hover-image" 
          style={{
            top: mousePos.y + 'px',
            left: mousePos.x + 'px',
          }}
        />
      )}
    </section>
    </div>
  );
}
