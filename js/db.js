// Единая база данных товаров и услуг для прототипа

const PRODUCTS_DATA = [
    {
        "id": 11,
        "sku": "8421-101",
        "title": "Кухонные электронные весы Tuvio с LED-дисплеем и точностью 0.1 г",
        "category": "home",
        "categoryName": "Товары",
        "price": 1490,
        "oldPrice": 1990,
        "discount": 25,
        "rating": 4.9,
        "reviewsCount": 48,
        "image": "images/product-scales.webp",
        "badge": {
            "bgClass": "bg-red-500",
            "text": "Новинка"
        },
        "inStock": true,
        "fastDelivery": true,
        "description": "Электронные кухонные весы Tuvio от Яндекс Фабрики с ярким LED-дисплеем, платформой из нержавеющей стали и высокой точностью измерений от 0.1 г.",
        "properties": [
            { "name": "Бренд", "value": "Tuvio (Яндекс Фабрика)" },
            { "name": "Точность", "value": "0.1 г" },
            { "name": "Дисплей", "value": "Скрытый LED" },
            { "name": "Максимальный вес", "value": "5 кг" }
        ],
        "detailHtml": `<p class="mb-6 text-[14.5px] leading-relaxed text-gray-700">
    Электронные кухонные весы <strong>Tuvio</strong> от Яндекс Фабрики сочетают в себе высокую точность измерений, минималистичный дизайн и надежную конструкцию. Платформа из матовой нержавеющей стали устойчива к царапинам и легко очищается, а скрытый LED-дисплей загорается только во время взвешивания, придавая устройству монолитный и лаконичный вид.
</p>

<!-- Сниппет: Карточки преимуществ / Особенности -->
<div class="snippet-features">
    <div class="snippet-feature-card">
        <div class="snippet-feature-title">Точность 0.1 г</div>
        <div class="snippet-feature-desc">Высокочувствительный тензодатчик для идеального соблюдения рецептур</div>
    </div>
    <div class="snippet-feature-card">
        <div class="snippet-feature-title">Скрытый LED-экран</div>
        <div class="snippet-feature-desc">Крупная белая индикация, невидимая в выключенном состоянии</div>
    </div>
    <div class="snippet-feature-card">
        <div class="snippet-feature-title">Функция тарокомпенсации</div>
        <div class="snippet-feature-desc">Мгновенный сброс веса тары одной сенсорной кнопкой TARE</div>
    </div>
</div>

<h3 class="text-[16px] font-semibold text-gray-900 mt-8 mb-3.5">Технические характеристики</h3>
<!-- Сниппет: Характеристики с точечным разделителем -->
<div class="snippet-props">
    <div class="prop-item">
        <span class="prop-name">Бренд</span>
        <div class="prop-dots"></div>
        <span class="prop-val">Tuvio (Яндекс Фабрика)</span>
    </div>
    <div class="prop-item">
        <span class="prop-name">Шаг измерения (точность)</span>
        <div class="prop-dots"></div>
        <span class="prop-val">0.1 г (до 1 кг) / 1 г (до 5 кг)</span>
    </div>
    <div class="prop-item">
        <span class="prop-name">Максимальная нагрузка</span>
        <div class="prop-dots"></div>
        <span class="prop-val">5 000 г (5 кг)</span>
    </div>
    <div class="prop-item">
        <span class="prop-name">Тип дисплея</span>
        <div class="prop-dots"></div>
        <span class="prop-val">Скрытый цифровой LED</span>
    </div>
    <div class="prop-item">
        <span class="prop-name">Материал платформы</span>
        <div class="prop-dots"></div>
        <span class="prop-val">Матовая нержавеющая сталь SUS304</span>
    </div>
    <div class="prop-item">
        <span class="prop-name">Единицы измерения</span>
        <div class="prop-dots"></div>
        <span class="prop-val">г, кг, мл, oz, lb</span>
    </div>
    <div class="prop-item">
        <span class="prop-name">Питание</span>
        <div class="prop-dots"></div>
        <span class="prop-val">3 × AAA (в комплекте)</span>
    </div>
</div>

<h3 class="text-[16px] font-semibold text-gray-900 mt-8 mb-3.5">Сравнение режимов и диапазонов взвешивания</h3>
<!-- Сниппет: Таблица -->
<div class="snippet-table-wrap">
    <table class="snippet-table">
        <thead>
            <tr>
                <th>Режим измерения</th>
                <th>Единица</th>
                <th>Мин. вес</th>
                <th>Макс. вес</th>
                <th>Погрешность</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Точное взвешивание (специи, дрожжи)</td>
                <td>граммы (g)</td>
                <td>0.5 г</td>
                <td>1 000 г</td>
                <td>±0.1 г</td>
            </tr>
            <tr>
                <td>Стандартное взвешивание (мука, крупы)</td>
                <td>граммы / кг</td>
                <td>1 г</td>
                <td>5 000 г</td>
                <td>±1 г</td>
            </tr>
            <tr>
                <td>Объем жидкостей (вода, молоко)</td>
                <td>миллилитры (ml)</td>
                <td>1 мл</td>
                <td>5 000 мл</td>
                <td>±1 мл</td>
            </tr>
        </tbody>
    </table>
</div>

<h3 class="text-[16px] font-semibold text-gray-900 mt-8 mb-3.5">Особенности модели и комплектация</h3>
<!-- Сниппет: Маркированный список -->
<ul class="snippet-list-bullet">
    <li>Автоматическое отключение через 2 минуты бездействия для экономии заряда батарей.</li>
    <li>Индикация перегрузки (Err) и низкого заряда батареи (Lo) на дисплее.</li>
    <li>Прорезиненные противоскользящие ножки для стабильной фиксации на столешнице.</li>
    <li>В комплекте: кухонные весы, комплект щелочных батареек AAA, руководство пользователя и гарантийный талон.</li>
</ul>

<!-- Сниппет: Цитата -->
<blockquote class="snippet-quote">
    «В кулинарии и кондитерском деле точность до десятых грамма определяет итоговую текстуру и правильный результат. Весы Tuvio обеспечивают высокую точность при простом и понятном управлении.»
    <span class="quote-author">— Михаил Смирнов, шеф-кондитер</span>
</blockquote>

<h3 class="text-[16px] font-semibold text-gray-900 mt-8 mb-3.5">Пошаговое руководство по использованию</h3>
<!-- Сниппет: Нумерованный список -->
<ol class="snippet-list-num">
    <li>Установите входящие в комплект элементы питания AAA в отсек на нижней панели, соблюдая полярность.</li>
    <li>Поместите весы на ровную твердую горизонтальную поверхность.</li>
    <li>Нажмите сенсорную кнопку ON/OFF и дождитесь появления значения «0.0 g» на LED-дисплее.</li>
    <li>Установите посуду и нажмите кнопку TARE для компенсации веса тары перед добавлением ингредиентов.</li>
</ol>

<!-- Сниппет: Картинка слева + Текст справа -->
<div class="snippet-media-left">
    <div class="snippet-media-img">
        <img src="images/placeholder.svg" alt="Изображение товара">
    </div>
    <div class="snippet-media-content">
        <h4>Корпус из нержавеющей стали</h4>
        <p>Платформа выполнена из пищевой нержавеющей стали марки SUS304, устойчивой к воздействию пищевых кислот, влаги и механическим повреждениям при ежедневном использовании.</p>
    </div>
</div>

<!-- Сниппет: Текст слева + Картинка справа -->
<div class="snippet-media-right">
    <div class="snippet-media-content">
        <h4>Скрытый монолитный LED-экран</h4>
        <p>Крупные цифровые символы с мягкой белой подсветкой четко различимы под любым углом освещения, а при выключении весов экран становится полностью невидимым.</p>
    </div>
    <div class="snippet-media-img">
        <img src="images/placeholder.svg" alt="Изображение товара">
    </div>
</div>

<!-- Сниппет: Одиночное изображение с подписью -->
<figure class="snippet-image-single">
    <div class="snippet-image-wrap">
        <img src="images/placeholder.svg" alt="Изображение товара">
    </div>
    <figcaption class="snippet-caption">Лабораторная точность взвешивания ингредиентов от 0.1 г до 5 кг</figcaption>
</figure>

<!-- Сниппет: Две картинки рядом (Duo Grid) -->
<div class="snippet-images-duo">
    <figure class="snippet-image-item">
        <div class="snippet-image-wrap">
            <img src="images/placeholder.svg" alt="Изображение товара 1">
        </div>
        <figcaption class="snippet-caption">Сенсорное управление TARE и UNIT</figcaption>
    </figure>
    <figure class="snippet-image-item">
        <div class="snippet-image-wrap">
            <img src="images/placeholder.svg" alt="Изображение товара 2">
        </div>
        <figcaption class="snippet-caption">Прорезиненное основание против скольжения</figcaption>
    </figure>
</div>

<!-- Сниппет: Информационный блок / Уведомление -->
<div class="snippet-callout">
    <strong>Рекомендация по уходу:</strong> Протирайте платформу из нержавеющей стали мягкой влажной салфеткой из микрофибры. Не погружайте корпус весов в воду и не мойте их в посудомоечной машине.
</div>`,
        "modifications": []
    },
    {
        "id": 12,
        "sku": "8421-102",
        "title": "Погружной блендер 3в1 Tuvio 1500 Вт с измельчителем и венчиком",
        "category": "home",
        "categoryName": "Товары",
        "price": 3290,
        "oldPrice": 4290,
        "discount": 23,
        "rating": 4.9,
        "reviewsCount": 64,
        "image": "images/product-blender.webp",
        "badge": {
            "bgClass": "bg-orange-500",
            "text": "Хит"
        },
        "inStock": true,
        "fastDelivery": true,
        "description": "Мощный погружной блендер 3в1 Tuvio мощностью 1500 Вт с плавной регулировкой скорости, турборежимом, чашей измельчителя и венчиком для взбивания.",
        "properties": [
            { "name": "Бренд", "value": "Tuvio (Яндекс Фабрика)" },
            { "name": "Мощность", "value": "1500 Вт" },
            { "name": "Комплектация", "value": "3 в 1 (блендер, измельчитель, миксер)" },
            { "name": "Режимы", "value": "Плавная регулировка + Turbo" }
        ],
        "modifications": []
    },
    {
        "id": 13,
        "sku": "8421-103",
        "title": "Беспроводной вертикальный пылесос Tuvio 450 Вт с влажной уборкой",
        "category": "home",
        "categoryName": "Товары",
        "price": 12990,
        "oldPrice": 16990,
        "discount": 24,
        "rating": 5.0,
        "reviewsCount": 89,
        "image": "images/product-vacuum.webp",
        "badge": {
            "bgClass": "bg-red-500",
            "text": "Хит"
        },
        "inStock": true,
        "fastDelivery": true,
        "description": "Мощный беспроводной вертикальный пылесос Tuvio 450 Вт с цифровым дисплеем, насадкой для влажной уборки, стойкой для хранения и автономной работой до 60 мин.",
        "properties": [
            { "name": "Бренд", "value": "Tuvio (Яндекс Фабрика)" },
            { "name": "Мощность", "value": "450 Вт" },
            { "name": "Функция", "value": "Сухая и влажная уборка" },
            { "name": "Время работы", "value": "до 60 минут" }
        ],
        "modifications": []
    },
    {
        "id": 1,
        "sku": "7482-019",
        "title": "Умная колонка Яндекс Станция Миди с голосовым помощником Алиса",
        "category": "electronics",
        "categoryName": "Электроника",
        "price": 12990,
        "oldPrice": 15990,
        "discount": 19,
        "rating": 4.9,
        "reviewsCount": 128,
        "image": "images/product-speaker.jpg",
        "badge": {
            "bgClass": "bg-red-500",
            "text": "Новинка"
        },
        "inStock": true,
        "fastDelivery": true,
        "description": "Компактная умная колонка с голосовым помощником Алисой, мощным звуком 24 Вт и поддержкой протокола Zigbee для управления умным домом.",
        "properties": [
            {
                "name": "Производитель",
                "value": "Яндекс"
            },
            {
                "name": "Цвет",
                "value": "Серый"
            },
            {
                "name": "Гарантия",
                "value": "1 год"
            }
        ],
        "modifications": [
            {
                "type": "color",
                "title": "Цвет",
                "selected": "Серый",
                "options": [
                    {
                        "name": "Серый",
                        "image": "images/product-speaker.jpg"
                    },
                    {
                        "name": "Черный",
                        "bgClass": "bg-zinc-900"
                    },
                    {
                        "name": "Красный",
                        "bgClass": "bg-rose-500"
                    }
                ]
            },
            {
                "type": "button",
                "title": "Комплектация",
                "selected": "Стандартная",
                "options": [
                    "Стандартная",
                    "С умной лампой",
                    "+ Подписка Плюс"
                ]
            }
        ]
    },
    {
        "id": 2,
        "sku": "3910-845",
        "title": "Кофеварка рожковая Polaris PCM 1535E Adore Crema",
        "category": "home",
        "categoryName": "Для дома",
        "price": 8490,
        "oldPrice": 10990,
        "discount": 23,
        "rating": 4.8,
        "reviewsCount": 95,
        "image": "images/product-coffee.jpg",
        "badge": {
            "bgClass": "bg-orange-500",
            "text": "Хит"
        },
        "inStock": true,
        "fastDelivery": true,
        "description": "Эспрессо-кофеварка с давлением 15 бар, ручным капучинатором для идеальной молочной пенки и платформой для подогрева чашек.",
        "properties": [
            {
                "name": "Производитель",
                "value": "Polaris"
            },
            {
                "name": "Давление",
                "value": "15 бар"
            },
            {
                "name": "Гарантия",
                "value": "2 года"
            }
        ],
        "modifications": [
            {
                "type": "color",
                "title": "Цвет",
                "selected": "Серебристый",
                "options": [
                    {
                        "name": "Серебристый",
                        "bgClass": "bg-gray-300"
                    },
                    {
                        "name": "Черный",
                        "bgClass": "bg-zinc-900"
                    }
                ]
            }
        ]
    },
    {
        "id": 3,
        "sku": "5120-334",
        "title": "Гантели разборные стальные 2x15 кг в кейсе",
        "category": "sport",
        "categoryName": "Спорт и фитнес",
        "price": 5290,
        "oldPrice": 6200,
        "discount": 15,
        "rating": 4.9,
        "reviewsCount": 64,
        "image": "images/product-dumbbells.jpg",
        "badge": {
            "bgClass": "bg-orange-500",
            "text": "Хит"
        },
        "inStock": true,
        "fastDelivery": false,
        "description": "Универсальный набор разборных гантелей с эргономичными хромированными грифами и надежными винтовыми замками.",
        "properties": [
            {
                "name": "Материал",
                "value": "Сталь"
            },
            {
                "name": "Вес",
                "value": "2 x 15 кг"
            },
            {
                "name": "Гарантия",
                "value": "5 лет"
            }
        ],
        "modifications": [
            {
                "type": "button",
                "title": "Вес",
                "selected": "2 x 15 кг",
                "options": [
                    "2 x 10 кг",
                    "2 x 15 кг",
                    "2 x 20 кг"
                ]
            }
        ]
    },
    {
        "id": 4,
        "sku": "8821-092",
        "title": "Худи оверсайз утепленное с начесом и капюшоном",
        "category": "clothes",
        "categoryName": "Одежда",
        "price": 3890,
        "oldPrice": 4500,
        "discount": 14,
        "rating": 4.7,
        "reviewsCount": 42,
        "image": "images/product-hoodie.jpg",
        "badge": {
            "bgClass": "bg-red-500",
            "text": "Новинка"
        },
        "inStock": true,
        "fastDelivery": true,
        "description": "Стильное и теплое худи из 100% плотного хлопка с мягким флисовым начесом, глубоким капюшоном и карманом-кенгуру.",
        "properties": [
            {
                "name": "Материал",
                "value": "Хлопок 100%"
            },
            {
                "name": "Крой",
                "value": "Оверсайз"
            },
            {
                "name": "Страна",
                "value": "Турция"
            }
        ],
        "modifications": [
            {
                "type": "button",
                "title": "Размер",
                "selected": "M",
                "options": [
                    "S",
                    "M",
                    "L",
                    "XL"
                ]
            },
            {
                "type": "color",
                "title": "Цвет",
                "selected": "Бежевый",
                "options": [
                    {
                        "name": "Бежевый",
                        "image": "images/product-hoodie.jpg"
                    },
                    {
                        "name": "Черный",
                        "bgClass": "bg-zinc-900"
                    }
                ]
            }
        ]
    },
    {
        "id": 5,
        "sku": "1094-551",
        "title": "Подарочный набор бизнес-литературы (5 бестселлеров)",
        "category": "books",
        "categoryName": "Книги",
        "price": 4200,
        "oldPrice": 5000,
        "discount": 16,
        "rating": 5,
        "reviewsCount": 31,
        "image": "images/product-books.jpg",
        "badge": {
            "bgClass": "bg-purple-500",
            "text": "Советуем"
        },
        "inStock": true,
        "fastDelivery": true,
        "description": "Коллекционное подарочное издание 5 культовых книг по менеджменту, лидерству, личной эффективности и стратегическому мышлению.",
        "properties": [
            {
                "name": "Издательство",
                "value": "МИФ"
            },
            {
                "name": "Обложка",
                "value": "Твердая"
            },
            {
                "name": "Кол-во книг",
                "value": "5 шт"
            }
        ],
        "modifications": []
    },
    {
        "id": 6,
        "sku": "9901-443",
        "title": "Шлем виртуальной реальности PRO-4 Wireless",
        "category": "electronics",
        "categoryName": "Электроника",
        "price": 42900,
        "oldPrice": 49900,
        "discount": 14,
        "rating": 4.9,
        "reviewsCount": 88,
        "image": "images/product-vr.jpg",
        "badge": {
            "bgClass": "bg-red-500",
            "text": "Новинка"
        },
        "inStock": true,
        "fastDelivery": true,
        "description": "Флагманский автономный VR-шлем с дисплеями 4K, частотой 120 Гц, трекингом взгляда и пространственным звуком.",
        "properties": [
            {
                "name": "Разрешение",
                "value": "4K"
            },
            {
                "name": "Частота",
                "value": "120 Гц"
            },
            {
                "name": "Гарантия",
                "value": "1 год"
            }
        ],
        "modifications": [
            {
                "type": "button",
                "title": "Память",
                "selected": "128 ГБ",
                "options": [
                    "128 ГБ",
                    "256 ГБ"
                ]
            }
        ]
    },
    {
        "id": 7,
        "sku": "6632-118",
        "title": "Виниловый проигрыватель Topsi Vintage Audio Bluetooth",
        "category": "electronics",
        "categoryName": "Электроника",
        "price": 18500,
        "oldPrice": 21000,
        "discount": 12,
        "rating": 4.8,
        "reviewsCount": 53,
        "image": "images/product-turntable.jpg",
        "badge": {
            "bgClass": "bg-purple-500",
            "text": "Советуем"
        },
        "inStock": true,
        "fastDelivery": false,
        "description": "Ретро-проигрыватель в деревянном корпусе со встроенным фонокорректором, Bluetooth-модулем и поддержкой трех скоростей воспроизведения.",
        "properties": [
            {
                "name": "Привод",
                "value": "Ременной"
            },
            {
                "name": "Bluetooth",
                "value": "Есть"
            },
            {
                "name": "Гарантия",
                "value": "1 год"
            }
        ],
        "modifications": []
    },
    {
        "id": 8,
        "sku": "4420-991",
        "title": "Карамельный чизкейк New York с морской солью (1.2 кг)",
        "category": "home",
        "categoryName": "Еда и десерты",
        "price": 2190,
        "oldPrice": 2600,
        "discount": 15,
        "rating": 4.9,
        "reviewsCount": 112,
        "image": "images/product-cheesecake.jpg",
        "badge": {
            "bgClass": "bg-orange-500",
            "text": "Хит"
        },
        "inStock": true,
        "fastDelivery": true,
        "description": "Нежнейший классический чизкейк из сливочного сыра Cremette на песочной основе, политый домашней соленой карамелью.",
        "properties": [
            {
                "name": "Вес",
                "value": "1.2 кг"
            },
            {
                "name": "Срок годности",
                "value": "5 суток"
            },
            {
                "name": "Условия",
                "value": "Хранить в холоде"
            }
        ],
        "modifications": [
            {
                "type": "button",
                "title": "Вес",
                "selected": "1.2 кг",
                "options": [
                    "0.8 кг",
                    "1.2 кг"
                ]
            }
        ]
    },
    {
        "id": 9,
        "sku": "7731-620",
        "title": "Топ спортивный компрессионный Fit Pro Seamless",
        "category": "clothes",
        "categoryName": "Одежда",
        "price": 2490,
        "oldPrice": 2990,
        "discount": 16,
        "rating": 4.8,
        "reviewsCount": 39,
        "image": "images/product-sporttop.jpg",
        "badge": {
            "bgClass": "bg-red-500",
            "text": "-16%"
        },
        "inStock": true,
        "fastDelivery": true,
        "description": "Бесшовный спортивный бра-топ с максимальной поддержкой груди, влагоотводящей дышащей тканью и стильным дизайном спинки.",
        "properties": [
            {
                "name": "Материал",
                "value": "Нейлон, Спандекс"
            },
            {
                "name": "Поддержка",
                "value": "Сильная"
            },
            {
                "name": "Стирка",
                "value": "Бережная 30°"
            }
        ],
        "modifications": [
            {
                "type": "button",
                "title": "Размер",
                "selected": "M",
                "options": [
                    "S",
                    "M",
                    "L"
                ]
            },
            {
                "type": "color",
                "title": "Цвет",
                "selected": "Черный",
                "options": [
                    {
                        "name": "Черный",
                        "image": "images/product-sporttop.jpg"
                    },
                    {
                        "name": "Розовый",
                        "bgClass": "bg-pink-400"
                    },
                    {
                        "name": "Синий",
                        "bgClass": "bg-blue-600"
                    }
                ]
            }
        ]
    },
    {
        "id": 10,
        "sku": "3319-704",
        "title": "Набор для создания соевой ароматической свечи DIY",
        "category": "home",
        "categoryName": "Для дома",
        "price": 1790,
        "oldPrice": 2200,
        "discount": 18,
        "rating": 4.9,
        "reviewsCount": 76,
        "image": "images/product-candle.jpg",
        "badge": {
            "bgClass": "bg-amber-400 text-gray-900",
            "text": "Акция"
        },
        "inStock": true,
        "fastDelivery": true,
        "description": "Полный DIY-набор для создания свечи: 100% соевый воск, стеклянная баночка, хлопковый и деревянный фитили, премиум аромамасло «Табак и ваниль».",
        "properties": [
            {
                "name": "Материал",
                "value": "Соевый воск"
            },
            {
                "name": "Аромат",
                "value": "Табак и ваниль"
            },
            {
                "name": "Время горения",
                "value": "до 40 ч"
            }
        ],
        "modifications": [
            {
                "type": "button",
                "title": "Аромат",
                "selected": "Табак и ваниль",
                "options": [
                    "Табак и ваниль",
                    "Карамель",
                    "Лаванда"
                ]
            }
        ]
    }
];

