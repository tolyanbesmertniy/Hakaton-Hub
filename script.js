// Регистрация Service Worker для офлайн-работы
if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

// База данных событий (два хакатона привязаны к кабинкам Команды 2)
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
    isoDate: '2026-11-17',
    location: 'Корпус А, ауд. 301',
    locationFull: 'Корпус А, аудитория 301',
    address: 'Университетская, 12',
    organizer: 'IT-клуб',
    entry: 'Вход свободный',
    featured: true,
    isPast: false,
    cabinConfig: null
  },
  {
    id: 5,
    category: 'Хакатон',
    tagFull: 'ХАКАТОН / РАЗРАБОТКА • АВТО-БРОНЬ КАБИНКИ',
    title: 'College Hack 2026',
    shortDesc: '48 часов на создание прототипа. При записи автоматически бронируется Кабинка 101.',
    fullDesc: 'Командный хакатон по разработке студенческих сервисов. При записи на событие за вашим профилем автоматически закрепляется переговорная Кабинка 101 на 1 этаже.',
    dateList: '20 ноября • 10:00',
    dateOnly: '20 ноября',
    dateFull: '20 ноября, пятница',
    timeRange: '10:00–12:00',
    shortDate: '20.11',
    timestamp: '2026-11-20T10:00:00',
    isoDate: '2026-11-20',
    location: '1 этаж, Кабинка 101',
    locationFull: 'Коворкинг 1 этаж, Кабинка 101 (Переговорная)',
    address: 'Университетская, 12',
    organizer: 'Хакатон Хаб',
    entry: 'По регистрации',
    featured: false,
    isPast: false,
    cabinConfig: {
      floor: 1,
      roomId: '101',
      roomName: 'Кабинка 101',
      preferredTime: '10:00 – 12:00'
    }
  },
  {
    id: 6,
    category: 'Хакатон',
    tagFull: 'ХАКАТОН / AI & WEB • АВТО-БРОНЬ КАБИНКИ',
    title: 'AI & Web Sprint',
    shortDesc: 'Проектирование умных интерфейсов. При записи бронируется Кабинка 202 с доской.',
    fullDesc: 'Интенсивный хакатон по веб-разработке и ИИ. При регистрации система автоматически бронирует для вас Кабинку 202 с маркерной доской на 2 этаже.',
    dateList: '21 ноября • 12:00',
    dateOnly: '21 ноября',
    dateFull: '21 ноября, суббота',
    timeRange: '12:00–14:00',
    shortDate: '21.11',
    timestamp: '2026-11-21T12:00:00',
    isoDate: '2026-11-21',
    location: '2 этаж, Кабинка 202',
    locationFull: 'Коворкинг 2 этаж, Кабинка 202 (С маркерной доской)',
    address: 'Университетская, 12',
    organizer: 'Хакатон Хаб',
    entry: 'По регистрации',
    featured: false,
    isPast: false,
    cabinConfig: {
      floor: 2,
      roomId: '202',
      roomName: 'Кабинка 202',
      preferredTime: '12:00 – 14:00'
    }
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
    isoDate: '2026-11-18',
    location: 'Коворкинг «Точка»',
    locationFull: 'Коворкинг «Точка», 2 этаж',
    address: 'Студенческий проспект, 5',
    organizer: 'Design community',
    entry: 'Вход свободный',
    featured: false,
    isPast: false,
    cabinConfig: null
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
    isoDate: '2026-11-19',
    location: 'Спорткомплекс, зал 1',
    locationFull: 'Спорткомплекс, игровой зал №1',
    address: 'Спортивная, 8',
    organizer: 'Студенческий спортклуб',
    entry: 'Для всех студентов',
    featured: false,
    isPast: false,
    cabinConfig: null
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
    isoDate: '2026-11-10',
    location: 'Корпус Б, ауд. 105',
    locationFull: 'Корпус Б, аудитория 105',
    address: 'Университетская, 14',
    organizer: 'Бизнес-инкубатор',
    entry: 'Вход свободный',
    featured: false,
    isPast: true,
    cabinConfig: null
  }
);

