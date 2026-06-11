// ─── Build flat 150-day array from DSA_CURRICULUM (curriculum-data.js) ───────
function buildCurriculum() {
    const days = [];
    if (typeof DSA_CURRICULUM !== 'undefined') {
        DSA_CURRICULUM.phases.forEach(phase => {
            phase.weeks.forEach(week => {
                week.days.forEach(d => days.push(d));
            });
        });
    }
    // If curriculum-data only has Phase 1 (30 days), fill remaining with structured data
    const topics = ["Arrays", "Strings", "Linked Lists", "Stacks", "Queues", "Trees", "Graphs", "Sorting", "Dynamic Programming", "Backtracking", "Heaps", "System Design"];
    const difficulties = ["beginner", "intermediate", "advanced"];
    while (days.length < 150) {
        const n = days.length + 1;
        const topic = topics[(n - 1) % topics.length];
        days.push({
            day: n,
            title: `${topic} — Advanced Problem ${n}`,
            topic: topic,
            difficulty: difficulties[Math.min(Math.floor((n - 1) / 50), 2)],
            phase: n <= 30 ? 'Phase 1: Foundations' : n <= 60 ? 'Phase 2: Intermediate' : n <= 90 ? 'Phase 3: Advanced' : n <= 120 ? 'Phase 4: Expert' : 'Phase 5: Mastery',
            description: `Deep-dive into ${topic} patterns and problem solving.`,
            concepts: [
                { name: topic + ' Fundamentals', desc: 'Core concepts and definitions' },
                { name: 'Time Complexity', desc: 'Analyze the efficiency of your solution' },
                { name: 'Space Complexity', desc: 'Memory usage optimization' }
            ],
            resources: [
                { name: 'NeetCode ' + topic + ' Playlist', type: 'video', source: 'NeetCode', quality: 'best', link: 'https://www.youtube.com/@NeetCode/playlists', duration: '30-60 min', why: 'Best visual explanations' },
                { name: 'TakeUForward ' + topic, type: 'video', source: 'Striver', quality: 'best', link: 'https://takeuforward.org/', duration: '30 min', why: 'Step-by-step Hindi/English guide' },
                { name: 'GeeksforGeeks ' + topic, type: 'article', source: 'GeeksforGeeks', quality: 'good', link: 'https://www.geeksforgeeks.org/', duration: '20 min', why: 'Detailed written explanation with code' }
            ],
            problems: [
                { name: 'LeetCode ' + topic + ' Problems', difficulty: 'medium', link: 'https://leetcode.com/tag/' + topic.toLowerCase().replace(/ /g, '-') + '/', why: 'Curated topic-specific problems' }
            ],
            learningGuide: `<div class="learning-guide"><h4>${topic} Strategy</h4><p>Understand the concept → Trace through examples → Code from scratch → Test edge cases → Optimize.</p></div>`
        });
    }
    return days;
}

const curriculum = buildCurriculum();

// ─── DOM Elements ─────────────────────────────────────────────────────────────
const globalSearch    = document.getElementById('globalSearch');
const themeBtn        = document.getElementById('themeBtn');
const topicFilter     = document.getElementById('topicFilter');
const statusFilter    = document.getElementById('statusFilter');
const curriculumGrid  = document.getElementById('curriculumGrid');
const pagination      = document.getElementById('pagination');
const dayModal        = document.getElementById('dayModal');
const dayDetail       = document.getElementById('dayDetail');
const closeModal      = document.getElementById('closeModal');
const exportBtn       = document.getElementById('exportBtn');
const startCurriculumBtn = document.getElementById('startCurriculumBtn');
const viewProgressBtn    = document.getElementById('viewProgressBtn');

// ─── State ────────────────────────────────────────────────────────────────────
let currentPage = 1;
const itemsPerPage = 12;
let filteredCurriculum = [...curriculum];

// ─── Init ─────────────────────────────────────────────────────────────────────
function init() {
    populateTopicFilter();
    updateStats();
    renderCurriculum();
    setupEventListeners();
    loadTheme();
}

function populateTopicFilter() {
    const topics = [...new Set(curriculum.map(d => d.topic || d.phase))].sort();
    topics.forEach(topic => {
        const option = document.createElement('option');
        option.value = topic;
        option.textContent = topic;
        topicFilter.appendChild(option);
    });
}

