import { useState, useRef } from 'react';
import Hero from './components/Hero';
import Bird from './assets/bird.png';
import Chess from './assets/chess.png';
import Flower from './assets/flower.png';
import Space from './assets/space.png';
import Pickle from './assets/pickle.png';

const images = [Bird, Chess, Flower, Space, Pickle];

function DisplayImages(){
  const [visible, setVisible] = useState(false); 
  const [src, setSrc] = useState(images[0]);
  const [pos, setPos] = useState({x: 0, y: 0});
  const containerRef = useRef(null);

  const handleMouseEnter = () => {
    setSrc(images[Math.floor(Math.random() * images.length)]);
    setVisible(true);
  };

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.1;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.1;
    setPos({x, y});
  }

  return (
    <div
      ref={containerRef}
      className="hero-hover-container"
      style={{ position: 'relative' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
    >
      <Hero />
      {visible && (
        <img
          src={src}
          alt=""
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(${pos.x}px, ${pos.y}px)`,
            transition: 'transform 0.1s ease-out',
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  );
}

export default DisplayImages