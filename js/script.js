// Конфигурация Tailwind CSS
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            colors: {
                base: '#ffffff',          // Белый фон сайта
                surface: '#ffffff',       // Белый цвет карточек
                surfaceLight: '#f4f5f7',  // Светло-серый фон для картинок в карточках
                textMain: '#1a1a1a',      // Темный текст
                textMuted: '#8c8c8c',     // Приглушенный текст
                accent: {
                    DEFAULT: '#00a3ff',    // Фирменный голубой цвет
                    hover: '#0090e6',
                    light: '#e5f6ff'
                }
            },
            maxWidth: {
                'screen-xl': '1600px',
            },
            boxShadow: {
                'apple': '0 12px 32px rgba(15, 23, 42, 0.06)',
            }
        }
    }
};

// =============================================================================
// УНИВЕРСАЛЬНОЕ МОДАЛЬНОЕ ОКНО ЗАКАЗА И ЗАЯВКИ (БЕЗ ЛИЧНОГО КАБИНЕТА И КОРЗИНЫ)
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Внедрение универсального модального окна в DOM
    createOrderModalDOM();
    
    // Внедрение конструктора шрифтов
    createFontConstructorDOM();

    // Инициализация шрифта из localStorage
    initSiteFont();

    // Инициализация иконок Lucide
    if (window.lucide) {
        lucide.createIcons();
        updateFontCheckmarks(); // Обновляем галочки после загрузки иконок
    }

    // Закрытие дропдауна со шрифтами при клике вне его
    document.addEventListener('click', (e) => {
        const dropdown = document.getElementById('font-dropdown');
        const wrap = e.target.closest('.font-constructor-wrap');
        if (dropdown && !dropdown.classList.contains('hidden') && !wrap) {
            dropdown.classList.add('hidden');
            dropdown.classList.remove('opacity-100', 'scale-100');
            dropdown.classList.add('opacity-0', 'scale-95');
        }
    });

    // Привязка кнопок вызова заявки в шапке
    document.querySelectorAll('[data-open-lead-modal]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openOrderModal('Общая консультация и подбор', '', '', '');
        });
    });
});

