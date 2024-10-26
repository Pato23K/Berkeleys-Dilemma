const slider = document.getElementById('customRange');

const envBack = document.getElementById('idEnvBod');

const carouselImage = document.getElementById('carousel-image');
const images = carr;

slider.addEventListener('input', function () {
    const value = this.value; 
    const R = Math.min(Math.max((57 + value) % 256, 0), 255);
    const G = Math.min(Math.max((62 + value) % 256, 0), 255);
    const B = Math.min(Math.max((65 + value) % 256, 0), 255);
    
    console.log(R + " " + G + " " + B); 
    envBack.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;

    const index = Math.max(0, Math.floor(this.value / 10)-1);
    console.log(index);
    carouselImage.src = images[index];
    carouselImage.alt = `Foto ${index}`;
});