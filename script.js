const frames =["assets/Owl2.png", "assets/Owl1.png", "assets/Owl.png", "assets/Ow.png"];
let currentFrame=0;
const owl = document.getElementById("owl");

setInterval(() =>{
    currentFrame = (currentFrame + 1) % frames.length;
    owl.src = frames[currentFrame];
}, 100);