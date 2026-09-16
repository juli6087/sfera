
const FOOTER_HTML = `<footer class="bg-[#f8f9fa] border-t border-gray-200 mt-auto pt-16 pb-8">
        <div class="max-w-[1600px] mx-auto w-full px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">

                <!-- Инфо о компании -->
                <div class="lg:col-span-4 pr-4">
                    <a href="#" class="flex items-center gap-3.5 mb-8 group">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"
                            class="text-accent group-hover:-translate-y-1 transition-transform duration-300">
                            <path d="M18 6 L 30 11 L 18 16 L 6 11 Z" fill="currentColor" stroke="currentColor"
                                stroke-width="4" stroke-linejoin="round" />
                            <path d="M6 18 L 18 23 L 30 18" stroke="currentColor" stroke-width="4"
                                stroke-linecap="round" stroke-linejoin="round" opacity="0.6" />
                            <path d="M6 25 L 18 30 L 30 25" stroke="currentColor" stroke-width="4"
                                stroke-linecap="round" stroke-linejoin="round" opacity="0.25" />
                        </svg>
                        <div class="flex flex-col">
                            <div class="text-[23px] font-semibold tracking-tight text-gray-900 leading-none">Сфера<span
                                    class="text-accent">.</span></div>
                        </div>
                    </a>
                    <p class="text-gray-500 text-[14px] leading-relaxed mb-8 max-w-sm font-medium">
                        Универсальный шаблон сайта для компаний сферы услуг. Легко адаптируется под автосалон, клинику,
                        салон красоты или аренду недвижимости.
                    </p>
                    <div class="space-y-4 font-semibold">
                        <a href="tel:+78000000000"
                            class="flex items-center gap-3 text-textMain hover:text-accent text-[17px] transition-colors">
                            <i data-lucide="phone" class="w-5 h-5 text-gray-400"></i>
                            +7 (800) 000-00-00
                        </a>
                        <a href="mailto:support@uslugi.ru"
                            class="flex items-center gap-3 text-gray-600 hover:text-accent text-[15px] transition-colors">
                            <i data-lucide="mail" class="w-5 h-5 text-gray-400"></i>
                            support@uslugi.ru
                        </a>
                    </div>
                </div>

                <!-- Навигация Footer -->
                <div class="lg:col-span-2 lg:col-start-6">
                    <h4 class="font-semibold text-textMain mb-6 text-[15px]">Наши услуги</h4>
                    <ul class="space-y-4 text-[14px] font-medium text-gray-500">
                        <li><a href="__PREFIX__catalog/index.html" class="hover:text-accent transition-colors">Каталог товаров</a></li>
                        <li><a href="__PREFIX__services/index.html" class="hover:text-accent transition-colors">Услуги</a></li>
                        <li><a href="__PREFIX__promos/index.html" class="hover:text-accent transition-colors">Акции и скидки</a></li>
                        <li><a href="__PREFIX__about/index.html" class="hover:text-accent transition-colors">О компании</a></li>
                        <li><a href="__PREFIX__contacts/index.html" class="hover:text-accent transition-colors">Контакты</a></li>
                    </ul>
                </div>

                <div class="lg:col-span-2">
                    <h4 class="font-semibold text-textMain mb-6 text-[15px]">О компании</h4>
                    <ul class="space-y-4 text-[14px] font-medium text-gray-500">
                        <li><a href="__PREFIX__about/index.html" class="hover:text-accent transition-colors">О нас</a></li>
                        <li><a href="__PREFIX__contacts/index.html" class="hover:text-accent transition-colors">Контакты</a></li>
                    </ul>
                </div>

                <div class="lg:col-span-3">
                    <h4 class="font-semibold text-textMain mb-6 text-[15px]">Материалы</h4>
                    <p class="text-[14px] font-medium text-gray-500 mb-6">
                        Подробная информация о платформе, цифрах и условиях сотрудничества для партнеров.
                    </p>
                    <button
                        class="w-full bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-lg font-semibold text-[14px] transition-all flex items-center justify-center gap-2">
                        <i data-lucide="file-down" class="w-5 h-5"></i> Скачать презентацию
                    </button>
                </div>
            </div>

            <!-- Копирайт -->
            <div
                class="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] font-medium text-gray-400">
                <p>&copy; 2024 Платформа «УслугиРядом». Все права защищены.</p>
                <div class="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
                    <a href="#" class="hover:text-accent transition-colors">Пользовательское соглашение</a>
                    <a href="#" class="hover:text-accent transition-colors">Политика конфиденциальности</a>
                    <a href="#" class="hover:text-accent transition-colors">Публичная оферта</a>
                    <a href="#" class="hover:text-accent transition-colors">Правила оплаты и возврата</a>
                </div>
            </div>
        </div>
    </footer>`;
document.addEventListener('DOMContentLoaded', () => {
    const ph = document.getElementById('footer-placeholder');
    if(ph) {
        const prefix = typeof PATH_PREFIX !== 'undefined' ? PATH_PREFIX : './';
        ph.outerHTML = FOOTER_HTML.replace(/__PREFIX__/g, prefix);
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }
});