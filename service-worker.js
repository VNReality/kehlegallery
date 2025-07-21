const cacheName = 'kehle-cache-v1';
const filesToCache = [
  'index.html',
  'manifest.json',
  'Ghost.png',
  'Handgun.png',
  'Sniper.png',
  'Kalashnikov.png',
  'Knife.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
