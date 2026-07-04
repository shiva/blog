/* hugo-duality — theme toggle + product/hacker mode switch (all pages).
   Mode flips the palette site-wide; the copy swap (tag/h1/lede/flip)
   only runs on pages that render those elements (the homepage). */

/* ---------- THEME (all pages) ---------- */
const tbtn=document.getElementById('toggle');
const tstates=['auto','dark','light']; let theme='auto';
function isDark(){if(theme==='dark')return true;if(theme==='light')return false;return matchMedia('(prefers-color-scheme:dark)').matches;}
function renderTheme(){document.body.classList.remove('dark','light');if(theme!=='auto')document.body.classList.add(theme);if(tbtn)tbtn.textContent=isDark()?'☾':'☀';}
try{const s=localStorage.getItem('theme');if(s&&tstates.includes(s))theme=s;}catch(e){}
if(tbtn)tbtn.addEventListener('click',()=>{theme=tstates[(tstates.indexOf(theme)+1)%tstates.length];try{localStorage.setItem('theme',theme);}catch(e){}renderTheme();});
matchMedia('(prefers-color-scheme:dark)').addEventListener('change',renderTheme);
renderTheme();

/* ---------- MODE (all pages) ---------- */
const sw=document.getElementById('switch');
let mode='product';
try{const m=localStorage.getItem('mode');if(m==='hacker'||m==='product')mode=m;}catch(e){}

const h1=document.getElementById('h1'), tag=document.getElementById('tag'), flip=document.getElementById('flip');
let COPY=null;
const copyEl=document.getElementById('duality-copy');
if(copyEl){try{COPY=JSON.parse(copyEl.textContent);}catch(e){}}
const reduceMotion=matchMedia('(prefers-reduced-motion:reduce)').matches;
let typer;
function typeH1(html){
  clearTimeout(typer);
  // strip tags to type plain, then restore html at end for the dot/cursor
  const tmp=document.createElement('div');tmp.innerHTML=html;
  const text=tmp.textContent; let i=0;
  h1.innerHTML='';
  const cur=document.createElement('span');cur.className='cursor';cur.innerHTML='&nbsp;';
  h1.appendChild(document.createTextNode(''));h1.appendChild(cur);
  (function step(){
    if(i<=text.length){
      h1.childNodes[0].nodeValue=text.slice(0,i);
      i++; typer=setTimeout(step,26);
    } else { h1.innerHTML=html; }
  })();
}
function renderMode(animate){
  document.body.classList.toggle('hacker',mode==='hacker');
  if(sw){
    sw.querySelector('.prod').classList.toggle('on',mode==='product');
    sw.querySelector('.hack').classList.toggle('on',mode==='hacker');
    sw.setAttribute('aria-checked',mode==='hacker');
    sw.setAttribute('aria-label',mode==='hacker'?'Switch to Product mode':'Switch to Hacker mode');
  }
  if(COPY){
    if(tag)tag.textContent=COPY[mode].tag;
    if(flip)flip.textContent=COPY[mode].flip;
    if(h1){if(animate && !reduceMotion) typeH1(COPY[mode].h1); else h1.innerHTML=COPY[mode].h1;}
    // retrigger fade on swapped blocks
    document.querySelectorAll('.m').forEach(el=>{el.classList.remove('fade');void el.offsetWidth;el.classList.add('fade');});
  }
}
function setMode(m,animate){mode=m;try{localStorage.setItem('mode',m);}catch(e){}renderMode(animate);}
function flipMode(){setMode(mode==='product'?'hacker':'product',true);}
if(sw){
  sw.addEventListener('click',flipMode);
  sw.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();flipMode();}});
}
if(flip){
  flip.addEventListener('click',flipMode);
  flip.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();flipMode();}});
}
renderMode(false);
