// Логика каталога для редакции «Старт» 1С-Битрикс
// (Без модуля интернет-магазина: без фильтров и подразделов, только разделы «Товары» и «Услуги»)

// Метаданные разделов каталога
const SECTION_META = {
    'all': {
        title: 'Каталог товаров и услуг',
        breadcrumb: 'Все позиции',
        desc: 'Полный ассортимент качественных товаров и профессиональных услуг с гарантией и оперативным оформлением заказа.'
    },
    'products': {
        title: 'Каталог товаров',
        breadcrumb: 'Товары',
        desc: 'Широкий ассортимент качественных товаров по выгодным ценам с гарантией и быстрой доставкой.'
    },
    'services': {
        title: 'Каталог услуг',
        breadcrumb: 'Услуги',
        desc: 'Профессиональные услуги квалифицированных мастеров и сервисные работы с гарантией качества.'
    }
};

// Состояние каталога
let currentType = 'all'; // 'all' | 'products' | 'services'
let searchQuery = '';
let sortBy = 'popular';

document.addEventListener('DOMContentLoaded', () => {
    // Чтение параметров URL (?type=products или ?type=services или ?search=...)
    const urlParams = new URLSearchParams(window.location.search);
    const typeFromUrl = urlParams.get('type');
    const searchFromUrl = urlParams.get('search');

    if (typeFromUrl && ['all', 'products', 'services'].includes(typeFromUrl)) {
        currentType = typeFromUrl;
    }

    if (searchFromUrl) {
        searchQuery = searchFromUrl;
        const searchInput = document.getElementById('catalog-search-input');
        if (searchInput) searchInput.value = searchFromUrl;
    }

    initCatalogControls();
    renderCatalog();

    if (window.lucide) {
        lucide.createIcons();
    }
});

function initCatalogControls() {
    // Переключатель разделов: Все / Товары / Услуги
    const typeButtons = document.querySelectorAll('.type-tab-btn');
    typeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            currentType = btn.dataset.type;
            updateTypeTabsUI();
            renderCatalog();
        });
    });

    // Живой поиск
    const searchInput = document.getElementById('catalog-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            renderCatalog();
        });
    }

    // Сортировка
    const sortSelect = document.getElementById('catalog-sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            sortBy = e.target.value;
            renderCatalog();
        });
    }

    updateTypeTabsUI();
}

function updateTypeTabsUI() {
    const typeButtons = document.querySelectorAll('.type-tab-btn');
    typeButtons.forEach(btn => {
        if (btn.dataset.type === currentType) {
            btn.className = 'type-tab-btn px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all bg-accent text-white shadow-md shadow-accent/20';
        } else {
            btn.className = 'type-tab-btn px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all text-gray-700 hover:text-gray-950 hover:bg-gray-200/60';
        }
    });
}

function updateHeaderAndMeta() {
    const meta = SECTION_META[currentType] || SECTION_META['all'];
    const pageTitle = document.getElementById('catalog-page-title');
    const pageDesc = document.getElementById('catalog-page-desc');
    const crumbCategory = document.getElementById('catalog-crumb-category');

    if (pageTitle) pageTitle.textContent = meta.title;
    if (pageDesc) pageDesc.textContent = meta.desc;
    if (crumbCategory) crumbCategory.textContent = meta.breadcrumb;
}

function getUnifiedItems() {
    let items = [];

    // Товары
    if (currentType === 'all' || currentType === 'products') {
        if (typeof PRODUCTS_DATA !== 'undefined' && Array.isArray(PRODUCTS_DATA)) {
            const products = PRODUCTS_DATA.map(p => ({
                id: p.id,
                itemType: 'product',
                typeLabel: 'Товар',
                sku: p.sku || `PRD-${p.id}`,
                title: p.title,
                price: p.price,
                oldPrice: p.oldPrice || null,
                discount: p.discount || null,
                image: p.image,
                badge: p.badge || null,
                description: p.description || '',
                detailUrl: `${PATH_PREFIX}product/index.html?id=${p.id}`,
                buttonText: 'Заказать',
                orderTitle: p.title,
                properties: p.properties || []
            }));
            items = items.concat(products);
        }
    }

    // Услуги
    if (currentType === 'all' || currentType === 'services') {
        if (typeof SERVICES_DATA !== 'undefined' && Array.isArray(SERVICES_DATA)) {
            const services = SERVICES_DATA.map(s => ({
                id: s.id,
                itemType: 'service',
                typeLabel: 'Услуга',
                sku: s.sku || `SRV-${s.id}`,
                title: s.title,
                price: s.price,
                oldPrice: s.oldPrice || null,
                discount: s.discount || null,
                image: s.image,
                badge: s.badge || null,
                description: s.description || '',
                detailUrl: `${PATH_PREFIX}service/index.html?id=${s.id}`,
                buttonText: 'Заказать услугу',
                orderTitle: s.title,
                properties: s.properties || []
            }));
            items = items.concat(services);
        }
    }

    return items;
}

