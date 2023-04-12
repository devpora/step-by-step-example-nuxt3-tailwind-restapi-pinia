# Step-by-step example for Nuxt3

## (English)
All data is in separate branches
**Basic info:**
- nuxt3 and tailwind
- two layouts (website and dashboard)
- login and register from external Rest API
- middleware is-admin, is-user and is-guest

[Guide](#en)

## (Slovensky)
Všetky dáta sú v samostatných vetvách
**Základné info:**
- nuxt3 a tailwind
- dva layouty (web a admin)
- prihlásenie a registrácia cez externé Rest API
- middleware is-admin, is-user a is-guest

[Návod](#sk)

---
## en

## Development
```bash
cp .env.example .env # - copying the env and modifying the url to the api if necessary
yarn install # - install dependecies
yarn dev # - start development server on http://localhost:3000
```

## Production
```bash
yarn build # - build for production
yarn preview # - locally preview production build
```

## Changes
- Added pages /admin and /user 
- Added admin layout for dashboard (/admin) from https://github.com/wobsoriano/v-dashboard (without functionality, only for demonstration)
- Currently two layouts are used. One for the website and another for the admin section 
- Header and Footer were moved and index uses components for clarity 
- Added middleware is-admin. Page "/admin" is only accessible to a logged-in user who is an admin (id 1)
- Added middleware is-user. Page "/user" is only accessible to a logged-in user 
- Added middleware is-guest. Page "/auth/login" and "/auth/register" is only accessible to a guest user

## Release notes
- v010 - added admin section
- v009 - connect to RestApi
- v008 - login and register page
- v007 - added language
- v006 - default layout with Header/Footer components
- v005 - heroicons package
- v004 - modified darkmode for scrolling
- v003 - add Header, Footer and switch light/dark mode
- v002 - add tailwindcss
- v001 - add nuxt 3

## sometime in the future
- login with external api
- pinia
- roles

## Other:
[Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction)
[Tailwind documentation](https://tailwindcss.com/docs/installation)


---

## sk

## Vývoj
```bash
cp .env.example .env # - prekopírovanie env a v prípade potreby úprava url na api
yarn install # - inštalácia balíkov
yarn dev # - spustenie servera na http://localhost:3000
```

## Produkcia
```bash
yarn build # - zostavenie pre produkciu
yarn preview # - lokálny náhľad zostavenej aplikácie
```

## Zmeny
- Pridaná stránka /admin a /user
- Pridaný admin layout pre dashboard (/admin) z https://github.com/wobsoriano/v-dashboard (bez funkčnsoti, len ukážka)
- Aktuálne sa používajú dva layouty. Iný pre web a iný pre admin sekciu
- Header a Footer boli presunuté a index používa komponenty kvôli prehľadnosti
- Pridaný middleware is-admin. Stránka "/admin" je dostupná len pre prihláseného používateľa, ktorý je admin (id 1)
- Pridaný middleware is-user. Stránka "/user" je dostupná len pre prihláseného používateľa
- Pridaný middleware is-guest. Stránka "/auth/login" a "/auth/register" je dostupná len pre neprihláseného používateľa

## Poznámky k vydaniu
- v010 - pridaná admin sekcia
- v009 - pripojenie rest api
- v008 - pridané login stránky
- v007 - pridané jazykové verzie
- v006 - layout a Header/Footer komponenty
- v005 - pridaný balík Heroicons
- v004 - upravený darkmode pre scrolovanie
- v003 - pridaný Header, Footer a prepínač na svetlý/tmavý režim
- v002 - pridaný tailwindcss
- v001 - pridaný nuxt 3
- 
## sometime in the future
- role

## Ostatné:
[Nuxt 3 dokumentácia](https://nuxt.com/docs/getting-started/introduction)
[Tailwind dokumentácia](https://tailwindcss.com/docs/installation)
