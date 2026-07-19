const btn = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

btn.addEventListener('click', () => {
    const icon = btn.querySelector('i');
    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    btn.setAttribute('aria-expanded', !isOpen);
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
    navList.classList.toggle('is-open');

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-xmark');
        });
    });

    document.addEventListener('click', (e) => {
        if (!header.contains(e.target)) {
            nav.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
});