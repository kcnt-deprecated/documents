/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "49df467623f39e670054a8b1771c3e11"
  },
  {
    "url": "assets/css/0.styles.55641f43.css",
    "revision": "3621ed0b4a2e65b3e4abd2327e49dbc5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.3cf623f9.js",
    "revision": "1189b2465ebd2a5f5b129c95ebfeecf1"
  },
  {
    "url": "assets/js/10.d23e16d2.js",
    "revision": "75c751f34157a37c01636e366b1b65a5"
  },
  {
    "url": "assets/js/11.d5f5b692.js",
    "revision": "d74665160a3d3a2db5ae6215cefb0904"
  },
  {
    "url": "assets/js/12.8d663b19.js",
    "revision": "51b7937518fcfd9820e8b5d1e1a46073"
  },
  {
    "url": "assets/js/13.d779d630.js",
    "revision": "7b6762a4db19319cf5ff9a568d9e5c67"
  },
  {
    "url": "assets/js/14.e6484bef.js",
    "revision": "c00fd33b95244653970c7148f6958eea"
  },
  {
    "url": "assets/js/15.48a2307c.js",
    "revision": "76730b42d8e5f6e8fcabda5a6b9bca39"
  },
  {
    "url": "assets/js/4.8a7b9d8c.js",
    "revision": "7a876a7a51dc919e85eb8c2d5989b6c3"
  },
  {
    "url": "assets/js/5.07a198f3.js",
    "revision": "4ec2c69bd8c868ab1c4612c648eb4115"
  },
  {
    "url": "assets/js/6.dd93ab68.js",
    "revision": "5280dfafb11024ad8c14eddc86ad62d0"
  },
  {
    "url": "assets/js/7.5ddb3ffc.js",
    "revision": "c062ec72bb030a0518e2e9a8ab8d051f"
  },
  {
    "url": "assets/js/8.c9686566.js",
    "revision": "302b967e8f779ee6ead76729489c3a43"
  },
  {
    "url": "assets/js/9.66adc1aa.js",
    "revision": "80f06b3bc6532c446472374ecc78c850"
  },
  {
    "url": "assets/js/app.85de249a.js",
    "revision": "742593bde87f55406a63a0d94817ac12"
  },
  {
    "url": "assets/js/vendors~docsearch.2ebcf6b2.js",
    "revision": "3bc537726518783e63de5a7844140338"
  },
  {
    "url": "changelog/index.html",
    "revision": "e31ed478aeb427c2a82fa4b33e3961e7"
  },
  {
    "url": "design-principle/index.html",
    "revision": "7bed936ba790a1e11073e557997caf1e"
  },
  {
    "url": "development/domain.html",
    "revision": "da0a2d118d43cd61807b0429d37f0cc5"
  },
  {
    "url": "development/format.html",
    "revision": "2e6699ce7173843d025094820129b097"
  },
  {
    "url": "development/index.html",
    "revision": "d23b01896e46ffd664128a7141ceec37"
  },
  {
    "url": "i18n/index.html",
    "revision": "d27d692b3261181a1f8f5a64b2838e7b"
  },
  {
    "url": "index.html",
    "revision": "a39595c0f0e7a808ffd943dea2cf45e0"
  },
  {
    "url": "planning/index.html",
    "revision": "b651838cc11af532865ce1c45275d0eb"
  },
  {
    "url": "th/changelog/index.html",
    "revision": "d90a8a1783a95aa8a80b0d0e98d3ef1d"
  },
  {
    "url": "th/index.html",
    "revision": "16a752e2bba4f84c98fa2f452f250f43"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
