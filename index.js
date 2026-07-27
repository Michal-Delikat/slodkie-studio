const btn = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

const closeMenu = () => {
    navList.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    btn.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
};

btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    btn.setAttribute('aria-expanded', !isOpen);
    btn.querySelector('i').classList.toggle('fa-bars');
    btn.querySelector('i').classList.toggle('fa-xmark');
    navList.classList.toggle('is-open');
});

navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) closeMenu();
});