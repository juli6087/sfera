
const HEADER_HTML = `
<!-- Overlay — под шапкой -->
<div id="nav-overlay" onclick="closeNavDrawer()"
    class="hidden fixed left-0 right-0 bottom-0 z-[98] bg-black/25"
    style="top:104px;transition:opacity 0.25s;"></div>

<!-- Боковой drawer — стартует ниже шапки -->
<div id="nav-drawer"
    class="fixed left-0 bottom-0 bg-white z-[99] flex flex-col"
    style="top:104px;width:460px;transform:translateX(-100%);transition:transform 0.3s cubic-bezier(0.4,0,0.2,1);box-shadow:2px 0 24px rgba(15,23,42,0.08);border-right:1px solid #f1f5f9;">

    <!-- Навигация — выровнена по левому краю иконки ≡ в шапке (24px) -->
    <nav class="flex-1 pt-8 pb-4">
        <a href="__PREFIX__catalog/index.html" class="header-drawer-link" onclick="closeNavDrawer()">Каталог</a>
        <a href="__PREFIX__services/index.html" class="header-drawer-link" onclick="closeNavDrawer()">Услуги</a>
        <a href="__PREFIX__promos/index.html" class="header-drawer-link" onclick="closeNavDrawer()">Акции</a>
        <a href="__PREFIX__blog/index.html" class="header-drawer-link" onclick="closeNavDrawer()">Блог</a>
        <a href="__PREFIX__about/index.html" class="header-drawer-link" onclick="closeNavDrawer()">О компании</a>
        <a href="__PREFIX__contacts/index.html" class="header-drawer-link" onclick="closeNavDrawer()">Контакты</a>
    </nav>

    <!-- Телефон -->
    <div style="padding:20px 32px 20px 184px;border-top:1px solid #f1f5f9;">
        <a href="tel:+78000000000"
            class="text-[14px] font-semibold text-textMain hover:text-accent transition-colors no-underline tracking-tight">
            +7 (800) 000-00-00
        </a>
    </div>
</div>


<!-- Шапка -->
<header class="sticky top-0 z-[100] bg-white border-b border-gray-100">
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

        <!-- Правая часть: поиск + иконки с подписями -->
        <div class="flex items-center gap-3">

            <!-- Поиск — инпут в шапке, иконка в стилистике -->
            <div id="search-wrap"
                style="display:flex;align-items:center;background:#f4f5f7;border-radius:8px;padding:0 14px;height:36px;gap:8px;width:280px;transition:background 0.2s,box-shadow 0.2s;">
                <i data-lucide="search" class="w-5 h-5" style="color:#374151;flex-shrink:0;"></i>
                <input id="search-input" type="text" placeholder="Найти товары..."
                    oninput="_onSearchInput(this)"
                    style="flex:1;border:none;outline:none;font-size:13px;color:#1a1a1a;background:transparent;font-family:'Inter',sans-serif;letter-spacing:-0.1px;min-width:0;">
                <button id="search-clear-btn" onclick="_clearSearch()"
                    style="display:none;background:none;border:none;cursor:pointer;padding:0;flex-shrink:0;color:#374151;line-height:0;">
                    <i data-lucide="x" class="w-5 h-5"></i>
                </button>
            </div>

            <!-- Избранное -->
            <button title="Избранное"
                class="flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg hover:bg-surfaceLight transition-all"
                style="color:#374151;min-width:44px;">
                <i data-lucide="heart" class="w-5 h-5"></i>
                <span style="font-size:10px;font-family:'Inter',sans-serif;color:#8c8c8c;line-height:1.2;white-space:nowrap;">Избранное</span>
            </button>

            <!-- Войти -->
            <button title="Войти"
                class="flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg hover:bg-surfaceLight transition-all"
                style="color:#374151;min-width:36px;">
                <i data-lucide="user" class="w-5 h-5"></i>
                <span style="font-size:10px;font-family:'Inter',sans-serif;color:#8c8c8c;line-height:1.2;white-space:nowrap;">Войти</span>
            </button>

            <!-- Корзина -->
            <button title="Корзина"
                class="flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg hover:bg-surfaceLight transition-all"
                style="color:#374151;min-width:44px;">
                <span class="relative">
                    <i data-lucide="shopping-bag" class="w-5 h-5"></i>
                    <span class="absolute -top-1.5 -right-1.5 w-[15px] h-[15px] bg-accent text-white rounded-full flex items-center justify-center"
                        style="font-size:8px;font-family:'Inter',sans-serif;font-weight:700;line-height:1;">2</span>
                </span>
                <span style="font-size:10px;font-family:'Inter',sans-serif;color:#8c8c8c;line-height:1.2;white-space:nowrap;">Корзина</span>
            </button>

        </div>
    </div>
</header>

<!-- Строка категорий — скроллится вместе со страницей -->
<div class="bg-white border-b border-gray-100 relative z-[90]">
    <div class="max-w-[1600px] mx-auto px-6 h-[44px] flex items-center gap-1 overflow-x-auto scrollbar-hide">
        <a href="__PREFIX__catalog/index.html?category=electronics" class="header-cat-link">Электроника</a>
        <a href="__PREFIX__catalog/index.html?category=home" class="header-cat-link">Для дома</a>
        <a href="__PREFIX__catalog/index.html?category=sport" class="header-cat-link">Спорт и фитнес</a>
        <a href="__PREFIX__catalog/index.html?category=clothes" class="header-cat-link">Одежда</a>
        <a href="__PREFIX__catalog/index.html?category=books" class="header-cat-link">Книги</a>
        <a href="__PREFIX__catalog/index.html?category=food" class="header-cat-link">Еда и десерты</a>
    </div>
</div>`;



// ─── Стили ────────────────────────────────────────────────────────────────────
const HEADER_STYLES = `
<style id="header-styles">
.header-drawer-link {
    display: block;
    padding: 11px 32px 11px 184px;
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
.header-cat-link:hover {
    background: #f4f5f7;
    color: #1a1a1a;
}
#search-wrap:focus-within {
    background: #eef0f2;
    box-shadow: 0 0 0 2px rgba(0,163,255,0.15);
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