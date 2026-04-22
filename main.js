/* Mike Hnath Portfolio — main.js */
/* Generated from wireframe, April 2026 */

// ── BRANDS ──────────────────────────────────────────────────────
const brands = [
  {name:'KRAFT HEINZ',img:'Company Logos/kraftheinz-logo.png'},
  {name:'ELI LILLY',img:'Company Logos/eli-lilly-logo.png'},
  {name:'PFIZER',img:null},
  {name:'JOHNSON & JOHNSON',img:'Company Logos/johnson-johnson-logo.png'},
  {name:'DISNEY',img:'Company Logos/disney-logo.png'},
  {name:'VIACOM',img:null},
  {name:'ALTEC LANSING',img:'Company Logos/altec-lansing-logo.png'},
  {name:'MLBPA',img:null},
  {name:'NY YANKEES',img:'Company Logos/new-york-yankees-logo.png'},
  {name:'MESA/BOOGIE',img:null},
  {name:'LE TIGRE',img:'Company Logos/le-tigre-logo.webp'},
  {name:'SIGIL',img:'Company Logos/sigil-logo-white.png'},
  {name:'LAS VEGAS RAIDERS',img:null},
  {name:'GREENWICH FILM FESTIVAL',img:null},
  {name:'SCANDALOUS',img:'Company Logos/scandalous-logo.avif'}
];

function buildTicker(id) {
  const el = document.getElementById(id);
  if (!el) return;
  let html = '';
  brands.forEach(b => {
    if (b.img) {
      html += `<div class="ticker-logo"><img src="${b.img}" alt="${b.name}" style="height:22px;max-width:120px;object-fit:contain"></div><div class="ticker-sep"></div>`;
    } else {
      html += `<div class="ticker-logo"><span class="ticker-logo-text">${b.name}</span></div><div class="ticker-sep"></div>`;
    }
  });
  el.innerHTML = html;
}
buildTicker('ticker1'); buildTicker('ticker2');
buildTicker('ticker3'); buildTicker('ticker4');

// ── PERSONAL UPDATES ─────────────────────────────────────────────
const updates = [
  {
    emoji: '🎆',
    title: 'Received PGI 1.4 Pro Certificate of Training',
    desc: 'Licensed to handle 1.4 professional-use-only fireworks under PGI certification.',
    date: 'Apr 2026'
  },
  {
    img: 'Company Logos/scandalous-icon-dark.png',
    darkImg: 'Company Logos/scandalous-icon-light.png',
    title: 'Scandalous — made intro to Brooklyn Operator',
    desc: 'Personally made the introduction connecting Scandalous to their Brooklyn licensing partner.',
    date: 'Sep 2025'
  },
  {
    img: 'Icons/google.svg',
    title: 'Earned Google Data Analytics Professional Certificate ↗',
    desc: 'Adding SQL and Python to the analytics stack across brand and performance work.',
    date: 'Aug 2025'
  },
  {
    emoji: '🏠',
    title: 'Bought our house',
    desc: '',
    date: 'Jul 2025'
  },
  {
    emoji: '💍',
    title: 'Got married',
    desc: '',
    date: 'Jun 2025'
  },
  {
    img: 'Icons/meta.svg',
    title: 'Earned Meta Certified Digital Marketing Associate ↗',
    desc: 'Active through Sep 2026. Formalized the paid social expertise built across years of campaign management.',
    date: 'Sep 2024'
  },
  {
    img: 'Company Logos/THIS-icon-black.png',
    darkInvert: true,
    title: 'THIS goes full-time — consultancy becomes primary',
    desc: 'After wrapping POCN, THIS became the primary. Brand, GTM, and media work for SMB and regulated consumer clients.',
    date: 'Aug 2024'
  },
  {
    img: 'Company Logos/sigil-icon-white.png',
    lightInvert: true,
    title: 'Launched SIGIL on Kickstarter — $22K+ crowdfunded ↗',
    desc: 'Full GTM from zero: positioning, packaging, campaign, fulfillment.',
    date: 'May 2023'
  },
  {
    emoji: '🔑',
    title: 'Bought my condo — first home',
    desc: '',
    date: 'Mar 2021'
  }
];

function renderUpdates() {
  function thumb(u) {
    if (u.emoji) return `<div class="update-thumb" style="display:flex;align-items:center;justify-content:center;font-size:28px">${u.emoji}</div>`;
    const style = u.thumbBg ? ` style="background:${u.thumbBg};border-radius:6px;padding:4px"` : '';
    const isDark = getComputedStyle(document.documentElement).getPropertyValue('--logo-filter').trim() === 'invert(1)';
    const src = (u.darkImg && isDark) ? u.darkImg : u.img;
    const filter = u.darkInvert ? 'filter:var(--logo-filter,none)' : u.lightInvert ? `filter:${isDark ? 'none' : 'invert(1)'}` : '';
    const imgStyle = filter ? ` style="${filter}"` : '';
    return `<div class="update-thumb"${style}><img src="${src}" class="update-thumb-img"${imgStyle}></div>`;
  }
  const homeEl = document.getElementById('home-updates');
  if (homeEl) {
    homeEl.innerHTML = updates.slice(0, 4).map(u => `
      <div class="update-card">
        ${thumb(u)}
        <div class="update-body">
          <div class="update-title">${u.title}</div>
          <div class="update-desc">${u.desc}</div>
          <div class="update-date">${u.date}</div>
        </div>
      </div>`).join('');
  }
  const aboutEl = document.getElementById('about-updates');
  if (aboutEl) {
    aboutEl.innerHTML = updates.map(u => `
      <div class="update-item">
        ${thumb(u)}
        <div class="update-body">
          <div class="update-title">${u.title}</div>
          <div class="update-desc">${u.desc}</div>
        </div>
        <div class="update-date">${u.date}</div>
      </div>`).join('');
  }
}
renderUpdates();

