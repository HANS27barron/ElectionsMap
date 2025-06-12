'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d798fb51e17cab51292bd08e3e15768f",
".git/config": "fc67780815cb08a6c757210b0cbedc5a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7e401e12677706b1edd1eeb248a7859d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "969b168859b78ee322fe1f31f765bb21",
".git/logs/refs/heads/main": "220e8b7ef2fd3c199f0cb9d7d7d3cd35",
".git/logs/refs/remotes/origin/gh-pages": "18f58cc645954d78df2cc0c565fdfde8",
".git/logs/refs/remotes/origin/main": "049f4cd3df85a0901ff9b734d727186a",
".git/objects/04/ad893387ebe83c489042777fc4cd7295025e0f": "c89e7ba78f15043b708cdf14fcd6376e",
".git/objects/0d/8234c68cda2660dfdb4399979f4a4a2ef22085": "0803dcc75fd1898fad835a5cfe5095c1",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/7a05eeb482b66676ce30c63dcb44a6acdbba88": "b3295e880534fb6aa779a78835838089",
".git/objects/1a/ea3a3a4e0cd966bb2d4e91746c7c6fd62dc645": "ff8b0f610bd15c9a378dd6c2d8313537",
".git/objects/1d/b0ad7845b64d642843edda8b45d2dd4053826a": "158db77fae09ce1673f1780dca5cbaf3",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/4f47839040b06dee22fd7c2ea85366e6bdf639": "f9a43577a786a937b19afa3293833912",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4f/4723612915bb9632ead69fe3c3d20e928927ca": "51a971fd4fd6ae3cedfebd71f0fba038",
".git/objects/4f/53cfdf8869e0bdbcab346543e1d4bb83947dcf": "1be36eb7bc07dc489fe126634f0ad4d4",
".git/objects/54/84d8bb95022c263d72f244e4e65374ed7c2e23": "14479d16a6b4239c044ca9f22c4c7aa4",
".git/objects/54/ef1160de76c5ead5a184b9eb73da91bb29bc7b": "6fb2920c601aff90bdac161dec7ce883",
".git/objects/56/34ee374d6cd7d7d146dd944388bd8fc4ab002c": "30558365b4bcc4c53b64daa7f11a11fd",
".git/objects/56/e4423dbec3f4419f55d3a1fd645bbeca585cc8": "37ded95dd0ae2f40ef7a38edba9d8f6a",
".git/objects/58/191fb2da401e888ab618dbd73b728362cff46a": "21d5eadaaf82f25e8e14185d97cef058",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/9786d1827dfd90f96aa113d65a28a2d6e87bd3": "0e68c90f76ac507c318985eeb872f27d",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/67/8429230918545e0ce6c1290a046aaca78eab93": "3ca2a4e139283f35980744e944939382",
".git/objects/67/ba017d18f6f6b95e99130a013359b67abaff36": "f3b0994727c2f9ee05fba0ab4660379c",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/75/c453540d5fa50c6fc3c43bdea31cc2bc44fa49": "c65ce176f26e758597f5d27f67ebe76d",
".git/objects/7f/c06e5aba45b37dce41fceb74e72af6dfe41fc3": "af5ba3a357f6047e164d8abb8a649e80",
".git/objects/81/f258394134475334c0b894743ef35899614deb": "8e36a376932b09d29dbddec2db9208cb",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/ab2323b57328599cf8fdc5b683515a046b5822": "f255df1e152378692246d061dbd57529",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/8f85e219527f3198c1213ae7861a37f8d2a41b": "a9e5e2ce7c4239b31a09ae2d7e207622",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/c0d2a78e3a6a14283110fdc49ee7fc6099ac76": "0796c0c69d7726652754e24a9236eb39",
".git/objects/8f/50cf83c4c6cac0cc6ffb9f81ff573165c81d22": "2caa771f30760cb5cffc80cfd460c937",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/aa/024da4a416ae08ee560a8069856ae18cabd160": "433e0ef41f7694e4967aaebef185a6ea",
".git/objects/ac/d9405277b894e8b68bc222760159141ade008e": "8bd59dd31c3170fa3bb103fc8da6f5ac",
".git/objects/b1/c2bf2d435ba63735d7b45d856402dd08cbf7fc": "5d1b304ddaa2a76faf5e808d34f7e32e",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b6/8175b74803bd93a010304749933a759db3892b": "7d7e570fbb0a55ca176306cc44cc2744",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a86f04490ae05dd8fd41335ea0ae13cc95bb49": "a77495bf1863dd9a20aa1f5b10070376",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c4/fb6c4a5b76b0f8ca52ba85cbbfebf7df80ac77": "34a944540ac120bb74b56133114257f5",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d0/f7c706afe2424489abddd578c7a10126db8746": "e333b05ae49697e0537eac659c9f8518",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/013f6fa673fde8f3e61901fd64d5566bec7329": "2bf4eda5099221767c4d745a931ba9bc",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/ea/19dbc87c062ab3cb67e59b3108465b7803a24c": "ba1f3c360222dc04b30411cbfcde1951",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/7349eee840d1e6ae7b29b5c7051ad3913948e3": "5d97a10cdd317f60c751ac12a0a36798",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/dfd13df632c2dedc433d134508d39162b2f2d8": "33b2d30b87c42597377ebd5ea052f58f",
".git/objects/f2/efed047b4ec5d456d954eb8ceb7cd93f0cc85c": "9aff2b66ead9d608ba2ee73fdc4e38d0",
".git/objects/f6/1775ce1416bf37f7e75714318a20cc7a712c0f": "b281b39b81e1965e9894349aef490602",
".git/objects/f6/22112860345b6a9905411454428092f8d0db6d": "7cb8f1d0269494bb8e0d17353753de27",
".git/objects/f7/5b3418b25bec3bdce8370c2175f775a426e994": "45602c15741ddacd3431682b49ed91c9",
".git/objects/f9/9828385d60755488c6286c662463a8c4282706": "6fe071caafee1de96bb749e4439d9bd8",
".git/objects/fc/4f7aa4bad660e3469e322b63e36d81785728b1": "b32c9c795a893fa0f29e02bac6aabd52",
".git/objects/fc/eef365e464cf58029f959fef44073a61c824a3": "a03191ff429a770f90ba730c4e9e2dcb",
".git/refs/heads/main": "87a7444ecc0886f6dfdced8c673aa66c",
".git/refs/remotes/origin/gh-pages": "87a7444ecc0886f6dfdced8c673aa66c",
".git/refs/remotes/origin/main": "87a7444ecc0886f6dfdced8c673aa66c",
"assets/AssetManifest.bin": "6ff2eabeacaf3403f973136b89c2665f",
"assets/AssetManifest.bin.json": "b1490e0c55cab952008a6b182abbf17a",
"assets/AssetManifest.json": "18252829302e4be9a2ea1d674b255d7f",
"assets/assets/amlo0.jpg": "28f8b12a54f17afa98048de0430f0423",
"assets/assets/amlo1.jpg": "f49193ed58b33803870a4024e73e8b59",
"assets/assets/anaya.jpg": "fb59e301dbbc8d46ac7c6db6c8fa878f",
"assets/assets/calderon.jpg": "858f491f863e3f93bf904861b6650a60",
"assets/assets/cardenas.jpg": "a224edc4e993c3be8af70bd3056e0de7",
"assets/assets/cevallos.jpg": "084ce26fd9b4a4e01ec009b20806802e",
"assets/assets/elecciones1994.xlsx": "21fba8ab55ae6db319a9bd652a121e6e",
"assets/assets/elecciones2000.xlsx": "a22ca9b83677fda870ffb169ffce0b1a",
"assets/assets/elecciones2006.xlsx": "767d7a314aa6e45540dabc7323f65f90",
"assets/assets/elecciones2012.xlsx": "aa8f09ef67ff15e8c73402ac1120e1fa",
"assets/assets/elecciones2018.xlsx": "bc4eab6f5a9f98e425f93851506c6c96",
"assets/assets/fox.jpg": "808c021912e962535c47bf6503d8ab54",
"assets/assets/labastida.png": "f8b5d3e7acbd62c6f3963756c781f5d5",
"assets/assets/madrazi.jpg": "a4d4dc315fe11495341761c2c2f27b11",
"assets/assets/meade.jpg": "7fc7dca25fd7917d78aca56a18b964e8",
"assets/assets/MORENA.png": "599bec78ed2289e4ef48e32db35f1e52",
"assets/assets/PAN.png": "3988e9aa7e386bf2406689764adc3c55",
"assets/assets/pe%25C3%25B1a.jpg": "ec589f97260892be6357f223d44c08d9",
"assets/assets/PRD.png": "2fa3c7d50d5df7805b74eff175d16837",
"assets/assets/PRI.png": "5f6af2a0dbba02ea1db7fef107afa1fa",
"assets/assets/vazquez.jpg": "2efd928755c923d5d06e8a28f9351eb7",
"assets/assets/zedillo.jpg": "4ac99f6bdc6ef435814df8f04d809e9e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7f5cd31c0b62f6a2ce8f3c4864ee580b",
"assets/NOTICES": "002d2f144d702da433ce12b2bc321dda",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "670c95eb697c295bca8a897e6d03a92b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b275eefe54ea86afa8fab4b784d6fff5",
"/": "b275eefe54ea86afa8fab4b784d6fff5",
"main.dart.js": "f4073de061158cc56939e05726e1d472",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
