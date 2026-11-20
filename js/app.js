
/* ================= EDIT HERE ================= */
const PASS="071221";
const NAMES={her:"Sandhiya"};
/* photo: image (empty = placeholder) · song: audio clip (empty = no change) · cap: big line · tag: small memory */
const FRIENDS=[
 {y:"2016",photo:"",song:"",cap:"The day we met",tag:"Where we met, what you wore, first thing we talked about."},
 {y:"2017",photo:"",song:"",cap:"Late night talks",tag:"The first time we talked for hours."},
 {y:"2018",photo:"",song:"",cap:"Our first movie",tag:"That popcorn you ate all by yourself 😂"},
 {y:"2019",photo:"",song:"",cap:"My safe place",tag:"A time you were there when I needed someone."},
 {y:"2020",photo:"",song:"",cap:"Something felt different",tag:"Even in lockdown, you were the first one I called."}];
const TWIST={song:"",story:"Again nee dha enakku call panni, “Meet pannanum, pesalam vaa” nu koopta. Apo dha nee enakku propose panna… ❤️"};
const LOVE=[
 {y:"2021",photo:"",song:"",cap:"Dec 7. The beginning",tag:"Our first day as a couple."},
 {y:"2022",photo:"",song:"",cap:"Our first year",tag:"A place we went, a moment we laughed the most."},
 {y:"2023",photo:"",song:"",cap:"Our little fights",tag:"The silly fight we still laugh about."},
 {y:"2024",photo:"",song:"",cap:"Growing together",tag:"A goal or a tough time we crossed together."},
 {y:"2025",photo:"",song:"",cap:"Every day with you",tag:"A small everyday thing I love about you."},
 {y:"2026",photo:"",song:"",cap:"10 years of us",tag:"And this is still only the beginning."}];
const GIFTS={title:"Tiny gifts, huge memories",items:[
 {icon:"⌚",name:"The watch",say:"Idhu enakku vera level gift. Innum safe ah vechirukken 🥹"},
 {icon:"😷",name:"The lockdown mask",say:"Yaar da mask ah gift ah tharuvaanga? 😂 Nee thaan. Adhaan romba special."},
 {icon:"📿",name:"The kappu",say:"Birthday gift. Chinna thing, periya feeling ❤️"}]};
const CHAT={song:"",title:"1096 days, summarised 😂",lines:[["me","Naan: 3 hours ah pesinen…"],["her","Nee: hmm"],["me","Naan: Naan sonnadhu kettiya?"],["her","Nee: ha? edhu?"],["me","Naan: 😭😭😭"],["her","Nee: sorry sorry, ippo sollu 🥺"],["me","Naan: Unna marakka mudiyadhu ❤️"]]};
const SORRY={song:"",title:"Sorry, baby",lines:["Ennoda kovam, ennoda silence, ennoda late replies… sorry baby.","Daddy birthday kku apram nadandha andha sandai, andha big clash… ellathukkum.","Aana namba rendu perukum oru vishayam theriyum:","clash ku apram “solve aagitom” nu solla theriyum. Adhu thaan namba. 💗"],hold:"Hold the heart if you forgive me 🥺"};
const LETTERS=[{"y": "2016", "t": "Oru photo ku okay sonnadhukku. 📸"}, {"y": "2017", "t": "Exam time la kooda Tower Park vandhadhukku."}, {"y": "2018", "t": "8 months apram call pannadhukku."}, {"y": "2019", "t": "Naan unna wife nu ninaichu life run pannitu irundhappo, kooda irundhadhukku."}, {"y": "2020", "t": "White dress pottu vandhadhukku. Lockdown kku apram thirumba meet pannadhukku."}, {"y": "2021", "t": "Oru call ku. “Meet pannanum, pesalam vaa.”"}, {"y": "2022", "t": "Bike la office drop ku, coffee shop ku, ellaa idathukkum."}, {"y": "2023", "t": "“Namba marriage panna feel” nu enakku thondra vachadhukku."}, {"y": "2024", "t": "Sandai aanalum thirumba pesinadhukku."}, {"y": "2025", "t": "Job maarinaalum, clash aanaalum, solve aagitom nu solli, kai pidichadhukku."}, {"y": "2026", "t": "Ippo vara kooda, simple walking moments ku."}];
const STATS=[[Math.max(0,Math.floor((Date.now()-new Date('2021-12-07T00:00:00'))/864e5)),"days of love"],[10,"years together"],[5,"years as friends"],[5,"years in love"]];
const FINALE={song:"",title:"Happy Anniversary, Sandhiya",text:"Ten years of us. Thank you for every day. One more thing, you never said it face to face…",voice:""};
const VOICE_MESSAGE_SRC="audio/voice-message.mp3";
const INTRO_TEXT="10 YEARS\n2 BREAKUPS\n1 FOREVER";
/* ============ END EDIT AREA ============ */

const RING=`<section id="ring"><p class="small">ACT SEVEN · THE NEXT CHAPTER</p><h2>Ten years down. Still choosing you.</h2><p class="sm">Our story did not end at ten. This is only the next page.</p>
<div class="rb" id="rb"><div class="lid"></div><div class="base"></div><div class="rg">💍</div></div>
<div class="script">One question, Sandhiya…</div><h3>Will you keep choosing us?</h3><p class="sm">Life full ah enakku nee venum 💍</p>
<div class="yn"><button id="yes">Yes. Always. 💗</button><button id="no">No</button></div>
<div id="engS" class="scn"></div><div class="script" id="pmsg"></div><button id="tow" style="display:none">Ippo… Mandapam ku povoma? 🛕</button></section>
<section id="wed" style="display:none"><div class="ctitle">Kalyana Mandapam 🛕</div><p class="csub">Maalai maathal · Nalla jodi 💐</p><div id="malS" class="scn"></div><div class="fb" id="mmsg"></div><button id="nxt" style="display:none">Thaali kattalaam 🪢</button>
<div id="thl" style="display:none"><p class="csub">Thaali · 3 mudichu 🪢</p><div id="thaS" class="scn"></div><div class="fb" id="kmsg"></div><button id="knb" style="display:none">Mudichu podu 🪢</button></div>
<div class="endc" id="endcard" style="display:none">
  <div class="season-orbit" aria-hidden="true">♾️</div>
  <small class="season-kicker">THE STORY SO FAR · SEASON ONE</small>
  <h3 class="script">Happy Anniversary,<br>Sandhiya</h3>
  <p class="season-intro">2016 — 2026<br>Ten years of memories. Not a perfect story — a real one. And it is still ours. ❤️</p>
  <div class="season-divider"><span>✦</span></div>
  <div class="seas season-panels">
    <div class="season-panel season-one"><b>SEASON 01</b><strong>2016 — 2026</strong><span>Every memory brought us here.</span></div>
    <div class="season-panel season-two"><b>SEASON 02</b><strong>COMING FOREVER</strong><span>New memories. Same two hearts. ♾️</span></div>
  </div>
  <p class="season-next-line">THE NEXT CHAPTER STARTS WITH US.</p>
  <div class="voice-note" id="voice-note">
    <div class="voice-note-icon" aria-hidden="true">🎙️</div>
    <div class="voice-note-copy">
      <small>A MESSAGE FROM MY HEART</small>
      <h4>One last message, my baby…</h4>
      <p id="voice-status">Your personal voice recording will be added here.</p>
    </div>
    <audio id="personal-voice" preload="none"></audio>
    <button id="voice-play" class="voice-play" type="button" disabled><span>▶</span><b>Voice message coming soon</b></button>
    <div class="voice-progress" aria-hidden="true"><span id="voice-progress-fill"></span></div>
    <div class="voice-meta"><span>JUST FOR YOU, SANDHIYA</span><span id="voice-time">--:--</span></div>
  </div>
  <button id="inst" hidden>📲 Install as app</button>
  <button id="rep" class="season-replay">Replay our story ↺</button>
</div></section>`;

/* ===== JOURNEY: data comes from data/journey.js, moments.js, surprise.js (generated) ===== */
const PHROOT='';const PH={};
const PHOTO_ASSETS=new Set(Array.isArray(window.PHOTO_ASSETS)?window.PHOTO_ASSETS:[]);
const PHOTO_MANIFEST_READY=Array.isArray(window.PHOTO_ASSETS);
const PHOTO_ALIASES=(window.PHOTO_ALIASES&&typeof window.PHOTO_ALIASES==='object')?window.PHOTO_ALIASES:{};
const journeyStem=path=>String(path||'').split('/').pop().replace(/\.[^.]+$/,'').toLowerCase();
const journeyAssetsByStem=new Map();
PHOTO_ASSETS.forEach(path=>{
 if(!String(path).toLowerCase().startsWith('photos/journey/'))return;
 const stem=journeyStem(path);if(!journeyAssetsByStem.has(stem))journeyAssetsByStem.set(stem,[]);
 journeyAssetsByStem.get(stem).push(path);
});
const journeyAliasesByStem=new Map();
Object.entries(PHOTO_ALIASES).forEach(([alias,canonical])=>{
 if(!String(alias).toLowerCase().startsWith('photos/journey/'))return;
 const stem=journeyStem(alias);if(!journeyAliasesByStem.has(stem))journeyAliasesByStem.set(stem,canonical);
});
const journeyExtensionRank=path=>({'.webp':0,'.jpg':1,'.jpeg':2,'.png':3,'.avif':4}[String(path).slice(String(path).lastIndexOf('.')).toLowerCase()]??9);
const resolveJourneyPhoto=path=>{
 const alias=PHOTO_ALIASES[path]||journeyAliasesByStem.get(journeyStem(path));
 if(alias&&PHOTO_ASSETS.has(alias))return alias;
 if(!PHOTO_MANIFEST_READY||PHOTO_ASSETS.has(path))return path;
 const matches=journeyAssetsByStem.get(journeyStem(path))||[];
 return matches.length?matches.slice().sort((a,b)=>journeyExtensionRank(a)-journeyExtensionRank(b)||a.localeCompare(b))[0]:path;
};
const photoURL=f=>String(f||'').split('/').map(segment=>encodeURIComponent(segment)).join('/');
const photoSrc=f=>PHOTO_MANIFEST_READY?(PHOTO_ASSETS.has(f)?photoURL(f):''):photoURL(f);
const photoFullSrc=f=>photoSrc(f);
const photoAvailable=f=>!!photoSrc(f);
const JOURNEY_PHOTO_META=new Map((window.JOURNEY_PHOTOS||[]).map(item=>[item.f,item]));
const seenJourneyPhotos=new Set();
const JY=(window.JOURNEY||[]).map(j=>Object.assign({},j,{p:j.p.map(x=>{
 const path=resolveJourneyPhoto(x.f),meta=JOURNEY_PHOTO_META.get(path);
 if(!photoAvailable(path)||seenJourneyPhotos.has(path))return null;
 seenJourneyPhotos.add(path);
 PH[path]=[path,meta?.w||x.w||1,meta?.h||x.h||1];return path;
 }).filter(Boolean)}));
