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

The prebuild command will remove the public css and javascript folders and then recreate it to ensure that no files are cached
```bash
npm run prebuild
```

The minify:css command will make a minified version of the CSS that is located in the resources folder and place it in the public folder
```bash
npm run minify:css
```

The minify:svg command will minify the SVG's that are located in the public folder
```bash
npm run minify:svg
```

The minify:js command will minify and bundle the JavaScript files that are located in the resources folder and place it in the public folder
```bash
npm run minify:js
```

The minify command will run the minify:css and minify:js commands in parallel
```bash
npm run minify
```

The compress:css command will make Gzip and Brotli versions of all CSS files that are located in the public folder
```bash
npm run compress:css
```

The compress:svg command will make Gzip and Brotli versions of all the SVG's that are located in the public folder
```bash
npm run compress:svg
```

The compress:js command will make Gzip and Brotli versions of all the JavaScript files that are located in the public folder
```bash
npm run compress:js
```

The compress command will run the compress:css and compress:js commands in parallel
```bash
npm run compress
```

The revision:css command will add an hash to the filename of the CSS files in the public folder and then map the original filename and the hashed filename in rev-manifest.json
```bash
npm run revision:css
```

The revision:js command will add an hash to the filename of the JavaScript files in the public folder and then map the original filename and the hashed filename in rev-manifest.json
```bash
npm run revision:js
```

The revision command will run the revision:css and revision:js commands in parallel
```bash
npm run revision
```

The generate:sw command will generate a service worker by using the sw-precache-config.js options object that is located in the public folder
```bash
npm run generate:sw
```

The build:css command will run the minify:css, revision:css and compress:css commands sequentially
```bash
npm run build:css
```

The build:js command will run the minify:js, revision:js and compress:js commands sequentially
```bash
npm run build:js
```

The build command will first run the prebuild command, then the commands build:css and builds:js in parallel, and after these two are done the generate:sw command
```bash
npm run build
```

The start command will run the build command first and then start the server
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

#### 3.1.2 Minification
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

#### 3.1.3 Minification + Gzip compression
Size difference compared to minification:
```diff
+ HTML size: 5.5 KB 91%
+ CSS size: 1.2 KB 54%
+ JS total size: 29.0 KB 66%
+ SVG's total size: 1.1 MB 62%
+ Total: ~1.1 MB 15%
```
Load time compared to minification:
```diff
+ HTML time: 2.12 s 36%
+ CSS time: 2.03 s 7%
+ JS total time: 4.90 s 19%
+ SVG's total time: 90 s 17%
+ Total: ~108 s 10%
```

<details>
  <summary>Waterfall</summary>
  
![Gzip-compressed](../master/docs/optimizations-images/gzip.png)
</details>

#### 3.1.4 Minification + Brotli compression
Size difference compared to minification + Gzip compression:
```diff
HTML size: 5.5 KB
+ CSS size: 1 KB 17%
+ JS total size: 27.3 KB 6%
+ SVG's total size: 1 MB 9%
+ Total: ~1 MB 9%
```
Load time compared to minification + Gzip compression:
```diff
+ HTML time: 2.11 s 
+ CSS time: 2.01 s 1%
+ JS total time: 4.50 s 8%
+ SVG's total time: 84 s 7%
+ Total: ~101 s 7%
```

<details>
  <summary>Waterfall</summary>
  
![Brotli-compressed](../master/docs/optimizations-images/brotli.png)
</details>


#### 3.1.5 Minification + Brotli compression + HTTP2
Size difference compared to minification + Gzip compression in HTTP1:
```diff
+ HTML size: 5.4 KB 2%
+ CSS size: 0.8 KB 20%
+ JS total size: 27.1 KB 1%
+ SVG's total size: 0.97 MB 3%
Total: ~1 MB
```
Load time compared to minification + Gzip compression in HTTP1:
```diff
- HTML time: 2.12 s 0.5%
- CSS time: 2.03 s 1%
- JS total time: 22.56 s 401%
+ SVG's total time: 26.90 s 68%
+ Total: ~27 s 73%
```

<details>
  <summary>Waterfall</summary>
  
![HTTP2](../master/docs/optimizations-images/http2.png)
</details>

### 3.2 Repeat view
For the repeat view, I'm caching the files and giving them a max-age of 31536000 seconds (one year). 
CSS and JavaScript files are hashed so that the browser can be hinted to use the new version of the CSS and JavaScript files.
<details>
  <summary>Waterfall</summary>
  
![Repeat-view](../master/docs/optimizations-images/repeat-view.png)
</details>

### 3.3 Conclusion
The results speak for themselves!

#### HTML size & load times
The HTML file size went from 64.1 KB to 5.5 KB (91% reduction) in HTTP1 and 5.4 KB (92% reduction) in HTTP2. 
The loading time went from 3.29 s to 2.11 s (36.9% reduction) in HTTP1 and 2.12 s (36.6% reduction) in HTTP2.

#### CSS size & load times
The CSS file size went from 3.8 KB to 1 KB (74% reduction) in HTTP1 and 0.8 KB (79% reduction) in HTTP2. 
The loading time went from 2.23 s to 2.01 s (9.9% reduction) in HTTP1 and 2.03 s (9% reduction) in HTTP2.

#### JS size & load times
The JS total file size went from 267.5 KB to 27.3 KB (89.8% reduction) in HTTP1 and 27.1 KB (89.9% reduction) in HTTP2. 
The loading time went from 11.9 s to 4.50 s (62% reduction) in HTTP1 and 22.56 s (90% increase) in HTTP2.

#### SVG's size & load times
The SVG's total file size went from 4.6 MB to 1 MB (78% reduction) in HTTP1 and 0.97 MB (79% reduction) in HTTP2. 
The loading time went from 132 s to 84 s (36% reduction) in HTTP1 and 26.90 s (80% reduction) in HTTP2.

#### HTTP1
The optimizations in HTTP1 are as expected; The minification and compression reduced the file sizes and load times.

#### HTTP2
The optimizations get interesting with HTTP2. 
Compared to HTTP1 - which had a total load time of 101 seconds - HTTP2 needed only 27 seconds to do this. 
This is because HTTP2 supports multiplexing which allows the browser to make multiple requests at the same time, while HTTP1 allows max 6 requests at the same time. As you can see, in the waterfall of HTTP1, the majority of the svg files are blocked because of this limitation. However, allowing multiple requests at the same time can have a negative impact. As you can see, the JS file load time took 22.56 seconds to load with HTTP2, compared to the 4.50 seconds with HTTP1. This is because the requests are 'fighting' for bandwidth. Another interesting thing are the different files sizes between HTTP1 and HTTP2. The file sizes are a bit smaller in HTTP2. I suspect that it's because of the new header compression in HTTP2 and/or because of HTTP2 being binary.

## 4. Audit results
I used lighthouse - an audit tool in Chrome's devtools - to audit the SPA and this server side version of the SPA.

SPA:
<br>
<p align="center">
  <img src="https://github.com/Arash217/performance-matters-1819/blob/master/docs/optimizations-images/lighthouse-start.jpg">
</p>

Server side:
<br>
<p align="center">
  <img src="https://github.com/Arash217/performance-matters-1819/blob/master/docs/optimizations-images/lighthouse-end.jpg">
</p>

## 5. PWA & Service Worker
The job stories:
- When I'm offline, I want to use the app, so that I can see the countries overview.
- When I'm offline, I want to use the app, so that I can see the country details.
- When I'm offline, I want to be notified, so that I can know wether the app is in online or offline modus.

## Sources
- [HTTP2](https://http2.github.io/faq/#why-is-http2-binary)
