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
- Added .env.example with connection to free external API
- Added data from .env to nuxt.config.js
- Added repository with auth addresses on rest api
- Added store for user data
- Defined types for individual responses in the types directory
- Added pinia and types packages
- Ability to test login, logout and registration. Test login admin@devpora.com with HardPass password

## Release notes
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
- Pridané .env.example s napojením na bezplatné externé API
- Pridané údaje z .env do nuxt.config.js
- Pridaný repozitár s auth adresami na rest api
- Pridaný store na uloženie údajov o používateľovi
- Definované typy pre jednotlivé odpovede v adresári types
- Pridané balíky pinia a types
- Možnosť otestovať prihlásenie, odhlásenie a registráciu. Test login admin@devpora.com s heslom HardPass

## Poznámky k vydaniu
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