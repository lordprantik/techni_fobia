/* style.css - Techni_Fobia theme */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap');

:root{
  --bg-1:#071021;
  --bg-2:#0f2030;
  --accent:#00e6d8;
  --muted:#9fb0bd;
  --card:rgba(255,255,255,0.03);
  --radius:14px;
}

*{box-sizing:border-box}
html,body{height:100%;margin:0;font-family:'Inter',system-ui,Segoe UI,Roboto,Arial,sans-serif;background:linear-gradient(180deg,var(--bg-1),var(--bg-2));color:#eaf6f4}
a{color:var(--accent);text-decoration:none}

/* layout */
.container{max-width:1200px;margin:0 auto;padding:28px}
.header {
  display:flex;align-items:center;justify-content:space-between;gap:16px;
  padding:14px;border-radius:12px;background:linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  box-shadow:0 8px 40px rgba(0,0,0,0.6), 0 0 30px rgba(0,230,216,0.06) inset;
}
.logo h1{margin:0;font-size:22px;color:var(--accent);letter-spacing:0.6px;text-shadow:0 0 12px rgba(0,230,216,0.25);animation:float 5s ease-in-out infinite}
.logo p{margin:0;font-size:12px;color:var(--muted)}

.nav{display:flex;gap:10px}
.nav a{padding:8px 12px;border-radius:10px;background:linear-gradient(90deg,var(--accent),#0087ff);color:#021617;font-weight:700;box-shadow:0 6px 12px rgba(0,0,0,0.45)}
.nav a:hover{transform:translateY(-4px);transition:all .25s ease}

/* hero */
.hero{display:grid;grid-template-columns:1fr;gap:18px;padding:28px;border-radius:12px;margin-top:18px;background:linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01));box-shadow:0 8px 30px rgba(0,0,0,0.5)}
.hero h2{font-size:28px;margin:0;color:#fff}
.hero p{color:var(--muted);margin:6px 0 0 0}

/* category grid */
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px;margin-top:22px}
.card{position:relative;overflow:hidden;border-radius:12px;padding:16px;min-height:170px;background:var(--card);transition:transform .35s ease,box-shadow .35s ease}
.card:hover{transform:translateY(-8px);box-shadow:0 18px 50px rgba(0,0,0,0.7)}
.card .thumb{width:100%;height:110px;object-fit:cover;border-radius:8px;box-shadow:0 8px 30px rgba(0,0,0,0.45)}
.card .title{margin-top:12px;color:var(--accent);font-weight:700}
.card .desc{color:var(--muted);font-size:14px;margin-top:6px}

/* list pages */
.list{display:grid;gap:16px;margin-top:18px}
.item{display:flex;gap:16px;padding:16px;border-radius:12px;background:linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));align-items:center;box-shadow:0 10px 30px rgba(0,0,0,0.5)}
.item img{width:160px;height:100px;object-fit:cover;border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,0.5)}
.meta h3{margin:0;color:var(--accent)}
.meta p{margin:8px 0 0 0;color:var(--muted);line-height:1.45}
.meta .buy{display:inline-block;margin-top:10px;padding:8px 12px;border-radius:8px;border:2px solid var(--accent);color:var(--accent);font-weight:700}
.meta .buy:hover{background:var(--accent);color:#012423}

/* footer */
.footer{margin-top:30px;padding:18px;text-align:center;color:var(--muted);font-size:13px}

/* responsive */
@media (max-width:760px){
  .item{flex-direction:column;align-items:flex-start}
  .item img{width:100%;height:160px}
  .nav{flex-wrap:wrap}
}

/* subtle animations */
@keyframes float{0%{transform:translateY(0)}50%{transform:translateY(-6px)}100%{transform:translateY(0)}}
