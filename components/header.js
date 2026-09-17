
const HEADER_HTML = `
<!-- Overlay — под шапкой -->
<div id="nav-overlay" onclick="closeNavDrawer()"
    class="hidden fixed left-0 right-0 bottom-0 z-[98] bg-black/25"
    style="top:60px;transition:opacity 0.25s;"></div>

<!-- Боковой drawer — стартует ниже шапки, привязан к общему контейнеру -->
<div id="nav-drawer"
    class="fixed left-0 bottom-0 bg-white z-[99] flex flex-col"
    style="top:60px;transform:translateX(-100%);transition:transform 0.3s cubic-bezier(0.4,0,0.2,1);box-shadow:16px 0 32px -16px rgba(15,23,42,0.08);border-right:1px solid hsl(240, 1.82%, 89.22%);">

    <!-- Навигация — выровнена по левому краю контейнера страницы (max-w-[1600px] + 24px) -->
    <nav class="flex-1 pt-8 pb-4">
        <a href="__PREFIX__catalog/index.html?type=products" class="header-drawer-link" onclick="closeNavDrawer()">Товары</a>
        <a href="__PREFIX__catalog/index.html?type=services" class="header-drawer-link" onclick="closeNavDrawer()">Услуги</a>
        <a href="__PREFIX__promos/index.html" class="header-drawer-link" onclick="closeNavDrawer()">Акции</a>
        <a href="__PREFIX__blog/index.html" class="header-drawer-link" onclick="closeNavDrawer()">Блог</a>
        <a href="__PREFIX__about/index.html" class="header-drawer-link" onclick="closeNavDrawer()">О компании</a>
        <a href="__PREFIX__contacts/index.html" class="header-drawer-link" onclick="closeNavDrawer()">Контакты</a>
    </nav>

    <!-- Телефон -->
    <div class="header-drawer-footer">
        <a href="tel:+78000000000"
            class="text-[14px] font-semibold text-textMain hover:text-accent transition-colors no-underline tracking-tight">
            +7 (800) 000-00-00
        </a>
    </div>
</div>


<!-- Шапка -->
<header class="sticky top-0 z-[100] bg-white border-b border-[hsl(240,1.82%,89.22%)]">
    <div class="max-w-[1600px] mx-auto px-6 h-[60px] flex items-center justify-between">

        <!-- Левая часть: гамбургер + логотип -->
        <div class="flex items-center gap-4 flex-shrink-0">
            <button id="hamburger-btn" onclick="toggleNavDrawer()" title="Меню"
                class="p-2 rounded-lg text-textMain hover:bg-surfaceLight transition-all flex items-center -ml-2">
                <i id="hamburger-icon" data-lucide="menu" class="w-[22px] h-[22px]"></i>
            </button>
            <a href="__PREFIX__index.html" class="flex items-center gap-2 group no-underline">
                <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="text-accent group-hover:-translate-y-0.5 transition-transform duration-300">
                    <path d="M18 6 L 30 11 L 18 16 L 6 11 Z" fill="currentColor" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
                    <path d="M6 18 L 18 23 L 30 18" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"/>
                    <path d="M6 25 L 18 30 L 30 25" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity="0.25"/>
                </svg>
                <span class="text-[20px] font-semibold tracking-tight text-textMain leading-none">
                    Сфера<span class="text-accent">.</span>
                </span>
            </a>
        </div>

        <!-- Правая часть: поиск -->
        <div class="flex items-center gap-4">

            <!-- Поиск — инпут в шапке (белый фон со статичным тонким бордером) -->
            <div id="search-wrap"
                style="display:flex;align-items:center;background:#ffffff;border:1px solid hsl(240, 1.82%, 89.22%);border-radius:10px;padding:0 14px;height:38px;gap:8px;width:300px;max-width:100%;">
                <i data-lucide="search" class="w-4 h-4" style="color:#64748b;flex-shrink:0;"></i>
                <input id="search-input" type="text" placeholder="Поиск товаров и услуг..."
                    oninput="_onSearchInput(this)"
                    onkeydown="_onSearchKeyDown(event, this)"
                    style="flex:1;border:none;outline:none;font-size:13px;color:#0f172a;background:transparent;font-family:'Inter',sans-serif;letter-spacing:-0.1px;min-width:0;">
                <button id="search-clear-btn" onclick="_clearSearch()"
                    style="display:none;background:none;border:none;cursor:pointer;padding:0;flex-shrink:0;color:#64748b;line-height:0;">
                    <i data-lucide="x" class="w-4 h-4"></i>
                </button>
            </div>

        </div>
    </div>
</header>

<!-- Строка меню под шапкой (основные разделы, как в сайдбаре) -->
<div class="bg-white border-b border-[hsl(240,1.82%,89.22%)] relative z-[90]">
    <div class="max-w-[1600px] mx-auto px-6 h-[42px] flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-none scrollbar-hide">
        <a href="__PREFIX__catalog/index.html?type=products" class="header-cat-link">Товары</a>
        <a href="__PREFIX__catalog/index.html?type=services" class="header-cat-link">Услуги</a>
        <a href="__PREFIX__promos/index.html" class="header-cat-link">Акции</a>
        <a href="__PREFIX__blog/index.html" class="header-cat-link">Блог</a>
        <a href="__PREFIX__about/index.html" class="header-cat-link">О компании</a>
        <a href="__PREFIX__contacts/index.html" class="header-cat-link">Контакты</a>
    </div>
</div>`;



