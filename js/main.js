// ========== SMOOTH SCROLL NAV ==========
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetEl = document.querySelector(targetId);

    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ========== BACK TO TOP BUTTON ==========
const backToTop = document.createElement('button');
backToTop.innerText = "↑";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.display = "none";
backToTop.style.padding = "10px 15px";
backToTop.style.fontSize = "18px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.cursor = "pointer";
backToTop.style.background = "#00ff99";
backToTop.style.color = "#000";
backToTop.style.zIndex = "999";

/* show/hide button */
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

/* click scroll up */
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ========== AUTO ACTIVE NAV ==========
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-links li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    const secTop = sec.offsetTop - 100;
    const secHeight = sec.clientHeight;
    if (scrollY >= secTop && scrollY < secTop + secHeight) {
      current = sec.getAttribute("id");
    }
  });

  navLi.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
});