const seenMomentPaths=new Set();
const MORE=(window.MOMENTS||[]).filter(o=>{
 if(!o||!o.f||!photoAvailable(o.f))return false;
 const key=String(o.f).toLowerCase();if(seenMomentPaths.has(key))return false;
 seenMomentPaths.add(key);return true;
}).map(o=>[o.y,o.m,o.k,o.f,o.w,o.h,o.c]);
const MOOD={happy:["😊","Happy"],funny:["😂","Funny"],unforget:["💔","Unforgettable"]},MU=m=>m[3],PU=id=>id;
const moreOf=y=>MORE.filter(m=>m[0]===y);
const jpw=r=>r>1.2?'min(86vw,22rem)':r>.7?'min(74vw,18rem)':'min(56vw,13.5rem)';
// Use the original image in its existing subfolder; no derivative image paths are used.
// Encode filename segments only when building the request URL; manifests keep raw paths.
const photoPlaceholder=x=>{const m=String(x||'').match(/\balt=(["'])(.*?)\1/);const label=(m&&m[2])||'Memory photo';const safe=label.replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));return `<div class="photo-missing-inline" role="img" aria-label="${safe}"><span aria-hidden="true">♡</span><small>Photo not included</small></div>`};
const IMGT=(f,x='')=>{const src=photoSrc(f);if(!src)return photoPlaceholder(x);return `<img loading="lazy" decoding="async" src="${src}" data-full="${src}" onerror="this.onerror=null;const p=document.createElement('div');p.className='photo-missing-inline';p.innerHTML='<span>♡</span><small>Photo unavailable</small>';this.replaceWith(p)" ${x}>`};
const jpol=(id,i,y)=>{const[u,w,h]=PH[id];return `<figure class="jp" style="--w:${jpw(w/h)};--r:${i?3.2:-3.6}deg;--dx:${i?'6vw':'-6vw'};--d:${i*.35}s"><span class="jtape"></span><div class="jph" style="aspect-ratio:${w}/${h}">${IMGT(PHROOT+u,`alt="${y} memory ${i+1}"`)}</div><figcaption>${y} ❤</figcaption></figure>`};
const jmore=y=>{const a=moreOf(y);if(!a.length)return'';return `<button class="jmb" data-y="${y}"><span class="jmt">${a.slice(0,3).map((m,i)=>`${IMGT(MU(m),`style="--i:${i}" alt=""`)}`).join('')}</span><span class="jml"><b>📸 ${a.length} more ${y} moments</b><small>${['happy','funny','unforget'].filter(k=>a.some(m=>m[1]===k)).map(k=>MOOD[k][0]).join(' ')} · tap to open</small></span></button>`};
const words=t=>t.split(' ').map((w,i)=>`<span style="--w:${i}">${w}</span>`).join(' ');
const chapter=(a,b,c)=>`<div class="chc" data-fx="${a}"><small>${a}</small><h2>${[...b].map((ch,i)=>`<span style="--i:${i}">${ch===' '?'&nbsp;':ch}</span>`).join('')}</h2><div class="chl"></div><p>${c}</p></div>`;
const DAYS=Math.max(0,Math.floor((Date.now()-new Date('2021-12-07T00:00:00'))/864e5));
const ORN='<div class="orn"><svg viewBox="0 0 220 24"><path class="o1" d="M0 12H92"/><path class="o2" d="M128 12H220"/><path class="oh" d="M110 20C101 13 99 8 103 5.5C106.500 3.800 109 6 110 8.500C111 6 113.500 3.800 117 5.500C121 8 119 13 110 20Z"/></svg></div>';
const jyrs=a=>a.map(m=>`<div class="jy ${m.gold?'gold':''}" data-y="${m.y}" data-scene="${m.gold?'dec7':m.y}" style="--age:${m.gold?0:Math.max(0,(2022-+m.y)*.06).toFixed(2)}"><div class="jn">${m.y}</div>${m.d?`<div class="jd">${m.d}</div>`:''}${m.gold?'<div class="days">💞 <b>0</b> days of us</div>':''}<h3 class="jt">${m.t}</h3>${m.b?`<p class="jb">${m.b}</p>`:''}<div class="jc">${m.p.map((id,i)=>jpol(id,i,m.y)).join('')}</div>${ORN}<div class="jst"><p>${words(m.s)}</p></div>${m.nomore?'':jmore(m.y)}</div>`).join('');
const FIN=`<section class="chap" id="finally"><div class="ctitle fade">Finally… ❤️</div><p class="fin fade">2016-la start aana namma journey, 2026 varaikum so many memories, happiness, fights, breaks, love and togetherness nu poitu irukku.</p><p class="fin fade" style="transition-delay:1s">Every photo has a story, every year has a memory, but one thing mattum same…</p><p class="fin fade" style="transition-delay:1.7s">December 7th, 2021 la irundhu ippo varaikkum <b>${DAYS.toLocaleString()}</b> naal, ovvoru naalum unnoda ❤️</p><div class="finbig fade" style="transition-delay:2s">MY LOVE FOR YOU! ❤️</div><div class="finbig sm fade" style="transition-delay:3s">I LOVE YOU, MY BABY MA! 😘❤️</div></section>`;
const SURP=(window.SURPRISE||[]).map(o=>['','happy',o.k,o.f,o.w,o.h,o.c]);
const SUP=`<div class="sup"><div class="ctitle">🎲 Surprise me</div><p class="csub">Oru card edu… enna varudhu nu paarkalaam 💌</p><div class="deck"><div class="cardb" id="cardb"><div class="cf front"><span>♥</span><small>tap to draw</small></div><div class="cf back"><img alt=""><p class="cap2"></p></div></div></div><button id="draw" class="surb">🎴 Draw a card</button></div>`;
const CALL=`<section id="callsec"><p class="small">DECEMBER 7, 2021</p><div class="phone" id="phone"><div class="pst"><span>9:41</span><span>5G ▂▄▆</span></div><div class="pav"><i></i><i></i><i></i><b>M</b></div><h3 id="cnm">MiNi</h3><p id="cst">mobile · incoming call…</p><div class="cbtns" id="cbtns"><button id="cdec"><span>✕</span><small>Decline</small></button><button id="cacc"><span>📞</span><small>Accept</small></button></div><div id="ccap"></div></div><p class="chint" id="chint">Nee thaan call pannina… accept pannu 📞</p></section>`;
const THEN_PHOTOS=JY.flatMap(entry=>entry.p.map(path=>({year:entry.y,path})));
const THEN=THEN_PHOTOS.length>=2?`<div class="tn"><div class="ctitle">Then &amp; Now</div><p class="csub">2016 → 2026 · slide pannunga ⇆</p><div class="tnbox" id="tnbox">${IMGT(PHROOT+THEN_PHOTOS[THEN_PHOTOS.length-1].path,'alt="Now"')}<div class="tn-b">${IMGT(PHROOT+THEN_PHOTOS[0].path,'alt="Then"')}</div><div class="tn-h"><span>⇆</span></div><b class="tn-l1">${THEN_PHOTOS[0].year}</b><b class="tn-l2">${THEN_PHOTOS[THEN_PHOTOS.length-1].year}</b></div></div>`:'';
const ARCHIVE_TEXT=value=>String(value||'').replace(/<br\s*\/?\s*>/gi,' ').replace(/<[^>]*>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/\s+/g,' ').trim();
const ARCHIVE_YEARS=Array.from({length:11},(_,i)=>String(2016+i));
// The archive is intentionally Moments-only. Main journey photos remain in the story above.
const ARCHIVE_BY_YEAR=Object.fromEntries(ARCHIVE_YEARS.map(year=>{
  const storyEntries=JY.filter(item=>String(item.y)===year);
  const photos=MORE.filter(item=>String(item[0])===year).map(item=>({
    path:item[3],w:item[4]||1,h:item[5]||1,caption:item[6]||`${year} memory`,kind:item[1]||'memory',key:item[2]
  })).filter(photo=>photo.path);
  const highlight=storyEntries.find(item=>item.gold)||storyEntries[0]||{};
  const note=ARCHIVE_TEXT((storyEntries.find(item=>item.gold&&item.b)?.b)||highlight.b||'');
  return [year,{year,title:highlight.t||'Our memories',note,photos}];
}));
const ARCHIVE_DEFAULT_YEAR=ARCHIVE_YEARS.find(year=>ARCHIVE_BY_YEAR[year].photos.length)||'2017';
const MEMORY_ARCHIVE=`<section id="memory-archive" class="memory-archive" aria-labelledby="archive-heading">
  <figure class="archive-cover"><img src="assets/og.jpg" alt="10 years, 2 breakups, 1 forever — Sandhiya and Purushoth, 2016 to 2026" width="1200" height="630" loading="lazy" decoding="async"></figure>
  <header class="archive-header">
    <p class="archive-eyebrow">OUR MEMORY ARCHIVE · 2016 — 2026</p>
    <h2 id="archive-heading">Every year. More memories. ❤️</h2>
  </header>
  <nav class="archive-timeline" id="archive-timeline" aria-label="Choose a year">
    ${ARCHIVE_YEARS.map(year=>`<button type="button" class="archive-year-btn" data-archive-year="${year}" aria-pressed="${year===ARCHIVE_DEFAULT_YEAR?'true':'false'}"><span>${year}</span><i aria-hidden="true"></i></button>`).join('')}
  </nav>
  <div class="archive-year-head">
    <div class="archive-year-copy"><span>SELECTED YEAR</span><h3 id="archive-selected-year">${ARCHIVE_DEFAULT_YEAR}</h3><p id="archive-selected-title">${ARCHIVE_BY_YEAR[ARCHIVE_DEFAULT_YEAR].title}</p></div>
    <div class="archive-year-count" id="archive-photo-status" aria-live="polite">Moments from this year</div>
  </div>
  <p class="archive-note" id="archive-note"></p>
  <div class="archive-grid" id="archive-grid" aria-label="Moments photos from the selected year"></div>
  <button type="button" class="archive-more" id="archive-more" hidden aria-expanded="false">View all memories ↓</button>
  <div class="archive-empty" id="archive-empty" hidden>
    <span aria-hidden="true">♡</span>
    <b>No Moments photos for this year yet.</b>
    <p>This archive shows photos from your photos/moments folder only. Your main Journey photos remain in the story above.</p>
  </div>
  <p class="archive-footnote">Moments photos only · Portrait, landscape and square photos stay in their original shape.</p>
</section>`;
const OUR_STORY=`<article class="our-story" id="our-story" aria-labelledby="our-story-title">
  <div class="story-orbit" aria-hidden="true">♡</div>
  <header class="story-header">
    <p class="story-eyebrow fade">OUR STORY ♾️</p>
    <h2 id="our-story-title" class="story-years fade">2016 — 2026</h2>
    <p class="story-tagline fade">Every Picture Has a Memory. Every Memory Has a Story.</p>
    <p class="story-dedication fade">To My Favourite Person, My Baby ❤️</p>
  </header>
  <div class="story-rule" aria-hidden="true"><span>✦</span></div>
  <div class="story-copy">
    <h3 class="fade">♾️ ONE LAST THING, MY BABY...</h3>
    <p class="fade">Ippo 2016-la irundhu 2026 varaikum irukura indha pictures ellathayum paatha, namma evlo distance travel pannirukom-nu puriyudhu.</p>
    <p class="fade">First meet-la start aana journey...</p>
    <p class="fade">Breakups, reunions, proposals, first dates, bike rides, cafe visits, temple celebrations, birthdays, gifts, funny fights, romantic moments...</p>
    <p class="fade">Evlo different stages!</p>
    <p class="fade">Namma relationship perfect-ah irundhuchu-nu naan solla maaten.</p>
    <p class="fade">Sandaigal irundhuchi. Misunderstandings irundhuchi. Sometimes happiness, sometimes sadness. Sila neram namma rendu perukkum kashtamaana moments kooda irundhirukku.</p>
    <p class="fade">Aana indha album-la irukura ovvoru picture-um namma life-la nadandha oru real moment.</p>
    <p class="fade">Indha pictures-la irukura smiles, expressions, places, andha days-la irundha feelings... idhellam thirumba recreate panna mudiyadhu.</p>
    <p class="story-highlight fade">But we can create new memories. ❤️</p>
    <p class="fade">Enaku un kooda innum neraya birthdays celebrate pannanum. Neraya cafe dates poganum. Again Tower Park-la walking poganum. Rain-la random-ah meet pannanum. Neraya hugging selfies edukkanum. Unna tease pannanum, un kooda sirikkanum.</p>
    <p class="fade">Namma old memories paathu sirikkura maadhiri, future-la paakka innum thousands of new memories create pannanum.</p>
    <p class="fade">Baby, indha album just photos illa.</p>
    <p class="fade">It's a collection of our days, our feelings, our happiness, our mistakes, our romance and everything that made us US.</p>
    <p class="story-because fade">Because...</p>
    <p class="story-final fade">❤️ YOU ARE MY FAVOURITE PART OF THIS STORY.</p>
    <p class="story-love fade">I LOVE YOU, MY BABY! 😘</p>
  </div>
  <footer class="story-footer fade">2016 – 2026<br><span>10 Years of Memories. One Beautiful Story. And Hopefully, Many More Chapters to Come... ♾️</span></footer>
</article>`;
const $=id=>document.getElementById(id);const M=$('main');
const ph=(p,y)=>p?`<img src="${p}" alt="${y}">`:'Your photo here';
function mem(m,i,label){return `<div class="memory" data-y="${m.y||''}" data-song="${m.song||''}"><div class="year ${label?'sm':''}">${m.y||''}</div><div class="polaroid" style="--r:${(i%2?3:-3)+(Math.random()*2-1)}deg"><div class="photo">${ph(m.photo,m.y)}</div></div><p class="cap">${m.cap}</p><p class="tag">${m.tag}</p></div>`}
M.innerHTML=`
<section id="intro"><h1><span id="typed"></span><span class="caret"></span></h1><p class="isub" id="isub">Sandhiya &amp; Purushoth</p><div class="scrollcue" id="cue">scroll down ↓</div></section>
<section class="chap" id="friends"><div class="jh">❤️ Our Beautiful Journey ❤️<small>2016 – 2026</small></div>${chapter('ACT ONE','Friends-ah Irukkalam','2016 — 2021')}${jyrs(JY.slice(0,6))}</section>
${CALL}<section id="twist" data-song="${TWIST.song}"><div class="glow"></div><div class="vg"></div><i class="rip"></i><i class="rip" style="animation-delay:.45s"></i><i class="rip" style="animation-delay:.9s"></i><svg class="ecg" viewBox="0 0 600 100" preserveAspectRatio="none"><path d="M0 50H60L70 50L78 20L90 85L100 5L112 62L120 50H200L260 50L270 50L278 20L290 85L300 5L312 62L320 50H400L460 50L470 50L478 20L490 85L500 5L512 62L520 50H600"/></svg><div class="bpm">♥ <b id="bpm">72</b> bpm</div><p class="small">And then…</p><h2>everything changed</h2><div class="date">Dec 7, 2021</div><p class="story">${TWIST.story}</p></section>
<section class="chap" id="love">${chapter('ACT THREE','Couple-ah','2022 — 2026')}${jyrs(JY.slice(6,-1))}${jyrs(JY.slice(-1))}${THEN}${MEMORY_ARCHIVE}${OUR_STORY}${SUP}</section>${FIN}
<section class="chap" id="gifts"><div class="ctitle fade">${GIFTS.title}</div><p class="csub fade">Tap each gift to unwrap 🎁</p><div class="boxes">${GIFTS.items.map(g=>`<div class="gift fade"><button class="box" aria-label="Unwrap ${g.name}">🎁</button><div class="gi">${g.icon}</div><p class="gs"><b>${g.name}</b><br>${g.say}</p></div>`).join('')}</div></section>
<section id="chat" data-song="${CHAT.song}"><div class="ctitle fade">${CHAT.title}</div><div class="chat" id="chatbox"></div></section>
<section id="sorry" data-song="${SORRY.song}"><div class="fade"><h2>${SORRY.title}</h2>${SORRY.lines.map((l,i)=>`<p style="transition-delay:${i*1.4}s">${l}</p>`).join('')}<p style="transition-delay:6.2s">${SORRY.hold}</p><button id="hold" aria-label="Hold to forgive"><span class="hg">♥</span><span class="hf">♥</span></button><div id="hmsg"></div></div></section>
<section id="letters"><div class="ctitle">10 Varusham, 10 Nandri</div><div class="csub">Oru chinna letter 💌</div><div class="paper"><div class="pdear fade">Dear Sandhiya (MiNi),</div>${LETTERS.map((l,i)=>`<div class="ly fade" style="transition-delay:${(i%3)*.15}s"><b>${l.y}</b><span>${l.t}</span></div>`).join('')}<div class="psig fade">Ennaikum, forever.<br>— Purushoth ❤️</div><div class="seal fade">P♥S</div></div></section>
<section id="stats"><div class="ctitle fade">Our numbers</div><div class="stats">${STATS.map(s=>`<div class="fade"><b data-n="${s[0]}">0</b><small>${s[1]}</small></div>`).join('')}</div></section>
<section id="finale" data-song="${FINALE.song}"><div class="fade"><h2>${FINALE.title}</h2><p>${FINALE.text}</p><div id="reply"></div><button id="say">Say it: I love you 💍</button>${FINALE.voice?'<button id="voice">Play my message 🎙️</button>':''}</div></section>${RING}`;


/* ===== MOMENTS-ONLY MEMORY ARCHIVE · compact timeline + progressive mobile gallery ===== */
(()=>{
 const root=$('memory-archive');
 if(!root)return;
 const timeline=$('archive-timeline'),grid=$('archive-grid'),empty=$('archive-empty');
 const selectedYear=$('archive-selected-year'),selectedTitle=$('archive-selected-title');
 const note=$('archive-note'),status=$('archive-photo-status'),moreButton=$('archive-more');
 if(!timeline||!grid||!empty||!selectedYear||!selectedTitle||!note||!status||!moreButton)return;
 let activeYear=ARCHIVE_DEFAULT_YEAR,renderToken=0,expandedYear='';
 const safe=value=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
 const compactQuery=window.matchMedia('(max-width:600px)');
 const setActiveButton=year=>{
  timeline.querySelectorAll('[data-archive-year]').forEach(button=>{
   button.setAttribute('aria-pressed',button.dataset.archiveYear===year?'true':'false');
  });
 };
 const render=year=>{
  const data=ARCHIVE_BY_YEAR[year];
  if(!data)return;
  if(year!==activeYear)expandedYear='';
  activeYear=year;
  const token=++renderToken;
  setActiveButton(year);
  selectedYear.textContent=year;
  selectedTitle.textContent=data.title;
  note.textContent=data.note||'';
  note.hidden=!data.note;
  empty.hidden=true;
  const isCompact=compactQuery.matches;
  const isExpanded=expandedYear===year;
  const visibleLimit=isCompact?4:data.photos.length;
  const visiblePhotos=(isCompact&&!isExpanded)?data.photos.slice(0,visibleLimit):data.photos;
  moreButton.hidden=!isCompact||data.photos.length<=visibleLimit;
  moreButton.setAttribute('aria-expanded',String(isExpanded));
  moreButton.textContent=isExpanded?'Show fewer memories ↑':`View all ${data.photos.length} memories ↓`;
  status.textContent=data.photos.length?`${data.photos.length} moments${isCompact&&!isExpanded&&data.photos.length>visibleLimit?` · ${visiblePhotos.length} shown`:''}`:'No Moments photos yet';
  grid.classList.add('archive-changing');
  if(!data.photos.length){
   grid.replaceChildren();grid.classList.remove('archive-changing');empty.hidden=false;return;
  }
  const cards=visiblePhotos.map((photo,index)=>{
   const ratio=(photo.w||1)/(photo.h||1);
   const orientation=ratio>1.16?'is-landscape':ratio<.84?'is-portrait':'is-square';
   const caption=safe(photo.caption||`${year} memory`);
   const path=safe(photoFullSrc(photo.path));
   const src=photoSrc(photo.path);
   const available=!!src;
   const image=available
    ? `<img data-full="${path}" alt="${year} moment: ${caption}" loading="${index<2?'eager':'lazy'}" decoding="async">`
    : `<div class="archive-missing"><span aria-hidden="true">♡</span><b>Original photo not included</b></div>`;
   return `<figure class="archive-card ${orientation} ${available?'':'is-missing'}" data-archive-photo="${path}" ${available?'tabindex="0" role="button"':'aria-disabled="true"'} aria-label="${available?'View':'Photo unavailable:'} ${year} moment: ${caption}" style="--archive-delay:${Math.min(index,5)*.025}s">
     <div class="archive-image-wrap">${image}</div>
     <figcaption>${caption}</figcaption>
   </figure>`;
  }).join('');
  grid.innerHTML=cards;
  grid.classList.remove('archive-changing');
  const images=[...grid.querySelectorAll('img')];
  let loaded=0,failed=0,settled=0;
  const unavailable=visiblePhotos.length-images.length;
  const refreshStatus=()=>{
   if(token!==renderToken)return;
   const pending=Math.max(0,images.length-settled);
   const shown=visiblePhotos.length;
   status.textContent=`${data.photos.length} moments${isCompact&&!isExpanded&&data.photos.length>shown?` · ${shown} shown`:''}${loaded?` · ${loaded} ready`:''}${unavailable+failed?` · ${unavailable+failed} unavailable`:''}${pending?` · ${pending} loading`:''}`;
   if(images.length===0||settled===images.length&&loaded===0){
    status.textContent=`${data.photos.length} moments · photo files need restoring`;
    empty.hidden=false;
   }else if(loaded>0){empty.hidden=true;}
  };
  images.forEach(img=>{
   const card=img.closest('.archive-card');
   let finished=false;
   const finishFailed=()=>{
    if(finished||token!==renderToken)return;
    finished=true;failed++;settled++;
    if(card){
     card.classList.add('is-missing');card.removeAttribute('role');card.removeAttribute('tabindex');
     const wrap=card.querySelector('.archive-image-wrap');
     if(wrap)wrap.innerHTML='<div class="archive-missing"><span aria-hidden="true">♡</span><b>Photo file not found</b></div>';
     card.setAttribute('aria-label',`Photo file missing: ${img.alt}`);
    }
    refreshStatus();
   };
   img.addEventListener('load',()=>{
    if(finished||token!==renderToken)return;
    finished=true;loaded++;settled++;
    const ratio=img.naturalWidth/Math.max(1,img.naturalHeight);
    if(card){card.classList.remove('is-landscape','is-portrait','is-square');card.classList.add(ratio>1.16?'is-landscape':ratio<.84?'is-portrait':'is-square','is-loaded');}
    refreshStatus();
   },{once:true});
   img.addEventListener('error',()=>finishFailed(),{once:true});
   img.src=img.dataset.full;
  });
  refreshStatus();
 };
 grid.addEventListener('keydown',event=>{
  if(!['Enter',' '].includes(event.key))return;
  const card=event.target.closest('[data-archive-photo]');
  if(!card||card.classList.contains('is-missing'))return;
  event.preventDefault();
  const img=card.querySelector('img');
  if(img&&img.dataset.full)lbOpen(img.dataset.full,card.querySelector('figcaption')?.textContent||'');
 });
 timeline.addEventListener('click',event=>{
  const button=event.target.closest('[data-archive-year]');
  if(button)render(button.dataset.archiveYear);
 });
 timeline.addEventListener('keydown',event=>{
  if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
  const buttons=[...timeline.querySelectorAll('[data-archive-year]')];
  const current=Math.max(0,buttons.findIndex(button=>button.dataset.archiveYear===activeYear));
  const next=event.key==='Home'?0:event.key==='End'?buttons.length-1:Math.max(0,Math.min(buttons.length-1,current+(event.key==='ArrowRight'?1:-1)));
  event.preventDefault();buttons[next].focus();render(buttons[next].dataset.archiveYear);
 });
 moreButton.addEventListener('click',()=>{
  expandedYear=expandedYear===activeYear?'':activeYear;
  render(activeYear);
 });
 compactQuery.addEventListener?.('change',()=>{expandedYear='';render(activeYear)});
 render(activeYear);
})();

/* ===== PERSONAL VOICE NOTE: add audio/voice-message.mp3 after recording ===== */
(()=>{
 const audio=$('personal-voice'),button=$('voice-play'),status=$('voice-status'),progress=$('voice-progress-fill'),time=$('voice-time');
 if(!audio||!button)return;
 const formatTime=value=>{if(!Number.isFinite(value))return '--:--';const minutes=Math.floor(value/60),seconds=Math.floor(value%60);return `${minutes}:${String(seconds).padStart(2,'0')}`};
 let voiceReady=false,savedVolumes=null;
 const restoreMusic=()=>{if(savedVolumes){A.forEach((track,index)=>track.volume=savedVolumes[index]);savedVolumes=null}};
 const setButton=(playing)=>{button.innerHTML=playing?'<span>Ⅱ</span><b>Pause my voice message</b>':'<span>▶</span><b>Play my voice message</b>';button.setAttribute('aria-pressed',String(playing))};
 fetch(VOICE_MESSAGE_SRC,{method:'HEAD',cache:'no-store'}).then(response=>{
  if(!response.ok)throw new Error('Voice recording not found');
  audio.src=VOICE_MESSAGE_SRC;voiceReady=true;button.disabled=false;setButton(false);
  status.textContent='Recorded especially for you, my baby. ❤️';
 }).catch(()=>{
  button.disabled=true;button.innerHTML='<span>◷</span><b>Voice message coming soon</b>';
  status.textContent='After recording, add your MP3 as audio/voice-message.mp3 to activate this player.';
 });
 button.addEventListener('click',async()=>{
  if(!voiceReady)return;
  if(audio.paused){
   savedVolumes=A.map(track=>track.volume);A.forEach(track=>{if(!track.paused)track.volume=Math.min(track.volume,.12)});
   try{await audio.play();setButton(true)}catch(error){restoreMusic();status.textContent='Could not play the recording. Please check the MP3 file.'}
  }else{audio.pause();setButton(false);restoreMusic()}
 });
 audio.addEventListener('timeupdate',()=>{progress.style.width=audio.duration?`${audio.currentTime/audio.duration*100}%`:'0%';time.textContent=`${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`});
 audio.addEventListener('ended',()=>{setButton(false);progress.style.width='0%';restoreMusic()});
 audio.addEventListener('pause',()=>{if(audio.ended)return;setButton(false);restoreMusic()});
 audio.addEventListener('error',()=>{status.textContent='The voice recording could not be opened. Check audio/voice-message.mp3.';setButton(false);restoreMusic()});
})();


/* ===== GAME DATA (edit these) ===== */
const ROAST=["Ayyo! Idhu kooda theriyala? 😭","Hmm… nijamave marandhutiya? 🥺","Thappu da! Heart ah yosichu paaru 💭","Purushoth kovam varum 😤 try again"];
const QUIZ=[
 {q:"Purushoth ku romba kovam varra nerum edhu?",o:["Irritate words","Phone paakkama irukkum bodhu","Late reply","Ellam"],a:3,no:"Nee innum ennai purinjikkala 😤"},
 {q:"Sandhiya Purushoth ku gift ah kudutha first thing edhu?",o:["Watch","Mask","Kappu","Ellam"],a:1,no:"Mask ah kooda marandhutiya? 😭"},
 {q:"Dec 7, 2021 la Purushoth enna pannaan?",o:["Call pannaan","Msg panninaan","Face to face ah kettaan","Letter ezhudhinaan"],a:2,no:"Ayyo 1096 days ah pesinadhu waste 😭"},
 {q:"Purushoth ku romba pidicha food edhu?",o:["Biryani","Dosa","Parotta","Ice cream"],a:3,no:"Ithu kooda theriyala, vaa paakkalaam 😂"},
 {q:"Purushoth unna phone la enna name la save pannirukkaan?",o:["Honey","Baby","MiNi","Pappu"],a:2,no:"Ippadi kooda save panna mudiyuma 😂"}];
const DLG=[
 {q:"Purushoth: “Naan ____ sonnaa kovam padatha da.”",o:["sorry","seri","paravaala","love you"],a:0,no:"Hmm… idhu thaan avan sollra word 😂"},
 {q:"Purushoth: “Nee thaan en ______.”",o:["life","best friend","safe place","kappu 😂"],a:0,no:"Wrong da! Nee thaan en life ❤️"},
 {q:"Purushoth: “Dec 7 ku apram en ______ maariduchu.”",o:["ulagame","phone wallpaper","sleep time","ellam"],a:3,no:"Ellam thaan maariduchu 🥹"}];
const TASKS=["Task 1: Ippove Purushoth ku call panni “I love you da” nu sollu 📞","Task 2: Oru selfie eduthu avanukku anuppu 🤳"];
const SCRATCH=["Inniku movie night, naan pay panren 🎬","Oru periya hug, no questions 🤗","Daily oru “I love you” sollanum 💌"];
/* ===== GAME ENGINE ===== */
let meter=0;function pts(n){meter=Math.min(100,meter+n);$('mf').style.width=meter+'%';$('mp').textContent=meter+'%'}
const gsec=(id,t,sub,inner)=>`<section class="game" id="g-${id}"><div class="ctitle">${t}</div><p class="csub">${sub}</p><div class="gbox" id="${id}">${inner||''}</div></section>`;
function quiz(id,items,p,roast){const el=$(id);let i=0,sc=0;(function show(){
 if(i>=items.length){el.innerHTML=`<div class="qres">${sc}/${items.length} 🎉</div><div class="fb">${sc==items.length?'Perfect! Nee thaan en Sandhiya ❤️':'Paravaala, naan maaththi kudukkuren 😂'}</div>`;if(sc==items.length)conf();return}
 const it=items[i];el.innerHTML=`<p class="q">${it.q}</p>${it.o.map((o,k)=>`<button class="opt" data-k="${k}">${o}</button>`).join('')}<div class="fb"></div>`;
 el.querySelectorAll('.opt').forEach(b=>b.onclick=e=>{const k=+b.dataset.k,ok=k===it.a;el.querySelectorAll('.opt').forEach((x,j)=>{x.disabled=1;x.classList.add(j===it.a?'ok':'bad')});
  el.querySelector('.fb').textContent=ok?'Correct! ❤️':(it.no||roast);if(ok){sc++;pts(p);for(let n=0;n<3;n++)burst(e.clientX,e.clientY)}i++;setTimeout(show,1900)})})()}

$('twist').insertAdjacentHTML('beforebegin',gsec('quiz','How well do you know Purushoth?','Ennai evlo therinjukkitta? 😏 Thappu na roast 😈'));
$('sorry').insertAdjacentHTML('beforebegin',gsec('dlg','Complete the dialogue 🎤','Naan sollra words… unakku thaan theriyum 🥹')+gsec('task','Real-life tasks 📞','Done aana tick pannunga',TASKS.map((t,i)=>`<div class="task" id="t${i}">${t}<br><button data-t="${i}">Done ✓</button></div>`).join('')));
$('letters').insertAdjacentHTML('beforebegin',gsec('scr','Scratch & reveal 🎟️','Viral la scratch pannunga'));

quiz('quiz',QUIZ,6,'Ayyo 😭');quiz('dlg',DLG,5);
/* tasks */
document.querySelectorAll('.task button').forEach(b=>b.onclick=e=>{const t=$('t'+b.dataset.t);if(t.classList.contains('done'))return;t.classList.add('done');b.textContent='Done ✓ 💖';pts(10);burst(e.clientX,e.clientY)});
/* scratch */
$('scr').innerHTML=SCRATCH.map(t=>`<div class="sc"><div class="u">${t}</div><canvas></canvas></div>`).join('');
document.querySelectorAll('.sc canvas').forEach(c=>{const x=c.getContext('2d');let dn=0,dr=0;function init(){c.width=c.offsetWidth;c.height=c.offsetHeight;const g=x.createLinearGradient(0,0,c.width,0);g.addColorStop(0,'#b08a90');g.addColorStop(1,'#e8b4a0');x.fillStyle=g;x.fillRect(0,0,c.width,c.height);x.fillStyle='#5b2a33';x.font='16px Poppins,sans-serif';x.textAlign='center';x.fillText('✨ scratch here ✨',c.width/2,c.height/2+5)}init();
 function sc(e){const r=c.getBoundingClientRect();x.globalCompositeOperation='destination-out';x.beginPath();x.arc(e.clientX-r.left,e.clientY-r.top,18,0,6.3);x.fill()}
 function chk(){if(dn)return;const d=x.getImageData(0,0,c.width,c.height).data;let n=0;for(let i=3;i<d.length;i+=40)if(!d[i])n++;if(n/(d.length/40)>.45){dn=1;c.style.opacity=0;pts(4);burst(innerWidth/2,innerHeight/2)}}
 c.addEventListener('pointerdown',e=>{dr=1;c.setPointerCapture(e.pointerId);sc(e)});c.addEventListener('pointermove',e=>{if(dr)sc(e)});['pointerup','pointercancel'].forEach(t=>c.addEventListener(t,()=>{dr=0;chk()}))});
document.addEventListener('click',e=>{if(e.target.id==='yes'||e.target.id==='say')pts(100)});


const inter=(id,ls,last)=>`<section class="inter" id="${id}"><div class="hb">♥</div>${ls.map((l,i)=>`<p class="il" style="transition-delay:${i*2.8}s">${l}</p>`).join('')}<p class="il big" style="transition-delay:${ls.length*2.8}s">${last}</p></section>`;
$('sorry').insertAdjacentHTML('beforebegin',inter('i1',['10 varushathula 2 thadava break aanom.','Nariya thadava sandai pottom. “Last pic before breakup” nu oru photo kooda irukku. 🥺','Aana ovvoru thadavum… 8 months aanalum, 6 months aanalum… nee call pannina. Naan edutthen.','Edhukku theriyuma?'],'Some people thirumba thirumba unna nokki thaan varuvaanga.'));
$('finale').insertAdjacentHTML('beforebegin',inter('i2',[DAYS.toLocaleString()+' naal.','Ovvoru naalum, nee.','Naan ketka vendiyadhu…'],'Oru question mattum.'));
document.querySelectorAll('.inter').forEach(e=>new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){e.classList.add('in');o.disconnect();let k=0;const v=setInterval(()=>{navigator.vibrate&&navigator.vibrate([70,90,70]);if(++k>5)clearInterval(v)},1400)}},{threshold:.5}).observe(e));
new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){o.disconnect();for(let n=0;n<22;n++){const e=document.createElement('i');e.className='pt';e.textContent=n%3?'🌸':'🪷';e.style.left=Math.random()*100+'%';e.style.fontSize=(14+Math.random()*14)+'px';e.style.setProperty('--dx',(Math.random()*120-60)+'px');e.style.animationDuration=(8+Math.random()*8)+'s';e.style.animationDelay=(Math.random()*8)+'s';document.body.appendChild(e)}}},{threshold:.3}).observe($('finale'));
document.addEventListener('click',e=>{if(e.target.id==='yes'||e.target.id==='say')for(let k=0;k<8;k++)setTimeout(()=>burst(innerWidth*(.15+Math.random()*.7),innerHeight*(.15+Math.random()*.4),['✨','💖','🎆','🌟'][k%4]),k*350)});


