:root {
  --bg-app: #0d1017;
  --bg-surface: #161b26;
  --bg-surface-hover: #1e2534;
  --bg-input: #171c26;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --text-primary: #ffffff;
  --text-secondary: #8f9bb3;
  --text-muted: #5c6880;
  --accent-blue: #5872f5;
  --accent-blue-hover: #4760e0;
  --accent-gradient: linear-gradient(135deg, #6277f7 0%, #525ce5 100%);
  --accent-purple-text: #8ea0ff;
  --bonus-bg: rgba(245, 158, 11, 0.16);
  --bonus-text: #fbbf24;
  --bonus-border: rgba(245, 158, 11, 0.35);
  --success-bg: rgba(34, 197, 94, 0.14);
  --success-text: #4ade80;
  --danger-text: #f87171;
  --radius-xl: 24px;
  --radius-lg: 20px;
  --radius-md: 14px;
  --radius-pill: 999px;
  --font-main: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Inter, sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
}

body {
  background-color: var(--bg-app);
  color: var(--text-primary);
  font-family: var(--font-main);
  min-height: 100vh;
  line-height: 1.45;
}

.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: rgba(13, 16, 23, 0.94);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border-subtle);
  padding-top: env(safe-area-inset-top, 0px);
}

.topbar-inner {
  min-height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding-top: 8px;
  padding-bottom: 8px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--text-primary);
}

.brand-badge {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: var(--accent-gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 16px;
  color: #ffffff;
}

.brand-name {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.nav-tabs {
  display: flex;
  gap: 8px;
}

.tab-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 16px;
  border-radius: var(--radius-md);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  transition: 0.2s;
}

.tab-item:hover {
  color: var(--text-primary);
  background-color: rgba(255, 255, 255, 0.04);
}

.tab-item.active {
  background-color: rgba(88, 114, 245, 0.16);
  color: var(--accent-purple-text);
  font-weight: 600;
}

.nav-counter {
  background-color: var(--accent-blue);
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: var(--radius-pill);
}

/* Панель пользователя и баланса в шапке */
.user-panel {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-login-nav {
  background-color: var(--accent-blue);
  color: #ffffff;
  border: none;
  border-radius: var(--radius-md);
  padding: 9px 16px;
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.btn-login-nav:hover {
  background-color: var(--accent-blue-hover);
}

.bonus-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: var(--bonus-bg);
  border: 1px solid var(--bonus-border);
  color: var(--bonus-text);
  padding: 7px 13px;
  border-radius: var(--radius-pill);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;
}

.bonus-pill:hover {
  filter: brightness(1.1);
}

.user-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  padding: 6px 12px;
  border-radius: var(--radius-pill);
  font-size: 13px;
}

.user-name-text {
  font-weight: 600;
  color: var(--text-primary);
}

.btn-logout {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 12px;
  cursor: pointer;
  padding-left: 6px;
  border-left: 1px solid var(--border-subtle);
}

.btn-logout:hover {
  color: var(--danger-text);
}

/* Основная область */
.main-wrapper {
  padding-top: 32px;
  padding-bottom: 64px;
}

.screen-content {
  display: none;
  animation: fadeIn 0.2s ease;
}

.screen-content.active {
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
}

.eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-bottom: 6px;
}

.page-title {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 4px;
}

.page-subtitle {
  font-size: 14px;
  color: var(--text-secondary);
}

.controls-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 28px;
}

.search-box {
  background-color: var(--bg-input);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  height: 44px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  min-width: 260px;
  max-width: 420px;
}

.search-box input {
  background: none;
  border: none;
  outline: none;
  color: var(--text-primary);
  font-size: 14px;
  width: 100%;
}

.search-box input::placeholder {
  color: var(--text-secondary);
}

.chips-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.chip {
  padding: 9px 18px;
  border-radius: var(--radius-pill);
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
}

.chip:hover {
  border-color: rgba(255, 255, 255, 0.2);
  color: var(--text-primary);
}

.chip.active {
  background-color: var(--accent-blue);
  color: #ffffff;
  border-color: var(--accent-blue);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 16px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
}

.section-meta {
  font-size: 13px;
  color: var(--text-secondary);
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 18px;
}

.event-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.18s ease, background-color 0.2s, border-color 0.2s;
}

.event-card:hover {
  transform: translateY(-3px);
  background-color: var(--bg-surface-hover);
  border-color: rgba(255, 255, 255, 0.16);
}

.event-card.featured {
  background: var(--accent-gradient);
  border: none;
}