function createOrderModalDOM() {
    if (document.getElementById('universal-order-modal')) return;

    const modalHTML = `
    <div id="universal-order-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4">
        <!-- Затемнение фона -->
        <div id="order-modal-backdrop" class="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onclick="closeOrderModal()"></div>

        <!-- Контейнер формы -->
        <div class="relative bg-white rounded-[28px] max-w-lg w-full p-6 sm:p-8 shadow-2xl overflow-hidden z-10 max-h-[92vh] overflow-y-auto">
            
            <!-- Кнопка закрытия -->
            <button onclick="closeOrderModal()" class="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors">
                <i data-lucide="x" class="w-4 h-4"></i>
            </button>

            <!-- Основной контент формы -->
            <div id="order-form-step">
                <h3 class="text-2xl font-bold text-gray-900 tracking-tight mb-2">Оформление заявки</h3>
                <p class="text-gray-500 text-sm font-medium leading-relaxed mb-6">
                    Оставьте контактные данные. Наш специалист свяжется с вами, ответит на вопросы и согласует детали.
                </p>

                <!-- Блок выбранного товара/услуги -->
                <div id="order-item-preview" class="hidden bg-surfaceLight rounded-2xl p-3.5 mb-6 border border-gray-100 flex items-center gap-4">
                    <div id="order-item-img-wrap" class="w-14 h-14 rounded-xl bg-white flex items-center justify-center overflow-hidden shrink-0 border border-gray-100">
                        <img id="order-item-img" src="" alt="" class="w-full h-full object-contain mix-blend-multiply">
                    </div>
                    <div class="flex-grow min-w-0">
                        <div class="flex items-center justify-between gap-2">
                            <span id="order-item-sku" class="text-[11px] font-medium text-gray-400"></span>
                            <span id="order-item-price" class="text-sm font-bold text-gray-900"></span>
                        </div>
                        <h4 id="order-item-title" class="text-sm font-semibold text-gray-800 truncate"></h4>
                    </div>
                </div>

                <!-- Поля ввода -->
                <form id="lead-order-form" onsubmit="handleOrderSubmit(event)" class="space-y-4">
                    <input type="hidden" id="form-item-name" value="">
                    <input type="hidden" id="form-item-sku" value="">
                    <input type="hidden" id="form-item-price" value="">

                    <div>
                        <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Ваше имя *</label>
                        <div class="relative">
                            <i data-lucide="user" class="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
                            <input type="text" id="order-user-name" required placeholder="Как к вам обращаться"
                                class="w-full bg-surfaceLight border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-accent">
                        </div>
                    </div>

                    <div>
                        <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Номер телефона *</label>
                        <div class="relative">
                            <i data-lucide="phone" class="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
                            <input type="tel" id="order-user-phone" required placeholder="+7 (___) ___-__-__"
                                class="w-full bg-surfaceLight border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-accent">
                        </div>
                    </div>

                    <div>
                        <label class="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Комментарий или адрес (необязательно)</label>
                        <textarea id="order-user-comment" rows="2" placeholder="Удобное время звонка, адрес доставки или пожелания..."
                            class="w-full bg-surfaceLight border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-accent resize-none"></textarea>
                    </div>

                    <div class="flex items-start gap-2.5 pt-1">
                        <input type="checkbox" id="order-policy-check" required checked
                            class="mt-1 w-4 h-4 text-accent rounded focus:ring-accent border-gray-300">
                        <label for="order-policy-check" class="text-xs text-gray-500 font-medium leading-tight cursor-pointer">
                            Согласен на обработку персональных данных в соответствии с <a href="#" class="text-accent underline">политикой конфиденциальности</a>
                        </label>
                    </div>

                    <button type="submit" id="order-submit-btn"
                        class="w-full bg-accent hover:bg-accent-hover text-white py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md shadow-accent/20 flex items-center justify-center mt-4">
                        Отправить заказ менеджеру
                    </button>
                </form>
            </div>

            <!-- Экран успеха -->
            <div id="order-success-step" class="hidden text-center py-6">
                <div class="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i data-lucide="check-circle" class="w-9 h-9"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 tracking-tight mb-2">Заявка успешно принята!</h3>
                <p class="text-gray-500 text-sm font-medium leading-relaxed max-w-sm mx-auto mb-6">
                    Номер вашей заявки: <span id="success-order-num" class="font-bold text-gray-900">#7482</span>. Мы уже передали её дежурному менеджеру и перезвоним вам в течение 5–10 минут.
                </p>
                <div class="bg-surfaceLight rounded-2xl p-4 text-xs font-semibold text-gray-600 mb-6 flex items-center justify-center gap-2">
                    <i data-lucide="clock" class="w-4 h-4 text-accent"></i>
                    <span>Работаем ежедневно: с 08:00 до 22:00</span>
                </div>
                <button onclick="closeOrderModal()"
                    class="bg-gray-900 hover:bg-black text-white px-7 py-3 rounded-xl font-semibold text-sm transition-all">
                    Отлично, понятно
                </button>
            </div>

        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Маска для телефона
    initPhoneMask();
}

function initPhoneMask() {
    const phoneInput = document.getElementById('order-user-phone');
    if (!phoneInput) return;

    phoneInput.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '');
        if (val.startsWith('7') || val.startsWith('8')) {
            val = val.substring(1);
        }
        let formatted = '+7 ';
        if (val.length > 0) {
            formatted += '(' + val.substring(0, 3);
        }
        if (val.length >= 3) {
            formatted += ') ' + val.substring(3, 6);
        }
        if (val.length >= 6) {
            formatted += '-' + val.substring(6, 8);
        }
        if (val.length >= 8) {
            formatted += '-' + val.substring(8, 10);
        }
        e.target.value = formatted.substring(0, 18);
    });
}

// Глобальная функция открытия модального окна
window.openOrderModal = function(title = '', price = '', sku = '', image = '') {
    createOrderModalDOM();
    const modal = document.getElementById('universal-order-modal');
    const formStep = document.getElementById('order-form-step');
    const successStep = document.getElementById('order-success-step');
    const preview = document.getElementById('order-item-preview');
    
    if (!modal) return;

    formStep.classList.remove('hidden');
    successStep.classList.add('hidden');

    if (title && title !== 'Общая консультация и подбор') {
        preview.classList.remove('hidden');
        document.getElementById('order-item-title').textContent = title;
        document.getElementById('order-item-price').textContent = price ? (typeof price === 'number' ? `${price.toLocaleString('ru-RU')} ₽` : price) : '';
        document.getElementById('order-item-sku').textContent = sku ? `Арт. ${sku}` : '';
        
        const imgEl = document.getElementById('order-item-img');
        const imgWrap = document.getElementById('order-item-img-wrap');
        if (image) {
            imgEl.src = image;
            imgWrap.classList.remove('hidden');
        } else {
            imgWrap.classList.add('hidden');
        }

        document.getElementById('form-item-name').value = title;
        document.getElementById('form-item-sku').value = sku;
        document.getElementById('form-item-price').value = price;
    } else {
        preview.classList.add('hidden');
        document.getElementById('form-item-name').value = 'Заявка на консультацию';
        document.getElementById('form-item-sku').value = '';
        document.getElementById('form-item-price').value = '';
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    if (window.lucide) {
        lucide.createIcons();
    }
};

window.closeOrderModal = function() {
    const modal = document.getElementById('universal-order-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
    document.body.style.overflow = '';
};

window.handleOrderSubmit = function(event) {
    event.preventDefault();
    const btn = document.getElementById('order-submit-btn');
    const originalText = btn.innerHTML;
    
    btn.disabled = true;
    btn.innerHTML = `<span class="animate-spin mr-2">⏳</span> Отправка...`;

    setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = originalText;
        
        // Генерация случайного номера заказа
        const randNum = Math.floor(1000 + Math.random() * 9000);
        document.getElementById('success-order-num').textContent = `#${randNum}`;

        document.getElementById('order-form-step').classList.add('hidden');
        document.getElementById('order-success-step').classList.remove('hidden');
        
        // Очистка формы
        document.getElementById('lead-order-form').reset();

        if (window.lucide) {
            lucide.createIcons();
        }
    }, 600);
};

