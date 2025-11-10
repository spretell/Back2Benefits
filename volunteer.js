document.addEventListener('DOMContentLoaded', () => {
  // ===== VOLUNTEER FORM =====
  const form = document.getElementById('volunteerForm');
  const popup = document.getElementById('popup');
  const closePopup = document.getElementById('closePopup');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const requiredFields = form.querySelectorAll('[required]');
    let valid = true;

    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        field.style.border = '2px solid #d85d48';
        valid = false;
      } else {
        field.style.border = '1px solid #3c4f1c';
      }
    });

    if (!valid) {
      alert('⚠️ Please fill out all required fields before submitting.');
      return;
    }

    popup.style.display = 'flex';
    form.reset();
  });

  closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // ===== MOBILE MENU =====
  const hamburger = document.querySelector(".hamburger");
  const sideMenu = document.querySelector(".side-menu");
  const closeMenuBtn = document.querySelector(".close-menu");
  const overlay = document.querySelector(".menu-overlay");

  function openMenu() {
    sideMenu.classList.add("open");
    overlay.classList.add("show");
    hamburger.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    sideMenu.classList.remove("open");
    overlay.classList.remove("show");
    hamburger.setAttribute("aria-expanded", "false");
  }

  if (hamburger) hamburger.addEventListener("click", openMenu);
  if (closeMenuBtn) closeMenuBtn.addEventListener("click", closeMenu);
  if (overlay) overlay.addEventListener("click", closeMenu);
});