/* ===== audio synth: heartbeat, drum, chime ===== */
let AC=null;
function ac(){
 const AudioContextCtor=window.AudioContext||window.webkitAudioContext;
 if(!AudioContextCtor)return null;
 if(!AC||AC.state==='closed')AC=new AudioContextCtor();
 return AC;
}
function thump(f,v,t){const c=ac();if(!c)return;const o=c.createOscillator(),g=c.createGain();o.frequency.setValueAtTime(f,t);o.frequency.exponentialRampToValueAtTime(40,t+.15);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+.25);o.connect(g);g.connect(c.destination);o.start(t);o.stop(t+.3)}
function lubdub(){try{const t=ac().currentTime;thump(90,.9,t);thump(70,.6,t+.28)}catch(e){}}
function drum(){try{const t=ac().currentTime;for(let i=0;i<14;i++)thump(i%2?190:140,.5,t+i*.07)}catch(e){}}
function chime(){try{const c=ac();if(!c)return;const t=c.currentTime;[880,1109,1319,1760].forEach((f,i)=>{const o=c.createOscillator(),g=c.createGain();o.frequency.value=f;g.gain.setValueAtTime(.0001,t+i*.12);g.gain.exponentialRampToValueAtTime(.3,t+i*.12+.02);g.gain.exponentialRampToValueAtTime(.001,t+i*.12+1.2);o.connect(g);g.connect(c.destination);o.start(t+i*.12);o.stop(t+i*.12+1.3)})}catch(e){}}
let hbI;new IntersectionObserver(es=>{clearInterval(hbI);if(es[0].isIntersecting){const f=()=>{lubdub();navigator.vibrate&&navigator.vibrate([60,100,60])};f();hbI=setInterval(f,1400)}},{threshold:.4}).observe($('twist'));
/* ===== fireworks, flash, petals ===== */
const fc=document.createElement('canvas');fc.id='fw';document.body.appendChild(fc);const fx=fc.getContext('2d');let fps=[],fon=0;
function fire(){fire.end=Date.now()+5500;fc.width=innerWidth;fc.height=innerHeight;const H=[350,20,45,330,200];
 for(let k=0;k<8;k++)setTimeout(()=>{const cx=innerWidth*(.15+Math.random()*.7),cy=innerHeight*(.12+Math.random()*.4),h=H[k%5];for(let i=0;i<80;i++){const a=Math.random()*6.28,v=1+Math.random()*5;fps.push({x:cx,y:cy,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:1,h})}},k*550);
 if(fon)return;fon=1;(function f(){fx.globalCompositeOperation='destination-out';fx.fillStyle='rgba(0,0,0,.18)';fx.fillRect(0,0,fc.width,fc.height);fx.globalCompositeOperation='lighter';
  fps.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.05;p.vx*=.985;p.l-=.011;fx.fillStyle=`hsla(${p.h},100%,60%,${Math.max(p.l,0)})`;fx.fillRect(p.x,p.y,2.5,2.5)});fps=fps.filter(p=>p.l>0);
  if(fps.length||fon&&Date.now()<fire.end)requestAnimationFrame(f);else{fon=0;fx.clearRect(0,0,fc.width,fc.height)}})()}