// Параметры бонусной системы «Шабурята»
const BONUS_PER_VISIT = 10;
const SERVICE_WEEKLY_LIMIT = 20;
const GLOBAL_WEEKLY_LIMIT = 60;

// Ключи единого хранилища («Электронный студенческий» Команды 5 + «Бронь Кабинки» Команды 2)
const SHARED_PROFILE_KEY = 'studentProfile';
const HUB_STATE_KEY = 'hackathon_hub_events_state';
const HUB_LOGGED_OUT_KEY = 'hackathon_hub_logged_out';
const CABINS_ROOMS_KEY = 'it_moscow_rooms';
const CABINS_BOOKINGS_KEY = 'it_moscow_bookings';

// Эталонный профиль из базы Электронного студенческого (Команда 5)
const MASTER_STUDENT_FALLBACK = {
  id: 'st_001',
  name: 'Маслов Максим',
  group: '2ИП-7-25',
  specialty: 'Центр программирования и кибербезопасности · поток Альфа',
  program: '09.02.07 Информационные системы и программирование',
  status: 'active',
  photo: null,
  shaburyata: 0,
  transactions: Array.of()
};

// Базовая структура кабинок Команды 2 (если сервис «Бронь Кабинки» ещё не открывался)
const FALLBACK_CABINS_DB = {
  1: Array.of(
    {
      id: '101',
      name: 'Кабинка 101',
      type: 'Переговорная для мини-команды',
      capacity: 4,
      slots: Array.of(
        { time: '10:00 – 12:00', status: 'free', label: 'Свободно' },
        { time: '12:00 – 14:00', status: 'busy', label: 'Занято (Консультация по БД)' },
        { time: '14:00 – 16:00', status: 'free', label: 'Свободно' },
        { time: '16:00 – 18:00', status: 'free', label: 'Свободно' }
      )
    },
    {
      id: '102',
      name: 'Кабинка 102',
      type: 'Акустическая капсула для созвонов',
      capacity: 1,
      slots: Array.of(
        { time: '10:00 – 12:00', status: 'busy', label: 'Занято (Онлайн-защита)' },
        { time: '12:00 – 14:00', status: 'free', label: 'Свободно' },
        { time: '14:00 – 16:00', status: 'free', label: 'Свободно' },
        { time: '16:00 – 18:00', status: 'free', label: 'Свободно' }
      )
    }
  ),
  2: Array.of(
    {
      id: '201',
      name: 'Кабинка 201',
      type: 'Индивидуальное место с монитором',
      capacity: 1,
      slots: Array.of(
        { time: '10:00 – 12:00', status: 'busy', label: 'Занято (Сдача практики)' },
        { time: '12:00 – 14:00', status: 'free', label: 'Свободно' },
        { time: '14:00 – 16:00', status: 'free', label: 'Свободно' },
        { time: '16:00 – 18:00', status: 'free', label: 'Свободно' }
      )
    },
    {
      id: '202',
      name: 'Кабинка 202',
      type: 'Переговорная с маркерной доской',
      capacity: 4,
      slots: Array.of(
        { time: '10:00 – 12:00', status: 'free', label: 'Свободно' },
        { time: '12:00 – 14:00', status: 'free', label: 'Свободно' },
        { time: '14:00 – 16:00', status: 'free', label: 'Свободно' },
        { time: '16:00 – 18:00', status: 'free', label: 'Свободно' }
      )
    }
  )
};

let sharedStudent = null;
let hubState = {
  registeredIds: Array.of(),
  attendedIds: Array.of(),
  cabinBookingsByEvent: {}
};

