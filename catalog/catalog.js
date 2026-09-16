// Данные каталога товаров

// Метаданные категорий для заголовков и хлебных крошек
const CATEGORY_META = {
    'all': {
        title: 'Все товары',
        breadcrumb: 'Все товары',
        desc: 'Оригинальные товары и техника с быстрой доставкой и гарантией качества'
    },
    'electronics': {
        title: 'Электроника и гаджеты',
        breadcrumb: 'Электроника',
        desc: 'Умные устройства, акустика, VR-шлемы и портативная электроника'
    },
    'home': {
        title: 'Товары для дома и уюта',
        breadcrumb: 'Для дома',
        desc: 'Бытовая техника, аксессуары для интерьера и товары для дома'
    },
    'sport': {
        title: 'Спорт и активный отдых',
        breadcrumb: 'Спорт и фитнес',
        desc: 'Фитнес-инвентарь, гантели, одежда и экипировка для тренировок'
    },
    'clothes': {
        title: 'Одежда и стиль',
        breadcrumb: 'Одежда',
        desc: 'Качественная базовая одежда, худи и стильные вещи на каждый день'
    },
    'books': {
        title: 'Книги и литература',
        breadcrumb: 'Книги',
        desc: 'Подарочные издания, бестселлеры по бизнесу и саморазвитию'
    }
};

function updateCategoryHeader() {
    const meta = CATEGORY_META[currentCategory] || CATEGORY_META['all'];
    const pageTitle = document.getElementById('catalog-page-title');
    const pageDesc = document.getElementById('catalog-page-desc');
    const crumbCategory = document.getElementById('catalog-crumb-category');

    if (pageTitle) pageTitle.textContent = meta.title;
    if (pageDesc) pageDesc.textContent = meta.desc;
    if (crumbCategory) crumbCategory.textContent = meta.breadcrumb;
}

// Состояние приложения
let currentCategory = 'all';
let searchQuery = '';
let sortBy = 'popular';
let minPrice = 0;
let maxPrice = 50000;
let onlyInStock = false;
let onlyFastDelivery = false;
let selectedBadges = [];

document.addEventListener('DOMContentLoaded', () => {
    // Проверка URL параметров на категорию (?category=electronics)
    const urlParams = new URLSearchParams(window.location.search);
    const catFromUrl = urlParams.get('category');
    if (catFromUrl) {
        currentCategory = catFromUrl;
    }

    initCatalog();
    initFilters();
    lucide.createIcons();
});

function initCatalog() {
    // Подсветка активной категории в pill табах
    const pillButtons = document.querySelectorAll('.cat-pill');
    pillButtons.forEach(b => {
        if (b.dataset.category === currentCategory) {
            b.classList.remove('bg-surfaceLight', 'text-gray-700', 'hover:bg-gray-200');
            b.classList.add('bg-accent', 'text-white', 'shadow-md', 'shadow-accent/20');
        } else {
            b.classList.remove('bg-accent', 'text-white', 'shadow-md', 'shadow-accent/20');
            b.classList.add('bg-surfaceLight', 'text-gray-700', 'hover:bg-gray-200');
        }
    });

    const catRadios = document.querySelectorAll('input[name="cat-filter"]');
    catRadios.forEach(r => {
        r.checked = (r.value === currentCategory);
    });

    updateCategoryHeader();
    renderProducts();
    updateCategoryCountBadges();
}

