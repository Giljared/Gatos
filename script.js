
const carousel = document.querySelector('.carousel-inner');
const slides = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let position = 0;
const totalSlides = slides.length;
const slideWidth = slides[0].clientWidth;
const slideInterval = 3000; // Intervalo de tempo em milissegundos para trocar os slides

function nextSlide() {
  position++;
  setPosition();
}

function prevSlide() {
  position--;
  setPosition();
}

function setPosition() {
  position = position < 0 ? totalSlides - 1 : position >= totalSlides ? 0 : position;
  carousel.style.transform = `translateX(-${position * slideWidth}px)`;
}

function startSlideshow() {
  setInterval(nextSlide, slideInterval);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
startSlideshow();