// Загрузка единого профиля из «Электронного студенческого» и состояния Хакатон Хаба
function loadIntegratedStorage() {
  const isLoggedOut = localStorage.getItem(HUB_LOGGED_OUT_KEY) === 'true';

  try {
    let rawShared = localStorage.getItem(SHARED_PROFILE_KEY);

    if (!rawShared) {
      localStorage.setItem(SHARED_PROFILE_KEY, JSON.stringify(MASTER_STUDENT_FALLBACK));
      rawShared = JSON.stringify(MASTER_STUDENT_FALLBACK);
    }

    if (!isLoggedOut && rawShared) {
      const parsed = JSON.parse(rawShared);
      if (parsed && parsed.name) {
        sharedStudent = {
          id: parsed.id || 'st_001',
          name: parsed.name,
          group: parsed.group || '2ИП-7-25',
          specialty: parsed.specialty || MASTER_STUDENT_FALLBACK.specialty,
          program: parsed.program || MASTER_STUDENT_FALLBACK.program,
          status: parsed.status || 'active',
          photo: parsed.photo || null,
          shaburyata: typeof parsed.shaburyata === 'number' ? parsed.shaburyata : 0,
          transactions: Array.isArray(parsed.transactions) ? parsed.transactions : Array.of()
        };
      }
    } else {
      sharedStudent = null;
    }
  } catch (e) {
    sharedStudent = null;
  }

  try {
    const rawHub = JSON.parse(localStorage.getItem(HUB_STATE_KEY));
    if (rawHub && typeof rawHub === 'object') {
      hubState.registeredIds = Array.isArray(rawHub.registeredIds) ? rawHub.registeredIds : Array.of();
      hubState.attendedIds = Array.isArray(rawHub.attendedIds) ? rawHub.attendedIds : Array.of();
hubState.cabinBookingsByEvent =
rawHub.cabinBookingsByEvent && typeof rawHub.cabinBookingsByEvent === 'object'
? rawHub.cabinBookingsByEvent
: {};
}
} catch (e) {
hubState = { registeredIds: Array.of(), attendedIds: Array.of(), cabinBookingsByEvent: {} };
}
}
function saveIntegratedStorage() {
if (sharedStudent) {
localStorage.setItem(SHARED_PROFILE_KEY, JSON.stringify(sharedStudent));
localStorage.removeItem(HUB_LOGGED_OUT_KEY);
}
localStorage.setItem(HUB_STATE_KEY, JSON.stringify(hubState));
}
// ================= ИНТЕГРАЦИЯ С СЕРВИСОМ «БРОНЬ КАБИНКИ» (Команда 2) =================
function bookCabinForHackathon(event) {
if (!event.cabinConfig || !sharedStudent) return null;
let roomsDb = null;
let userBookings = Array.of();
try {
roomsDb = JSON.parse(localStorage.getItem(CABINS_ROOMS_KEY));
} catch (e) {
roomsDb = null;
}
if (!roomsDb || typeof roomsDb !== 'object') {
roomsDb = JSON.parse(JSON.stringify(FALLBACK_CABINS_DB));
}
try {
const parsedBookings = JSON.parse(localStorage.getItem(CABINS_BOOKINGS_KEY));
if (Array.isArray(parsedBookings)) userBookings = parsedBookings;
} catch (e) {
userBookings = Array.of();
}
const cfg = event.cabinConfig;
const floorRooms = roomsDb[cfg.floor] || Array.of();
const room = floorRooms.find(r => r.id === cfg.roomId);
if (!room || !Array.isArray(room.slots)) return null;
let targetSlot = room.slots.find(s => s.time === cfg.preferredTime && s.status === 'free');
if (!targetSlot) {
targetSlot = room.slots.find(s => s.status === 'free');
}
if (!targetSlot) return null;
const purposeText =
'Хакатон «' + event.title + '» (' + sharedStudent.name + ', гр. ' + sharedStudent.group + ')';
targetSlot.status = 'booked';
targetSlot.label = 'Забронировано (' + purposeText + ')';
const newBooking = {
id: Date.now(),
roomId: room.id,
roomName: room.name,
floor: cfg.floor,
date: event.isoDate,
time: targetSlot.time,
bookedSlots: Array.of(targetSlot.time),
purpose: purposeText,
studentId: sharedStudent.id,
studentName: sharedStudent.name,
studentGroup: sharedStudent.group,
eventId: event.id
};
userBookings.unshift(newBooking);
localStorage.setItem(CABINS_ROOMS_KEY, JSON.stringify(roomsDb));
localStorage.setItem(CABINS_BOOKINGS_KEY, JSON.stringify(userBookings));
hubState.cabinBookingsByEvent[event.id] = newBooking;
return newBooking;
}
function cancelCabinForHackathon(eventId) {
const savedBooking = hubState.cabinBookingsByEvent[eventId];
if (!savedBooking) return;
try {
const roomsDb = JSON.parse(localStorage.getItem(CABINS_ROOMS_KEY));
const userBookings = JSON.parse(localStorage.getItem(CABINS_BOOKINGS_KEY));
if (roomsDb && roomsDb[savedBooking.floor]) {
const room = roomsDb[savedBooking.floor].find(r => r.id === savedBooking.roomId);
if (room && Array.isArray(room.slots)) {
room.slots.forEach(slot => {
if (slot.time === savedBooking.time) {
slot.status = 'free';
slot.label = 'Свободно';
}
});
}
localStorage.setItem(CABINS_ROOMS_KEY, JSON.stringify(roomsDb));
}
if (Array.isArray(userBookings)) {
const updatedBookings = userBookings.filter(b => b.id !== savedBooking.id);
localStorage.setItem(CABINS_BOOKINGS_KEY, JSON.stringify(updatedBookings));
}
} catch (e) {}
delete hubState.cabinBookingsByEvent[eventId];
}
// Подсчёт заработанных за последние 7 дней Шабурят по транзакциям Команды 5
function getWeeklyEarnedStats() {
if (!sharedStudent || !Array.isArray(sharedStudent.transactions)) {
return { serviceWeekly: 0, totalWeekly: 0 };
}
const weekAgoMs = Date.now() - 7 * 24 * 60 * 60 * 1000;
let serviceWeekly = 0;
let totalWeekly = 0;
sharedStudent.transactions.forEach(tx => {
if (tx.type === 'credit') {
const txTime = new Date(tx.date).getTime();
if (!isNaN(txTime) && txTime >= weekAgoMs) {
const amt = Number(tx.amount) || 0;
totalWeekly += amt;
if (String(tx.reason || '').indexOf('Хакатон Хаб') !== -1) {
serviceWeekly += amt;
}
}
}
});
return { serviceWeekly: serviceWeekly, totalWeekly: totalWeekly };
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
}, 3400);
}
// Отрисовка верхней панели навигации
function renderUserPanel() {
const panelEl = document.getElementById('user-panel');
if (!panelEl) return;
panelEl.innerHTML = '';
if (!sharedStudent) {
const loginLink = createEl('a', 'btn-login-nav', '🪪 Войти по студенческому');
loginLink.href = 'login.html';
loginLink.style.textDecoration = 'none';
panelEl.appendChild(loginLink);
return;
}
const bonusPill = createEl('a', 'bonus-pill', '🪙 ' + sharedStudent.shaburyata + ' Шабурят');
bonusPill.href = 'profile.html';
bonusPill.style.textDecoration = 'none';
panelEl.appendChild(bonusPill);
const profileChip = createEl('a', 'profile-link-chip', '👤 ' + sharedStudent.name);
profileChip.href = 'profile.html';
panelEl.appendChild(profileChip);
}
function updateCounters() {
const regIds = sharedStudent ? hubState.registeredIds : Array.of();
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
// Вход с проверкой профиля из «Электронного студенческого»
function loginFromStudentCard(nameInput, groupInput) {
let masterData = null;
try {
masterData = JSON.parse(localStorage.getItem(SHARED_PROFILE_KEY));
} catch (e) {
masterData = null;
}
if (!masterData) masterData = MASTER_STUDENT_FALLBACK;
if (nameInput && groupInput) {
const cleanName = nameInput.trim().toLowerCase();
const cleanGroup = groupInput.trim().toUpperCase();
if (
masterData.name.trim().toLowerCase() !== cleanName ||
masterData.group.trim().toUpperCase() !== cleanGroup
) {
showToast(
'Профиль не найден в базе Электронного студенческого. Доступен студент: ' +
masterData.name +
' (' +
masterData.group +
')'
);
return;
}
}
localStorage.removeItem(HUB_LOGGED_OUT_KEY);
loadIntegratedStorage();
window.location.href = 'profile.html';
}
function logoutUser() {
sharedStudent = null;
localStorage.setItem(HUB_LOGGED_OUT_KEY, 'true');
window.location.href = 'login.html';
}
// Рендер страницы профиля (profile.html) с данными из Команды 5
function renderProfilePage() {
const profileNameEl = document.getElementById('profile-name');
if (!profileNameEl) return;
if (!sharedStudent) {
window.location.href = 'login.html';
return;
}
const parts = sharedStudent.name.split(' ');
const initials =
(parts.at(0) ? parts.at(0).charAt(0) : '') + (parts.at(1) ? parts.at(1).charAt(0) : '');
document.getElementById('profile-avatar').textContent = initials.toUpperCase() || 'СТ';
profileNameEl.textContent = sharedStudent.name;
document.getElementById('profile-group').textContent = 'Студент • ' + sharedStudent.group;
const statusLabels = {
active: 'Статус: Активен ✅',
suspended: 'Статус: Приостановлен ⛔',
graduated: 'Статус: Выпускник 🎓'
};
const activeCabins = Object.values(hubState.cabinBookingsByEvent || {});
const cabinsSummary =
activeCabins.length > 0
? ' • Бронь: ' + activeCabins.map(c => c.roomName + ' (' + c.time + ')').join(', ')
: '';
const statusEl = document.getElementById('profile-status-line') || document.getElementById('profile-contact');
if (statusEl) {
statusEl.textContent =
(statusLabels[sharedStudent.status] || 'Статус: ' + sharedStudent.status) + cabinsSummary;
}
const specEl = document.getElementById('profile-specialty');
if (specEl) specEl.textContent = sharedStudent.specialty;
const progEl = document.getElementById('profile-program');
if (progEl) progEl.textContent = sharedStudent.program;
document.getElementById('stat-reg-count').textContent = hubState.registeredIds.length;
document.getElementById('stat-att-count').textContent = hubState.attendedIds.length;
const limits = getWeeklyEarnedStats();
document.getElementById('wallet-balance-num').textContent = sharedStudent.shaburyata + ' 🪙';
document.getElementById('wallet-service-limit').textContent =
limits.serviceWeekly + ' / ' + SERVICE_WEEKLY_LIMIT + ' Шабурят';
document.getElementById('wallet-total-limit').textContent =
limits.totalWeekly + ' / ' + GLOBAL_WEEKLY_LIMIT + ' Шабурят';
const historyListEl = document.getElementById('wallet-history-list');
historyListEl.innerHTML = '';
if (!sharedStudent.transactions || sharedStudent.transactions.length === 0) {
historyListEl.appendChild(
createEl('div', 'empty-state', 'Пока нет операций в едином кошельке')
);
} else {
const sortedTxs = sharedStudent.transactions
.slice()
.sort((a, b) => new Date(b.date) - new Date(a.date));
sortedTxs.forEach(tx => {
const row = createEl('div', 'history-item');
const left = createEl('div');
left.appendChild(createEl('div', 'history-item-title', tx.reason || 'Операция'));
const d = new Date(tx.date);
const dateStr = isNaN(d.getTime())
? String(tx.date)
: d.toLocaleDateString('ru-RU', { day: '2-digit', month: 'short', year: 'numeric' });
left.appendChild(createEl('div', 'history-item-date', dateStr));
const sign = tx.type === 'debit' ? '−' : '+';
const right = createEl('div', 'history-item-amount', sign + tx.amount + ' 🪙');
if (tx.type === 'debit') {
right.style.color = 'var(--danger-text)';
}
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
platform: 'College Platform — Хакатон Хаб + Электронный студенческий + Бронь Кабинки',
studentProfile: sharedStudent,
hackathonHubState: hubState,
cabinBookings: JSON.parse(localStorage.getItem(CABINS_BOOKINGS_KEY) || '[]'),
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
// Запись или отмена регистрации + автоматическая бронь кабинки для хакатона
function toggleRegistration(eventId, e) {
if (e) e.stopPropagation();
if (!sharedStudent) {
window.location.href = 'login.html';
return;
}
const event = EVENTS_DATA.find(item => item.id === eventId);
if (!event) return;
if (hubState.registeredIds.includes(eventId)) {
hubState.registeredIds = hubState.registeredIds.filter(id => id !== eventId);
if (event.cabinConfig) {
cancelCabinForHackathon(eventId);
showToast('Запись отменена, бронь ' + event.cabinConfig.roomName + ' снята');
} else {
showToast('Регистрация на «' + event.title + '» отменена');
}
} else {
hubState.registeredIds.push(eventId);
scheduleEventNotifications(event);
if (event.cabinConfig) {
const booking = bookCabinForHackathon(event);
if (booking) {
showToast(
'Вы записаны! Забронирована ' +
booking.roomName +
' (' +
booking.floor +
' этаж, ' +
booking.time +
') на ваш профиль 🏫'
);
} else {
showToast('Вы записаны на хакатон! (Свободных слотов в кабинке уже нет)');
}
} else {
showToast('Вы записаны! Подтвердите посещение, чтобы получить +10 Шабурят');
}
}
saveIntegratedStorage();
renderUserPanel();
updateCounters();
renderFeed();
renderRegistrations();
const detailsView = document.getElementById('view-details');
if (detailsView && detailsView.classList.contains('active') && selectedEventId === eventId) {
openEventDetails(eventId);
}
}
// Начисление +10 Шабурят в единый кошелёк studentProfile
function confirmAttendance(eventId, e) {
if (e) e.stopPropagation();
if (!sharedStudent) {
window.location.href = 'login.html';
return;
}
if (sharedStudent.status !== 'active') {
showToast('Начисление недоступно: статус студента «' + sharedStudent.status + '»');
return;
}
const event = EVENTS_DATA.find(item => item.id === eventId);
if (!event) return;
if (hubState.attendedIds.includes(eventId)) {
showToast('Посещение этого события уже подтверждено');
return;
}
const limits = getWeeklyEarnedStats();
if (limits.serviceWeekly + BONUS_PER_VISIT > SERVICE_WEEKLY_LIMIT) {
showToast('Достигнут недельный лимит сервиса Хакатон Хаб (20 Шабурят)');
return;
}
if (limits.totalWeekly + BONUS_PER_VISIT > GLOBAL_WEEKLY_LIMIT) {
showToast('Достигнут общий недельный лимит начислений (60 Шабурят)');
return;
}
hubState.attendedIds.push(eventId);
sharedStudent.shaburyata += BONUS_PER_VISIT;
sharedStudent.transactions.push({
id: 'tx_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
date: new Date().toISOString(),
amount: BONUS_PER_VISIT,
reason: 'Хакатон Хаб: ' + event.title,
type: 'credit'
});
saveIntegratedStorage();
renderUserPanel();
renderRegistrations();
showToast('Начислено +10 Шабурят в единый кошелёк! Баланс: ' + sharedStudent.shaburyata + ' Ш.');
}
function buildFeedCard(event) {
const isReg = sharedStudent ? hubState.registeredIds.includes(event.id) : false;
const card = createEl('article', event.featured ? 'event-card featured' : 'event-card');
card.addEventListener('click', () => openEventDetails(event.id));
const topWrap = createEl('div');
const topRow = createEl('div', 'card-top-row');
topRow.appendChild(createEl('span', 'card-tag', event.category.toUpperCase()));
topRow.appendChild(
createEl('span', 'card-bonus-badge', event.cabinConfig ? '+10 🪙 • 🏫 Кабинка' : '+10 🪙')
);
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
const isReg = sharedStudent ? hubState.registeredIds.includes(eventId) : false;
const bookedCabin = hubState.cabinBookingsByEvent[eventId];
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
ctaCaption.textContent = bookedCabin
? 'За вами забронирована ' + bookedCabin.roomName + ' (' + bookedCabin.time + ')'
: 'Подтвердите посещение во вкладке «Мои регистрации» для получения +10 Шабурят';
} else {
ctaBtn.classList.remove('registered');
ctaText.textContent = 'Записаться';
ctaArrow.style.display = 'inline';
ctaCaption.textContent = event.cabinConfig
? 'При записи автоматически забронируется ' + event.cabinConfig.roomName + ' на ваш профиль'
: 'Бонус +10 Шабурят начислится после подтверждения посещения';
}
switchFeedOrDetails('details');
}
function buildRegistrationCard(event) {
const isAttended = sharedStudent ? hubState.attendedIds.includes(event.id) : false;
const bookedCabin = hubState.cabinBookingsByEvent[event.id];
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
if (bookedCabin) {
const cabinInfo = createEl(
'div',
'meta-item',
'🏫 Авто-бронь: ' + bookedCabin.roomName + ' (' + bookedCabin.floor + ' этаж, ' + bookedCabin.time + ')'
);
cabinInfo.style.color = 'var(--success-text)';
cabinInfo.style.fontWeight = '600';
metaList.appendChild(cabinInfo);
}
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
if (!sharedStudent) {
const loginPrompt = createEl('div', 'empty-state');
loginPrompt.appendChild(
createEl('p', '', 'Войдите через Электронный студенческий, чтобы видеть свои регистрации и копить Шабурята.')
);
const btn = createEl('a', 'btn-login-nav', '🪪 Войти по студенческому');
btn.href = 'login.html';
btn.style.display = 'inline-block';
btn.style.marginTop = '14px';
btn.style.textDecoration = 'none';
loginPrompt.appendChild(btn);
registrationsListEl.appendChild(loginPrompt);
return;
}
const upcomingEvents = EVENTS_DATA.filter(e => !e.isPast && hubState.registeredIds.includes(e.id));
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
loadIntegratedStorage();
renderUserPanel();
updateCounters();
renderFeed();
renderRegistrations();
renderProfilePage();
// Форма входа по данным из Электронного студенческого
const loginForm = document.getElementById('page-login-form');
if (loginForm) {
loginForm.addEventListener('submit', e => {
e.preventDefault();
loginFromStudentCard(
document.getElementById('login-name').value,
document.getElementById('login-group').value
);
});
}
// Кнопка быстрого входа из базы Электронного студенческого (Команда 5)
const syncStudentBtn = document.getElementById('btn-sync-student-card');
if (syncStudentBtn) {
try {
const sp = JSON.parse(localStorage.getItem(SHARED_PROFILE_KEY)) || MASTER_STUDENT_FALLBACK;
syncStudentBtn.textContent =
'🪪 Войти как ' + sp.name + ' (' + sp.group + ' • ' + (sp.shaburyata || 0) + ' 🪙)';
} catch (e) {}
syncStudentBtn.addEventListener('click', () => {
loginFromStudentCard(null, null);
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
// ================= ПОЛНАЯ КОПИЯ ПРОФИЛЯ И QR-КОДА КОМАНДЫ 5 =================
let scQrTimerInterval = null;
let scSecondsLeft = 60;

function renderProfilePage() {
  const nameEl = document.getElementById('studentName');
  if (!nameEl) return;

  if (!sharedStudent) {
    window.location.href = 'login.html';
    return;
  }

  // Аватар с инициалами как у Команды 5
  const initials = sharedStudent.name
    .split(' ')
    .map(w => w.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase();
  const avatarEl = document.getElementById('avatar');
  if (avatarEl) avatarEl.textContent = initials || 'СТ';

  nameEl.textContent = sharedStudent.name;
  document.getElementById('group').textContent = 'Студент · 2 курс · ' + sharedStudent.group;
  document.getElementById('specialty').textContent = sharedStudent.specialty;
  document.getElementById('program').textContent = sharedStudent.program;

  // Статус студента (Активен / Приостановлен / Выпускник)
  const badge = document.getElementById('statusBadge');
  if (badge) {
    const statusMap = {
      active: 'Статус: Активен',
      suspended: 'Статус: Приостановлен',
      graduated: 'Статус: Выпускник'
    };
    badge.textContent = statusMap[sharedStudent.status] || 'Статус: Неизвестно';
    badge.style.background =
      sharedStudent.status === 'active'
        ? 'rgba(0, 212, 170, 0.15)'
        : 'rgba(255, 77, 109, 0.15)';
    badge.style.color = sharedStudent.status === 'active' ? '#00d4aa' : '#ff4d6d';
  }

  // Баланс и лимиты
  document.getElementById('shaburyataBalance').textContent = sharedStudent.shaburyata;

  const limits = getWeeklyEarnedStats();
  document.getElementById('wallet-service-limit').textContent =
    limits.serviceWeekly + ' / ' + SERVICE_WEEKLY_LIMIT + ' Шабурят';
  document.getElementById('wallet-total-limit').textContent =
    limits.totalWeekly + ' / ' + GLOBAL_WEEKLY_LIMIT + ' Шабурят';

  // Забронированные кабинки Команды 2
  const activeCabins = Object.values(hubState.cabinBookingsByEvent || {});
  const cabinsInfoEl = document.getElementById('profile-cabins-info');
  if (cabinsInfoEl) {
    cabinsInfoEl.textContent =
      activeCabins.length > 0
        ? activeCabins.map(c => c.roomName + ' (' + c.time + ')').join(', ')
        : 'Нет активных броней';
  }

  // История операций в стиле Команды 5
  const historyEl = document.getElementById('walletHistory');
  if (historyEl) {
    historyEl.innerHTML = '';
    if (!sharedStudent.transactions || sharedStudent.transactions.length === 0) {
      historyEl.appendChild(createEl('p', 'sc-meta', 'Пока нет операций'));
    } else {
      const sorted = sharedStudent.transactions
        .slice()
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 10);

      sorted.forEach(tx => {
        const item = createEl('div', 'sc-tx-item');
        const main = createEl('div');
        main.appendChild(createEl('div', 'sc-tx-reason', tx.reason));

        const d = new Date(tx.date);
        const dateStr = isNaN(d.getTime())
          ? String(tx.date)
          : d.toLocaleDateString('ru-RU', { day: '2-digit', month: 'short', year: 'numeric' });
        main.appendChild(createEl('div', 'sc-tx-date', dateStr));

        const sign = tx.type === 'credit' ? '+' : '−';
        const amountEl = createEl('div', 'sc-tx-amount', sign + tx.amount + ' Ш');
        if (tx.type === 'debit') amountEl.classList.add('debit');

        item.appendChild(main);
        item.appendChild(amountEl);
        historyEl.appendChild(item);
      });
    }
  }
}
