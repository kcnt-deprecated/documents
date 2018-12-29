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
    "revision": "368c1e57931810db1bbcbf1db1c96417"
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
    "url": "assets/js/0.79e4eb74.js",
    "revision": "21f79c7654910a7b36175a79c5c51764"
  },
  {
    "url": "assets/js/1.9b68f852.js",
    "revision": "2aaa199af0051368bef71ad2a5f10492"
  },
  {
    "url": "assets/js/10.dd00b5ed.js",
    "revision": "8d871f11fe2855e23d4744780e993108"
  },
  {
    "url": "assets/js/11.4937b94f.js",
    "revision": "371fc50f9069f9723850884cd7714155"
  },
  {
    "url": "assets/js/12.5a2dc2bc.js",
    "revision": "e6dedc7611b195fe836f7c5c145db207"
  },
  {
    "url": "assets/js/13.09c63355.js",
    "revision": "45ed3d7f8b78f09bde4820e781e866de"
  },
  {
    "url": "assets/js/14.a7976cea.js",
    "revision": "6cc62007edcd0c48965ef43f5fe5dc10"
  },
  {
    "url": "assets/js/15.dc55ff45.js",
    "revision": "e978c1175d8504d6a8573a7e1b653646"
  },
  {
    "url": "assets/js/16.dbdd3cea.js",
    "revision": "8efe0c0853de8a377dd6b1874d31a63f"
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
    "url": "assets/js/5.bd946bc9.js",
    "revision": "c7370beaa2b40395e0ac262947f01a67"
  },
  {
    "url": "assets/js/6.d20cfec5.js",
    "revision": "5ff4392b81456c5ea67d05124fea486b"
  },
  {
    "url": "assets/js/7.e5dabc62.js",
    "revision": "a462ea2fdacaef5997bf768b6b9232e2"
  },
  {
    "url": "assets/js/8.cc0efbc1.js",
    "revision": "55d6d1d64d6c860033d62b62f45be99a"
  },
  {
    "url": "assets/js/9.0739a1cf.js",
    "revision": "b4e9d3da070fbd05a16eef4ac2996aae"
  },
  {
    "url": "assets/js/app.5e0b3a76.js",
    "revision": "43a7fa013a3f278edc27576a2a55425b"
  },
  {
    "url": "assets/js/vendors~docsearch.09e0e55a.js",
    "revision": "28f516b6ad39c47e0dd8c3f12163e3c4"
  },
  {
    "url": "changelog-api/index.html",
    "revision": "3e4233b003be41d7aec5eaad861d2a49"
  },
  {
    "url": "changelog-doc/index.html",
    "revision": "107a01f9e37ff2641bd523446735495e"
  },
  {
    "url": "changelog/index.html",
    "revision": "eb29d1d75e464f4d72770fd993241b95"
  },
  {
    "url": "design-principle/index.html",
    "revision": "6e425f90a66563cb25949016d430cfe3"
  },
  {
    "url": "development/domain.html",
    "revision": "00dbfff2a4aa307c42559764fe9db620"
  },
  {
    "url": "development/format.html",
    "revision": "bdbc5a05ac4694af9de51b202977cbc4"
  },
  {
    "url": "development/index.html",
    "revision": "a133989c0b60ef4388ec66e580f84f93"
  },
  {
    "url": "i18n/index.html",
    "revision": "6454fa1fb044db9867d0d9bc5d8e69c4"
  },
  {
    "url": "index.html",
    "revision": "af40e659300459fa6acfc133df5fc88d"
  },
  {
    "url": "planning/index.html",
    "revision": "f345fbb5e2a437fa23d3836db32c7a81"
  },
  {
    "url": "th/changelog-api/index.html",
    "revision": "1a9c303421503991f4f00ad6d0d3b9c3"
  },
  {
    "url": "th/changelog-doc/index.html",
    "revision": "c257ebecfa8c5984cb451e2fb37193be"
  },
  {
    "url": "th/changelog/index.html",
    "revision": "e93b0aed31d83fd234dd45794f4c6a98"
  },
  {
    "url": "th/index.html",
    "revision": "e6136bcfc4c5363962180d9b79278f15"
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
