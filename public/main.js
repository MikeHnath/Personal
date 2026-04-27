/* Mike Hnath Portfolio — main.js */

// ── NAVIGATION ───────────────────────────────────────────────────
const BASE = '/Personal';
const PAGE_PATHS = {
  home: BASE + '/',
  about: BASE + '/about/',
  blog: BASE + '/writing/',
  writing: BASE + '/writing/',
  experience: BASE + '/experience/',
  work: BASE + '/case-studies/',
  tools: BASE + '/tools/',
  websites: BASE + '/websites/'
};

function nav(pageId) {
  const path = PAGE_PATHS[pageId];
  if (path) window.location.href = path;
  closeMobileMenu();
}

function openCase(slug) {
  const slugMap = { kh: 'kraft-heinz' };
  const final = slugMap[slug] || slug;
  window.location.href = BASE + '/case-studies/' + final + '/';
}

// Keyboard shortcuts 1–9
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  const map = {'1':'home','2':'about','3':'writing','4':'experience','5':'work','6':'tools','7':'websites'};
  if (map[e.key]) nav(map[e.key]);
  if (e.key === '8') window.open('https://hnath.myportfolio.com','_blank');
  if (e.key === '9') openModal();
  if (e.key === 'Escape') closeModal();
});

// ── BRANDS ──────────────────────────────────────────────────────
const brands = [
  {name:'KRAFT HEINZ',img:'/Personal/Logos/kraftheinz-logo.svg',scale:.52},
  {name:'ELI LILLY',img:'/Personal/Logos/eli-lilly-logo.svg'},
  {name:'JOHNSON & JOHNSON',img:'/Personal/Logos/johnson-johnson-logo.svg',scale:.6},
  {name:'DISNEY',img:'/Personal/Logos/disney-logo.svg'},
  {name:'NICKELODEON',img:'/Personal/Logos/nickelodeon-logo.svg',scale:.53},
  {name:'ALTEC LANSING',img:'/Personal/Logos/altec-lansing-logo.svg',scale:1.2},
  {name:'NY YANKEES',img:'/Personal/Logos/new-york-yankees-logo.svg',scale:.72},
  {name:'ST. LOUIS CARDINALS',img:'/Personal/Logos/st-louis-cardinals-logo.svg',scale:1.32},
  {name:'LAS VEGAS RAIDERS',img:'/Personal/Logos/oakland-raiders.svg',scale:1.5},
  {name:'LE TIGRE',img:'/Personal/Logos/le-tigre.svg',scale:1.2,flip:true},
  {name:'SIGIL',img:'/Personal/Logos/sigil-logo-white.png',scale:.85,flip:true},
  {name:'SCANDALOUS',img:'/Personal/Logos/scandalous-logo.svg',scale:.8,boost:true},
  {name:'ABBVIE',img:'/Personal/Logos/abbvie-logo.svg',scale:.5},
  {name:'REGENERON',img:'/Personal/Logos/regeneron-logo.svg',scale:.52},
  {name:'MITCHELLS',img:'/Personal/Logos/mitchells.svg',scale:.43,boost:true},
  {name:'WILDERMERE BEACH',img:'/Personal/Logos/wbcc-logo.png',scale:3},
  {name:'WITHIN THE RUINS',img:'/Personal/Logos/within-the-ruins.svg',scale:1.5},
  {name:'ARK OF THE COVENANT',img:'/Personal/Logos/ark-of-the-covenant-logo.svg'}
];

function buildTicker(id) {
  const el = document.getElementById(id);
  if (!el) return;
  let html = '';
  brands.forEach(b => {
    if (b.img) {
      const h = Math.round(37 * (b.scale || 1));
      const cls = (b.flip ? ' ticker-logo-flip' : '') + (b.boost ? ' ticker-logo-boost' : '');
      html += `<div class="ticker-logo${cls}"><img src="${b.img}" alt="${b.name}" style="height:${h}px;max-width:200px;object-fit:contain"></div><div class="ticker-sep"></div>`;
    } else {
      html += `<div class="ticker-logo"><span class="ticker-logo-text">${b.name}</span></div><div class="ticker-sep"></div>`;
    }
  });
  el.innerHTML = html;
}
for (let i = brands.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [brands[i], brands[j]] = [brands[j], brands[i]]; }
buildTicker('ticker1'); buildTicker('ticker2');

