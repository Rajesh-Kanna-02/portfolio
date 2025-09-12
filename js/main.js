// Scroll reveal animations
const animatedEls = document.querySelectorAll('.animated-card, .skill-card');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.9;
  animatedEls.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if(rect < triggerBottom) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Initial hidden state
animatedEls.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 0.6s ease";
});
