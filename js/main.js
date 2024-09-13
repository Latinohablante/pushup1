// main.js

// Ejemplo de menú responsive (si fuera necesario)
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');

// Puedes agregar funcionalidad aquí si lo deseas

const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
