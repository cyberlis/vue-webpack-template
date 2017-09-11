# vue-webpack-stylus-boilerplate

> Webpack setup for `vuejs` and `stylus` generate separed files

### Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
$ npm install -g vue-cli
$ vue init fabricionaweb/vue-stylus my-project
$ cd my-project
$ npm install
$ npm run dev
```

### What's included

- `npm run dev`: Webpack-dev-server + `vue` + `stylus` + `postcss (autoprefixer and cssnano)` with proper config for sourceMaps & hot-reload.
- `npm run build`: Production build with CSS and JS minification in `assets/dist` directory.

> **NOTE** 404 to `styles.min.css` is acceptable because it is only generated for production, in developing *hot-reload* injects dynamically styles.