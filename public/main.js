/* Mike Hnath Portfolio — main.js */

// ── NAVIGATION ───────────────────────────────────────────────────
const BASE = '/Personal';
const PAGE_PATHS = {
  home: BASE + '/',
  about: BASE + '/about/',
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
  const isDark = document.documentElement.dataset.theme === 'dark';
  function thumb(u) {
    if (u.emoji) return `<div class="update-thumb" style="display:flex;align-items:center;justify-content:center;font-size:28px">${u.emoji}</div>`;
    const style = u.thumbBg ? ` style="background:${u.thumbBg};border-radius:6px;padding:4px"` : '';
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

// ── MEDIA CAROUSELS ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Scroll-snap carousel (vertical thumbs, square slides) — used on Kraft Heinz
  document.querySelectorAll('[data-carousel]').forEach(carousel => {
    const track = carousel.querySelector('[data-carousel-track]');
    const prev = carousel.querySelector('[data-carousel-prev]');
    const next = carousel.querySelector('[data-carousel-next]');
    const thumbs = carousel.querySelectorAll('.carousel-thumb');
    if (!track) return;
    const slides = track.querySelectorAll('.carousel-slide');
    const goTo = (i) => {
      const idx = Math.max(0, Math.min(slides.length - 1, i));
      const slide = slides[idx];
      if (slide) track.scrollTo({left: slide.offsetLeft, behavior: 'smooth'});
    };
    const currentIndex = () => {
      const w = track.clientWidth || 1;
      return Math.round(track.scrollLeft / w);
    };
    const setActive = (i) => {
      thumbs.forEach((t, j) => t.classList.toggle('active', j === i));
    };
    if (prev) prev.addEventListener('click', () => goTo(currentIndex() - 1));
    if (next) next.addEventListener('click', () => goTo(currentIndex() + 1));
    thumbs.forEach((t) => {
      t.addEventListener('click', () => {
        const i = parseInt(t.dataset.index, 10) || 0;
        goTo(i);
        setActive(i);
      });
    });
    let scrollT;
    track.addEventListener('scroll', () => {
      clearTimeout(scrollT);
      scrollT = setTimeout(() => setActive(currentIndex()), 80);
    });
  });

  // Opacity-fade carousel (row thumbs, wide slides) — used on SIGIL
  document.querySelectorAll('[data-sigil-carousel]').forEach(root => {
    const slides = root.querySelectorAll('.sigil-carousel-slide');
    const thumbs = root.querySelectorAll('.sigil-thumb');
    const prev = root.querySelector('[data-sigil-prev]');
    const next = root.querySelector('[data-sigil-next]');
    let idx = 0;
    const show = (i) => {
      idx = (i + slides.length) % slides.length;
      slides.forEach((s, j) => s.classList.toggle('active', j === idx));
      thumbs.forEach((t, j) => t.classList.toggle('active', j === idx));
    };
    if (prev) prev.addEventListener('click', () => show(idx - 1));
    if (next) next.addEventListener('click', () => show(idx + 1));
    thumbs.forEach(t => {
      t.addEventListener('click', () => {
        show(parseInt(t.dataset.sigilIndex, 10) || 0);
      });
    });
  });
});

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
  const el = document.getElementById('about-time');
  if (!el) return;
  const et = new Date(new Date().toLocaleString('en-US', {timeZone:'America/New_York'}));
  let h = et.getHours(), m = et.getMinutes(), ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  el.textContent = h + ':' + String(m).padStart(2,'0') + ' ' + ampm;
}
if (document.getElementById('about-time')) {
  updateTimes();
  setInterval(updateTimes, 30000);
}

// ── THEME SWITCHER ───────────────────────────────────────────
const THEME_KEY = 'mh-theme';
const prefersDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
const resolveTheme = (choice) => choice === 'auto' ? (prefersDark() ? 'dark' : 'light') : choice;

function applyTheme(mode) {
  document.documentElement.dataset.theme = mode;
}

