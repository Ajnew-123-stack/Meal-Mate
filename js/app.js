const days=[
{name:"Monday",desc:"A balanced start to the week",note:"Cook extra jeera rice for Tuesday if convenient. Keep salad dressing separate until serving.",meals:[
["🌅","Breakfast","Oats 80 g, milk 250 ml, 1 banana, 2 eggs","~650 kcal • ~30 g protein"],
["🍚","Lunch · Jeera Rice Protein Bowl","Rice 100 g dry, chicken 180 g raw, vegetables 150 g, curd 100 g","~750 kcal • ~45 g protein"],
["🥜","Snack","Milk 250 ml, banana, peanuts 25 g","~400 kcal • ~15 g protein"],
["🥗","Dinner · Chicken Croutons Salad","Chicken 180 g raw, cabbage/carrot, potato 250 g, 2 bread slices toasted","~750 kcal • ~50 g protein"]]},
{name:"Tuesday",desc:"Fresh, crunchy and filling",note:"Use homemade yogurt dressing instead of bottled Caesar dressing to save money.",meals:[
["🍳","Breakfast","3 eggs, whole-wheat bread 3 slices, milk 250 ml","~600 kcal • ~35 g protein"],
["🥬","Lunch · Caesar-style Chicken Salad","Chicken 180 g raw, cabbage/lettuce, tomato, yogurt dressing, rice 75 g dry","~750 kcal • ~45 g protein"],
["🍌","Snack","Banana, milk 250 ml, peanuts 25 g","~400 kcal • ~15 g protein"],
["🌮","Dinner · Mexican Chicken Bowl","Chicken 180 g raw, rice 90 g dry, beans 100 g cooked, corn/vegetables","~800 kcal • ~50 g protein"]]},
{name:"Wednesday",desc:"Midweek comfort food",note:"If millet noodles cost more, use whole-wheat noodles or regular noodles with extra vegetables.",meals:[
["🥣","Breakfast","Oats 80 g, milk 250 ml, banana, peanuts 15 g","~600 kcal • ~22 g protein"],
["🍜","Lunch · Chicken Millet Noodles","Noodles 100 g dry, chicken 180 g raw, mixed vegetables 200 g","~750 kcal • ~45 g protein"],
["🥛","Snack","Curd 200 g, banana, 2 boiled eggs","~400 kcal • ~25 g protein"],
["🍗","Dinner · Grilled Chicken & Mash","Chicken 180 g raw, potatoes 300 g, vegetables 200 g, a little oil","~750 kcal • ~50 g protein"]]},
{name:"Thursday",desc:"Simple meals, solid protein",note:"Make tomato sauce in a batch. Plain curd works well as a side or dressing.",meals:[
["🍳","Breakfast","3-egg omelette, bread 3 slices, milk 250 ml","~650 kcal • ~35 g protein"],
["🍛","Lunch · Middle East Rice Bowl","Rice 90 g dry, chicken 180 g raw, chickpeas 80 g cooked, vegetables","~750 kcal • ~48 g protein"],
["🥜","Snack","Milk 250 ml, banana, peanuts 25 g","~400 kcal • ~15 g protein"],
["🍝","Dinner · Italian Chicken Pasta","Pasta 100 g dry, chicken 180 g raw, tomato sauce, vegetables","~800 kcal • ~50 g protein"]]},
{name:"Friday",desc:"A colourful bowl day",note:"Use regular curd and seasonal fruit. Berries are optional, not required for muscle gain.",meals:[
["🥣","Breakfast","Oats 80 g, milk 250 ml, banana, 2 eggs","~650 kcal • ~32 g protein"],
["🥗","Lunch · Southwest Bowl","Rice 90 g dry, chicken 180 g raw, beans 100 g cooked, vegetables","~800 kcal • ~50 g protein"],
["🍌","Snack","Curd 200 g, banana, peanuts 20 g","~350 kcal • ~12 g protein"],
["🍳","Dinner · Yogurt & Egg Plate","Curd 250 g, 3 eggs, potatoes 250 g, seasonal fruit","~700 kcal • ~35 g protein"]]},
{name:"Saturday",desc:"Kerala staples meet your goal",note:"Puttu and kadala are budget-friendly. Add eggs or milk if your breakfast portion is small.",meals:[
["🥚","Breakfast","2 eggs, puttu 1 medium serving, kadala curry 150 g","~650 kcal • ~28 g protein"],
["🥒","Lunch · Greek-style Chicken Bowl","Chicken 180 g raw, rice 90 g dry, chickpeas 80 g cooked, cucumber and tomato, curd dressing","~800 kcal • ~50 g protein"],
["🥛","Snack","Milk 250 ml, banana, peanuts 25 g","~400 kcal • ~15 g protein"],
["🍗","Dinner · Salsa Verde Chicken Bowl","Chicken 180 g raw, rice 80 g dry or potatoes 250 g, salsa, vegetables","~750 kcal • ~50 g protein"]]},
{name:"Sunday",desc:"Reset, refuel and prep",note:"Cook extra chicken or legumes if helpful, but refrigerate promptly and freeze portions you won't eat within 3–4 days.",meals:[
["🥞","Breakfast","Pancakes from oats 80 g, 2 eggs, banana; milk 250 ml","~700 kcal • ~30 g protein"],
["🍚","Lunch · Asian Chicken Bowl","Rice 100 g dry, chicken 180 g raw, vegetables 200 g, soy/ginger/garlic","~800 kcal • ~50 g protein"],
["🥜","Snack","Milk 250 ml, banana, peanuts 25 g","~400 kcal • ~15 g protein"],
["🥬","Dinner · Chicken Coleslaw","Chicken 180 g raw, cabbage/carrot, potatoes 250 g, yogurt dressing, bread 1–2 slices","~750 kcal • ~50 g protein"]]}
];
const groceries=[
{group:"Protein & dairy",items:[["Chicken","8 kg","₹2,000"],["Eggs","90 eggs","₹600"],["Milk","15 litres","₹900"],["Curd","3 kg","₹300"]]},
{group:"Carbs & staples",items:[["Oats","2.5 kg","₹400"],["Rice","8 kg","₹500"],["Bread, pasta & noodles","Combined","₹700"],["Kadala, chickpeas & beans","2 kg dry combined","₹350"]]},
{group:"Produce",items:[["Vegetables & salad ingredients","8–10 kg","₹1,200"],["Bananas & seasonal fruit","8–10 kg","₹800"],["Potatoes","4 kg","₹200"]]},
{group:"Fats & cooking basics",items:[["Peanuts","1 kg","₹180"],["Oil, spices & sauces","Combined","₹800"]]}
];
const sunday=["Portion chicken into meal-sized packs and freeze what you won't use soon","Boil a batch of chickpeas/kadala; refrigerate portions for the next few days","Wash and chop sturdy vegetables; keep greens dry","Prepare a small batch of tomato sauce or yogurt dressing","Set out oats, rice and pantry items for the first few days"];
const wednesday=["Check remaining chicken, eggs, milk and curd before shopping","Buy fresh vegetables and seasonal fruit for Thursday–Sunday","Cook a fresh batch of legumes if needed","Review grocery spend and keep within the weekly limit"];
const $=s=>document.querySelector(s);const $$=s=>[...document.querySelectorAll(s)];
let selected=0;
function load(key, fallback){try{return JSON.parse(localStorage.getItem("mm_"+key))??fallback}catch(e){return fallback}}
function save(key,val){try{localStorage.setItem("mm_"+key,JSON.stringify(val))}catch(e){}}
function renderDays(){const strip=$("#daystrip");strip.innerHTML=days.map((d,i)=>`<button class="daybtn ${i===selected?'active':''}" data-day="${i}">${d.name.slice(0,3)}<small>Day ${i+1}</small></button>`).join("");$$("[data-day]").forEach(b=>b.onclick=()=>{selected=+b.dataset.day;renderDays();renderMeal()})}
const mealPhotos=[
"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=420&q=80",
"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=420&q=80",
"https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=420&q=80",
"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=420&q=80",
"https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=420&q=80"
];
function renderMeal(){const d=days[selected];$("#daytitle").textContent=d.name;$("#daydesc").textContent=d.desc;$("#daynote").textContent=d.note;$("#mealcontent").innerHTML=d.meals.map((m,i)=>`<div class="meal"><div class="mealicon"><img src="${mealPhotos[i%mealPhotos.length]}" alt="${m[1]}" loading="lazy" onerror="this.style.display='none';this.parentElement.textContent='${m[0]}'"></div><div><h3>${m[1]}</h3><p>${m[2]}</p><div class="chips"><span class="chip">${m[3]}</span></div></div></div>`).join("");}
function setupChecks(containerId,items,key){let state=load(key,[]);const container=$(containerId);container.innerHTML=items.map((t,i)=>`<div class="prepitem"><input type="checkbox" id="${key}${i}" data-checkkey="${key}" data-index="${i}" ${state.includes(i)?'checked':''}><label for="${key}${i}"><strong>${t}</strong></label></div>`).join("");container.querySelectorAll("input").forEach(x=>x.onchange=()=>{let s=load(key,[]);s=x.checked?[...new Set([...s,+x.dataset.index])]:s.filter(i=>i!==+x.dataset.index);save(key,s)})}
function itemKey(gi,ii){return gi+"-"+ii}
function priceValue(gi,ii,defaultText){let saved=load("prices",{});if(saved[itemKey(gi,ii)]!==undefined)return Number(saved[itemKey(gi,ii)])||0;return Number(defaultText.replace(/[₹,]/g,""))||0}
function renderGrocery(){
 const root=$("#grocerylist");let bought=load("bought",[]);
 root.innerHTML=groceries.map((g,gi)=>`<div class="grocerygroup"><h3>${g.group}</h3>${g.items.map((it,ii)=>{let id=itemKey(gi,ii),isBought=bought.includes(id),price=priceValue(gi,ii,it[2]);return `<div class="checkitem ${isBought?'done':''}" style="display:block"><div class="groceryrow"><input type="checkbox" id="g${id}" data-gid="${id}" ${isBought?'checked':''}><label for="g${id}">${it[0]}<span class="qty">${it[1]} · estimate ${it[2]}</span></label><label class="tiny" for="p${id}">₹</label><input class="priceedit" aria-label="Price for ${it[0]}" type="number" min="0" step="1" id="p${id}" data-priceid="${id}" value="${price}"><button class="purchasebtn" data-logid="${id}">Add</button></div></div>`}).join("")}</div>`).join("");
 root.querySelectorAll("[data-gid]").forEach(x=>x.onchange=()=>{let a=load("bought",[]);a=x.checked?[...new Set([...a,x.dataset.gid])]:a.filter(v=>v!==x.dataset.gid);save("bought",a);x.closest(".checkitem").classList.toggle("done",x.checked);updateGrocery()});
 root.querySelectorAll("[data-priceid]").forEach(x=>x.onchange=()=>{let a=load("prices",{});a[x.dataset.priceid]=Math.max(0,Number(x.value)||0);save("prices",a);updateGrocery()});
 root.querySelectorAll("[data-logid]").forEach(x=>x.onclick=()=>{let id=x.dataset.logid,[gi,ii]=id.split("-").map(Number),it=groceries[gi].items[ii],price=Number($("#p"+id).value)||0;let hist=load("history",[]);hist.push({date:new Date().toISOString().slice(0,10),item:it[0],quantity:it[1],amount:price});save("history",hist);let a=load("bought",[]);if(!a.includes(id)){a.push(id);save("bought",a);$("#g"+id).checked=true;$("#g"+id).closest(".checkitem").classList.add("done")}updateGrocery();renderReports();x.textContent="Added";setTimeout(()=>x.textContent="Add",1000)});
 updateGrocery();
}
function updateGrocery(){
 let total=groceries.reduce((n,g)=>n+g.items.length,0),done=load("bought",[]).length;
 $("#buycount").textContent=`${done} / ${total}`;$("#groceryprogress").textContent=Math.round(done/total*100)+"%";$("#grocerybar").style.width=(done/total*100)+"%";
 let basket=0;groceries.forEach((g,gi)=>g.items.forEach((it,ii)=>basket+=priceValue(gi,ii,it[2])));
 $("#basketTotal").textContent="₹"+Math.round(basket).toLocaleString("en-IN");
 let budgetbar=$("#budget .bar div");if(budgetbar)budgetbar.style.width=Math.min(100,basket/10000*100)+"%";
}
function fmtINR(n){return "₹"+Math.round(n).toLocaleString("en-IN")}
function parseLocalDate(s){return new Date(s+"T12:00:00")}
function renderReports(){
 let hist=load("history",[]),now=new Date(),today=new Date(now.getFullYear(),now.getMonth(),now.getDate()),monday=new Date(today);monday.setDate(today.getDate()-((today.getDay()+6)%7));let sunday=new Date(monday);sunday.setDate(monday.getDate()+6);
 let monthStart=new Date(now.getFullYear(),now.getMonth(),1),monthEnd=new Date(now.getFullYear(),now.getMonth()+1,0);
 const inRange=(e,a,b)=>{let d=parseLocalDate(e.date);return d>=a&&d<=b};
 let wh=hist.filter(e=>inRange(e,monday,sunday)),mh=hist.filter(e=>inRange(e,monthStart,monthEnd));
 let ws=wh.reduce((n,e)=>n+e.amount,0),ms=mh.reduce((n,e)=>n+e.amount,0);
 $("#weekrange").textContent=monday.toLocaleDateString("en-IN",{day:"numeric",month:"short"})+" – "+sunday.toLocaleDateString("en-IN",{day:"numeric",month:"short"});
 $("#monthrange").textContent=now.toLocaleDateString("en-IN",{month:"long",year:"numeric"});
 $("#weektotal").textContent=fmtINR(ws);$("#weekcount").textContent=wh.length;
 $("#monthtotal").textContent=fmtINR(ms);$("#monthcount").textContent=mh.length;$("#monthremaining").textContent=fmtINR(Math.max(0,10000-ms));$("#monthbar").style.width=Math.min(100,ms/10000*100)+"%";
 let h=$("#history");h.innerHTML=hist.length?hist.slice().reverse().slice(0,50).map(e=>`<div class="expenseentry"><div><strong>${e.item}</strong><div class="tiny">${e.quantity} · ${e.date}</div></div><strong>${fmtINR(e.amount)}</strong></div>`).join(""):'<p class="sub">No purchases logged yet. Go to Groceries and tap Log next to an item.</p>';
}
function updateHabits(){let n=$$("#habitlist input:checked").length;$("#habitcount").textContent=n+" of 5";$("#habitbar").style.width=n*20+"%";save("habits",$$("#habitlist input").map(x=>x.checked))}
$$(".tab").forEach(b=>b.onclick=()=>{$$(".tab").forEach(t=>t.classList.toggle("active",t===b));$$(".panel").forEach(p=>p.classList.toggle("active",p.id===b.dataset.tab));document.getElementById("app").scrollIntoView({behavior:"smooth"})});
renderDays();renderMeal();setupChecks("#sundayprep",sunday,"sunday");setupChecks("#wedprep",wednesday,"wednesday");renderGrocery();
const habits=load("habits",[]);$$("#habitlist input").forEach((x,i)=>{x.checked=!!habits[i];x.onchange=updateHabits});updateHabits();
$("#resetday").onclick=()=>{$$("#habitlist input").forEach(x=>x.checked=false);updateHabits()};
$("#clearprep").onclick=()=>{save("sunday",[]);save("wednesday",[]);setupChecks("#sundayprep",sunday,"sunday");setupChecks("#wedprep",wednesday,"wednesday")};
$("#resetgrocery").onclick=()=>{save("bought",[]);renderGrocery()};
$("#copylist").onclick=async()=>{let lines=groceries.map(g=>g.group+"\n"+g.items.map(i=>"- "+i[0]+": "+i[1]+" ("+i[2]+")").join("\n")).join("\n\n");try{await navigator.clipboard.writeText(lines);$("#copylist").textContent="Copied!";setTimeout(()=>$("#copylist").textContent="Copy list",1800)}catch(e){let ta=document.createElement("textarea");ta.value=lines;document.body.appendChild(ta);ta.select();document.execCommand("copy");ta.remove();$("#copylist").textContent="Copied!";setTimeout(()=>$("#copylist").textContent="Copy list",1800)}};

$("#exportcsv").onclick=()=>{let hist=load("history",[]);let csv="Date,Item,Quantity,Amount INR\n"+hist.map(e=>[e.date,'"'+e.item.replace(/"/g,'""')+'"','"'+e.quantity.replace(/"/g,'""')+'"',e.amount].join(",")).join("\n");let blob=new Blob([csv],{type:"text/csv;charset=utf-8;"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="muscle-meals-expense-report.csv";a.click();URL.revokeObjectURL(url)};
$("#clearhistory").onclick=()=>{if(confirm("Clear all logged purchases? This cannot be undone.")){save("history",[]);renderReports()}};

renderReports();