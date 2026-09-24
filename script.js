// --- 1. DATI DEI LIVELLI (MAIN LIST) ---
const levels = [
    { rank: 1, name: "Grief easy", creator: "LDexxi", verifier: "SoyXmirzioo", id: "81978987", diff: "Medium demon", pts: 350, yt: "Ic3Vv5qZKe0" },
    { rank: 2, name: "Splatfest (Remake)", creator: "Megadaniel (Orig: FILORGIO2)", verifier: "Megadaniel", id: "147929029", diff: "Easy-Medium demon", pts: 330, yt: "jpobdxhpSbk" },
    { rank: 3, name: "Better Plane (Balanced)", creator: "Megadaniel", verifier: "Megadaniel", id: "147349014", diff: "Easy-Medium demon", pts: 300, yt: "psfIlpNLo5E" },
    { rank: 4, name: "BloodFart", creator: "Megadaniel (Orig: Riot)", verifier: "Megadaniel", id: "147349014", diff: "Insane/Easy demon", pts: 250, yt: "FLzAPJUbTls" },
    { rank: 5, name: "Ci sei cascato (OG)", creator: "Megadaniel", verifier: "SoyXmirzioo", id: "N/A", diff: "Insane", pts: 230, yt: "Z_E5YUMBZ4o" },
    { rank: 6, name: "Spyke Frost", creator: "Fasghki", verifier: "Megadaniel", id: "141091379", diff: "EXTREME DEMON", pts: 220, yt: "WvA2Bo6ryeU" },
    { rank: 7, name: "Night Sky", creator: "Megadaniel & FILORGIO2", verifier: "Megadaniel", id: "144139247", diff: "Insane", pts: 200, yt: "WvA2Bo6ryeU" },
    { rank: 8, name: "Ci sei cascato", creator: "Megadaniel", verifier: "Megadaniel", id: "140467007", diff: "Harder-Insane", pts: 150, yt: "9yzBfKbcbMw" },
    { rank: 9, name: "Impossible damiano", creator: "Megadaniel", verifier: "N/A", id: "147195245", diff: "Insane", pts: 120, yt: "iW2ySWKhopI" },
    { rank: 10, name: "Not even close", creator: "Megadaniel", verifier: "Megadaniel", id: "147854114", diff: "Unknown", pts: 100, yt: "M3kwmdelELM" },
    { rank: 11, name: "Daniel Challenge", creator: "Leonardigno", verifier: "Megadaniel", id: "128031270", diff: "Harder", pts: 60, yt: "JxfawlEj7kU" },
    { rank: 12, name: "Good Wave", creator: "Megadaniel", verifier: "Megadaniel", id: "141767286", diff: "Harder", pts: 50, yt: "ixbB1LOiOOI" },
    { rank: 13, name: "Splatfest (OG)", creator: "FILORGIO2", verifier: "SoyXmirzioo", id: "Unknown", diff: "Hard", pts: 30, yt: "itFccrd7dWY" },
    { rank: 14, name: "Good plane", creator: "Leonardigno", verifier: "Vivincente", id: "76320355", diff: "Unknown", pts: 15, yt: "ixbB1LOiOOI" }
];

// Helper per auto-calcolare i punti dai nomi dei livelli
function getPts(completedNames) {
    let total = 0;
    completedNames.forEach(n => {
        const found = levels.find(l => l.name.toLowerCase() === n.toLowerCase());
        if(found) total += found.pts;
    });
    return total;
}

// Filtri specifici richiesti
const soyExcludes = ["Better Plane (Balanced)", "Splatfest (Remake)", "Splatfest (OG)", "Not even close", "Impossible damiano", "Night Sky", "BloodFart"];
const soyCompleted = levels.map(l => l.name).filter(n => !soyExcludes.includes(n));
const megaCompleted = levels.map(l => l.name).filter(n => n !== "Grief easy");

