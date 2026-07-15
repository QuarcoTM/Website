
const btn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

btn?.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
});

mobileNav?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });
});