function setupEventListeners() {
    topicFilter.addEventListener('change', applyFilters);
    statusFilter.addEventListener('change', applyFilters);
    globalSearch.addEventListener('input', applyFilters);
    closeModal.addEventListener('click', closeDay);
    dayModal.addEventListener('click', (e) => { if (e.target === dayModal) closeDay(); });
    themeBtn.addEventListener('click', toggleTheme);
    exportBtn.addEventListener('click', exportProgress);
    startCurriculumBtn.addEventListener('click', () => {
        document.getElementById('curriculum').scrollIntoView({ behavior: 'smooth' });
        openDay(curriculum[0]);
    });
    viewProgressBtn.addEventListener('click', () => {
        document.querySelector('.progress-wrapper').scrollIntoView({ behavior: 'smooth' });
    });
}

function applyFilters() {
    currentPage = 1;
    const topic      = topicFilter.value;
    const status     = statusFilter.value;
    const searchTerm = globalSearch.value.toLowerCase();
    filteredCurriculum = curriculum.filter(d => {
        const matchesTopic  = !topic  || (d.topic === topic || d.phase === topic);
        const matchesStatus = !status || (status === 'done' ? isCompleted(d.day) : !isCompleted(d.day));
        const matchesSearch = !searchTerm ||
            (d.title       || '').toLowerCase().includes(searchTerm) ||
            (d.topic       || '').toLowerCase().includes(searchTerm) ||
            (d.phase       || '').toLowerCase().includes(searchTerm) ||
            (d.description || '').toLowerCase().includes(searchTerm);
        return matchesTopic && matchesStatus && matchesSearch;
    });
    renderCurriculum();
}

// ─── Card Rendering ───────────────────────────────────────────────────────────
function renderCurriculum() {
    curriculumGrid.innerHTML = '';
    const start = (currentPage - 1) * itemsPerPage;
    const end   = start + itemsPerPage;
    filteredCurriculum.slice(start, end).forEach(day => {
        curriculumGrid.appendChild(createDayCard(day));
    });
    renderPagination();
}

function diffLabel(d) {
    const map = { beginner:'Easy', intermediate:'Medium', advanced:'Hard', mixed:'Mixed', easy:'Easy', medium:'Medium', hard:'Hard' };
    return map[(d || '').toLowerCase()] || d || 'Easy';
}

function createDayCard(day) {
    const card = document.createElement('div');
    const diff = diffLabel(day.difficulty);
    card.className = `day-card ${isCompleted(day.day) ? 'completed' : ''}`;
    card.innerHTML = `
        <div class="day-status">${isCompleted(day.day) ? '✓' : ''}</div>
        <div class="day-number">Day ${day.day}</div>
        <div class="day-title">${day.title}</div>
        <div class="day-topic">${day.topic || day.phase || ''}</div>
        <div class="difficulty ${diff.toLowerCase()}">${diff}</div>
    `;
    card.addEventListener('click', () => openDay(day));
    return card;
}

// ─── Day Modal ────────────────────────────────────────────────────────────────
function typeIcon(type) {
    return type === 'video' ? '🎥' : type === 'article' ? '📖' : '🔗';
}
function qualityBadge(q) {
    if (q === 'best') return '<span style="background:#06b6d4;color:#000;font-size:0.65rem;padding:2px 6px;border-radius:999px;font-weight:700;margin-left:6px;">⭐ Best</span>';
    return '';
}
function problemDiffBadge(d) {
    const colors = { easy:'#22c55e', medium:'#f59e0b', hard:'#ef4444' };
    const c = colors[(d||'').toLowerCase()] || '#64748b';
    return `<span style="color:${c};font-weight:600;font-size:0.75rem;">${d||''}</span>`;
}

