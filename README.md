# Dept-case

> Practice Case for Dept Agency

## Table of content
1. Build setup
2. Tooling
3. Features

## 1. Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## 2. Tooling

What did I use for this project?

- Nuxt.js
  https://nuxtjs.org/<br>
  The power of Vue.js but with SSR. To make sure Google can index all content on the page, we want to pre-render everything on the server.

- Express<br>
  To serve our Nuxt-app, but also our API to consume data.

- Webpack<br>
  Nuxt already uses webpack, but I also use it to optimize Images etc.

- Jest <br>
  For unit-testing

## Features

### Hero
Adjusted the design a bit here, to render different images (SSR).

## Lighthouse

### PWA

### Jest

I've set up two (really) simple tests to show the concept of testing in an enviorment like this.

See `/test` for all tests.

```
Navigation.spec.js
NavigationToggle.spec.js
Logo.spec.js
```

To run tests

```
npm run jest
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
