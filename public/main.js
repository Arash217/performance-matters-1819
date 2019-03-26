window.addEventListener('load', async () => {
    if ('serviceWorker' in navigator) {
        try {
            const serviceWorker = await navigator.serviceWorker.register('/sw.js');
            console.log(`Service worker registered ${serviceWorker}`)
        } catch (err) {
            console.error(`Failed to register service worker: ${err}`)
        }
    } else {
        console.log('Service worker is not supported.');
    }
});