function setTheme(choice) {
  try { localStorage.setItem(THEME_KEY, choice); } catch (e) {}
  ['light','auto','dark'].forEach(x => {
    const b = document.getElementById('btn-'+x);
    if (b) b.classList.toggle('on', x === choice);
  });
  applyTheme(resolveTheme(choice));
  renderUpdates();
  const ind = document.getElementById('theme-indicator');
  if (ind) ind.style.transform = `translateX(calc(${({light:0,dark:1,auto:2}[choice]??2)} * 100%))`;
}

function copyEmail(e) {
  const btn = e.currentTarget;
  navigator.clipboard.writeText('hnath928@gmail.com').then(() => {
    const orig = btn.textContent;
    btn.textContent = 'Copied ✓';
    setTimeout(() => btn.textContent = orig, 1800);
  });
}

function submitContact() {
  const modal = document.getElementById('modal-overlay');
  if (!modal) return;
  const inputs = modal.querySelectorAll('.form-input');
  const name = (inputs[0]?.value || '').trim();
  const company = (inputs[1]?.value || '').trim();
  const email = (inputs[2]?.value || '').trim();
  const message = (modal.querySelector('.form-textarea')?.value || '').trim();
  const intents = Array.from(modal.querySelectorAll('.intent-chip.selected'))
    .map(b => b.textContent.trim()).join(', ');
  const subject = `Inquiry from ${name || 'website'}${intents ? ` — ${intents}` : ''}`;
  const lines = [];
  if (name) lines.push(`Name: ${name}`);
  if (company) lines.push(`Company: ${company}`);
  if (email) lines.push(`Email: ${email}`);
  if (intents) lines.push(`Looking for: ${intents}`);
  if (message) lines.push('', message);
  window.location.href = `mailto:hnath928@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
}

// init theme from saved choice (default: auto → system)
(function(){
  let saved;
  try { saved = localStorage.getItem(THEME_KEY); } catch (e) {}
  setTheme(['light','dark','auto'].includes(saved) ? saved : 'auto');
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    let cur;
    try { cur = localStorage.getItem(THEME_KEY); } catch (e) {}
    if ((cur || 'auto') === 'auto') applyTheme(prefersDark() ? 'dark' : 'light');
  });
})();

// ── IMAGE LIGHTBOX ──────────────────────────────────────────────
(function(){
  const SKIP_SELECTOR = '.sidebar, .mobile-topbar, .ticker-wrap, .modal-overlay, .update-thumb, .lightbox-overlay, .nav-icon, .social-pill, a, button';
  function eligible(img) {
    if (!img || img.tagName !== 'IMG') return false;
    if (img.classList.contains('no-lightbox')) return false;
    if (img.closest(SKIP_SELECTOR)) return false;
    if (!img.getAttribute('src')) return false;
    return true;
  }
  function markEligible(root) {
    (root || document).querySelectorAll('img').forEach(img => {
      if (eligible(img)) img.classList.add('lightbox-eligible');
    });
  }
  function open(img) {
    const overlay = document.getElementById('lightbox-overlay');
    const target = document.getElementById('lightbox-img');
    if (!overlay || !target) return;
    target.src = img.currentSrc || img.src;
    target.alt = img.alt || '';
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
  }
  function close() {
    const overlay = document.getElementById('lightbox-overlay');
    const target = document.getElementById('lightbox-img');
    if (!overlay) return;
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    if (target) target.src = '';
  }
  document.addEventListener('click', (e) => {
    const overlay = document.getElementById('lightbox-overlay');
    if (overlay && overlay.classList.contains('open')) {
      if (e.target === overlay || e.target.classList.contains('lightbox-close')) {
        close();
        return;
      }
      if (e.target.id === 'lightbox-img') return;
    }
    const img = e.target.closest && e.target.closest('img');
    if (img && eligible(img)) {
      e.preventDefault();
      open(img);
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
  document.addEventListener('DOMContentLoaded', () => markEligible());
  // re-mark after dynamic injections (ticker / updates / work cards)
  const reMark = () => markEligible();
  if (document.readyState !== 'loading') reMark();
  setTimeout(reMark, 0);
  setTimeout(reMark, 250);
})();
