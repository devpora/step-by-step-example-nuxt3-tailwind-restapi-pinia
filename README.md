# Step-by-step example for Nuxt3

## (English)

All data is in separate branches

**Basic info:**

- 🚧 nuxt3 and tailwind
- 🎨 two layouts (website and dashboard)
- 🌍 i18n
- 🌜 dark/light
- 🌐 login and register from external Rest API + oAuth Google, GitHub and GitLab
- 🔑 middleware is-admin, is-user and is-guest
- 🔧 eslint, prettier
- 🔒 local ssl

[Guide](#en)📖 

## (Slovensky)

Všetky dáta sú v samostatných vetvách

**Základné info:**

- 🚧 nuxt3 a tailwind
- 🎨 dva layouty (web a admin)
- 🌍 i18n
- 🌜 dark/light
- 🌐 prihlásenie a registrácia cez externé Rest API + oAuth Google, GitHub a GitLab
- 🔑 middleware is-admin, is-user a is-guest
- 🔧 eslint, prettier
- 🔒 lokálne ssl

[Návod](#sk)📖 

---

## en

## Development

```bash
cp .env.example .env # - copying the env and modifying the url to the api if necessary
yarn install # - install dependecies
yarn dev # - start development server on http://localhost:3000

yarn lint:js # - Show errors and warnings
yarn lintfix # - Fix
```

### https for localhost
```bash
npm install -g mkcert local-ssl-proxy # - Install globally (not for the project) mkcert and ssl proxy
mkcert create-ca # - Create root cert
mkcert create-cert --key server-key.pem --cert server-cert.pem # - Create cert for page
yarn ssl # - start development https server on https://localhost:3443
```

## Production

```bash
yarn build # - build for production
yarn preview # - locally preview production build
```

## Changes

- Added notifications for login/logout
- Added /notify page

## Release notes

- v015 - notification
- v014 - oAuth
- v013 - fontawesome
- v012 - local ssl
- v011 - eslint + prettier
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

- pinia
- roles

## Other:

[Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction)

[Tailwind documentation](https://tailwindcss.com/docs/installation)

[Api DevPora](https://laravel-rest-api-with-passport-postman.devpora.com/)

---

## sk

## Vývoj

```bash
cp .env.example .env # - prekopírovanie env a v prípade potreby úprava url na api
yarn install # - inštalácia balíkov
yarn dev # - spustenie servera na http://localhost:3000

yarn lint:js # - Zobrazenie chýb
yarn lintfix # - Oprava chýb
```

### lokálne https
```bash
npm install -g mkcert local-ssl-proxy # - Nainštalujeme globálne (nie pre projekt) mkcert a ssl proxy
mkcert create-ca # - Vytvoríme root certifikát
mkcert create-cert --key server-key.pem --cert server-cert.pem # - Vytvoríme certifikát
yarn ssl # - spustenie https servera na https://localhost:3443
```

## Produkcia

```bash
yarn build # - zostavenie pre produkciu
yarn preview # - lokálny náhľad zostavenej aplikácie
```

## Zmeny

- Pridané notifikácie pri prihláseni/odhlásení
- Pridaná stránka /notify

## Poznámky k vydaniu

- v015 - notifikácie
- v014 - oAuth
- v013 - fontawesome
- v012 - lokálne ssl
- v011 - eslint + prettier
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

## sometime in the future

- role

## Ostatné:

[Nuxt 3 dokumentácia](https://nuxt.com/docs/getting-started/introduction)

[Tailwind dokumentácia](https://tailwindcss.com/docs/installation)

[Api DevPora](https://laravel-rest-api-with-passport-postman.devpora.com/)