// ── PERSONAL UPDATES ─────────────────────────────────────────────
const updates = [
  {
    emoji: '🎆',
    title: 'Received PGI 1.4 Pro Certificate of Training',
    desc: 'Licensed to handle 1.4 professional-use-only fireworks under PGI certification.',
    date: 'Apr 2026'
  },
  {
    img: '/Personal/Icons/scandalous-icon-dark.png',
    darkImg: '/Personal/Icons/scandalous-icon-light.png',
    title: 'Scandalous — made intro to Brooklyn operator',
    desc: 'Personally made the introduction connecting Scandalous to their Brooklyn licensing partner.',
    date: 'Sep 2025'
  },
  {
    img: '/Personal/Icons/google.svg',
    title: 'Earned Google Data Analytics Professional Certificate',
    desc: 'Adding SQL and Python to the analytics stack across brand and performance work.',
    date: 'Aug 2025'
  },
  {
    emoji: '🏠',
    title: 'Bought our house',
    desc: 'Allison and I bought our first house together — right near friends and family in CT.',
    date: 'Jul 2025'
  },
  {
    emoji: '💍',
    title: 'Got married',
    desc: 'Married my beautiful wife Allison on the beach at Surfside Hotel in Lordship, CT.',
    date: 'Jun 2025'
  },
  {
    emoji: '📷',
    title: 'Went all-in on photo and video production',
    desc: 'Invested $10K+ in professional camera and video gear. Creative production is now fully in-house.',
    date: 'Apr 2025'
  },
  {
    img: '/Personal/Icons/meta.svg',
    title: 'Earned Meta Certified Digital Marketing Associate',
    desc: 'Active through Sep 2026. Formalized the paid social expertise built across years of campaign management.',
    date: 'Sep 2024'
  },
  {
    img: '/Personal/Icons/this-icon.svg',
    darkInvert: true,
    thumbSize: 28,
    title: 'THIS goes full-time — consultancy becomes primary',
    desc: 'After wrapping POCN, THIS became the primary. Brand, GTM, and media work for SMB and regulated consumer clients.',
    date: 'Aug 2024'
  },
  {
    img: '/Personal/Icons/asp-logo.svg',
    title: 'Volunteered with Appalachia Service Project in Kentucky',
    desc: 'Spent a week repairing homes with ASP alongside Allie and her dad — something we\'d planned to do together before the wedding.',
    date: 'Jul 2024'
  },
  {
    img: '/Personal/Logos/apa-logo.svg',
    title: 'Competed in the APA 9-Ball World Tournament',
    desc: 'Represented my local league at the world tournament in Las Vegas against global competition. Won my matches.',
    date: 'Aug 2023'
  },
  {
    img: '/Personal/Icons/sigil-icon-white.png',
    lightInvert: true,
    thumbSize: 28,
    title: 'Launched SIGIL on Kickstarter — $22K+ crowdfunded',
    desc: 'Full GTM from zero: positioning, packaging, campaign, fulfillment.',
    date: 'May 2023'
  },
  {
    img: '/Personal/Icons/pocn-icon.svg',
    darkInvert: true,
    title: 'Joined POCN as Digital Marketing Manager',
    desc: 'Came on board at POCN, a medical advertising agency specializing in pharma brand engagement with clinical audiences.',
    date: 'May 2022'
  },
  {
    emoji: '🔑',
    title: 'Bought my condo — first home',
    desc: 'First home purchase. Moved out on my own for the first time — a milestone that was a long time coming.',
    date: 'May 2021'
  }
];

