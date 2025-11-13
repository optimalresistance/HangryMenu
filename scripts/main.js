// main.js with week switcher support
const defaultWeek = localStorage.getItem('menu-week') || '1';
const manifests = {
  '1': {
    dinner: 'dinner/recipes-week1.json',
    dessert: 'dessert/recipes-week1.json'
  },
  '2': {
    dinner: 'dinner/recipes-week2.json',
    dessert: 'dessert/recipes-week2.json'
  },
  '3': {
    dinner: 'dinner/recipes-week3.json',
    dessert: 'dessert/recipes-week3.json'
  },
  '4': {
    dinner: 'dinner/recipes-week4.json',
    dessert: 'dessert/recipes-week4.json'
  },
  '5': {
    dinner: 'dinner/recipes-week5.json',
    dessert: 'dessert/recipes-week5.json'
  }
};

async function fetchJSON(path) {
  const res = await fetch(path, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
  return res.json();
}
async function fetchHTML(path) {
  const res = await fetch(path, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
  return res.text();
}
function attachToggle(card) {
  const header = card.querySelector('.card__header');
  if (!header) return;
  header.addEventListener('click', () => card.classList.toggle('open'));
  header.setAttribute('tabindex', '0');
  header.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.classList.toggle('open');
    }
  });
}
function clearGrid(id) {
  const el = document.getElementById(id);
  while (el.firstChild) el.removeChild(el.firstChild);
}
async function loadSection(manifestPath, containerId) {
  try {
    const listEl = document.getElementById(containerId);
    const manifest = await fetchJSON(manifestPath);
    for (const file of manifest.files) {
      const html = await fetchHTML(file.startsWith('http') ? file : `${manifestPath.split('/').slice(0, -1).join('/')}/${file}`);
      const wrapper = document.createElement('div');
      wrapper.className = 'card';
      wrapper.innerHTML = html;
      attachToggle(wrapper);
      listEl.appendChild(wrapper);
    }
  } catch (err) {
    console.error(err);
    const listEl = document.getElementById(containerId);
    const p = document.createElement('p');
    p.textContent = 'Could not load recipes. Check the manifests and files exist.';
    listEl.appendChild(p);
  }
}
async function loadWeek(week) {
  clearGrid('dinner-list');
  clearGrid('dessert-list');
  clearGrid('shopping');
  const cfg = manifests[week];
  await Promise.all([
    loadSection(cfg.dinner, 'dinner-list'),
    loadSection(cfg.dessert, 'dessert-list'),

    loadSection(`shopping/recipes-week${week}.json`, 'shopping')
  ]);
  localStorage.setItem('menu-week', String(week));
  updateButtons(week);
}

function updateButtons(active) {
  document.querySelectorAll('.week-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.week === String(active));
  });
}
document.getElementById('btn-week-1').addEventListener('click', () => loadWeek(1));
document.getElementById('btn-week-2').addEventListener('click', () => loadWeek(2));
document.getElementById('btn-week-3').addEventListener('click', () => loadWeek(3));
document.getElementById('btn-week-4').addEventListener('click', () => loadWeek(4));
document.getElementById('btn-week-5').addEventListener('click', () => loadWeek(5));
// First load
//loadWeek(defaultWeek);
