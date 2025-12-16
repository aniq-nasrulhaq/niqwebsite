
// Shared simple animation helper: reveal on scroll and simple nav toggle
document.addEventListener('DOMContentLoaded', () => {
  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('in-view');
    });
  }, {threshold: 0.15});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Mobile nav toggle
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-links');
  if (btn) btn.addEventListener('click', () => nav.classList.toggle('open'));

  // Simple gallery lightbox
  document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
      let modal = document.createElement('div');
      modal.className = 'lightbox';
      modal.innerHTML = `<div class="lb-inner"><img src="${img.src}" alt=""><button class="close">✕</button></div>`;
      document.body.appendChild(modal);
      modal.querySelector('.close').onclick = () => modal.remove();
      modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    });
  });
});
