/* Edit content here. Only verified info from github.com/androidclubvitbhopal is used. */
window.CLUB = {
  projects: [
    { name: "DocsLab", cat: "web", desc: "Open-source developer knowledge hub: documentation, contributor guides, Android and web development resources.", tech: ["TypeScript", "Next.js", "Fumadocs"], glyph: "Ts", url: "https://github.com/androidclubvitbhopal/DocsLab" },
    { name: "Edge AI Earthquake Detection", cat: "ai", desc: "Edge AI prototype for earthquake early warning using local inference, peer verification and a lightweight API.", tech: ["Python", "Edge AI"], glyph: "Py", url: "https://github.com/androidclubvitbhopal/Edge-AI-Earthquake-Detection-Project" },
    { name: "Android Fusion: Tempsor", cat: "android", desc: "An Android app integrating IoT and ML.", tech: ["Kotlin", "IoT", "ML"], glyph: "Kt", url: "https://github.com/androidclubvitbhopal/Android_Fusion_23-24_Tempsor" },
    { name: "FeedbackHub", cat: "web", desc: "A feedback app.", tech: ["TypeScript"], glyph: "Ts", url: "https://github.com/androidclubvitbhopal/FeedbackHub" },
    { name: "BugOff Kotlin Ecom", cat: "android", desc: "BugOff: Kotlin base application.", tech: ["Kotlin"], glyph: "Kt", url: "https://github.com/androidclubvitbhopal/BugOff-Kotlin-Ecom" },
    { name: "BuggOff React Ecom", cat: "web", desc: "React e-commerce project from the BugOff event.", tech: ["JavaScript", "React"], glyph: "Js", url: "https://github.com/androidclubvitbhopal/BuggOff-React-Ecom" }
  ],
  events: [
    { when: "Date to be added", type: "Hackathon", name: "BugOff", text: "A club hackathon that produced Kotlin and React base applications, both open on GitHub.", placeholder: true },
    { when: "2023-24, exact dates to be added", type: "Hackathon", name: "Android Fusion", text: "Build an Android app that fuses IoT and ML. Tempsor is one of the results.", placeholder: true },
    { when: "Date to be added", type: "Workshop", name: "Workshops and technical sessions", text: "Hands-on sessions on Android, Kotlin and Jetpack Compose. Add upcoming sessions here.", placeholder: true }
  ]
};

(function(){
  var nav=document.getElementById('nav'),burger=document.getElementById('burger'),links=[].slice.call(document.querySelectorAll('.menu a[href^="#"]'));
  function esc(s){var d=document.createElement('div');d.textContent=s;return d.innerHTML}
  function setMenu(o){nav.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Close menu':'Open menu');document.body.style.overflow=o?'hidden':''}
  burger.addEventListener('click',function(){setMenu(!nav.classList.contains('open'))});
  links.forEach(function(a){a.addEventListener('click',function(){setMenu(false)})});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav.classList.contains('open')){setMenu(false);burger.focus()}});
    var tt=document.getElementById('toTop');
  function onScroll(){nav.classList.toggle('scrolled',window.scrollY>40);tt.classList.toggle('show',window.scrollY>500)}
  tt.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});document.getElementById('top').focus&&document.querySelector('.brand').focus({preventScroll:true})});
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  if('IntersectionObserver' in window){links.forEach(function(a){var s=document.querySelector(a.getAttribute('href'));if(!s)return;new IntersectionObserver(function(es){if(es[0].isIntersecting)links.forEach(function(l){l.classList.toggle('active',l===a)})},{rootMargin:'-45% 0px -50% 0px'}).observe(s)})}
  var C=window.CLUB||{projects:[],events:[]};
  document.getElementById('projectGrid').innerHTML=C.projects.map(function(p){return '<a class="proj reveal" data-cat="'+p.cat+'" href="'+p.url+'" target="_blank" rel="noopener" aria-label="'+esc(p.name)+' on GitHub"><div class="pv" aria-hidden="true">'+esc(p.glyph)+'</div><div class="pb"><h3>'+esc(p.name)+'</h3><p>'+esc(p.desc)+'</p><div class="tags">'+p.tech.map(function(t){return '<span>'+esc(t)+'</span>'}).join('')+'</div><span class="pl">View on GitHub</span></div></a>'}).join('');
  document.getElementById('eventList').innerHTML=C.events.map(function(e){return '<li class="reveal'+(e.placeholder?' ph':'')+'"><small>'+esc(e.when)+'</small><h3>'+esc(e.name)+'<span class="tt">'+esc(e.type)+'</span></h3><p>'+esc(e.text)+'</p></li>'}).join('');
  document.querySelectorAll('.fl').forEach(function(b){b.addEventListener('click',function(){document.querySelectorAll('.fl').forEach(function(x){var on=x===b;x.classList.toggle('on',on);x.setAttribute('aria-pressed',on)});document.querySelectorAll('.proj').forEach(function(p){p.hidden=b.dataset.f!=='all'&&p.dataset.cat!==b.dataset.f})})});
  document.getElementById('yr').textContent=new Date().getFullYear();
})();

(function(){
  var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els=document.querySelectorAll('.reveal');
  if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  els.forEach(function(e){io.observe(e)});
  var cv=document.getElementById('particles'),ctx=cv.getContext('2d'),pts=[],w,h,vis=true;
  function size(){var r=cv.getBoundingClientRect();w=cv.width=r.width;h=cv.height=r.height;pts=[];for(var i=0;i<Math.min(60,w/20);i++)pts.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,c:i%3?'61,220,132':'255,138,36'})}
  function tick(){if(vis){ctx.clearRect(0,0,w,h);pts.forEach(function(p){p.x=(p.x+p.vx+w)%w;p.y=(p.y+p.vy+h)%h;ctx.fillStyle='rgba('+p.c+',.55)';ctx.beginPath();ctx.arc(p.x,p.y,1.6,0,6.3);ctx.fill()})}requestAnimationFrame(tick)}
  new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(cv);
  size();window.addEventListener('resize',size);tick();
  var par=document.querySelector('[data-parallax]'),k=+par.dataset.parallax;
  window.addEventListener('scroll',function(){if(scrollY<innerHeight)par.style.transform='translateY('+scrollY*k*-1+'px)'},{passive:true});
})();

(function(){
  if(!window.matchMedia('(hover: hover)').matches)return;
  var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.addEventListener('pointermove',function(e){var t=e.target.closest&&e.target.closest('.card,.proj');if(!t)return;var r=t.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;t.style.setProperty('--mx',x+'px');t.style.setProperty('--my',y+'px');
    if(!rm&&t.classList.contains('tilt'))t.style.transform='perspective(700px) rotateX('+((y/r.height-.5)*-6)+'deg) rotateY('+((x/r.width-.5)*6)+'deg)'});
  document.addEventListener('pointerout',function(e){var t=e.target.closest&&e.target.closest('.tilt');if(t&&!t.contains(e.relatedTarget))t.style.transform=''});
})();