function shower(){for(let n=0;n<26;n++){const e=document.createElement('i');e.className='pt';e.textContent=n%3?'🌸':'🏵️';e.style.cssText=`left:${Math.random()*100}%;font-size:${14+Math.random()*14}px;--dx:${Math.random()*100-50}px;animation-duration:${3+Math.random()*3}s;animation-iteration-count:1;z-index:36`;document.body.appendChild(e);setTimeout(()=>e.remove(),6500)}}
document.body.insertAdjacentHTML('beforeend','<div id="flash"></div>');
/* ===== cartoon art ===== */
const SK='#e8b79a',DK='#2a1216';
const set=(v,t)=>`<set attributeName="opacity" to="${v}" begin="${t}s" fill="freeze"/>`;
function head(cx,o){const f=o.f,h=o.hair,t=o.tilt;
 return `<g>${t?`<animateTransform attributeName="transform" type="rotate" values="0 ${cx} 160;${t[0]} ${cx} 160" begin="${t[1]}s" dur="1s" fill="freeze"/>`:''}<ellipse cx="${cx}" cy="118" rx="35" ry="38" fill="${SK}"/>`+
 (f?`<path d="M${cx-38} 122Q${cx-42} 70 ${cx} 72Q${cx+42} 70 ${cx+38} 122Q${cx+30} 92 ${cx} 90Q${cx-30} 92 ${cx-38} 122Z" fill="${h}"/><circle cx="${cx}" cy="103" r="2.6" fill="#d7263d"/>${o.tikka?`<path d="M${cx} 90V101" stroke="#f5c542" stroke-width="1.6"/>`:''}`+[-30,-20,-10,0,10,20,30].map(d=>`<circle cx="${cx+d}" cy="${73+Math.pow(d/38,2)*38}" r="3.6" fill="#fff"/>`).join('')+`<circle cx="${cx-36}" cy="134" r="3" fill="#f5c542"/><circle cx="${cx+36}" cy="134" r="3" fill="#f5c542"/>`
  :`<path d="M${cx-37} 112Q${cx-40} 68 ${cx} 70Q${cx+40} 68 ${cx+37} 112Q${cx+30} 90 ${cx} 90Q${cx-30} 90 ${cx-37} 112Z" fill="${h}"/>`)+
 `<g opacity="1">${o.hap!=null?set('0',o.hap):''}<g class="ey" style="transform-origin:${cx}px 118px"><circle cx="${cx-13}" cy="118" r="4" fill="${DK}"/><circle cx="${cx+13}" cy="118" r="4" fill="${DK}"/><circle cx="${cx-12}" cy="116.5" r="1.3" fill="#fff"/><circle cx="${cx+14}" cy="116.5" r="1.3" fill="#fff"/></g></g>`+
 `<g opacity="0">${o.hap!=null?set('1',o.hap):''}<path d="M${cx-19} 120Q${cx-13} 111 ${cx-7} 120M${cx+7} 120Q${cx+13} 111 ${cx+19} 120" stroke="${DK}" stroke-width="3" fill="none" stroke-linecap="round"/></g>`+
 `<path d="M${cx-19} 107Q${cx-13} 103 ${cx-7} 106M${cx+7} 106Q${cx+13} 103 ${cx+19} 107" stroke="${h}" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M${cx-11} 137Q${cx} 151 ${cx+11} 137Z" fill="#fff" stroke="#8a2b3a" stroke-width="1.6" stroke-linejoin="round"/><circle cx="${cx-24}" cy="132" r="6" fill="#ff7b9c" opacity=".45"/><circle cx="${cx+24}" cy="132" r="6" fill="#ff7b9c" opacity=".45"/></g>`}
function body(cx,o){return (o.f?`<path d="M${cx-42} 118Q${cx-50} 240 ${cx-36} 300L${cx+36} 300Q${cx+50} 240 ${cx+42} 118Z" fill="${o.hair}"/>`:'')+`<path d="M${cx-50} 360L${cx-46} 208Q${cx-42} 184 ${cx-16} 180L${cx+16} 180Q${cx+42} 184 ${cx+46} 208L${cx+50} 360Z" fill="${o.top}"/><rect x="${cx-9}" y="146" width="18" height="38" rx="8" fill="${SK}"/>${o.deco||''}`}
const person=(cx,o)=>body(cx,o)+head(cx,o);
const suit=cx=>`<path d="M${cx-17} 180L${cx} 236L${cx+17} 180Z" fill="#fff"/><path d="M${cx-17} 180L${cx-8} 250L${cx-34} 214Z" fill="#14284a"/><path d="M${cx+17} 180L${cx+8} 250L${cx+34} 214Z" fill="#14284a"/><path d="M${cx-4} 194h8l3 36-7 10-7-10z" fill="#c1121f"/>`;
const gown=cx=>`<path d="M${cx-46} 208Q${cx-42} 184 ${cx-16} 180L${cx+16} 180Q${cx+42} 184 ${cx+46} 208Q${cx} 192 ${cx-46} 208Z" fill="${SK}"/><path d="M${cx-46} 208Q${cx} 192 ${cx+46} 208" stroke="#fff" stroke-width="6" fill="none" stroke-dasharray="1 6" stroke-linecap="round"/>`;
const gdeco=cx=>`<path d="M${cx-34} 183L${cx-14} 183L${cx+34} 360L${cx+10} 360Z" fill="#d4a017"/><path d="M${cx-14} 180L${cx} 202L${cx+14} 180Z" fill="#fff"/>`;
const saree=cx=>`<path d="M${cx-30} 183L${cx-8} 183L${cx+34} 360L${cx+8} 360Z" fill="#f5c542"/><path d="M${cx-16} 180L${cx} 214L${cx+16} 180Z" fill="${SK}"/><path d="M${cx-15} 186Q${cx} 224 ${cx+15} 186" stroke="#f5c542" stroke-width="4" fill="none"/><circle cx="${cx}" cy="217" r="5" fill="#2e9e6b" stroke="#f5c542" stroke-width="2"/>`;
function arm(sx,sy,fr,col,dur){const d=h=>`M${sx} ${sy}Q${(sx+h[0])/2+(h[0]>sx?8:-8)} ${(sy+h[1])/2+22} ${h[0]} ${h[1]}`,a=`begin="0s" dur="${dur}s" fill="freeze" calcMode="spline" keySplines="${fr.slice(1).map(()=>'.4 0 .2 1').join(';')}"`;
 return `<path d="${d(fr[0])}" stroke="${col}" stroke-width="20" stroke-linecap="round" fill="none"><animate attributeName="d" values="${fr.map(d).join(';')}" ${a}/></path><circle r="10" fill="${SK}" cx="${fr[0][0]}" cy="${fr[0][1]}"><animate attributeName="cx" values="${fr.map(f=>f[0]).join(';')}" ${a}/><animate attributeName="cy" values="${fr.map(f=>f[1]).join(';')}" ${a}/></circle>`}
function mov(inner,pts,dur,b){const a=`begin="${b||0}s" dur="${dur}s" fill="freeze"`,c=k=>pts.map(p=>p[k]);
 return `<g opacity="${pts[0][3]}"><animate attributeName="opacity" values="${c(3).join(';')}" ${a}/><g><animateTransform attributeName="transform" type="translate" values="${pts.map(p=>p[0]+' '+p[1]).join(';')}" ${a}/><g><animateTransform attributeName="transform" type="scale" values="${c(2).map(x=>x+' '+x).join(';')}" ${a}/>${inner}</g></g></g>`}
const ringI=`<circle r="6" fill="none" stroke="#f5d27a" stroke-width="3.2"/><path d="M0-12L5-7L0-2L-5-7Z" fill="#9fd8ff" stroke="#fff" stroke-width="1"/>`;
const gl=(w,c,da,off,d,e)=>`<${e?'ellipse '+e:'path d="'+d+'"'} fill="none" stroke="${c}" stroke-width="${w}"${da?` stroke-dasharray="${da}" stroke-dashoffset="${off}" stroke-linecap="round"`:''}/>`;
const garI=`<g>${gl(16,'#2f7d32',0,0,0,'rx="26" ry="32"')}${gl(13,'#ff9f1c','.1 9',0,0,'rx="26" ry="32"')}${gl(8,'#ffd6e4','.1 9',4.5,0,'rx="26" ry="32"')}</g>`;
const uG=cx=>{const d=`M${cx-26} 172Q${cx-34} 272 ${cx} 292Q${cx+34} 272 ${cx+26} 172`;return gl(15,'#2f7d32',0,0,d)+gl(12,'#ff9f1c','.1 9',0,d)+gl(8,'#ffd6e4','.1 9',4.5,d)};
const fadeG=(x,t)=>`<g opacity="0">${set('1',t)}${x}</g>`;
const sbur=(x,y,t)=>`<circle cx="${x}" cy="${y}" r="0" fill="none" stroke="#fff" stroke-width="2.5" opacity="0"><animate attributeName="r" values="0;40" begin="${t}s" dur=".9s"/><animate attributeName="opacity" values="1;0" begin="${t}s" dur=".9s"/></circle>`;

const hearts=()=>Array.from({length:8},(_,i)=>`<text class="sh" x="${140+i*18+(i%2)*8}" y="150" font-size="${18+i%3*5}" fill="#ff4d6d" style="animation-delay:${5.8+i*.45}s">♥</text>`).join('');
function mand(){let t='';for(let x=0;x<400;x+=20)t+=`<path d="M${x} 0Q${x+10} 38 ${x+20} 0Z" fill="#2f7d32"/><circle cx="${x+10}" cy="32" r="4.5" fill="#ff9f1c"/>`;
 const lamp=x=>`<path d="M${x-18} 346L${x-10} 312H${x+10}L${x+18} 346Z" fill="#c99a2e"/><path class="fl" d="M${x} 288Q${x-9} 302 ${x} 312Q${x+9} 302 ${x} 288Z" fill="#ffd166"/>`;
 return `<defs><linearGradient id="mg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a0c1c"/><stop offset="1" stop-color="#1a0508"/></linearGradient><radialGradient id="mgl"><stop offset="0" stop-color="#f5c542" stop-opacity=".45"/><stop offset="1" stop-color="#f5c542" stop-opacity="0"/></radialGradient></defs><rect width="400" height="360" fill="url(#mg)"/><circle cx="200" cy="170" r="190" fill="url(#mgl)"/><rect width="400" height="6" fill="#f5c542"/>${t}<rect x="8" y="40" width="16" height="320" fill="#c99a2e"/><rect x="376" y="40" width="16" height="320" fill="#c99a2e"/><path d="M16 40V360M384 40V360" stroke="#ff9f1c" stroke-width="12" stroke-dasharray=".1 10" stroke-linecap="round"/><path d="M62 40V140M338 40V140" stroke="#fff" stroke-width="5" stroke-dasharray=".1 8" stroke-linecap="round"/>${lamp(52)}${lamp(348)}<path d="M0 352H400" stroke="#f5c542" stroke-width="4" stroke-dasharray="2 10"/>`}
function sceneEng(){const G={hair:'#3b2314',top:'#1d3557',deco:suit(120),tilt:[5,2],hap:5.6},B={f:1,hair:'#2b1a14',top:'#cdb8f0',deco:gown(280),tilt:[-5,2],hap:5.6};
 const sl=(cx,sd,col)=>`<path d="M${cx+sd*40} 206Q${cx+sd*54} 270 ${cx+sd*50} 320" stroke="${col}" stroke-width="20" stroke-linecap="round" fill="none"/><circle cx="${cx+sd*50}" cy="326" r="10" fill="${SK}"/>`;
 return `<circle cx="200" cy="190" r="170" fill="#ffd9e6"/>`+person(120,G)+person(280,B)+sl(120,-1,'#1d3557')+sl(280,1,'#cdb8f0')+
 arm(160,206,[[170,322],[170,322],[203,264],[203,264],[203,264],[186,300],[170,322],[170,322]],'#1d3557',9)+arm(240,206,[[230,322],[230,322],[216,264],[216,264],[216,264],[252,214],[252,206],[252,206]],'#cdb8f0',9)+
 mov(ringI,[[199,258,1,0],[199,258,1,0],[200,260,1,1],[214,262,1,1],[216,262,1,1],[252,213,1.4,1],[252,205,1.6,1],[252,205,1.6,1]],9)+sbur(216,262,3.9)+sbur(252,205,6.5)+hearts()}
function sceneMal(){const G={hair:'#1e1410',top:'#f4e9d2',deco:gdeco(120),tilt:[4,1],hap:8.2},B={f:1,tikka:1,hair:'#150e0c',top:'#a8112b',deco:saree(280),tilt:[-4,1],hap:8.2};
 const lean=(d)=>`<animateTransform attributeName="transform" type="translate" values="0 0;${d} 0" begin=".4s" dur="1.2s" fill="freeze"/>`,K='#f4e9d2',R='#a8112b',z=n=>Array(n).fill(0);
 const gl_=(a,b)=>a.concat(b);
 const gLd=[[116,270],[116,270],[116,266],[154,184],[184,100],[184,154],[72,322],[72,322],[72,322],[72,322]],gRd=[[168,270],[168,270],[168,266],[206,184],[236,100],[236,154],[168,322],[168,322],[168,322],[168,322]];
 const bLd=[[232,270],[232,270],[232,270],[232,270],[232,270],[232,266],[202,190],[164,102],[164,152],[232,322]],bRd=[[284,270],[284,270],[284,270],[284,270],[284,270],[284,266],[254,190],[216,102],[216,152],[328,322]];
 return mand()+`<g>${lean(40)}${person(120,G)}${fadeG(uG(120),8)}</g><g>${lean(-30)}${person(280,B)}${fadeG(uG(280),5)}</g>`+
 `<g>${lean(40)}${arm(80,206,gLd,K,9)}${arm(160,206,gRd,K,9)}${mov(garI,[[142,266,1,1],[142,266,1,1],[142,262,1,1],[180,182,1,1],[210,96,1,1],[210,150,.9,0],[210,150,.9,0],[210,150,.9,0],[210,150,.9,0],[210,150,.9,0]],9)}</g>`+
 `<g>${lean(-30)}${arm(240,206,bLd,R,9)}${arm(320,206,bRd,R,9)}${mov(garI,[[258,266,1,1],[258,266,1,1],[258,266,1,1],[258,266,1,1],[258,266,1,1],[258,262,1,1],[228,186,1,1],[190,98,1,1],[190,148,.9,0],[190,148,.9,0]],9)}</g>`}
