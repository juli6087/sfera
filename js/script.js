// Конфигурация Tailwind CSS
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
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

    // Инициализация иконок Lucide
    if (window.lucide) {
        lucide.createIcons();
    }

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