// =============================================================================
// КОНСТРУКТОР ШРИФТОВ
// =============================================================================

window.createFontConstructorDOM = function() {
    if (document.getElementById('font-constructor-widget')) return;

    const constructorHTML = `
    <div id="font-constructor-widget" class="fixed bottom-4 left-4 z-[999] font-constructor-wrap">
        <button onclick="toggleFontDropdown()" title="Конструктор дизайна"
            class="w-12 h-12 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center border border-gray-100 hover:scale-105 transition-transform active:scale-95">
            <i data-lucide="palette" class="w-5 h-5 text-gray-700"></i>
        </button>
        
        <div id="font-dropdown" class="absolute bottom-full left-0 mb-4 w-72 bg-white border border-gray-100 shadow-2xl rounded-2xl hidden flex-col overflow-hidden z-[1000] origin-bottom-left transform transition-all opacity-0 scale-95 p-5 gap-6">
            
            <!-- Шрифт -->
            <div>
                <span class="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3 block">Шрифт сайта</span>
                <div class="flex flex-col gap-1.5">
                    <button onclick="changeSiteFont('font-sans')" class="px-3 py-2 text-left rounded-lg hover:bg-gray-50 text-sm flex items-center justify-between font-sans transition-colors border border-transparent">
                        Inter <i data-lucide="check" class="w-4 h-4 text-accent hidden check-icon-font" data-font="font-sans"></i>
                    </button>
                    <button onclick="changeSiteFont('font-roboto')" class="px-3 py-2 text-left rounded-lg hover:bg-gray-50 text-sm flex items-center justify-between font-roboto transition-colors border border-transparent">
                        Roboto <i data-lucide="check" class="w-4 h-4 text-accent hidden check-icon-font" data-font="font-roboto"></i>
                    </button>
                    <button onclick="changeSiteFont('font-montserrat')" class="px-3 py-2 text-left rounded-lg hover:bg-gray-50 text-sm flex items-center justify-between font-montserrat transition-colors border border-transparent">
                        Montserrat <i data-lucide="check" class="w-4 h-4 text-accent hidden check-icon-font" data-font="font-montserrat"></i>
                    </button>
                </div>
            </div>

            <!-- Жирность заголовков -->
            <div>
                <span class="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3 block">Жирность заголовков</span>
                <div class="flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
                    <button onclick="changeHeadingWeight('400')" class="flex-1 py-1.5 text-xs rounded-lg font-normal text-gray-600 hover:text-gray-900 transition-all hw-btn" data-hw="400">400</button>
                    <button onclick="changeHeadingWeight('500')" class="flex-1 py-1.5 text-xs rounded-lg font-medium text-gray-600 hover:text-gray-900 transition-all hw-btn" data-hw="500">500</button>
                    <button onclick="changeHeadingWeight('600')" class="flex-1 py-1.5 text-xs rounded-lg font-semibold text-gray-600 hover:text-gray-900 transition-all hw-btn" data-hw="600">600</button>
                    <button onclick="changeHeadingWeight('700')" class="flex-1 py-1.5 text-xs rounded-lg font-bold text-gray-600 hover:text-gray-900 transition-all hw-btn" data-hw="700">700</button>
                    <button onclick="changeHeadingWeight('800')" class="flex-1 py-1.5 text-xs rounded-lg font-extrabold text-gray-600 hover:text-gray-900 transition-all hw-btn" data-hw="800">800</button>
                </div>
            </div>

            <!-- Жирность текста -->
            <div>
                <span class="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3 block">Жирность текста</span>
                <div class="flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
                    <button onclick="changeTextWeight('300')" class="flex-1 py-1.5 text-xs rounded-lg font-light text-gray-600 hover:text-gray-900 transition-all tw-btn" data-tw="300">300</button>
                    <button onclick="changeTextWeight('400')" class="flex-1 py-1.5 text-xs rounded-lg font-normal text-gray-600 hover:text-gray-900 transition-all tw-btn" data-tw="400">400</button>
                    <button onclick="changeTextWeight('500')" class="flex-1 py-1.5 text-xs rounded-lg font-medium text-gray-600 hover:text-gray-900 transition-all tw-btn" data-tw="500">500</button>
                </div>
            </div>

            <!-- Сброс по умолчанию -->
            <div class="pt-2 border-t border-gray-100">
                <button onclick="resetFontSettings()" class="w-full py-2.5 text-xs font-semibold text-gray-500 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
                    По умолчанию
                </button>
            </div>

        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', constructorHTML);
};

window.toggleFontDropdown = function() {
    const dropdown = document.getElementById('font-dropdown');
    if (!dropdown) return;

    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        setTimeout(() => {
            dropdown.classList.remove('opacity-0', 'scale-95');
            dropdown.classList.add('opacity-100', 'scale-100');
        }, 10);
    } else {
        dropdown.classList.remove('opacity-100', 'scale-100');
        dropdown.classList.add('opacity-0', 'scale-95');
        setTimeout(() => {
            dropdown.classList.add('hidden');
        }, 150);
    }
};

window.changeSiteFont = function(fontClass) {
    localStorage.setItem('site_font', fontClass);
    applySiteFont(fontClass);
    updateFontCheckmarks();
};

window.changeHeadingWeight = function(weight) {
    localStorage.setItem('heading_weight', weight);
    applyDynamicStyles();
    updateFontCheckmarks();
};

window.changeTextWeight = function(weight) {
    localStorage.setItem('text_weight', weight);
    applyDynamicStyles();
    updateFontCheckmarks();
};

window.resetFontSettings = function() {
    localStorage.removeItem('site_font');
    localStorage.removeItem('heading_weight');
    localStorage.removeItem('text_weight');
    
    applySiteFont('font-sans');
    applyDynamicStyles();
    updateFontCheckmarks();
};

window.applySiteFont = function(fontClass) {
    document.body.classList.remove('font-sans', 'font-roboto', 'font-montserrat');
    document.body.classList.add(fontClass);
};

window.applyDynamicStyles = function() {
    const headingWeight = localStorage.getItem('heading_weight');
    const textWeight = localStorage.getItem('text_weight');
    
    let styleTag = document.getElementById('constructor-dynamic-styles');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'constructor-dynamic-styles';
        document.head.appendChild(styleTag);
    }
    
    let css = '';
    if (headingWeight) {
        css += `h1, h2, h3, h4, h5, h6, .text-xl, .text-2xl, .text-3xl { font-weight: ${headingWeight} !important; }\n`;
    }
    if (textWeight) {
        // Изменяем жирность параграфов и спанов, но не кнопок (чтобы не сломать их жирность)
        css += `p, span:not(.animate-spin), a:not(.btn):not(.header-cat-link):not(.header-drawer-link), li, div.text-gray-500, div.text-textMuted { font-weight: ${textWeight} !important; }\n`;
    }
    
    styleTag.innerHTML = css;
};

window.initSiteFont = function() {
    const savedFont = localStorage.getItem('site_font') || 'font-sans';
    applySiteFont(savedFont);
    applyDynamicStyles();
};

window.updateFontCheckmarks = function() {
    const savedFont = localStorage.getItem('site_font') || 'font-sans';
    const headingWeight = localStorage.getItem('heading_weight') || '700'; // дефолт для заголовков обычно 700 или 600
    const textWeight = localStorage.getItem('text_weight') || '400';

    // Обновление шрифта
    document.querySelectorAll('.check-icon-font').forEach(icon => {
        if (icon.getAttribute('data-font') === savedFont) {
            icon.classList.remove('hidden');
            icon.parentElement.classList.add('bg-gray-50', 'border-gray-200');
            icon.parentElement.classList.remove('border-transparent');
        } else {
            icon.classList.add('hidden');
            icon.parentElement.classList.remove('bg-gray-50', 'border-gray-200');
            icon.parentElement.classList.add('border-transparent');
        }
    });

    // Обновление кнопок заголовков
    document.querySelectorAll('.hw-btn').forEach(btn => {
        if (btn.getAttribute('data-hw') === headingWeight) {
            btn.classList.add('bg-white', 'shadow-sm', 'text-gray-900');
            btn.classList.remove('text-gray-600');
        } else {
            btn.classList.remove('bg-white', 'shadow-sm', 'text-gray-900');
            btn.classList.add('text-gray-600');
        }
    });

    // Обновление кнопок текста
    document.querySelectorAll('.tw-btn').forEach(btn => {
        if (btn.getAttribute('data-tw') === textWeight) {
            btn.classList.add('bg-white', 'shadow-sm', 'text-gray-900');
            btn.classList.remove('text-gray-600');
        } else {
            btn.classList.remove('bg-white', 'shadow-sm', 'text-gray-900');
            btn.classList.add('text-gray-600');
        }
    });
};
