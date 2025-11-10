// hamburger menu
const hamburger = document.querySelector(".hamburger");
const sideMenu = document.querySelector(".side-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const overlay = document.querySelector(".menu-overlay");

function openMenu() {
  sideMenu.classList.add("open");
  overlay.classList.add("show");
  if (hamburger) {
    hamburger.setAttribute("aria-expanded", "true");
  }
}

function closeMenu() {
  sideMenu.classList.remove("open");
  overlay.classList.remove("show");
  if (hamburger) {
    hamburger.setAttribute("aria-expanded", "false");
  }
}

if (hamburger) {
  hamburger.addEventListener("click", openMenu);
}

if (closeMenuBtn) {
  closeMenuBtn.addEventListener("click", closeMenu);
}

if (overlay) {
  overlay.addEventListener("click", closeMenu);
}


// slideshow 
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

if (slides.length > 0) {
  setInterval(showNextSlide, 4000); // 4 seconds per image
}