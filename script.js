// --- DATI LIVELLI ---
const levels = [
    { rank: 1, name: "Grief easy", creator: "LDexxi", verifier: "SoyXmirzioo", id: "81978987", diff: "Medium demon", pts: 350, yt: "Ic3Vv5qZKe0" },
    { rank: 2, name: "Splatfest (Remake)", creator: "Megadaniel (Orig: FILORGIO2)", verifier: "Megadaniel", id: "147929029", diff: "Easy-Medium demon", pts: 330, yt: "jpobdxhpSbk" },
    { rank: 3, name: "Soundbreaker", creator: "SoyXmirzioo", verifier: "SoyXmirzioo", id: "149504175", diff: "Sconosciuta", pts: 315, yt: "eozqhAo_cHE" },
    { rank: 4, name: "Better Plane (Balanced)", creator: "Megadaniel", verifier: "Megadaniel", id: "147349014", diff: "Easy-Medium demon", pts: 300, yt: "psfIlpNLo5E" },
    { rank: 5, name: "BloodFart", creator: "Megadaniel (Orig: Riot)", verifier: "Megadaniel", id: "147349014", diff: "Insane/Easy demon", pts: 250, yt: "FLzAPJUbTls" },
    { rank: 6, name: "Ci sei cascato (OG)", creator: "Megadaniel", verifier: "SoyXmirzioo", id: "N/A", diff: "Insane", pts: 230, yt: "Z_E5YUMBZ4o" },
    { rank: 7, name: "Spyke Frost", creator: "Fasghki", verifier: "Megadaniel", id: "141091379", diff: "EXTREME ULTRA DEMON", pts: 220, yt: "WvA2Bo6ryeU" },
    { rank: 8, name: "Night Sky", creator: "Megadaniel & FILORGIO2", verifier: "Megadaniel", id: "144139247", diff: "Insane", pts: 200, yt: "jCvwuQBtQ4s" },
    { rank: 9, name: "Ci sei cascato", creator: "Megadaniel", verifier: "Megadaniel", id: "140467007", diff: "Harder-Insane", pts: 150, yt: "9yzBfKbcbMw" },
    { rank: 10, name: "Impossible damiano", creator: "Megadaniel", verifier: "N/A", id: "147195245", diff: "Insane", pts: 120, yt: "iW2ySWKhopI" },
    { rank: 11, name: "Not even close", creator: "Megadaniel", verifier: "Megadaniel", id: "147854114", diff: "Unknown", pts: 100, yt: "M3kwmdelELM" },
    { rank: 12, name: "Daniel Challenge", creator: "Leonardigno", verifier: "Megadaniel", id: "128031270", diff: "Harder", pts: 60, yt: "JxfawlEj7kU" },
    { rank: 13, name: "Good Wave", creator: "Megadaniel", verifier: "Megadaniel", id: "141767286", diff: "Harder", pts: 50, yt: "ixbB1LOiOOI" },
    { rank: 14, name: "Splatfest (OG)", creator: "FILORGIO2", verifier: "SoyXmirzioo", id: "Unknown", diff: "Hard", pts: 30, yt: "itFccrd7dWY" },
    { rank: 15, name: "LaughterHouse", creator: "Gesù di nazareth", verifier: "Megadaniel", id: "71354187", diff: "Unknown", pts: 20, yt: null, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJr-G1YKtbgBMxpZNfGb3bBccvRxrjgH3O9Y8jhdbGedVa5ys-IKXEEM&s=10" },
    { rank: 16, name: "House", creator: "Danc-ehh-massacurhe", verifier: "SoyXmirzioo", id: "75308517", diff: "Unknown", pts: 15, yt: null, img: "https://external-preview.redd.it/laughterhouse-v0-DW8YXICwj38OhKboqKFyaRylbU6Xs121p38gGu3h6qY.jpg?auto=webp&s=d2c56bae027789d61aaa011cfd0973f58b3bd708" },
    { rank: 17, name: "Good plane", creator: "Leonardigno", verifier: "Vivincente", id: "76320355", diff: "Unknown", pts: 10, yt: "ixbB1LOiOOI" }
];

// Helper per punti
function getPts(listNames) {
    let total = 0;
    listNames.forEach(n => {
        const lvl = levels.find(l => l.name.toLowerCase() === n.toLowerCase());
        if(lvl) total += lvl.pts;
    });
    return total;
}

// Soy List
const soyExcludes = ["Better Plane (Balanced)", "Splatfest (Remake)", "Splatfest (OG)", "Not even close", "Impossible damiano", "Night Sky", "BloodFart", "LaughterHouse", "Good plane", "Daniel Challenge"];
const soyCompleted = levels.map(l => l.name).filter(n => !soyExcludes.includes(n));

// Mega List
const megaExcludes = ["Grief easy", "Soundbreaker", "House", "Splatfest (OG)"];
const megaCompleted = levels.map(l => l.name).filter(n => !megaExcludes.includes(n));

// --- DATI PLAYERS ---
const players = [
    {
        name: "SoyxMirzioo",
        flag: "https://flagcdn.com/32x24/it.png",
        verified: "10 easy, 3 medium, 4 hard",
        unverified: "N/A",
        hardest: "Grief Easy",
        completed: soyCompleted,
        pts: getPts(soyCompleted),
        progress: [
            { name: "Shitty bloodbath", label: "31% (53-100%)", val: 31 },
            { name: "Bloodfart", label: "71%", val: 71 },
            { name: "Lutto semplificato", label: "30% (23-82, 74-100)", val: 30 },
            { name: "Merz Circles", label: "13%", val: 13 },
            { name: "Sakupen kirkles (Marzio unnerfed)", label: "67%", val: 67 }
        ]
    },
    {
        name: "Megadaniel",
        flag: "https://flagcdn.com/32x24/it.png",
        verified: "4 easy",
        unverified: "N/A",
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
            { name: "Sakupen kirkles (Daniel Unnerfed)", label: "67%", val: 67 }
        ]
    },
    {
        name: "Leonardigno",
        flag: "",
        verified: "4 demon (3 easy, 1 medium)",
        unverified: "61 demon (39 easy, 7 medium, 2 hard, 2 insane, 3 extreme)",
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
        verified: "Tutti i demon",
        unverified: "N/A",
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
        verified: "1 demon (easy)",
        unverified: "8 demon (1 easy, 1 platformer, 2 weekly, 4 extreme)",
        hardest: "N/A",
        completed: [],
        pts: 0,
        progress: []
    }
];

