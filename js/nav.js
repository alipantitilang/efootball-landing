// ========== HAMBURGER MENU ==========
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
  // Toggle nav
  navLinks.classList.toggle('open');

  // Animate links
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });

  // Hamburger animation
  hamburger.classList.toggle('toggle');
});

// ========== CLOSE NAV ON CLICK ==========
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('toggle');
    links.forEach(l => l.style.animation = '');
  });
});

// ========== NAVBAR SHRINK ON SCROLL ==========
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
