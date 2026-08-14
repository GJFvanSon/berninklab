// script.js

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
