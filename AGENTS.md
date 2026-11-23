# Projekt
Statyczna strona cukierni (Słodkie Studio), HTML/CSS/JS bez frameworka, hosting Netlify.
Język treści i komunikacji: polski.

# Struktura
- HTML w katalogu głównym: index.html, slodki-stol.html, torty-weselne.html
- JS: index.js (menu, nagłówek), components.js (współdzielone komponenty)
- CSS w css/: tokens.css (kolory marki), globals.css (zmienne, reset, przyciski), plus jeden plik na stronę (index.css, slodki-stol.css, torty-weselne.css)
- Obrazy: source/, fonty: fonts/
- Podgląd: `npx serve .`. Nie uruchamiaj buildu ani testów.

# Style
- Kolory, fonty i grubości bierz wyłącznie ze zmiennych (--color-*, --ff-*, --fw-*). Nie wpisuj wartości na sztywno.
- Rozmiary czcionek w tym projekcie są responsywne (`clamp()`), trzymaj się tego.
- Zmieniając element, sprawdź jego reguły w blokach `@media` i `prefers-reduced-motion` w tym samym pliku CSS, bo mogą nadpisywać zmianę.
- Po zmianie układu usuń style, które przestały być potrzebne (np. `align-self` dla elementu, który wyszedł z gridu).

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