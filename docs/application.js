<script>
  const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");
const totalSlides = document.querySelectorAll(".frame").length;

let index = 0;

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  updateCarousel();
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

function updateCarousel() {
  slides.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

</script>