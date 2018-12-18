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
    "revision": "50eb864539a50f05bf8b175f81991bc4"
  },
  {
    "url": "assets/css/styles.styles.6255addd.css",
    "revision": "3621ed0b4a2e65b3e4abd2327e49dbc5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.5f0e8b74.js",
    "revision": "4e5ca4cfa2c7b584d907ed9eb77ffc0f"
  },
  {
    "url": "assets/js/1.aa8bd783.js",
    "revision": "368986d62bf20d607f59b19f88f24a37"
  },
  {
    "url": "assets/js/10.83c0705a.js",
    "revision": "5f570325d6a68ddaf2548d2d72c5336b"
  },
  {
    "url": "assets/js/11.107acf6b.js",
    "revision": "9e4758c713f298bd514082d572d2c0e8"
  },
  {
    "url": "assets/js/12.f7d61103.js",
    "revision": "70a1587da2e9b80310006de91124cf51"
  },
  {
    "url": "assets/js/2.acf26aea.js",
    "revision": "cc970c9a98aaaf8f987a2248cfb55240"
  },
  {
    "url": "assets/js/3.c2d50bac.js",
    "revision": "ec5cfa3fb9169bf476734f1958602eac"
  },
  {
    "url": "assets/js/4.140a52bc.js",
    "revision": "98aa6270672fde644144398e37d722b3"
  },
  {
    "url": "assets/js/5.163408e4.js",
    "revision": "4f7d24e569e32303532f3f82e49c3ddf"
  },
  {
    "url": "assets/js/6.5ccce8f7.js",
    "revision": "bae6177652413b7985cc1bf5773b340e"
  },
  {
    "url": "assets/js/7.6445b44b.js",
    "revision": "8ece3946c35b876274d5aa616225e4e0"
  },
  {
    "url": "assets/js/8.7403c8c6.js",
    "revision": "01725a666552f2f98f284d3e5a6b126a"
  },
  {
    "url": "assets/js/9.a15658b2.js",
    "revision": "e91e0e685c5e57f82f0075e63e74a58e"
  },
  {
    "url": "assets/js/app.f4b2d9d3.js",
    "revision": "929776ee23cba3ca0e603057fbdae381"
  },
  {
    "url": "assets/js/vendors~docsearch.e8000bab.js",
    "revision": "2305e0b8910e15e7fce136fc3ce14da5"
  },
  {
    "url": "CHANGELOG.html",
    "revision": "376c75dc1198d7c9a1c73faa222827ef"
  },
  {
    "url": "changelog/index.html",
    "revision": "a7106ebea0ad7166f55c5ae66e5e6315"
  },
  {
    "url": "design-principle/index.html",
    "revision": "b013454a6783ca2bfb37e56d913af43d"
  },
  {
    "url": "development/domain.html",
    "revision": "64681d9ba49f25bd42370dd0fdab8412"
  },
  {
    "url": "development/format.html",
    "revision": "41539b4b2b2c523cd73bf91c210be1e3"
  },
  {
    "url": "development/index.html",
    "revision": "18e376a178df83095dbdeb8b84d720f0"
  },
  {
    "url": "i18n/index.html",
    "revision": "04039a2335fd9847d9962fa5eca51557"
  },
  {
    "url": "index.html",
    "revision": "d9a8dd54ec89e0f30f1bce8f6ccdc9bf"
  },
  {
    "url": "planning/index.html",
    "revision": "4e518cb8519cf602768a1df9e2788c3e"
  },
  {
    "url": "th/changelog/index.html",
    "revision": "f7bef96222c580253f81c6b68ebee1a7"
  },
  {
    "url": "th/index.html",
    "revision": "adbd931b28356c9b91de63735ac29b8c"
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