function sceneTha(){const G={hair:'#1e1410',top:'#f4e9d2',deco:gdeco(190),tilt:[-3,1]},B={f:1,tikka:1,hair:'#150e0c',top:'#a8112b',deco:saree(255),tilt:[7,1.2],hap:1.6};
 const k=(id,x,y)=>`<g class="kz" id="${id}"><circle cx="${x}" cy="${y}" r="5" fill="#ffd166" stroke="#b8860b"/></g>`;
 return mand()+`<g transform="translate(0,-14)">${person(190,G)}</g>`+person(255,B)+
 `<g opacity="0">${set('1',1.3)}<path d="M241 172Q255 194 269 172" stroke="#f5c542" stroke-width="3" fill="none"/></g><g opacity="0">${set('1',1.6)}<path d="M255 190V206" stroke="#f5c542" stroke-width="2.5"/><path d="M255 206Q245 218 255 232Q265 218 255 206Z" fill="#f5c542" stroke="#b8860b"/><circle cx="255" cy="217" r="3.2" fill="#d7263d"/></g>`+k('k1',241,177)+k('k2',269,177)+k('k3',255,197)+
 `<g class="th">${arm(148,192,[[142,320],[200,250],[240,184],[240,184],[240,184],[240,184]],'#f4e9d2',3)}${arm(232,192,[[238,320],[252,250],[270,184],[270,184],[270,184],[270,184]],'#f4e9d2',3)}</g>`}
const scn=(id,v)=>{$(id).innerHTML=`<svg viewBox="0 0 400 360" xmlns="http://www.w3.org/2000/svg">${v}</svg>`};
setInterval(()=>{$('bpm').textContent=108+Math.floor(Math.random()*30)},1400);

/* ===== journey interactions ===== */
const jio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');jio.unobserve(e.target);jyIn(e.target)}}),{threshold:.18});document.querySelectorAll('.jy,.chc').forEach(e=>jio.observe(e));
document.body.insertAdjacentHTML('beforeend','<div id="jlb"><img alt=""><div class="jcap"></div><button id="lbx" aria-label="Close">✕</button></div>');
document.body.insertAdjacentHTML('beforeend','<div id="msh"><div class="msfx"></div><div class="mshh"><button id="mcl" aria-label="Close">✕</button><div class="mstt"></div><div class="msc"></div><button id="msp">▶ Play slideshow</button></div><div class="msg"></div></div>');
let msY='',msF='all';const MQ=q=>document.querySelector('#msh '+q);
function msRender(){$('msh').dataset.mood=msF;msFx();const a=moreOf(msY),l=msF==='all'?a:a.filter(m=>m[1]===msF);MQ('.mstt').innerHTML=`📸 ${msY}<small>${a.length} more moments</small>`;
 MQ('.msc').innerHTML=[['all','✨ All',a.length]].concat(Object.keys(MOOD).filter(k=>a.some(m=>m[1]===k)).map(k=>[k,MOOD[k][0]+' '+MOOD[k][1],a.filter(m=>m[1]===k).length])).map(c=>`<button data-f="${c[0]}" class="${c[0]===msF?'sel':''}">${c[1]}<b>${c[2]}</b></button>`).join('');
 MQ('.msg').innerHTML=l.map((m,i)=>`<figure class="msk ${m[1]}" style="--r:${[-1.5,1.8,-.8,1.2][i%4]*(m[1]==='funny'?3.2:m[1]==='unforget'?.5:1)}deg;--d:${i*.09}s;--age:${+m[0]>=2022?0:((2022-+m[0])*.05).toFixed(2)}" data-k="${m[2]}"><span class="mbd">${MOOD[m[1]][0]}</span><div class="msp" style="aspect-ratio:${m[4]}/${m[5]}">${IMGT(MU(m),'alt=""')}</div><figcaption class="${m[6].length>38?'lg':''}">${m[6].replace(/'/g,'’')}</figcaption>${m[1]==='funny'?'<i class="lol">LOL!</i>':m[1]==='happy'?'<i class="spk">✨</i>':''}</figure>`).join('')}
function lbOpen(src,cap,mood,sur){const l=$('jlb'),i=l.querySelector('img');i.src=src;{const c=(cap||'').replace(/'/g,'’'),jc=l.querySelector('.jcap');jc.textContent=c;jc.classList.toggle('jl',c.length>38)}l.className='on '+(mood||'');l.dataset.s=sur?1:'';i.classList.remove('dice');if(sur){void i.offsetWidth;i.classList.add('dice')}}
let sCur=null,sLast=-1;
function sdraw(){const P=(SURP.length?SURP:MORE).map(m=>[MU(m),m[6],m[1]]).filter(m=>photoAvailable(m[0]));const c=$('cardb');if(!P.length){c.querySelector('.cap2').textContent='Original memory photos will appear here once they are added.';c.classList.add('flip');return}let i;do{i=Math.floor(Math.random()*P.length)}while(i===sLast&&P.length>1);sLast=i;const r=P[i];
 const go=()=>{{const im=c.querySelector('img');im.onerror=()=>{im.onerror=null;im.src=photoFullSrc(r[0])};im.src=photoSrc(r[0])}c.querySelector('.cap2').textContent=r[1];sCur=r;c.classList.add('flip');chime();shower();navigator.vibrate&&navigator.vibrate(40)};
 if(c.classList.contains('flip')){c.classList.remove('flip');setTimeout(go,750)}else go()}
document.body.insertAdjacentHTML('beforeend','<nav id="yrail" aria-label="Years">'+[...new Set(JY.map(j=>j.y))].map(y=>`<a data-y="${y}"><b>${y}</b><i></i></a>`).join('')+'</nav><div id="bokeh">'+Array.from({length:14},(_,i)=>`<i style="left:${(i*37)%100}%;--s:${14+(i*13)%34}px;--t:${14+(i*7)%16}s;--dl:${-(i*3)}s"></i>`).join('')+'</div>');
const vis=new Set(),yio=new IntersectionObserver(es=>{es.forEach(e=>e.isIntersecting?vis.add(e.target):vis.delete(e.target));const cur=[...vis].sort((x,y)=>x.getBoundingClientRect().top-y.getBoundingClientRect().top)[0];$('yrail').classList.toggle('on',!!cur);$('bokeh').classList.toggle('on',!!cur);document.querySelectorAll('#yrail a').forEach(a=>a.classList.toggle('act',!!cur&&a.dataset.y===cur.dataset.y))},{threshold:.35});document.querySelectorAll('.jy').forEach(e=>yio.observe(e));
document.addEventListener('click',e=>{const t=e.target;if(t.closest('#ssx')){ssStop();return}if(t.closest('#msp')){ssStart();return}if(t.closest('#ssh')){ssPause();return}
 const ra=t.closest('#yrail a');if(ra){document.querySelector('.jy[data-y="'+ra.dataset.y+'"]').scrollIntoView({behavior:'smooth'});return}
 if(t.closest('#draw')){sdraw();return}
 const cb=t.closest('.cardb.flip');if(cb&&sCur){lbOpen(sCur[0],sCur[1],sCur[2]);return}
 if(t.closest('.cardb')){sdraw();return}
 const jb=t.closest('.jmb');if(jb){msY=jb.dataset.y;msF='all';msRender();$('msh').scrollTop=0;$('msh').classList.add('on');return}
 if(t.closest('#mcl')){$('msh').classList.remove('on');return}
 const ch=t.closest('.msc button');if(ch){msF=ch.dataset.f;msRender();return}
 const mk=t.closest('.msk');if(mk){const m=MORE.find(x=>x[2]===mk.dataset.k);if(m&&photoAvailable(MU(m)))lbOpen(photoFullSrc(MU(m)),m[6],m[1]);return}
 const archivePhoto=t.closest('.archive-card');if(archivePhoto){const img=archivePhoto.querySelector('img');if(img&&img.dataset.full)lbOpen(img.dataset.full,archivePhoto.querySelector('figcaption')?.textContent||'');return}
 const f=t.closest('.jp');if(f){const img=f.querySelector('img');if(img)lbOpen(img.dataset.full||img.src,'');return}
 if(t.closest('#jlb'))$('jlb').className=''});

/* ===== music button + scene switching ===== */
document.body.insertAdjacentHTML('beforeend','<button id="mus" class="on" aria-label="Music on/off"><i></i><i></i><i></i></button><div id="mnow"></div>');
$('mus').onclick=()=>{muted=!muted;$('mus').classList.toggle('on',!muted);if(muted)A.forEach(a=>a.pause());else if(list)A[ai].play().catch(()=>{})};
[['#i1','sorry'],['#i2','finale'],['#callsec','dec7'],['#twist','dec7'],['#sorry','sorry'],['#finale','finale'],['#finally','finale'],['#ring','finale'],['#wed','wedding'],['.game','default']].forEach(([q,k])=>document.querySelectorAll(q).forEach(e=>e.dataset.scene=k));
const sio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){setScene(e.target.dataset.scene);setAct(e.target.dataset.scene)}}),{threshold:.45});document.querySelectorAll('[data-scene]').forEach(e=>sio.observe(e));
/* ===== v2: effects ===== */
document.body.insertAdjacentHTML('beforeend','<div id="grain"></div><div id="ssh"><img alt=""><img alt=""><div class="scap"></div><i class="sbar"></i><button id="ssx" aria-label="Close">✕</button></div>');
function cnt(el,from,to,ms,fmt){const t0=performance.now();(function f(t){const k=Math.min(1,(t-t0)/ms),e=1-Math.pow(1-k,3),v=Math.round(from+(to-from)*e);el.textContent=fmt?fmt(v):v;if(k<1)requestAnimationFrame(f)})(t0)}
function jyIn(el){chFx(el);const n=el.querySelector('.jn');if(n){const y=+n.textContent;if(y)cnt(n,y-14,y,1500)}
 const d=el.querySelector('.days b');if(d)setTimeout(()=>cnt(d,0,DAYS,2200,v=>v.toLocaleString()),900);
 setTimeout(()=>el.classList.add('done'),3600)}
let ptick=0;addEventListener('scroll',()=>{if(ptick||document.documentElement.classList.contains('lite'))return;ptick=requestAnimationFrame(()=>{ptick=0;document.querySelectorAll('.jy.in').forEach(j=>{const r=j.getBoundingClientRect();if(r.bottom<-200||r.top>innerHeight+200)return;j.style.setProperty('--py',((r.top+r.height/2-innerHeight/2)/innerHeight).toFixed(3))})})},{passive:true});
document.addEventListener('pointerdown',e=>{if(e.target.closest('button,a,input,#pv,#msh,#jlb,#ssh,#lock,#begin,.tnbox'))return;burst(e.clientX,e.clientY,['❤','✨','💖','💗'][Math.floor(Math.random()*4)])});
(function(){const b=$('tnbox');if(!b)return;let drag=0;const set=e=>{const r=b.getBoundingClientRect();b.style.setProperty('--p',Math.max(4,Math.min(96,(e.clientX-r.left)/r.width*100))+'%')};
 b.addEventListener('pointerdown',e=>{drag=1;b.setPointerCapture(e.pointerId);set(e)});b.addEventListener('pointermove',e=>{if(drag)set(e)});['pointerup','pointercancel'].forEach(t=>b.addEventListener(t,()=>drag=0));
 new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){o.disconnect();let t0=performance.now();(function f(t){const k=(t-t0)/2600;if(k>=1||drag){return}b.style.setProperty('--p',(50+Math.sin(k*6.28)*34*(1-k))+'%');requestAnimationFrame(f)})(t0)}},{threshold:.6}).observe(b)})();
/* slideshow of the open "more moments" sheet */
let ssT,ssI=0,ssL=[],ssF=0,ssPz=0;
function ssStart(){const a=moreOf(msY).filter(m=>photoAvailable(MU(m))),l=msF==='all'?a:a.filter(m=>m[1]===msF);if(!l.length)return;ssL=l;ssI=0;ssF=0;ssPz=0;$('ssh').classList.remove('paused');$('ssh').classList.add('on');ssNext()}
function ssNext(){clearTimeout(ssT);if(!ssL.length)return;const m=ssL[ssI%ssL.length],im=$('ssh').querySelectorAll('img'),n=im[ssF^1],c=im[ssF],cp=$('ssh').querySelector('.scap'),bar=$('ssh').querySelector('.sbar'),tx=m[6].replace(/'/g,'’');
 n.classList.remove('on');n.src=photoFullSrc(MU(m));void n.offsetWidth;n.classList.add('on');c.classList.remove('on');ssF^=1;cp.textContent=tx;cp.className='scap '+m[1]+(tx.length>38?' jl':'');
 bar.style.animation='none';void bar.offsetWidth;bar.style.animation='sbar 4.8s linear forwards';ssI++;{const nx=ssL[ssI%ssL.length];if(nx)new Image().src=photoFullSrc(MU(nx))}ssT=setTimeout(ssNext,4800)}
function ssPause(){const h=$('ssh');ssPz=!ssPz;h.classList.toggle('paused',!!ssPz);if(ssPz)clearTimeout(ssT);else ssNext()}
function ssStop(){clearTimeout(ssT);$('ssh').classList.remove('on','paused')}
/* ===== v3: cold open, phone call, awards ===== */
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
function tickSnd(){try{const c=ac(),o=c.createOscillator(),g=c.createGain();o.type='square';o.frequency.value=1500+Math.random()*300;g.gain.setValueAtTime(.025,c.currentTime);g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+.04);o.connect(g);g.connect(c.destination);o.start();o.stop(c.currentTime+.05)}catch(e){}}
function shutterSnd(){try{const c=ac(),t=c.currentTime;[0,.09].forEach((d,i)=>{const b=c.createBuffer(1,c.sampleRate*.06,c.sampleRate),a=b.getChannelData(0);for(let k=0;k<a.length;k++)a[k]=(Math.random()*2-1)*Math.pow(1-k/a.length,2);const s=c.createBufferSource(),g=c.createGain();g.gain.value=i?.5:.8;s.buffer=b;s.connect(g);g.connect(c.destination);s.start(t+d)})}catch(e){}}
async function coldOpen(done){document.body.classList.add('locked');const first=JY[0]&&JY[0].p[0];if(first&&photoAvailable(first))new Image().src=photoFullSrc(first);
 const o=document.createElement('div');o.id='cold';o.innerHTML='<div class="cbox"></div><div class="cph"><img alt=""><span>2016 ❤</span></div><div class="cvf"></div><i class="cfl"></i><button id="cskip">Skip ⏭</button>';document.body.appendChild(o);
 let skip=0;$('cskip').onclick=()=>{skip=1};const box=o.querySelector('.cbox');
 const line=async(cls,txt,speed=44)=>{const d=document.createElement('div');d.className='cl '+cls;box.appendChild(d);const cr=document.createElement('span');cr.className='caret';for(let i=1;i<=txt.length&&!skip;i++){d.textContent=txt.slice(0,i);d.appendChild(cr);tickSnd();await sleep(speed)}d.textContent=txt;await sleep(skip?0:650)};
 await sleep(900);
 for(const [c,t] of [['','Oru school road. 🛣️'],['','Oru paiyan, oru ponnu-kaaga wait panraan.'],['him','“Oru photo edukkalama?”'],['her','“Illa.”'],['him','“Please…?”'],['her','“…seri. Oru photo mattum.”']])if(!skip)await line(c,t);
 if(!skip){o.classList.add('shot');await sleep(450);shutterSnd();o.querySelector('.cfl').classList.add('go');navigator.vibrate&&navigator.vibrate(60);await sleep(250);box.style.opacity=0;
  if(first){o.querySelector('.cph img').src=first;o.querySelector('.cph').classList.add('show');await sleep(600);o.querySelector('.cph').classList.add('dev')}
  await sleep(skip?0:1800);const polaroid=o.querySelector('.cph');if(polaroid){polaroid.classList.add('hide');await sleep(skip?0:520);polaroid.remove()}const d=document.createElement('div');d.className='cl cend';box.style.opacity=1;box.innerHTML='';box.appendChild(d);d.textContent='';const tx='Andha oru photo-vukku, ippo 10 varusham.';for(let i=1;i<=tx.length&&!skip;i++){d.textContent=tx.slice(0,i);tickSnd();await sleep(48)}d.textContent=tx;chime();await sleep(skip?0:3200)}
 o.classList.add('out');document.body.classList.remove('locked');setTimeout(()=>o.remove(),1400);done&&done()}