// ─── Стили ────────────────────────────────────────────────────────────────────
const HEADER_STYLES = `
<style id="header-styles">
#nav-drawer {
    width: calc(max(0px, (100vw - 1600px) / 2) + 380px);
    max-width: 100vw;
}
.header-drawer-link {
    display: block;
    padding-top: 11px;
    padding-bottom: 11px;
    padding-left: calc(max(0px, (100vw - 1600px) / 2) + 24px);
    padding-right: 32px;
    text-decoration: none;
    color: #1a1a1a;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    letter-spacing: -0.1px;
    transition: color 0.15s;
}
.header-drawer-link:hover {
    color: #00a3ff;
}
.header-drawer-footer {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: calc(max(0px, (100vw - 1600px) / 2) + 24px);
    padding-right: 32px;
    border-top: 1px solid hsl(240, 1.82%, 89.22%);
}
.header-drawer-link:hover {
    color: #00a3ff;
}
.header-cat-link {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 0 10px;
    height: 28px;
    border-radius: 6px;
    text-decoration: none;
    color: #374151;
    font-size: 13px;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    white-space: nowrap;
    flex-shrink: 0;
    transition: background 0.15s, color 0.15s;
}
.header-cat-link:first-child {
    margin-left: -10px;
}
.header-cat-link:hover {
    background: #f4f5f7;
    color: #1a1a1a;
}
</style>`;

// ─── Состояние ────────────────────────────────────────────────────────────────
let _drawerOpen = false;

// ─── Hamburger ↔ X ───────────────────────────────────────────────────────────
function _setHamburgerIcon(open) {
    const btn = document.getElementById('hamburger-btn');
    if (!btn) return;
    btn.innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}" class="w-[22px] h-[22px]"></i>`;
    if (typeof lucide !== 'undefined') lucide.createIcons({ nodes: [btn] });
}

// ─── Drawer ───────────────────────────────────────────────────────────────────
window.toggleNavDrawer = function () {
    _drawerOpen ? closeNavDrawer() : openNavDrawer();
};
window.openNavDrawer = function () {
    const drawer = document.getElementById('nav-drawer');
    const overlay = document.getElementById('nav-overlay');
    if (!drawer || !overlay) return;
    overlay.classList.remove('hidden');
    requestAnimationFrame(() => { drawer.style.transform = 'translateX(0)'; });
    document.body.style.overflow = 'hidden';
    _drawerOpen = true;
    _setHamburgerIcon(true);
};
window.closeNavDrawer = function () {
    const drawer = document.getElementById('nav-drawer');
    const overlay = document.getElementById('nav-overlay');
    if (!drawer || !overlay) return;
    drawer.style.transform = 'translateX(-100%)';
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
    _drawerOpen = false;
    _setHamburgerIcon(false);
};

// ─── Search panel ────────────────────────────────────────────────────────────
let _searchOpen = false;

window.toggleSearch = function () {
    _searchOpen ? closeSearch() : openSearch();
};
window.openSearch = function () {
    const panel = document.getElementById('search-panel');
    if (!panel) return;
    panel.classList.remove('hidden');
    _searchOpen = true;
    if (typeof lucide !== 'undefined') lucide.createIcons({ nodes: [panel] });
    setTimeout(() => document.getElementById('search-input')?.focus(), 40);
};
window.closeSearch = function () {
    const panel = document.getElementById('search-panel');
    if (panel) panel.classList.add('hidden');
    _searchOpen = false;
    const inp = document.getElementById('search-input');
    const btn = document.getElementById('search-clear-btn');
    if (inp) inp.value = '';
    if (btn) btn.style.display = 'none';
};
window._onSearchInput = function (inp) {
    const btn = document.getElementById('search-clear-btn');
    if (btn) btn.style.display = inp.value.length > 0 ? 'flex' : 'none';
};
window._onSearchKeyDown = function (event, inp) {
    if (event.key === 'Enter') {
        const val = inp.value.trim();
        if (val) {
            const prefix = typeof PATH_PREFIX !== 'undefined' ? PATH_PREFIX : './';
            window.location.href = `${prefix}catalog/index.html?search=${encodeURIComponent(val)}`;
        }
    }
};
window._clearSearch = function () {
    const inp = document.getElementById('search-input');
    const btn = document.getElementById('search-clear-btn');
    if (inp) { inp.value = ''; inp.focus(); }
    if (btn) btn.style.display = 'none';
};

// ─── Escape ───────────────────────────────────────────────────────────────────
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeNavDrawer(); closeSearch(); }
});

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const ph = document.getElementById('header-placeholder');
    if (ph) {
        const prefix = typeof PATH_PREFIX !== 'undefined' ? PATH_PREFIX : './';
        document.head.insertAdjacentHTML('beforeend', HEADER_STYLES);
        ph.outerHTML = HEADER_HTML.replace(/__PREFIX__/g, prefix);
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }
});