"use strict";var precacheConfig=[["/snapshot-react/index.html","19aa95e0e434ea7ef0ec8ac72929b938"],["/snapshot-react/static/css/main.58b879fc.css","0ad107e33d36b1231789d57840a7bc05"],["/snapshot-react/static/js/main.ea6f33df.js","5df67e65df3dfec114eec7fd561a0c62"],["/snapshot-react/static/media/about-woman-img.4a9bdfc1.jpg","4a9bdfc127f678584d76bded97ef8dd3"],["/snapshot-react/static/media/adler-3366239_640-min.82d51e13.jpg","82d51e133dfd16d841996f6509e2954f"],["/snapshot-react/static/media/african-lion-2888519_640-min.5e9c2a4e.jpg","5e9c2a4eb910c9022070fc44075bf31c"],["/snapshot-react/static/media/cherries-2402449_640-min.d4638bca.jpg","d4638bca92ac61099e29f84baab3d5ba"],["/snapshot-react/static/media/husky-3380548_640-min.ad25ab41.jpg","ad25ab4105417cd5b011e2046188d659"],["/snapshot-react/static/media/imani-clovis-89441-unsplash-min.8b1a24e2.jpg","8b1a24e29ddcfb756cf656e8228ffc7b"],["/snapshot-react/static/media/kingfisher-2046453_640-min.9f3d1fd9.jpg","9f3d1fd9b6fc03bc6a1b41f5392b5792"],["/snapshot-react/static/media/red-fox-2230731_640-min.e602a41b.jpg","e602a41b4d21689427aaa5f028275709"],["/snapshot-react/static/media/sergey-zolkin-1045-unsplash-min.b65719e4.jpg","b65719e4bec7b6950fc16068e2be2898"],["/snapshot-react/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/snapshot-react/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/snapshot-react/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/snapshot-react/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["/snapshot-react/static/media/swan-3376622_640-min.8e076dd9.jpg","8e076dd9a46006165ad4d16e569adce7"],["/snapshot-react/static/media/tiger-3424791_640-min.fde44415.jpg","fde444159a99adeae7834e8b8a914a57"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),s=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var s="/snapshot-react/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});