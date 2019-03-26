if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        try {
            await navigator.serviceWorker.register('/sw.js');
            console.log(`Service worker registered`)
        } catch (err) {
            console.error(`Failed to register service worker: ${err}`)
        }
    })
} else {
    console.log('Service worker is not supported.');
}