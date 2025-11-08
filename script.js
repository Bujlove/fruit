// ==========================================
// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ И СОСТОЯНИЕ
// ==========================================

const state = {
    selectedBedSize: 10,
    selectedPlants: [],
    currentPlantType: 'vegetables',
    bedPrice: 4200
};

// Полная база данных всех 68 растений
const plantsData = {
    vegetables: [
        { id: 'tomatoes', name: 'Помидоры', days: 90, yield: '5кг', emoji: '🍅' },
        { id: 'cucumbers', name: 'Огурцы', days: 60, yield: '8кг', emoji: '🥒' },
        { id: 'pepper', name: 'Перец', days: 100, yield: '3кг', emoji: '🫑' },
        { id: 'carrots', name: 'Морковь', days: 80, yield: '4кг', emoji: '🥕' },
        { id: 'beet', name: 'Свёкла', days: 75, yield: '3кг', emoji: '🫐' },
        { id: 'radish', name: 'Редис', days: 25, yield: '2кг', emoji: '🔴' },
        { id: 'zucchini', name: 'Кабачки', days: 50, yield: '10кг', emoji: '🥒' },
        { id: 'eggplant', name: 'Баклажаны', days: 110, yield: '4кг', emoji: '🍆' },
        { id: 'cabbage', name: 'Капуста', days: 90, yield: '6кг', emoji: '🥬' },
        { id: 'pumpkin', name: 'Тыква', days: 100, yield: '15кг', emoji: '🎃' },
        { id: 'onion', name: 'Лук', days: 100, yield: '3кг', emoji: '🧅' },
        { id: 'garlic', name: 'Чеснок', days: 180, yield: '1.5кг', emoji: '🧄' }
    ],
    herbs: [
        { id: 'dill', name: 'Укроп', days: 40, yield: '1кг', emoji: '🌿' },
        { id: 'parsley', name: 'Петрушка', days: 70, yield: '1кг', emoji: '🌿' },
        { id: 'basil', name: 'Базилик', days: 60, yield: '0.8кг', emoji: '🌿' },
        { id: 'arugula', name: 'Руккола', days: 30, yield: '1кг', emoji: '🥬' },
        { id: 'lettuce', name: 'Салат', days: 45, yield: '2кг', emoji: '🥗' },
        { id: 'cilantro', name: 'Кинза', days: 40, yield: '0.8кг', emoji: '🌿' },
        { id: 'sorrel', name: 'Щавель', days: 60, yield: '1.5кг', emoji: '🌿' },
        { id: 'spinach', name: 'Шпинат', days: 40, yield: '1.2кг', emoji: '🥬' },
        { id: 'mint', name: 'Мята', days: 90, yield: '0.5кг', emoji: '🌿' },
        { id: 'rosemary', name: 'Розмарин', days: 120, yield: '0.3кг', emoji: '🌿' }
    ],
    berries: [
        { id: 'strawberry', name: 'Клубника', days: 90, yield: '2кг', emoji: '🍓' },
        { id: 'raspberry', name: 'Малина', days: 365, yield: '3кг', emoji: '🫐' },
        { id: 'currant', name: 'Смородина', days: 365, yield: '4кг', emoji: '🫐' },
        { id: 'gooseberry', name: 'Крыжовник', days: 365, yield: '3кг', emoji: '🫐' },
        { id: 'blackberry', name: 'Ежевика', days: 365, yield: '3кг', emoji: '🫐' },
        { id: 'blueberry', name: 'Голубика', days: 730, yield: '5кг', emoji: '🫐' },
        { id: 'honeysuckle', name: 'Жимолость', days: 730, yield: '2кг', emoji: '🫐' },
        { id: 'wild-strawberry', name: 'Земляника', days: 60, yield: '1кг', emoji: '🍓' }
    ],
    flowers: [
        { id: 'tulips', name: 'Тюльпаны', days: 120, yield: '20 шт', emoji: '🌷' },
        { id: 'peonies', name: 'Пионы', days: 730, yield: '15 шт', emoji: '🌺' },
        { id: 'roses', name: 'Розы', days: 365, yield: '30 шт', emoji: '🌹' },
        { id: 'lavender', name: 'Лаванда', days: 180, yield: '0.5кг', emoji: '🪻' },
        { id: 'asters', name: 'Астры', days: 90, yield: '25 шт', emoji: '🌸' },
        { id: 'dahlias', name: 'Георгины', days: 100, yield: '20 шт', emoji: '🌺' },
        { id: 'gladiolus', name: 'Гладиолусы', days: 90, yield: '20 шт', emoji: '🌸' },
        { id: 'daisies', name: 'Ромашки', days: 70, yield: '30 шт', emoji: '🌼' },
        { id: 'sunflowers', name: 'Подсолнухи', days: 80, yield: '10 шт', emoji: '🌻' },
        { id: 'calendula', name: 'Календула', days: 60, yield: '50 шт', emoji: '🌼' },
        { id: 'lilies', name: 'Лилии', days: 90, yield: '15 шт', emoji: '🌺' },
        { id: 'narcissus', name: 'Нарциссы', days: 100, yield: '25 шт', emoji: '🌼' },
        { id: 'hydrangea', name: 'Гортензия', days: 365, yield: '12 шт', emoji: '💐' },
        { id: 'irises', name: 'Ирисы', days: 120, yield: '20 шт', emoji: '🌸' },
        { id: 'chrysanthemums', name: 'Хризантемы', days: 100, yield: '30 шт', emoji: '🌼' },
        { id: 'marigolds', name: 'Бархатцы', days: 60, yield: '40 шт', emoji: '🌻' },
        { id: 'petunias', name: 'Петунии', days: 75, yield: '35 шт', emoji: '🌺' },
        { id: 'pansies', name: 'Анютины глазки', days: 80, yield: '30 шт', emoji: '🌸' }
    ],
    fruits: [
        { id: 'apples', name: 'Яблоки', days: 1095, yield: '15кг', emoji: '🍎' },
        { id: 'pears', name: 'Груши', days: 1095, yield: '12кг', emoji: '🍐' },
        { id: 'plums', name: 'Слива', days: 1095, yield: '10кг', emoji: '🟣' },
        { id: 'cherries', name: 'Вишня', days: 1095, yield: '8кг', emoji: '🍒' },
        { id: 'apricots', name: 'Абрикос', days: 1460, yield: '12кг', emoji: '🍑' },
        { id: 'grapes', name: 'Виноград', days: 730, yield: '6кг', emoji: '🍇' }
    ]
};

