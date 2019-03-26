const self = this;
const cacheName = "V1";

self.addEventListener('install', async e => {
    console.log('WORKER: install event in progress.');

    e.waitUntil(async () => {
        const cache = await caches.open(cacheName);
        await cache.addAll([
            'countries',
            '/js/all.min-9177f92d71e2d0620638a92e3fd6cea4.js'
        ]);
        self.skipWaiting();
    })
});

self.addEventListener('activate', async e => {
    console.log('WORKER: activated event in progress.');
});

self.addEventListener('fetch', async e => {
    console.log('WORKER: fetch event in progress.');
    //
    // const response = caches.match(e.request.url) || fetch(e.request);
    // e.respondWith(await response);
});