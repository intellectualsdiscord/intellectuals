// JS для перемикання меню
const burgerBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Закриваємо меню після кліку на пункт
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Клік поза меню — закрити бургер
document.addEventListener('click', (event) => {
    if (!burgerBtn.contains(event.target) && !navMenu.contains(event.target)) {
        burgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
    }
});


            // Theme Switching
            const themeSwitcher = document.getElementById('theme-switcher');
            const lightThemeStyle = document.getElementById('theme-style-light');
            const darkThemeStyle = document.getElementById('theme-style-dark');
            const themeIcon = themeSwitcher.querySelector('i');

            const applyTheme = (theme) => {
                if (theme === 'light') {
                    lightThemeStyle.disabled = false;
                    darkThemeStyle.disabled = true;
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                    themeSwitcher.classList.add('active');
                } else {
                    lightThemeStyle.disabled = true;
                    darkThemeStyle.disabled = false;
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                    themeSwitcher.classList.remove('active');
                }
                localStorage.setItem('theme', theme);
            };

            themeSwitcher.addEventListener('click', () => {
                const currentTheme = localStorage.getItem('theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                applyTheme(newTheme);
            });

            // Apply saved theme or default to dark
            applyTheme(localStorage.getItem('theme') || 'dark');

            // Language Switching
            const languageSwitcher = document.getElementById('language-switcher');
            const languageTextSpan = document.getElementById('language-text');
            const htmlElement = document.documentElement;
            const translatableElements = document.querySelectorAll('[data-lang-key]');

            const translations = {
                uk: {
                    // Navigation
                    nav_home: "Головна",
                    nav_schedule: "Розклад",
                    nav_about: "Про нас",
                    nav_games: "Ігри",
                    nav_contact: "Контакти",

                    // Hero Section
                    home_h1: "Ласкаво просимо на наш Discord Сервер!",
                    home_p: "Місце, де зустрічаються спілкування, веселощі та захопливі ігри.",
                    join_button: "Приєднатися до Discord",

                    // Schedule Section
                    schedule_h2: "Розклад Бесід та Ігор",
                    day_monday: "Понеділок",
                    day_tuesday: "Вівторок",
                    day_wednesday: "Середа",
                    day_thursday: "Четвер",
                    day_friday: "П'ятниця",
                    day_saturday: "Субота",
                    day_sunday: "Неділя",
                    channel_link_text: "Перейти",
                    mon_chat: "Загальний Чат",
                    mon_game: "Вечір ігор",
                    tue_qa: "Сесія Q&A з Модераторами",
                    tue_lol: "Командні ігри",
                    wed_music: "Музичний Вечір",
                    wed_chill: "Розслаблений Чат",
                    thu_admin: "Сесія \"Поговори з Адміном\"",
                    thu_stream: "Стрім-вечірка: Перегляд",
                    fri_movie: "Кіновечір",
                    fri_night_games: "Нічні Ігри",
                    sat_day_chat: "Денний Чат",
                    sat_tournament: "Збір на сервері Minecraft",
                    sun_calm_chat: "Спокійне Спілкування",
                    sun_week_discussion: "Обговорення Тижня",

                    // About Section
                    about_h2: "Про наш Сервер",
                    about_p: "Наш Discord сервер — це динамічна спільнота, створена для тих, хто шукає однодумців для спілкування, спільних ігор та просто гарного проведення часу. Ми пишаємося дружелюбною атмосферою, де кожен знайде своє місце.",
                    about_h3: "Що ми пропонуємо:",
                    about_offer_1: "<b>Активне спілкування:</b> Безліч текстових та голосових каналів для будь-яких тем.",
                    about_offer_2: "<b>Ігрові сесії:</b> Регулярні спільні ігри в різні популярні тайтли.",
                    about_offer_3: "<b>Розважальні події:</b> Кіновечори, музичні сесії, вікторини та багато іншого.",
                    about_offer_4: "<b>Підтримка та взаємодопомога:</b> Чуйна адміністрація та модератори завжди готові допомогти.",
                    about_offer_5: "<b>Свобода самовираження:</b> Поважаємо думки кожного учасника.",
                    about_rule_1: "Будьте ввічливими та поважними до інших учасників.",
                    about_rule_2: "Заборонені образи, цькування, розпалювання ненависті.",
                    about_rule_3: "Не надсилайте спам та рекламу без дозволу адміністрації.",
                    about_rule_4: "Дотримуйтесь вказівок модераторів.",
                    about_rule_5: "Насолоджуйтесь спілкуванням та іграми!",

                    // Games Section
                    games_h2: "Наші Ігрові Спільноти",
                    games_p: "Ми любимо грати! Приєднуйтесь до наших каналів за улюбленими іграми:",
                    game_valorant_title: "CS2",
                    game_valorant_desc: "Тактичний шутер 5 на 5.",
                    game_lol_title: "DOTA 2",
                    game_lol_desc: "Популярна MOBA гра.",
                    game_minecraft_title: "Minecraft",
                    game_minecraft_desc: "Будуйте та досліджуйте світи.",
                    game_amongus_title: "World of Tanks",
                    game_amongus_desc: "Збирай, воюй, перемагай.",

                    // Contact Section
                    contact_h2: "Зв'яжіться з нами",
                    contact_p1: "Якщо у вас є питання або пропозиції, ви можете зв'язатися з адміністрацією нашого Discord сервера безпосередньо.",
                    contact_discord: "Наш Discord:",
                    contact_email: "Або напишіть нам:",

                    // Footer
                    footer_text: "2025 Наш Discord Сервер. Усі права захищені."
                },
                en: {
                    // Navigation
                    nav_home: "Home",
                    nav_schedule: "Schedule",
                    nav_about: "About Us",
                    nav_games: "Games",
                    nav_contact: "Contact",

                    // Hero Section
                    home_h1: "Welcome to Our Discord Server!",
                    home_p: "A place where communication, fun, and exciting games meet.",
                    join_button: "Join Discord",

                    // Schedule Section
                    schedule_h2: "Schedule of Chats and Games",
                    day_monday: "Monday",
                    day_tuesday: "Tuesday",
                    day_wednesday: "Wednesday",
                    day_thursday: "Thursday",
                    day_friday: "Friday",
                    day_saturday: "Saturday",
                    day_sunday: "Sunday",
                    channel_link_text: "Go",
                    mon_chat: "General Chat",
                    mon_game: "Gaming Night",
                    tue_qa: "Moderator Q&A Session",
                    tue_lol: "Team Games",
                    wed_music: "Music Evening",
                    wed_chill: "Relaxed Chat",
                    thu_admin: "Chat with Admin Session",
                    thu_stream: "Stream Party: Watching",
                    fri_movie: "Movie Night",
                    fri_night_games: "Late Night Gaming",
                    sat_day_chat: "Day Chat",
                    sat_tournament: "Gathering on a Minecraft server",
                    sun_calm_chat: "Quiet Chat",
                    sun_week_discussion: "Weekly Discussion",

                    // About Section
                    about_h2: "About Our Server",
                    about_p: "Our Discord server is a dynamic community created for those looking for like-minded people to chat, play games together, and simply have a good time. We pride ourselves on a friendly atmosphere where everyone can find their place.",
                    about_h3: "What we offer:",
                    about_offer_1: "<b>Active communication:</b> Many text and voice channels for any topic.",
                    about_offer_2: "<b>Gaming sessions:</b> Regular joint games in various popular titles.",
                    about_offer_3: "<b>Entertainment events:</b> Movie nights, music sessions, quizzes, and much more.",
                    about_offer_4: "<b>Support and mutual aid:</b> Responsive administration and moderators are always ready to help.",
                    about_offer_5: "<b>Freedom of expression:</b> We respect the opinions of every participant.",
                    about_rule_1: "Be polite and respectful to other participants.",
                    about_rule_2: "No insults, bullying, or incitement to hatred.",
                    about_rule_3: "Do not send spam or advertising without admin permission.",
                    about_rule_4: "Follow moderator instructions.",
                    about_rule_5: "Enjoy chatting and gaming!",

                    // Games Section
                    games_h2: "Our Gaming Communities",
                    games_p: "We love to play! Join our channels for your favorite games:",
                    game_valorant_title: "CS2",
                    game_valorant_desc: "5v5 tactical shooter.",
                    game_lol_title: "DOTA 2",
                    game_lol_desc: "Popular MOBA game.",
                    game_minecraft_title: "Minecraft",
                    game_minecraft_desc: "Build and explore worlds.",
                    game_amongus_title: "World of Tanks",
                    game_amongus_desc: "Gather, battle, win.",

                    // Contact Section
                    contact_h2: "Contact Us",
                    contact_p1: "If you have any questions or suggestions, you can contact our Discord server administration directly.",
                    contact_discord: "Our Discord:",
                    contact_email: "Or email us:",

                    // Footer
                    footer_text: "2025 Our Discord Server. All rights reserved."
                }
            };

            let currentLanguage = localStorage.getItem('language') || 'uk';

            const updateLanguageButton = (lang) => {
                if (lang === 'uk') {
                    languageTextSpan.textContent = 'UK';
                    languageSwitcher.setAttribute('aria-label', 'Змінити мову на Англійську');
                } else {
                    languageTextSpan.textContent = 'EN';
                    languageSwitcher.setAttribute('aria-label', 'Змінити мову на Українську');
                }
            };

            const updateContent = (lang) => {
                htmlElement.lang = lang;

                translatableElements.forEach(element => {
                    const key = element.dataset.langKey;
                    if (translations[lang][key]) {
                        if (key.startsWith('about_offer_') || key === 'channel_link_text') {
                            element.innerHTML = translations[lang][key];
                        } else {
                            element.textContent = translations[lang][key];
                        }
                    }
                });

                const discordLinkElement = document.querySelector('#contact p:nth-of-type(2) a');
                const emailLinkElement = document.querySelector('#contact p:nth-of-type(3) a');

                if (discordLinkElement) {
                    document.querySelector('#contact p:nth-of-type(2)').innerHTML = `${translations[lang].contact_discord} <a href="${discordLinkElement.href}" target="_blank">${discordLinkElement.textContent}</a>`;
                }
                if (emailLinkElement) {
                    document.querySelector('#contact p:nth-of-type(3)').innerHTML = `${translations[lang].contact_email} <a href="${emailLinkElement.href}">${emailLinkElement.textContent}</a>`;
                }
            };

            languageSwitcher.addEventListener('click', () => {
                currentLanguage = currentLanguage === 'uk' ? 'en' : 'uk';
                updateContent(currentLanguage);
                updateLanguageButton(currentLanguage);
                localStorage.setItem('language', currentLanguage);
            });

            // Apply language on initial load
            updateContent(currentLanguage);
            updateLanguageButton(currentLanguage);

            // Section Scroll Animations
            const sections = document.querySelectorAll('section');

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const sectionObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                sectionObserver.observe(section);
            });

            // Trigger initial animations for sections already in view on load
            document.querySelectorAll('section').forEach(section => {
                if (section.getBoundingClientRect().top < window.innerHeight) {
                    section.classList.add('is-visible');
                }
            });