// Совместимость растений
const compatibility = {
    good: [
        ['tomatoes', 'basil'],
        ['cucumbers', 'dill'],
        ['carrots', 'onion']
    ],
    bad: [
        ['dill', 'lettuce'],
        ['onion', 'beans']
    ]
};

// ==========================================
// ИНИЦИАЛИЗАЦИЯ
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initHeader();
    initBurgerMenu();
    initScrollAnimations();
    initPlantsTabs();
    initConstructor();
    initSeasons();
    initStats();
    initFloatingButton();
});

// ==========================================
// ПРЕЛОАДЕР
// ==========================================

function initPreloader() {
    const preloader = document.getElementById('preloader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1500);
    });
}

// ==========================================
// НАВИГАЦИЯ
// ==========================================

function initHeader() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}


function initBurgerMenu() {
    const burgerBtn = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (burgerBtn) {
        burgerBtn.addEventListener('click', () => {
            const isExpanded = burgerBtn.getAttribute('aria-expanded') === 'true';
            burgerBtn.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });
        
        // Закрытие меню при клике на ссылку
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerBtn.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
            });
        });
    }
}

// ==========================================
// АНИМАЦИИ ПРИ СКРОЛЛЕ
// ==========================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Наблюдаем за карточками шагов
    const stepCards = document.querySelectorAll('.step-card[data-animate]');
    stepCards.forEach(card => observer.observe(card));
}

// ==========================================
// ТАБЫ РАСТЕНИЙ
// ==========================================

function initPlantsTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const plantItems = document.querySelectorAll('.plant-item');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Убираем активный класс со всех кнопок
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Получаем выбранную категорию
            const category = button.dataset.category;
            
            // Показываем/скрываем растения
            plantItems.forEach(item => {
                if (item.dataset.category === category) {
                    item.style.display = 'block';
                    // Добавляем анимацию появления
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.transition = 'all 0.3s ease-out';
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Добавляем тултипы при наведении
    plantItems.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            const name = item.dataset.name;
            const days = item.dataset.days;
            const difficulty = item.dataset.difficulty;
            const yieldAmount = item.dataset.yield;
            
            const difficultyText = ['Легко', 'Средне', 'Сложно'][difficulty - 1];
            
            item.setAttribute('title', 
                `${name}\nСозревание: ${days} дней\nСложность: ${difficultyText}\nУрожай: ~${yieldAmount}`
            );
        });
    });
}

// ==========================================
// КОНСТРУКТОР ГРЯДКИ
// ==========================================

function initConstructor() {
    initSizeCards();
    initSelectorTabs();
    initSelectorItems();
    initBedGrid();
    
    // Инициализируем кнопки действий
    const fillAllBtn = document.getElementById('fill-all-btn');
    const clearAllBtn = document.getElementById('clear-all-btn');
    
    if (fillAllBtn) {
        fillAllBtn.addEventListener('click', fillAllBed);
    }
    
    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', clearAllBed);
    }
}

function initSizeCards() {
    const sizeCards = document.querySelectorAll('.size-card');
    
    sizeCards.forEach(card => {
        card.addEventListener('click', () => {
            sizeCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            state.selectedBedSize = parseInt(card.dataset.size);
            state.bedPrice = parseInt(card.dataset.price);
            
            updateCalculator();
            updateBedGrid();
        });
    });
}

function initSelectorTabs() {
    const selectorTabs = document.querySelectorAll('.selector-tab');
    
    selectorTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            selectorTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            state.currentPlantType = tab.dataset.type;
            updateSelectorItems();
        });
    });
}

function updateSelectorItems() {
    const selectorItems = document.getElementById('selector-items');
    const plants = plantsData[state.currentPlantType];
    
    if (!plants) {
        console.error('No plants found for type:', state.currentPlantType);
        return;
    }
    
    selectorItems.innerHTML = '';
    
    plants.forEach(plant => {
        const button = document.createElement('button');
        button.className = 'selector-item';
        button.dataset.plant = plant.id;
        button.innerHTML = `${plant.emoji} ${plant.name}`;
        
        // Проверяем, есть ли это растение в выбранных
        if (state.selectedPlants.some(p => p.id === plant.id)) {
            button.classList.add('selected');
        }
        
        button.addEventListener('click', () => togglePlant(plant, button));
        
        selectorItems.appendChild(button);
    });
}

function initSelectorItems() {
    updateSelectorItems();
}

// Хранилище для текущего выбранного растения для "засадить всю грядку"
let lastSelectedPlant = null;

function togglePlant(plant, button) {
    // Сохраняем последнее выбранное растение
    lastSelectedPlant = plant;
    
    const index = state.selectedPlants.findIndex(p => p.id === plant.id);
    
    if (index > -1) {
        // Удаляем растение (убираем все экземпляры этого растения)
        state.selectedPlants = state.selectedPlants.filter(p => p.id !== plant.id);
        button.classList.remove('selected');
    } else {
        // Добавляем одно растение
        const maxPlants = state.selectedBedSize;
        if (state.selectedPlants.length < maxPlants) {
            state.selectedPlants.push(plant);
            button.classList.add('selected');
        } else {
            alert(`Грядка заполнена! Максимум ${maxPlants} растений на ${state.selectedBedSize}м²`);
        }
    }
    
    updateCalculator();
    updateBedGrid();
}