// Sort players
players.sort((a, b) => b.pts - a.pts);

// --- DATI DA VERIFICARE ---
const upcoming = [
    { name: "Shitty bloodbath", wr: "31% - SoyXmirzioo" },
    { name: "Grimwire", wr: "66% - Megadaniel" },
    { name: "Merz circles", wr: "16% - Megadaniel" },
    { name: "Lutto semplificato", wr: "30% - SoyXmirzioo" },
    { name: "Sakupen kirkles (Daniel's copy)", wr: "67% - Megadaniel" },
    { name: "Sakupen kirkles (Marzio's copy)", wr: "67% - SoyXmirzioo" },
    { name: "Shitty limbo", wr: "71% - Megadaniel" },
    { name: "Crudo calcestruzzo", wr: "22% - Megadaniel" },
    { name: "Sakupen end EZ", wr: "63% - Megadaniel / SoyXmirzioo" }
];


// --- RENDER LOGIC ---

// 1. Render Levels
const listEl = document.getElementById('levels-container');
levels.forEach(lvl => {
    const thumbSrc = lvl.yt ? `https://img.youtube.com/vi/${lvl.yt}/mqdefault.jpg` : lvl.img;
    
    // Creiamo l'elemento DOM invece di usare innerHTML += per poter aggiungere facilmente l'event listener
    const card = document.createElement('div');
    card.className = 'level-card';
    card.addEventListener('click', () => openModal(lvl));
    
    card.innerHTML = `
        <div class="level-rank">
            <span>#${lvl.rank}</span>
        </div>
        <div class="level-thumb">
            <img src="${thumbSrc}" alt="${lvl.name}">
        </div>
        <div class="level-info">
            <div class="level-title-row">
                <h2>${lvl.name}</h2>
                <div class="level-points">${lvl.pts} PT</div>
            </div>
            <div class="level-creators">
                Creato da <strong>${lvl.creator}</strong> | Verificato da <strong>${lvl.verifier}</strong>
            </div>
        </div>
    `;
    listEl.appendChild(card);
});