// ── WORK ITEMS ───────────────────────────────────────────────────
const workItems = [
  {
    slug: 'scandalous',
    client: 'THIS · 9-year client',
    title: 'Scandalous — Brand system, packaging, and multi-state GTM',
    outcome: '$500K+ raised · 11–13 SKUs · 5 states · anchor retainer',
    industry: 'Cannabis · Regulated consumer',
    tags: ['Brand', 'Regulated CPG']
  },
  {
    slug: 'pocn',
    client: 'POCN · 2022–2024',
    title: 'Pharma media management — DSP migration and campaign ops at scale',
    outcome: '$1M+ managed · 25 concurrent campaigns · Lilly, Pfizer, J&J',
    industry: 'Healthcare · Pharma',
    tags: ['Performance', 'Healthcare']
  },
  {
    slug: 'sigil',
    client: 'Pine Island Games · 2023',
    title: 'SIGIL — Zero-to-launch GTM for original IP',
    outcome: '$22K+ crowdfunded · full positioning + packaging + campaign',
    industry: 'Consumer · Gaming',
    tags: ['GTM', 'Brand']
  },
  {
    slug: 'kh',
    client: 'Kraft Heinz via Imaginary · 2020–2021',
    title: 'Kraft Heinz — Digital shelf and eComm creative',
    outcome: '~8% Amazon lift · 800+ assets · 30 brands · 15 A+ pages',
    industry: 'CPG · eCommerce',
    tags: ['Design', 'eComm']
  },
  {
    slug: null,
    client: 'Infinity Lifestyle Brands · 2018–2019',
    title: 'Infinity — Licensed CPG brand direction and packaging at scale',
    outcome: '$10M+ licensing ecosystem · 50+ SKUs · Disney, MLBPA, Viacom',
    industry: 'CPG · Licensed consumer',
    tags: ['Brand', 'Licensing']
  },
  {
    slug: null,
    client: 'Triax Technologies · 2021–2022',
    title: 'Triax — B2B SaaS demand gen and enterprise sales enablement',
    outcome: '11→55 webinar attendees · Fortune 50 pipeline · Salesforce/Pardot',
    industry: 'B2B SaaS · IoT · Energy',
    tags: ['GTM', 'Performance']
  }
];

function renderFeaturedWork() {
  const el = document.getElementById('home-work');
  if (!el) return;
  el.className = 'home-work-grid';
  el.innerHTML = workItems.slice(0, 4).map(w => {
    const action = w.slug ? `openCase('${w.slug}')` : `nav('work')`;
    const pills = w.tags.map(t => `<span class="work-domain-tag">${t}</span>`).join('');
    return `<div class="fw-card" onclick="${action}">
      <div class="fw-tags">${pills}</div>
      <div class="fw-title">${w.title}</div>
      <div class="fw-client">${w.client}</div>
      <div class="fw-outcome">${w.outcome}</div>
      <div class="fw-footer"><span class="fw-industry">${w.industry}</span><span class="fw-arrow">→</span></div>
    </div>`;
  }).join('');
}
renderFeaturedWork();


// ── GREETING ─────────────────────────────────────────────────────
(function() {
  const h = new Date().getHours();
  const greeting = h < 12 ? 'Good morning!' : h < 18 ? 'Good afternoon!' : 'Good evening!';
  document.getElementById('home-greeting').textContent = greeting;
})();

// ── NAVIGATION ───────────────────────────────────────────────────
let currentPage = 'home';

function nav(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item[data-page]').forEach(n => n.classList.remove('active'));
  const page = document.getElementById('page-' + pageId);
  if (page) { page.classList.add('active'); page.scrollTop = 0; }
  document.querySelector('.main').scrollTo(0, 0);
  const navEl = document.querySelector(`.nav-item[data-page="${pageId}"]`);
  if (navEl) navEl.classList.add('active');
  currentPage = pageId;
  closeMobileMenu();
}

function openCase(slug) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item[data-page]').forEach(n => n.classList.remove('active'));
  const page = document.getElementById('page-case-' + slug);
  if (page) page.classList.add('active');
  document.querySelector('.main').scrollTo(0, 0);
  const navEl = document.querySelector('.nav-item[data-page="work"]');
  if (navEl) navEl.classList.add('active');
}

