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
    "revision": "53a4bbce1276edf90ab30b368ec1bf4b"
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
    "url": "assets/js/0.478c2457.js",
    "revision": "87429afc03c20651d1b5699c8a99f423"
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
    "url": "assets/js/app.0813c3fd.js",
    "revision": "6d667f4fb904fa96c0caf3d599a83f95"
  },
  {
    "url": "assets/js/vendors~docsearch.e8000bab.js",
    "revision": "2305e0b8910e15e7fce136fc3ce14da5"
  },
  {
    "url": "CHANGELOG.html",
    "revision": "0bc96223289132c6684f17741c173097"
  },
  {
    "url": "changelog/index.html",
    "revision": "377e19ea9f5f2bf149bd92558c3fc2e0"
  },
  {
    "url": "design-principle/index.html",
    "revision": "26154da1d66b8a9e606dad812fec2a23"
  },
  {
    "url": "development/domain.html",
    "revision": "f0f20387ed31dd6986a7a09f93369b56"
  },
  {
    "url": "development/format.html",
    "revision": "9498146e6cbd8f727cdb4bcacb616584"
  },
  {
    "url": "development/index.html",
    "revision": "27f4fc3e37622f46efb2a414b98f193b"
  },
  {
    "url": "i18n/index.html",
    "revision": "ee380a0f18749f12d4cd35622e59cf1e"
  },
  {
    "url": "index.html",
    "revision": "d3fdd0011519ef7ba9cb1027782a9eab"
  },
  {
    "url": "planning/index.html",
    "revision": "68e904e76afa9543976039b7f47123ac"
  },
  {
    "url": "th/changelog/index.html",
    "revision": "0f01fe0288c05f6209c335e665936017"
  },
  {
    "url": "th/index.html",
    "revision": "f3ae1d14672d0539ecb6f06df3393a6b"
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
