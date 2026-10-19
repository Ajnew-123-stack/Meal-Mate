(()=>{
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches,clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));
const hero=$('.mm-hero'),hin=$('.mm-hero-in'),story=$('.mm-story'),chs=$$('.ch'),dots=$$('.dots i'),arc=$('.ring .v'),num=$('#bignum');
let cur=-1,val=0,raf;
function tween(to){cancelAnimationFrame(raf);const from=val,t0=performance.now();const step=t=>{const k=clamp((t-t0)/700);val=from+(to-from)*(1-Math.pow(1-k,3));num.textContent=Math.round(val).toLocaleString('en-IN');if(k<1)raf=requestAnimationFrame(step)};raf=requestAnimationFrame(step)}
function setCh(i){if(i===cur)return;cur=i;chs.forEach((c,j)=>c.classList.toggle('on',j===i));dots.forEach((d,j)=>d.classList.toggle('on',j===i));$('#numunit').textContent=chs[i].dataset.unit;const n=+chs[i].dataset.n;if(rm){val=n;num.textContent=n.toLocaleString('en-IN')}else tween(n)}
function frame(){const vh=innerHeight;let r=hero.getBoundingClientRect(),p=clamp(-r.top/(r.height-vh));
 if(!rm){hin.style.transform=`scale(${1-.1*p})`;hin.style.opacity=1-.9*clamp((p-.4)/.6);hin.style.borderRadius=(28+p*22)+'px'}
 r=story.getBoundingClientRect();p=clamp(-r.top/(r.height-vh));arc.style.strokeDashoffset=565.5*(1-(rm?1:p));setCh(Math.min(2,Math.floor(p*3)))}
let tick=false;addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(()=>{frame();tick=false})}},{passive:true});addEventListener('resize',frame);frame();

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});
$$('.mm-why .c,.app-head,#app .card,#app .mealshowcase').forEach((el,i)=>{el.classList.add('rv');if(el.matches('.c'))el.style.setProperty('--d',(i*.12)+'s');io.observe(el)});

const iso=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const now=new Date(),td=iso(now),di=(now.getDay()+6)%7,h=now.getHours(),mi=h<10?0:h<15?1:h<18?2:3;
if(load('habitday','')!==td){save('habitday',td);save('habits',[]);$$('#habitlist input').forEach(x=>x.checked=false);updateHabits()}
const streak=()=>{const done=new Set(load('done',[]));let d=new Date(),n=0;if(!done.has(iso(d)))d.setDate(d.getDate()-1);while(done.has(iso(d))){n++;d.setDate(d.getDate()-1)}return n};
const toastEl=document.createElement('div');toastEl.className='toast';document.body.appendChild(toastEl);
const toast=t=>{toastEl.textContent=t;toastEl.classList.add('show');setTimeout(()=>toastEl.classList.remove('show'),2600)};
const card=document.createElement('div');card.className='today';$('#meals').prepend(card);
function paint(){const m=days[di].meals[mi],n=$$('#habitlist input:checked').length,s=streak();
 card.innerHTML=`<div class="tl"><span>Up next, ${days[di].name}</span>${s?`<b>🔥 ${s}-day streak</b>`:''}</div><h3>${m[1]}</h3><p>${m[2]}</p><div class="chips"><span class="chip">${m[3]}</span></div><div class="row"><span>${n===5?'All 5 habits done today':(5-n)+' of 5 habits to go'}</span><button class="btn lime" id="seemenu">See menu</button></div>`;
 $('#seemenu').onclick=()=>$('#daystrip').scrollIntoView({behavior:'smooth',block:'center'})}
function sync(){const n=$$('#habitlist input:checked').length,d=new Set(load('done',[]));n===5?d.add(td):d.delete(td);save('done',[...d]);paint();return n}
$$('#habitlist input').forEach(x=>x.addEventListener('change',()=>{if(sync()===5)toast('Day complete · '+streak()+'-day streak')}));
$('#resetday').addEventListener('click',sync);
$(`[data-day="${di}"]`).click();paint();
})();
