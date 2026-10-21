/* =========================================
   VARIABILI TEMA & RESET
   ========================================= */
:root {
    --bg-base: #07090e;
    --bg-surface: rgba(18, 23, 33, 0.75);
    --bg-surface-solid: #121721;
    --bg-card: rgba(26, 33, 48, 0.65);
    --bg-card-hover: rgba(36, 46, 66, 0.85);
    --text-primary: #f8fafc;
    --text-secondary: #94a3b8;
    --accent: #00f2fe;
    --accent-secondary: #4facfe;
    --accent-glow: rgba(0, 242, 254, 0.35);
    --border-light: rgba(255, 255, 255, 0.08);
    --border-hover: rgba(0, 242, 254, 0.5);
    --shadow-lg: 0 20px 40px rgba(0, 0, 0, 0.6);
    
    --gold: #fbbf24;
    --silver: #e2e8f0;
    --bronze: #d97706;
    --verified: #10b981;
    --unverified: #f43f5e;
}

body.light-mode {
    --bg-base: #f1f5f9;
    --bg-surface: rgba(255, 255, 255, 0.85);
    --bg-surface-solid: #ffffff;
    --bg-card: rgba(248, 250, 252, 0.9);
    --bg-card-hover: #ffffff;
    --text-primary: #0f172a;
    --text-secondary: #64748b;
    --accent: #2563eb;
    --accent-secondary: #3b82f6;
    --accent-glow: rgba(37, 99, 235, 0.25);
    --border-light: rgba(15, 23, 42, 0.1);
    --border-hover: rgba(37, 99, 235, 0.6);
    --shadow-lg: 0 15px 35px rgba(15, 23, 42, 0.08);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Plus Jakarta Sans', sans-serif;
}

body {
    background-color: var(--bg-base);
    color: var(--text-primary);
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    transition: background-color 0.3s ease, color 0.3s ease;
}

h1, h2, h3, h4, .brand-title, .rank-badge {
    font-family: 'Outfit', sans-serif;
}

/* Luci soffuse di sfondo */
.ambient-glow {
    position: fixed;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    filter: blur(140px);
    opacity: 0.12;
    pointer-events: none;
    z-index: 0;
}
.glow-1 { top: -200px; left: -200px; background: var(--accent); }
.glow-2 { bottom: -200px; right: -200px; background: #a855f7; }

/* Scrollbar Personalizzata */
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(148, 163, 184, 0.25); border-radius: 10px; }
::-webkit-scrollbar-thumb:hover { background: var(--accent); }

/* =========================================
   NAVBAR
   ========================================= */
.navbar {
    height: 75px;
    background: var(--bg-surface);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border-light);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.5rem;
    z-index: 100;
    flex-shrink: 0;
}

.nav-brand {
    display: flex;
    align-items: center;
    gap: 14px;
}

.brand-icon {
    width: 42px;
    height: 42px;
    border-radius: 10px;
    background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    color: #000;
    box-shadow: 0 0 20px var(--accent-glow);
}
body.light-mode .brand-icon { color: #fff; }

.brand-text {
    display: flex;
    flex-direction: column;
}

.brand-title {
    font-weight: 900;
    font-size: 1.4rem;
    letter-spacing: 1.5px;
    line-height: 1;
}

.brand-sub {
    font-size: 0.65rem;
    font-weight: 700;
    color: var(--accent);
    letter-spacing: 2px;
    margin-top: 2px;
}

.nav-links {
    display: flex;
    gap: 0.75rem;
    background: rgba(0, 0, 0, 0.2);
    padding: 6px;
    border-radius: 12px;
    border: 1px solid var(--border-light);
}
body.light-mode .nav-links { background: rgba(0,0,0,0.04); }

.nav-btn {
    background: transparent;
    border: none;
    color: var(--text-secondary);
    font-weight: 600;
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-btn:hover {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.05);
}

.nav-btn.active {
    background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
    color: #05070a;
    font-weight: 700;
    box-shadow: 0 4px 15px var(--accent-glow);
}
body.light-mode .nav-btn.active { color: #ffffff; }

.theme-btn {
    width: 42px;
    height: 42px;
    border-radius: 10px;
    border: 1px solid var(--border-light);
    background: var(--bg-card);
    color: var(--accent);
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s ease;
}
.theme-btn:hover {
    transform: translateY(-2px) rotate(15deg);
    border-color: var(--accent);
    box-shadow: 0 0 15px var(--accent-glow);
}

/* =========================================
   SPLIT-VIEW LAYOUT
   ========================================= */
.content {
    flex: 1;
    overflow: hidden;
    position: relative;
    z-index: 1;
}

.page-section {
    display: none;
    height: 100%;
    width: 100%;
}

.page-section.active {
    display: block;
    animation: fadeSection 0.35s ease;
}

@keyframes fadeSection {
    from { opacity: 0; transform: scale(0.99); }
    to { opacity: 1; transform: scale(1); }
}

.split-layout {
    display: grid;
    grid-template-columns: 430px 1fr;
    height: 100%;
    max-width: 1700px;
    margin: 0 auto;
    gap: 1.5rem;
    padding: 1.5rem 2.5rem;
}

/* COLONNA SINISTRA (LISTA) */
.sidebar-list {
    display: flex;
    flex-direction: column;
    background: var(--bg-surface);
    backdrop-filter: blur(12px);
    border: 1px solid var(--border-light);
    border-radius: 18px;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
}

.search-box {
    padding: 1rem 1.2rem;
    border-bottom: 1px solid var(--border-light);
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(0, 0, 0, 0.15);
}
.search-box i { color: var(--text-secondary); }
.search-box input {
    width: 100%;
    background: transparent;
    border: none;
    color: var(--text-primary);
    font-size: 0.95rem;
    outline: none;
}

.scrollable-list {
    flex: 1;
    overflow-y: auto;
    padding: 0.8rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
}

/* CARD MINI NELLA LISTA A SINISTRA */
.list-item-card {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0.75rem;
    background: var(--bg-card);
    border: 1px solid var(--border-light);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);
    position: relative;
    overflow: hidden;
}

.list-item-card::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: transparent;
    transition: background 0.25s ease;
}

