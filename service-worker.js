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
    "revision": "361feeda8a1d3b383510765351f8100e"
  },
  {
    "url": "assets/css/styles.styles.8b555a2a.css",
    "revision": "3621ed0b4a2e65b3e4abd2327e49dbc5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.0f817588.js",
    "revision": "edc2778dd55f2276827fd6b67aa1a9b5"
  },
  {
    "url": "assets/js/1.9b68f852.js",
    "revision": "2aaa199af0051368bef71ad2a5f10492"
  },
  {
    "url": "assets/js/10.092d781c.js",
    "revision": "5516f8258103f4e07fa792d6f0261cd3"
  },
  {
    "url": "assets/js/11.107acf6b.js",
    "revision": "9e4758c713f298bd514082d572d2c0e8"
  },
  {
    "url": "assets/js/12.1cd2347f.js",
    "revision": "b6478f46edae310e40be2ac1c03da917"
  },
  {
    "url": "assets/js/2.e0739aed.js",
    "revision": "2d002ffff5687ffbff0b15abd0623e35"
  },
  {
    "url": "assets/js/3.7bdd0070.js",
    "revision": "5bf3658a6ac6323d982b2c0da4b97a34"
  },
  {
    "url": "assets/js/4.e43af733.js",
    "revision": "9970f0eeb2c62067c0c3f46c5eccaaa2"
  },
  {
    "url": "assets/js/5.f3957681.js",
    "revision": "0f36775f9e372cce2860c742e1d53c23"
  },
  {
    "url": "assets/js/6.5ccce8f7.js",
    "revision": "bae6177652413b7985cc1bf5773b340e"
  },
  {
    "url": "assets/js/7.8fbc56cf.js",
    "revision": "0b8e30f33aff3fd45c6e428e8a16139a"
  },
  {
    "url": "assets/js/8.f6d90e46.js",
    "revision": "aa55021a02dc488558f75b621357e507"
  },
  {
    "url": "assets/js/9.4fffdd36.js",
    "revision": "6baf6c7d03090e35d5ff5cff48d067c0"
  },
  {
    "url": "assets/js/app.e887691d.js",
    "revision": "10a768567be5106f1b963216d821a451"
  },
  {
    "url": "assets/js/vendors~docsearch.09e0e55a.js",
    "revision": "28f516b6ad39c47e0dd8c3f12163e3c4"
  },
  {
    "url": "CHANGELOG.html",
    "revision": "1e283d5633e449234fda772ee4087819"
  },
  {
    "url": "changelog/index.html",
    "revision": "aefafc4a58dcf33004839cdaa2c1d325"
  },
  {
    "url": "design-principle/index.html",
    "revision": "102becc6cb0bfccbba8456a186ac6580"
  },
  {
    "url": "development/domain.html",
    "revision": "1a500d3a66e4320621982a14ebfcfe0d"
  },
  {
    "url": "development/format.html",
    "revision": "7f74d9807b52fdf695b858f81d8a8533"
  },
  {
    "url": "development/index.html",
    "revision": "fa16758a2ff2322d23bcd955421b41c4"
  },
  {
    "url": "i18n/index.html",
    "revision": "562bb4cde690f6ee0af204b1d2e34ed7"
  },
  {
    "url": "index.html",
    "revision": "196b3d36d6d7a37607fe6a5c6c486395"
  },
  {
    "url": "planning/index.html",
    "revision": "e6e0058580f19f76f6713b4254e62751"
  },
  {
    "url": "th/changelog/index.html",
    "revision": "a799b031a5f7a2e8f5ec24587c84ea83"
  },
  {
    "url": "th/index.html",
    "revision": "3276e0a6de744532859681012da96804"
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
