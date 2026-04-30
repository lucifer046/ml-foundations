//  MACHINE LEARNING FOUNDATIONS HANDBOOK — App Logic
//  Features: Command Palette, Keyboard Nav, X-Ray Tooltips, Resizable Layout

let currentTopicId = null;
let isResizing = false;
let currentZoom = 0.95;

// ---- DOM Elements ----
const theoryPane = document.getElementById('theory-content-area');
const codeContainer = document.getElementById('code-container');
const bookLayout = document.getElementById('book-layout');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const menuContent = document.getElementById('menu-content');
const cmdOverlay = document.getElementById('cmd-palette-overlay');
const cmdInput = document.getElementById('cmd-palette-input');
const cmdResults = document.getElementById('cmd-palette-results');
const toast = document.getElementById('app-toast');

// ---- Shared X-Ray Tooltip (position: fixed, escapes container clipping) ----
const xrayTooltip = document.createElement('div');
xrayTooltip.id = 'xray-tooltip';
document.body.appendChild(xrayTooltip);

function showXrayTooltip(el) {
    const rect = el.getBoundingClientRect();
    const TIP_W = 280;
    const GAP = 8;

    xrayTooltip.textContent = el.dataset.tooltip;

    // Position above the word by default
    let top = rect.top - xrayTooltip.offsetHeight - GAP;
    let left = rect.left + rect.width / 2 - TIP_W / 2;

    // Clamp horizontally so tooltip never goes outside the viewport
    const viewW = window.innerWidth;
    left = Math.max(8, Math.min(left, viewW - TIP_W - 8));

    // If it would go above the viewport, show below the word instead
    if (top < 8) top = rect.bottom + GAP;

    xrayTooltip.style.left = left + 'px';
    xrayTooltip.style.top  = top  + 'px';
    xrayTooltip.classList.add('visible');
}

function hideXrayTooltip() {
    xrayTooltip.classList.remove('visible');
}


// =========================================
//  X-RAY DICTIONARY
// =========================================
const XRAY_DICTIONARY = {
    "gradient": "A vector of partial derivatives pointing in the direction of steepest ascent.",
    "loss": "A function that measures the discrepancy between predicted and actual values.",
    "weights": "Parameters in a model that are adjusted during training to minimize loss.",
    "bias": "An additive parameter that allows the model to shift the activation function.",
    "convex": "A function where any local minimum is also a global minimum.",
    "eigenvalue": "A scalar λ such that Av = λv for some non-zero vector v.",
    "eigenvector": "A non-zero vector v that only changes by a scalar factor λ when a linear transformation A is applied.",
    "singular value": "The square roots of the eigenvalues of AᵀA, representing the 'length' of principal axes.",
    "subspace": "A subset of a vector space that is itself a vector space.",
    "projection": "The process of mapping a vector onto a subspace (the 'closest' point in that space).",
    "pca": "Principal Component Analysis — a technique for dimensionality reduction using variance.",
    "SVD": "Singular Value Decomposition — factorizing a matrix into three specific matrices.",
    "regularization": "Techniques like L1/L2 used to prevent overfitting by penalizing large weights.",
    "overfitting": "When a model learns noise in training data instead of the underlying pattern.",
    "underfitting": "When a model is too simple to capture the underlying trend of the data."
};

// =========================================
//  MARKDOWN CONFIGURATION
// =========================================
marked.use({
    renderer: {
        code(code, language) {
            if (language === 'mermaid') {
                return `<div class="mermaid">\n${code}\n</div>`;
            }
            return false; // Use default renderer for other languages
        }
    }
});

// =========================================
//  INITIALIZATION
// =========================================
function init() {
    renderMenu();
    setupEventListeners();
    
    // Default start with home page
    loadHome();
}