// 2. Modal Logic
const modal = document.getElementById("level-modal");
const spanClose = document.getElementsByClassName("close-modal")[0];

function openModal(lvl) {
    document.getElementById("modal-title").innerText = lvl.name;
    document.getElementById("modal-points").innerText = `${lvl.pts} PT`;
    document.getElementById("modal-creators").innerHTML = `Creato da <strong>${lvl.creator}</strong> | Verificato da <strong>${lvl.verifier}</strong>`;
    document.getElementById("modal-id").innerText = lvl.id;
    document.getElementById("modal-diff").innerText = lvl.diff;
    
    const mediaContainer = document.getElementById("modal-media");
    if (lvl.yt) {
        mediaContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${lvl.yt}?autoplay=1" frameborder="0" allowfullscreen></iframe>`;
    } else {
        mediaContainer.innerHTML = `<img src="${lvl.img}" alt="${lvl.name}">`;
    }
    
    modal.classList.add('open');
}

spanClose.onclick = function() {
    modal.classList.remove('open');
    document.getElementById("modal-media").innerHTML = ""; // Stop video playback
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove('open');
        document.getElementById("modal-media").innerHTML = "";
    }
}

// 3. Render Players (diviso in verified/unverified)
const playersEl = document.getElementById('players-container');
players.forEach((p, i) => {
    const rankClass = i === 0 ? 'rank-1' : i === 1 ? 'rank-2' : i === 2 ? 'rank-3' : '';
    let complHtml = p.completed.length ? p.completed.map(c => `<li>${c}</li>`).join('') : '<li>Nessuno dalla main list</li>';
    let progHtml = p.progress.length ? p.progress.map(pr => `
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
                        ${p.name}
                        ${p.flag ? `<img src="${p.flag}" class="flag">` : ''}
                    </h2>
                    <div class="player-total-pts">${p.pts} PT</div>
                </div>
                <div class="player-details">
                    <div>
                        <div class="records-section">
                            <span class="badge badge-verified">VERIFIED RECORDS</span>
                            <p>${p.verified}</p>
                        </div>
                        <div class="records-section">
                            <span class="badge badge-unverified">UNVERIFIED RECORDS</span>
                            <p>${p.unverified}</p>
                        </div>
                        <div class="detail-block" style="margin-top: 1.5rem;">
                            <h4>HARDEST</h4>
                            <p><strong>${p.hardest}</strong></p>
                        </div>
                        <div class="detail-block" style="margin-top: 1.5rem;">
                            <h4>LIVELLI LISTA COMPLETATI</h4>
                            <ul class="list-levels">${complHtml}</ul>
                        </div>
                    </div>
                    <div>
                        <div class="detail-block">
                            <h4>PROGRESSI IN CORSO</h4>
                            ${progHtml}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
});

// 4. Render Upcoming
const upEl = document.getElementById('upcoming-container');
upcoming.forEach(u => {
    upEl.innerHTML += `
        <div class="upcoming-card">
            <h3><i class="fas fa-hammer"></i> ${u.name}</h3>
            <p><i class="fas fa-trophy"></i> WR: <strong>${u.wr}</strong></p>
        </div>
    `;
});

// --- SPA NAVIGATION ---
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

// --- THEME TOGGLE ---
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
