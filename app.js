'use strict';

// Укажите путь к ролику после добавления файла, например './assets/showreel.mp4'.
const SHOWREEL_VIDEO = '';

// Set a SHA-256 password hash here; this is only a casual-visitor gate on GitHub Pages.
const ACCESS_PASSWORD_HASH = '6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b';

// Прозрачные иллюстрации Вари подключаются здесь, когда будут готовы файлы.
const ILLUSTRATIONS = {
  hero: './assets/illustrations/hero-placeholder.png',
  about: '',
  contact: './assets/illustrations/contact-placeholder.png',
  projects: {
    // '01': './assets/illustrations/project-01.webp'
  }
};

// Папки и названия роликов предоставлены владельцем портфолио. Личные роли
// указываются только там, где они подтверждены.
const projectGroups = [
  {
    id: 'festival', folder: 'FESTIVAL_&_VIP',
    label: { ru: 'СПЕЦПРОЕКТЫ', en: 'SPECIAL PROJECTS' },
    projects: [
      { file: 'Здесь_будет_свет_Tele2_Родная_Речь.mp4', title: { ru: 'Здесь будет свет', en: 'There Will Be Light' }, client: { ru: 'Tele2 Kazakhstan', en: 'Tele2 Kazakhstan' }, year: '2026', format: { ru: 'Рекламный ролик', en: 'Advertising film' }, role: { ru: 'Продюсер постпродакшна', en: 'Post-production Producer' }, scope: { ru: 'Организация постпродакшна и координация команды из семи специалистов.', en: 'Managed the post-production workflow and coordinated a team of seven specialists.' }, collaborators: { ru: 'Совместно с CCO «Родной речи» Ильёй Прямиловым и исполнительными креативными директорами Михаилом Кудашкиным и Александром Мерзляковым.', en: 'In collaboration with Rodnaya Rech CCO Ilya Pryamilov and executive creative directors Mikhail Kudashkin and Alexander Merzlyakov.' }, award: 'CANNES LIONS / SHORTLIST', recognition: { ru: 'Cannes Lions 2026 — шорт-лист, PR / PR: Sectors; Red Apple 2026 — Гран-при в категории «Медиа»', en: 'Cannes Lions 2026 — shortlist, PR / PR: Sectors; Red Apple 2026 — Grand Prix in Media' }, sourceUrl: 'https://www.lovethework.com/en/work/entries/highlighted-by-data-787224', url: 'https://www.youtube.com/watch?v=NRqtUq1BRa4', embedUrl: 'https://www.youtube.com/embed/NRqtUq1BRa4?si=2cvAfECe3oCpYfTT&autoplay=1&mute=1&playsinline=1&rel=0', thumbnailUrl: 'https://img.youtube.com/vi/NRqtUq1BRa4/maxresdefault.jpg', thumbnailFallbackUrl: 'https://img.youtube.com/vi/NRqtUq1BRa4/hqdefault.jpg', description: { ru: 'Данные мобильной сети помогли определить городские места, которым не хватает освещения.', en: 'Mobile network data helped identify city areas in need of better lighting.' } },
      { file: 'vtb.mp4', title: { ru: 'ВТБ / Манифест', en: 'VTB / Manifesto' }, client: { ru: 'ВТБ', en: 'VTB' }, year: '2025', format: { ru: 'Рекламная компания', en: 'Campaign' }, role: { ru: 'Продюсер постпродакшна', en: 'Post-production Producer' }, scope: { ru: 'Координация постпродакшена имиджевого ролика для рекламной кампании ВТБ. Организация работы 2D-специалистов, монтажного и sound design-направлений. Адаптация производственного процесса меняющимся брифу, исходникам и тд.', en: 'Coordinated post-production for a VTB brand film, organizing the 2D, editing, and sound design teams. Adapted the production workflow to evolving briefs, source materials, and other changing requirements.' }, collaborators: { ru: 'Совместно с CCO «Родной речи» Ильёй Прямиловым.', en: 'In collaboration with Rodnaya Rech CCO Ilya Pryamilov.' }, description: { ru: 'Ролик создан для рекламной компании, был презентован лично президенту банка и получил максимально положительный отзыв.', en: 'Created for a VTB advertising campaign, the film was presented personally to the bank’s president and received very positive feedback.' } },
      { file: 'psb.mp4', title: { ru: 'ПСБ', en: 'PSB' }, client: { ru: 'ПСБ Банк', en: 'PSB Bank' }, year: '2026', format: { ru: 'Фестивальный рекламный кейс', en: 'Advertising case film for festival submissions' }, role: { ru: 'Продюсер постпродакшна со стороны агентства', en: 'Agency-side Post-production Producer' }, scope: { ru: 'Контроль внесения правок от креатива и Клиента, проверка финальных материалов на соответствие согласованным комментариям, ведение рабочей коммуникации с продакшеном Papation, контроль вносимых правок на соответствие брифу.', en: 'Oversaw revisions requested by the creative team and the client, checked final materials against the approved feedback, managed day-to-day communication with Papation production, and ensured revisions stayed aligned with the brief.' } },
    ]
  },
  {
    id: 'federal', folder: 'DIGITAL_TV_POST',
    label: { ru: 'ТВ И DIGITAL', en: 'TV & DIGITAL' },
    projects: [
      { file: 'maggi.mp4', title: { ru: 'Maggi / Papyrus', en: 'Maggi / Papyrus' }, client: { ru: 'Бренд «Магги»', en: 'Maggi' }, role: { ru: 'Project Manager', en: 'Project Manager' }, scope: { ru: 'Ведение коммуникации с бренд-менеджером Клиента, аккаунт-менеджером и креативной командой. Контроль правок продюсера на соответствие брифу, согласованному Клиентом. Контроль сроков производства и тайм-менеджмент.', en: 'Managed communication with the client’s brand manager, account manager and creative team. Ensured the producer’s revisions aligned with the client-approved brief, and managed production schedules and timelines.' } },
      { file: 'vit.mp4', title: { ru: ' ВИТ "Устойчивый успех"', en: 'VIT / Sustainable Success' }, client: { ru: 'Вкусно и Точка', en: 'Vkusno & Tochka' }, brand: { ru: 'ВИТ', en: 'VIT' }, role: { ru: 'Продюсер постпродакшна', en: 'Post-production Producer' }, scope: { ru: 'координировала работу монтажера и озвучку кейса с звуковой студией ДТВ продакшен ', en: 'Coordinated the editor’s work and the case film’s voice-over with DTV Production sound studio.' }, format: { ru: 'Фестивальный рекламный кейс для Red Apple', en: 'Advertising case film for the Red Apple festival' }},
      { file: 'nescafe.mp4', title: { ru: 'Nescafé 3in1', en: 'Nescafé 3in1' }, client: { ru: 'Nestlé', en: 'Nestlé' }, brand: { ru: 'Nescafé', en: 'Nescafé' }, role: { ru: 'Продюсер постпродакшна', en: 'Post-production Producer' }, scope: { ru: 'Ведение коммуникации с бренд-менеджером Клиента, аккаунт-менеджером и креативной командой. Контроль правок продюсера на соответствие брифу, согласованному Клиентом и креативной командой. Контроль сроков производства и тайм-менеджмент.', en: 'Managed communication with the client’s brand manager, account manager and creative team. Ensured the producer’s revisions aligned with the brief approved by the client and creative team, and managed production schedules and timelines.' } },
      { file: 'nan.mp4', title: { ru: 'NAN 3 Optipro', en: 'NAN 3 Optipro' }, client: { ru: 'Nestlé', en: 'Nestlé' }, brand: { ru: 'NAN', en: 'NAN' }, role: { ru: 'Продюсер постпродакшна', en: 'Post-production Producer' }, scope: { ru: 'Ведение постпродакшна, брифинг специалистов и постановка задач. Контроль правок на соответствие согласованному брифу.', en: 'Managed post-production, briefed specialists and assigned tasks. Ensured revisions aligned with the approved brief.' } },
      { file: 'nestlé.mp4', title: { ru: 'Nestlé / Хрутка', en: 'Nestlé / Khrutka' }, role: { ru: 'Project Manager', en: 'Project Manager' }, client: { ru: 'Nestlé', en: 'Nestlé' }, brand: { ru: 'Хрутка', en: 'Khrutka' }, scope: { ru: 'Ведение коммуникации с бренд-менеджером, аккаунт-менеджером и креативом. Брифинг дизайнера на подготовку раскадровки по ТТ. Контроль правок продюсера на соответствие брифу, согласованному Клиентом и креативом. Контроль сроков производства и тайм-менеджмент.', en: 'Managed communication with the brand manager, account manager and creative team. Briefed the designer to prepare a storyboard based on the technical requirements. Ensured the producer’s revisions aligned with the brief approved by the client and creative team, and managed production schedules and timelines.' } },
      { file: 'komilfo.mp4', title: { ru: 'Комильфо', en: 'Komilfo' }, client: { ru: 'Nestlé', en: 'Nestlé' }, brand: { ru: 'Комильфо', en: 'Komilfo' }, role: { ru: 'Project Manager', en: 'Project Manager' }, scope: { ru: 'Ведение коммуникации с бренд-менеджером, аккаунт-менеджером и креативом. Контроль правок продюсера на соответствие брифу, согласованному Клиентом и креативом. Контроль сроков производства и тайм-менеджмент. ', en: 'Managed communication with the brand manager, account manager and creative team. Ensured the producer’s revisions aligned with the brief approved by the client and creative team, and managed production schedules and timelines.' } },
    ]
  },
  {
    id: 'assistant', folder: 'PROD ASSISTANT',
    label: { ru: 'КАМПАНИИ И СЕРИИ', en: 'CAMPAIGNS & SERIES' },
    projects: [
      { file: 'ViT_RailwayStation.mp4', title: { ru: 'Вкусно и Точка / Вокзал', en: 'ViT / Railway Station' }, client: { ru: 'Вкусно и Точка', en: 'Vkusno & Tochka' }, format: { ru: 'Рекламный ролик', en: 'Advertising film' }, role: { ru: 'Ассистент продюсера', en: "Producer's Assistant" } },
      { file: 'ViT_Mama.mp4', title: { ru: 'Вкусно и Точка / Мама', en: 'VIT / Mom' }, client: { ru: 'Вкусно и Точка', en: 'Vkusno & Tochka' }, format: { ru: 'Благотворительный рекламный ролик', en: 'Charity advertising film' }, role: { ru: 'Ассистент по актёрам', en: 'Talent Assistant' } },
      { file: 'ViT_Papa.mp4', title: { ru: 'Вкусно и Точка / Папа', en: 'VIT / Dad' }, client: { ru: 'Вкусно и Точка', en: 'Vkusno & Tochka' }, format: { ru: 'Благотворительный рекламный ролик', en: 'Charity advertising film' }, role: { ru: 'Ассистент по актёрам', en: 'Talent Assistant' } },
      { file: 'Yubileynoye_Train.mp4', title: { ru: 'Юбилейное / В поезде', en: 'Yubileynoye / On the Train' }, client: { ru: 'Юбилейное', en: 'Yubileynoye' }, format: { ru: 'Рекламный ролик «Все мы из одного теста»', en: 'Advertising film: “We’re all cut from the same dough”' }, role: { ru: 'Ассистент продюсера', en: "Producer's Assistant" } },
      { file: 'Yubileynoye_Kitchen.mp4', title: { ru: 'Юбилейное / На кухне', en: 'Yubileynoye / In the Kitchen' }, client: { ru: 'Юбилейное', en: 'Yubileynoye' }, format: { ru: 'Рекламный ролик «Все мы из одного теста»', en: 'Advertising film: “We’re all cut from the same dough”' }, role: { ru: 'Ассистент продюсера', en: "Producer's Assistant" } },
      { file: 'Yubileynoye_Crossing.mp4', title: { ru: 'Юбилейное / На переезде', en: 'Yubileynoye / At the Crossing' }, client: { ru: 'Юбилейное', en: 'Yubileynoye' }, format: { ru: 'Рекламный ролик «Все мы из одного теста»', en: 'Advertising film: “We’re all cut from the same dough”' }, role: { ru: 'Ассистент продюсера', en: "Producer's Assistant" } }
    ]
  }
];