const SERVICES_DATA = [
    {
        id: 1,
        sku: "SRV-101",
        title: "Диагностика и ремонт бытовой техники и электроники",
        category: "repair",
        categoryName: "Ремонт техники",
        price: 1500,
        oldPrice: null,
        discount: null,
        image: "images/service-repair.jpg",
        badge: { bgClass: "bg-red-500", text: "Хит" },
        properties: [
            { name: "Срок:", value: "от 1 до 3 часов" },
            { name: "Выезд мастера:", value: "Бесплатно" },
            { name: "Гарантия:", value: "12 месяцев" }
        ]
    },
    {
        id: 2,
        sku: "SRV-102",
        title: "Профессиональный клининг квартир и уборка после ремонта",
        category: "cleaning",
        categoryName: "Клининг",
        price: 2500,
        oldPrice: null,
        discount: null,
        image: "images/service-cleaning.jpg",
        badge: { bgClass: "bg-orange-500", text: "Советуем" },
        properties: [
            { name: "Длительность:", value: "2–6 часов" },
            { name: "Инвентарь:", value: "Исполнителя" },
            { name: "Средства:", value: "Эко-составы" }
        ]
    },
    {
        id: 3,
        sku: "SRV-103",
        title: "Мастер на час: сантехника, электрика и сборка мебели",
        category: "handyman",
        categoryName: "Мастер на час",
        price: 1000,
        oldPrice: 1200,
        discount: 15,
        image: "images/service-handyman.jpg",
        badge: null,
        properties: [
            { name: "Срочность:", value: "выезд от 45 мин" },
            { name: "Опыт мастеров:", value: "от 5 лет" },
            { name: "Инструмент:", value: "Профессиональный" }
        ]
    },
    {
        id: 4,
        sku: "SRV-104",
        title: "Выгул собак, передержка и услуги профессиональных догситтеров",
        category: "pets",
        categoryName: "Уход за животными",
        price: 800,
        oldPrice: null,
        discount: null,
        image: "images/service-pets.jpg",
        badge: null,
        properties: [
            { name: "Длительность:", value: "от 45 мин" },
            { name: "Отчетность:", value: "Фото и GPS-трек" },
            { name: "Формат:", value: "На дому" }
        ]
    },
    {
        id: 5,
        sku: "SRV-105",
        title: "Установка, чистка и заправка кондиционеров и сплит-систем",
        category: "repair",
        categoryName: "Ремонт техники",
        price: 3500,
        oldPrice: 4200,
        discount: 17,
        image: "images/article-ac.jpg",
        badge: { bgClass: "bg-red-500", text: "Новинка" },
        properties: [
            { name: "Срок монтажа:", value: "от 2 часов" },
            { name: "Оборудование:", value: "Алмазное бурение" },
            { name: "Гарантия:", value: "24 месяца" }
        ]
    },
    {
        id: 6,
        sku: "SRV-106",
        title: "Комплексный детейлинг, полировка кузова и химчистка салона",
        category: "auto",
        categoryName: "Автоуслуги",
        price: 8500,
        oldPrice: 10000,
        discount: 15,
        image: "images/category-auto-detailing.jpg",
        badge: { bgClass: "bg-orange-500", text: "Хит" },
        properties: [
            { name: "Покрытие:", value: "Керамика 9H" },
            { name: "Время работы:", value: "1 день" },
            { name: "Гидрофоб:", value: "Антидождь в подарок" }
        ]
    },
    {
        id: 7,
        sku: "SRV-107",
        title: "Уходовые и восстанавливающие SPA-процедуры для лица и тела",
        category: "beauty",
        categoryName: "Красота и уход",
        price: 2900,
        oldPrice: 3500,
        discount: 17,
        image: "images/category-beauty-cosmetics.jpg",
        badge: { bgClass: "bg-pink-500", text: "Акция" },
        properties: [
            { name: "Длительность:", value: "60–90 мин" },
            { name: "Косметика:", value: "Премиум (Франция)" },
            { name: "Эффект:", value: "С 1-й процедуры" }
        ]
    },
    {
        id: 8,
        sku: "SRV-108",
        title: "Срочный ремонт стиральных и посудомоечных машин на дому",
        category: "repair",
        categoryName: "Ремонт техники",
        price: 1800,
        oldPrice: null,
        discount: null,
        image: "images/promo-repair.jpg",
        badge: { bgClass: "bg-red-500", text: "Срочно" },
        properties: [
            { name: "Выезд:", value: "В течение 30 мин" },
            { name: "Запчасти:", value: "В наличии у мастера" },
            { name: "Гарантия:", value: "До 2 лет" }
        ]
    }
];




