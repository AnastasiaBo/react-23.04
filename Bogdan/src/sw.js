import { skipWaiting, clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';

skipWaiting();
clientsClaim();

registerRoute(new RegExp('/api', 'g'), new CacheFirst());

precacheAndRoute(self.__WB_MANIFEST, {
  directoryIndex: null,
});