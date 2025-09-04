// ========== SCROLL REVEAL BASIC ==========
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const revealPoint = 100; // jarak trigger

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active'); // kalau mau hanya sekali, hapus baris ini
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ========== OPTIONAL: DELAYED STAGGER ==========
const staggerElements = document.querySelectorAll('.stagger');
let staggerTriggered = false;

const staggerOnScroll = () => {
  if (staggerTriggered) return;

  const windowHeight = window.innerHeight;
  staggerElements.forEach((el, index) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      setTimeout(() => {
        el.classList.add('active');
      }, index * 150); // delay antar elemen
      staggerTriggered = true;
    }
  });
};

window.addEventListener('scroll', staggerOnScroll);