let projectNumber = 0;
const projects = projectGroups.flatMap((group) => group.projects.map((project) => ({
  ...project,
  id: String(++projectNumber).padStart(2, '0'),
  category: group.id,
  categoryName: group.label,
  video: `./assets/video/${encodeURIComponent(group.folder)}/${encodeURIComponent(project.file)}`
})));

const translations = {
  ru: {
    pageTitle: 'Varya Lavrova — продюсер постпродакшна', pageDescription: 'Варя Лаврова — продюсер постпродакшна в рекламном видеопроизводстве. Проекты, опыт и контакты.',
    homeAria: 'Varya Lavrova — на главную', producer: 'ПРОДЮСЕР ПОСТПРОДАКШНА', mainNavAria: 'Основная навигация',
    accessKicker: 'PRIVATE PORTFOLIO / 2026', accessTitle: 'ДОСТУП ПО ПАРОЛЮ', accessPasswordLabel: 'Пароль доступа', accessSubmit: 'ВОЙТИ', accessNotConfigured: 'Доступ ещё не настроен.', accessIncorrect: 'Неверный пароль.', accessHttpsError: 'Не удалось проверить пароль. Откройте сайт через HTTPS.',
    navProjects: 'ПРОЕКТЫ', navAbout: 'ОБО МНЕ', navContacts: 'КОНТАКТЫ', menuOpen: 'МЕНЮ', menuClose: 'ЗАКРЫТЬ', switchLanguage: 'Switch to English',
    heroTopline: 'БЮДЖЕТ / КОМАНДА / ФИНАЛ', heroEyebrow: 'ПРОДЮСЕР ПОСТПРОДАКШНА', heroDescription: 'Организую постпродакшн рекламных роликов: бюджет, сроки, команда и финальная сдача.', showreelLinkAria: 'К шоурилу', scrollExplore: 'ЛИСТАЙТЕ ДАЛЬШЕ',
    reelKicker: '01 / SHOWREEL', reelTagline: 'РЕКЛАМНЫЕ ПРОЕКТЫ С МОИМ УЧАСТИЕМ', reelAria: 'Шоурил', reelSoon: 'ПРОЕКТЫ В КАДРЕ', reelPlaceholder: 'Подборка работ, в производстве которых я участвовала', reelPlayAria: 'Воспроизвести шоурил', reelCaption: 'РЕКЛАМА / ПОСТПРОДАКШН', soundOn: 'ЗВУК ВКЛЮЧИТЬ',
    aboutKicker: '02 / ПОДХОД', aboutTagline: 'ОТ БРИФА ДО ФИНАЛЬНОГО МАСТЕРА', aboutSide: 'ПОСТПРОДАКШН-ПРОДЮСЕР\n/ УПРАВЛЕНИЕ ПРОЕКТАМИ\n/ ОКОЛО 70 ПРОЕКТОВ', aboutTitleA: 'ПОСТПРОДАКШН —', aboutTitleB: 'УПРАВЛЯЕМЫЙ ПРОЦЕСС.', aboutCopyTitle: 'Продюсирование постпродакшена рекламных проектов', aboutCopy: 'Управление производственным циклом, бюджетами, графиками, внешними исполнителями и коммуникацией между клиентом, агентством и производственными командами.', aboutStatsTitle: '60+ COMMERCIAL PROJECTS', aboutStatsCopy: 'Более 60 рекламных проектов за 1,5 года работы в RE:Studio. Опыт ведения нескольких производственных процессов и проектов, до 13 проектов параллельно.', ticker: 'БЮДЖЕТ ✳ ГРАФИК ✳ КОМАНДА ✳ ФИНАЛ ✳ БЮДЖЕТ ✳ ГРАФИК ✳ КОМАНДА ✳ ФИНАЛ ✳',
    workKicker: '03 / ПРОЕКТЫ', workTagline: 'РЕКЛАМНОЕ ВИДЕОПРОИЗВОДСТВО', workTitle: 'ПРОЕКТЫ', workCopy: 'Три проекта с моим участием получили награды фестиваля «Белый квадрат».', filterAria: 'Фильтр проектов', filterAll: 'ВСЕ', filterFestival: 'СПЕЦПРОЕКТЫ', filterFederal: 'ТВ И DIGITAL', filterAssistant: 'КАМПАНИИ И СЕРИИ', openProject: 'Открыть проект',
    servicesKicker: '04 / ЧТО Я ДЕЛАЮ', servicesTagline: 'БЮДЖЕТ, КОМАНДА, СДАЧА', servicesTitleA: 'ОТ БРИФА', servicesTitleB: 'ДО МАСТЕРА.', serviceCreative: 'ПРОДЮСИРОВАНИЕ ПОСТПРОДАКШНА', serviceCreativeCopy: 'Расчёт бюджета, график и организация этапов работы', serviceProduction: 'КООРДИНАЦИЯ КОМАНДЫ', serviceProductionCopy: 'Подбор специалистов, постановка задач и контроль сроков', servicePost: 'УПРАВЛЕНИЕ ПРОЕКТОМ', servicePostCopy: 'Клиент, согласования, контроль качества и финальная сдача',
    contactKicker: '05 / НА СВЯЗИ', contactTagline: 'ДЛЯ АГЕНТСТВ, СТУДИЙ И РАБОТОДАТЕЛЕЙ', contactLeadA: 'ОТКРЫТА К ПРОЕКТАМ', contactLeadB: 'И ПРЕДЛОЖЕНИЯМ О РАБОТЕ.', contactTitleA: 'ДАВАЙТЕ', contactTitleB: 'ОБСУДИМ', contactTitleC: 'ПРОЕКТ', emailNote: 'ПРОЕКТЫ, СОТРУДНИЧЕСТВО И ПОСТОЯННАЯ РАБОТА', backToTop: 'НАВЕРХ', footerNote: 'СДЕЛАНО С ВНИМАНИЕМ К ДЕТАЛЯМ', closeAria: 'Закрыть', closeButton: 'ЗАКРЫТЬ ✕', watchVideo: 'СМОТРЕТЬ РОЛИК', cannesCase: 'КАРТОЧКА CANNES LIONS', videoError: 'Видео не воспроизводится в этом браузере.', downloadVideo: 'СКАЧАТЬ ВИДЕО', clientLabel: 'КЛИЕНТ', brandLabel: 'БРЕНД', yearLabel: 'ГОД', formatLabel: 'ФОРМАТ', roleLabel: 'РОЛЬ', scopeLabel: 'ЗОНА ОТВЕТСТВЕННОСТИ', collaboratorsLabel: 'СОВМЕСТНАЯ РАБОТА', recognitionLabel: 'ПРИЗНАНИЕ', videoPlay: 'Воспроизвести', videoPause: 'Пауза', videoMute: 'Выключить звук', videoUnmute: 'Включить звук', videoSeek: 'Перемотка видео', videoFullscreen: 'Полный экран', videoExitFullscreen: 'Выйти из полноэкранного режима', videoControlsAria: 'Управление видео', videoPlayerError: 'Не удалось загрузить видеоплеер.'
  },
  en: {
    pageTitle: 'Varya Lavrova — Post-production Producer', pageDescription: 'Varya Lavrova is a post-production producer working in commercial film. Selected work, experience and contact.',
    homeAria: 'Varya Lavrova — back to top', producer: 'POST-PRODUCTION PRODUCER', mainNavAria: 'Main navigation',
    accessKicker: 'PRIVATE PORTFOLIO / 2026', accessTitle: 'PASSWORD REQUIRED', accessPasswordLabel: 'Access password', accessSubmit: 'ENTER', accessNotConfigured: 'Access has not been configured yet.', accessIncorrect: 'Incorrect password.', accessHttpsError: 'Could not verify the password. Open the site over HTTPS.',
    navProjects: 'PROJECTS', navAbout: 'ABOUT', navContacts: 'CONTACT', menuOpen: 'MENU', menuClose: 'CLOSE', switchLanguage: 'Переключить на русский',
    heroTopline: 'BUDGET / TEAM / DELIVERY', heroEyebrow: 'POST-PRODUCTION PRODUCER', heroDescription: 'I manage post-production for commercial films: budgets, schedules, teams and final delivery.', showreelLinkAria: 'Go to showreel', scrollExplore: 'SCROLL TO EXPLORE',
    reelKicker: '01 / SHOWREEL', reelTagline: 'COMMERCIAL WORK I CONTRIBUTED TO', reelAria: 'Showreel', reelSoon: 'WORK ON SCREEN', reelPlaceholder: 'A selection of productions I worked on', reelPlayAria: 'Play showreel', reelCaption: 'COMMERCIAL / POST-PRODUCTION', soundOn: 'TURN SOUND ON',
    aboutKicker: '02 / APPROACH', aboutTagline: 'FROM BRIEF TO FINAL MASTER', aboutSide: 'POST-PRODUCTION PRODUCER\n/ PROJECT MANAGEMENT\n/ AROUND 70 PROJECTS', aboutTitleA: 'POST-PRODUCTION —', aboutTitleB: 'A MANAGED PROCESS.', aboutCopyTitle: 'Post-production for commercial projects', aboutCopy: 'Managing the production workflow, budgets and schedules, external partners, and communication between clients, agencies and production teams.', aboutStatsTitle: '60+ COMMERCIAL PROJECTS', aboutStatsCopy: 'Over 60 commercial projects in 18 months at RE:Studio. Experienced in managing multiple production workflows and projects, with up to 13 projects running in parallel.', ticker: 'BUDGET ✳ SCHEDULE ✳ TEAM ✳ DELIVERY ✳ BUDGET ✳ SCHEDULE ✳ TEAM ✳ DELIVERY ✳',
    workKicker: '03 / PROJECTS', workTagline: 'COMMERCIAL FILM PRODUCTION', workTitle: 'PROJECTS', workCopy: 'Three projects I worked on have received White Square awards.', filterAria: 'Filter projects', filterAll: 'ALL', filterFestival: 'SPECIAL PROJECTS', filterFederal: 'TV & DIGITAL', filterAssistant: 'CAMPAIGNS & SERIES', openProject: 'Open project',
    servicesKicker: '04 / WHAT I DO', servicesTagline: 'BUDGETS, TEAMS, DELIVERY', servicesTitleA: 'FROM BRIEF', servicesTitleB: 'TO MASTER.', serviceCreative: 'POST-PRODUCTION PRODUCING', serviceCreativeCopy: 'Budget estimates, schedules and production planning', serviceProduction: 'TEAM COORDINATION', serviceProductionCopy: 'Finding specialists, briefing teams and tracking deadlines', servicePost: 'PROJECT MANAGEMENT', servicePostCopy: 'Client communication, approvals, quality control and final delivery',
    contactKicker: '05 / GET IN TOUCH', contactTagline: 'FOR AGENCIES, STUDIOS AND EMPLOYERS', contactLeadA: 'OPEN TO PROJECTS', contactLeadB: 'AND FULL-TIME OPPORTUNITIES.', contactTitleA: 'LET’S', contactTitleB: 'DISCUSS', contactTitleC: 'A PROJECT', emailNote: 'PROJECTS, COLLABORATIONS AND FULL-TIME ROLES', backToTop: 'BACK TO TOP', footerNote: 'MADE WITH ATTENTION TO DETAIL', closeAria: 'Close', closeButton: 'CLOSE ✕', watchVideo: 'WATCH THE FILM', cannesCase: 'CANNES LIONS ENTRY', videoError: 'This video cannot play in your browser.', downloadVideo: 'DOWNLOAD VIDEO', clientLabel: 'CLIENT', brandLabel: 'BRAND', yearLabel: 'YEAR', formatLabel: 'FORMAT', roleLabel: 'ROLE', scopeLabel: 'SCOPE', collaboratorsLabel: 'COLLABORATORS', recognitionLabel: 'RECOGNITION', videoPlay: 'Play', videoPause: 'Pause', videoMute: 'Mute', videoUnmute: 'Unmute', videoSeek: 'Seek video', videoFullscreen: 'Fullscreen', videoExitFullscreen: 'Exit fullscreen', videoControlsAria: 'Video controls', videoPlayerError: 'Could not load the video player.'
  }
};

