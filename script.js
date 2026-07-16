const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
menuBtn?.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});
document.querySelectorAll('.mobile-nav a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));

const scenarioData = {
  beach: {
    title: 'Плажна подготовка',
    heading: 'Плаж',
    progress: '35%',
    items: [
      ['Плажна хавлия', '2 бр.'],
      ['Сенник / плажна палатка', ''],
      ['UV облекло', '2 бр.'],
      ['Шапка', '']
    ]
  },
  mountain: {
    title: 'Планински уикенд',
    heading: 'Планина',
    progress: '42%',
    items: [
      ['Топъл слой', '2 бр.'],
      ['Одеяло', '1 бр.'],
      ['Дъждобран', ''],
      ['Ергономична раница', '']
    ]
  },
  travel: {
    title: 'Подготовка за път',
    heading: 'Пътуване',
    progress: '38%',
    items: [
      ['Документи', ''],
      ['Храна за път', ''],
      ['Резервни дрехи', '2 комплекта'],
      ['Любима играчка', '']
    ]
  },
  camping: {
    title: 'Къмпинг с бебе',
    heading: 'Къмпинг',
    progress: '31%',
    items: [
      ['Постелка', ''],
      ['Фенер', ''],
      ['Мрежа против насекоми', ''],
      ['Допълнително одеяло', '']
    ]
  }
};

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  if (!document.querySelector('.modal-backdrop.open')) document.body.style.overflow = '';
}

document.querySelectorAll('[data-close]').forEach(btn => {
  btn.addEventListener('click', () => closeModal(btn.dataset.close));
});

document.querySelectorAll('.modal-backdrop').forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal(modal.id);
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-backdrop.open').forEach(m => closeModal(m.id));
  }
});

['openPackingDemo', 'openPackingDemoFromScreen'].forEach(id => {
  document.getElementById(id)?.addEventListener('click', () => openModal('packingModal'));
});

document.getElementById('openReport')?.addEventListener('click', () => openModal('reportModal'));
document.getElementById('openAiHint')?.addEventListener('click', () => openModal('aiModal'));

document.querySelectorAll('.store-link').forEach(btn => {
  btn.addEventListener('click', () => {
    const mode = btn.dataset.store;
    const title = document.getElementById('storeTitle');
    const body = document.getElementById('storeBody');
    if (mode === 'appstore') {
      title.textContent = 'App Store';
      body.textContent = 'Тук ще бъде поставен реалният App Store линк при публикуване на приложението.';
    } else if (mode === 'googleplay') {
      title.textContent = 'Google Play';
      body.textContent = 'Тук ще бъде поставен реалният Google Play линк при публикуване на приложението.';
    } else {
      title.textContent = 'Изтегли Nesti';
      body.textContent = 'Демо бутон. Готов е за реален линк, когато приложението бъде публикувано.';
    }
    openModal('storeModal');
  });
});

['openHomePreview', 'openHomePreview2'].forEach(id => {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener('click', () => openModal('homeModal'));
  el.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal('homeModal');
    }
  });
});

const scenarioTitle = document.getElementById('scenarioTitle');
const scenarioItems = document.getElementById('scenarioItems');
const progressFill = document.getElementById('progressFill');

document.querySelectorAll('.scenario-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.scenario-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const data = scenarioData[btn.dataset.scenario];
    if (!data) return;
    scenarioTitle.textContent = data.title;
    progressFill.style.width = data.progress;
    scenarioItems.innerHTML = `
      <h4>${data.heading}</h4>
      ${data.items.map(([name, qty]) => `<label><input type="checkbox"> ${name}${qty ? ` <em>${qty}</em>` : ''}</label>`).join('')}
    `;
  });
});

document.querySelectorAll('.interactive').forEach(el => {
  el.addEventListener('click', () => {
    el.classList.remove('pulse');
    void el.offsetWidth;
    el.classList.add('pulse');
  });
});
