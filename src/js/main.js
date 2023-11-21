import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// PARTIE DU CAROUSEL

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

// FIN PARTIE CAROUSEL

// ---- ---- ---- ---- ----

// DEBUT PARTIE SCROLLTRIGGER

// Section Jour/Day
gsap.to(".day-house", {
  y: -150,
  opacity: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".day-house",
    start: "top bottom",
    end: "top top",
    scrub: true,
  },
});

gsap.to(".day-district", {
  y: -90,
  opacity: 1,
  ease: "power2.out",
  duration: 1.5,
  scrollTrigger: {
    trigger: ".day-district",
    start: "top bottom",
    end: "top center",
    scrub: true,
  },
});

// Section transition-1
gsap.to(".trans-day-evening", {
  y: -100,
  ease: "power3.out",
  duration: 2.5,
  scrollTrigger: {
    trigger: ".trans-day-evening",
    start: "top bottom",
    end: "top top",
    scrub: true,
  },
});

// Section Soir/Evening
gsap.to(".evening-bubble", {
  y: -100,
  scrollTrigger: {
    trigger: ".evening-bubble",
    start: "bottom bottom",
    end: "top center",
    scrub: true,
  },
});

gsap.to(".evening-sunset", {
  y: -90,
  scrollTrigger: {
    trigger: ".evening-sunset",
    start: "bottom bottom",
    end: "center center",
    scrub: true,
  },
});

gsap.to(".evening-bar", {
  y: -40,
  scrollTrigger: {
    trigger: ".evening-bar",
    start: "top bottom",
    end: "bottom bottom",
    scrub: true,
  },
});

gsap.to(".evening-dancefloor", {
  y: -40,
  scrollTrigger: {
    trigger: ".evening-dancefloor",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});

// Section Nuit/Night
gsap.to(".night-bubble", {
  y: 60,
  scrollTrigger: {
    trigger: ".night-bubble",
    start: "bottom center",
    end: "top top",
    scrub: true,
  },
});

gsap.to(".night-hotel", {
  y: 60,
  scrollTrigger: {
    trigger: ".night-bubble",
    start: "top bottom",
    end: "center center",
    scrub: true,
  },
});

gsap.to(".night-adjoua", {
  y: -120,
  scrollTrigger: {
    trigger: ".night-adjoua",
    start: "top bottom",
    end: "center top",
    scrub: true,
  },
});

gsap.to(".night-hands", {
  y: -80,
  scrollTrigger: {
    trigger: ".night-hands",
    start: "top center",
    end: "center top",
    scrub: true,
  },
});

// Section suspens
gsap.to(".suspens-bubble", {
  y: -120,
  scrollTrigger: {
    trigger: ".suspens-bubble",
    start: "bottom bottom",
    end: "top center",
    scrub: true,
  },
});