// Новая функция: засадить всю грядку одним растением
function fillAllBed() {
    if (!lastSelectedPlant) {
        alert('Сначала выберите растение, которым хотите засадить грядку');
        return;
    }
    
    const maxPlants = state.selectedBedSize;
    state.selectedPlants = [];
    
    for (let i = 0; i < maxPlants; i++) {
        state.selectedPlants.push({...lastSelectedPlant});
    }
    
    updateCalculator();
    updateBedGrid();
    updateSelectorItems(); // Обновляем кнопки
}

// Новая функция: очистить грядку
function clearAllBed() {
    if (state.selectedPlants.length === 0) {
        return;
    }
    
    if (confirm('Очистить всю грядку?')) {
        state.selectedPlants = [];
        updateCalculator();
        updateBedGrid();
        updateSelectorItems(); // Обновляем кнопки
    }
}

function initBedGrid() {
    updateBedGrid();
}

function updateBedGrid() {
    const bedGrid = document.getElementById('bed-grid');
    const cellCount = state.selectedBedSize;
    
    bedGrid.innerHTML = '';
    
    // Настраиваем сетку в зависимости от размера
    if (state.selectedBedSize === 4) {
        bedGrid.style.gridTemplateColumns = `repeat(2, 1fr)`;
    } else if (state.selectedBedSize === 10) {
        bedGrid.style.gridTemplateColumns = `repeat(5, 1fr)`;
    } else if (state.selectedBedSize === 20) {
        bedGrid.style.gridTemplateColumns = `repeat(5, 1fr)`;
    }
    
    for (let i = 0; i < cellCount; i++) {
        const cell = document.createElement('div');
        cell.className = 'bed-cell';
        
        if (i < state.selectedPlants.length) {
            cell.classList.add('planted');
            cell.textContent = state.selectedPlants[i].emoji;
            cell.title = state.selectedPlants[i].name;
            
            // Добавляем возможность удалить растение кликом по ячейке
            cell.addEventListener('click', () => {
                state.selectedPlants.splice(i, 1);
                updateCalculator();
                updateBedGrid();
                updateSelectorItems();
            });
            cell.style.cursor = 'pointer';
        }
        
        bedGrid.appendChild(cell);
    }
}

function updateCalculator() {
    // Обновляем стоимость
    document.getElementById('calc-price').textContent = `${state.bedPrice.toLocaleString('ru-RU')}₽/мес`;
    
    // Рассчитываем средний срок урожая
    if (state.selectedPlants.length > 0) {
        const avgDays = Math.round(
            state.selectedPlants.reduce((sum, p) => sum + p.days, 0) / state.selectedPlants.length
        );
        document.getElementById('calc-time').textContent = `${avgDays} дней`;
        
        // Рассчитываем примерный урожай
        const totalYield = state.selectedPlants.reduce((sum, p) => {
            const match = p.yield.match(/(\d+)/);
            return sum + (match ? parseInt(match[1]) : 0);
        }, 0);
        document.getElementById('calc-yield').textContent = `~${totalYield} кг`;
    } else {
        document.getElementById('calc-time').textContent = '—';
        document.getElementById('calc-yield').textContent = '—';
    }
    
    // Проверяем совместимость
    updateCompatibilityTips();
}

function updateCompatibilityTips() {
    const tipsContainer = document.getElementById('calc-tips');
    tipsContainer.innerHTML = '';
    
    if (state.selectedPlants.length < 2) {
        return;
    }
    
    // Проверяем хорошие комбинации
    let foundGoodCombo = false;
    compatibility.good.forEach(([plant1, plant2]) => {
        const hasPlant1 = state.selectedPlants.some(p => p.id === plant1);
        const hasPlant2 = state.selectedPlants.some(p => p.id === plant2);
        
        if (hasPlant1 && hasPlant2) {
            foundGoodCombo = true;
            const tip = document.createElement('div');
            tip.className = 'tip tip-success';
            tip.innerHTML = '<span class="tip-icon">✓</span><span>Эти растения хорошо растут вместе</span>';
            tipsContainer.appendChild(tip);
        }
    });
    
    // Проверяем плохие комбинации
    compatibility.bad.forEach(([plant1, plant2]) => {
        const hasPlant1 = state.selectedPlants.some(p => p.id === plant1);
        const hasPlant2 = state.selectedPlants.some(p => p.id === plant2);
        
        if (hasPlant1 && hasPlant2) {
            const tip = document.createElement('div');
            tip.className = 'tip tip-warning';
            tip.innerHTML = '<span class="tip-icon">⚠️</span><span>Эти растения могут мешать друг другу</span>';
            tipsContainer.appendChild(tip);
        }
    });
    
    if (!foundGoodCombo && tipsContainer.children.length === 0) {
        const tip = document.createElement('div');
        tip.className = 'tip tip-success';
        tip.innerHTML = '<span class="tip-icon">✓</span><span>Хорошая комбинация для начинающих</span>';
        tipsContainer.appendChild(tip);
    }
}

