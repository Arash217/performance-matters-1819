# COUNTRIES OVERVIEW

## Summary
Server-side application of the [SPA](https://github.com/Arash217/web-app-from-scratch-18-19) that I previously made to show an overview of all countries. I chose to optimize the first view and repeat view, because I wanted to do more experience optimizing pages for performance.

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

The next sections display the results of the optimizations.
Note: Load times are based on 'slow 3G' emulation of Google developer tools.

### 3.1 First view

#### 3.1.1 No optimizations
Size:
```diff
HTML size: 64.1 KB
CSS size: 3.8 kB
JS total size: 267.5 KB
SVG's total size: 4.6 MB
Total: ~ 4.9 MB
```
Load time:
```diff
HTML time: 3.29 s
CSS time: 2.23 s
JS total time: 11.9 s
SVG's total time: 132 s
Total: ~150 s
```

<details>
  <summary>Waterfall</summary>
  
![No optimizations](../master/docs/optimizations-images/no-optimizations.png)
</details>

#### 3.1.2 Minifying
Size difference compared to no optimizations:
```diff
HTML size: 64.1 KB
+ CSS size: 2.6 KB 32%
+ JS total size: 85.6 KB 68%
+ SVG's total size: 2.9 MB 37%
+ Total: ~3.1 MB 37%
```
Load time compared to no optimizations:
```diff
HTML time: 3.30 s
+ CSS time: 2.19 s 1.8%
+ JS total time: 6.03 s 49%
+ SVG's total time: 108 s 18%
+ Total: ~120 s 20%
```

<details>
  <summary>Waterfall</summary>
  
![Minified](../master/docs/optimizations-images/minify.png)
</details>

#### 3.1.3 Minifying + Gzip compression
Size difference compared to minifying only:
```diff
+ HTML size: 5.5 KB 91%
+ CSS size: 1.2 KB 54%
+ JS total size: 29.0 KB 66%
+ SVG's total size: 1.1 MB 62%
+ Total: ~1.1 MB 15%
```
Load time compared to minifying only:
```diff
+ HTML time: 2.12 s 36%
+ CSS time: 2.03 s 7%
+ JS total time: 4.90 s 19%
+ SVG's total time: 90 s 17%
+ Total: ~108 s 10%
```

<details>
  <summary>Waterfall</summary>
  
![Minified](../master/docs/optimizations-images/gzip.png)
</details>

#### 3.1.4 Minifying + Brotli compression
Size difference compared to minifying + Gzip compression:
```diff
HTML size: 5.5 KB
+ CSS size: 1 KB 17%
+ JS total size: 27.3 KB 6%
+ SVG's total size: 1 MB 9%
+ Total: ~1 MB 9%
```
Load time compared to minifying + Gzip compression:
```diff
+ HTML time: 2.11 s 
+ CSS time: 2.01 s 1%
+ JS total time: 4.50 s 8%
+ SVG's total time: 84 s 7%
+ Total: ~101 s 7%
```

<details>
  <summary>Waterfall</summary>
  
![Minified](../master/docs/optimizations-images/brotli.png)
</details>


#### 3.1.5 Minifying + Brotli compression + HTTP2
Size difference compared to minifying + Gzip compression with HTTP1:
```diff
+ HTML size: 5.4 KB 2%
+ CSS size: 0.8 KB 20%
+ JS total size: 27.1 KB 1%
+ SVG's total size: 0.97 MB 3%
Total: ~1 MB
```
Load time compared to minifying + Gzip compression with HTTP1:
```diff
- HTML time: 2.12 s -0.5%
- CSS time: 2.03 s -1%
- JS total time: 22.56 s -401%
+ SVG's total time: 26.90 s 68%
+ Total: ~27 s 73%
```

<details>
  <summary>Waterfall</summary>
  
![Minified](../master/docs/optimizations-images/http2.png)
</details>
