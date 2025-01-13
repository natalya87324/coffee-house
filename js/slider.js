const slides = document.querySelectorAll('.slide');
const slideControls = document.querySelectorAll('.slider-control__item');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
let activeSlide = 0;

rightBtn.addEventListener('click', () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setActiveSlide();
  setActiveControl();
});

leftBtn.addEventListener('click', () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setActiveSlide();
  setActiveControl();
});

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('slide--active'));
  slides[activeSlide].classList.add('slide--active');
}

function setActiveControl() {
  slideControls.forEach((control) => {
    control.classList.remove('slider-control__item--active');
  });
  slideControls[activeSlide].classList.add('slider-control__item--active');
}