function renderUpdates() {
  function thumb(u) {
    if (u.emoji) return `<div class="update-thumb" style="display:flex;align-items:center;justify-content:center;font-size:28px">${u.emoji}</div>`;
    const style = u.thumbBg ? ` style="background:${u.thumbBg};border-radius:6px;padding:4px"` : '';
    const isDark = getComputedStyle(document.documentElement).getPropertyValue('--logo-filter').trim() === 'invert(1)';
    const src = (u.darkImg && isDark) ? u.darkImg : u.img;
    const filter = u.darkInvert ? 'filter:var(--logo-filter,none)' : u.lightInvert ? `filter:${isDark ? 'none' : 'invert(1)'}` : '';
    const sz = u.thumbSize ? `width:${u.thumbSize}px;height:${u.thumbSize}px;` : '';
    const imgStyle = (filter || sz) ? ` style="${sz}${filter}"` : '';
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
    outcome: '$1.7M+ managed · 30 concurrent campaigns · 50+ pharma therapies',
    industry: 'Healthcare · Pharma',
    tags: ['Performance', 'Healthcare'],
    thumb: '/Personal/Images/POCN/pocn-cs-gfx-2.jpg',
    thumbAspect: '11/4'
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
    slug: 'infinity',
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
  el.innerHTML = workItems.slice(0, 3).map(w => {
    const action = w.slug ? `openCase('${w.slug}')` : `nav('work')`;
    const aspect = w.thumbAspect ? ` style="aspect-ratio:${w.thumbAspect}"` : '';
    const thumb = w.thumb
      ? `<div class="fw-thumb"${aspect}><img src="${w.thumb}" alt="" /></div>`
      : `<div class="fw-thumb fw-thumb-empty"></div>`;
    return `<div class="fw-card" onclick="${action}">
      ${thumb}
      <div class="fw-title">${w.title}</div>
      <div class="fw-client">${w.client}</div>
      <div class="fw-outcome">${w.outcome}</div>
      <div class="fw-footer"><span class="fw-industry">${w.industry}</span><span class="fw-arrow">→</span></div>
    </div>`;
  }).join('');
}
renderFeaturedWork();

(function() {
  const el = document.getElementById('experience-work');
  if (!el) return;
  el.className = 'exp-work-grid';
  el.innerHTML = workItems.slice(0, 2).map(w => {
    const action = w.slug ? `openCase('${w.slug}')` : `nav('work')`;
    const aspect = w.thumbAspect ? ` style="aspect-ratio:${w.thumbAspect}"` : '';
    const thumb = w.thumb
      ? `<div class="fw-thumb"${aspect}><img src="${w.thumb}" alt="" /></div>`
      : `<div class="fw-thumb fw-thumb-empty"></div>`;
    return `<div class="fw-card" onclick="${action}">
      ${thumb}
      <div class="fw-title">${w.title}</div>
      <div class="fw-client">${w.client}</div>
      <div class="fw-outcome">${w.outcome}</div>
      <div class="fw-footer"><span class="fw-industry">${w.industry}</span><span class="fw-arrow">→</span></div>
    </div>`;
  }).join('');
})();


// ── GREETING ─────────────────────────────────────────────────────
(function() {
  const el = document.getElementById('home-greeting');
  if (!el) return;
  const h = new Date().getHours();
  const greeting = h < 12 ? 'Good morning!' : h < 18 ? 'Good afternoon!' : 'Good evening!';
  el.textContent = greeting;
})();

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
  const el = document.getElementById('modal-overlay');
  if (el) el.classList.add('open');
  closeMobileMenu();
}
function closeModal() {
  const el = document.getElementById('modal-overlay');
  if (el) el.classList.remove('open');
}
function toggleMobileMenu() {
  const el = document.querySelector('.sidebar');
  if (el) el.classList.toggle('mobile-open');
}
function closeMobileMenu() {
  const el = document.querySelector('.sidebar');
  if (el) el.classList.remove('mobile-open');
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
    document.documentElement.style.setProperty('--ticker-logo-filter','grayscale(1) invert(1)');
    document.documentElement.style.setProperty('--ticker-logo-filter-flip','grayscale(1)');
    document.documentElement.style.setProperty('--ticker-logo-filter-boost','grayscale(1) invert(1) contrast(2) brightness(1.65)');
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
    document.documentElement.style.setProperty('--ticker-logo-filter','grayscale(1)');
    document.documentElement.style.setProperty('--ticker-logo-filter-flip','grayscale(1) invert(1)');
    document.documentElement.style.setProperty('--ticker-logo-filter-boost','grayscale(1) contrast(2) brightness(0.35)');
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