.event-card.featured:hover {
  filter: brightness(1.04);
}

.card-top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.card-tag {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent-purple-text);
  display: inline-block;
}

.event-card.featured .card-tag {
  color: rgba(255, 255, 255, 0.85);
}

.card-bonus-badge {
  font-size: 11px;
  font-weight: 700;
  color: var(--bonus-text);
  background-color: var(--bonus-bg);
  padding: 3px 9px;
  border-radius: var(--radius-pill);
}

.event-card.featured .card-bonus-badge {
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

.card-title {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 6px;
}

.card-desc {
  font-size: 13.5px;
  color: var(--text-secondary);
  margin-bottom: 16px;
  line-height: 1.45;
}

.event-card.featured .card-desc {
  color: rgba(255, 255, 255, 0.88);
}

.card-meta-list {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 16px;
}

.card-meta-list.compact {
  margin-bottom: 10px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #cbd5e1;
}

.event-card.featured .meta-item {
  color: rgba(255, 255, 255, 0.94);
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin-top: auto;
}

.event-card.featured .card-footer {
  border-top-color: rgba(255, 255, 255, 0.2);
}

.organizer {
  font-size: 12.5px;
  color: var(--text-secondary);
}

.reg-organizer {
  margin-bottom: 12px;
}

.event-card.featured .organizer {
  color: rgba(255, 255, 255, 0.88);
}

.btn-card {
  padding: 8px 16px;
  border-radius: var(--radius-pill);
  font-size: 12.5px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: 0.2s;
}

.btn-card-light {
  background-color: #ffffff;
  color: #2f3b8f;
}

.btn-card-primary {
  background-color: rgba(88, 114, 245, 0.2);
  color: #9aaaff;
}

.btn-card-registered {
  background-color: var(--success-bg);
  color: var(--success-text);
}

.btn-confirm-visit {
  width: 100%;
  margin-top: 10px;
  padding: 9px 14px;
  border-radius: var(--radius-md);
  background-color: var(--bonus-bg);
  border: 1px solid var(--bonus-border);
  color: var(--bonus-text);
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.btn-confirm-visit:hover {
  filter: brightness(1.12);
}

.btn-confirm-visit.done {
  background-color: var(--success-bg);
  border-color: rgba(74, 222, 128, 0.3);
  color: var(--success-text);
  cursor: default;
}

/* Детали события */
.nav-header {
  margin-bottom: 20px;
}

.back-btn {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 9px 16px;
  color: var(--text-primary);
  cursor: pointer;
  font-size: 13.5px;
  font-weight: 500;
  transition: 0.2s;
}

.back-btn:hover {
  background-color: var(--bg-surface-hover);
}

.details-layout {
  display: grid;
grid-template-columns: 1.4fr 1fr;
gap: 28px;
align-items: start;
}
.hero-banner {
background: var(--accent-gradient);
border-radius: var(--radius-xl);
padding: 28px;
margin-bottom: 24px;
}
.hero-tag {
font-size: 11px;
font-weight: 700;
letter-spacing: 0.08em;
text-transform: uppercase;
color: rgba(255, 255, 255, 0.85);
margin-bottom: 12px;
}
.hero-title {
font-size: 32px;
font-weight: 700;
line-height: 1.2;
margin-bottom: 28px;
}
.hero-bottom {
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
gap: 12px;
}
.hero-badges {
display: flex;
gap: 8px;
flex-wrap: wrap;
}
.badge-free,
.badge-bonus {
background: rgba(255, 255, 255, 0.18);
padding: 7px 14px;
border-radius: var(--radius-pill);
font-size: 13px;
font-weight: 600;
}
.hero-date {
font-size: 24px;
font-weight: 700;
}
.about-block {
background-color: var(--bg-surface);
border: 1px solid var(--border-subtle);
border-radius: var(--radius-lg);
padding: 24px;
}
.about-block h3 {
font-size: 18px;
font-weight: 600;
margin-bottom: 10px;
}
.about-block p {
font-size: 14.5px;
line-height: 1.6;
color: #cbd5e1;
}
.info-card {
background-color: var(--bg-surface);
border: 1px solid var(--border-subtle);
border-radius: var(--radius-xl);
padding: 24px;
}
.info-list {
display: flex;
flex-direction: column;
gap: 16px;
margin-bottom: 24px;
}
.info-row {
display: flex;
align-items: flex-start;
gap: 12px;
}
.info-icon {
width: 38px;
height: 38px;
border-radius: 11px;
background-color: var(--bg-app);
display: flex;
align-items: center;
justify-content: center;
color: var(--accent-purple-text);
flex-shrink: 0;
}
.info-main {
font-size: 14.5px;
font-weight: 600;
margin-bottom: 2px;
}
.info-sub {
font-size: 12.5px;
color: var(--text-secondary);
}
.reminder-card {
background-color: var(--bg-app);
border: 1px solid var(--border-subtle);
border-radius: var(--radius-md);
padding: 14px;
margin-bottom: 20px;
}
.reminder-top {
display: flex;
align-items: center;
justify-content: space-between;
padding-bottom: 10px;
border-bottom: 1px solid var(--border-subtle);
margin-bottom: 8px;
}
.reminder-left {
display: flex;
align-items: center;
gap: 10px;
}
.reminder-title {
font-size: 13.5px;
font-weight: 600;
}
.reminder-sub {
font-size: 11.5px;
color: var(--text-secondary);
}
.reminder-note {
font-size: 11px;
color: var(--text-muted);
}
.switch {
position: relative;
display: inline-block;
width: 44px;
height: 24px;
}
.switch input {
opacity: 0;
width: 0;
height: 0;
}
.slider {
position: absolute;
cursor: pointer;
inset: 0;
background-color: #2c3446;
border-radius: 34px;
transition: 0.3s;
}
.slider:before {
position: absolute;
content: "";
height: 18px;
width: 18px;
left: 3px;
bottom: 3px;
background-color: white;
border-radius: 50%;
transition: 0.3s;
}
input:checked + .slider {
background-color: var(--accent-blue);
}
input:checked + .slider:before {
transform: translateX(20px);
}
.btn-cta {
width: 100%;
height: 52px;
border-radius: var(--radius-md);
background-color: var(--accent-blue);
color: #ffffff;
font-size: 15px;
font-weight: 600;
border: none;
display: flex;
align-items: center;
justify-content: center;
position: relative;
cursor: pointer;
margin-bottom: 10px;
transition: 0.2s;
}
.btn-cta:hover {
background-color: var(--accent-blue-hover);
}
.btn-cta.registered {
background-color: var(--success-bg);
color: var(--success-text);
border: 1px solid rgba(74, 222, 128, 0.3);
}
.btn-cta .arrow {
position: absolute;
right: 18px;
}
.cta-caption {
text-align: center;
font-size: 12px;
color: var(--text-secondary);
}
/* Мои регистрации */
.segmented-control {
display: inline-grid;
grid-template-columns: 1fr 1fr;
background-color: var(--bg-surface);
padding: 4px;
border-radius: var(--radius-md);
border: 1px solid var(--border-subtle);
}
.segment-btn {
padding: 9px 18px;
border-radius: 10px;
border: none;
background: transparent;
color: var(--text-secondary);
font-size: 13px;
font-weight: 500;
cursor: pointer;
transition: 0.2s;
white-space: nowrap;
}
.segment-btn.active {
background-color: #252c3d;
color: #ffffff;
font-weight: 600;
}
.alert-banner {
background: var(--bonus-bg);
border: 1px solid var(--bonus-border);
border-radius: var(--radius-md);
padding: 14px 18px;
display: flex;
align-items: center;
gap: 14px;
margin-bottom: 24px;
}
.alert-icon {
width: 36px;
height: 36px;
border-radius: 10px;
background-color: rgba(245, 158, 11, 0.25);
display: flex;
align-items: center;
justify-content: center;
flex-shrink: 0;
font-size: 18px;
}
.alert-title {
font-size: 14px;
font-weight: 600;
color: var(--bonus-text);
margin-bottom: 2px;
}
.alert-sub {
font-size: 12.5px;
color: var(--text-secondary);
}
.month-label {
font-size: 11px;
font-weight: 700;
letter-spacing: 0.08em;
text-transform: uppercase;
color: var(--text-secondary);
margin-bottom: 12px;
}
.reg-card-header {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 8px;
}
.status-pill-green {
background-color: var(--success-bg);
color: var(--success-text);
font-size: 11px;
font-weight: 600;
padding: 4px 10px;
border-radius: var(--radius-pill);
}
.reg-actions {
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 14px;
padding-top: 12px;
border-top: 1px solid var(--border-subtle);
font-size: 13px;
font-weight: 500;
}
.link-cancel {
color: var(--danger-text);
cursor: pointer;
}
.link-details {
color: var(--accent-purple-text);
cursor: pointer;
}
.empty-state {
grid-column: 1 / -1;
text-align: center;
padding: 48px 16px;
color: var(--text-secondary);
font-size: 14px;
background-color: var(--bg-surface);
border-radius: var(--radius-lg);
border: 1px dashed var(--border-subtle);
}
.empty-promo {
margin-top: 40px;
padding: 20px 24px;
background-color: var(--bg-surface);
border-radius: var(--radius-lg);
border: 1px solid var(--border-subtle);
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
gap: 12px;
}
.empty-promo-title {
font-size: 14px;
font-weight: 600;
}
.empty-promo-link {
color: var(--accent-purple-text);
font-size: 13.5px;
font-weight: 600;
text-decoration: none;
}
/* Модальные окна */
.modal-backdrop {
position: fixed;
inset: 0;
background-color: rgba(0, 0, 0, 0.72);
backdrop-filter: blur(6px);
display: none;
align-items: center;
justify-content: center;
padding: 16px;
z-index: 200;
}
.modal-backdrop.open {
display: flex;
}
.modal-card {
width: 100%;
max-width: 440px;
background-color: var(--bg-surface);
border: 1px solid var(--border-subtle);
border-radius: var(--radius-xl);
padding: 24px;
box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6);
}
.modal-header {
display: flex;
justify-content: space-between;
align-items: flex-start;
margin-bottom: 8px;
}
.modal-title {
font-size: 22px;
font-weight: 700;
}
.modal-subtitle {
font-size: 13px;
color: var(--text-secondary);
margin-bottom: 20px;
}
.modal-close {
background: var(--bg-app);
border: 1px solid var(--border-subtle);
color: var(--text-secondary);
width: 32px;
height: 32px;
border-radius: 50%;
cursor: pointer;
font-size: 14px;
}
.auth-form {
display: flex;
flex-direction: column;
gap: 14px;
}
.form-group {
display: flex;
flex-direction: column;
gap: 6px;
}
.form-group label {
font-size: 12.5px;
font-weight: 500;
color: var(--text-secondary);
}
.form-group input {
height: 44px;
padding: 0 14px;
border-radius: var(--radius-md);
background-color: var(--bg-app);
border: 1px solid var(--border-subtle);
color: var(--text-primary);
font-size: 14px;
outline: none;
}
.form-group input:focus {
border-color: var(--accent-blue);
}
.demo-accounts {
margin-top: 18px;
padding-top: 16px;
border-top: 1px solid var(--border-subtle);
}
.demo-label {
font-size: 12px;
color: var(--text-secondary);
margin-bottom: 10px;
}
.demo-list {
display: flex;
flex-direction: column;
gap: 8px;
}
.demo-btn {
text-align: left;
padding: 10px 14px;
border-radius: var(--radius-md);
background-color: var(--bg-app);
border: 1px solid var(--border-subtle);
color: var(--text-primary);
font-size: 13px;
cursor: pointer;
transition: 0.2s;
}
.demo-btn:hover {
border-color: var(--accent-blue);
}
/* Кошелёк Шабурят */
.wallet-summary {
background-color: var(--bg-app);
border: 1px solid var(--border-subtle);
border-radius: var(--radius-lg);
padding: 16px;
margin-bottom: 14px;
}
.wallet-balance-box {
display: flex;
justify-content: space-between;
align-items: center;
padding-bottom: 12px;
margin-bottom: 12px;
border-bottom: 1px solid var(--border-subtle);
}
.wallet-balance-label {
font-size: 13px;
color: var(--text-secondary);
}
.wallet-balance-value {
font-size: 24px;
font-weight: 800;
color: var(--bonus-text);
}
.wallet-limits {
display: flex;
flex-direction: column;
gap: 6px;
}
.limit-row {
display: flex;
justify-content: space-between;
font-size: 12.5px;
color: var(--text-secondary);
}
.limit-row strong {
color: var(--text-primary);
}
.wallet-rules-note {
font-size: 12px;
color: var(--text-secondary);
background-color: rgba(88, 114, 245, 0.1);
border-radius: var(--radius-md);
padding: 10px 12px;
margin-bottom: 16px;
}
.history-title {
font-size: 14px;
font-weight: 600;
margin-bottom: 10px;
}
.history-list {
max-height: 220px;
overflow-y: auto;
display: flex;
flex-direction: column;
gap: 8px;
}
.history-item {
display: flex;
justify-content: space-between;
align-items: center;
background-color: var(--bg-app);
padding: 10px 12px;
border-radius: var(--radius-md);
font-size: 12.5px;
}
.history-item-title {
font-weight: 600;
margin-bottom: 2px;
}
.history-item-date {
font-size: 11px;
color: var(--text-secondary);
}
.history-item-amount {
font-weight: 700;
color: var(--success-text);
}
.toast {
position: fixed;
bottom: 24px;
right: 24px;
background-color: #252c3d;
border: 1px solid var(--border-subtle);
color: #ffffff;
padding: 14px 20px;
border-radius: var(--radius-md);
font-size: 13.5px;
font-weight: 500;
opacity: 0;
pointer-events: none;
transform: translateY(10px);
transition: 0.25s ease;
z-index: 300;
box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
}
.toast.show {
opacity: 1;
transform: translateY(0);
}
@media (max-width: 820px) {
.details-layout {
grid-template-columns: 1fr;
}
}
@media (max-width: 560px) {
.topbar {
    padding-top: max(28px, env(safe-area-inset-top));
  }
.container {
padding: 0 16px;
}
.page-title {
font-size: 26px;
}
.hero-title {
font-size: 24px;
}
.search-box {
max-width: 100%;
}
.toast {
left: 16px;
right: 16px;
text-align: center;
}
}
/* Группировка событий по датам на главной странице */
.date-group-section {
  margin-bottom: 32px;
}

.date-group-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.date-group-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
}

