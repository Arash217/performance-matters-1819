# COUNTRIES OVERVIEW

## Summary
Server-side application of the [SPA](https://github.com/Arash217/web-app-from-scratch-18-19) that I previously made to show an overview of all countries.

![Overview](../master/docs/app.png)

## 1. Usage

Fork and/or clone it
```bash
git clone https://github.com/Arash217/performance-matters-1819
```

Install dependencies
```bash
npm install
```

Run the server (will use port 3000)
```bash
npm start
```

## 2. NPM scripts

The dev command will use nodemon to restart the server automatically when a change is made in the code
```bash
npm run dev
```

The prebuild command will remove the public folder and then recreate it to ensure that no files are cached
```bash
npm run prebuild
```

The minify:css command will make a minified version of the CSS that is located in the resources folder and place it in the public folder
```bash
npm run minify:css
```