// =========================================
//  HOME PAGE LOGIC
// =========================================
function loadHome() {
    currentTopicId = null;
    sidebarOverlay.classList.remove('active');
    bookLayout.classList.add('home-mode');
    renderMenu(null);
    
    // Provide a relatable ML network background SVG
    const networkSVG = `
        <svg class="network-svg" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;opacity:0.6;z-index:0;pointer-events:none;">
            <!-- Network Connections -->
            <line x1="5%" y1="20%" x2="20%" y2="40%" class="network-path"/>
            <line x1="20%" y1="40%" x2="30%" y2="10%" class="network-path"/>
            <line x1="30%" y1="10%" x2="45%" y2="50%" class="network-path"/>
            <line x1="45%" y1="50%" x2="60%" y2="20%" class="network-path"/>
            <line x1="60%" y1="20%" x2="75%" y2="70%" class="network-path"/>
            <line x1="75%" y1="70%" x2="85%" y2="30%" class="network-path"/>

            <line x1="10%" y1="70%" x2="20%" y2="40%" class="network-path"/>
            <line x1="20%" y1="40%" x2="35%" y2="80%" class="network-path"/>
            <line x1="35%" y1="80%" x2="45%" y2="50%" class="network-path"/>
            <line x1="45%" y1="50%" x2="55%" y2="90%" class="network-path"/>
            <line x1="55%" y1="90%" x2="75%" y2="70%" class="network-path"/>
            <line x1="75%" y1="70%" x2="95%" y2="95%" class="network-path"/>

            <line x1="5%" y1="20%" x2="10%" y2="70%" class="network-path"/>
            <line x1="30%" y1="10%" x2="35%" y2="80%" class="network-path"/>
            <line x1="60%" y1="20%" x2="55%" y2="90%" class="network-path"/>
            <line x1="85%" y1="30%" x2="95%" y2="95%" class="network-path"/>

            <!-- Network Nodes -->
            <circle cx="5%" cy="20%" r="4" fill="#64748b" style="animation-delay: 0s;"/>
            <circle cx="20%" cy="40%" r="5" fill="#64748b" style="animation-delay: 1s;"/>
            <circle cx="30%" cy="10%" r="4.5" fill="#64748b" style="animation-delay: 2s;"/>
            <circle cx="45%" cy="50%" r="6" fill="#64748b" style="animation-delay: 0.5s;"/>
            <circle cx="60%" cy="20%" r="4" fill="#64748b" style="animation-delay: 1.5s;"/>
            <circle cx="75%" cy="70%" r="5" fill="#64748b" style="animation-delay: 2.5s;"/>
            <circle cx="85%" cy="30%" r="4" fill="#64748b" style="animation-delay: 0.8s;"/>
            <circle cx="10%" cy="70%" r="4.5" fill="#64748b" style="animation-delay: 1.2s;"/>
            <circle cx="35%" cy="80%" r="5" fill="#64748b" style="animation-delay: 2.2s;"/>
            <circle cx="55%" cy="90%" r="5.5" fill="#64748b" style="animation-delay: 1.7s;"/>
            <circle cx="95%" cy="95%" r="4" fill="#64748b" style="animation-delay: 0.3s;"/>
        </svg>
    `;

    theoryPane.innerHTML = `
        <div class="home-card">
            ${networkSVG}
            <div class="home-content-wrapper">
                <h1 class="home-title">ML FOUNDATIONS</h1>
                <div class="home-subtitle">[ THEORY & MATHEMATICS ]</div>
                <div class="home-actions">
                    <button class="btn-secondary" onclick="openCmdPalette()">
                        <i data-lucide="search" style="width:18px;height:18px;"></i> Quick Search <kbd>Ctrl K</kbd>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    lucide.createIcons();
    const inPageTocContainer = document.getElementById('in-page-toc');
    if (inPageTocContainer) inPageTocContainer.innerHTML = '';
    
    // Ensure visibility
    setTimeout(() => {
        bookLayout.classList.add('loaded');
    }, 50);
}


// =========================================
//  NAVIGATION & CONTENT
// =========================================
function toggleMenu() {
    sidebarOverlay.classList.toggle('active');
}

function toggleCategory(header) {
    const category = header.parentElement;
    const isOpen = category.classList.contains('open');
    
    // Close all other categories in both menus
    document.querySelectorAll('.menu-category').forEach(cat => {
        cat.classList.remove('open');
    });
    
    // If it wasn't open, open it
    if (!isOpen) {
        category.classList.add('open');
    }
}


function renderMenu(activeId = null) {
    const metadata = BOOK_METADATA;
    let html = `
        <div class="menu-item ${activeId === null ? 'active' : ''}" onclick="loadHome()" style="display: flex; align-items: center; gap: 0.75rem; font-weight: 700; margin-bottom: 1.5rem; padding: 0.75rem 1rem;">
            <i data-lucide="home" style="width: 18px; height: 18px;"></i> <span>Home</span>
        </div>
    `;

    
    metadata.categories.forEach(cat => {
        const isCatActive = cat.topics.some(t => `${cat.id}.${t.id}` === activeId);
        const openClass = isCatActive ? 'open' : '';

        html += `
            <div class="menu-category ${openClass}">
                <div class="menu-category-title" onclick="toggleCategory(this)">
                    ${cat.title}
                    <i data-lucide="chevron-down"></i>
                </div>
                <div class="menu-topics">
                    <div class="menu-topics-inner">
                        ${cat.topics.map(topic => {
                            const id = `${cat.id}.${topic.id}`;
                            const active = id === activeId ? 'active' : '';
                            return `<div class="menu-item ${active}" onclick="loadTopic('${id}')">${topic.title}</div>`;
                        }).join('')}
                    </div>
                </div>
            </div>
        `;
    });
    
    menuContent.innerHTML = html;



    const persistentMenu = document.getElementById('persistent-menu-content');
    if (persistentMenu) persistentMenu.innerHTML = html;
    lucide.createIcons();
}

function loadTopic(id) {
    const data = SOURCE_DATA[id];
    if (!data) return;

    currentTopicId = id;
    sidebarOverlay.classList.remove('active');
    renderMenu(id);

    // Fade effect
    bookLayout.classList.remove('loaded');
    bookLayout.classList.remove('home-mode');
    
    setTimeout(() => {
        // Update Theory
        renderTheory(data);
        
        // Finalize
        bookLayout.classList.add('loaded');
        
        try {
            if (typeof mermaid !== 'undefined') {
                // Catch potential promise errors from mermaid.run
                const mermaidPromise = mermaid.run({ querySelector: '.mermaid' });
                if (mermaidPromise && mermaidPromise.catch) {
                    mermaidPromise.catch(e => console.warn('Mermaid rendering warning:', e));
                }
            }
        } catch (e) {
            console.error('Mermaid initialization error:', e);
        }
        
        if (window.Prism) {
            Prism.highlightAll();
        }
        
        if (window.MathJax) {
            MathJax.typesetPromise().then(() => {
                applyXRay();
            });
        } else {
            applyXRay();
        }
        
        window.scrollTo(0, 0);
    }, 200);
}

function renderTheory(data) {
    let theoryMarkdown = data.theory;

    // Fix for MathJax matrices: escape backslashes within math blocks 
    // so 'marked' doesn't eat the line breaks (\\)
    theoryMarkdown = theoryMarkdown.replace(/\$\$([\s\S]*?)\$\$/g, (m, p1) => '$$' + p1.replace(/\\/g, '\\\\') + '$$');
    theoryMarkdown = theoryMarkdown.replace(/\$([\s\S]*?)\$/g, (m, p1) => '$' + p1.replace(/\\/g, '\\\\') + '$');


    // Process callouts BEFORE markdown parsing
    const alertRegex = /^>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\][ \t]*\r?\n((?:>.*(?:\r?\n|$))*)/gm;
    theoryMarkdown = theoryMarkdown.replace(alertRegex, (match, type, content) => {
        const iconMap = { 'NOTE': 'info', 'TIP': 'lightbulb', 'IMPORTANT': 'alert-circle', 'WARNING': 'alert-triangle', 'CAUTION': 'zap' };
        const cleaned = content.replace(/^>\s?/gm, '').trim();
        return `
<div class="callout callout-${type.toLowerCase()}">
    <div class="callout-title"><i data-lucide="${iconMap[type]}"></i>${type}</div>
    <div>${marked.parse(cleaned)}</div>
</div>
`;
    });

    const { prev, next } = getTopicNeighbors(currentTopicId);
    const navHtml = `
        <div class="page-navigation">
            ${prev ? `
                <div class="nav-button prev" onclick="loadTopic('${prev.id}')" title="Previous Topic (←)">
                    <i data-lucide="chevron-left"></i>
                    <div class="nav-content">
                        <span class="nav-label">Previous</span>
                        <span class="nav-title">${prev.title}</span>
                    </div>
                </div>
            ` : '<div class="nav-placeholder"></div>'}

            ${next ? `
                <div class="nav-button next" onclick="loadTopic('${next.id}')" title="Next Topic (→)">
                    <div class="nav-content">
                        <span class="nav-label">Next Up</span>
                        <span class="nav-title">${next.title}</span>
                    </div>
                    <i data-lucide="chevron-right"></i>
                </div>
            ` : '<div class="nav-placeholder"></div>'}
        </div>
    `;

    let theoryHtml = `
        <h1 class="theory-title">${data.title}</h1>
        <div class="theory-content">
            ${marked.parse(theoryMarkdown)}
            ${navHtml}
        </div>
    `;

    theoryPane.innerHTML = theoryHtml;
    lucide.createIcons();
    generateInPageTOC();
}

function getTopicNeighbors(id) {
    if (!id) return { prev: null, next: null };
    
    const flatTopics = [];
    BOOK_METADATA.categories.forEach(cat => {
        cat.topics.forEach(topic => {
            flatTopics.push({
                id: `${cat.id}.${topic.id}`,
                title: topic.title
            });
        });
    });
    
    const index = flatTopics.findIndex(t => t.id === id);
    return {
        prev: index > 0 ? flatTopics[index - 1] : null,
        next: index < flatTopics.length - 1 ? flatTopics[index + 1] : null
    };
}





function generateInPageTOC() {
    const theoryContent = document.querySelector('.theory-content');
    if (!theoryContent) return;
    
    const headers = theoryContent.querySelectorAll('h2, h3');
    let tocHtml = '';
    
    headers.forEach((h, index) => {
        if (!h.id) {
            h.id = 'heading-' + index + '-' + h.textContent.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
        }
        const level = h.tagName.toLowerCase() === 'h2' ? 'toc-h2' : 'toc-h3';
        tocHtml += `<a href="#${h.id}" class="in-page-toc-item ${level}">${h.textContent}</a>`;
    });
    
    const inPageTocContainer = document.getElementById('in-page-toc');
    if (inPageTocContainer) {
        inPageTocContainer.innerHTML = tocHtml;
    }
}



// =========================================
//  X-RAY LOGIC (SAFE VERSION)
// =========================================
function applyXRay() {
    const theoryContent = document.querySelector('.theory-content');
    if (!theoryContent) return;

    const terms = Object.keys(XRAY_DICTIONARY).sort((a, b) => b.length - a.length);
    const pattern = terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
    const regex = new RegExp(`\\b(${pattern})\\b`, 'gi');

    const walker = document.createTreeWalker(theoryContent, NodeFilter.SHOW_TEXT, null, false);
    const nodes = [];
    let node;
    while(node = walker.nextNode()) {
        // Skip code blocks, math, and existing tooltips
        let parent = node.parentElement;
        let skip = false;
        while(parent && parent !== theoryContent) {
            const tag = parent.tagName.toLowerCase();
            if (tag === 'code' || tag === 'pre' || parent.classList.contains('mjx-container') || parent.classList.contains('xray-var')) {
                skip = true;
                break;
            }
            parent = parent.parentElement;
        }
        if (!skip) nodes.push(node);
    }

    nodes.forEach(textNode => {
        const text = textNode.textContent;
        const newHtml = text.replace(regex, (match) => {
            const def = XRAY_DICTIONARY[match.toLowerCase()];
            return `<span class="xray-var" data-tooltip="${def}">${match}</span>`;
        });

        if (newHtml !== text) {
            const fragment = document.createRange().createContextualFragment(newHtml);
            textNode.parentNode.replaceChild(fragment, textNode);
        }
    });

    // Attach JS tooltip listeners to all xray-var spans
    theoryContent.querySelectorAll('.xray-var').forEach(el => {
        el.addEventListener('mouseenter', () => showXrayTooltip(el));
        el.addEventListener('mouseleave', hideXrayTooltip);
        el.addEventListener('touchstart', (e) => { e.preventDefault(); showXrayTooltip(el); }, { passive: false });
    });

    // Hide tooltip on scroll
    document.getElementById('theory-pane')?.addEventListener('scroll', hideXrayTooltip, { passive: true });
}


// =========================================
//  COMMAND PALETTE
// =========================================
function openCmdPalette() {
    cmdOverlay.classList.add('active');
    cmdInput.value = '';
    handleSearch(); // Populate with defaults
    setTimeout(() => cmdInput.focus(), 50);
}

function handleSearch() {
    const query = cmdInput.value.toLowerCase().trim();
    
    if (!query) {
        // Show some default topics and Practice questions when empty
        const allEntries = Object.entries(SOURCE_DATA);
        const suggested = allEntries.slice(0, 3).map(([id, data]) => ({ id, ...data }));
        const practice = allEntries
            .filter(([id, data]) => 
                data.title.toLowerCase().includes('practice') || 
                data.title.toLowerCase().includes('quiz') ||
                data.title.toLowerCase().includes('numerical')
            )
            .slice(0, 5)
            .map(([id, data]) => ({ id, ...data }));
            
        cmdResults.innerHTML = '';
        renderSearchResults(suggested, "Foundations");
        renderSearchResults(practice, "Practice & Numerical Questions", true);
        return;
    }

    const results = [];
    for (const [id, data] of Object.entries(SOURCE_DATA)) {
        if (data.title.toLowerCase().includes(query) || data.category.toLowerCase().includes(query)) {
            results.push({ id, ...data });
        }
    }
    cmdResults.innerHTML = '';
    renderSearchResults(results);
}

function renderSearchResults(results, label = null, append = false) {
    if (!append && results.length === 0) {
        cmdResults.innerHTML = `<div style="padding: 2rem; text-align: center; color: var(--text-muted);">No topics found for your search.</div>`;
        return;
    }

    let html = label ? `<div class="cmd-group-label">${label}</div>` : '';
    html += results.map((r, index) => `
        <div class="cmd-item" onclick="loadTopic('${r.id}'); closeCmdPalette();">
            <span class="cmd-cat">${r.category}</span>
            <span class="cmd-title">${r.title}</span>
        </div>
    `).join('');
    
    if (append) {
        cmdResults.innerHTML += html;
    } else {
        cmdResults.innerHTML = html;
    }
}



function closeCmdPalette() {
    cmdOverlay.classList.remove('active');
}

// =========================================
//  UTILITIES
// =========================================
function showToastMsg(msg) {
    toast.textContent = msg;
    toast.classList.add('visible');
    setTimeout(() => toast.classList.remove('visible'), 2500);
}

function setupEventListeners() {
    // Search input
    cmdInput.addEventListener('input', handleSearch);
    
    // Global Shortcuts
    window.addEventListener('keydown', (e) => {
        // Search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openCmdPalette();
        }
        
        // Escape to close everything
        if (e.key === 'Escape') {
            closeCmdPalette();
            sidebarOverlay.classList.remove('active');
        }

        // Arrow Navigation (only if no modals are open)
        const isModalOpen = cmdOverlay.classList.contains('active') || sidebarOverlay.classList.contains('active');
        if (!isModalOpen) {
            if (e.key === 'ArrowLeft') {
                const { prev } = getTopicNeighbors(currentTopicId);
                if (prev) loadTopic(prev.id);
            }
            if (e.key === 'ArrowRight') {
                const { next } = getTopicNeighbors(currentTopicId);
                if (next) loadTopic(next.id);
            }
        }
    });


    // Close overlays on backdrop click
    sidebarOverlay.addEventListener('click', (e) => {
        if (e.target === sidebarOverlay) toggleMenu();
    });
    cmdOverlay.addEventListener('click', (e) => {
        if (e.target === cmdOverlay) closeCmdPalette();
    });
}

// Start
document.addEventListener('DOMContentLoaded', init);
