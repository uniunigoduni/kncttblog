// script.js
const rotatingImage = document.getElementById("rotating-image");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const rotationSpeed = scrollY / 1.6;
    const rotation = `rotate(${rotationSpeed}deg)`;

    rotatingImage.style.transform = rotation;
});

const switchImg = document.getElementById("toggleimage");
function changeImg(){
switchImg.classList.toggle("on_toggleimage");
}
switchImg.addEventListener("click",changeImg);