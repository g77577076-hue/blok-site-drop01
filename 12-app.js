(function(){
var P=window.PRODUCTS,WA='201023279424',SHOW='01023279424';
var wa=function(t){return 'https://wa.me/'+WA+'?text='+encodeURIComponent(t)};
var $=function(i){return document.getElementById(i)};
var AR='٠١٢٣٤٥٦٧٨٩';
var norm=function(s){return s.replace(/[٠-٩]/g,function(d){return AR.indexOf(d)}).toUpperCase().replace(/\s+/g,'')};
var fmt=function(n){return n.toLocaleString('ar-EG')};var pr=function(p){return p.price==null?'<div class="price"><small>السعر على واتساب</small></div>':'<div class="price">'+fmt(p.price)+' <small>ج.م</small></div>'};
var esc=function(s){var d=document.createElement('div');d.textContent=s;return d.innerHTML};
document.querySelectorAll('[data-wa]').forEach(function(a){a.href=wa(a.getAttribute('data-wa'));a.target='_blank';a.rel='noreferrer'});
// lookup
$('f').addEventListener('submit',function(e){e.preventDefault();
 var raw=$('q').value,t=norm(raw),a=$('ans');if(!t)return;
 var m=t.match(/^(?:BLK-?)?(\d{1,3})$/),code=m?'BLK-'+m[1].padStart(3,'0'):'',hit=code&&P.find(function(p){return p.code===code});
 if(hit){a.innerHTML=(hit.imgs.length?'<img class="hi" alt="'+hit.code+'" src="'+hit.imgs[0]+'">':'')+'<div class="code"><bdi>'+hit.code+'</bdi></div><div class="name">'+esc(hit.name)+'</div>'+pr(hit)+'<p class="note">السعر بدون الشحن. الشحن بيتحدد حسب محافظتك على واتساب، والسعر والتوفر بيتأكدوا قبل التأكيد.</p><a class="cta" target="_blank" rel="noreferrer" href="'+wa('عايز أطلب '+hit.code+' ('+hit.name+')')+'">اطلب على واتساب</a>'}
 else{a.innerHTML='<div class="name">'+(code?'مفيش سعر مؤكد عندي للكود ده.':'مش فاهم الكود ده.')+'</div><p class="note">ابعتلنا الكود أو صورة القطعة على واتساب وهنرد عليك بالسعر الصح.</p><a class="cta" target="_blank" rel="noreferrer" href="'+wa('عايز أعرف سعر: '+raw)+'">كلمنا على واتساب '+SHOW+'</a>'}
 a.hidden=false;a.style.animation='none';void a.offsetWidth;a.style.animation='';});
// catalog
var cats=['الكل'].concat(P.map(function(p){return p.cat}).filter(function(c,i,a){return a.indexOf(c)===i}));
var cat='الكل';$('cnt').textContent=P.length+' قطعة. كل قطعة ليها كود، ابعته لنا وإحنا نكمل معاك.';
function chips(){$('chips').innerHTML=cats.map(function(c){return '<button type="button" class="'+(c===cat?'on':'')+'" data-c="'+c+'">'+c+'</button>'}).join('')}
function render(){var s=$('s').value.trim(),t=norm(s);
 var l=P.filter(function(p){return (cat==='الكل'||p.cat===cat)&&(!s||p.name.indexOf(s)>-1||p.code.indexOf(t)>-1)});
 $('list').innerHTML=l.map(function(p,i){return '<li style="animation-delay:'+Math.min(i,12)*30+'ms">'+(p.imgs.length?'<img class="th" loading="lazy" alt="'+esc(p.code)+'" src="'+p.imgs[0]+'">':'')+'<div class="inf"><div class="code"><bdi>'+p.code+'</bdi></div><div class="name">'+esc(p.name)+'</div></div><div class="end">'+pr(p)+'<a target="_blank" rel="noreferrer" href="'+wa('عايز أطلب '+p.code+' ('+p.name+')')+'">اطلب</a></div></li>'}).join('')||'<li>مفيش نتيجة. <a style="color:var(--cu)" target="_blank" rel="noreferrer" href="'+wa('بدور على: '+s)+'">اسألنا على واتساب</a></li>'}
$('chips').addEventListener('click',function(e){var c=e.target.getAttribute&&e.target.getAttribute('data-c');if(c){cat=c;chips();render()}});
$('s').addEventListener('input',render);chips();render();
// motion
var io=window.IntersectionObserver?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12}):null;
if(io)document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
var root=document.documentElement,tick=false;
function sc(){var y=window.scrollY,h=root.scrollHeight-innerHeight;root.style.setProperty('--sy',y);root.style.setProperty('--p',h>0?y/h:0);tick=false}
addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(sc)}},{passive:true});sc();
})();
setTimeout(function(){document.querySelectorAll('.rv:not(.in)').forEach(function(el){var r=el.getBoundingClientRect();if(r.top<innerHeight*1.2)el.classList.add('in')})},400);
if(!('IntersectionObserver' in window))document.querySelectorAll('.rv').forEach(function(el){el.classList.add('in')});
