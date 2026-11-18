(function(){
  var d=document, b=d.body;
  d.documentElement.classList.add('js');
  // sticky nav
  var nav=d.getElementById('nav');
  function onScroll(){ if(nav) nav.classList.toggle('stuck', window.scrollY>40); }
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});
  // mobile menu
  var burger=d.querySelector('.burger');
  if(burger) burger.addEventListener('click', function(){
    b.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', b.classList.contains('menu-open'));
  });
  d.querySelectorAll('.mobile-menu a').forEach(function(a){ a.addEventListener('click', function(){ b.classList.remove('menu-open'); }); });
  // scroll reveal + counters
  function count(el){
    var end=+el.getAttribute('data-count'), t0=null, dur=1400;
    function step(t){ if(!t0) t0=t; var p=Math.min((t-t0)/dur,1); el.textContent=Math.round(end*(1-Math.pow(1-p,3))); if(p<1) requestAnimationFrame(step); }
    requestAnimationFrame(step);
  }
  var items=d.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(e.isIntersecting){
          e.target.classList.add('in');
          e.target.querySelectorAll('[data-count]').forEach(count);
          io.unobserve(e.target);
        }
      });
    },{threshold:.12, rootMargin:'0px 0px -40px 0px'});
    items.forEach(function(el){ io.observe(el); });
  } else { items.forEach(function(el){ el.classList.add('in'); }); }
  // contact form -> prefilled email
  var f=d.getElementById('pkg');
  if(f){
    var q=new URLSearchParams(location.search).get('package');
    if(q && f.package.querySelector('option[value="'+q+'"]')) f.package.value=q;
    f.addEventListener('submit', function(e){
      e.preventDefault();
      var to=f.getAttribute('data-to');
      var lines=['Name: '+f.name.value,'Company: '+f.company.value,'Email: '+f.email.value,'Phone: '+f.phone.value,
        'Package: '+f.package.options[f.package.selectedIndex].text,'Basis: '+f.basis.value,'Site: '+f.site.value,
        'Start / programme: '+f.start.value,'','Notes:',f.notes.value,'','(Drawings attached)'];
      var subject='Subcontract package - '+f.package.options[f.package.selectedIndex].text+' - '+f.company.value;
      if(to){ location.href='mailto:'+to+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(lines.join('\n')); }
      else { location.href='tel:+441617063880'; }
    });
  }
})();