.date-group-line {
  flex: 1;
  height: 1px;
  background-color: var(--border-subtle);
}

/* Кнопка теста локального уведомления в карточке события */
.btn-test-notify {
  width: 100%;
  margin-top: 10px;
  padding: 8px 12px;
  border-radius: 10px;
  background-color: rgba(88, 114, 245, 0.14);
  border: 1px solid rgba(88, 114, 245, 0.3);
  color: var(--accent-purple-text);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.btn-test-notify:hover {
  background-color: rgba(88, 114, 245, 0.24);
}

/* Кнопка скачивания локальной JSON-базы в кошельке */
.btn-export-db {
  width: 100%;
  margin-top: 14px;
  padding: 10px 14px;
  border-radius: var(--radius-md);
  background-color: var(--bg-app);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.btn-export-db:hover {
  border-color: var(--accent-blue);
  color: var(--text-primary);
}

/* Страницы входа, регистрации и профиля */
.auth-page-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 64px;
}

.auth-card {
  width: 100%;
  max-width: 440px;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  padding: 28px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
}

.auth-title {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 6px;
}

.auth-subtitle {
  font-size: 13.5px;
  color: var(--text-secondary);
  margin-bottom: 22px;
}

.auth-switch-link {
  text-align: center;
  margin-top: 16px;
  font-size: 13.5px;
  color: var(--text-secondary);
}

.auth-switch-link a {
  color: var(--accent-purple-text);
  font-weight: 600;
  text-decoration: none;
}

.auth-switch-link a:hover {
  text-decoration: underline;
}

.nav-auth-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-register-nav {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  color: var(--text-primary);
  border-radius: var(--radius-md);
  padding: 9px 14px;
  font-size: 13.5px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.2s;
}

.btn-register-nav:hover {
  border-color: var(--accent-blue);
}

.profile-link-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  padding: 6px 14px;
  border-radius: var(--radius-pill);
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
  transition: 0.2s;
}