function renderProducts() {
    const grid = document.getElementById('products-grid');
    const emptyState = document.getElementById('empty-state');
    
    if (!grid) return;

    let filtered = PRODUCTS_DATA.filter(p => {
        // Категория
        if (currentCategory !== 'all' && p.category !== currentCategory) return false;
        // Поиск
        if (searchQuery.trim() !== '') {
            const q = searchQuery.toLowerCase().trim();
            const matchTitle = p.title.toLowerCase().includes(q);
            const matchDesc = p.description.toLowerCase().includes(q);
            const matchCat = p.categoryName.toLowerCase().includes(q);
            const matchSku = p.sku.toLowerCase().includes(q);
            if (!matchTitle && !matchDesc && !matchCat && !matchSku) return false;
        }
        // Цена
        if (p.price < minPrice || p.price > maxPrice) return false;
        // Наличие
        if (onlyInStock && !p.inStock) return false;
        if (onlyFastDelivery && !p.fastDelivery) return false;
        // Бейджи
        if (selectedBadges.length > 0) {
            if (!p.badge || !selectedBadges.includes(p.badge.text)) return false;
        }
        return true;
    });

    // Сортировка
    if (sortBy === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'discount') {
        filtered.sort((a, b) => (b.discount || 0) - (a.discount || 0));
    } else {
        filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    if (filtered.length === 0) {
        grid.classList.add('hidden');
        if (emptyState) emptyState.classList.remove('hidden');
        return;
    }

    grid.classList.remove('hidden');
    if (emptyState) emptyState.classList.add('hidden');

    grid.innerHTML = filtered.map(product => {
        return `
        <!-- Товар: Карточка с дизайном как на главной -->
        <div class="flex flex-col group bg-white rounded-3xl p-3 border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
            <a href="${PATH_PREFIX}product/index.html?id=${product.id}" class="relative bg-surfaceLight rounded-2xl h-52 flex items-center justify-center mb-4 overflow-hidden p-2 block cursor-pointer">
                ${product.badge ? `
                <div class="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                    <span class="${product.badge.bgClass} ${product.badge.bgClass.includes('text-') ? '' : 'text-white'} text-[10px] font-bold px-2 py-1 rounded-md shadow-sm uppercase tracking-wider">
                        ${product.badge.text}
                    </span>
                </div>` : ''}

                <img src="${PATH_PREFIX}${product.image}" alt="${product.title}"
                    class="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105">
            </a>

            <div class="flex flex-col flex-grow px-2 pb-2">
                <div class="text-[11px] text-gray-400 font-medium mb-1 tracking-wide">
                    Арт. ${product.sku}
                </div>
                
                <div class="mb-2 flex items-baseline gap-2">
                    <div class="text-[22px] font-bold text-gray-900 tracking-tight leading-none">
                        ${product.price.toLocaleString('ru-RU')} ₽
                    </div>
                    ${product.oldPrice ? `
                    <span class="text-[13px] text-gray-400 line-through">
                        ${product.oldPrice.toLocaleString('ru-RU')} ₽
                    </span>` : ''}
                </div>

                <a href="${PATH_PREFIX}product/index.html?id=${product.id}"
                    class="text-[14px] font-medium text-gray-800 leading-snug mb-4 line-clamp-2 hover:text-accent transition-colors"
                    title="${product.title}">
                    ${product.title}
                </a>

                <div class="mt-auto">
                    <button onclick="openOrderModal('${product.title.replace(/'/g, "\\'")}', ${product.price}, '${product.sku}', '${PATH_PREFIX}${product.image}')"
                        class="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-lg font-semibold text-[13px] transition-colors">
                        Заказать
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join('');

    lucide.createIcons();
}

function initFilters() {
    // Категории pills
    const pillButtons = document.querySelectorAll('.cat-pill');
    pillButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            pillButtons.forEach(b => {
                b.classList.remove('bg-accent', 'text-white', 'shadow-md', 'shadow-accent/20');
                b.classList.add('bg-surfaceLight', 'text-gray-700', 'hover:bg-gray-200');
            });
            btn.classList.remove('bg-surfaceLight', 'text-gray-700', 'hover:bg-gray-200');
            btn.classList.add('bg-accent', 'text-white', 'shadow-md', 'shadow-accent/20');

            currentCategory = btn.dataset.category || 'all';

            const catRadios = document.querySelectorAll('input[name="cat-filter"]');
            catRadios.forEach(r => {
                r.checked = (r.value === currentCategory);
            });

            updateCategoryHeader();
            renderProducts();
        });
    });

    // Боковые радиокнопки категорий
    const catRadios = document.querySelectorAll('input[name="cat-filter"]');
    catRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            currentCategory = radio.value;
            pillButtons.forEach(b => {
                if (b.dataset.category === currentCategory) {
                    b.classList.remove('bg-surfaceLight', 'text-gray-700', 'hover:bg-gray-200');
                    b.classList.add('bg-accent', 'text-white', 'shadow-md', 'shadow-accent/20');
                } else {
                    b.classList.remove('bg-accent', 'text-white', 'shadow-md', 'shadow-accent/20');
                    b.classList.add('bg-surfaceLight', 'text-gray-700', 'hover:bg-gray-200');
                }
            });
            updateCategoryHeader();
            renderProducts();
        });
    });

    // Поиск
    const searchInput = document.getElementById('catalog-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderProducts();
        });
    }

    // Сортировка
    const sortSelect = document.getElementById('catalog-sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            sortBy = e.target.value;
            renderProducts();
        });
    }

    // Фильтры по цене
    const minPriceInput = document.getElementById('price-min');
    const maxPriceInput = document.getElementById('price-max');
    const priceSlider = document.getElementById('price-slider');

    if (minPriceInput && maxPriceInput && priceSlider) {
        minPriceInput.addEventListener('input', (e) => {
            minPrice = Number(e.target.value) || 0;
            renderProducts();
        });

        maxPriceInput.addEventListener('input', (e) => {
            maxPrice = Number(e.target.value) || 50000;
            priceSlider.value = maxPrice;
            renderProducts();
        });

        priceSlider.addEventListener('input', (e) => {
            maxPrice = Number(e.target.value);
            maxPriceInput.value = maxPrice;
            renderProducts();
        });
    }

    // Фильтры по наличию
    const inStockCheck = document.getElementById('filter-instock');
    if (inStockCheck) {
        inStockCheck.addEventListener('change', (e) => {
            onlyInStock = e.target.checked;
            renderProducts();
        });
    }

    const fastDeliveryCheck = document.getElementById('filter-fastdelivery');
    if (fastDeliveryCheck) {
        fastDeliveryCheck.addEventListener('change', (e) => {
            onlyFastDelivery = e.target.checked;
            renderProducts();
        });
    }

    // Фильтры по бейджам
    const badgeCheckboxes = document.querySelectorAll('.filter-badge-check');
    badgeCheckboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            selectedBadges = Array.from(badgeCheckboxes).filter(c => c.checked).map(c => c.value);
            renderProducts();
        });
    });

    // Кнопка сброса
    const resetBtn = document.getElementById('reset-filters-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            resetAllFilters();
        });
    }
}

function resetAllFilters() {
    currentCategory = 'all';
    searchQuery = '';
    sortBy = 'popular';
    minPrice = 0;
    maxPrice = 50000;
    onlyInStock = false;
    onlyFastDelivery = false;
    selectedBadges = [];

    const searchInput = document.getElementById('catalog-search-input');
    if (searchInput) searchInput.value = '';

    const sortSelect = document.getElementById('catalog-sort-select');
    if (sortSelect) sortSelect.value = 'popular';

    const minPriceInput = document.getElementById('price-min');
    const maxPriceInput = document.getElementById('price-max');
    const priceSlider = document.getElementById('price-slider');
    if (minPriceInput) minPriceInput.value = '0';
    if (maxPriceInput) maxPriceInput.value = '50000';
    if (priceSlider) priceSlider.value = '50000';

    const inStockCheck = document.getElementById('filter-instock');
    if (inStockCheck) inStockCheck.checked = false;

    const fastDeliveryCheck = document.getElementById('filter-fastdelivery');
    if (fastDeliveryCheck) fastDeliveryCheck.checked = false;

    const badgeCheckboxes = document.querySelectorAll('.filter-badge-check');
    badgeCheckboxes.forEach(cb => cb.checked = false);

    const catRadios = document.querySelectorAll('input[name="cat-filter"]');
    catRadios.forEach(r => r.checked = (r.value === 'all'));

    const pillButtons = document.querySelectorAll('.cat-pill');
    pillButtons.forEach(b => {
        if (b.dataset.category === 'all') {
            b.classList.remove('bg-surfaceLight', 'text-gray-700', 'hover:bg-gray-200');
            b.classList.add('bg-accent', 'text-white', 'shadow-md', 'shadow-accent/20');
        } else {
            b.classList.remove('bg-accent', 'text-white', 'shadow-md', 'shadow-accent/20');
            b.classList.add('bg-surfaceLight', 'text-gray-700', 'hover:bg-gray-200');
        }
    });

    updateCategoryHeader();
    renderProducts();
}

function updateCategoryCountBadges() {
    const counts = { all: PRODUCTS_DATA.length };
    PRODUCTS_DATA.forEach(p => {
        counts[p.category] = (counts[p.category] || 0) + 1;
    });

    Object.keys(counts).forEach(cat => {
        const span = document.getElementById(`count-${cat}`);
        if (span) span.textContent = counts[cat];
    });
}

// Всплывающее уведомление (Toast)
function showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'bg-gray-900 text-white px-5 py-3 rounded-xl shadow-xl text-[14px] font-medium flex items-center gap-2 transform translate-y-4 opacity-0 transition-all duration-300 pointer-events-auto';
    toast.innerHTML = `<i data-lucide="info" class="w-4 h-4 text-accent"></i> <span>${message}</span>`;
    container.appendChild(toast);
    lucide.createIcons();

    setTimeout(() => {
        toast.classList.remove('translate-y-4', 'opacity-0');
    }, 10);

    setTimeout(() => {
        toast.classList.add('translate-y-4', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) return five;
    n %= 10;
    if (n === 1) return one;
    if (n >= 2 && n <= 4) return two;
    return five;
}
