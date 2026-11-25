const toggle=document.querySelector(".menu-toggle");const nav=document.querySelector(".nav");if(toggle&&nav){toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"✕":"☰";});}
// Subtle reveal animation with a no-JS and reduced-motion fallback.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const targets = document.querySelectorAll('.section-heading, .card, .split-image, .split > div:last-child, .product, .video-feature, .contact-note, .contact-tile, .principles > div, .feature-strip > div, .cta');
  targets.forEach(el => el.classList.add('reveal'));
  document.body.classList.add('js-motion');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:0.07, rootMargin:'0px 0px -20px 0px'});
  targets.forEach(el => observer.observe(el));
}
