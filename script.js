// Smooth scroll animation for fade-in sections
const faders = document.querySelectorAll('.fade-in-section');
const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Social button click interactions
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('mousedown', () => {
    button.style.transform = 'scale(0.95)';
  });
  button.addEventListener('mouseup', () => {
    button.style.transform = 'scale(1)';
  });
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });
});

// Optional: Toggle light/dark mode switch logic (if you add a toggle button)
// document.getElementById('toggleMode').addEventListener('click', () => {
//   document.body.classList.toggle('light-mode');
// });