.list-item-card:hover {
    transform: translateX(6px);
    background: var(--bg-card-hover);
    border-color: var(--border-hover);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
}

.list-item-card.selected {
    background: var(--bg-card-hover);
    border-color: var(--accent);
    box-shadow: 0 0 20px var(--accent-glow);
}
.list-item-card.selected::before {
    background: var(--accent);
}

.item-rank {
    font-family: 'Outfit', sans-serif;
    font-weight: 900;
    font-size: 1.25rem;
    min-width: 48px;
    text-align: center;
    color: var(--text-secondary);
}
.rank-1 .item-rank { color: var(--gold); text-shadow: 0 0 12px rgba(251, 191, 36, 0.5); font-size: 1.4rem; }
.rank-2 .item-rank { color: var(--silver); text-shadow: 0 0 12px rgba(226, 232, 240, 0.4); font-size: 1.35rem; }
.rank-3 .item-rank { color: var(--bronze); text-shadow: 0 0 12px rgba(217, 119, 6, 0.4); font-size: 1.3rem; }

.item-thumb {
    width: 85px;
    height: 52px;
    border-radius: 8px;
    overflow: hidden;
    flex-shrink: 0;
    background: #000;
    border: 1px solid var(--border-light);
}
.item-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}
.list-item-card:hover .item-thumb img {
    transform: scale(1.12);
}

.item-info {
    flex: 1;
    min-width: 0;
}
.item-title {
    font-weight: 700;
    font-size: 1rem;
    color: var(--text-primary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.item-sub {
    font-size: 0.8rem;
    color: var(--text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.item-pts {
    font-family: 'Outfit', sans-serif;
    font-weight: 800;
    font-size: 0.9rem;
    color: var(--accent);
    background: rgba(0, 242, 254, 0.1);
    padding: 4px 10px;
    border-radius: 20px;
    flex-shrink: 0;
}
body.light-mode .item-pts { background: rgba(37, 99, 235, 0.1); }

/* =========================================
   COLONNA DESTRA (PANNELLO DETTAGLIO GRANDE)
   ========================================= */
.detail-pane {
    background: var(--bg-surface);
    backdrop-filter: blur(16px);
    border: 1px solid var(--border-light);
    border-radius: 18px;
    overflow-y: auto;
    padding: 2rem;
    box-shadow: var(--shadow-lg);
    position: relative;
}

.detail-animate {
    animation: slideInRight 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideInRight {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Video / Immagine Showcase */
.media-showcase {
    width: 100%;
    aspect-ratio: 16 / 9;
    max-height: 460px;
    background: #000;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid var(--border-light);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
    margin-bottom: 1.8rem;
}
.media-showcase iframe, .media-showcase img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.detail-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--border-light);
    margin-bottom: 1.8rem;
}

.detail-title-group h1 {
    font-size: 2.6rem;
    font-weight: 900;
    line-height: 1.1;
    display: flex;
    align-items: center;
    gap: 12px;
}

.rank-pill {
    background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
    color: #000;
    font-size: 1.3rem;
    padding: 4px 14px;
    border-radius: 10px;
    font-weight: 900;
}
body.light-mode .rank-pill { color: #fff; }

.detail-points-badge {
    text-align: right;
    background: rgba(0, 242, 254, 0.08);
    border: 1px solid var(--border-hover);
    padding: 0.8rem 1.4rem;
    border-radius: 14px;
    flex-shrink: 0;
}
.detail-points-badge span {
    display: block;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--text-secondary);
}
.detail-points-badge strong {
    font-family: 'Outfit', sans-serif;
    font-size: 2rem;
    font-weight: 900;
    color: var(--accent);
}

/* Griglia Statistiche Livello */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    gap: 1rem;
    margin-bottom: 1.8rem;
}

.stat-card {
    background: var(--bg-card);
    border: 1px solid var(--border-light);
    padding: 1.1rem 1.3rem;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 14px;
    transition: transform 0.2s ease, border-color 0.2s ease;
}
.stat-card:hover {
    transform: translateY(-3px);
    border-color: var(--border-hover);
}

.stat-icon {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: rgba(0, 242, 254, 0.1);
    color: var(--accent);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    flex-shrink: 0;
}

.stat-content small {
    display: block;
    font-size: 0.75rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 1px;
}
.stat-content strong {
    font-size: 1.05rem;
    color: var(--text-primary);
}

/* =========================================
   STATS VIEWER & GD ICONS
   ========================================= */
.gd-avatar-mini {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.35);
    border: 1px solid var(--border-light);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    flex-shrink: 0;
}
.gd-avatar-mini img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
    transition: transform 0.25s ease;
}
.list-item-card:hover .gd-avatar-mini img {
    transform: scale(1.18) rotate(-8deg);
}

/* Profilo Giocatore Grande a Destra */
.player-Banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(135deg, rgba(0, 242, 254, 0.12), rgba(168, 85, 247, 0.12));
    border: 1px solid var(--border-light);
    padding: 2rem;
    border-radius: 16px;
    margin-bottom: 2rem;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.player-identity {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.gd-avatar-large {
    width: 90px;
    height: 90px;
    border-radius: 18px;
    background: var(--bg-surface-solid);
    border: 2px solid var(--accent);
    box-shadow: 0 0 25px var(--accent-glow);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    position: relative;
}
.gd-avatar-large img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 5px 10px rgba(0,0,0,0.6));
}

