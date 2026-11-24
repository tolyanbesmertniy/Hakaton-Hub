// База данных событий с точным временем старта для локальных уведомлений
const EVENTS_DATA = Array.of(
  {
    id: 1,
    category: 'Лекция',
    tagFull: 'ЛЕКЦИЯ / ТЕХНОЛОГИИ',
    title: 'ИИ: что будет после хайпа',
    shortDesc: 'О технологиях, которые меняют профессию.',
    fullDesc: 'Разберём, где искусственный интеллект уже полезен, а где пока больше обещаний. Обсудим реальные кейсы и навыки, которые пригодятся на старте карьеры.',
    dateList: '17 ноября • 18:30',
    dateOnly: '17 ноября',
    dateFull: '17 ноября, вторник',
    timeRange: '18:30–20:00',
    shortDate: '17.11',
    timestamp: '2026-11-17T18:30:00',
    location: 'Корпус А, ауд. 301',
    locationFull: 'Корпус А, аудитория 301',
    address: 'Университетская, 12',
    organizer: 'IT-клуб',
    entry: 'Вход свободный',
    featured: true,
    isPast: false
  },
  {
    id: 2,
    category: 'Митап',
    tagFull: 'МИТАП / ДИЗАЙН',
    title: 'Дизайн без границ',
    shortDesc: 'Портфолио, первые проекты и честный фидбэк.',
    fullDesc: 'Встреча для начинающих продуктовых и графических дизайнеров. Разберём ваши кейсы, обсудим тренды интерфейсов и расскажем, как попасть на первую стажировку.',
    dateList: '18 ноября • 17:00',
    dateOnly: '18 ноября',
    dateFull: '18 ноября, среда',
    timeRange: '17:00–19:30',
    shortDate: '18.11',
    timestamp: '2026-11-18T17:00:00',
    location: 'Коворкинг «Точка»',
    locationFull: 'Коворкинг «Точка», 2 этаж',
    address: 'Студенческий проспект, 5',
    organizer: 'Design community',
    entry: 'Вход свободный',
    featured: false,
    isPast: false
  },
  {
    id: 3,
    category: 'Спорт',
    tagFull: 'СПОРТ / ТУРНИР',
    title: 'Кубок по волейболу',
    shortDesc: 'Поддержи команду своего факультета.',
    fullDesc: 'Финальные игры межфакультетского турнира по волейболу. Приходи болеть за сборную своего института — зрителей ждут розыгрыши мерча и горячий чай.',
    dateList: '19 ноября • 16:00',
    dateOnly: '19 ноября',
    dateFull: '19 ноября, четверг',
    timeRange: '16:00–19:00',
    shortDate: '19.11',
    timestamp: '2026-11-19T16:00:00',
    location: 'Спорткомплекс, зал 1',
    locationFull: 'Спорткомплекс, игровой зал №1',
    address: 'Спортивная, 8',
    organizer: 'Студенческий спортклуб',
    entry: 'Для всех студентов',
    featured: false,
    isPast: false
  },
  {
    id: 5,
    category: 'Хакатон',
    tagFull: 'ХАКАТОН / РАЗРАБОТКА',
    title: 'College Hack 2026',
    shortDesc: '48 часов на создание прототипа цифрового сервиса для колледжа.',
    fullDesc: 'Командный хакатон по разработке студенческих сервисов. Собери команду из 2–4 человек, выбери трек и презентуй готовый прототип жюри.',
    dateList: '20 ноября • 10:00',
    dateOnly: '20 ноября',
    dateFull: '20 ноября, пятница',
    timeRange: '10:00–20:00',
    shortDate: '20.11',
    timestamp: '2026-11-20T10:00:00',
    location: 'Актовый зал',
    locationFull: 'Главный корпус, Актовый зал',
    address: 'Университетская, 12',
    organizer: 'Хакатон Хаб',
    entry: 'По регистрации',
    featured: false,
    isPast: false
  },
  {
    id: 4,
    category: 'Лекция',
    tagFull: 'ЛЕКЦИЯ / КАРЬЕРА',
    title: 'Как запустить пет-проект за выходные',
    shortDesc: 'От идеи до первых пользователей без бюджета.',
    fullDesc: 'Прошедший воркшоп по быстрому прототипированию и запуску MVP для студенческих команд.',
    dateList: '10 ноября • 18:00',
    dateOnly: '10 ноября',
    dateFull: '10 ноября, вторник',
    timeRange: '18:00–19:30',
    shortDate: '10.11',
    timestamp: '2026-11-10T18:00:00',
    location: 'Корпус Б, ауд. 105',
    locationFull: 'Корпус Б, аудитория 105',
    address: 'Университетская, 14',
    organizer: 'Бизнес-инкубатор',
    entry: 'Вход свободный',
    featured: false,
    isPast: true
  }
);