// Keyboard shortcuts 1–9
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  const map = {'1':'home','2':'about','3':'work','4':'websites','5':'media','7':'blog','8':'tools'};
  if (map[e.key]) nav(map[e.key]);
  if (e.key === '6') window.open('https://www.behance.net/mikehnath','_blank');
  if (e.key === '9') openModal();
  if (e.key === 'Escape') closeModal();
});

// ── WORK FILTER ──────────────────────────────────────────────────
function filterWork(btn, tag) {
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.work-card[data-tags]').forEach(card => {
    if (tag === 'all') { card.style.display = ''; return; }
    const tags = card.dataset.tags || '';
    card.style.display = tags.includes(tag) ? '' : 'none';
  });
}

// ── TOOLS FILTER ─────────────────────────────────────────────────
function filterTools(btn, cat) {
  btn.closest('.filter-bar').querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.tool-card[data-cat]').forEach(card => {
    if (cat === 'all') { card.style.display = ''; return; }
    const cats = card.dataset.cat || '';
    card.style.display = cats.includes(cat) ? '' : 'none';
  });
}

// ── CAR STEPS ────────────────────────────────────────────────────
function switchCar(btn, contentId) {
  const parent = btn.closest('.car-grid');
  parent.querySelectorAll('.car-step').forEach(s => s.classList.remove('active'));
  btn.classList.add('active');
  parent.querySelectorAll('.car-content').forEach(c => c.style.display = 'none');
  const el = document.getElementById(contentId);
  if (el) el.style.display = 'block';
}

// ── MODAL ────────────────────────────────────────────────────────
function openModal() {
  document.getElementById('modal-overlay').classList.add('open');
  closeMobileMenu();
}
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}
function toggleMobileMenu() {
  document.querySelector('.sidebar').classList.toggle('mobile-open');
}
function closeMobileMenu() {
  document.querySelector('.sidebar').classList.remove('mobile-open');
}
function handleOverlay(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
}
function toggleChip(el) { el.classList.toggle('selected'); }

// ── TIME ─────────────────────────────────────────────────────────
function updateTimes() {
  const et = new Date(new Date().toLocaleString('en-US', {timeZone:'America/New_York'}));
  let h = et.getHours(), m = et.getMinutes(), ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  const t = h + ':' + String(m).padStart(2,'0') + ' ' + ampm;
  const el = document.getElementById('about-time');
  if (el) el.textContent = t;
}
updateTimes();
setInterval(updateTimes, 30000);

// ── THEME SWITCHER ───────────────────────────────────────────
function setTheme(t) {
  ['light','auto','dark'].forEach(x => {
    const b = document.getElementById('btn-'+x);
    if (b) b.classList.toggle('on', x === t);
  });
  if (t === 'dark') {
    document.documentElement.style.setProperty('--bg','#0f1117');
    document.documentElement.style.setProperty('--bg2','#181c24');
    document.documentElement.style.setProperty('--bg3','#222730');
    document.documentElement.style.setProperty('--border','#2a2f3d');
    document.documentElement.style.setProperty('--border2','#363c4d');
    document.documentElement.style.setProperty('--text','#f2f5fc');
    document.documentElement.style.setProperty('--text2','#adb5c8');
    document.documentElement.style.setProperty('--text3','#6e7a93');
    document.documentElement.style.setProperty('--mobile-menu-bg','rgba(24,28,36,0.7)');
    document.documentElement.style.setProperty('--logo-filter','invert(1)');
    document.documentElement.style.setProperty('--ticker-bg','var(--bg)');
    document.documentElement.style.setProperty('--ticker-logo-filter','brightness(0) invert(1)');
  } else {
    document.documentElement.style.setProperty('--bg','#f7f8fa');
    document.documentElement.style.setProperty('--bg2','#edf0f4');
    document.documentElement.style.setProperty('--bg3','#e0e4ea');
    document.documentElement.style.setProperty('--border','#ccd0d8');
    document.documentElement.style.setProperty('--border2','#b9bec9');
    document.documentElement.style.setProperty('--text','#0f1117');
    document.documentElement.style.setProperty('--text2','#46505f');
    document.documentElement.style.setProperty('--text3','#7f899a');
    document.documentElement.style.setProperty('--mobile-menu-bg','rgba(237,240,244,0.7)');
    document.documentElement.style.setProperty('--logo-filter','none');
    document.documentElement.style.setProperty('--ticker-bg','var(--bg)');
    document.documentElement.style.setProperty('--ticker-logo-filter','brightness(0) invert(0.5)');
  }
  renderUpdates();
  const ind = document.getElementById('theme-indicator');
  if (ind) ind.style.transform = `translateX(calc(${({light:0,dark:1,auto:2}[t]??2)} * 100%))`;
}

function copyEmail() {
  navigator.clipboard.writeText('hello@michaelhnath.com').then(() => {
    const btn = event.target;
    const orig = btn.textContent;
    btn.textContent = 'Copied ✓';
    setTimeout(() => btn.textContent = orig, 1800);
  });
}

// init theme indicator position
(function(){const ind=document.getElementById('theme-indicator');if(ind)ind.style.transform='translateX(calc(2 * 100%))'})();