// --- 2. DATI GIOCATORI ---
const players = [
    {
        name: "SoyxMirzioo",
        flag: "https://flagcdn.com/32x24/it.png",
        demonStats: "17 demon (10 easy, 3 medium, 4 hard)",
        hardest: "Grief Easy",
        completed: soyCompleted,
        pts: getPts(soyCompleted),
        progress: [
            { name: "Bloodfart", label: "71%", val: 71 },
            { name: "Lutto semplificato", label: "30% (23-82, 74-100)", val: 30 },
            { name: "Merz Circles", label: "13%", val: 13 },
            { name: "Sakupen kirkles (Marzio unnerfed)", label: "68%", val: 68 }
        ]
    },
    {
        name: "Megadaniel",
        flag: "https://flagcdn.com/32x24/it.png",
        demonStats: "4 demon (4 easy)",
        hardest: "Splatfest (Remake)",
        completed: megaCompleted,
        pts: getPts(megaCompleted),
        progress: [
            { name: "Grimwire", label: "66%", val: 66 },
            { name: "Crudo Calcestruzzo", label: "22% (11-34%)", val: 22 },
            { name: "Silent Frost", label: "4%", val: 4 },
            { name: "Tortura Medievale unnerfed", label: "34% (64-100%)", val: 34 },
            { name: "Cobra", label: "12% (20-49%)", val: 12 },
            { name: "Shitty limbo", label: "71%", val: 71 },
            { name: "Sakupen kirkles (Daniel)", label: "49% (44-100%)", val: 49 }
        ]
    },
    {
        name: "Leonardigno",
        flag: "",
        demonStats: "UNVERIFIED: 61 (39 easy, 7 medium, 2 hard, 2 insane, 3 exp). VERIFIED: 4",
        hardest: "Ci sei cascato",
        completed: ["Good plane", "Daniel Challenge", "Ci sei cascato"],
        pts: getPts(["Good plane", "Daniel Challenge", "Ci sei cascato"]),
        progress: [
            { name: "Better plane (unnerfed)", label: "30%", val: 30 }
        ]
    },
    {
        name: "Diego calvani",
        flag: "",
        demonStats: "Tutti",
        hardest: "Fingerding (RECORD MONDIALE IN 3 JUMP)",
        completed: ["Fingerding", "Dash", "Unnerfed silent open window"],
        pts: 0,
        progress: [
            { name: "Centocelle", label: "50%", val: 50 }
        ]
    },
    {
        name: "Steffo242",
        flag: "",
        demonStats: "UNVERIFIED: 8. VERIFIED: 1 easy",
        hardest: "N/A",
        completed: [],
        pts: 0,
        progress: []
    }
];

// Ordina giocatori per punti!
players.sort((a, b) => b.pts - a.pts);

// --- 3. DATI DA VERIFICARE ---
const upcoming = [
    { name: "Shitty bloodbath", wr: "Nessun record" },
    { name: "Grimwire", wr: "66% - Megadaniel" },
    { name: "Merz circles", wr: "16% - Megadaniel" },
    { name: "Lutto semplificato", wr: "30% - SoyXmirzioo" },
    { name: "Sakupen kirkles (Daniel's)", wr: "49% - Megadaniel" },
    { name: "Sakupen kirkles (Marzio's)", wr: "51% - SoyXmirzioo" },
    { name: "Shitty limbo", wr: "71% - Megadaniel" },
    { name: "Crudo calcestruzzo", wr: "22% - Megadaniel" },
    { name: "Sakupen end EZ", wr: "63% - Megadaniel / SoyXmirzioo" }
];


// --- RENDERIZZAZIONE HTML DINAMICA ---

