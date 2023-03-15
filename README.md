# Step-by-step example for Nuxt3

## (English)
All data is in separate branches
[Guide](#en)
## (Slovensky)
Všetky dáta sú v samostatných vetvách
[Návod](#sk)

---
## en

## Development
```bash
yarn install # - install dependecies
yarn dev # - start development server on http://localhost:3000
```

## Production
```bash
yarn build # - build for production
yarn preview # - locally preview production build
```

## Changes
- Fixed Header
- Footer anchored to the bottom of the page if the content is short
- Added Tailwind classes for light/dark background and text color
- "switching" between light/dark mode that affects components on the page, not only the given Header component (adding/removing classList)
- function getFullYear for the current year in Footer

## Release notes
- v003 - add Header, Footer and switch light/dark mode
- v002 - add tailwindcss
- v001 - add nuxt 3

## Other:
[Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction)
[Tailwind documentation](https://tailwindcss.com/docs/installation)


---

## sk

## Vývoj
```bash
yarn install # - inštalácia balíkov
yarn dev # - spustenie servera na http://localhost:3000
```

## Produkcia
```bash
yarn build # - zostavenie pre produkciu
yarn preview # - lokálny náhľad zostavenej aplikácie
```

## Zmeny
- Pevný Header
- Footer ukotvený na koniec stránky ak je krátky obsah
- Pridané Tailwind classy pre svetlé/tmavé pozadie a farbu textu
- "prepínanie" medzi svetlým/tmavým režimom, ktoré ovplyvňuje komponenty na stránke, nielen danú komponentu Header (pridanie/odstránenie classList)
- funkcia getFullYear pre aktuálny rok vo Footri

## Poznámky k vydaniu
- v003 - pridaný Header, Footer a prepínač na svetlý/tmavý režim
- v002 - pridaný tailwindcss
- v001 - pridaný nuxt 3

## Ostatné:
[Nuxt 3 dokumentácia](https://nuxt.com/docs/getting-started/introduction)
[Tailwind dokumentácia](https://tailwindcss.com/docs/installation)