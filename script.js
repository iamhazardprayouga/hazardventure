const text = "Hi, I’m Hazard Prayoga";
const typingTarget = document.getElementById("typing-text");
let idx = 0;

function typingEffect() {
  if (idx < text.length) {
    typingTarget.textContent += text.charAt(idx);
    idx++;
    setTimeout(typingEffect, 80);
  } else {
    setTimeout(() => {
      typingTarget.textContent = "";
      idx = 0;
      typingEffect();
    }, 3000); // jeda 3 detik setelah selesai
  }
}

typingTarget.textContent = "";
typingEffect();


// Scroll animation muncul
const fadeElements = document.querySelectorAll('.fade-slide');

function handleScroll() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// Toggle hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Slideshow multiple cards
document.querySelectorAll('.slideshow-container').forEach((container, index) => {
  const slides = container.querySelectorAll('.slide');
  let current = 0;

  const showSlide = (i) => {
    slides.forEach((slide, idx) => {
      slide.classList.remove('active');
      if (idx === i) slide.classList.add('active');
    });
  };

  container.querySelector('.prev').addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  container.querySelector('.next').addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  showSlide(current); // init
});

// Drag-to-scroll for blog slider
const slider = document.querySelector('.blog-slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // kecepatan scroll
  slider.scrollLeft = scrollLeft - walk;
});