/* phone call (Dec 7, 2021) */
let cRingI=0,cRingOn=0,cCallAcc=0;
function cRingTone(){try{const c=ac(),t=c.currentTime;[0,.22,.9,1.12].forEach(d=>{const o=c.createOscillator(),g=c.createGain();o.type='sine';o.frequency.value=d%.9<.5?880:988;g.gain.setValueAtTime(.0001,t+d);g.gain.exponentialRampToValueAtTime(.12,t+d+.02);g.gain.exponentialRampToValueAtTime(.0001,t+d+.18);o.connect(g);g.connect(c.destination);o.start(t+d);o.stop(t+d+.2)})}catch(e){}}
function cRingStart(){if(cRingOn||cCallAcc)return;cRingOn=1;const f=()=>{cRingTone();navigator.vibrate&&navigator.vibrate([400,150,400])};f();cRingI=setInterval(f,2600)}
function cRingStop(){cRingOn=0;clearInterval(cRingI)}
new IntersectionObserver(es=>{if(es[0].isIntersecting)cRingStart();else cRingStop()},{threshold:.6}).observe($('callsec'));
function callAccept(){if(cCallAcc)return;cCallAcc=1;cRingStop();const p=$('phone');p.classList.add('live');$('cbtns').style.display='none';$('chint').textContent='';chime();let s=0;const tm=setInterval(()=>{s++;$('cst').textContent='00:0'+Math.min(s,9)},1000);$('cst').textContent='00:00';
 const cap=$('ccap'),tx='“Meet pannanum. Pesalam vaa.”';let i=0;setTimeout(()=>{const iv=setInterval(()=>{cap.textContent=tx.slice(0,++i);tickSnd();if(i>=tx.length){clearInterval(iv);navigator.vibrate&&navigator.vibrate([80,60,80])}},70)},900);
 setTimeout(()=>{clearInterval(tm);$('cst').textContent='call ended · 00:06';$('twist').scrollIntoView({behavior:'smooth'})},6400)}
$('cacc').onclick=callAccept;$('cdec').onclick=()=>{const p=$('phone');p.classList.remove('shake');void p.offsetWidth;p.classList.add('shake');$('chint').textContent='Decline panna mudiyaadhu… nee thaan call pannina 😄';navigator.vibrate&&navigator.vibrate(150);setTimeout(callAccept,1500)};
/* awards: open envelope */
/* ===== v4: color script (acts), preloading, install ===== */
const ACTS={friends:'#2a1608',heart:'#3a0510',joy:'#2a0a14',sorry:'#0e1420',fin:'#2a1e06'};
document.body.insertAdjacentHTML('afterbegin','<div id="acts">'+Object.keys(ACTS).map(k=>`<i class="al al-${k}"></i>`).join('')+'</div>');
function setAct(k){const a=/^20(1[6-9]|20|21)$/.test(k)?'friends':k==='dec7'?'heart':/^202[2-6]$/.test(k)?'joy':k==='sorry'?'sorry':(k==='finale'||k==='wedding')?'fin':null;if(!a||document.body.dataset.act===a)return;document.body.dataset.act=a;const m=document.querySelector('meta[name=theme-color]');if(m)m.content=ACTS[a]}
setAct('2016');
const _wv=[];function warmVid(ks){if(document.documentElement.classList.contains('lite'))return;ks.forEach(k=>{if(!VID[k])return;const v=document.createElement('video');v.preload='auto';v.muted=true;v.src=VID[k];_wv.push(v)})}
new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){o.disconnect();warmVid(['p','b'])}},{rootMargin:'900px'}).observe($('ring'));
let _dp;addEventListener('beforeinstallprompt',e=>{e.preventDefault();_dp=e;$('inst').hidden=false});$('inst').onclick=()=>{if(_dp){_dp.prompt();_dp=null;$('inst').hidden=true}};
/* ===== v5: ambient scene per act, chapter + sheet effects ===== */
function chFx(el){const f=el.dataset&&el.dataset.fx;if(!f)return;if(f==='ACT ONE'){el.classList.add('flick');setTimeout(()=>el.classList.remove('flick'),2600)}
 if(f==='ACT THREE')setTimeout(()=>{const r=el.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2;['💖','🌸','✨','💗'].forEach((e,i)=>setTimeout(()=>burst(x,y,e),i*250))},1800)}
function msFx(){const e=({happy:['✨','🌟','☀️'],funny:['😂','🤪','😜','😆'],unforget:['💔','🥀','💭','🌹'],all:['❤','✨','💖']})[msF]||['❤'],m=MQ('.msfx');if(!m)return;
 m.innerHTML=Array.from({length:12},(_,i)=>`<i style="left:${(i*8.3+Math.random()*5)%100}%;--s:${16+Math.random()*22}px;--t:${9+Math.random()*8}s;--dl:${-Math.random()*10}s">${e[i%e.length]}</i>`).join('')}
(function(){if(document.documentElement.classList.contains('lite'))return;document.documentElement.classList.add('amb-on');
 const c=document.createElement('canvas');c.id='amb';document.body.appendChild(c);const x=c.getContext('2d'),D=Math.min(devicePixelRatio||1,1.5),R=(a,b)=>a+Math.random()*(b-a);let W,H,mode='',P=[],fade=0;const T0=performance.now();
 const size=()=>{W=innerWidth;H=innerHeight;c.width=W*D;c.height=H*D;x.setTransform(D,0,0,D,0,0)};addEventListener('resize',size);size();
 const PET=['255,170,185','255,205,190','250,140,160','255,225,150'];
 function mk(m,fresh){const p={x:R(-30,W+30),y:fresh?R(0,H):H+20,r:R(.6,2.4),a:R(.25,.85),ph:R(0,6.28),vx:R(-.12,.12),vy:-R(.05,.2),col:'255,225,180',rot:R(0,6.28),s:R(5,10)};
  if(m==='heart'){p.vy=-R(.5,1.4);p.r=R(1,3);p.col='255,'+(60+Math.random()*70|0)+',80';if(!fresh)p.y=H+20}
  if(m==='joy'){p.y=fresh?R(0,H):-20;p.vy=R(.35,.9);p.vx=R(-.3,.3);p.col=PET[Math.random()*4|0];p.h=Math.random()<.18}
  if(m==='sorry'){p.y=fresh?R(0,H):-30;p.vy=R(7,12);p.vx=1.3;p.len=R(10,22);p.a=R(.12,.32);p.x=R(-40,W+80)}
  if(m==='fin'){p.col='255,215,120';p.vy=-R(.1,.4);p.r=R(1.2,3.2)}
  return p}
 function frame(t){requestAnimationFrame(frame);const ss=document.getElementById('ssh');if(document.hidden||document.getElementById('pv')||document.getElementById('cold')||(ss&&ss.classList.contains('on')))return;
  const act=document.body.dataset.act||'friends';if(act!==mode){mode=act;fade=0;P=[];const n={friends:45,heart:55,joy:34,sorry:80,fin:55}[mode]||40;for(let i=0;i<n;i++)P.push(mk(mode,true))}
  fade=Math.min(1,fade+.008);x.clearRect(0,0,W,H);const s=(t-T0)/1000,beat=mode==='heart'?1+.9*Math.pow(Math.max(0,Math.sin(s*Math.PI*2/1.4)),6):1;
  for(const p of P){p.ph+=.02;p.x+=p.vx+(mode==='joy'?Math.sin(p.ph)*.4:0);p.y+=p.vy;const tw=.6+.4*Math.sin(s*1.4+p.ph*3),al=p.a*fade;
   if(mode==='sorry'){x.strokeStyle=`rgba(170,190,235,${al})`;x.lineWidth=1;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(p.x-p.vx*2,p.y+p.len);x.stroke();if(p.y>H+30)Object.assign(p,mk('sorry',false))}
   else if(mode==='joy'){p.rot=(p.rot||0)+.02;if(p.h){x.font=p.s*2+'px serif';x.fillStyle=`rgba(255,110,140,${al})`;x.fillText('♥',p.x,p.y)}else{x.save();x.translate(p.x,p.y);x.rotate(p.rot);x.scale(1,.55+.45*Math.abs(Math.sin(p.ph)));x.fillStyle=`rgba(${p.col},${al*.8})`;x.beginPath();x.ellipse(0,0,p.s,p.s*.6,0,0,6.28);x.fill();x.restore()}if(p.y>H+30)Object.assign(p,mk('joy',false))}
   else if(mode==='fin'){const r=p.r*(.7+tw*.6);x.fillStyle=`rgba(${p.col},${al*tw})`;x.beginPath();x.moveTo(p.x,p.y-r*3);x.lineTo(p.x+r*.5,p.y-r*.5);x.lineTo(p.x+r*3,p.y);x.lineTo(p.x+r*.5,p.y+r*.5);x.lineTo(p.x,p.y+r*3);x.lineTo(p.x-r*.5,p.y+r*.5);x.lineTo(p.x-r*3,p.y);x.lineTo(p.x-r*.5,p.y-r*.5);x.closePath();x.fill();if(p.y<-20)Object.assign(p,mk('fin',false))}
   else{x.fillStyle=`rgba(${p.col},${al*tw*(mode==='heart'?Math.min(1,beat*.7):1)})`;x.beginPath();x.arc(p.x,p.y,p.r*beat,0,6.28);x.fill();if(p.y<-20)Object.assign(p,mk(mode,false))}}}
 requestAnimationFrame(frame)})();
/* ===== ring reveal, yes, wedding ===== */
new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){o.disconnect();setTimeout(()=>{$('rb').classList.add('open');chime()},1200)}},{threshold:.5}).observe($('ring'));
const fl2=()=>{$('flash').classList.remove('go');void $('flash').offsetWidth;$('flash').classList.add('go')};
const done=()=>{$('pmsg').textContent='She said YES 💍';fl2();fire();conf();chime();navigator.vibrate&&navigator.vibrate([100,60,300]);setTimeout(()=>$('tow').style.display='inline-block',2500)};
/* ===== cinematic proposal (4 shots) ===== */
const TT=12.8;const sd=i=>{const x=Math.sin(i*127.1)*43758.5453;return x-Math.floor(x)};
const spark=(x,y,b=0,k=1)=>`<path transform="translate(${x} ${y}) scale(${k})" d="M0-10L2.4-2.4L10 0L2.4 2.4L0 10L-2.4 2.4L-10 0L-2.4-2.4Z" fill="#fff" opacity="0"><animate attributeName="opacity" values="0;1;0" dur="1.3s" begin="${b}s" repeatCount="indefinite"/></path>`;
const hb=(cx,cy,r,l)=>`<path d="M${cx-r*1.15} ${cy}Q${cx-r*1.5} ${cy+l*.6} ${cx-r} ${cy+l}L${cx+r} ${cy+l}Q${cx+r*1.5} ${cy+l*.6} ${cx+r*1.15} ${cy}Z" fill="url(#hr)"/>`;
function face3(cx,cy,r,o={}){const f=o.f,e=o.e||'o',lk=o.lk||0,s=r/30;
 const eye=x=>e==='c'?`<path d="M${x-6} 0Q${x} -7 ${x+6} 0" stroke="#1a0f0c" stroke-width="2.2" fill="none" stroke-linecap="round"/>`:`<ellipse cx="${x}" cy="-2" rx="5.4" ry="5.8" fill="#fff"/><circle cx="${x+lk}" cy="-2" r="3.5" fill="#4a2c1c"/><circle cx="${x+lk}" cy="-2" r="1.7" fill="#0a0505"/><circle cx="${x+lk+1.3}" cy="-3.4" r="1.2" fill="#fff"/>`+(f?`<path d="M${x-6.5} -3Q${x} -10 ${x+6.5} -3" stroke="#150a07" stroke-width="2" fill="none" stroke-linecap="round"/>`:'');
 return `<g transform="translate(${cx} ${cy}) rotate(${o.rot||0}) scale(${s})">`+(f?`<circle cx="-27" cy="12" r="2.6" fill="#f5d27a"/><circle cx="27" cy="12" r="2.6" fill="#f5d27a"/>`:'')+`<circle cx="-27" cy="3" r="5" fill="#e3a984"/><circle cx="27" cy="3" r="5" fill="#e3a984"/><ellipse rx="27" ry="31" fill="url(#skn)"/>`+
 (f?`<path d="M-30 -2Q-34 -38 0 -37Q34 -38 30 -2Q24 -24 5 -26Q-16 -22 -30 -2Z" fill="url(#hr)"/>`:`<path d="M-28 -4Q-34 -40 0 -39Q32 -42 28 -6Q24 -26 8 -27Q-4 -36 -20 -24Q-27 -16 -28 -4Z" fill="#2a1810"/>`)+
 `<path d="M-16 -11Q-10 -15 -4 -12M4 -12Q10 -15 16 -11" stroke="#2a1810" stroke-width="2.2" fill="none" stroke-linecap="round"/>`+eye(-10)+eye(10)+`<path d="M0 4Q-3 9 0 10" stroke="#c68a6a" stroke-width="1.5" fill="none" stroke-linecap="round"/><circle cx="-17" cy="10" r="6" fill="#ff8aa0" opacity=".38"/><circle cx="17" cy="10" r="6" fill="#ff8aa0" opacity=".38"/>`+
 (o.b?`<path d="M-26 4Q-28 32 0 37Q28 32 26 4Q20 24 0 24Q-20 24 -26 4Z" fill="#241510"/><path d="M-9 15Q0 11 9 15Q0 18 -9 15Z" fill="#241510"/><path d="M-6 21Q0 26 6 21Z" fill="#fff"/>`:`<path d="M-9 16Q0 28 9 16Q0 19 -9 16Z" fill="#fff" stroke="#b0405a" stroke-width="1.5" stroke-linejoin="round"/>`)+
 (o.t?[-10,10].map((x,i)=>`<path d="M${x} 4q-3 6 0 10q3 -4 0 -10z" fill="#cfeaff" opacity=".9"><animateTransform attributeName="transform" type="translate" values="0 0;0 24" dur="1.6s" begin="${i*.5}s" repeatCount="indefinite"/><animate attributeName="opacity" values=".9;0" dur="1.6s" begin="${i*.5}s" repeatCount="indefinite"/></path>`).join(''):'')+`</g>`}
