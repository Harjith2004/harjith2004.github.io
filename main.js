// Optional: keep scroll animation for nicer effect
const sections = document.querySelectorAll('.section');

function revealSections() {
  const triggerPoint = window.innerHeight * 0.85;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerPoint) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', revealSections);
revealSections();