.player-title-box h1 {
    font-size: 2.4rem;
    font-weight: 900;
    display: flex;
    align-items: center;
    gap: 12px;
}

.gd-badge-status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.8rem;
    color: var(--text-secondary);
    margin-top: 6px;
    background: rgba(0,0,0,0.25);
    padding: 4px 10px;
    border-radius: 6px;
}
.gd-badge-status i { color: var(--accent); }

.player-sections-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 1.8rem;
}

.info-panel {
    background: var(--bg-card);
    border: 1px solid var(--border-light);
    border-radius: 14px;
    padding: 1.5rem;
}
.info-panel h3 {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 8px;
}

.badge-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 12px;
    border-radius: 8px;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-bottom: 8px;
}
.badge-verified { background: rgba(16, 185, 129, 0.15); color: var(--verified); border: 1px solid rgba(16, 185, 129, 0.4); }
.badge-unverified { background: rgba(244, 63, 94, 0.15); color: var(--unverified); border: 1px solid rgba(244, 63, 94, 0.4); }

/* Tag dei livelli completati cliccabili */
.completed-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.level-pill {
    background: var(--bg-surface-solid);
    border: 1px solid var(--border-light);
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 6px;
}
.level-pill span { color: var(--accent); font-weight: 800; font-family: 'Outfit', sans-serif; }
.level-pill:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--accent-glow);
}

/* Barre di Progresso */
.prog-item {
    margin-bottom: 1rem;
}
.prog-item:last-child { margin-bottom: 0; }
.prog-header {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 6px;
}
.prog-pct { color: var(--accent); font-weight: 800; }
.prog-track {
    height: 8px;
    background: rgba(0, 0, 0, 0.35);
    border-radius: 10px;
    overflow: hidden;
}
body.light-mode .prog-track { background: rgba(0,0,0,0.1); }
.prog-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--accent-secondary), var(--accent));
    border-radius: 10px;
    box-shadow: 0 0 10px var(--accent-glow);
    transition: width 0.6s ease;
}

/* =========================================
   SEZIONE DA VERIFICARE
   ========================================= */
#da-verificare {
    overflow-y: auto;
    padding: 2rem 2.5rem;
}

.section-banner {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 3rem auto;
}
.section-banner h1 { font-size: 2.5rem; margin-bottom: 0.5rem; color: var(--accent); }
.section-banner p { color: var(--text-secondary); }

.upcoming-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem;
    max-width: 1400px;
    margin: 0 auto;
}

.upcoming-card {
    background: var(--bg-card);
    border: 1px solid var(--border-light);
    border-radius: 14px;
    padding: 1.5rem;
    transition: all 0.25s ease;
    position: relative;
    overflow: hidden;
}
.upcoming-card:hover {
    transform: translateY(-5px);
    border-color: var(--border-hover);
    box-shadow: var(--shadow-lg);
}

/* =========================================
   RESPONSIVE MOBILE
   ========================================= */
@media (max-width: 1024px) {
    body { overflow: auto; height: auto; }
    .content { overflow: visible; }
    .split-layout {
        grid-template-columns: 1fr;
        height: auto;
        padding: 1rem;
    }
    .sidebar-list { max-height: 420px; }
    .player-sections-grid { grid-template-columns: 1fr; }
    .navbar { padding: 1rem; flex-wrap: wrap; height: auto; gap: 10px; }
}
