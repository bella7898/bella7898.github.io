import './Components.css';
import Gallery from './Gallery.jsx';

export default function Hero(){
    return(
        <div id="hero" className="sections hero-extended">
            <div className="hero-text">
                <h1 className="glitch" data-text="Bella Wang">Bella Wang</h1> 
                <p>Electrical Engineering Student @ UBC</p>
                <div>
                    <button><a href="#projects">View Projects</a></button>
                    <button><a href="https://github.com/bella7898">Github</a></button>
                </div>
            </div>
            <div className="hero-gallery">
                <Gallery />
            </div>
        </div>
    )
}