let language = 'ru';
try { language = localStorage.getItem('varya-language') === 'en' ? 'en' : 'ru'; } catch { /* Storage can be unavailable in private browsing. */ }
let currentProject = null;
let currentYoutubePlayer = null;
let currentVideoControls = null;
let youtubeRequestId = 0;
let youtubeApiPromise = null;
let dialogNeedsCleanup = false;
const t = (key) => translations[language][key];

function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (youtubeApiPromise) return youtubeApiPromise;

  youtubeApiPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    const previousCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previousCallback?.();
      if (window.YT?.Player) resolve(window.YT);
      else reject(new Error('YouTube IFrame API did not initialize.'));
    };
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    script.onerror = () => {
      youtubeApiPromise = null;
      reject(new Error('Could not load the YouTube IFrame API.'));
    };
    document.head.append(script);
  });
  return youtubeApiPromise;
}

function formatVideoTime(seconds) {
  const totalSeconds = Math.max(0, Math.floor(Number.isFinite(seconds) ? seconds : 0));
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = String(totalSeconds % 60).padStart(2, '0');
  return `${minutes}:${remainingSeconds}`;
}

function createVideoControls() {
  const controls = document.createElement('div');
  controls.className = 'video-controls';
  controls.setAttribute('role', 'group');
  controls.setAttribute('aria-label', t('videoControlsAria'));

  const playButton = document.createElement('button');
  playButton.type = 'button';
  playButton.className = 'video-control-button video-play-button';
  playButton.textContent = '▶';
  playButton.setAttribute('aria-label', t('videoPlay'));
  playButton.disabled = true;

  const seek = document.createElement('input');
  seek.className = 'video-seek';
  seek.type = 'range';
  seek.min = '0';
  seek.max = '1000';
  seek.value = '0';
  seek.setAttribute('aria-label', t('videoSeek'));
  seek.disabled = true;

  const time = document.createElement('span');
  time.className = 'video-time';
  time.textContent = '0:00 / 0:00';

  const muteButton = document.createElement('button');
  muteButton.type = 'button';
  muteButton.className = 'video-control-button video-mute-button';
  muteButton.textContent = '♪';
  muteButton.setAttribute('aria-label', t('videoUnmute'));
  muteButton.disabled = true;

  const volume = document.createElement('input');
  volume.className = 'video-volume';
  volume.type = 'range';
  volume.min = '0';
  volume.max = '100';
  volume.value = '100';
  volume.setAttribute('aria-label', language === 'ru' ? 'Громкость' : 'Volume');
  volume.disabled = true;

  const fullscreenButton = document.createElement('button');
  fullscreenButton.type = 'button';
  fullscreenButton.className = 'video-control-button video-fullscreen-button';
  fullscreenButton.textContent = '⛶';
  fullscreenButton.setAttribute('aria-label', t('videoFullscreen'));

  const status = document.createElement('span');
  status.className = 'video-player-status';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  status.hidden = true;

  controls.append(playButton, seek, time, muteButton, volume, fullscreenButton, status);
  let player = null;
  let progressTimer = 0;
  let isSeeking = false;
  let isAdjustingVolume = false;

  const update = () => {
    if (!player) return;
    const duration = player.getDuration();
    const currentTime = player.getCurrentTime();
    const isPlaying = player.getPlayerState() === 1;
    playButton.textContent = isPlaying ? 'Ⅱ' : '▶';
    playButton.setAttribute('aria-label', t(isPlaying ? 'videoPause' : 'videoPlay'));
    const isMuted = player.isMuted();
    muteButton.textContent = isMuted ? '♪' : '×';
    muteButton.classList.toggle('is-muted', isMuted);
    muteButton.setAttribute('aria-label', isMuted ? t('videoUnmute') : t('videoMute'));
    muteButton.setAttribute('aria-pressed', String(!isMuted));
    const currentVolume = player.getVolume();
    if (!isAdjustingVolume && Number.isFinite(currentVolume)) volume.value = String(currentVolume);
    if (duration > 0 && !isSeeking) {
      seek.value = String(Math.round((currentTime / duration) * 1000));
      time.textContent = `${formatVideoTime(currentTime)} / ${formatVideoTime(duration)}`;
    }
  };
  const updateFullscreenLabel = () => {
    const isFullscreen = document.fullscreenElement === dialogArt;
    fullscreenButton.setAttribute('aria-label', t(isFullscreen ? 'videoExitFullscreen' : 'videoFullscreen'));
    if (dialog.open) {
      const cursorLayer = isFullscreen ? dialogArt : dialog;
      if (cursor.parentElement !== cursorLayer) cursorLayer.append(cursor);
    }
  };
  const togglePlayback = () => {
    if (!player) return;
    if (player.getPlayerState() === 1) player.pauseVideo();
    else player.playVideo();
    update();
  };
  const seekBy = (seconds) => {
    if (!player) return;
    const duration = player.getDuration();
    const currentTime = player.getCurrentTime();
    if (!Number.isFinite(duration) || duration <= 0 || !Number.isFinite(currentTime)) return;
    player.seekTo(Math.min(duration, Math.max(0, currentTime + seconds)), true);
    update();
  };
  const toggleMute = () => {
    if (!player) return;
    if (player.isMuted()) player.unMute();
    else player.mute();
    update();
  };
  const toggleFullscreen = () => {
    if (document.fullscreenElement === dialogArt) {
      document.exitFullscreen().then(updateFullscreenLabel).catch(() => {
        status.textContent = t('videoPlayerError');
        status.hidden = false;
      });
      return;
    }
    if (dialogArt.requestFullscreen) {
      dialogArt.append(cursor);
      dialogArt.requestFullscreen().then(updateFullscreenLabel).catch(() => {
        updateFullscreenLabel();
        status.textContent = t('videoPlayerError');
        status.hidden = false;
      });
    }
  };

  playButton.addEventListener('click', togglePlayback);
  seek.addEventListener('input', () => {
    if (!player) return;
    isSeeking = true;
    const duration = player.getDuration();
    if (duration > 0) {
      time.textContent = `${formatVideoTime((Number(seek.value) / 1000) * duration)} / ${formatVideoTime(duration)}`;
    }
  });
  seek.addEventListener('change', () => {
    isSeeking = false;
    if (!player) return;
    const duration = player.getDuration();
    if (duration > 0) player.seekTo((Number(seek.value) / 1000) * duration, true);
  });
  muteButton.addEventListener('click', toggleMute);
  volume.addEventListener('input', () => {
    if (!player) return;
    isAdjustingVolume = true;
    const level = Number(volume.value);
    player.setVolume(level);
    if (level === 0) player.mute();
    else if (player.isMuted()) player.unMute();
    update();
  });
  volume.addEventListener('change', () => {
    isAdjustingVolume = false;
    update();
  });
  fullscreenButton.addEventListener('click', toggleFullscreen);
  document.addEventListener('fullscreenchange', updateFullscreenLabel, true);
  document.addEventListener('pointermove', updateFullscreenLabel, true);

  return {
    element: controls,
    update,
    togglePlayback,
    toggleMute,
    toggleFullscreen,
    seekBy,
    setPlayer(nextPlayer) {
      player = nextPlayer;
      playButton.disabled = false;
      seek.disabled = false;
      muteButton.disabled = false;
      volume.disabled = false;
      status.hidden = true;
      update();
      progressTimer = window.setInterval(update, 250);
    },
    setError(message) {
      status.textContent = message;
      status.hidden = false;
    },
    destroy() {
      window.clearInterval(progressTimer);
      document.removeEventListener('fullscreenchange', updateFullscreenLabel, true);
      document.removeEventListener('pointermove', updateFullscreenLabel, true);
    }
  };
}

