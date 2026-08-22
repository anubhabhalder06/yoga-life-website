const CACHE_NAME = 'yoga-life-offline-v1';
const OFFLINE_URL = 'offline.html';

const FILES_TO_CACHE = [
  OFFLINE_URL,
  'css/style.css',
  'assets/yoga-life-logo.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Only intercept navigation requests (i.e. HTML pages)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        // If network request fails, return the offline page
        return caches.match(OFFLINE_URL);
      })
    );
  }
});
