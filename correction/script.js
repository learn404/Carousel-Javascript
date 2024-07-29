const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const carouselSlide = document.querySelectorAll('.carousel-slide');
const carouselTrack = document.querySelector('.carousel-track');
const carouselTrackContainer = document.querySelector('.carousel-track-container');
const carouselTrackWidth = carouselTrackContainer.clientWidth;// recupere la largeur intérieur de la track

let currentSlide = 0;
let currentPosition = 0;

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + carouselSlide.length) % carouselSlide.length; // quand j'arrive au bout je reprend le premier slide
    console.log(`Slide précédent: ${currentSlide}`); // Log de la diapositive actuelle

    currentPosition = currentSlide * carouselTrackWidth; // calcule la position actuelle en pixels 
    carouselTrack.style.transform = `translateX(-${currentPosition}px)`; // déplace la track vers la position actuelle
    console.log(`Position actuelle: ${currentPosition}px`); // Log de la position actuelle

    carouselSlide.forEach(slide => {
        slide.classList.remove('current-slide');
    });
    carouselSlide[currentSlide].classList.add('current-slide');
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % carouselSlide.length; // calcule la diapositive suivante
    console.log(`Slide suivant: ${currentSlide}`); // Log de la diapositive actuelle
    currentPosition = currentSlide * carouselTrackWidth; // calcule la position actuelle en pixels
    carouselTrack.style.transform = `translateX(-${currentPosition}px)`; // déplace la track vers la position actuelle
    console.log(`Position actuelle: ${currentPosition}px`); // Log de la position actuelle

    carouselSlide.forEach(slide => {
        slide.classList.remove('current-slide');
    });
    carouselSlide[currentSlide].classList.add('current-slide');
});

setInterval(() => {
    nextButton.click();
}, 5000);

