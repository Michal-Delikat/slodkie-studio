const menuToggleButton = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const orderButton = document.querySelector('.order-button');
const header = document.querySelector('.header');

const closeMenu = () => {
    navList.classList.remove('is-open');
    menuToggleButton.setAttribute('aria-expanded', 'false');
    menuToggleButton.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
};

menuToggleButton.addEventListener('click', () => {
    const isOpen = menuToggleButton.getAttribute('aria-expanded') === 'true';

    menuToggleButton.setAttribute('aria-expanded', !isOpen);
    menuToggleButton.querySelector('i').classList.toggle('fa-bars');
    menuToggleButton.querySelector('i').classList.toggle('fa-xmark');
    navList.classList.toggle('is-open');
});

orderButton.addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});

navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) closeMenu();
});