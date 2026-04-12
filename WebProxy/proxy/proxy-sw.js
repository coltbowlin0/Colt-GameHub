// This uses a relative path that is safer for most browsers
importScripts('../scram/scramjet.all.js');

// Add a console log here to see if it even gets past the import
console.log("Scramjet Worker Loaded!"); 

const { ScramjetServiceWorker } = $scramjetLoadWorker();
const scramjet = new ScramjetServiceWorker();

async function handleRequest(event) {
    // If the request is for socket.io, let it go through to the internet normally
    if (event.request.url.includes('socket.io')) {
        return fetch(event.request);
    }

    try {
        await scramjet.loadConfig();
        if (scramjet.route(event)) {
            return await scramjet.fetch(event);
        }
    } catch (err) {
        console.error("Scramjet worker error:", err);
    }
    return fetch(event.request);
}

self.addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event));
});