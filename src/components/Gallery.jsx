import './Components.css';
import Bird from '../assets/bird.png';
import Chess from '../assets/chess.png';
import Flower from '../assets/flower.png';
import Space from '../assets/space.png';
import Pickle from '../assets/pickle.png';

const images = [
  { src: Bird, alt: 'Bird' },
  { src: Space, alt: 'Space' },
  { src: Flower, alt: 'Flower' },
  { src: Chess, alt: 'Chess' },
  { src: Pickle, alt: 'Pickle' },
];

export default function Gallery() {
  return (
    <div className="gallery">
      {images.map((img, i) => (
        <img
          key={img.alt}
          src={img.src}
          alt={img.alt}
          className={`gallery-item gallery-item-${i + 1}`}
        />
      ))}
    </div>
  );
}