// ==========================================
// СЕЗОНЫ
// ==========================================

function initSeasons() {
    const seasonCards = document.querySelectorAll('.season-card');
    const seasonContents = document.querySelectorAll('.season-content');
    
    seasonCards.forEach(card => {
        card.addEventListener('click', () => {
            const season = card.dataset.season;
            
            // Убираем активный класс со всех карточек
            seasonCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            // Показываем соответствующий контент
            seasonContents.forEach(content => {
                if (content.dataset.seasonContent === season) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
            
            // Меняем фон секции в зависимости от сезона
            const section = document.querySelector('.seasons-section');
            const colors = {
                spring: 'linear-gradient(to bottom, #E8F5E9, #F1F8E9)',
                summer: 'linear-gradient(to bottom, #FFF9C4, #FFECB3)',
                fall: 'linear-gradient(to bottom, #FFE0B2, #FFCCBC)',
                winter: 'linear-gradient(to bottom, #E3F2FD, #F5F5F5)'
            };
            section.style.background = colors[season] || '';
        });
    });
}

// ==========================================
// СЧЕТЧИКИ В СЕКЦИИ ДОВЕРИЯ
// ==========================================

function initStats() {
    const statItems = document.querySelectorAll('.stat-item[data-animate]');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    statItems.forEach(item => observer.observe(item));
}

function animateCounter(statItem) {
    const numberElement = statItem.querySelector('.stat-number');
    const target = parseInt(numberElement.dataset.target);
    const duration = 2000; // 2 секунды
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            numberElement.textContent = target;
            clearInterval(timer);
        } else {
            numberElement.textContent = Math.floor(current);
        }
    }, duration / steps);
}

// ==========================================
// ПЛАВАЮЩАЯ КНОПКА
// ==========================================

function initFloatingButton() {
    const floatingBtn = document.querySelector('.floating-button');
    
    if (floatingBtn) {
        floatingBtn.addEventListener('click', () => {
            alert('Чат с агрономом скоро будет доступен! 🌱');
        });
    }
}

// ==========================================
// ОБРАБОТЧИКИ CTA КНОПОК
// ==========================================

// Обработчики для всех CTA кнопок
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('cta-button') || 
        e.target.classList.contains('pricing-button') ||
        e.target.classList.contains('combo-button') ||
        e.target.classList.contains('option-button')) {
        
        e.preventDefault();
        
        // Анимация клика
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
        
        // Прокрутка к конструктору или показ сообщения
        if (e.target.textContent.includes('Создать') || 
            e.target.textContent.includes('Начать') ||
            e.target.textContent.includes('Выбрать')) {
            
            const constructor = document.getElementById('constructor');
            if (constructor) {
                constructor.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else if (e.target.textContent.includes('Посадить')) {
            alert('Спасибо за интерес! Эта функция будет доступна после запуска сервиса. 🌱');
        } else {
            alert('Спасибо! Скоро мы с вами свяжемся. 📞');
        }
    }
});

// ==========================================
// ПЛАВНАЯ ПРОКРУТКА ДЛЯ ЯКОРНЫХ ССЫЛОК
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Игнорируем пустые якоря
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// ДОПОЛНИТЕЛЬНЫЕ АНИМАЦИИ
// ==========================================