function cleanupVideoPlayer() {
  youtubeRequestId += 1;
  currentVideoControls?.destroy();
  currentVideoControls = null;
  currentYoutubePlayer?.destroy();
  currentYoutubePlayer = null;
}

function cleanupProjectDialog() {
  if (!dialogNeedsCleanup) return;
  dialogNeedsCleanup = false;
  cleanupVideoPlayer();
  currentProject = null;
  const media = dialog.querySelector('.dialog-video');
  if (media instanceof HTMLVideoElement) {
    media.pause();
    media.removeAttribute('src');
    media.load();
  } else {
    media?.remove();
  }
  dialogArt.replaceChildren();
  document.body.classList.remove('dialog-open');
  document.body.append(cursor);
}

const projectText = (project) => ({
  title: project.title[language],
  categoryName: project.categoryName[language],
  description: project.description?.[language] || '',
  client: project.client?.[language] || '',
  brand: project.brand?.[language] || '',
  format: project.format?.[language] || '',
  role: project.role?.[language] || '',
  scope: project.scope?.[language] || '',
  collaborators: project.collaborators?.[language] || '',
  recognition: project.recognition?.[language] || ''
});

const grid = document.querySelector('#project-grid');
const dialog = document.querySelector('#project-dialog');
const dialogArt = dialog.querySelector('.dialog-art');
const menu = document.querySelector('#site-menu');
const menuToggle = document.querySelector('.menu-toggle');
const menuToggleLabel = menuToggle.querySelector('.menu-toggle-label');
menu.inert = true;
const cursor = document.querySelector('.cursor');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function makeIllustration(source, className) {
  if (!source) return null;
  const image = document.createElement('img');
  image.className = className;
  image.src = source;
  image.alt = '';
  image.loading = 'lazy';
  image.decoding = 'async';
  image.setAttribute('aria-hidden', 'true');
  return image;
}

const previewObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const video = entry.target;
    if (!entry.isIntersecting || video.src) return;
    video.src = video.dataset.src;
    video.load();
    previewObserver.unobserve(video);
  });
}, { rootMargin: '350px 0px' });

function makePreview(project) {
  const video = document.createElement('video');
  video.className = 'project-preview';
  video.dataset.src = project.video;
  video.preload = 'metadata';
  video.muted = true;
  video.playsInline = true;
  video.setAttribute('aria-hidden', 'true');
  video.addEventListener('loadedmetadata', () => {
    if (video.duration > 0.5) video.currentTime = Math.min(video.duration * 0.2, 2);
  }, { once: true });
  video.addEventListener('loadeddata', () => video.classList.add('is-ready'), { once: true });
  video.addEventListener('seeked', () => video.classList.add('is-ready'), { once: true });
  video.addEventListener('error', () => video.remove(), { once: true });
  previewObserver.observe(video);
  return video;
}

[['hero', '.hero-illustration'], ['about', '.intro-illustration'], ['contact', '.contact-illustration']].forEach(([key, selector]) => {
  const source = ILLUSTRATIONS[key];
  if (!source) return;
  const image = document.querySelector(selector);
  image.src = source;
  image.hidden = false;
  if (key === 'hero') image.parentElement.classList.add('has-art');
});