.profile-link-chip:hover {
  border-color: var(--accent-blue);
}

.profile-grid {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 24px;
  align-items: start;
}

.profile-card,
.wallet-card-section {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  padding: 24px;
}

.profile-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.profile-avatar {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background: var(--accent-gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 14px;
}

.profile-name {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 6px;
}

.profile-group-badge {
  background-color: rgba(88, 114, 245, 0.16);
  color: var(--accent-purple-text);
  font-size: 13px;
  font-weight: 600;
  padding: 5px 12px;
  border-radius: var(--radius-pill);
  margin-bottom: 8px;
}

.profile-contact {
  font-size: 12.5px;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.profile-stats {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding-top: 16px;
  border-top: 1px solid var(--border-subtle);
}

.stat-box {
  background-color: var(--bg-app);
  padding: 12px;
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
}

.stat-num {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
}

.stat-label {
  font-size: 12px;
  color: var(--text-secondary);
}

.btn-logout-page {
  background-color: rgba(248, 113, 113, 0.14);
  border: 1px solid rgba(248, 113, 113, 0.3);
  color: var(--danger-text);
  border-radius: var(--radius-md);
  padding: 10px 18px;
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
}

@media (max-width: 780px) {
  .profile-grid {
    grid-template-columns: 1fr;
  }
}
