self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('brixel-v1').then(cache => {
      return cache.addAll([
        'index-v2.html',
        'style-v2.css',
        'script.js',
        'images/logo.png.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