const BONUS_PER_VISIT = 10;
const SERVICE_WEEKLY_LIMIT = 20;
const GLOBAL_WEEKLY_LIMIT = 60;

const STORAGE_USERS_KEY = 'college_platform_users_v2';
const STORAGE_CURRENT_USER_KEY = 'college_platform_current_user_v2';

let usersDB = {};
let currentUserKey = null;

function makeUserKey(name, group) {
  return name.trim().toLowerCase() + '__' + group.trim().toUpperCase();
}

function loadStorage() {
  try {
    const rawUsers = JSON.parse(localStorage.getItem(STORAGE_USERS_KEY));
    if (rawUsers && typeof rawUsers === 'object') {
      usersDB = rawUsers;
    }
  } catch (e) {
    usersDB = {};
  }

  const demo1Key = makeUserKey('Мария Иванова', '1ИС-2-24');
  if (!usersDB[demo1Key]) {
    usersDB[demo1Key] = {
      key: demo1Key,
      name: 'Мария Иванова',
      group: '1ИС-2-24',
      contact: '@maria_it',
      balance: 24,
      weeklyServiceEarned: 0,
      weeklyTotalEarned: 14,
      registeredIds: Array.of(3),
      attendedIds: Array.of(),
      history: Array.of(
        { title: 'ИТ.Спорт: тренировка по баскетболу', amount: 8, date: '14 ноября' },
        { title: 'Медиацентр: одобренный отзыв', amount: 6, date: '12 ноября' },
        { title: 'Хакатон Хаб: посещение лекции', amount: 10, date: '05 ноября' }
      )
    };
  }

  const demo2Key = makeUserKey('Дмитрий Соколов', '2ПМ-1-23');
  if (!usersDB[demo2Key]) {
    usersDB[demo2Key] = {
      key: demo2Key,
      name: 'Дмитрий Соколов',
      group: '2ПМ-1-23',
      contact: '@dmitry_pm',
      balance: 10,
      weeklyServiceEarned: 10,
      weeklyTotalEarned: 10,
      registeredIds: Array.of(1),
      attendedIds: Array.of(),
      history: Array.of(
        { title: 'Хакатон Хаб: посещение митапа', amount: 10, date: '16 ноября' }
      )
    };
  }

  const savedKey = localStorage.getItem(STORAGE_CURRENT_USER_KEY);
  if (savedKey && usersDB[savedKey]) {
    currentUserKey = savedKey;
  }

  saveStorage();
}

function saveStorage() {
  localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(usersDB));
  if (currentUserKey) {
    localStorage.setItem(STORAGE_CURRENT_USER_KEY, currentUserKey);
  } else {
    localStorage.removeItem(STORAGE_CURRENT_USER_KEY);
  }
}

function getCurrentUser() {
  return currentUserKey ? usersDB[currentUserKey] : null;
}

let currentCategory = 'all';
let searchQuery = '';
let selectedEventId = 1;
let regTab = 'upcoming';

const toastEl = document.getElementById('toast');
const navRegCountEl = document.getElementById('nav-reg-count');

function createEl(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined && text !== null) el.textContent = text;
  return el;
}

let toastTimer;
function showToast(message) {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2800);
}

// Отрисовка верхней панели навигации (ссылки на login.html, register.html или profile.html)
function renderUserPanel() {
  const panelEl = document.getElementById('user-panel');
  if (!panelEl) return;

  panelEl.innerHTML = '';
  const user = getCurrentUser();

  if (!user) {
    const authLinks = createEl('div', 'nav-auth-links');

    const loginLink = createEl('a', 'btn-login-nav', 'Войти');
    loginLink.href = 'login.html';
    loginLink.style.textDecoration = 'none';

    const regLink = createEl('a', 'btn-register-nav', 'Регистрация');
    regLink.href = 'register.html';

    authLinks.appendChild(loginLink);
    authLinks.appendChild(regLink);
    panelEl.appendChild(authLinks);
    return;
  }

  const bonusPill = createEl('a', 'bonus-pill', '🪙 ' + user.balance + ' Шабурят');
  bonusPill.href = 'profile.html';
  bonusPill.style.textDecoration = 'none';
  panelEl.appendChild(bonusPill);

  const profileChip = createEl('a', 'profile-link-chip', '👤 ' + user.name);
  profileChip.href = 'profile.html';
  panelEl.appendChild(profileChip);
}