// Анимация при прокрутке для карточек
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            cardObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Применяем наблюдатель после загрузки
window.addEventListener('load', () => {
    const animatedElements = document.querySelectorAll(
        '.pricing-card, .combo-card, .testimonial-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        cardObserver.observe(el);
    });
});

// ==========================================
// УТИЛИТЫ
// ==========================================

// Debounce функция для оптимизации
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Применяем debounce к скроллу
const debouncedScroll = debounce(() => {
    // Дополнительная логика при скролле
}, 100);

window.addEventListener('scroll', debouncedScroll);

// ==========================================
// ACCESSIBILITY
// ==========================================

// Управление клавиатурой для табов
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const activeTab = document.querySelector('.tab-button:focus, .selector-tab:focus');
        if (activeTab) {
            const tabs = Array.from(activeTab.parentElement.children);
            const currentIndex = tabs.indexOf(activeTab);
            let nextIndex;
            
            if (e.key === 'ArrowLeft') {
                nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
            } else {
                nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
            }
            
            tabs[nextIndex].focus();
            tabs[nextIndex].click();
        }
    }
});

// ==========================================
// ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК DASHBOARD
// ==========================================

function initDashboardTabs() {
    const tabs = document.querySelectorAll('.dashboard-tab');
    const contents = document.querySelectorAll('.dashboard-content');
    
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Убираем активные классы
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            // Добавляем активный класс
            tab.classList.add('active');
            contents[index].classList.add('active');
        });
    });
}

// Инициализируем вкладки dashboard
initDashboardTabs();

// ==========================================
// УЛУЧШЕННАЯ ВИЗУАЛИЗАЦИЯ ГРЯДОК
// ==========================================

function updateBedGridSize() {
    const bedGrid = document.getElementById('bed-grid');
    if (!bedGrid) return;
    
    // Удаляем предыдущие классы размеров
    bedGrid.classList.remove('size-small', 'size-medium', 'size-large');
    
    // Добавляем класс в зависимости от размера
    if (state.selectedBedSize === 4) {
        bedGrid.classList.add('size-small');
    } else if (state.selectedBedSize === 10) {
        bedGrid.classList.add('size-medium');
    } else if (state.selectedBedSize === 20) {
        bedGrid.classList.add('size-large');
    }
}

// Обновляем оригинальную функцию initSizeCards
const originalInitSizeCards = initSizeCards;
initSizeCards = function() {
    const sizeCards = document.querySelectorAll('.size-card');
    
    sizeCards.forEach(card => {
        card.addEventListener('click', () => {
            sizeCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            state.selectedBedSize = parseInt(card.dataset.size);
            state.bedPrice = parseInt(card.dataset.price);
            
            updateCalculator();
            updateBedGrid();
            updateBedGridSize(); // Новая функция!
        });
    });
};

// Вызываем обновленную функцию
if (typeof initSizeCards === 'function') {
    initSizeCards();
}

// ==========================================
// ИНТЕРАКТИВНОСТЬ СОСЕДЕЙ
// ==========================================

function initNeighbors() {
    const followButtons = document.querySelectorAll('.neighbor-follow');
    
    followButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === 'Подписаться') {
                button.textContent = 'Вы подписаны ✓';
                button.style.background = 'var(--color-light-green)';
                
                // Добавляем анимацию
                button.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    button.style.transform = 'scale(1)';
                }, 300);
            } else {
                button.textContent = 'Подписаться';
                button.style.background = 'var(--color-primary)';
            }
        });
    });
}

// Инициализируем соседей после загрузки
window.addEventListener('load', () => {
    initNeighbors();
});

// ==========================================
// ДОПОЛНИТЕЛЬНЫЕ АНИМАЦИИ
// ==========================================

// Анимация появления карточек соседей
const neighborObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            neighborObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

window.addEventListener('load', () => {
    const neighborCards = document.querySelectorAll('.neighbor-card');
    neighborCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        neighborObserver.observe(card);
    });
});

console.log('🌱 Сад: Лендинг загружен успешно!');
console.log('✨ Новые функции: вкладки dashboard, сады соседей, улучшенная визуализация');

