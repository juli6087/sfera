// Единая база данных товаров и услуг для прототипа

const PRODUCTS_DATA = [
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
