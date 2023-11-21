document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = carousel.children.length - 1;
    }
    updateCarousel();
  });

  nextBtn.addEventListener("click", function () {
    if (currentIndex < carousel.children.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  carousel.addEventListener("transitionend", function () {
    // Réinitialise la classe 'active' sur toutes les images
    Array.from(carousel.children).forEach(function (child) {
      child.classList.remove("active");
    });
    // Ajoute la classe 'active' à l'image actuelle
    carousel.children[currentIndex].classList.add("active");
  });

  function updateCarousel() {
    const translateValue = -currentIndex * 100 + "%";
    carousel.style.transform = "translateX(" + translateValue + ")";
  }

  // Initialise la première image comme active
  carousel.children[currentIndex].classList.add("active");
});