// Render Main List
const listEl = document.getElementById('levels-container');
levels.forEach(lvl => {
    listEl.innerHTML += `
        <div class="level-card">
            <div class="level-rank"><span>#${lvl.rank}</span></div>
            <div class="level-thumb">
                <img src="https://img.youtube.com/vi/${lvl.yt}/mqdefault.jpg" alt="${lvl.name}">
            </div>
            <div class="level-info">
                <div class="level-title-row">
                    <h2>${lvl.name}</h2>
                    <div class="level-points">${lvl.pts} PT</div>
                </div>
                <div class="level-creators">
                    Creato da <strong>${lvl.creator}</strong> | Verificato da <strong>${lvl.verifier}</strong>
                </div>
                <div class="level-stats">
                    <div><i class="fas fa-fingerprint"></i> ID: ${lvl.id}</div>
                    <div><i class="fas fa-skull"></i> ${lvl.diff}</div>
                </div>
                <a href="https://youtu.be/${lvl.yt}" target="_blank" class="btn-showcase">
                    <i class="fab fa-youtube"></i> Guarda Showcase
                </a>
            </div>
        </div>
    `;
});

// Render Stats Viewer
const playersEl = document.getElementById('players-container');
players.forEach((p, i) => {
    const rankClass = i === 0 ? 'rank-1' : i === 1 ? 'rank-2' : i === 2 ? 'rank-3' : '';
    const complHtml = p.completed.length ? p.completed.map(c => `<li>${c}</li>`).join('') : '<li>Nessuno</li>';
    
    // Genera le barre di progresso visive
    const progHtml = p.progress.length ? p.progress.map(pr => `
        <div class="prog-wrapper">
            <div class="prog-text"><span>${pr.name}</span> <span>${pr.label}</span></div>
            <div class="prog-bar-bg"><div class="prog-bar-fill" style="width: ${pr.val}%"></div></div>
        </div>
    `).join('') : '<p style="color:var(--text-main); font-size:0.95rem;">Nessun progresso rilevante</p>';

    playersEl.innerHTML += `
        <div class="player-card ${rankClass}">
            <div class="player-rank-col">
                <span class="player-rank-num">#${i+1}</span>
            </div>
            <div class="player-content">
                <div class="player-header">
                    <h2 class="player-name">
                        ${p.name} ${p.flag ? `<img src="${p.flag}" class="flag">` : ''}
                    </h2>
                    <div class="player-total-pts">${p.pts} PT</div>
                </div>
                <div class="player-details">
                    <div>
                        <div class="detail-block">
                            <h4>DEMON STATS</h4><p>${p.demonStats}</p>
                        </div>
                        <div class="detail-block" style="margin-top: 1.5rem;">
                            <h4>HARDEST</h4><p><strong>${p.hardest}</strong></p>
                        </div>
                        <div class="detail-block" style="margin-top: 1.5rem;">
                            <h4>LIVELLI LISTA COMPLETATI</h4><ul>${complHtml}</ul>
                        </div>
                    </div>
                    <div>
                        <div class="detail-block">
                            <h4>PROGRESSI IN CORSO</h4>${progHtml}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
});

// Render Da Verificare
const upEl = document.getElementById('upcoming-container');
upcoming.forEach(u => {
    upEl.innerHTML += `
        <div class="upcoming-card">
            <h3><i class="fas fa-hammer"></i> ${u.name}</h3>
            <p><i class="fas fa-trophy"></i> WR: <strong>${u.wr}</strong></p>
        </div>
    `;
});

// --- NAVIGAZIONE E TEMA ---

// Menu SPA
const navBtns = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page-section');

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        navBtns.forEach(b => b.classList.remove('active'));
        pages.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.getAttribute('data-target')).classList.add('active');
        window.scrollTo(0,0);
    });
});

// Dark/Light Mode
const themeBtn = document.getElementById('theme-toggle');
const icon = themeBtn.querySelector('i');
const body = document.body;

if(localStorage.getItem('pointer-theme') === 'light') {
    body.classList.replace('dark-mode', 'light-mode');
    icon.className = 'fas fa-moon';
}

themeBtn.addEventListener('click', () => {
    if(body.classList.contains('dark-mode')) {
        body.classList.replace('dark-mode', 'light-mode');
        icon.className = 'fas fa-moon';
        localStorage.setItem('pointer-theme', 'light');
    } else {
        body.classList.replace('light-mode', 'dark-mode');
        icon.className = 'fas fa-sun';
        localStorage.setItem('pointer-theme', 'dark');
    }
});