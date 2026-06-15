(function(){
  const observed = new WeakSet();

  function showPage(name){
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    const pg = document.getElementById('page-'+name);
    if(pg){
      pg.classList.add('active');
      pg.querySelectorAll('.reveal:not(.in)').forEach(el=>el.classList.add('in'));
    }
    document.querySelectorAll('.pill-btn').forEach(b=>{b.classList.remove('active'); b.removeAttribute('aria-current')});
    const btn = document.getElementById('btn-'+name);
    if(btn){ btn.classList.add('active'); btn.setAttribute('aria-current','page'); }
    window.scrollTo(0,0);
    window.requestAnimationFrame(runReveal);
    setTimeout(runReveal,80);
  }

  function currentPage(){
    const a=document.querySelector('.page.active');
    return a?a.id.replace('page-',''):'work';
  }

  function runReveal(){
    const pg=document.querySelector('.page.active');
    if(!pg) return;
    const revealEls = Array.from(pg.querySelectorAll('.reveal:not(.in)'));
    if(revealEls.length === 0) return;
    if(typeof IntersectionObserver === 'undefined'){
      revealEls.forEach(el=>el.classList.add('in'));
      return;
    }
    revealEls.forEach((el,i)=>{
      if(observed.has(el)) return;
      observed.add(el);
      const obs = new IntersectionObserver((entries)=>{
        entries.forEach(e=>{
          if(e.isIntersecting){
            setTimeout(()=>e.target.classList.add('in'), i*65);
            obs.unobserve(e.target);
          }
        });
      },{threshold:0.07});
      obs.observe(el);
    });
  }

  // expose helpers
  window.showPage = showPage;
  window.currentPage = currentPage;
  window.runReveal = runReveal;

  // attach handlers and loader behavior
  window.addEventListener('load', ()=>{
    // mark decorative SVGs as hidden from assistive tech
    try{
      document.querySelectorAll('.wc-img svg, .nav-ext svg, .n-photo svg').forEach(s=>s.setAttribute('aria-hidden','true'));
    }catch(e){}
    setTimeout(()=>{
      const loader = document.getElementById('loader');
      if(loader) loader.classList.add('out');
      runReveal();
    },1000);

    document.querySelectorAll('.pill-btn').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const name = btn.dataset.page || btn.id.replace('btn-','');
        showPage(name);
      });
    });

    // Attach click handlers to work cards that use data-url
    document.querySelectorAll('.wc[data-url]').forEach(card=>{
      card.addEventListener('click', (e)=>{
        // don't interfere with inner links
        const target = e.target;
        if(target.closest('a')) return;
        const url = card.dataset.url;
        if(url) window.open(url, '_blank');
      });
      // make keyboard-accessible
      card.setAttribute('tabindex', '0');
      card.addEventListener('keydown', (e)=>{
        if(e.key === 'Enter' || e.key === ' '){
          e.preventDefault();
          const url = card.dataset.url;
          if(url) window.open(url, '_blank');
        }
      });
    });
  });

  window.addEventListener('scroll', runReveal, {passive:true});
})();
