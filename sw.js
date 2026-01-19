const CACHE_NAME = 'teoria-musical-v1';
const ASSETS_TO_CACHE = [
  './index.html',
  './style.css',
  './js/app.js',
  './manifest.json',
  // Chapters (Pre-caching core chapters)
  './chapters/01_intro.html',
  './chapters/04_scales.html',
  './chapters/07_functions.html',
  './chapters/08_technique.html'
];

// Install Event: Cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Fetch Event: Network First, then Cache (Stale-while-revalidate strategy is also good, but Network First ensures updates)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Update cache with new version if successful
        if (event.request.method === 'GET') {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseClone);
            });
        }
        return response;
      })
      .catch(() => {
        // If offline, return from cache
        return caches.match(event.request);
      })
  );
});

// Activate Event: Cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
