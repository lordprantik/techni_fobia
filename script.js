// Smooth scroll for Explore button
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-scroll-to]').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      const target = document.querySelector(btn.getAttribute('data-scroll-to'));
      if(target){ target.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });

  // Reveal on scroll
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en => { if(en.isIntersecting){ en.target.classList.add('show'); } });
  },{threshold:.12});
  document.querySelectorAll('.reveal,.card,.item,.guide').forEach(el=>io.observe(el));

  // Community comment system (localStorage)
  initCommunity();
});

function initCommunity(){
  const box = document.querySelector('#communityBox');
  if(!box) return;

  const key = 'tf_comments_' + (document.body.dataset.page || 'home');

  const nameEl = document.querySelector('#cName');
  const msgEl  = document.querySelector('#cMsg');
  const postBtn= document.querySelector('#cPost');
  const listEl = document.querySelector('#cList');

  const load = () => JSON.parse(localStorage.getItem(key) || '[]');
  const save = (arr) => localStorage.setItem(key, JSON.stringify(arr));

  function render(){
    listEl.innerHTML = '';
    const comments = load();
    comments.forEach((c, idx)=>{
      const wrap = document.createElement('div');
      wrap.className = 'comment reveal';
      wrap.innerHTML = `
        <div class="meta"><strong>${escapeHtml(c.name)}</strong> • ${new Date(c.time).toLocaleString()}</div>
        <div class="text">${escapeHtml(c.text)}</div>
        <button class="reply-btn" data-idx="${idx}">Reply</button>
        <div class="replies">
          ${(c.replies||[]).map(r=>(
            `<div class="comment" style="margin-top:10px;background:#0b1732">
              <div class="meta"><strong>${escapeHtml(r.name)}</strong> • ${new Date(r.time).toLocaleString()}</div>
              <div class="text">${escapeHtml(r.text)}</div>
            </div>`
          )).join('')}
        </div>
      `;
      listEl.appendChild(wrap);
    });
  }

  postBtn?.addEventListener('click', ()=>{
    const name = (nameEl.value||'Guest').trim();
    const text = (msgEl.value||'').trim();
    if(!text) return;
    const comments = load();
    comments.unshift({name, text, time: Date.now(), replies:[]});
    save(comments);
    msgEl.value = '';
    render();
  });

  document.addEventListener('click', (e)=>{
    const btn = e.target.closest('.reply-btn');
    if(!btn) return;
    const idx = +btn.dataset.idx;
    // reply UI
    let area = btn.nextElementSibling.nextElementSibling;
    if(!area || !area.classList?.contains('reply-area')){
      area = document.createElement('div');
      area.className = 'reply-area';
      area.innerHTML = `
        <div class="comment-box">
          <input type="text" placeholder="Your name (optional)" class="rName"/>
          <input type="text" placeholder="Write a reply..." class="rText"/>
          <button class="btn btn-primary rSend">Reply</button>
        </div>
      `;
      btn.after(area);
    }
    const rName = area.querySelector('.rName');
    const rText = area.querySelector('.rText');
    const rSend = area.querySelector('.rSend');
    rSend.onclick = ()=>{
      const comments = load();
      const name = (rName.value||'Guest').trim();
      const text = (rText.value||'').trim();
      if(!text) return;
      comments[idx].replies = comments[idx].replies || [];
      comments[idx].replies.push({name,text,time:Date.now()});
      save(comments);
      render();
    };
  });

  render();

  function escapeHtml(s){ return s.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
}