function renderProjects() {
  const activeFilter = document.querySelector('.filter.is-active')?.dataset.filter || 'all';
  previewObserver.disconnect();
  grid.querySelectorAll('.project-preview').forEach((video) => {
    video.pause();
    video.removeAttribute('src');
    video.load();
  });
  grid.replaceChildren();
  projectGroups.forEach((group, groupIndex) => {
    const section = document.createElement('section');
    section.className = 'project-group';
    section.dataset.category = group.id;
    section.hidden = activeFilter !== 'all' && group.id !== activeFilter;
    const heading = document.createElement('div');
    heading.className = 'project-group-heading';
    const number = document.createElement('span');
    number.textContent = String(groupIndex + 1).padStart(2, '0');
    const title = document.createElement('h3');
    title.textContent = group.label[language];
    const count = document.createElement('span');
    count.textContent = String(group.projects.length).padStart(2, '0');
    heading.append(number, title, count);
    const cards = document.createElement('div');
    cards.className = 'project-grid';
    projects.filter((project) => project.category === group.id).forEach((project) => {
      const copy = projectText(project);
      const article = document.createElement('article');
      article.className = 'project reveal';
      article.dataset.category = project.category;

      const button = document.createElement('button');
      button.className = 'project-button';
      button.type = 'button';
      button.dataset.cursor = 'VIEW';
      button.setAttribute('aria-label', `${t('openProject')} «${copy.title}»`);

      const visual = document.createElement('div');
      visual.className = 'project-visual';
      const art = document.createElement('div');
      art.className = `project-art art-${group.id}`;
      art.setAttribute('aria-hidden', 'true');
      const brand = document.createElement('span');
      brand.className = 'project-brand';
      brand.textContent = copy.title;
      art.append(brand);
      const index = document.createElement('span');
      index.className = 'project-index';
      index.textContent = `${project.id} / ${group.label[language]}`;
      const corner = document.createElement('span');
      corner.className = 'project-corner';
      corner.innerHTML = '<span class="svg-arrow" aria-hidden="true"></span>';
      visual.append(art);
      if (project.thumbnailUrl) {
        const thumbnail = document.createElement('img');
        thumbnail.className = 'project-thumbnail';
        thumbnail.alt = '';
        thumbnail.loading = 'lazy';
        thumbnail.decoding = 'async';
        thumbnail.setAttribute('aria-hidden', 'true');
        const thumbnailSources = [project.thumbnailUrl, project.thumbnailFallbackUrl].filter(Boolean);
        let thumbnailSourceIndex = 0;
        thumbnail.addEventListener('error', () => {
          thumbnailSourceIndex += 1;
          if (thumbnailSourceIndex < thumbnailSources.length) {
            thumbnail.src = thumbnailSources[thumbnailSourceIndex];
          } else {
            thumbnail.remove();
          }
        });
        thumbnail.src = thumbnailSources[thumbnailSourceIndex];
        visual.append(thumbnail);
      } else if (!project.embedUrl) {
        visual.append(makePreview(project));
      }
      visual.append(index, corner);
      const illustration = makeIllustration(ILLUSTRATIONS.projects[project.id], 'project-illustration');
      if (illustration) visual.append(illustration);
      if (project.award) {
        const badge = document.createElement('span');
        badge.className = 'project-award';
        badge.append(document.createTextNode(`${project.award} `), createStarIcon('project-award-star'));
        visual.append(badge);
      }

      const info = document.createElement('div');
      info.className = 'project-info';
      const cardTitle = document.createElement('h4');
      cardTitle.textContent = copy.title;
      const type = document.createElement('p');
      type.textContent = copy.role || copy.categoryName;
      info.append(cardTitle, type);
      button.append(visual, info);
      button.addEventListener('click', () => openProject(project));
      article.append(button);
      cards.append(article);
    });
    section.append(heading, cards);
    grid.append(section);
  });
}

function openProject(project) {
  currentProject = project;
  dialogNeedsCleanup = true;
  const copy = projectText(project);
  cleanupVideoPlayer();
  const previousMedia = dialog.querySelector('.dialog-video');
  if (previousMedia instanceof HTMLVideoElement) previousMedia.pause();
  dialogArt.replaceChildren();
  if (project.embedUrl) {
    const iframe = document.createElement('iframe');
    iframe.className = 'dialog-video dialog-embed';
    iframe.title = copy.title;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;
    if (document.documentElement.classList.contains('has-custom-cursor')) {
      const playerUrl = new URL(project.embedUrl);
      playerUrl.searchParams.set('enablejsapi', '1');
      playerUrl.searchParams.set('controls', '0');
      if (['http:', 'https:'].includes(window.location.protocol)) playerUrl.searchParams.set('origin', window.location.origin);
      iframe.id = 'youtube-player';
      iframe.classList.add('dialog-embed-custom');
      iframe.src = playerUrl.toString();
      currentVideoControls = createVideoControls();
      const controls = currentVideoControls;
      const requestId = youtubeRequestId;
      dialogArt.append(iframe, controls.element);
      loadYouTubeApi().then((youtubeApi) => {
        if (requestId !== youtubeRequestId || !dialog.open) return;
        currentYoutubePlayer = new youtubeApi.Player(iframe.id, {
          events: {
            onReady: (event) => {
              if (requestId === youtubeRequestId) controls.setPlayer(event.target);
            },
            onStateChange: () => {
              if (requestId === youtubeRequestId) controls.update?.();
            },
            onError: (event) => {
              if (requestId === youtubeRequestId) controls.setError(t('videoError'));
              console.error('YouTube player error:', event.data);
            }
          }
        });
      }).catch((error) => {
        if (requestId !== youtubeRequestId) return;
        console.error(error);
        controls.setError(t('videoPlayerError'));
      });
    } else {
      iframe.src = project.embedUrl;
      dialogArt.append(iframe);
    }
  } else {
    const video = document.createElement('video');
    video.className = 'dialog-video';
    video.src = project.video;
    video.controls = false;
    video.muted = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.setAttribute('aria-label', copy.title);
    currentVideoControls = createVideoControls();
    const controls = currentVideoControls;
    const fallback = document.createElement('div');
    fallback.className = 'video-fallback';
    fallback.hidden = true;
    const message = document.createElement('p');
    message.textContent = t('videoError');
    const download = document.createElement('a');
    download.href = project.video;
    download.download = project.file;
    download.textContent = t('downloadVideo');
    fallback.append(message, download);
    video.addEventListener('error', () => { fallback.hidden = false; }, { once: true });
    controls.setPlayer({
      getDuration: () => video.duration,
      getCurrentTime: () => video.currentTime,
      getPlayerState: () => video.paused || video.ended ? 2 : 1,
      isMuted: () => video.muted,
      getVolume: () => Math.round(video.volume * 100),
      playVideo: () => video.play().catch(() => controls.setError(t('videoPlayerError'))),
      pauseVideo: () => video.pause(),
      seekTo: (seconds) => { video.currentTime = seconds; },
      setVolume: (level) => { video.volume = level / 100; },
      mute: () => { video.muted = true; },
      unMute: () => { video.muted = false; }
    });
    dialogArt.append(video, controls.element, fallback);
  }
  dialog.querySelector('.dialog-meta').textContent = [project.id, copy.categoryName.toUpperCase()].join(' / ');
  dialog.querySelector('#dialog-title').textContent = copy.title;
  const description = dialog.querySelector('.dialog-description');
  description.textContent = copy.description;
  description.hidden = !copy.description;
  const facts = dialog.querySelector('.dialog-facts');
  facts.replaceChildren();
  [
    ['clientLabel', copy.client],
    ['brandLabel', copy.brand],
    ['yearLabel', project.year],
    ['formatLabel', copy.format],
    ['roleLabel', copy.role],
    ['scopeLabel', copy.scope],
    ['collaboratorsLabel', copy.collaborators],
    ['recognitionLabel', copy.recognition || project.award]
  ].filter(([, value]) => Boolean(value)).forEach(([label, value]) => {
    const item = document.createElement('div');
    item.className = 'dialog-fact';
    if (label === 'scopeLabel' || label === 'collaboratorsLabel') item.classList.add('dialog-fact-scope');
    const caption = document.createElement('small');
    caption.textContent = t(label);
    const detail = document.createElement('strong');
    detail.textContent = value;
    item.append(caption, detail);
    facts.append(item);
  });
  facts.hidden = facts.childElementCount === 0;
  const projectLink = dialog.querySelector('.dialog-link');
  projectLink.hidden = !project.url;
  if (project.url) projectLink.href = project.url;
  const sourceLink = dialog.querySelector('.dialog-source-link');
  sourceLink.hidden = !project.sourceUrl;
  if (project.sourceUrl) sourceLink.href = project.sourceUrl;
  dialog.append(cursor);
  if (!dialog.open) dialog.showModal();
  document.body.classList.add('dialog-open');
  const currentVideo = dialog.querySelector('.dialog-video');
  if (currentVideo instanceof HTMLVideoElement) {
    currentVideo.play().catch(() => currentVideoControls?.setError(t('videoPlayerError')));
  }
}

