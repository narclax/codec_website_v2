(function(){function init(){
 var d=document,r=d.documentElement,$=function(i){return d.getElementById(i)||d.createElement('div')};/* si el elemento no existe en la página, se usa uno inerte */
 var wrap=d.getElementById('wrapwrap');/* Odoo puede hacer scroll en #wrapwrap o en window */
 function gy(){return Math.max(window.scrollY||0,wrap?wrap.scrollTop:0)}
 function onS(f){addEventListener('scroll',f,{passive:true});if(wrap)wrap.addEventListener('scroll',f,{passive:true})}
 /* Tema */
 var t;try{t=localStorage.getItem('codec-theme')}catch(e){}
 if(!t)t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
 function setT(v){r.setAttribute('data-theme',v);r.setAttribute('data-bs-theme',v);$('theme').setAttribute('aria-checked',v==='dark');try{localStorage.setItem('codec-theme',v)}catch(e){}}
 setT(t);$('theme').onclick=function(){setT(r.getAttribute('data-theme')==='dark'?'light':'dark')};
 /* Paleta */
 var pa;try{pa=localStorage.getItem('codec-palette')}catch(e){}
 function setP(v){if(v==='violet')r.setAttribute('data-palette','violet');else r.removeAttribute('data-palette');
  d.querySelectorAll('[data-pal]').forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-pal')===v)});try{localStorage.setItem('codec-palette',v)}catch(e){}}
 setP(pa==='violet'?'violet':'blue');
 d.querySelectorAll('[data-pal]').forEach(function(b){b.onclick=function(){setP(b.getAttribute('data-pal'))}});
 /* Header */
 var hd=$('hd');function sc(){hd.classList.toggle('scrolled',gy()>30)}onS(sc);sc();
 $('burger').onclick=function(){var m=$('menu'),o=m.classList.toggle('d-none');m.classList.toggle('d-flex',!o);this.setAttribute('aria-expanded',!o)};
 $('menu').onclick=function(e){if(e.target.tagName==='A'){this.classList.add('d-none');this.classList.remove('d-flex')}};
 /* Reveal: se repite al subir y bajar */
 var io=new IntersectionObserver(function(es){es.forEach(function(e){e.target.classList.toggle('in',e.isIntersecting)})},{threshold:.15,rootMargin:'0px 0px -6% 0px'});
 d.querySelectorAll('.rv').forEach(function(n){io.observe(n)});
 /* Scrollspy */
 var links=d.querySelectorAll('.nav-l[href*="#"]'),hs=function(a){return '#'+a.getAttribute('href').split('#')[1]},secs=[].map.call(links,function(a){return d.querySelector(hs(a))});
 var sp=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)links.forEach(function(a){a.classList.toggle('active',hs(a)==='#'+e.target.id)})})},{rootMargin:'-45% 0px -50% 0px'});
 secs.forEach(function(s){s&&sp.observe(s)});
 /* Slider propio */
 var tr=$('track'),sl=[].slice.call(tr.children),dots=$('dots'),i=0,tm,sx=null;
 sl.forEach(function(_,k){var b=d.createElement('button');b.className='dot';b.setAttribute('aria-label','Ir a diapositiva '+(k+1));b.onclick=function(){go(k,1)};dots.appendChild(b)});
 function go(n,u){i=(n+sl.length)%sl.length;tr.style.transform='translateX(-'+i*100+'%)';
  sl.forEach(function(s,k){s.classList.toggle('on',k===i);s.setAttribute('aria-hidden',k!==i)});
  [].forEach.call(dots.children,function(b,k){b.classList.toggle('on',k===i)});if(u)play()}
 function play(){clearInterval(tm);if(sl.length<2)return;if(!matchMedia('(prefers-reduced-motion: reduce)').matches)tm=setInterval(function(){go(i+1)},6500)}
 $('next').onclick=function(){go(i+1,1)};$('prev').onclick=function(){go(i-1,1)};
 var box=$('sl');box.onmouseenter=function(){clearInterval(tm)};box.onmouseleave=play;
 box.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
 box.addEventListener('touchend',function(e){if(sx===null)return;var dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50)go(i+(dx<0?1:-1),1);sx=null});
 box.tabIndex=0;box.addEventListener('keydown',function(e){if(e.key==='ArrowRight')go(i+1,1);if(e.key==='ArrowLeft')go(i-1,1)});
 var bt=$('btt');function bs(){bt.classList.toggle('show',gy()>500)}onS(bs);bs();
 bt.onclick=function(){scrollTo({top:0,behavior:'smooth'});if(wrap)wrap.scrollTo({top:0,behavior:'smooth'})};
 var vv=$('vv'),vc=$('vctl'),loaded=false,upaused=false,vis=false,sd=navigator.connection&&navigator.connection.saveData,rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
 function ld(){if(!loaded){loaded=true;[].forEach.call(vv.querySelectorAll('source'),function(x){x.src=x.getAttribute('data-src')});vv.load()}}
 function vp(){ld();var q=vv.play();if(q&&q.catch)q.catch(function(){})}
 function vs(){var pl=!vv.paused;vc.setAttribute('data-state',pl?'playing':'paused');vc.setAttribute('aria-label',pl?'Pausar video':'Reproducir video')}
 vv.addEventListener('play',vs);vv.addEventListener('pause',vs);
 vc.onclick=function(){if(vv.paused){upaused=false;vp()}else{upaused=true;vv.pause()}};
 if(!sd&&!rm){new IntersectionObserver(function(es){es.forEach(function(e){vis=e.isIntersecting;
  if(vis){if(!upaused)vp()}else if(loaded)vv.pause()})},{rootMargin:'300px 0px'}).observe(vv)}
 go(0);play();$('yr').textContent=new Date().getFullYear();
}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();})();
