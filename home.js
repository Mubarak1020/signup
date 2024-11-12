const carouselImages = document.querySelectorAll('.carousel img');
let index = 0;

function startCarousel() {
  setInterval(() => {
    carouselImages.forEach((img, i) => {
      img.style.transform = `translateX(${-index * 100}%)`;
    });
    index = (index + 1) % carouselImages.length;
  }, 2000); 
}

window.onload = startCarousel;
