# Projekt
Statyczna strona cukierni (Słodkie Studio), HTML/CSS/JS bez frameworka, hosting Netlify.
Język treści i komunikacji: polski.

# Struktura
- HTML: index.html w katalogu głównym, podstrony w folderach (slodki-stol/, torty-weselne/, dla-firm/) jako index.html
- JS: index.js (menu, nagłówek), components.js (współdzielone komponenty)
- CSS w css/: tokens.css (wszystkie tokeny: kolory, fonty, layout), styles.css (reset, przyciski i klasy współdzielone przez więcej niż jedną podstronę), plus jeden plik na stronę (index.css, slodki-stol.css, torty-weselne.css, dla-firm.css)
- Obrazy: source/, fonty: fonts/
- Podgląd: `npx serve .`. Nie uruchamiaj buildu ani testów.

# Style
- Kolory, fonty, grubości, rozmiary czcionek i letter-spacing bierz wyłącznie ze zmiennych (--color-*, --ff-*, --fw-*, --fs-*, --tracking-*). Nie wpisuj wartości na sztywno.
- Rozmiary czcionek w tokenach `--fs-*` zapisuj jako stałe `px`; `clamp()` stosuj tylko do nagłówków. Nie używaj `rem`; najmniejszy stały rozmiar to `--fs-body` (16px).
- Wszystkie `h1` używają `--fs-h1`, `h2` — `--fs-h2`, a `h3` — `--fs-h3` (każdy kolejny mniejszy).
- Rozmiary czcionek w tym projekcie są responsywne (`clamp()`), trzymaj się tego.
- Zmieniając element, sprawdź jego reguły w blokach `@media` i `prefers-reduced-motion` w tym samym pliku CSS, bo mogą nadpisywać zmianę.
- Po zmianie układu usuń style, które przestały być potrzebne (np. `align-self` dla elementu, który wyszedł z gridu).

# Tokeny kolorów (css/tokens.css)
Kolejność definicji i zasady:
1. `--brand-*` — surowe kolory marki (HEX z logo).
2. Nazwy potoczne kolorów — `--pink`, `--brown`, `--beige`, `--black`, `--gray`; mogą wskazywać na `--brand-*`.
3. Tokeny przypadków użycia — `--color-bg`, `--color-surface`, `--color-text`, `--color-text-muted`, `--color-accent`, `--color-brand`, `--color-inverse-surface`, `--color-text-inverse`, `--color-accent-inverse`, `--color-line`, `--color-line-inverse`, `--color-surface-muted`, `--color-stripe`, `--color-on-accent`, `--color-border-light`; odwołują się wyłącznie do nazw potocznych.
4. W klasach CSS używaj wyłącznie tokenów przypadków użycia (`var(--color-*)`). Nie wpisuj w klasach `--brand-*`, nazw potocznych ani wartości HEX.

Róż jest bazowym tłem strony (`--color-bg` = `--pink`). Karty i panele korzystają z `--color-surface` (beż). Wyjątek: `--color-on-accent` ma bezpośrednio `#FFFFFF` — biały jest używany wyłącznie na tekście przycisku `.btn-solid`. Skrót `--border-light` (pełny border) jest zdefiniowany w sekcji Borders, poza przypadkami użycia kolorów.

# Karty i linki
- Klikalny jest zwykle link na tytule, rozciągnięty na całą kartę. Dodając element wyglądający jak przycisk, upewnij się, że jest klikalny: albo mieści się w rozciągniętym linku, albo sam jest linkiem.
- Elementy dekoracyjne dostają `aria-hidden="true"`.

# Sposób pracy
- Nie przeglądaj całego repo. Szukaj grepem, czytaj tylko potrzebne pliki, kilka naraz.
- Edytuj punktowo, nie przepisuj plików.
- Jeśli polecenie jest niejednoznaczne, przyjmij najbardziej prawdopodobną interpretację, ale w odpowiedzi napisz jednym zdaniem, jak ją zrozumiałeś.
- Jeśli wartość, którą masz użyć, wygląda na nietrafioną (np. "kolor akcentowy" prawie nie różni się od koloru tekstu), zrób, o co proszę, i dopisz tę uwagę.
- Po edycji HTML przeczytaj zmieniony fragment pliku, a nie tylko grepuj nazwy klas. Sprawdź, czy nie został stary element ani niezamknięty tag.
- Jeśli możesz uruchomić podgląd lub zrobić zrzut ekranu, zrób to przy zmianach wizualnych.
- Odpowiedź końcowa: 1–3 zdania, bez podsumowywania każdej edycji. Napisz, czego nie sprawdziłeś.