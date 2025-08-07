import './Components.css';

export default function Hero(){
    return(
        <div id="hero" className="sections">
                <h1 class="typewriter">Bella Wang</h1> 
                <p>Electrical Engineering Student @ UBC</p>
                <p>Passionate about developing innovative solutions for real-world problems</p>
                <div>
                    <button><a href="#projects">View Projects</a></button>
                    <button><a href="https://github.com/bella7898">Github</a></button>
                </div>
                <div class="scroll-down"></div>
        </div>
    )
}