function createStarIcon(className) {
  const star = document.createElement('img');
  star.className = className;
  star.src = './assets/star.svg';
  star.alt = '';
  star.setAttribute('aria-hidden', 'true');
  return star;
}

function renderTextWithStars(element, text, className) {
  element.replaceChildren();
  text.split('✳').forEach((part, index, parts) => {
    element.append(document.createTextNode(part));
    if (index < parts.length - 1) element.append(createStarIcon(className));
  });
}

function applyLanguage() {
  document.documentElement.lang = language;
  document.title = t('pageTitle');
  document.querySelector('meta[name="description"]').content = t('pageDescription');
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const text = t(element.dataset.i18n);
    if (element.dataset.i18n === 'ticker') {
      renderTextWithStars(element, text, 'ticker-star');
    } else {
      element.textContent = text;
    }
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', t(element.dataset.i18nAria));
  });
  document.querySelectorAll('[data-lang-option]').forEach((option) => {
    option.dataset.active = String(option.dataset.langOption === language);
  });
  document.querySelector('.language-toggle').setAttribute('aria-label', t('switchLanguage'));
  menuToggleLabel.textContent = t(menu.classList.contains('is-open') ? 'menuClose' : 'menuOpen');
  renderProjects();
  document.querySelectorAll('.project.reveal').forEach((element) => element.classList.add('is-visible'));
  if (currentProject && dialog.open) openProject(currentProject);
  updateScroll();
}

renderProjects();
const accessForm = document.querySelector('#access-form');
const accessPassword = document.querySelector('#access-password');
const accessMessage = document.querySelector('#access-message');
accessForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  accessMessage.textContent = '';

  if (!/^[\da-f]{64}$/i.test(ACCESS_PASSWORD_HASH)) {
    accessMessage.textContent = t('accessNotConfigured');
    return;
  }
  if (!window.isSecureContext || !window.crypto?.subtle) {
    accessMessage.textContent = t('accessHttpsError');
    return;
  }

  let passwordHash;
  try {
    const digest = await window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(accessPassword.value));
    passwordHash = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');
  } catch {
    accessMessage.textContent = t('accessHttpsError');
    return;
  }
  if (passwordHash !== ACCESS_PASSWORD_HASH.toLowerCase()) {
    accessMessage.textContent = t('accessIncorrect');
    accessPassword.select();
    return;
  }

  document.querySelector('#access-gate').hidden = true;
  document.body.classList.remove('access-locked');
  document.querySelectorAll('body > header, body > main, body > footer').forEach((element) => { element.inert = false; });
  accessForm.reset();
});
document.querySelector('.language-toggle').addEventListener('click', () => {
  language = language === 'ru' ? 'en' : 'ru';
  try { localStorage.setItem('varya-language', language); } catch { /* Continue without persistence. */ }
  applyLanguage();
});

dialog.querySelector('.dialog-close').addEventListener('click', () => {
  dialog.close();
  cleanupProjectDialog();
});
dialog.addEventListener('cancel', cleanupProjectDialog);
dialog.addEventListener('close', () => {
  if (!dialog.open) cleanupProjectDialog();
});
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) {
    dialog.close();
    cleanupProjectDialog();
  }
});
dialogArt.addEventListener('click', (event) => {
  if (!currentVideoControls || !(event.target instanceof Element) ||
      event.target.closest('.video-controls, .video-fallback, a, button')) return;
  currentVideoControls.togglePlayback();
});

document.querySelectorAll('.filter').forEach((button) => {
  const count = button.dataset.filter === 'all'
    ? projects.length
    : projects.filter((project) => project.category === button.dataset.filter).length;
  button.querySelector('sup').textContent = String(count).padStart(2, '0');
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    document.querySelectorAll('.filter').forEach((filter) => {
      const active = filter === button;
      filter.classList.toggle('is-active', active);
      filter.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('.project-group').forEach((group) => {
      group.hidden = category !== 'all' && group.dataset.category !== category;
    });
  });
});
document.querySelector('.work-count').textContent = ` / ${String(projects.length).padStart(2, '0')}`;

function closeMenu() {
  menu.classList.remove('is-open');
  menu.inert = true;
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggleLabel.textContent = t('menuOpen');
  document.body.classList.remove('menu-open');
}

menuToggle.addEventListener('click', () => {
  const open = !menu.classList.contains('is-open');
  menu.classList.toggle('is-open', open);
  menu.inert = !open;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggleLabel.textContent = t(open ? 'menuClose' : 'menuOpen');
  document.body.classList.toggle('menu-open', open);
});
menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

let scrollQueued = false;
function updateScroll() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  document.querySelector('.scroll-progress').style.transform = `scaleX(${maxScroll > 0 ? window.scrollY / maxScroll : 0})`;
  document.querySelector('.site-header').classList.toggle('is-scrolled', window.scrollY > 40);
  if (!reducedMotion.matches && window.innerWidth > 650) {
    document.querySelector('.hero-illustration').style.setProperty('--hero-shift', `${(window.scrollY * 0.12).toFixed(1)}px`);
    document.querySelectorAll('.project-visual').forEach((visual) => {
      const rect = visual.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * -0.035;
        visual.style.setProperty('--parallax', `${offset.toFixed(1)}px`);
      }
    });
  }
  scrollQueued = false;
}
window.addEventListener('scroll', () => {
  if (!scrollQueued) {
    scrollQueued = true;
    requestAnimationFrame(updateScroll);
  }
}, { passive: true });
updateScroll();
applyLanguage();

const sections = [...document.querySelectorAll('main > section'), document.querySelector('.site-footer')];
const scrollThreshold = 115;
let scrollIntent = 0;
let scrollIntentTimer = 0;
let snapFrame = 0;
let snapActive = false;

function sectionTop(section) {
  return section.getBoundingClientRect().top + window.scrollY;
}

