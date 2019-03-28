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

Run the server (will use port 3100 for HTTP and port 3101 for HTTP2)
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

The compress command will make a Gzip and Brotli version of all files that are located in the public folder
```bash
npm run compress
```

The build command will run the prebuild, minify and compress commands sequentially
```bash
npm run build
```

The start command will run the build command first and then start the server (on port 3000)
```bash
npm start
```

## 3. Optimizations

### 3.1 First view

#### 3.1.1 No optimizations
Size
```diff
HTML size: 64.1 kb
CSS size: 3.7 kb
JQuery size: 276 kb
SVG's total size: 4.6 mb
```
Load time
```
HTML time: 3.29 s
CSS time: 2.27 s
JQuery time: 11.01 s
SVG's total time: 1.9 min
```

<details>
  <summary>Waterfall</summary>
  
![No optimizations](../master/docs/optimizations-images/no-optimizations.png)
</details>

#### 3.1.2 Minifying
```diff
HTML size: 64.1 kb
CSS size: 2.6 kb
JQuery size: 84.6 kb
SVG's total size: 2.9 mb
```
<details>
  <summary>Network results based on a slow 3G network</summary>
<br>

```
HTML time: 3.30 s
CSS time: 2.16 s
JQuery time: 5.59 s
SVG's total time: 1.5 min

256 requests | 2.9 MB transferred | Finish 1.9 min | DOMContentLoaded: 10.13 s | Load 1.9 min
```
</details>