const defsP=()=>`<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4b3f86"/><stop offset=".55" stop-color="#c77fa0"/><stop offset="1" stop-color="#ffb98a"/></linearGradient><linearGradient id="lk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f0a0a0"/><stop offset=".4" stop-color="#9a6aa6"/><stop offset="1" stop-color="#3d3166"/></linearGradient><radialGradient id="sun"><stop offset="0" stop-color="#fff2c8" stop-opacity=".95"/><stop offset=".4" stop-color="#ffc08a" stop-opacity=".5"/><stop offset="1" stop-color="#ffc08a" stop-opacity="0"/></radialGradient><radialGradient id="cg"><stop offset="0" stop-color="#ffd27a" stop-opacity=".8"/><stop offset="1" stop-color="#ffd27a" stop-opacity="0"/></radialGradient><linearGradient id="skn" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f8d3b8"/><stop offset="1" stop-color="#dba07c"/></linearGradient><linearGradient id="hr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5a3626"/><stop offset="1" stop-color="#170d09"/></linearGradient><linearGradient id="jk" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#34343f"/><stop offset="1" stop-color="#0e0e14"/></linearGradient><linearGradient id="gw" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#efc0b8"/><stop offset="1" stop-color="#b27282"/></linearGradient><filter id="bl" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="7"/></filter></defs>`;
function bgP(){let r=`<rect width="360" height="345" fill="url(#sky)"/><circle cx="180" cy="335" r="230" fill="url(#sun)"/>`;
 [[60,90,70,14],[250,60,90,16],[150,160,110,12],[310,200,70,10]].forEach(c=>r+=`<ellipse cx="${c[0]}" cy="${c[1]}" rx="${c[2]}" ry="${c[3]}" fill="#ffd0c0" opacity=".3"/>`);
 r+=`<path d="M0 338Q60 318 120 332T240 326T360 334V348H0Z" fill="#4a3d6a"/><rect y="344" width="360" height="300" fill="url(#lk)"/>`;
 for(let i=0;i<12;i++)r+=`<rect x="${60+sd(i)*200}" y="${356+i*14}" width="${40+sd(i+9)*80}" height="1.6" rx=".8" fill="#fff" opacity=".28"><animate attributeName="opacity" values=".1;.4;.1" dur="${2+i%3}s" repeatCount="indefinite"/></rect>`;
 r+=`<rect y="560" width="360" height="90" fill="#8c7a8c"/><path d="M0 560H360M0 590H360M0 620H360M90 560V590M240 560V590M40 590V620M180 590V620M300 590V620" stroke="#6a5a6c" stroke-width="1.4"/>`;
 const bz=t=>[(1-t)*(1-t)*8+2*(1-t)*t*180+t*t*352,(1-t)*(1-t)*190+2*(1-t)*t*(-40)+t*t*190];
 for(let i=0;i<60;i++){let x,y;if(i<22){x=8+sd(i)*34;y=190+i*17+sd(i+3)*10}else if(i<44){x=318+sd(i)*34;y=190+(i-22)*17+sd(i+3)*10}else{const q=bz((i-44)/15);x=q[0]+sd(i)*10-5;y=q[1]+sd(i+5)*14-4}
  const c=['#f5a3b6','#e0516f','#f7c9ac','#fff1e8','#ef7f95'][i%5];r+=`<ellipse cx="${x-6}" cy="${y+6}" rx="9" ry="5" fill="#3f8f45" transform="rotate(${sd(i)*80-40} ${x} ${y})"/><circle cx="${x}" cy="${y}" r="${9+sd(i+7)*5}" fill="${c}"/><circle cx="${x+1}" cy="${y}" r="4" fill="#00000022"/><path d="M${x-4} ${y}q4 -5 8 0" stroke="#00000030" fill="none"/>`}
 for(let i=0;i<22;i++){const q=bz(i/21),y=q[1]+18+Math.sin(i*1.3)*4;r+=`<circle cx="${q[0]}" cy="${y}" r="7" fill="url(#cg)"/><circle cx="${q[0]}" cy="${y}" r="2.6" fill="#fff3b0"><animate attributeName="opacity" values="1;.25;1" dur="${1.4+i%4*.4}s" repeatCount="indefinite"/></circle>`}
 [[30,585],[58,598],[322,588],[298,600]].forEach((c,i)=>r+=`<circle cx="${c[0]}" cy="${c[1]-14}" r="26" fill="url(#cg)"/><rect x="${c[0]-6}" y="${c[1]-12}" width="12" height="24" rx="3" fill="#fbeedd"/><path d="M${c[0]} ${c[1]-28}Q${c[0]-6} ${c[1]-18} ${c[0]} ${c[1]-13}Q${c[0]+6} ${c[1]-18} ${c[0]} ${c[1]-28}Z" fill="#ffd166"><animate attributeName="opacity" values="1;.6;1" dur="${.5+i*.13}s" repeatCount="indefinite"/></path>`);
 for(let i=0;i<26;i++){const x=20+sd(i+40)*320,y=566+sd(i+50)*70;r+=`<ellipse cx="${x}" cy="${y}" rx="5" ry="3" fill="#d9304f" opacity=".85" transform="rotate(${sd(i)*180} ${x} ${y})"/>`}
 return r}
const useBg=b=>b?`<g filter="url(#bl)"><use href="#bg"/></g><rect width="360" height="640" fill="#1a0820" opacity=".25"/>`:`<use href="#bg"/>`;
function P1(){const SKc='#dba07c',man=`<path d="M72 492Q60 540 44 548L10 552L12 562L58 562Q84 556 96 500Z" fill="#101018"/><path d="M80 470Q120 470 152 492L158 556L136 558L130 516Q100 512 76 508Z" fill="url(#jk)"/><path d="M130 552Q150 548 176 556Q180 566 160 568L130 568Z" fill="#07070b"/><rect x="90" y="340" width="18" height="30" rx="8" fill="#d9a07c"/><path d="M60 372Q54 440 66 494L120 496Q130 436 128 380Q96 358 60 372Z" fill="url(#jk)"/><path d="M92 366H106L104 420L96 442L90 420Z" fill="#f4f4f4"/><path d="M92 366L80 420L96 442ZM106 366L118 420L100 442Z" fill="#0b0b10"/><path d="M99 368l-9-5v10zM99 368l9-5v10z" fill="#0a0a0f"/>`+face3(100,320,30,{b:1,lk:2,rot:4})+
 `<path d="M64 384Q48 444 78 472L128 494" stroke="#1d1d26" stroke-width="22" stroke-linecap="round" fill="none"/><circle cx="132" cy="494" r="9" fill="${SKc}"/><path d="M124 388Q146 432 174 424" stroke="#1d1d26" stroke-width="20" stroke-linecap="round" fill="none"/><circle cx="180" cy="422" r="9" fill="${SKc}"/><rect x="172" y="412" width="30" height="18" rx="3" fill="#15151c"/><path d="M172 412L168 390L204 384L202 412Z" fill="#26262e"/><ellipse cx="188" cy="410" rx="8" ry="4" fill="none" stroke="#f5d27a" stroke-width="2.6"/><path d="M188 400l5 6-5 5-5-5z" fill="#d9f2ff" stroke="#fff"/>`+spark(188,396,0,1.2)+spark(200,404,.6,.8);
 const wom=hb(270,300,30,150)+`<path d="M232 376Q226 440 222 470Q190 560 172 640L368 640Q350 540 318 470Q310 440 306 376Z" fill="url(#gw)"/><path d="M250 470Q236 560 220 640M270 470V640M290 470Q304 560 320 640" stroke="#fff" stroke-opacity=".22" stroke-width="3" fill="none"/><path d="M224 458Q268 470 314 458" stroke="#f3d3cc" stroke-width="7" fill="none"/><rect x="261" y="322" width="18" height="36" rx="8" fill="#e0a886"/><path d="M228 388Q232 358 256 354L284 354Q308 358 312 388Q270 374 228 388Z" fill="url(#skn)"/><path d="M240 372Q270 392 300 372" stroke="#fff" stroke-width="3.4" stroke-dasharray="1 6" stroke-linecap="round" fill="none"/>`+face3(270,298,30,{f:1,t:1,lk:-2,rot:-4})+arm(238,388,[[262,334],[262,334],[262,334],[258,376]],'#e8b794',3.6)+arm(302,388,[[280,334],[280,334],[280,334],[284,376]],'#e8b794',3.6);
 return useBg(0)+man+wom}
function P2(){return useBg(1)+hb(190,300,118,500)+`<path d="M-20 580Q190 480 380 580V660H-20Z" fill="url(#gw)"/><rect x="146" y="380" width="88" height="140" rx="30" fill="#e0a886"/><path d="M10 640Q50 500 150 482H230Q330 500 370 640Z" fill="url(#skn)"/><path d="M96 508Q190 610 284 508" stroke="#fff" stroke-width="8" stroke-dasharray="2 14" stroke-linecap="round" fill="none"/><path d="M190 566l12 -14 -12 -14 -12 14z" fill="#d9f2ff" stroke="#fff" stroke-width="2"/>`+face3(190,300,118,{f:1,t:1,lk:-3,rot:-3})+spark(300,200,.2,1.6)+spark(70,260,1,1.2)}
function P3(){const H='#ecbb98',cap=(a,b,c,d,w)=>`<path d="M${a} ${b}L${c} ${d}" stroke="${H}" stroke-width="${w}" stroke-linecap="round"/>`;
 const her=`<g transform="translate(215 540) rotate(-6) scale(1.35)"><path d="M-44 20Q-52 -40 -34 -80H34Q54 -40 46 20Q40 56 0 60Q-40 56 -44 20Z" fill="${H}"/>`+[[-30,-70,-34,-132],[-10,-78,-12,-158],[12,-76,14,-148],[32,-68,38,-118]].map(f=>cap(f[0],f[1],f[2],f[3],20)+`<ellipse cx="${f[2]}" cy="${f[3]-6}" rx="7" ry="9" fill="#f8d6cc"/>`).join('')+cap(-40,10,-80,-38,22)+`<ellipse cx="-82" cy="-44" rx="7" ry="9" fill="#f8d6cc"/><path d="M-30 -70Q0 -60 34 -68" stroke="#d79f7b" opacity=".6" fill="none" stroke-width="3"/>`;
 const hnd=`<path d="M-260 80L-34 14" stroke="#15151c" stroke-width="54" stroke-linecap="round"/><path d="M-66 24L-50 18" stroke="#f4f4f4" stroke-width="48"/><circle cx="-56" cy="18" r="3" fill="#f5d27a"/><ellipse cx="-24" cy="8" rx="26" ry="20" fill="${H}" transform="rotate(-12 -24 8)"/><path d="M-20 -4L-3 -8" stroke="${H}" stroke-width="11" stroke-linecap="round"/><path d="M-22 22L-4 8" stroke="${H}" stroke-width="12" stroke-linecap="round"/>`;
 const rg=`<ellipse rx="11" ry="5" fill="none" stroke="#f5d27a" stroke-width="4.5"/><path d="M0 -14l6 6-6 6-6-6z" fill="#d9f2ff" stroke="#fff" stroke-width="1.4"/>`;
 const f=(x1)=>[[-130,-170,1,1],[x1,-152,1,1],[x1,-152,1,1],[x1,-124,1,1],[x1,-100,1,1],[x1,-100,1,1]],hp=f(13).concat([[-150,-120,1,1]]),rp=f(13).concat([[13,-100,1,1]]);
 return useBg(1)+`<circle cx="60" cy="150" r="40" fill="#ffd9a0" opacity=".35" filter="url(#bl)"/><circle cx="310" cy="90" r="30" fill="#ffb0c0" opacity=".35" filter="url(#bl)"/>`+her+mov(hnd,hp,3.4,5.8)+mov(rg,rp,3.4,5.8)+spark(13,-110,7.4,1.3)+spark(26,-96,7.7,.8)+spark(0,-96,8,.8)+`</g>`}
function P4(){const mn=`<path d="M84 640L88 392Q92 366 124 360L156 360Q188 366 192 392L196 640Z" fill="url(#jk)"/><rect x="131" y="330" width="18" height="34" rx="8" fill="#d9a07c"/><path d="M128 362H152L148 420L140 440L132 420Z" fill="#f4f4f4"/><path d="M128 362L116 420L140 440ZM152 362L164 420L140 440Z" fill="#0b0b10"/><path d="M140 366l-9-5v10zM140 366l9-5v10z" fill="#0a0a0f"/>`+face3(144,300,30,{b:1,e:'c',rot:10});
 const wm=hb(206,312,30,170)+`<path d="M168 640L172 404Q176 378 200 372H232Q256 378 260 404L268 640Z" fill="url(#gw)"/><rect x="197" y="338" width="18" height="34" rx="8" fill="#e0a886"/><path d="M172 404Q176 376 200 372H232Q256 376 260 404Q216 392 172 404Z" fill="url(#skn)"/>`+face3(206,312,30,{f:1,e:'c',t:1,rot:-10});
 const ar=`<path d="M176 408Q148 388 122 356" stroke="#e8b794" stroke-width="14" stroke-linecap="round" fill="none"/><circle cx="120" cy="354" r="8" fill="#e8b794"/><path d="M256 408Q242 444 198 452" stroke="#e8b794" stroke-width="14" stroke-linecap="round" fill="none"/><circle cx="194" cy="452" r="8" fill="#e8b794"/><path d="M188 396Q214 474 262 456" stroke="#1d1d26" stroke-width="22" stroke-linecap="round" fill="none"/><circle cx="266" cy="454" r="9" fill="#dba07c"/>`;
 return useBg(0)+`<circle cx="180" cy="330" r="150" fill="url(#sun)" opacity=".6"/>`+mn+wm+ar}
const shot=(inner,a,b,last)=>{const k=[[0,a?0:1]];if(a)k.push([a/TT,0],[(a+.5)/TT,1]);if(!last)k.push([(b-.5)/TT,1],[b/TT,0]);k.push([1,last?1:0]);return `<g opacity="${k[0][1]}"><animate attributeName="opacity" keyTimes="${k.map(x=>x[0]).join(';')}" values="${k.map(x=>x[1]).join(';')}" dur="${TT}s" begin="0s" fill="freeze"/>${inner}</g>`};
const cam=(i,cx,cy,s0,s1,d,b)=>`<g transform="translate(${cx} ${cy})"><g><animateTransform attributeName="transform" type="scale" values="${s0};${s1}" begin="${b}s" dur="${d}s" fill="freeze"/><g transform="translate(${-cx} ${-cy})">${i}</g></g></g>`;
const sceneProp=()=>defsP()+`<defs><g id="bg">${bgP()}</g></defs>`+shot(cam(P1(),180,330,1,1.08,4,0),0,4.1)+shot(cam(P2(),190,300,1,1.12,3.3,3.5),3.5,6.3)+shot(cam(P3(),215,400,1,1.1,3.4,5.8),5.8,9.3)+shot(cam(P4(),175,340,1,1.12,4,8.8),8.8,TT,1);
function petals(o){const c=o.querySelector('#pc'),x=c.getContext('2d');c.width=innerWidth;c.height=innerHeight;const Q=[],t0=Date.now();
 (function f(){if(!document.body.contains(o))return;const t=(Date.now()-t0)/1e3,hv=o.vid?o.hv:t>8.6;x.clearRect(0,0,c.width,c.height);
  if(t>.4&&Math.random()<(hv?1:.2))for(let k=0;k<(hv?3:1);k++)Q.push({x:Math.random()*c.width,y:-20,vx:(Math.random()-.5)*1.2,vy:1+Math.random()*1.6,a:Math.random()*6,va:(Math.random()-.5)*.08,s:6+Math.random()*9,c:['#e63950','#f06a85','#ff9ab0','#c1121f'][Math.floor(Math.random()*4)]});
  Q.forEach(p=>{p.x+=p.vx+Math.sin(p.a)*.6;p.y+=p.vy;p.a+=p.va;x.save();x.translate(p.x,p.y);x.rotate(p.a);x.scale(1,.6+.4*Math.abs(Math.sin(p.a*2)));x.fillStyle=p.c;x.beginPath();x.ellipse(0,0,p.s,p.s*.6,0,0,6.3);x.fill();x.restore()});
  for(let i=Q.length-1;i>=0;i--)if(Q[i].y>c.height+20)Q.splice(i,1);requestAnimationFrame(f)})()}
function cartoonProp(cb){const o=document.createElement('div');o.id='pv';o.innerHTML=`<svg viewBox="0 0 360 640" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">${sceneProp()}</svg><canvas id="pc"></canvas><button id="pskip">Skip ⏭</button>`;document.body.appendChild(o);petals(o);
 let d=0;const fin=()=>{if(d)return;d=1;o.classList.add('out');setTimeout(()=>{o.remove();cb&&cb()},900)};$('pskip').onclick=fin;
 [400,1800].forEach(t=>setTimeout(lubdub,t));setTimeout(chime,3700);setTimeout(chime,7500);setTimeout(()=>{chime();shower()},9000);setTimeout(fin,TT*1000+300)}
