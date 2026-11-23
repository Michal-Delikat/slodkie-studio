const siteHeaderMarkup = `
    <header class="header">
        <div class="inner-header">
            <a href="index.html" class="header-logo">
                <img src="./logo/logo_header.png" alt="Słodkie Studio" class="header-logo-img" width="512" height="142">
            </a>
            <nav class="nav" aria-label="Nawigacja główna">
                <ul class="nav-list" id="primary-nav">
                    <li><a href="slodki-stol.html">Słodki stół</a></li>
                    <li><a href="torty-weselne.html">Torty weselne</a></li>
                    <li><a href="torty-okolicznosciowe.html">Torty okolicznościowe</a></li>
                    <li><a href="index.html#o-nas">O nas</a></li>
                    <li class="nav-cta">
                        <a href="#contact" class="btn btn-outline nav-cta-link">Zapytaj o termin</a>
                    </li>
                </ul>
            </nav>
            <div class="header-actions">
                <a href="#contact" class="btn btn-outline header-cta">Zapytaj o termin</a>
                <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Otwórz menu">
                    <i class="fa-solid fa-bars" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    </header>
`;

const siteFooterMarkup = `
    <footer class="footer">
        <div class="footer-inner">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="index.html" class="footer-logo">
                        <img src="./logo/logo_header.png" alt="Słodkie Studio" width="512" height="142">
                    </a>
                    <p class="footer-desc">Słodkie stoły i torty weselne. Rymanów, Krosno i okolice.</p>
                </div>
                <div class="footer-nav-col">
                    <h2 class="footer-heading">Menu</h2>
                    <ul class="footer-nav">
                        <li><a href="slodki-stol.html">Słodki stół</a></li>
                        <li><a href="torty-weselne.html">Torty weselne</a></li>
                        <li><a href="torty-okolicznosciowe.html">Torty okolicznościowe</a></li>
                        <li><a href="index.html#o-nas">O nas</a></li>
                    </ul>
                </div>
                <div class="footer-social-col">
                    <h2 class="footer-heading">Social media</h2>
                    <ul class="footer-socials">
                        <li>
                            <a class="footer-social" href="https://www.instagram.com/slodkiestudio/" aria-label="Instagram – Słodkie Studio" target="_blank" rel="noopener noreferrer">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                                    <rect x="3" y="3" width="18" height="18" rx="5"/>
                                    <circle cx="12" cy="12" r="4"/>
                                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                                </svg>
                                <span>Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a class="footer-social" href="https://www.facebook.com/SlodkieStudioGosiPodmostko/" aria-label="Facebook – Słodkie Studio" target="_blank" rel="noopener noreferrer">
                                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M13.5 21v-7.5h2.5l.4-2.9h-2.9V8.8c0-.84.23-1.41 1.44-1.41h1.54V4.8c-.27-.04-1.19-.12-2.26-.12-2.24 0-3.77 1.37-3.77 3.88v2.16H8v2.9h2.44V21h3.06z"/>
                                </svg>
                                <span>Facebook</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="footer-contact">
                    <h2 class="footer-heading">Kontakt</h2>
                    <ul>
                        <li><a href="tel:+48722792459">+48 722 792 459</a></li>
                        <li><a href="mailto:slodkiestudio@gmail.com">slodkiestudio@gmail.com</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; Słodkie Studio Gosi Podmostko 2026</p>
            </div>
        </div>
    </footer>
`;

class SiteHeader extends HTMLElement {
    connectedCallback() {
        if (this.hasChildNodes()) return;
        this.innerHTML = siteHeaderMarkup;
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        if (this.hasChildNodes()) return;
        this.innerHTML = siteFooterMarkup;
    }
}

if (!customElements.get('site-header')) {
    customElements.define('site-header', SiteHeader);
}

if (!customElements.get('site-footer')) {
    customElements.define('site-footer', SiteFooter);
}