const PROMOS_DATA = [
    {
        id: "promo-1",
        title: "Скидка 20% на генеральную уборку",
        date: "до 30 мая 2024",
        category: "Акции",
        image: "images/promo-cleaning.jpg",
        content: "<p class='mb-4'>Только до конца мая закажите генеральную уборку и получите скидку 20%. Мы используем только профессиональные средства, безопасные для детей и животных.</p><p>Акция распространяется на квартиры любой площади. Чтобы воспользоваться предложением, просто оставьте заявку на нашем сайте.</p>"
    },
    {
        id: "promo-2",
        title: "Бесплатная выездная диагностика",
        date: "до 15 июня 2024",
        category: "Акции",
        image: "images/promo-repair.jpg",
        content: "<p class='mb-4'>Если ваша стиральная машина или холодильник вышли из строя, не спешите их выбрасывать. Наш мастер приедет, проведет диагностику и назовет точную причину поломки.</p><p>При заказе ремонта диагностика абсолютно бесплатна!</p>"
    }
];

const NEWS_DATA = [
    {
        id: "news-1",
        title: "Как рукоделие помогает развивать фантазию",
        date: "13 мая 2024",
        category: "Творчество",
        image: "images/article-handyman.jpg",
        content: "<p class='mb-4'>Рукоделие – это не просто хобби, это способ расслабиться и развить свой творческий потенциал. В этой статье мы расскажем, как регулярные занятия творчеством влияют на мозг и почему это так полезно.</p>"
    },
    {
        id: "news-2",
        title: "Здоровое питание без глютена",
        date: "11 мая 2024",
        category: "Советы покупателям",
        image: "images/article-cleaning.jpg",
        content: "<p class='mb-4'>Безглютеновая диета набирает популярность, но как правильно составить рацион? Разбираем основные ошибки и делимся рецептами вкусных и полезных блюд.</p>"
    }
];
