// Данные каталога услуг (шаблон bitrix:catalog.section с DISPLAY_PROPERTIES)

// Метаданные категорий услуг
const SERVICES_CATEGORY_META = {
    'all': {
        title: 'Услуги',
        breadcrumb: 'Все услуги'
    },
    'repair': {
        title: 'Ремонт техники',
        breadcrumb: 'Ремонт техники'
    },
    'cleaning': {
        title: 'Клининг',
        breadcrumb: 'Клининг'
    },
    'handyman': {
        title: 'Мастер на час',
        breadcrumb: 'Мастер на час'
    },
    'pets': {
        title: 'Уход за животными',
        breadcrumb: 'Уход за животными'
    },
    'beauty': {
        title: 'Красота и уход',
        breadcrumb: 'Красота и уход'
    },
    'auto': {
        title: 'Автоуслуги',
        breadcrumb: 'Автоуслуги'
    }
};

// Состояние фильтрации
let currentServiceCategory = 'all';

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const catFromUrl = urlParams.get('category');
    if (catFromUrl) {
        currentServiceCategory = catFromUrl;
    }

    initServicesPage();
    lucide.createIcons();
});

function updateServiceCategoryHeader() {
    const meta = SERVICES_CATEGORY_META[currentServiceCategory] || SERVICES_CATEGORY_META['all'];
    const pageTitle = document.getElementById('services-page-title');
    const crumbCategory = document.getElementById('services-crumb-category');

    if (pageTitle) pageTitle.textContent = meta.title;
    if (crumbCategory) crumbCategory.textContent = meta.breadcrumb;
}

function initServicesPage() {
    const pillButtons = document.querySelectorAll('.service-cat-pill');
    pillButtons.forEach(btn => {
        if (btn.dataset.category === currentServiceCategory) {
            btn.classList.remove('bg-surfaceLight', 'text-gray-700', 'hover:bg-gray-200');
            btn.classList.add('bg-accent', 'text-white', 'shadow-md', 'shadow-accent/20');
        } else {
            btn.classList.remove('bg-accent', 'text-white', 'shadow-md', 'shadow-accent/20');
            btn.classList.add('bg-surfaceLight', 'text-gray-700', 'hover:bg-gray-200');
        }

        btn.addEventListener('click', () => {
            pillButtons.forEach(b => {
                b.classList.remove('bg-accent', 'text-white', 'shadow-md', 'shadow-accent/20');
                b.classList.add('bg-surfaceLight', 'text-gray-700', 'hover:bg-gray-200');
            });
            btn.classList.remove('bg-surfaceLight', 'text-gray-700', 'hover:bg-gray-200');
            btn.classList.add('bg-accent', 'text-white', 'shadow-md', 'shadow-accent/20');

            currentServiceCategory = btn.dataset.category || 'all';
            updateServiceCategoryHeader();
            renderServicesList();
        });
    });

    updateServiceCategoryHeader();
    renderServicesList();
}

function renderServicesList() {
    const grid = document.getElementById('services-grid');
    const emptyState = document.getElementById('services-empty-state');
    
    if (!grid) return;

    let filtered = SERVICES_DATA.filter(s => {
        if (currentServiceCategory !== 'all' && s.category !== currentServiceCategory) return false;
        return true;
    });

    if (filtered.length === 0) {
        grid.classList.add('hidden');
        if (emptyState) emptyState.classList.remove('hidden');
        return;
    }

    grid.classList.remove('hidden');
    if (emptyState) emptyState.classList.add('hidden');

    grid.innerHTML = filtered.map(service => {
        return `
        <!-- Карточка услуги: дизайн идентичен карточкам на главной странице -->
        <div class="flex flex-col group bg-white rounded-3xl p-3 border border-gray-100 hover:border-gray-200 transition-all duration-300">
            <a href="${PATH_PREFIX}service/index.html?id=${service.id}" class="relative bg-surfaceLight rounded-2xl h-52 flex items-center justify-center mb-4 overflow-hidden block cursor-pointer">
                ${service.badge ? `
                <div class="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                    <span class="${service.badge.bgClass} text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm uppercase tracking-wider">
                        ${service.badge.text}
                    </span>
                </div>` : ''}

                <img src="${PATH_PREFIX}${service.image}" alt="${service.title}"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            </a>

            <div class="flex flex-col flex-grow px-2 pb-2">
                <div class="mb-2">
                    <div class="flex flex-wrap items-center gap-2">
                        <span class="text-[22px] font-bold text-gray-900 tracking-tight leading-none">
                            от ${service.price.toLocaleString('ru-RU')} ₽
                        </span>
                        ${service.oldPrice ? `
                        <span class="text-[13px] font-medium text-gray-400 line-through decoration-gray-500 leading-none">
                            от ${service.oldPrice.toLocaleString('ru-RU')} ₽
                        </span>` : ''}
                        ${service.discount ? `
                        <span class="bg-[#FF4D6D] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-[4px] leading-none">
                            -${service.discount}%
                        </span>` : ''}
                    </div>
                </div>

                <a href="${PATH_PREFIX}service/index.html?id=${service.id}"
                    class="text-[14px] font-medium text-gray-800 leading-snug mb-3 line-clamp-2 hover:text-accent transition-colors"
                    title="${service.title}">
                    ${service.title}
                </a>

                <!-- Характеристики услуги (DISPLAY_PROPERTIES в Битрикс) -->
                <div class="space-y-1.5 mb-4 text-[12px] bg-surfaceLight/80 rounded-xl p-2.5 border border-gray-100/60">
                    ${service.properties.map(prop => `
                    <div class="flex items-center justify-between text-gray-500">
                        <span>${prop.name}</span>
                        <span class="font-semibold text-gray-800">${prop.value}</span>
                    </div>
                    `).join('')}
                </div>

                <div class="mt-auto">
                    <button onclick="openOrderModal('${service.title.replace(/'/g, "\\'")}', '${service.price}', '${service.sku}', '${PATH_PREFIX}${service.image}')"
                        class="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-lg font-semibold text-[13px] transition-colors">
                        Запись онлайн
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join('');

    lucide.createIcons();
}