function openDay(day) {
    const diff = diffLabel(day.difficulty);

    // ── Concepts Section ──
    let conceptsHTML = '';
    if (day.concepts && day.concepts.length) {
        conceptsHTML = `
        <div class="modal-section">
            <h3>🧠 Key Concepts</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:0.75rem;margin-top:0.75rem;">
                ${day.concepts.map(c => `
                <div style="background:var(--card-bg,#1e293b);border:1px solid var(--border,#334155);border-radius:10px;padding:0.75rem;">
                    <div style="font-weight:700;color:#06b6d4;font-size:0.9rem;">${c.name}</div>
                    <div style="color:var(--text-secondary,#94a3b8);font-size:0.82rem;margin-top:4px;">${c.desc}</div>
                </div>`).join('')}
            </div>
        </div>`;
    }

    // ── Resources Section ──
    let resourcesHTML = '';
    if (day.resources && day.resources.length) {
        resourcesHTML = `
        <div class="modal-section">
            <h3>📚 Where to Learn — Step by Step</h3>
            <p style="color:var(--text-secondary,#94a3b8);font-size:0.85rem;margin-bottom:1rem;">Start with #1, then move to #2. Each link opens directly to the right content.</p>
            ${day.resources.map((r, i) => `
            <a href="${r.link}" target="_blank" rel="noopener" style="display:flex;align-items:flex-start;gap:1rem;background:var(--card-bg,#1e293b);border:1px solid var(--border,#334155);border-radius:12px;padding:1rem;margin-bottom:0.75rem;text-decoration:none;transition:border-color 0.2s;" onmouseover="this.style.borderColor='#06b6d4'" onmouseout="this.style.borderColor='var(--border,#334155)'">
                <div style="font-size:1.6rem;min-width:36px;text-align:center;">${typeIcon(r.type)}</div>
                <div style="flex:1;">
                    <div style="display:flex;align-items:center;flex-wrap:wrap;gap:4px;">
                        <span style="color:#f1f5f9;font-weight:700;font-size:0.95rem;">Step ${i+1}: ${r.name}</span>
                        ${qualityBadge(r.quality)}
                    </div>
                    <div style="color:#64748b;font-size:0.78rem;margin:4px 0;">${r.source} &nbsp;•&nbsp; ${r.duration}</div>
                    <div style="color:#94a3b8;font-size:0.83rem;">💡 ${r.why}</div>
                </div>
                <div style="color:#06b6d4;font-size:1.2rem;align-self:center;">→</div>
            </a>`).join('')}
        </div>`;
    }

    // ── Problems Section ──
    let problemsHTML = '';
    if (day.problems && day.problems.length) {
        problemsHTML = `
        <div class="modal-section">
            <h3>💻 Practice Problems on LeetCode</h3>
            <p style="color:var(--text-secondary,#94a3b8);font-size:0.85rem;margin-bottom:1rem;">Solve these after watching/reading the resources above. Don't skip!</p>
            ${day.problems.map(p => `
            <a href="${p.link}" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:space-between;background:var(--card-bg,#1e293b);border:1px solid var(--border,#334155);border-radius:10px;padding:0.85rem 1rem;margin-bottom:0.6rem;text-decoration:none;transition:border-color 0.2s;" onmouseover="this.style.borderColor='#06b6d4'" onmouseout="this.style.borderColor='var(--border,#334155)'">
                <div>
                    <div style="color:#f1f5f9;font-weight:600;font-size:0.9rem;">🔗 ${p.name}</div>
                    <div style="color:#64748b;font-size:0.78rem;margin-top:3px;">Why: ${p.why}</div>
                </div>
                <div>${problemDiffBadge(p.difficulty)}</div>
            </a>`).join('')}
        </div>`;
    }

    // ── Learning Guide / Quick Notes ──
    let guideHTML = '';
    if (day.learningGuide) {
        guideHTML = `
        <div class="modal-section" style="background:linear-gradient(135deg,#0f172a,#1e293b);border:1px solid #06b6d4;border-radius:12px;padding:1.25rem;">
            <h3 style="color:#06b6d4;">⚡ Quick Notes & Cheatsheet</h3>
            <div style="color:#cbd5e1;font-size:0.9rem;line-height:1.8;">${day.learningGuide}</div>
        </div>`;
    }

    // ── Today's Action Plan ──
    const actionPlan = `
    <div class="modal-section" style="background:var(--card-bg,#1e293b);border-radius:12px;padding:1.25rem;border:1px solid var(--border,#334155);">
        <h3>✅ Today's Action Plan</h3>
        <ol style="color:var(--text-secondary,#94a3b8);line-height:2;padding-left:1.25rem;">
            <li>Watch/Read the <strong style="color:#06b6d4;">Step 1</strong> resource above (start here!)</li>
            <li>Read the ⚡ Quick Notes cheatsheet below to solidify understanding</li>
            <li>Watch <strong style="color:#06b6d4;">Step 2</strong> resource for deeper explanation</li>
            <li>Open the 💻 Practice Problems and attempt them (1 problem at a time)</li>
            <li>If stuck for 20 mins → check solution, understand it, then re-code yourself</li>
            <li>Mark this day ✅ complete when you've done at least 1 problem</li>
        </ol>
    </div>`;

    dayDetail.innerHTML = `
        <div style="padding:0.5rem 0;">
            <div style="display:flex;align-items:center;gap:0.5rem;color:#64748b;font-size:0.85rem;margin-bottom:0.5rem;">${day.phase || ''}</div>
            <h2 style="font-size:1.5rem;font-weight:800;color:#f1f5f9;margin-bottom:0.75rem;">Day ${day.day}: ${day.title}</h2>
            <div style="display:flex;gap:0.75rem;flex-wrap:wrap;margin-bottom:1rem;">
                <span class="difficulty ${diff.toLowerCase()}" style="padding:4px 12px;border-radius:999px;">${diff}</span>
                <span style="background:#1e293b;border:1px solid #334155;padding:4px 12px;border-radius:999px;color:#94a3b8;font-size:0.8rem;">${day.topic || day.phase || ''}</span>
            </div>
            <p style="color:#94a3b8;line-height:1.8;font-size:0.95rem;margin-bottom:1.5rem;">${day.description}</p>

            ${conceptsHTML}
            ${resourcesHTML}
            ${problemsHTML}
            ${guideHTML}
            ${actionPlan}

            <div style="display:flex;gap:1rem;margin-top:2rem;flex-wrap:wrap;">
                <button class="btn btn-primary" onclick="window.toggleCompletion(${day.day}, ${!isCompleted(day.day)})">
                    ${isCompleted(day.day) ? '↩ Mark as Incomplete' : '✅ Mark as Complete'}
                </button>
                <a href="https://leetcode.com/problemset/" target="_blank" rel="noopener" class="btn btn-secondary">Open LeetCode →</a>
            </div>
        </div>
    `;

    dayModal.classList.add('active');
    dayModal.setAttribute('aria-hidden', 'false');
}

function closeDay() {
    dayModal.classList.remove('active');
    dayModal.setAttribute('aria-hidden', 'true');
}

function toggleCompletion(dayNum, completed) {
    if (completed) {
        localStorage.setItem(`dsa_day_${dayNum}`, '1');
    } else {
        localStorage.removeItem(`dsa_day_${dayNum}`);
    }
    updateStats();
    renderCurriculum();
    closeDay();
}

function isCompleted(dayNum) {
    return localStorage.getItem(`dsa_day_${dayNum}`) === '1';
}

function updateStats() {
    const completed = curriculum.filter(d => isCompleted(d.day)).length;
    const percent   = Math.round((completed / 150) * 100);
    document.getElementById('completedCount').textContent = completed;
    document.getElementById('progressPercent').textContent = percent + '%';
    document.getElementById('progressText').textContent = `${completed} of 150 completed`;
    document.getElementById('mainProgressBar').style.width = percent + '%';
    let streak = 0;
    for (let i = 1; i <= 150; i++) { if (isCompleted(i)) streak++; else break; }
    document.getElementById('streakCount').textContent = streak;
}

function renderPagination() {
    const totalPages = Math.ceil(filteredCurriculum.length / itemsPerPage);
    pagination.innerHTML = '';
    if (totalPages <= 1) return;

    const prevBtn = document.createElement('button');
    prevBtn.textContent = '← Previous';
    prevBtn.className = 'btn btn-small';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => { currentPage--; renderCurriculum(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
    pagination.appendChild(prevBtn);

    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.className = `btn btn-small ${i === currentPage ? 'active' : ''}`;
        pageBtn.addEventListener('click', () => { currentPage = i; renderCurriculum(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
        pagination.appendChild(pageBtn);
    }

    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next →';
    nextBtn.className = 'btn btn-small';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => { currentPage++; renderCurriculum(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
    pagination.appendChild(nextBtn);
}

function exportProgress() {
    let csv = 'Day,Title,Topic,Difficulty,Status\n';
    curriculum.forEach(day => {
        csv += `${day.day},"${day.title}","${day.topic || day.phase || ''}","${diffLabel(day.difficulty)}","${isCompleted(day.day) ? 'Done' : 'Todo'}"\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = `dsa-progress-${new Date().toISOString().split('T')[0]}.csv`; a.click();
    URL.revokeObjectURL(url);
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('dsa_theme', isLight ? 'light' : 'dark');
    themeBtn.textContent = isLight ? '☀️' : '🌙';
}

function loadTheme() {
    const theme = localStorage.getItem('dsa_theme') || 'dark';
    if (theme === 'light') { document.body.classList.add('light-mode'); themeBtn.textContent = '☀️'; }
}

window.toggleCompletion = toggleCompletion;

// Load curriculum-data.js first, then init
const script = document.createElement('script');
script.src = 'curriculum-data.js';
script.onload = () => {
    // Rebuild with rich data now that DSA_CURRICULUM is available
    const richDays = buildCurriculum();
    curriculum.splice(0, curriculum.length, ...richDays);
    filteredCurriculum = [...curriculum];
    populateTopicFilter();
    renderCurriculum();
    updateStats();
};
script.onerror = () => console.warn('curriculum-data.js not found, using built-in data.');
document.head.appendChild(script);

init();
