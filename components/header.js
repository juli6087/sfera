
const HEADER_HTML = `<!-- Верхняя сервисная полоса -->
    <div class="hidden md:block bg-surface border-b border-gray-100 text-[13px] font-medium text-textMuted py-2.5">
        <div class="max-w-[1600px] mx-auto px-6 flex justify-between items-center">
            <div class="flex items-center gap-6">
                <div class="flex gap-5">
                    <a href="__PREFIX__about/index.html" class="hover:text-textMain transition-colors">О компании</a>
                    <a href="__PREFIX__contacts/index.html" class="hover:text-textMain transition-colors">Контакты</a>
                </div>
            </div>
            <div class="flex items-center gap-6">
                <a href="mailto:support@uslugi.ru"
                    class="flex items-center gap-1.5 hover:text-textMain transition-colors">
                    <i data-lucide="mail" class="w-4 h-4"></i>
                    support@uslugi.ru
                </a>
                <span class="flex items-center gap-1.5">
                    <i data-lucide="clock" class="w-4 h-4"></i>
                    Круглосуточно
                </span>
            </div>
        </div>
    </div>\n<header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div class="max-w-[1600px] mx-auto px-6 h-20 flex justify-between items-center">
            <!-- Логотип -->
            <a href="__PREFIX__index.html" class="flex items-center gap-3.5 group">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="text-accent group-hover:-translate-y-1 transition-transform duration-300">
                    <path d="M18 6 L 30 11 L 18 16 L 6 11 Z" fill="currentColor" stroke="currentColor" stroke-width="4"
                        stroke-linejoin="round" />
                    <path d="M6 18 L 18 23 L 30 18" stroke="currentColor" stroke-width="4" stroke-linecap="round"
                        stroke-linejoin="round" opacity="0.6" />
                    <path d="M6 25 L 18 30 L 30 25" stroke="currentColor" stroke-width="4" stroke-linecap="round"
                        stroke-linejoin="round" opacity="0.25" />
                </svg>
                <div class="flex flex-col">
                    <div class="text-[23px] font-semibold tracking-tight text-gray-900 leading-none">Сфера<span
                            class="text-accent">.</span></div>
                    <div class="text-[12px] text-gray-500 font-medium mt-1">Шаблон для бизнеса</div>
                </div>
            </a>

            <!-- Навигация -->
            <nav class="hidden lg:flex items-center gap-8 font-semibold text-[15px]">
                <a href="__PREFIX__catalog/index.html" class="text-textMain hover:text-accent transition-colors">Каталог</a>
                <a href="__PREFIX__services/index.html" class="text-textMain hover:text-accent transition-colors">Услуги</a>
                <a href="__PREFIX__promos/index.html" class="text-textMain hover:text-accent transition-colors">Акции</a>
                <a href="__PREFIX__blog/index.html" class="text-textMain hover:text-accent transition-colors">Блог</a>
                <a href="__PREFIX__contacts/index.html" class="text-textMain hover:text-accent transition-colors">Контакты</a>
            </nav>

            <!-- Контакты и кнопка -->
            <div class="hidden md:flex items-center gap-6">
                <a href="tel:+78000000000"
                    class="text-lg font-semibold text-textMain hover:text-accent transition-colors tracking-tight">
                    +7 (800) 000-00-00
                </a>
                <button onclick="openOrderModal('Заявка с сайта', '', '', '')"
                    class="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all">
                    Оставить заявку
                </button>
            </div>

            <!-- Мобильное меню -->
            <button class="lg:hidden text-textMain hover:text-accent transition-colors">
                <i data-lucide="menu" class="w-7 h-7"></i>
            </button>
        </div>
    </header>`;
document.addEventListener('DOMContentLoaded', () => {
    const ph = document.getElementById('header-placeholder');
    if(ph) {
        const prefix = typeof PATH_PREFIX !== 'undefined' ? PATH_PREFIX : './';
        ph.outerHTML = HEADER_HTML.replace(/__PREFIX__/g, prefix);
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }
});