function updateCounters() {
  const user = getCurrentUser();
  const regIds = user ? user.registeredIds : Array.of();
  const upcomingCount = EVENTS_DATA.filter(e => !e.isPast && regIds.includes(e.id)).length;

  if (navRegCountEl) {
    navRegCountEl.textContent = upcomingCount;
    navRegCountEl.style.display = upcomingCount > 0 ? 'inline-block' : 'none';
  }
  const segUpcomingEl = document.getElementById('seg-upcoming');
  if (segUpcomingEl) {
    segUpcomingEl.textContent = 'Предстоящие • ' + upcomingCount;
  }
}

// Логика входа (на странице login.html)
function handleLogin(name, group) {
  const cleanGroup = group.trim().toUpperCase();
  const cleanName = name.trim();
  if (!cleanGroup || !cleanName) return;

  const key = makeUserKey(cleanName, cleanGroup);
  if (!usersDB[key]) {
    showToast('Аккаунт не найден. Перенаправляем на страницу регистрации...');
    setTimeout(() => {
      window.location.href = 'register.html';
    }, 1200);
    return;
  }

  currentUserKey = key;
  saveStorage();
  window.location.href = 'profile.html';
}

// Логика регистрации (на странице register.html)
function handleRegister(name, group, contact) {
  const cleanGroup = group.trim().toUpperCase();
  const cleanName = name.trim();
  if (!cleanGroup || !cleanName) return;

  const key = makeUserKey(cleanName, cleanGroup);
  if (usersDB[key]) {
    showToast('Такой студент уже зарегистрирован. Выполняем вход...');
    currentUserKey = key;
    saveStorage();
    setTimeout(() => {
      window.location.href = 'profile.html';
    }, 1000);
    return;
  }

  usersDB[key] = {
    key: key,
    name: cleanName,
    group: cleanGroup,
    contact: contact ? contact.trim() : '',
    balance: 0,
    weeklyServiceEarned: 0,
    weeklyTotalEarned: 0,
    registeredIds: Array.of(),
    attendedIds: Array.of(),
    history: Array.of()
  };

  currentUserKey = key;
  saveStorage();
  window.location.href = 'profile.html';
}

function logoutUser() {
  currentUserKey = null;
  saveStorage();
  window.location.href = 'login.html';
}

