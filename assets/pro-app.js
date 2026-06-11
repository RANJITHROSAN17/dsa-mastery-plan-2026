/* Professional app JavaScript: loads days JSON and provides UI interactions */
(async function(){
  const repo = '/assets/data/days.json';
  const resp = await fetch(repo);
  const days = await resp.json();

  // UI elements
  const grid = document.getElementById('grid');
  const pager = document.getElementById('pager');
  const topicFilter = document.getElementById('topicFilter');
  const showFilter = document.getElementById('showFilter');
  const search = document.getElementById('search');
  const startBtn = document.getElementById('startBtn');
  const modal = document.getElementById('dayModal');
  const modalContent = document.getElementById('modalContent');
  const closeModal = document.getElementById('closeModal');
  const themeToggle = document.getElementById('themeToggle');
  const exportBtn = document.getElementById('exportProgress');

  let filtered = days.slice();
  const pageSize = 18; let page = 1;

  // Populate topic filter
  const topics = Array.from(new Set(days.map(d=>d.topic))).sort();
  topics.forEach(t=>{ const opt = document.createElement('option'); opt.value=t; opt.textContent=t; topicFilter.appendChild(opt); });

  function isDone(day){ return localStorage.getItem(`dsa_done_${day}`) === '1'; }
  function toggleDone(day){ if(isDone(day)) localStorage.removeItem(`dsa_done_${day}`); else localStorage.setItem(`dsa_done_${day}`,'1'); render(); }

  function renderCard(d){
    const card = document.createElement('article'); card.className='card';
    const done = isDone(d.day);
    card.innerHTML = `<h4>Day ${d.day}: ${escapeHtml(d.title)}</h4><div class="meta">${escapeHtml(d.topic)} • ${done?'<strong style="color:#06b6d4">Done</strong>':'Todo'}</div>`;
    card.onclick = ()=> openDay(d);
    return card;
  }

  function render(){
    // apply filters
    const topic = topicFilter.value;
    const show = showFilter.value;
    const q = search.value.trim().toLowerCase();
    filtered = days.filter(d=>{
      if(topic !== 'all' && d.topic !== topic) return false;
      if(show === 'done' && !isDone(d.day)) return false;
      if(show === 'todo' && isDone(d.day)) return false;
      if(q){ const hay = (d.title+' '+d.description+' '+d.topic+' '+d.resources.map(r=>r.title+' '+(r.note||'')).join(' ')).toLowerCase(); if(!hay.includes(q)) return false; }
      return true;
    });

    // pagination
    const total = Math.max(1, Math.ceil(filtered.length / pageSize));
    if(page > total) page = total;
    const start = (page-1)*pageSize;
    const pageItems = filtered.slice(start, start+pageSize);

    grid.innerHTML = '';
    pageItems.forEach(d=> grid.appendChild(renderCard(d)));

    pager.innerHTML = `Page ${page} of ${total} <button id="prev">◀</button> <button id="next">▶</button>`;
    document.getElementById('prev').onclick = ()=>{ if(page>1) page--; render(); };
    document.getElementById('next').onclick = ()=>{ if(page<total) page++; render(); };
  }

  function openDay(d){
    modal.setAttribute('open','');
    modal.setAttribute('aria-hidden','false');
    modalContent.innerHTML = `\
      <h2>Day ${d.day}: ${escapeHtml(d.title)}</h2>\
      <p class="meta">Topic: ${escapeHtml(d.topic)}</p>\
      <p>${escapeHtml(d.description)}</p>\
      <h3>Resources</h3>\
      <ul>${d.resources.map(r=>`<li><a href="${escapeHtml(r.url)}" target="_blank" rel="noopener">${escapeHtml(r.title)}</a> ${r.note?'<span class="meta"> — '+escapeHtml(r.note)+'</span>':''}</li>`).join('')}</ul>\
      <div style="margin-top:12px"><button id="mark">${isDone(d.day)?'Mark undone':'Mark done'}</button> <button id="goto">Go to day in list</button></div>`;
    document.getElementById('mark').onclick = ()=>{ toggleDone(d.day); closeDay(); };
    document.getElementById('goto').onclick = ()=>{ closeDay(); // find page
      const idx = filtered.findIndex(x=>x.day===d.day); if(idx>=0){ page = Math.floor(idx / pageSize) +1; render(); const el = Array.from(grid.children).find(c=> c.querySelector('h4').textContent.startsWith('Day '+d.day)); if(el) el.scrollIntoView({behavior:'smooth', block:'center'}); }
    };
  }
  function closeDay(){ modal.removeAttribute('open'); modal.setAttribute('aria-hidden','true'); }

  closeModal.onclick = closeDay;
  modal.onclick = (e)=>{ if(e.target === modal) closeDay(); };

  // utility
  function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  // events
  topicFilter.onchange = ()=>{ page = 1; render(); };
  showFilter.onchange = ()=>{ page = 1; render(); };
  search.oninput = ()=>{ page = 1; render(); };
  startBtn.onclick = ()=>{ const d = days.find(x=>x.day===1); if(d) openDay(d); };

  // export checklist
  exportBtn.onclick = ()=>{
    const csv = ['Day,Title,Topic,Done'];
    days.forEach(d=> csv.push(`${d.day},"${d.title.replace(/"/g,'""')}","${d.topic}",${isDone(d.day)?'Done':'Todo'}`));
    const blob = new Blob([csv.join('\n')], {type:'text/csv'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href=url; a.download = 'dsa-plan-checklist.csv'; a.click(); URL.revokeObjectURL(url);
  };

  // theme toggle
  themeToggle.onclick = ()=>{ document.documentElement.classList.toggle('light'); themeToggle.textContent = document.documentElement.classList.contains('light') ? '☀️' : '🌙'; };

  // initial render
  render();
})();