const crack=()=>{try{const c=ac(),b=c.createBuffer(1,c.sampleRate*.3,c.sampleRate),d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/d.length,3);const r=c.createBufferSource(),g=c.createGain();g.gain.value=.5;r.buffer=b;r.connect(g);g.connect(c.destination);r.start()}catch(e){}};
const capT=[{p:.12,b:'Mudichu 1 · Anbu ❤️',s:'Indha mudichu en anbu. Epavum, ennaikum unna thaan.'},{p:.42,b:'Mudichu 2 · Nambikkai 🤝',s:'Nee yaarunnu theriyum. Ennaikum unna nambuven, nee ennai nambu.'},{p:.72,b:'Mudichu 3 · Vaazhkai 💍',s:'Ellaa sirippum, ellaa kashtamum, indha vaazhkai muzhukka nee kooda.'}];
const HT={t:(o,v)=>{o.insertAdjacentHTML('beforeend','<canvas id="pc"></canvas><div class="tcap" id="tc"></div>');petals(o);let k=0;const tc=o.querySelector('#tc');
 v.ontimeupdate=()=>{const d=v.duration||10;if(k<3&&v.currentTime>=capT[k].p*d){const c=capT[k++];tc.classList.remove('on');setTimeout(()=>{tc.innerHTML=`<b>${c.b}</b><span>${c.s}</span>`;tc.classList.add('on')},300);drum();navigator.vibrate&&navigator.vibrate([200,80,200]);o.hv=1;setTimeout(()=>o.hv=0,700)}if(k>=3&&v.currentTime>=.9*d)tc.classList.remove('on')}}};
const HK={k:(o,v)=>{o.insertAdjacentHTML('beforeend','<div class="vgx"></div><canvas id="pc"></canvas><div class="kbig" id="kb"></div>');o.hv=1;petals(o);const L=[[.2,'Ten years…'],[1.6,'Still choosing you ❤️'],[3.2,'Happy Anniversary, Sandhiya 💍']];let n=0;const kb=o.querySelector('#kb');
 const hI=setInterval(()=>{const e=document.createElement('i');e.className='hf2';e.textContent=['❤','💖','✨','💗'][Math.floor(Math.random()*4)];e.style.cssText=`left:${Math.random()*100}%;color:#ff4d6d;font-size:${14+Math.random()*20}px;animation-duration:${3+Math.random()*3}s`;o.appendChild(e);setTimeout(()=>e.remove(),6500)},200);
 [0,1500,3000].forEach(t=>setTimeout(fire,t));[150,1700,2000,3200,3500,4200].forEach(t=>setTimeout(crack,t));setTimeout(()=>clearInterval(hI),7000);
 v.ontimeupdate=()=>{while(n<L.length&&v.currentTime>=L[n][0]){const t=L[n++][1];kb.classList.remove('on');setTimeout(()=>{kb.textContent=t;kb.classList.add('on')},200)}};chime();navigator.vibrate&&navigator.vibrate([150,60,150,60,400]);fl2()}};
function playSeq(keys,cb,fb,H){const was=A.filter(a=>!a.paused);was.forEach(a=>a.pause());const o=document.createElement('div');o.id='pv';o.vid=1;o.innerHTML='<video playsinline></video><button id="pskip">Skip ⏭</button>';document.body.appendChild(o);const v=o.querySelector('video');v.style.transition='opacity .5s';let i=0,end=0;
 const finish=()=>{if(end)return;end=1;o.classList.add('out');was.forEach(a=>a.play().catch(()=>{}));setTimeout(()=>{o.remove();cb()},900)};
 const load=()=>{const key=keys[i++];v.poster=(window.VIDP||{})[key]||'';v.src=VID[key];v.style.opacity=1;const pr=v.play();pr&&pr.catch(()=>{v.muted=true;v.play().catch(()=>v.onerror())});H&&H[key]&&H[key](o,v)};
 const next=()=>{if(i>=keys.length)return finish();if(i===0)load();else{v.style.opacity=0;setTimeout(load,450)}};
 v.onended=next;$('pskip').onclick=next;
 v.onerror=()=>{if(i===1&&fb&&!end){end=1;o.remove();was.forEach(a=>a.play().catch(()=>{}));fb()}else next()};next()}
let acc=0;$('yes').addEventListener('click',()=>{if(acc)return;acc=1;warmVid(['m','l']);document.querySelector('#ring .yn').style.display='none';$('rb').style.display='none';chime();fl2();navigator.vibrate&&navigator.vibrate([100,60,100]);playSeq(['p','b'],done,()=>cartoonProp(done))});
$('tow').onclick=()=>{$('tow').style.display='none';warmVid(['t','k']);playSeq(['m','l'],()=>{$('wed').style.display='flex';$('malS').style.display='none';$('wed').scrollIntoView({behavior:'smooth'});$('mmsg').textContent='Maalai maathitaanga! Nalla jodi 💐';shower();fire();chime();$('nxt').style.display='inline-block'},null)};
$('nxt').onclick=()=>{$('nxt').style.display='none';$('thl').style.display='block';$('thaS').innerHTML=`<div class="thc2"><img src="${IMG}" alt=""></div>`+capT.map((c,i)=>`<div class="kr2" style="animation-delay:${1+i*1.2}s"><b>${c.b}</b><span>${c.s}</span></div>`).join('');$('thl').scrollIntoView({behavior:'smooth',block:'center'});chime();setTimeout(()=>$('knb').style.display='inline-block',4600)};
const showEnd=()=>{$('endcard').style.display='block';$('endcard').scrollIntoView({behavior:'smooth',block:'center'});fire();conf();chime();shower()};
$('knb').onclick=()=>{$('knb').style.display='none';playSeq(['t'],()=>{$('kmsg').textContent='Kettimelam! Kettimelam! 🥁 Nee ippo en Mrs. ❤️';fire();conf();shower();drum();crack();fl2();setTimeout(()=>playSeq(['k'],showEnd,null,HK),3200)},null,HT)};
$('rep').onclick=()=>scrollTo({top:0,behavior:'smooth'});

/* gate */
function tryOpen(){if($('pw').value.trim()===PASS){$('lock').classList.add('hide');setTimeout(()=>{$('lock').style.display='none';$('begin').style.display='flex'},1000)}
 else{$('err').textContent=ROAST[Math.floor(Math.random()*ROAST.length)];const p=$('pw');p.classList.remove('shake');void p.offsetWidth;p.classList.add('shake')}}
$('open').onclick=tryOpen;$('pw').addEventListener('keydown',e=>{if(e.key==='Enter')tryOpen()});
$('go').onclick=()=>{
 try{const context=ac();if(context&&context.state==='suspended')context.resume().catch(()=>{});}catch(error){console.warn('WebAudio unavailable; continuing without sound.',error)}
 unlock();$('begin').classList.add('hide');document.body.classList.remove('locked');
 setTimeout(()=>{$('begin').style.display='none';coldOpen(type)},900);particles()
};
function type(){let i=0;const iv=setInterval(()=>{$('typed').textContent=INTRO_TEXT.slice(0,++i);if(i>=INTRO_TEXT.length){clearInterval(iv);$('isub').classList.add('on');setTimeout(()=>$('cue').classList.add('on'),800)}},85)}
function particles(){const f=$('fx');for(let n=0;n<26;n++){const e=document.createElement('i'),h=n%2;e.className=h?'h':'d';e.textContent=h?'♥':'●';e.style.left=Math.random()*100+'%';if(h)e.style.fontSize=(10+Math.random()*16)+'px';e.style.setProperty('--dx',(Math.random()*60-30)+'px');e.style.animationDuration=(9+Math.random()*10)+'s';e.style.animationDelay=(Math.random()*10)+'s';f.appendChild(e)}}

/* music: folder based. songs/<scene>/*.mp3 -> data/songs.js. Empty scene = default music keeps playing */
const A=[new Audio(),new Audio()];A.forEach(a=>{a.volume=0;a.preload='auto'});let ai=0,list=null,li=0,muted=false,started=false,curScene='',nowT;const SGN=window.SONGS||{},VOL=.7;
const tname=p=>decodeURIComponent(p.split('/').pop()).replace(/\.[^.]+$/,'').replace(/[_-]+/g,' ');
function unlock(){A.forEach(a=>{a.play().catch(()=>{});a.pause()});started=true;setScene(curScene||'default')}
function playTrack(){const p=list[li],o=A[ai],n=A[ai^1];ai^=1;n.loop=list.length===1;n.onended=()=>{if(list.length>1){li=(li+1)%list.length;playTrack()}};n.src=p;n.currentTime=0;n.volume=0;if(!muted)n.play().catch(()=>{});
 const mn=document.getElementById('mnow');if(mn){mn.textContent='♪ '+tname(p);mn.classList.add('show');clearTimeout(nowT);nowT=setTimeout(()=>mn.classList.remove('show'),4500)}
 let t=0;const iv=setInterval(()=>{t+=.05;n.volume=Math.min(VOL,t*VOL);o.volume=Math.max(0,VOL*(1-t));if(t>=1){clearInterval(iv);o.pause()}},100)}
function setScene(k){curScene=k;if(!started)return;const l=SGN[k]&&SGN[k].length?SGN[k]:(SGN.default||[]);if(!l.length||l===list)return;list=l;li=0;playTrack()}
/* reveal, mood, rail */
const rail=$('rail');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const t=e.target;t.classList.add('in');
 if(t.dataset.y){rail.textContent=t.dataset.y;rail.classList.add('on')}}),{threshold:.4});
document.querySelectorAll('.memory,#twist,#sorry,#finale,.fade').forEach(el=>io.observe(el));
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){document.body.classList.add('love');navigator.vibrate&&navigator.vibrate([60,60,60])}}),{threshold:.6}).observe($('twist'));
new IntersectionObserver(es=>es.forEach(e=>{rail.style.color=e.isIntersecting?'#E63950':''}),{threshold:.05}).observe($('love'));
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!e.target.d){e.target.d=1;const n=+e.target.dataset.n;let v=0;const iv=setInterval(()=>{v+=Math.ceil(n/60);if(v>=n){v=n;clearInterval(iv)}e.target.textContent=v.toLocaleString()},30)}}),{threshold:.6});
document.querySelectorAll('[data-n]').forEach(el=>so.observe(el));
document.querySelectorAll('.env').forEach(b=>b.onclick=()=>b.classList.toggle('open'));

/* scroll: bar + parallax */
let tick=false;addEventListener('scroll',()=>{if(tick)return;tick=true;requestAnimationFrame(()=>{const h=document.documentElement;$('bar').style.width=(scrollY/(h.scrollHeight-innerHeight)*100)+'%';
 document.querySelectorAll('.memory').forEach(m=>{const y=m.querySelector('.year');if(!y)return;const r=m.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight)y.style.transform=`translateY(${(r.top+r.height/2-innerHeight/2)*-.18}px)`});tick=false})});

/* tap hearts */
function burst(x,y,ch='♥'){for(let i=0;i<12;i++){const b=document.createElement('span');b.className='burst';b.textContent=ch;b.style.left=x+'px';b.style.top=y+'px';const a=Math.random()*6.28,d=50+Math.random()*80;b.style.setProperty('--x',Math.cos(a)*d+'px');b.style.setProperty('--y',Math.sin(a)*d-40+'px');b.style.fontSize=(10+Math.random()*14)+'px';document.body.appendChild(b);setTimeout(()=>b.remove(),1300)}}
document.addEventListener('click',e=>{if(e.target.closest('.polaroid'))burst(e.clientX,e.clientY)});

/* confetti */
const cv=$('conf'),cx=cv.getContext('2d');let ps=[];
function conf(){cv.width=innerWidth;cv.height=innerHeight;const c=['#E63950','#F4B6C2','#E8B4A0','#fff','#8B0A1F'];
 for(let i=0;i<160;i++)ps.push({x:innerWidth/2,y:innerHeight*.6,vx:(Math.random()-.5)*14,vy:-Math.random()*16-4,s:4+Math.random()*6,c:c[i%5],r:Math.random()*6});run()}
let on=false;function run(){if(on)return;on=true;(function f(){cx.clearRect(0,0,cv.width,cv.height);ps.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.3;p.r+=.2;cx.fillStyle=p.c;cx.save();cx.translate(p.x,p.y);cx.rotate(p.r);cx.fillRect(-p.s/2,-p.s/2,p.s,p.s*.6);cx.restore()});ps=ps.filter(p=>p.y<cv.height+20);if(ps.length)requestAnimationFrame(f);else{on=false;cx.clearRect(0,0,cv.width,cv.height)}})()}
document.addEventListener('click',e=>{if(e.target.id==='say'){conf();$('reply').textContent="I love you too, da 💗";navigator.vibrate&&navigator.vibrate(200)}
 if(e.target.id==='voice'){const v=new Audio(FINALE.voice);A.forEach(a=>a.volume=.15);v.play();v.onended=()=>A.forEach(a=>a.volume=1)}});

const cb=$('chatbox');let cd=0;
new IntersectionObserver(es=>{if(es[0].isIntersecting&&!cd){cd=1;let i=0;(function nx(){if(i>=CHAT.lines.length){for(let k=0;k<8;k++)setTimeout(()=>burst(innerWidth*Math.random(),innerHeight*.7,'😂'),k*150);return}
 const [w,t]=CHAT.lines[i++],d=document.createElement('div');d.className='b '+w+' typing';d.textContent='•••';cb.appendChild(d);
 setTimeout(()=>{d.className='b '+w;d.textContent=t;setTimeout(nx,900)},900)})()}},{threshold:.5}).observe($('chat'));
document.querySelectorAll('.box').forEach(b=>b.onclick=e=>{b.parentNode.classList.add('open');['🎉','✨','🎊'].forEach((c,i)=>setTimeout(()=>burst(e.clientX,e.clientY,c),i*200));navigator.vibrate&&navigator.vibrate(80)});
const hd=$('hold');let hp=0,ht=null,hdn=0;
function hs(){clearInterval(ht);ht=setInterval(()=>{hp=Math.min(1,hp+.02);hd.style.setProperty('--p',hp);if(hp>=1&&!hdn){hdn=1;clearInterval(ht);conf();$('hmsg').textContent="Thank you, Sandhiya ❤️";navigator.vibrate&&navigator.vibrate([100,50,100])}},50)}
function he(){clearInterval(ht);if(!hdn)ht=setInterval(()=>{hp=Math.max(0,hp-.03);hd.style.setProperty('--p',hp);if(hp<=0)clearInterval(ht)},50)}
hd.addEventListener('pointerdown',e=>{e.preventDefault();hs()});['pointerup','pointerleave','pointercancel'].forEach(t=>hd.addEventListener(t,he));
const no=$('no');let ny=0;const nm=["No","Are you sure? 🥺","Think again 😢","Pleaseee 🥹","Last chance 😭"];
function mv(e){e.preventDefault();no.style.position='fixed';no.style.left=(10+Math.random()*(innerWidth-120))+'px';no.style.top=(10+Math.random()*(innerHeight-70))+'px';no.textContent=nm[Math.min(++ny,4)];$('yes').style.transform=`scale(${1+ny*.15})`}
['pointerenter','pointerdown','click'].forEach(t=>no.addEventListener(t,mv));
$('yes').addEventListener('click',()=>{no.style.display='none'});


/* Mobile browser Back: close an open viewer first, otherwise keep the experience open. */
(function keepExperienceOpenOnBack(){
  if(!window.history || !history.pushState || !window.matchMedia('(max-width: 767px), (pointer: coarse)').matches) return;
  const addBackEntry=()=>{ try{ history.pushState({sandhiyaStay:true},'',location.href); }catch(e){} };
  function closeTopLayer(){
    const video=document.getElementById('pv');
    if(video){ const skip=video.querySelector('#pskip'); if(skip)skip.click(); else video.remove(); return true; }
    const cold=document.getElementById('cold');
    if(cold){ const skip=cold.querySelector('#cskip'); if(skip)skip.click(); else cold.remove(); return true; }
    const slide=document.getElementById('ssh');
    if(slide && slide.classList.contains('on')){ if(typeof ssStop==='function')ssStop(); else slide.classList.remove('on'); return true; }
    const lightbox=document.getElementById('jlb');
    if(lightbox && lightbox.classList.contains('on')){ lightbox.className=''; return true; }
    const gallery=document.getElementById('msh');
    if(gallery && gallery.classList.contains('on')){ gallery.classList.remove('on'); return true; }
    return false;
  }
  addBackEntry();
  window.addEventListener('popstate',()=>{
    closeTopLayer();
    addBackEntry();
  });
})();
