if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        try {
            await navigator.serviceWorker.register('/service-worker.js');
            console.log(`Service worker registered`)
        } catch (err) {
            console.error(`Failed to register service worker: ${err}`)
        }

        function handleNetworkChange() {
            if (navigator.onLine) {
                document.body.classList.remove('offline');
            } else {
                document.body.classList.add('offline');
            }
        }

        handleNetworkChange();

        window.addEventListener('online', handleNetworkChange);
        window.addEventListener('offline', handleNetworkChange);
    })
} else {
    console.log('Service worker is not supported.');
}