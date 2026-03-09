import { useState } from 'react';
import { Link } from 'react-router-dom'
import reflowoven from '../assets/reflowoven.jpg';
import retroTron from '../assets/retrotron.jpg';
import dreamTravels from '../assets/dreamtravels.jpg';
import coolItDown from '../assets/coolitdown.jpg';
import spamSense from '../assets/spamsenseai.png';
export default function Projects() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoverImage, setHoverImage] = useState(null);

  const projects = [
    { title: 'Reflow Oven Controller', 
      desc: 'Designed and built a reflow oven controller using a DE10-Lite FPGA, with CV8052 soft core processor',
      img: reflowoven,
      links:[
        { label: 'Project Report', to: '/reflowoven', internal: true}, 
        { label: 'Video', href:'https://www.youtube.com/watch?v=6cuWTV0r89I', internal: false},
      ]
    },
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

            {p.links && (
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                {p.links.map((link, j) =>
                  link.internal ? (
                    <Link key={j} to={link.to} className="project-link">
                      {link.label}
                    </Link>
                  ) : (
                    <a key={j} href={link.href} target="_blank" rel="noopener noreferrer" className="project-link">
                      {link.label}
                    </a>
                  )
                )}
              </div>
            )}
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
