const self = this;
const cacheName = "V1";

const cacheResources = async () => {
    const cache = await caches.open(cacheName);
    return cache.addAll([
        '/countries',
    ]);
};

self.addEventListener('install', e => {
    e.waitUntil(cacheResources());
});

// self.addEventListener('activate', async e => {
//     console.log('WORKER: activated event in progress.');
// });

const cachedResource = async req => {
    if (req.method === 'GET'){
        const cache = await caches.open(cacheName);
        let res = await cache.match(req);
        if (res) return res;
        res = await fetch(req);
        cache.put(req, res.clone());
        return res;
    }
};

self.addEventListener('fetch', e => {
    e.respondWith(cachedResource(e.request))
});