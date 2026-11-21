const menuToggleButton = document.querySelector('.menu-toggle');
const navList = document.querySelector('#primary-nav');
const header = document.querySelector('.header');

if (menuToggleButton && navList) {
    const setOpen = (open) => {
        navList.classList.toggle('is-open', open);
        menuToggleButton.setAttribute('aria-expanded', String(open));
        menuToggleButton.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');

        const icon = menuToggleButton.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars', !open);
            icon.classList.toggle('fa-xmark', open);
        }
    };

    const closeMenu = () => setOpen(false);

    menuToggleButton.addEventListener('click', () => {
        const isOpen = menuToggleButton.getAttribute('aria-expanded') === 'true';
        setOpen(!isOpen);
    });

    navList.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
        if (header && !header.contains(event.target)) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menuToggleButton.getAttribute('aria-expanded') === 'true') {
            closeMenu();
            menuToggleButton.focus();
        }
    });
}
