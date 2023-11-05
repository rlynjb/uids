# uids
https://rlynjb.github.io/uids/

## How to configure

1. install vue using vue-cli
follow vue styleguidist instruction here: https://vue-styleguidist.github.io/docs/GettingStarted.html#_1-install

2. install tailwindcss via vue-cli
- https://tailwindcss.com/docs/installation
- add to vue-cli: https://www.npmjs.com/package/vue-cli-plugin-tailwind

3. install typescript via vue-cli
- run `sudo vue add typescript`

4. install and configure daisyui
- https://daisyui.com/docs/install/

## deploy to github pages
```
npm run cleanbuild
npm run styleguide:build
npm run movebuild
```

## TODOs
- load icons
- set general theme
- on sample code, how to use vue.js
- on paginationUI, make component flush on right
- on select multiple field, make it work
- stepsui, how to use vue.js on code sample
- on tabsui, how t use vue.js on code sample
- textfieldui, implement usages
- toastui, implement usages

## Backlog
- redesign/relayout UI stylguidist
- component props section, show by default
- component view code, show by default
- set official UI styleguide name
- display components on each own page


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