function renderCatalog() {
    const grid = document.getElementById('products-grid');
    const emptyState = document.getElementById('empty-state');
    const totalCountEl = document.getElementById('catalog-total-count');

    if (!grid) return;

    updateHeaderAndMeta();

    let items = getUnifiedItems();

    // 1. Поиск по строке
    if (searchQuery !== '') {
        const q = searchQuery.toLowerCase();
        items = items.filter(item => {
            const matchTitle = item.title.toLowerCase().includes(q);
            const matchSku = item.sku.toLowerCase().includes(q);
            const matchDesc = item.description.toLowerCase().includes(q);
            return matchTitle || matchSku || matchDesc;
        });
    }

    // 2. Сортировка
    if (sortBy === 'price-asc') {
        items.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
        items.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
        items.sort((a, b) => a.title.localeCompare(b.title, 'ru'));
    } else {
        // По умолчанию (сначала со спецпредложениями)
        items.sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0));
    }

    // Обновление счетчика
    if (totalCountEl) {
        if (currentType === 'services') {
            totalCountEl.textContent = `${items.length} ${getNoun(items.length, 'услуга', 'услуги', 'услуг')}`;
        } else if (currentType === 'products') {
            totalCountEl.textContent = `${items.length} ${getNoun(items.length, 'товар', 'товара', 'товаров')}`;
        } else {
            totalCountEl.textContent = `${items.length} ${getNoun(items.length, 'позиция', 'позиции', 'позиций')}`;
        }
    }

    // Состояние отсутствия результатов
    if (items.length === 0) {
        grid.classList.add('hidden');
        if (emptyState) emptyState.classList.remove('hidden');
        return;
    }

    grid.classList.remove('hidden');
    if (emptyState) emptyState.classList.add('hidden');

    // Рендер карточек
    grid.innerHTML = items.map(item => {
        const isService = (item.itemType === 'service');
        const priceLabel = isService ? `от ${item.price.toLocaleString('ru-RU')} ₽` : `${item.price.toLocaleString('ru-RU')} ₽`;
        const discountVal = (!isService && item.oldPrice && item.oldPrice > item.price)
            ? (item.discount || Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100))
            : null;

        return `
        <div class="flex flex-col group bg-white rounded-2xl p-2.5 transition-all duration-300">
            <!-- Изображение (WB/Ozon вертикальный формат 3:4) -->
            <a href="${item.detailUrl}" class="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-3 block cursor-pointer bg-white">
                ${item.badge ? `
                <div class="absolute top-2.5 right-2.5 flex flex-wrap gap-1.5 z-10">
                    <span class="${item.badge.bgClass} ${item.badge.bgClass.includes('text-') ? '' : 'text-white'} text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs uppercase tracking-wider">
                        ${item.badge.text}
                    </span>
                </div>` : ''}

                <img src="${PATH_PREFIX}${item.image}" alt="${item.title}"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onerror="this.src='${PATH_PREFIX}images/placeholder.jpg'">
            </a>

            <!-- Контент карточки -->
            <div class="flex flex-col flex-grow px-1 pb-1">
                ${!isService ? `
                <div class="text-[11px] text-gray-400 font-medium mb-1 tracking-wide">
                    Арт. ${item.sku}
                </div>` : ''}
                
                <div class="mb-2 flex items-baseline flex-wrap gap-1.5">
                    <div class="text-[20px] sm:text-[22px] font-bold text-gray-900 tracking-tight leading-none">
                        ${priceLabel}
                    </div>
                    ${(!isService && item.oldPrice) ? `
                    <span class="text-[12px] sm:text-[13px] text-gray-400 line-through leading-none">
                        ${item.oldPrice.toLocaleString('ru-RU')} ₽
                    </span>` : ''}
                    ${discountVal ? `
                    <span class="text-[11px] sm:text-[12px] font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded leading-none">
                        -${discountVal}%
                    </span>` : ''}
                </div>

                <a href="${item.detailUrl}"
                    class="text-[14px] font-normal text-gray-800 leading-snug mb-2 line-clamp-2"
                    title="${item.title}">
                    ${item.title}
                </a>

                <!-- Кнопка оформления заявки (не на всю ширину, без иконки) -->
                <div class="mt-auto pt-3">
                    <button onclick="openOrderModal('${item.orderTitle.replace(/'/g, "\\'")}', ${item.price}, '${item.sku}', '${PATH_PREFIX}${item.image}')"
                        class="bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-xl font-semibold text-[13px] transition-all shadow-xs inline-flex items-center justify-center active:scale-95">
                        ${item.buttonText}
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join('');

    if (window.lucide) {
        lucide.createIcons();
    }
}

window.resetCatalogView = function() {
    currentType = 'all';
    searchQuery = '';
    sortBy = 'popular';

    const searchInput = document.getElementById('catalog-search-input');
    if (searchInput) searchInput.value = '';

    const sortSelect = document.getElementById('catalog-sort-select');
    if (sortSelect) sortSelect.value = 'popular';

    updateTypeTabsUI();
    renderCatalog();
};

function getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) return five;
    n %= 10;
    if (n === 1) return one;
    if (n >= 2 && n <= 4) return two;
    return five;
}