// Рендер страницы профиля (profile.html)
function renderProfilePage() {
const profileNameEl = document.getElementById('profile-name');
if (!profileNameEl) return;
const user = getCurrentUser();
if (!user) {
window.location.href = 'login.html';
return;
}
const parts = user.name.split(' ');
const initials = (parts.at(0) ? parts.at(0).charAt(0) : '') + (parts.at(1) ? parts.at(1).charAt(0) : '');
document.getElementById('profile-avatar').textContent = initials.toUpperCase() || 'СТ';
profileNameEl.textContent = user.name;
document.getElementById('profile-group').textContent = 'Группа: ' + user.group;
document.getElementById('profile-contact').textContent = user.contact ? 'Контакт: ' + user.contact : 'College Platform ID активен';
document.getElementById('stat-reg-count').textContent = user.registeredIds.length;
document.getElementById('stat-att-count').textContent = user.attendedIds.length;
document.getElementById('wallet-balance-num').textContent = user.balance + ' 🪙';
document.getElementById('wallet-service-limit').textContent =
user.weeklyServiceEarned + ' / ' + SERVICE_WEEKLY_LIMIT + ' Шабурят';
document.getElementById('wallet-total-limit').textContent =
user.weeklyTotalEarned + ' / ' + GLOBAL_WEEKLY_LIMIT + ' Шабурят';
const historyListEl = document.getElementById('wallet-history-list');
historyListEl.innerHTML = '';
if (!user.history || user.history.length === 0) {
historyListEl.appendChild(
createEl('div', 'empty-state', 'Пока нет начислений. Посетите мероприятие, чтобы получить +10 Шабурят!')
);
} else {
user.history.forEach(item => {
const row = createEl('div', 'history-item');
const left = createEl('div');
left.appendChild(createEl('div', 'history-item-title', item.title));
left.appendChild(createEl('div', 'history-item-date', item.date));
const right = createEl('div', 'history-item-amount', '+' + item.amount + ' 🪙');
row.appendChild(left);
row.appendChild(right);
historyListEl.appendChild(row);
});
}
}
// Системные локальные уведомления
let scheduledTimers = Array.of();
function sendSystemNotification(title, bodyText) {
if (window.AndroidNative && typeof window.AndroidNative.showNotification === 'function') {
window.AndroidNative.showNotification(title, bodyText);
return;
}
if (!('Notification' in window)) {
showToast(title + ': ' + bodyText);
return;
}
if (Notification.permission === 'granted') {
new Notification(title, { body: bodyText });
} else {
showToast(title + ': ' + bodyText);
}
}
function scheduleEventNotifications(event) {
const toggleEl = document.getElementById('detail-reminder-toggle');
if (toggleEl && !toggleEl.checked) return;
if (!('Notification' in window)) return;
const setupTimers = () => {
const startMs = new Date(event.timestamp).getTime();
const nowMs = Date.now();
const dayBeforeMs = startMs - 24 * 60 * 60 * 1000;
const hourBeforeMs = startMs - 60 * 60 * 1000;
if (dayBeforeMs > nowMs) {
const t1 = setTimeout(() => {
sendSystemNotification(
'Завтра: ' + event.title,
'Напоминаем за день до начала! Встречаемся ' + event.dateList + ' (' + event.location + ').'
);
}, Math.min(dayBeforeMs - nowMs, 2147483647));
scheduledTimers.push(t1);
}
if (hourBeforeMs > nowMs) {
const t2 = setTimeout(() => {
sendSystemNotification(
'Через 1 час: ' + event.title,
'Мероприятие начнётся в ' + event.timeRange + '. Место: ' + event.location
);
}, Math.min(hourBeforeMs - nowMs, 2147483647));
scheduledTimers.push(t2);
}
};
if (Notification.permission === 'granted') {
setupTimers();
} else if (Notification.permission !== 'denied') {
Notification.requestPermission().then(permission => {
if (permission === 'granted') setupTimers();
});
}
}
function exportDatabaseJSON() {
const dbSnapshot = {
exportedAt: new Date().toISOString(),
platform: 'College Platform — Хакатон Хаб',
currentUser: currentUserKey,
users: usersDB,
events: EVENTS_DATA
};
const blob = new Blob(Array.of(JSON.stringify(dbSnapshot, null, 2)), {
type: 'application/json'
});
const url = URL.createObjectURL(blob);
const link = document.createElement('a');
link.href = url;
link.download = 'hackathon_hub_database.json';
link.click();
URL.revokeObjectURL(url);
showToast('Локальная база данных (JSON) сохранена');
}
function switchFeedOrDetails(viewName) {
const feedView = document.getElementById('view-feed');
const detailsView = document.getElementById('view-details');
if (!feedView || !detailsView) return;
feedView.classList.toggle('active', viewName === 'feed');
detailsView.classList.toggle('active', viewName === 'details');
window.scrollTo({ top: 0, behavior: 'smooth' });
}
function toggleRegistration(eventId, e) {
if (e) e.stopPropagation();
const user = getCurrentUser();
if (!user) {
window.location.href = 'login.html';
return;
}
const event = EVENTS_DATA.find(item => item.id === eventId);
if (!event) return;
if (user.registeredIds.includes(eventId)) {
user.registeredIds = user.registeredIds.filter(id => id !== eventId);
showToast('Регистрация на «' + event.title + '» отменена');
} else {
user.registeredIds.push(eventId);
scheduleEventNotifications(event);
showToast('Вы записаны! Подтвердите посещение, чтобы получить +10 Шабурят');
}
saveStorage();
renderUserPanel();
updateCounters();
renderFeed();
renderRegistrations();
const detailsView = document.getElementById('view-details');
if (detailsView && detailsView.classList.contains('active') && selectedEventId === eventId) {
openEventDetails(eventId);
}
}
function confirmAttendance(eventId, e) {
if (e) e.stopPropagation();
const user = getCurrentUser();
if (!user) {
window.location.href = 'login.html';
return;
}
const event = EVENTS_DATA.find(item => item.id === eventId);
if (!event) return;
if (user.attendedIds.includes(eventId)) {
showToast('Посещение этого события уже подтверждено');
return;
}
if (user.weeklyServiceEarned + BONUS_PER_VISIT > SERVICE_WEEKLY_LIMIT) {
showToast('Достигнут недельный лимит сервиса Хакатон Хаб (20 Шабурят)');
return;
}
if (user.weeklyTotalEarned + BONUS_PER_VISIT > GLOBAL_WEEKLY_LIMIT) {
showToast('Достигнут общий недельный лимит начислений (60 Шабурят)');
return;
}
user.attendedIds.push(eventId);
user.balance += BONUS_PER_VISIT;
user.weeklyServiceEarned += BONUS_PER_VISIT;
user.weeklyTotalEarned += BONUS_PER_VISIT;
user.history.unshift({
title: 'Хакатон Хаб: ' + event.title,
amount: BONUS_PER_VISIT,
date: 'Сегодня • подтверждено'
});
saveStorage();
renderUserPanel();
renderRegistrations();
showToast('Посещение подтверждено! Начислено +' + BONUS_PER_VISIT + ' Шабурят 🪙');
}
function buildFeedCard(event) {
const user = getCurrentUser();
const isReg = user ? user.registeredIds.includes(event.id) : false;
const card = createEl('article', event.featured ? 'event-card featured' : 'event-card');
card.addEventListener('click', () => openEventDetails(event.id));
const topWrap = createEl('div');
const topRow = createEl('div', 'card-top-row');
topRow.appendChild(createEl('span', 'card-tag', event.category.toUpperCase()));
topRow.appendChild(createEl('span', 'card-bonus-badge', '+10 🪙'));
topWrap.appendChild(topRow);
topWrap.appendChild(createEl('h2', 'card-title', event.title));
topWrap.appendChild(createEl('p', 'card-desc', event.shortDesc));
const metaList = createEl('div', 'card-meta-list');
metaList.appendChild(createEl('div', 'meta-item', '📅 ' + event.dateList));
metaList.appendChild(createEl('div', 'meta-item', '📍 ' + event.location));
topWrap.appendChild(metaList);
const footer = createEl('div', 'card-footer');
footer.appendChild(createEl('span', 'organizer', event.organizer));
let btnClass = event.featured ? 'btn-card btn-card-light' : 'btn-card btn-card-primary';
let btnText = 'Записаться';
if (isReg) {
btnClass = 'btn-card btn-card-registered';
btnText = 'Вы записаны';
}
const btn = createEl('button', btnClass, btnText);
btn.addEventListener('click', e => toggleRegistration(event.id, e));
footer.appendChild(btn);
card.appendChild(topWrap);
card.appendChild(footer);
return card;
}
function renderFeed() {
const eventsListEl = document.getElementById('events-list');
if (!eventsListEl) return;
eventsListEl.innerHTML = '';
eventsListEl.className = '';
const filtered = EVENTS_DATA.filter(event => {
if (event.isPast) return false;
const matchesCat = currentCategory === 'all' || event.category === currentCategory;
const matchesSearch =
event.title.toLowerCase().includes(searchQuery) ||
event.shortDesc.toLowerCase().includes(searchQuery) ||
event.organizer.toLowerCase().includes(searchQuery);
return matchesCat && matchesSearch;
});
if (filtered.length === 0) {
eventsListEl.appendChild(createEl('div', 'empty-state', 'По вашему запросу событий не найдено'));
return;
}
const groupsMap = {};
const orderedDates = Array.of();
filtered.forEach(event => {
const dateKey = event.dateFull;
if (!groupsMap[dateKey]) {
groupsMap[dateKey] = Array.of();
orderedDates.push(dateKey);
}
groupsMap[dateKey].push(event);
});
orderedDates.forEach(dateKey => {
const section = createEl('div', 'date-group-section');
const header = createEl('div', 'date-group-header');
header.appendChild(createEl('h3', 'date-group-title', '📅 ' + dateKey));
header.appendChild(createEl('div', 'date-group-line'));
section.appendChild(header);
const grid = createEl('div', 'events-grid');
groupsMap[dateKey].forEach(event => {
grid.appendChild(buildFeedCard(event));
});
section.appendChild(grid);
eventsListEl.appendChild(section);
});
}
function openEventDetails(eventId) {
const detailsView = document.getElementById('view-details');
if (!detailsView) {
window.location.href = 'index.html?event=' + eventId;
return;
}
const event = EVENTS_DATA.find(item => item.id === eventId);
if (!event) return;
selectedEventId = eventId;
const user = getCurrentUser();
const isReg = user ? user.registeredIds.includes(eventId) : false;
document.getElementById('detail-tag').textContent = event.tagFull;
document.getElementById('detail-title').textContent = event.title;
document.getElementById('detail-entry').textContent = event.entry;
document.getElementById('detail-short-date').textContent = event.shortDate;
document.getElementById('detail-date').textContent = event.dateFull;
document.getElementById('detail-time').textContent = event.timeRange;
document.getElementById('detail-location').textContent = event.locationFull;
document.getElementById('detail-address').textContent = event.address;
document.getElementById('detail-organizer').textContent = event.organizer;
document.getElementById('detail-description').textContent = event.fullDesc;
const ctaBtn = document.getElementById('detail-cta-btn');
const ctaText = document.getElementById('detail-cta-text');
const ctaArrow = document.getElementById('detail-cta-arrow');
const ctaCaption = document.getElementById('detail-cta-caption');
if (isReg) {
ctaBtn.classList.add('registered');
ctaText.textContent = '✓ Вы записаны (нажмите для отмены)';
ctaArrow.style.display = 'none';
ctaCaption.textContent = 'Подтвердите посещение во вкладке «Мои регистрации» для получения +10 Шабурят';
} else {
ctaBtn.classList.remove('registered');
ctaText.textContent = 'Записаться';
ctaArrow.style.display = 'inline';
ctaCaption.textContent = 'Бонус +10 Шабурят начислится после подтверждения посещения';
}
switchFeedOrDetails('details');
}
function buildRegistrationCard(event) {
const user = getCurrentUser();
const isAttended = user ? user.attendedIds.includes(event.id) : false;
const card = createEl('article', 'event-card');
card.addEventListener('click', () => openEventDetails(event.id));
const topWrap = createEl('div');
const header = createEl('div', 'reg-card-header');
header.appendChild(createEl('span', 'card-tag', event.category.toUpperCase()));
header.appendChild(
createEl('span', 'status-pill-green', isAttended ? '✓ Посещение подтверждено' : '✓ Вы записаны')
);
topWrap.appendChild(header);
topWrap.appendChild(createEl('h2', 'card-title', event.title));
topWrap.appendChild(createEl('p', 'card-desc', event.shortDesc));
const metaList = createEl('div', 'card-meta-list compact');
metaList.appendChild(createEl('div', 'meta-item', '📅 ' + event.dateOnly + ' • ' + event.timeRange));
metaList.appendChild(createEl('div', 'meta-item', '📍 ' + event.location));
topWrap.appendChild(metaList);
topWrap.appendChild(createEl('div', 'organizer reg-organizer', event.organizer));
if (!event.isPast) {
if (isAttended) {
const doneBtn = createEl('button', 'btn-confirm-visit done', '🪙 +10 Шабурят начислено');
doneBtn.addEventListener('click', e => e.stopPropagation());
topWrap.appendChild(doneBtn);
} else {
const confirmBtn = createEl(
'button',
'btn-confirm-visit',
'Подтвердить посещение (+10 Шабурят 🪙)'
);
confirmBtn.addEventListener('click', e => confirmAttendance(event.id, e));
topWrap.appendChild(confirmBtn);
}
}
const actions = createEl('div', 'reg-actions');
if (!event.isPast && !isAttended) {
const cancelLink = createEl('span', 'link-cancel', 'Отменить регистрацию');
cancelLink.addEventListener('click', e => toggleRegistration(event.id, e));
actions.appendChild(cancelLink);
} else {
actions.appendChild(createEl('span'));
}
const detailsLink = createEl('span', 'link-details', 'Подробнее');
detailsLink.addEventListener('click', e => {
e.stopPropagation();
openEventDetails(event.id);
});
actions.appendChild(detailsLink);
card.appendChild(topWrap);
card.appendChild(actions);
return card;
}
function renderRegistrations() {
const registrationsListEl = document.getElementById('registrations-list');
if (!registrationsListEl) return;
registrationsListEl.innerHTML = '';
const user = getCurrentUser();
if (!user) {
const loginPrompt = createEl('div', 'empty-state');
loginPrompt.appendChild(
createEl('p', '', 'Войдите в единую учётную запись, чтобы видеть свои регистрации и копить Шабурята.')
);
const btn = createEl('a', 'btn-login-nav', 'Перейти ко входу');
btn.href = 'login.html';
btn.style.display = 'inline-block';
btn.style.marginTop = '14px';
btn.style.textDecoration = 'none';
loginPrompt.appendChild(btn);
registrationsListEl.appendChild(loginPrompt);
return;
}
const upcomingEvents = EVENTS_DATA.filter(e => !e.isPast && user.registeredIds.includes(e.id));
const pastEvents = EVENTS_DATA.filter(e => e.isPast);
const listToRender = regTab === 'upcoming' ? upcomingEvents : pastEvents;
if (listToRender.length === 0) {
const emptyText = regTab === 'upcoming'
? 'У вас пока нет предстоящих регистраций'
: 'У вас пока нет прошедших регистраций';
registrationsListEl.appendChild(createEl('div', 'empty-state', emptyText));
return;
}
listToRender.forEach(event => {
registrationsListEl.appendChild(buildRegistrationCard(event));
});
}
// Инициализация
document.addEventListener('DOMContentLoaded', () => {
loadStorage();
renderUserPanel();
updateCounters();
renderFeed();
renderRegistrations();
renderProfilePage();
// Форма на странице login.html
const loginForm = document.getElementById('page-login-form');
if (loginForm) {
loginForm.addEventListener('submit', e => {
e.preventDefault();
handleLogin(
document.getElementById('login-name').value,
document.getElementById('login-group').value
);
});
}
// Демо-кнопки на странице login.html
document.querySelectorAll('.demo-btn').forEach(btn => {
btn.addEventListener('click', () => {
handleLogin(btn.dataset.name, btn.dataset.group);
});
});
// Форма на странице register.html
const registerForm = document.getElementById('page-register-form');
if (registerForm) {
registerForm.addEventListener('submit', e => {
e.preventDefault();
handleRegister(
document.getElementById('reg-name').value,
document.getElementById('reg-group').value,
document.getElementById('reg-email').value
);
});
}
// Кнопки на странице profile.html
const pageLogoutBtn = document.getElementById('btn-page-logout');
if (pageLogoutBtn) {
pageLogoutBtn.addEventListener('click', logoutUser);
}
const profileExportBtn = document.getElementById('btn-profile-export');
if (profileExportBtn) {
profileExportBtn.addEventListener('click', exportDatabaseJSON);
}
// Поиск и фильтры на главной
const searchInput = document.getElementById('search-input');
if (searchInput) {
searchInput.addEventListener('input', e => {
searchQuery = e.target.value.trim().toLowerCase();
renderFeed();
});
}
document.querySelectorAll('#category-chips .chip').forEach(chip => {
chip.addEventListener('click', () => {
document.querySelectorAll('#category-chips .chip').forEach(c => c.classList.remove('active'));
chip.classList.add('active');
currentCategory = chip.dataset.category;
renderFeed();
});
});
const btnBack = document.getElementById('btn-back');
if (btnBack) {
btnBack.addEventListener('click', () => {
window.history.replaceState({}, '', 'index.html');
switchFeedOrDetails('feed');
});
}
const detailCtaBtn = document.getElementById('detail-cta-btn');
if (detailCtaBtn) {
detailCtaBtn.addEventListener('click', () => {
toggleRegistration(selectedEventId);
});
}
// Кнопка теста уведомлений на странице события
const reminderCard = document.querySelector('.reminder-card');
if (reminderCard) {
const testNotifyBtn = createEl(
'button',
'btn-test-notify',
'🔔 Проверить системное уведомление сейчас'
);
testNotifyBtn.type = 'button';
testNotifyBtn.addEventListener('click', () => {
const ev = EVENTS_DATA.find(item => item.id === selectedEventId) || EVENTS_DATA.at(0);
sendSystemNotification(
'Напоминание (за 1 час): ' + ev.title,
'Начало в ' + ev.timeRange + ' • ' + ev.location + '. Не забудьте отметить посещение (+10 Шабурят)!'
);
});
reminderCard.appendChild(testNotifyBtn);
}
document.querySelectorAll('.segment-btn').forEach(btn => {
btn.addEventListener('click', () => {
document.querySelectorAll('.segment-btn').forEach(b => b.classList.remove('active'));
btn.classList.add('active');
regTab = btn.dataset.tab;
renderRegistrations();
});
});
const params = new URLSearchParams(window.location.search);
const eventParam = Number(params.get('event'));
if (eventParam && document.getElementById('view-details')) {
openEventDetails(eventParam);
}
});