function activeSectionIndex() {
  const position = window.scrollY + 2;
  for (let index = 0; index < sections.length - 1; index += 1) {
    if (position < sectionTop(sections[index + 1])) return index;
  }
  return sections.length - 1;
}

function animateSectionScroll(target) {
  cancelAnimationFrame(snapFrame);
  const destination = Math.max(0, Math.min(target, document.documentElement.scrollHeight - window.innerHeight));
  if (reducedMotion.matches) {
    window.scrollTo({ top: destination, behavior: 'instant' });
    return;
  }

  const start = window.scrollY;
  const distance = destination - start;
  const duration = Math.min(1050, Math.max(620, Math.abs(distance) * 0.7));
  const startTime = performance.now();
  snapActive = true;
  document.documentElement.classList.add('is-programmatic-scroll');

  function frame(now) {
    const progress = Math.min(1, (now - startTime) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    window.scrollTo({ top: start + distance * eased, behavior: 'instant' });
    if (progress < 1) {
      snapFrame = requestAnimationFrame(frame);
    } else {
      snapActive = false;
      snapFrame = 0;
      document.documentElement.classList.remove('is-programmatic-scroll');
    }
  }

  snapFrame = requestAnimationFrame(frame);
}

function stepScroll(delta) {
  if (snapActive || delta === 0) return;
  const index = activeSectionIndex();
  const section = sections[index];
  const top = sectionTop(section);
  const bottom = top + section.offsetHeight;
  const position = window.scrollY;
  const direction = Math.sign(delta);
  let remaining = delta;

  if (direction > 0) {
    const innerEnd = Math.max(top, bottom - window.innerHeight);
    if (position < innerEnd - 1) {
      const movement = Math.min(remaining, innerEnd - position);
      window.scrollTo({ top: position + movement, behavior: 'instant' });
      remaining -= movement;
      scrollIntent = 0;
    }
  } else if (position > top + 1) {
    const movement = Math.max(remaining, top - position);
    window.scrollTo({ top: position + movement, behavior: 'instant' });
    remaining -= movement;
    scrollIntent = 0;
  }

  if (Math.abs(remaining) < 1) return;
  const nextIndex = index + direction;
  if (nextIndex < 0 || nextIndex >= sections.length) return;

  if (scrollIntent !== 0 && Math.sign(scrollIntent) !== direction) scrollIntent = 0;
  scrollIntent += remaining;
  clearTimeout(scrollIntentTimer);
  scrollIntentTimer = window.setTimeout(() => { scrollIntent = 0; }, 320);
  if (Math.abs(scrollIntent) >= scrollThreshold) {
    scrollIntent = 0;
    const destination = direction > 0
      ? sectionTop(sections[nextIndex])
      : Math.max(sectionTop(sections[nextIndex]), sectionTop(sections[nextIndex]) + sections[nextIndex].offsetHeight - window.innerHeight);
    animateSectionScroll(destination);
  }
}

window.addEventListener('wheel', (event) => {
  if (reducedMotion.matches || window.matchMedia('(pointer: coarse)').matches || dialog.open || document.body.classList.contains('menu-open') || event.ctrlKey || event.metaKey) return;
  event.preventDefault();
  const multiplier = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1;
  stepScroll(event.deltaY * multiplier);
}, { passive: false });

document.addEventListener('keydown', (event) => {
  if (!dialog.open || !currentVideoControls || event.repeat) return;
  const target = event.target;
  if (target instanceof HTMLElement && (target.isContentEditable || target.matches('input:not([type="range"]), textarea, select'))) return;
  const key = event.key.toLowerCase();
  if (key === 'f') {
    event.preventDefault();
    currentVideoControls.toggleFullscreen();
  } else if (key === 'm') {
    event.preventDefault();
    currentVideoControls.toggleMute();
  } else if ((key === 'arrowright' || key === 'arrowleft') &&
      !(target instanceof HTMLElement && target.matches('input[type="range"]')) &&
      !event.altKey && !event.ctrlKey && !event.metaKey) {
    event.preventDefault();
    currentVideoControls.seekBy(key === 'arrowright' ? 5 : -5);
  } else if ((event.code === 'Space' || event.key === ' ') &&
      !(target instanceof HTMLElement && target.matches('button'))) {
    event.preventDefault();
    currentVideoControls.togglePlayback();
  }
});

document.addEventListener('keydown', (event) => {
  if (reducedMotion.matches || window.matchMedia('(pointer: coarse)').matches || dialog.open || document.body.classList.contains('menu-open')) return;
  if (event.target.closest('input, textarea, select, [contenteditable="true"]')) return;
  const forward = ['ArrowDown', 'PageDown'].includes(event.key) || (event.key === ' ' && !event.shiftKey);
  const backward = ['ArrowUp', 'PageUp'].includes(event.key) || (event.key === ' ' && event.shiftKey);
  if (!forward && !backward) return;
  event.preventDefault();
  stepScroll((forward ? 1 : -1) * window.innerHeight * 0.8);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const hash = link.getAttribute('href');
    const target = document.querySelector(hash);
    if (!target) return;
    event.preventDefault();
    scrollIntent = 0;
    animateSectionScroll(hash === '#top' ? 0 : sectionTop(target));
  });
});

if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.documentElement.classList.add('has-custom-cursor');
  let pointerX = -100;
  let pointerY = -100;
  let cursorX = -100;
  let cursorY = -100;
  document.addEventListener('pointermove', (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    const target = event.target.closest('[data-cursor], a, button, input');
    cursor.classList.toggle('is-active', Boolean(target));
  }, { passive: true });
  function animateCursor() {
    if (reducedMotion.matches) return;
    cursorX += (pointerX - cursorX) * 0.34;
    cursorY += (pointerY - cursorY) * 0.34;
    cursor.style.transform = `translate3d(${cursorX - 13}px,${cursorY - 4}px,0)`;
    requestAnimationFrame(animateCursor);
  }
  if (reducedMotion.matches) {
    document.addEventListener('pointermove', () => {
      cursor.style.transform = `translate3d(${pointerX - 13}px,${pointerY - 4}px,0)`;
    }, { passive: true });
  } else {
    animateCursor();
  }
} else {
  cursor.hidden = true;
}

if (SHOWREEL_VIDEO) {
  const reel = document.querySelector('#showreel-video');
  const heroVideo = document.querySelector('.hero-video');
  const frame = document.querySelector('.showreel-frame');
  const playButton = document.querySelector('.reel-play');
  reel.src = SHOWREEL_VIDEO;
  reel.poster = './assets/showreel-poster.jpg';
  heroVideo.src = SHOWREEL_VIDEO;
  frame.classList.add('has-video');
  frame.dataset.cursor = 'PLAY';
  const caption = frame.querySelector('.frame-caption [data-i18n]');
  caption.dataset.i18n = 'soundOn';
  caption.textContent = t('soundOn');
  playButton.hidden = false;
  reel.addEventListener('play', () => { playButton.hidden = true; });
  reel.addEventListener('pause', () => { playButton.hidden = false; });
  playButton.addEventListener('click', () => reel.play());
  heroVideo.addEventListener('canplay', () => {
    heroVideo.parentElement.classList.add('has-video');
    heroVideo.classList.add('is-ready');
    if (!reducedMotion.matches) heroVideo.play().catch(() => {});
  }, { once: true });
}
