import { useState } from 'react';
import { Link } from 'react-router-dom'
import reflowoven from '../assets/reflowoven.jpg';
import retroTron from '../assets/retrotron.jpg';
import dreamTravels from '../assets/dreamtravels.jpg';
import coolItDown from '../assets/coolitdown.jpg';
import spamSense from '../assets/spamsenseai.png';
import moodloop from '../assets/moodloop.jpg';
import focusfocus from '../assets/focusfocus.jpg';

function WinnerBadge() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '90px',
      height: '90px',
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 10,
    }}>
      <div style={{
        position: 'absolute',
        top: '18px',
        left: '-28px',
        width: '120px',
        padding: '5px 0',
        backgroundColor: '#ffb433',
        color: '#5d4612',
        fontWeight: 1000,
        fontSize: '12px',
        letterSpacing: '1.2px',
        textAlign: 'center',
        textTransform: 'uppercase',
        transform: 'rotate(-45deg)',
        boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
      }}>
        Winner
      </div>
    </div>
  );
}

const FILTERS = ['All', 'Hackathon', 'Course Project', 'Personal'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    { event: 'cmd-f 2026 Hackathon',
      type: 'Hackathon',
      title: 'Mood Loop',
      desc: 'A physical keychain-sized mood tracker with an AI summarized dashboard, built with EMF8 microcontroller and Flask backend',
      img: moodloop,
      links:[
        { label: 'Devpost', href: 'https://devpost.com/software/moodloop', internal: false},
        { label: 'Github Repo', href: 'https://github.com/kparibhasha/mood-loop', internal: false},
      ], 
      isWinner: true
    },
    { event: 'Elec 291 Course Project',
      type: 'Course Project',
      title: 'Reflow Oven Controller', 
      desc: 'Designed and built a reflow oven controller using a DE10-Lite FPGA, with CV8052 soft core processor',
      img: reflowoven,
      links:[
        { label: 'Project Report', to: '/reflowoven', internal: true}, 
        { label: 'Video', href:'https://www.youtube.com/watch?v=6cuWTV0r89I', internal: false},
      ], 
      isWinner: false
    },
    { event: 'CPEN 211 Course Project',
      type: 'Course Project',
      title: 'Retro TRON Video Game', 
      desc: 'Embedded C video game on FPGA using VGA display and interrupts', 
      img: retroTron },
    { event: 'cmd-f 2025 Hackathon',
      type: 'Hackathon',
      title: 'Dream Travels', 
      desc: 'Your dream travel board React Website that uses Foursquare Places API', 
      img: dreamTravels },
    { event: 'UBC Physics Olympics',
      type: 'Course Project',
      title: 'Cool It Down! Prebuilt Machine', 
      desc: 'Prebuild machine - gravity powered copper cooling machine', 
      img: coolItDown },
    { type: 'Personal',
      title: 'Spam Sense AI', 
      desc: 'Trained DistilBERT model to identify spam vs non-spam (ham) messages', 
      img: spamSense},
    { event: 'VSHacks 2022',
      type: 'Hackathon',
      title: 'Focus Focus', 
      desc: 'A chrome extension that blocks distracting websites for lock in study sessions', 
      img: focusfocus,
      isWinner: true}
  ];

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.type === activeFilter);

  return (
    <div>
      <h1>Projects</h1>

      {/* Filter pills */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            style={{
              padding: '5px 14px',
              borderRadius: '999px',
              border: '1px solid',
              borderColor: activeFilter === f ? '#3a393b' : '#d1d5db',
              background: activeFilter === f ? '#3a393b' : 'transparent',
              color: activeFilter === f ? '#fff' : '#555',
              fontSize: '13px',
              cursor: 'pointer',
              fontWeight: activeFilter === f ? 600 : 400,
              transition: 'all 0.15s',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <section id="projects" className="projects" 
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        
        {filtered.map((p, i) => (
          <div
            key={i}
            className="project-card"
            style={{ position: 'relative', overflow: 'hidden', padding: 0 }}
          >
            {p.isWinner && <WinnerBadge />}

            {p.img && (
              <img
                src={p.img}
                alt={p.title}
                style={{
                  width: '100%',
                  height: '160px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            )}

            <div style={{ padding: '14px 16px' }}>
              {p.event && (
                <p style={{ margin: '0 0 4px', fontSize: '12px', color: '#888' }}>
                  <em>{p.event}</em>
                </p>
              )}
              <h3 style={{ margin: '0 0 6px' }}>{p.title}</h3>
              <p style={{ margin: '0 0 10px' }}>{p.desc}</p>

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
          </div>
        ))}
      </section>
    </div>
  );
}