/* Offline + fast repeat loads. Bump V when you want everyone to refresh the cache. */
const V='v20',SHELL=['./','index.html','css/tokens.css?v=4','css/style.css?v=6','css/responsive.css?v=2','css/anniversary-extras.css?v=3','css/memory-archive.css?v=8','js/app.js?v=19','data/journey.js?v=5','data/moments.js?v=7','data/surprise.js?v=5','data/songs.js?v=4','data/media.js?v=4','data/photo-assets.js?v=4','data/photo-aliases.js?v=1','data/journey-photos.js?v=3','manifest.webmanifest','assets/icon-192.png','assets/og.jpg','photos/journey/2017_2.webp','photos/journey/2018_1.webp'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>Promise.all(SHELL.map(u=>c.add(u).catch(()=>0)))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
const put=(r,res)=>{if(res&&res.ok){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp))}return res};
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
 if(/\.(mp4|mp3|m4a|ogg|wav|aac|opus)$/i.test(u.pathname)||r.headers.has('range'))return; /* media streams straight from the network */
 if(u.origin===location.origin){
  if(/\/(photos|assets)\//.test(u.pathname)){e.respondWith(caches.match(r).then(h=>h||fetch(r).then(x=>put(r,x))));return}
  e.respondWith(fetch(r).then(x=>put(r,x)).catch(()=>caches.match(r).then(h=>h||caches.match('index.html'))));return}
 if(/fonts\.(googleapis|gstatic)\.com/.test(u.host))e.respondWith(caches.match(r).then(h=>h||fetch(r).then(x=>{const cp=x.clone();caches.open(V).then(c=>c.put(r,cp));return x})));
});
