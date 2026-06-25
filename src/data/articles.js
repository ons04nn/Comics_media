import { generateArticleContent } from './articleContent';

import articleTeaser from '../assets/images/article/article_teaser.jpg';
import articleImg1 from '../assets/images/article/1.jpg';
import articleImg2 from '../assets/images/article/2.jpg';
import articleImg3 from '../assets/images/article/3.jpg';
import articleImg4 from '../assets/images/article/4.jpg';
import articleImg5 from '../assets/images/article/5.jpg';
import articleImg6 from '../assets/images/article/6.jpg';
import articleImg7 from '../assets/images/article/7.jpg';
import articleImg8 from '../assets/images/article/8.jpg';
import articleImg9 from '../assets/images/article/9.jpg';
import articleImg10 from '../assets/images/article/10.jpg';
import articleImg11 from '../assets/images/article/11.jpg';
import articleImg12 from '../assets/images/article/12.jpg';
import batmanImg1 from '../assets/images/article/batman-1.jpg';
import batmanImg2 from '../assets/images/article/batman-2.jpg';
import batmanImg3 from '../assets/images/article/batman-3.jpg';
import batmanImg4 from '../assets/images/article/batman-4.jpg';
import extraImg1 from '../assets/images/article/extra-1.jpg';
import extraImg2 from '../assets/images/article/extra-2.jpg';
import extraImg3 from '../assets/images/article/extra-3.jpg';
import extraImg4 from '../assets/images/article/extra-4.jpg';
import extraImg5 from '../assets/images/article/extra-5.jpg';
import extraImg6 from '../assets/images/article/extra-6.jpg';
import extraImg7 from '../assets/images/article/extra-7.jpg';
import extraImg8 from '../assets/images/article/extra-8.jpg';
import extraImg9 from '../assets/images/article/extra-9.jpg';
import extraImg10 from '../assets/images/article/extra-10.jpg';

import homeOnePiece from '../assets/images/home/one-piece-the-story-that-conquered-the-world.jpg';
import homeBatman from '../assets/images/home/batman-character-evolution.jpg';
import homeProstokvashino from '../assets/images/home/prostokvashino/prostokvashino-cin-city.jpg';
import homeAvengers from '../assets/images/home/avengers-famous-characters-history.jpg';
import homeTintin from '../assets/images/home/tintin/the-adventures-of-tintin.jpg';
import homeDeathNote from '../assets/images/home/death-note-manga-vs-anime.jpg';
import homeSinCity from '../assets/images/home/sin-city-before-adaptation.jpg';
import homeAot from '../assets/images/home/attack-on-titan/attack-on-titan.jpg';
import homeSpiderMan from '../assets/images/home/spider-man-1970s.jpg';
import homeHowAvengers from '../assets/images/home/how-the-avengers-formed.jpg';

import productionImg1 from '../assets/images/production/How-comics-are-made/How-Comics-Are-Made.jpg';
import productionImg2 from '../assets/images/production/How-to-Draw-Your-Own-Comic.jpg';
import productionImg3 from '../assets/images/production/Sketching-for-Beginners/Sketching-for-Beginners.jpg';
import productionImg4 from '../assets/images/production/Story-Planning.jpg';
import productionImg5 from '../assets/images/production/Storytelling-Techniques/Storytelling-Techniques.jpg';
import productionImg6 from '../assets/images/production/Sketching.jpg';
import productionImg7 from '../assets/images/production/How-to-Draw-a-Human-Figure.jpg';

import eraImg1 from '../assets/images/era/the-golden-age-the-birth-of-the-superhero-as-a-cultural-phenomenon/the-golden-age-the-birth-of-the-superhero-as-a-cultural-phenomenon.jpg';
import eraImg2 from '../assets/images/era/how-was-superman-the-one-that-split-comics-history-into-before-and-after.jpg';
import eraImg3 from '../assets/images/era/how-were-forgotten-heroes-of-the-golden-age/how-were-forgotten-heroes-of-the-golden-age.jpg';
import eraImg4 from '../assets/images/era/how-death-changed-in-comics.jpg';
import eraImg5 from '../assets/images/era/how-women-creators-shaped-the-comics-industry.jpg';
import eraImg6 from '../assets/images/era/how-dc-brought-back-the-flash-and-started-the-sci-fi-era/how-dc-brought-back-the-flash-and-started-the-sci-fi-era.jpg';
import eraImg7 from '../assets/images/era/captain-america-propaganda-and-patriotism-in-comics.jpg';
import eraImg8 from '../assets/images/era/how-the-avengers-were-created.jpg';

import publisherImg1 from '../assets/images/publisher/how-dc-comics-evolved-from-national-allied/how-dc-comics-evolved-from-national-allied.jpg';
import publisherImg2 from '../assets/images/publisher/how-stan-lee-jack-kirby-and-steve-ditko-created-the-marvel-universe.jpg';
import publisherImg3 from '../assets/images/publisher/how-the-walking-dead-saga-and-paper-girls-redefined-modern-comics/how-the-walking-dead-saga-and-paper-girls-redefined-modern-comics.jpg';
import publisherImg4 from '../assets/images/publisher/how-the-franco-belgian-school-shaped-modern-comics.jpg';
import publisherImg5 from '../assets/images/publisher/how-one-demon-became-the-symbol-of-dark-horse-comics.jpg';
import publisherImg6 from '../assets/images/publisher/how-idw-rebooted-teenage-mutant-ninja-turtles/how-idw-rebooted-teenage-mutant-ninja-turtles.jpg';
import publisherImg7 from '../assets/images/publisher/weekly-shonen-jump-ranking-system-and-its-role-in-manga-industry.jpg';
import publisherImg8 from '../assets/images/publisher/how-comics-are-printed-in-russia-production-and-publishing-process.jpg';

import regionImg1 from '../assets/images/region/how-manga-became-a-phenomenon-that-conquered-the-world/how-manga-became-a-phenomenon-that-conquered-the-world.jpg';
import regionImg2 from '../assets/images/region/northern-france-and-industrial-comics.jpg';
import regionImg3 from '../assets/images/region/kazakhstan-and-central-asia/kazakhstan-and-central-asia.jpg';
import regionImg4 from '../assets/images/region/east-german-comics.jpg';
import regionImg5 from '../assets/images/region/eastern-european-comics-behind-the-iron-curtain.jpg';
import regionImg6 from '../assets/images/region/manhua-censorship-and-the-massive-market-you-dont-know-about/manhua-censorship-and-the-massive-market-you-dont-know-about.jpg';
import regionImg7 from '../assets/images/region/switzerland-and-the-netherlands.jpg';
import regionImg8 from '../assets/images/region/siberia-and-the-far-east.jpg';

function defineArticle(meta) {
  const titleLines = meta.articleTitleLines ?? meta.titleLines;
  const content = generateArticleContent({
    slug: meta.slug,
    titleLines,
    alt: meta.alt,
    topic: meta.topic,
    imageCount: meta.imageCount ?? 5,
  });

  return {
    slug: meta.slug,
    titleLines,
    date: meta.date ?? '12.05',
    heroImage: meta.heroImage,
    heroAlt: meta.alt,
    intro: meta.intro ?? content.intro,
    items: meta.items ?? content.items,
    relatedSlugs: meta.relatedSlugs ?? [],
  };
}

const top10AnimeItems = [
  { align: 'left', image: articleImg1, html: '<b>1. Служанка-дракон</b><br>Лёгкая и тёплая история о странной дружбе человека и дракона. Не мудрствует лукаво, но дарует уют.' },
  { align: 'right', image: articleImg2, html: '<b>2. Девочка, покорившая время</b><br>Немного философии, немного романтики и капля печали. Вещь короткая, но цепкая.' },
  { align: 'left', image: articleImg3, html: '<b>3. Дети волков</b><br>История матери и её необычных детей. Трогательно, местами жестоко — но честно.' },
  { align: 'right', image: articleImg4, html: '<b>4. Сад изящных слов</b><br>Визуально — пир. Сюжет — тихий и созерцательный. Идеально для дождливого вечера.' },
  { align: 'left', image: articleImg5, html: '<b>5. Паприка</b><br>Сон и реальность переплетаются. Если любишь странное — бери без сомнений.' },
  { align: 'right', image: articleImg6, html: '<b>6. Форма голоса</b><br>Про вину, про прощение и про взросление. Сильная вещь, не для пустых душ.' },
  { align: 'left', image: articleImg7, html: '<b>7. Твоё имя</b><br>Красиво, мелодично, местами наивно — но цепляет, черт побери.' },
  { align: 'right', image: articleImg8, html: '<b>8. Ветер крепчает</b><br>Биография, но в стиле мечты. Не всем зайдёт — но ценителям в радость.' },
  { align: 'left', image: articleImg9, html: '<b>9. Акира</b><br>Классика. Грубая, шумная, культовая. Не смотреть — почти грех.' },
  { align: 'right', image: articleImg10, html: '<b>10. Сплинга-понг</b><br>Безумие, ритм, эксперимент. На любителя — но если зайдёт, не отпустит.' },
];

const articleDefinitions = [
  defineArticle({
    slug: 'top-10-anime-na-odin-vecher',
    titleLines: ['Топ-10 аниме на один вечер: от «Служанки-дракона» до «Сплинга-понга»'],
    alt: 'Топ-10 аниме на один вечер',
    heroImage: articleTeaser,
    topic: 'manga',
    customContent: {
      intro: 'Трогательная и проникновенная история, основанная на одноимённой манге Юми Униты. Сюжет рассказывает об успешном менеджере Дайкити Кавати, который на похоронах дедушки неожиданно узнаёт о существовании незаконнорождённой дочери покойного — шестилетней Рин. Мать девочки сбежала, а потому главный герой решает взять её к себе. Дайкити сталкивается со множеством трудностей, связанных с воспитанием ребёнка, и изо всех сил старается адаптироваться к новой жизни: бросает курить и даже решается на понижение в должности, чтобы не оставлять Рин одну. Аниме поднимает важные вопросы взросления и эмоциональной близости, показывая, что семья — это не только кровное родство, но и осознанный выбор.',
    },
    items: top10AnimeItems,
    relatedSlugs: ['luchshie-anime-vseh-vremen', 'kak-nachat-smotret-anime'],
  }),
  defineArticle({
    slug: 'luchshie-anime-vseh-vremen',
    titleLines: ['Лучшие аниме всех времён'],
    alt: 'Лучшие аниме всех времён',
    heroImage: articleImg11,
    topic: 'manga',
    relatedSlugs: ['top-10-anime-na-odin-vecher', 'kak-nachat-smotret-anime'],
  }),
  defineArticle({
    slug: 'kak-nachat-smotret-anime',
    titleLines: ['Как начать смотреть аниме'],
    alt: 'Как начать смотреть аниме',
    heroImage: articleImg12,
    topic: 'manga',
    relatedSlugs: ['top-10-anime-na-odin-vecher', 'luchshie-anime-vseh-vremen'],
  }),

  defineArticle({ slug: 'one-piece-istoriya-kotoraya-pokorila-mir', titleLines: ['One Piece, история, которая покорила мир'], alt: 'One Piece', heroImage: homeOnePiece, topic: 'manga', imageCount: 7 }),
  defineArticle({
    slug: 'batman-evolyutsiya-personazha',
    titleLines: ['Бэтмен — эволюция персонажа'],
    alt: 'Бэтмен',
    heroImage: homeBatman,
    topic: 'comics',
    items: [
      { align: 'left', image: batmanImg1, html: '<b>От теневого мстителя к иконе</b><br>Бэтмен прошёл долгий путь от тёмного детективного персонажа 1939 года до глобальной культурной иконы. Его эволюция отражает изменения в обществе и индустрии комиксов.' },
      { align: 'right', image: batmanImg2, html: '<b>Золотой век и Серебряный век</b><br>В ранние годы Бэтмен был безжалостным борцом с преступностью. С переходом к Серебряному веку персонаж стал более научным и технологичным, появились знаменитые гаджеты и союзники.' },
      { align: 'left', image: batmanImg3, html: '<b>Тёмный век возвращения</b><br>В 1980-х годах Фрэнк Миллер и Алан Мур вернули Бэтмену мрачность. «Тёмный рыцарь возвращается» и «Убийственная шутка» переосмыслили персонажа, сделав его глубже и сложнее.' },
      { align: 'right', image: batmanImg4, html: '<b>Современная эра</b><br>Сегодня Бэтмен остаётся центральным персонажем DC, появляясь в комиксах, фильмах, играх и сериалах. Его адаптации продолжают привлекать новые поколения поклонников.' },
    ]
  }),
  defineArticle({
    slug: 'prostokvashnyj-gorod-grehov',
    titleLines: ['Простоквашино — город грехов'],
    alt: 'Простоквашино — город грехов',
    heroImage: homeProstokvashino,
    topic: 'comics',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Матроскин</b><br>Бывший военный разведчик, который после войны нашёл убежище в тихой деревне. Его "корову" он использует для передачи зашифрованных сообщений сопротивлению.' },
      { align: 'right', image: articleImg2, html: '<b>Шарик</b><br>Бесстрашный охотник за головами, который работает на местную мафию. Его фотоаппарат — это не просто хобби, а инструмент шантажа.' },
      { align: 'left', image: articleImg3, html: '<b>Дядя Фёдор</b><br>Молодой бизнесмен из города, который сбежал от корпоративных интриг. Но даже здесь его настигло прошлое в виде таинственных заказчиков.' },
      { align: 'right', image: articleImg4, html: '<b>Почтальон Печкин</b><br>Единственный человек, который знает все секреты деревни. Его почтовый мешок содержит не только письма, но и улики.' },
      { align: 'left', image: articleImg5, html: '<b>Галчонок</b><br>Наблюдательный ребёнок, который видит больше, чем взрослые. Его рисунки содержат подсказки, которые никто не замечает.' },
    ]
  }),
  defineArticle({
    slug: 'mstiteli-istoriya-personazhej',
    titleLines: ['Мстители, история известных персонажей'],
    alt: 'Мстители',
    heroImage: homeAvengers,
    topic: 'comics',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Рождение команды</b><br>Мстители были созданы Стэном Ли и Джеком Кирби в 1963 году как ответ на успех Лиги Справедливости от DC. Первоначальный состав включал Тора, Железного человека, Человека-муравья, Осы и Халка.' },
      { align: 'right', image: articleImg2, html: '<b>Эволюция состава</b><br>За десятилетия состав команды многократно менялся. Капитан Америка присоединился уже в четвёртом выпуске и стал одним из ключевых лидеров. Каждый новый приносил свои уникальные способности и характер.' },
      { align: 'full', image: articleImg3, html: '<b>Ключевые сюжетные арки</b><br>История Мстителей богата на поворотные моменты. «Мстители против Ксора», «Эра Ультрона», «Гражданская война» — каждая арка меняла не только команду, но и всю вселенную Marvel.' },
      { align: 'left', image: articleImg4, html: '<b>Влияние на поп-культуру</b><br>Успех Мстителей в комиксах подготовил почву для кинематографической вселенной Marvel. Фильмы собрали миллиарды долларов и сделали супергероев частью массовой культуры.' },
      { html: '<b>Современное состояние</b><br>Сегодня Мстители остаются одной из самых популярных команд комиксов. Новые серии продолжают исследовать темы семьи, ответственности и цены силы.' },
    ]
  }),
  defineArticle({
    slug: 'priklyucheniya-tintina',
    titleLines: ['Приключения Тинтина'],
    alt: 'Приключения Тинтина',
    heroImage: homeTintin,
    topic: 'comics',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Создание персонажа</b><br>Тинтин был создан бельгийским художником Эрже в 1929 году. Молодой репортёр с пёсиком Милу стал символом приключенческих комиксов и европейской школы рисования.' },
      { align: 'right', image: articleImg2, html: '<b>Художественный стиль</b><br>Эрже разработал уникальный стиль «ligne claire» — чёткая линия, плоские цвета, детализированные фоны. Этот стиль стал эталоном европейских комиксов и вдохновил множество художников.' },
      { html: '<b>Культурное наследие</b><br>Приключения Тинтина переведены на десятки языков, экранизированы Стивеном Спилбергом и остаются популярными спустя почти столетие. Это история о дружбе, приключениях и поиске истины.' },
    ]
  }),
  defineArticle({
    slug: 'tetrad-smerti-manga-protiv-anime',
    titleLines: ['Тетрадь смерти — манга против аниме'],
    alt: 'Тетрадь Смерти',
    heroImage: homeDeathNote,
    topic: 'manga',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Сюжет и концепция</b><br>История о школьнике, который находит тетрадь, убивающую людей по имени. Это философская триллер-драма о морали, справедливости и природе зла.' },
      { align: 'right', image: articleImg2, html: '<b>Манга: оригинальный источник</b><br>Манга Цугуми Обы и Такеши Обаты состоит из 108 глав. Чёрно-белый рисунок, детальные лица, драматичные композиции создают атмосферу напряжённости.' },
      { align: 'left', image: articleImg3, html: '<b>Аниме-адаптация</b><br>Аниме от студии Madhouse охватывает 37 эпизодов. Цвет, музыка, озвучивание добавили новые измерения истории, но сохранили дух оригинала.' },
      { align: 'full', image: articleImg4, html: '<b>Отличия между версиями</b><br>Аниме сжало некоторые сюжетные линии, но добавило оригинальные финальные арки. Манга более детально раскрывает психологию персонажей и моральные дилеммы.' },
      { align: 'right', image: articleImg5, html: '<b>Культурное влияние</b><br>«Тетрадь смерти» стала культовым явлением, вдохновившим множество работ и дискуссий о этике. Вопросы, поднятые в истории, остаются актуальными.' },
      { html: '<b>Что выбрать</b><br>Манга для глубины и деталей, аниме для динамики и атмосферы. Обе версии достойны внимания и предлагают уникальный опыт.' },
    ]
  }),
  defineArticle({
    slug: 'gorod-grehov-do-ekranizacii',
    titleLines: ['Город грехов до экранизации'],
    alt: 'Город Грехов',
    heroImage: homeSinCity,
    topic: 'comics',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Создание комикса</b><br>Фрэнк Миллер начал работу над «Городом грехов» в 1991 году. Это был эксперимент с чёрно-белой графикой, нуарной эстетикой и нелинейным повествованием.' },
      { align: 'right', image: articleImg2, html: '<b>Художественный стиль</b><br>Высокий контраст, выразительные тени, стилизованные персонажи. Миллер использовал технику, подчёркивающую мрачность и жестокость истории.' },
      { align: 'left', image: articleImg3, html: '<b>Структура повествования</b><br>Комикс состоит из нескольких взаимосвязанных историй. Нелинейная структура, пересекающиеся сюжетные линии, ненадёжные рассказчики создают сложную мозаику.' },
      { align: 'right', image: articleImg4, html: '<b>Влияние на индустрию</b><br>«Город грехов» доказал, что комиксы могут быть искусством для взрослых. Его стиль вдохновил множество авторов и изменил восприятие графических романов.' },
      { html: '<b>От комикса к экрану</b><br>Фильм Роберта Родригеса 2005 года был удивительно верен оригиналу. Миллер выступил соавтором сценария, что помог сохранить дух и визуальный стиль комикса.' },
    ]
  }),
  defineArticle({
    slug: 'ataka-titanov',
    titleLines: ['Атака Титанов'],
    alt: 'Атака Титанов',
    heroImage: homeAot,
    topic: 'manga',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Мир и завязка</b><br>Человечество живёт в городах, окружённых огромными стенами от титанов. Когда стены падают, выжившие вынуждены бороться за существование в мире, где человек — не хищник, а добыча.' },
      { align: 'right', image: articleImg2, html: '<b>Персонажи и их арки</b><br>Эрен, Микаса, Армин — трио, чьи судьбы переплетаются с судьбой человечества. Каждый проходит путь трансформации, сталкиваясь с потерями, предательством и жестокими выборами.' },
      { align: 'full', image: articleImg3, html: '<b>Темы и философия</b><br>Свобода против безопасности, природа зла, цена мести. История задаёт сложные вопросы и не даёт простых ответов, заставляя читателя задуматься о морали.' },
      { align: 'left', image: articleImg4, html: '<b>Манга против аниме</b><br>Манга Хадзимэ Исаямы завершена и предлагает полный авторский взгляд. Аниме от Wit MAPPA адаптирует историю с потрясающей анимацией и музыкой.' },
      { align: 'right', image: articleImg5, html: '<b>Культурный феномен</b><br>«Атака Титанов» стала глобальным хитом, вдохновившим дискуссии, фан-арт, теории и даже академические исследования. Это история, которая остаётся в памяти.' },
    ]
  }),
  defineArticle({
    slug: 'chelovek-pauk-70-h',
    titleLines: ['Человек-Паук 70-х'],
    alt: 'Человек-паук 70-х',
    heroImage: homeSpiderMan,
    topic: 'comics',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Контекст эпохи</b><br>1970-е были временем социальных изменений, и комиксы отражали это. Человек-Паук эволюционировал от весёлого героя к более сложному персонажу с реальными проблемами.' },
      { align: 'right', image: articleImg2, html: '<b>Ключевые сюжеты</b><br>Смерть Гвен Стейси, «Смерть Гвен Стейси», «Клонагеда» — арки, которые навсегда изменили персонажа и индустрию. Комиксы стали серьёзнее, мрачнее, глубже.' },
      { html: '<b>Художественные изменения</b><br>Рисунок стал более реалистичным, истории — более взрослыми. Питер Паркер столкнулся с потерей, депрессией, моральными дилеммами, что делало его ближе к читателям.' },
      { html: '<b>Наследие</b><br>Изменения 70-х заложили основу для современного Человека-Паука. Персонаж остаётся актуальным благодаря способности расти и меняться вместе со временем.' },
    ]
  }),
  defineArticle({
    slug: 'kak-poyavilis-mstiteli',
    titleLines: ['Как появились Мстители'],
    alt: 'Как появились Мстители',
    heroImage: homeHowAvengers,
    topic: 'comics',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Предпосылки создания</b><br>Успех Лиги Справедливости от DC заставил Marvel искать ответ. Стэн Ли и Джек Кирби создали команду, объединившую уже популярных героев в единый ансамбль.' },
      { align: 'right', image: articleImg2, html: '<b>Первый выпуск</b><br>The Avengers #1 вышел в сентябре 1963 года. Локи, брат Тора, манипулировал Халком, чтобы заставить героев столкнуться, но они объединились против общей угрозы.' },
      { align: 'full', image: articleImg3, html: '<b>Ранние годы</b><br>Первый состав включал Тора, Железного человека, Халка, Человека-муравья и Осы. Капитан Америка присоединился позже и стал душой команды. Истории были простыми, но увлекательными.' },
      { align: 'left', image: articleImg4, html: '<b>Эволюция концепции</b><br>Со временем Мстители стали не просто командой супергероев, а семьёй с конфликтами, предательствами и примирениями. Это сделало истории глубже и эмоциональнее.' },
      { html: '<b>Современное состояние</b><br>Сегодня Мстители — это не только комиксы, но и фильмы, сериалы, игры. Концепция команды доказала свою универсальность и способность адаптироваться к разным медиа.' },
    ]
  }),

  defineArticle({
    slug: 'kak-sozdayutsya-komiksy',
    titleLines: ['Как создаются комиксы'],
    alt: 'Как создаются комиксы',
    heroImage: productionImg1,
    topic: 'production',
    items: [
      { align: 'left', image: articleImg1, html: '<b>От идеи к сценарию</b><br>Создание комикса начинается с концепции. Автор формулирует идею, разрабатывает персонажей и мир, затем пишет сценарий, определяя диалоги и действия каждой панели.' },
      { align: 'right', image: articleImg2, html: '<b>Раскадровка и макет</b><br>Сценарий превращается в раскадровку — черновой набросок панелей. Художник определяет композицию, ракурсы, переходы между кадрами.' },
      { align: 'full', image: articleImg3, html: '<b>Рисование и черчение</b><br>Финальные рисунки создаются карандашом или цифровыми инструментами. Важны пропорции, анатомия, динамика персонажей и детализация фонов.' },
      { align: 'left', image: articleImg4, html: '<b>Цвет и заливка</b><br>После черчения добавляется цвет. Это может быть традиционная заливка, цифровой колоринг или чёрно-белый стиль. Цвет создаёт атмосферу и направляет внимание читателя.' },
      { html: '<b>Шрифты и буквы</b><br>Текст — важная часть комикса. Шрифты должны соответствовать стилю, быть читаемыми и передавать эмоции персонажей. Правильная типографика завершает визуальный язык.' },
    ]
  }),
  defineArticle({
    slug: 'kak-narisovat-svoj-komiks',
    titleLines: ['Как нарисовать свой комикс'],
    alt: 'Как нарисовать свой комикс',
    heroImage: productionImg2,
    topic: 'production',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Начало с малого</b><br>Не пытайтесь сразу создать эпопею. Начните с короткой истории на 4-8 страниц. Это поможет понять процесс и избежать выгорания.' },
      { align: 'right', image: articleImg2, html: '<b>Разработка персонажей</b><br>Создайте уникальных персонажей с чёткими силуэтами и характерами. Проработайте их внешность, одежду, выражения лица.' },
      { html: '<b>Сюжет и структура</b><br>Каждая история нуждается в завязке, развитии, кульминации и развязке. Даже короткий комикс должен иметь драматическую арку.' },
      { html: '<b>Практика и анализ</b><br>Изучайте работы мастеров, анализируйте композицию и ритм. Рисуйте регулярно — навык развивается с практикой.' },
    ]
  }),
  defineArticle({
    slug: 'risovanie-dlya-nachinayushchikh',
    titleLines: ['Рисование для начинающих'],
    alt: 'Рисование для начинающих',
    heroImage: productionImg3,
    topic: 'production',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Базовые формы</b><br>Начните с простых геометрических форм — круг, овал, прямоугольник. Они основа для рисования любых объектов и персонажей.' },
      { align: 'right', image: articleImg2, html: '<b>Анатомия и пропорции</b><br>Изучите базовую анатомию человека. Понимание пропорций поможет создавать реалистичные и убедительные персонажи.' },
      { html: '<b>Тренировка руки</b><br>Регулярные упражнения — линии, круги, штриховка — развивают контроль и уверенность. Рисуйте каждый день, даже по 15 минут.' },
    ]
  }),
  defineArticle({
    slug: 'produmyvanie-syuzheta',
    titleLines: ['Продумывание сюжета'],
    alt: 'Продумывание сюжета',
    heroImage: productionImg4,
    topic: 'production',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Конфликт как двигатель</b><br>Каждая история нуждается в конфликте. Это может быть внешний конфликт с антагонистом или внутренняя борьба героя с самим собой.' },
      { align: 'right', image: articleImg2, html: '<b>Структура трёх актов</b><br>Завязка — представление мира и героя. Развитие — усложнение конфликта. Кульминация — высшая точка напряжения. Развязка — последствия.' },
      { align: 'full', image: articleImg3, html: '<b>Персонажи и мотивация</b><br>Персонажи должны иметь чёткие цели и мотивации. Их действия должны быть логичными и вытекать из характера. Это делает историю убедительной.' },
      { align: 'left', image: articleImg4, html: '<b>Темп и ритм</b><br>Чередуйте быстрые и медленные сцены. Это создаёт динамику и не даёт читателю устать. Паузы важны так же, как и экшен.' },
      { align: 'right', image: articleImg5, html: '<b>Диалоги и подтекст</b><br>Хорошие диалоги раскрывают персонажей и продвигают сюжет. Избегайте экспозиции — пусть персонажи говорят, а не объясняют.' },
      { html: '<b>Редактирование и переработка</b><br>Первый черновик редко идеален. Перечитывайте, вырезайте лишнее, уточняйте. Хороший сюжет — это результат множества правок.' },
    ]
  }),
  defineArticle({
    slug: 'struktura-sozdaniya',
    titleLines: ['Структура создания'],
    alt: 'Структура создания',
    heroImage: productionImg2,
    topic: 'production',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Композиция страницы</b><br>Страница комикса — это единая композиция. Панели должны направлять взгляд читателя, создавая ритм и emphasising ключевые моменты.' },
      { align: 'right', image: articleImg2, html: '<b>Типы панелей</b><br>Разные формы панелей создают разные эффекты. Большие панели для эпичности, маленькие для динамики, нестандартные формы для драматизма.' },
      { html: '<b>Переходы между панелями</b><br>Существует шесть основных типов переходов. Правильное использование помогает читателю следить за действием и создаёт нужный темп.' },
      { html: '<b>Баланс текста и изображения</b><br>Комикс — это баланс между словом и образом. Слишком много текста утомляет, слишком мало — оставляет непонятным. Ищите гармонию.' },
    ]
  }),
  defineArticle({
    slug: 'syuzhetnye-priemy',
    titleLines: ['Сюжетные приёмы'],
    alt: 'Сюжетные приёмы',
    heroImage: productionImg5,
    topic: 'production',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Флешбеки и флешфорварды</b><br>Перемещение во времени добавляет глубины. Флешбеки раскрывают прошлое, флешфорварды намекают на будущее. Используйте с умом.' },
      { align: 'right', image: articleImg2, html: '<b>Ненадёжный рассказчик</b><br>Когда история рассказывается с точки зрения персонажа, чьё восприятие искажено. Это создаёт интригу и заставляет читателя сомневаться.' },
      { align: 'full', image: articleImg3, html: '<b>Красная селёдка</b><br>Ложные улики и отвлекающие манёвры. Важный приём для детективов и триллеров, который держит читателя в напряжении.' },
      { align: 'left', image: articleImg4, html: '<b>Арка персонажа</b><br>Персонаж должен меняться в ходе истории. Арка — это путь трансформации от начального состояния к финальному через испытания.' },
      { html: '<b>Подтекст и символизм</b><br>История на поверхности и история глубинной. Символы, метафоры, недосказанность добавляют слои смысла и делают произведение многогранным.' },
    ]
  }),
  defineArticle({
    slug: 'sketshing',
    titleLines: ['Скетчинг'],
    alt: 'Скетчинг',
    heroImage: productionImg6,
    topic: 'production',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Что такое скетчинг</b><br>Скетчинг — это быстрые наброски для фиксации идей. Это не законченные работы, а инструмент исследования и планирования.' },
      { align: 'right', image: articleImg2, html: '<b>Материалы для скетчинга</b><br>Карандаши, маркеры, планшет — выбор зависит от стиля. Главное — скорость и свобода, не зацикливайтесь на деталях.' },
      { html: '<b>Упражнения для скетчинга</b><br>Рисуйте с таймером, набрасывайте жесты, практикуйте быстрые портреты. Это развивает наблюдательность и уверенность руки.' },
    ]
  }),
  defineArticle({
    slug: 'kak-risovat-cheloveka',
    titleLines: ['Как рисовать человека'],
    alt: 'Как рисовать человека',
    heroImage: productionImg7,
    topic: 'production',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Пропорции тела</b><br>Средняя фигура человека составляет около 7-8 голов. Это базовая пропорция, от которой можно отталкиваться при рисовании.' },
      { align: 'right', image: articleImg2, html: '<b>Конструкция фигуры</b><br>Представляйте тело как набор простых форм — цилиндры, сферы, коробки. Это помогает понять объём и перспективу.' },
      { html: '<b>Жест и движение</b><br>Жест — это основа динамичного рисунка. Линия действия проходит через всё тело и задаёт позу. Начинайте с жеста, затем добавляйте детали.' },
      { html: '<b>Практика анатомии</b><br>Изучайте мышцы и кости, но не заучивайте анатомию ради анатомии. Понимайте, как тело работает в движении.' },
    ]
  }),

  defineArticle({
    slug: 'zolotoj-vek-rozhdenie-supergeroya',
    titleLines: ['Золотой век: Рождение супергероя', 'как культурного феномена'],
    alt: 'Золотой век супергероя',
    heroImage: eraImg1,
    topic: 'history',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Начало эпохи</b><br>Золотой век комиксов начался с появления Супермена в 1938 году. Action Comics #1 стал сенсацией и запустил волну супергеройских комиксов.' },
      { align: 'right', image: articleImg2, html: '<b>Бэтмен и другие герои</b><br>За Суперменом последовали Бэтмен, Чудо-женщина, Капитан Америка. Каждый герой приносил уникальные элементы и расширял жанр.' },
      { align: 'full', image: articleImg3, html: '<b>Влияние Второй мировой</b><br>Война стала важной темой комиксов. Герои сражались с нацистами, пропаганда смешивалась с приключениями, патриотизм был на пике.' },
      { align: 'left', image: articleImg4, html: '<b>Стиль и эстетика</b><br>Иллюстрации были яркими, динамичными, иногда наивными. Истории были простыми, но увлекательными, с чётким разделением на добро и зло.' },
      { align: 'right', image: articleImg5, html: '<b>Конец эпохи</b><br>После войны интерес к супергероям упал. Золотой век сменился Серебряным, который принёс более сложные истории и персонажей.' },
      { html: '<b>Наследие</b><br>Золотой век заложил основы современной индустрии. Многие герои, созданные тогда, популярны до сих пор.' },
    ]
  }),
  defineArticle({
    slug: 'supermen-razdelil-istoriyu-komiksov',
    articleTitleLines: ['Как появление Супермена разделило историю комиксов на «до» и «после»'],
    titleLines: ['Как нарисовать свой комикс'],
    alt: 'Супермен и история комиксов',
    heroImage: eraImg2,
    topic: 'history',
    items: [
      { align: 'left', image: articleImg1, html: '<b>До Супермена</b><br>До 1938 года комиксы существовали, но были преимущественно юмористическими или приключенческими. Супергероев как жанра не существовало.' },
      { align: 'right', image: articleImg2, html: '<b>Создание Супермена</b><br>Джерри Сигел и Джо Шустер создали Супермена как ответ на Великую депрессию. Герой, который может всё, стал символом надежды.' },
      { align: 'full', image: articleImg3, html: '<b>Момент разделения</b><br>Успех Супермена был мгновенным и колоссальным. Это показало издателям, что супергерои — это прибыльный жанр, worthy инвестиций.' },
      { align: 'left', image: articleImg4, html: '<b>Волна подражаний</b><br>За Суперменом последовали десятки героев. Бэтмен, Флэш, Зелёный Фонарь — каждый пытался повторить успех.' },
      { html: '<b>Долгосрочное влияние</b><br>Супермен не просто разделил историю — он создал новую эру. Без него не было бы современной индустрии комиксов.' },
    ]
  }),
  defineArticle({
    slug: 'zabytye-geroi-zolotogo-veka',
    articleTitleLines: ['Забытые герои Золотого века'],
    titleLines: ['Рисование для начинающих'],
    alt: 'Забытые герои Золотого века',
    heroImage: eraImg3,
    topic: 'history',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Пластичный человек</b><br>Герой, способный менять форму. Был популярен в 40-х, но со временем забыт. Интересный концепт, который не выдержал конкуренции.' },
      { align: 'right', image: articleImg2, html: '<b>Синий Жук</b><br>Оригинальный герой Charlton Comics. Мог летать и обладал сверхсилой. Позже был перезапущен DC, но оригинал остался в тени.' },
      { html: '<b>Почему забыли</b><br>Некоторые герои были слишком специфичны, другие — неинтересны. Третьи просто не выдержали конкуренции с более харизматичными персонажами.' },
      { html: '<b>Возрождение</b><br>Некоторые забытые герои возвращаются в современных перезапусках. Это дань уважения истории и попытка спасти интересные концепты.' },
    ]
  }),
  defineArticle({
    slug: 'smert-v-komiksah',
    articleTitleLines: ['Как менялась смерть в комиксах'],
    titleLines: ['Продумывание сюжета'],
    alt: 'Смерть в комиксах',
    heroImage: eraImg4,
    topic: 'history',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Ранние комиксы</b><br>В Золотом веке смерть была редкой и часто временной. Герои умирали, но почти всегда возвращались. Это было для детей, и смерть была табу.' },
      { align: 'right', image: articleImg2, html: '<b>Смерть Гвен Стейси</b><br>Поворотный момент в 1973 году. Смерть Гвен показала, что в комиксах могут быть реальные последствия. Это изменило всё.' },
      { align: 'full', image: articleImg3, html: '<b>Смерть как сюжетный приём</b><br>В 80-90-х смерть стала инструментом драмы. «Кризис на бесконечных землях», «Смерть Супермена» — события, которые shook индустрию.' },
      { align: 'left', image: articleImg4, html: '<b>Проблема возвращений</b><br>Слишком частые возвращения обесценили смерть. Читатели перестали верить в окончательность потерь. Это серьёзная проблема индустрии.' },
      { align: 'right', image: articleImg5, html: '<b>Современный подход</b><br>Сегодня издатели пытаются найти баланс. Смерть должна иметь значение, но герои — это активы, которые нельзя терять навсегда.' },
      { html: '<b>Будущее смерти в комиксах</b><br>Возможно, решение в альтернативных вселенных и временных линиях. Это позволяет убивать персонажей без разрушения основной каноны.' },
    ]
  }),
  defineArticle({
    slug: 'zhenshchiny-v-komiks-industrii',
    articleTitleLines: ['Как женщины-авторы меняли комикс-индустрию'],
    titleLines: ['Структура создания'],
    alt: 'Женщины в комикс-индустрии',
    heroImage: eraImg5,
    topic: 'history',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Ранние годы</b><br>В Золотом веке женщины-авторы были редкостью, но существовали. Рамона Фридон, Нилли Брукс — пионерки, чей вклад часто забывают.' },
      { align: 'right', image: articleImg2, html: '<b>Вторая волна</b><br>В 70-х феминизм изменил индустрию. Появились сильные женские персонажи и авторы, которые рассказывали женские истории.' },
      { align: 'full', image: articleImg3, html: '<b>Современная эпоха</b><br>Сегодня женщины — ключевые фигуры в комиксах. Гейл Симон, Келли Сью ДеКонник, Марджори Лю — авторы, которые redefine жанр.' },
      { align: 'left', image: articleImg4, html: '<b>Новые голоса</b><br>Инди-комиксы и веб-комиксы открыли двери для множества женщин-авторов. Это разнообразие обогащает индустрию.' },
      { html: '<b>Вызовы и прогресс</b><br>Проблемы с равенством сохраняются, но прогресс очевиден. Женщины в комиксах — это не исключение, а норма.' },
    ]
  }),
  defineArticle({
    slug: 'dc-vernula-flasha',
    titleLines: ['Как DC вернула Флэша и запустила эру', 'научной фантастики'],
    alt: 'DC и Флэш',
    heroImage: eraImg6,
    topic: 'history',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Предыстория</b><br>К 1956 году супергерои потеряли популярность. DC искала способ возродить интерес и решила перезапустить старых героев.' },
      { align: 'right', image: articleImg2, html: '<b>Новый Флэш</b><br>Барри Аллен стал вторым Флэшем. Он был учёным, а не полицейским, и его истории были более научными и реалистичными.' },
      { align: 'full', image: articleImg3, html: '<b>Серебряный век</b><br>Успех нового Флэша запустил Серебряный век. DC перезапустила Зелёного Фонаря, Атома и других героев с научным уклоном.' },
      { html: '<b>Влияние на Marvel</b><br>Успех DC вдохновил Стэна Ли и Джека Кирби создать Фантастическую четвёрку. Это привело к расцвету Marvel и всей индустрии.' },
    ]
  }),
  defineArticle({
    slug: 'kapitan-amerika-propaganda',
    titleLines: ['Капитан Америка, пропаганда и патриотизм'],
    alt: 'Капитан Америка',
    heroImage: eraImg7,
    topic: 'history',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Создание героя</b><br>Капитан Америка был создан в 1941 году, до вступления США в войну. Это был политический акт — позиция против нацизма.' },
      { align: 'right', image: articleImg2, html: '<b>Пропаганда в комиксах</b><br>Ранние истории были откровенной пропагандой. Кап сражался с нацистами, японцами, любой угрозой Америке.' },
      { html: '<b>Послевоенная эволюция</b><br>После войны Капитан Америка потерял актуальность. Его пытались адаптировать, но герой был слишком привязан к своему времени.' },
      { html: '<b>Возрождение в 60-х</b><br>Марвел вернула Капитана как человека из прошлого, замороженного в льду. Это позволило сохранить его патриотизм, но добавить ностальгию и трагедию.' },
    ]
  }),
  defineArticle({
    slug: 'kak-poyavilis-mstiteli-era',
    titleLines: ['Как появились мстители'],
    alt: 'Как появились мстители',
    heroImage: eraImg8,
    topic: 'history',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Контекст 60-х</b><br>Успех Лиги Справедливости от DC заставил Marvel искать ответ. Стэн Ли и Джек Кирби создали команду из уже популярных героев.' },
      { align: 'right', image: articleImg2, html: '<b>Первый выпуск</b><br>The Avengers #1 вышел в 1963 году. Локи манипулировал Халком, чтобы заставить героев столкнуться, но они объединились против него.' },
      { align: 'full', image: articleImg3, html: '<b>Динамика команды</b><br>Мстители были не просто командой, а семьёй с конфликтами. Это делало истории интереснее и реалистичнее.' },
      { align: 'left', image: articleImg4, html: '<b>Эволюция состава</b><br>За десятилетия состав многократно менялся. Новые члены приносили свежие идеи и динамику.' },
      { html: '<b>Культурное влияние</b><br>Мстители стали символом сотрудничества и преодоления разногласий. Это resonate с читателями разных поколений.' },
    ]
  }),

  defineArticle({
    slug: 'dc-comics-evolyutsiya',
    articleTitleLines: ['Как DC Comics выросла из National Allied Publications'],
    titleLines: ['Как создаются комиксы'],
    alt: 'История DC Comics',
    heroImage: publisherImg1,
    topic: 'publisher',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Основание компании</b><br>DC Comics началась как National Allied Publications в 1934 году. Малcolm Wheeler-Nicholson создал компанию для издания комиксов, когда индустрия только зарождалась.' },
      { align: 'right', image: articleImg2, html: '<b>Появление Супермена</b><br>В 1938 году Action Comics #1 представил Супермена. Этот персонаж изменил всё — и компанию, и индустрию в целом.' },
      { align: 'full', image: articleImg3, html: '<b>Золотой век</b><br>Супермен, Бэтмен, Чудо-женщина — DC создала пантеон героев, которые стали культурными иконами. Это был расцвет компании.' },
      { align: 'left', image: articleImg4, html: '<b>Серебряный век</b><br>В 50-60-х DC перезапустила героев с научным уклоном. Флэш, Зелёный Фонарь — новые версии старых концептов.' },
      { align: 'right', image: articleImg5, html: '<b>Конкуренция с Marvel</b><br>В 60-х Marvel стала серьёзным конкурентом. DC ответила более сложными историями и экспериментами с форматом.' },
      { html: '<b>Современная эпоха</b><br>Сегодня DC — один из двух гигантов индустрии. Фильмы, сериалы, игры — вселенная DC продолжает расширяться.' },
    ]
  }),
  defineArticle({
    slug: 'marvel-universe-stan-lee',
    articleTitleLines: ['Как Стэн Ли, Джек Кирби и Стив Дитко создали вселенную Marvel'],
    titleLines: ['Как нарисовать свой комикс'],
    alt: 'Marvel Universe',
    heroImage: publisherImg2,
    topic: 'publisher',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Стэн Ли и начало</b><br>Стэн Ли пришёл в Marvel (тогда Timely) в 1939 году. К 60-м он стал редактором и искал новый подход к супергероям.' },
      { align: 'right', image: articleImg2, html: '<b>Фантастическая четвёрка</b><br>Первый успех нового Marvel. Команда с реальными проблемами и конфликтами. Это было ново и свежо.' },
      { align: 'full', image: articleImg3, html: '<b>Джек Кирби и космос</b><br>Кирби создал Тора, Халка, Асгард. Его визуальный стиль и космические масштабы определили Marvel.' },
      { align: 'left', image: articleImg4, html: '<b>Стив Дитко и психология</b><br>Дитко создал Человека-паука и Доктора Стрэнджа. Его герои были более психологически сложными и внутренними.' },
      { align: 'right', image: articleImg5, html: '<b>Расширение вселенной</b><br>Люди Икс, Мстители, Защитники — Marvel создала interconnected universe, где всё связано.' },
      { align: 'left', image: articleImg6, html: '<b>Культурное влияние</b><br>Marvel стала не просто издателем, а культурным феноменом. Фильмы MCU собрали миллиарды и сделали героев глобальными.' },
      { html: '<b>Наследие</b><br>Трио Ли-Кирби-Дитко создали фундамент, на котором стоит Marvel до сих пор. Их влияние невозможно переоценить.' },
    ]
  }),
  defineArticle({
    slug: 'walking-dead-i-paper-girls',
    articleTitleLines: ['Как «Ходячие мертвецы» и Paper Girls изменили современные комиксы'],
    titleLines: ['Рисование для начинающих'],
    alt: 'Walking Dead и Paper Girls',
    heroImage: publisherImg3,
    topic: 'publisher',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Walking Dead: начало</b><br>Роберт Киркман создал комикс о зомби-апокалипсисе в 2003 году. Это было не просто про выживание, а про человечность в нечеловеческих условиях.' },
      { align: 'right', image: articleImg2, html: '<b>Инновации Image Comics</b><br>Image позволила авторам сохранять права на персонажей. Это создало волну оригинальных работ, не привязанных к большим вселенным.' },
      { align: 'full', image: articleImg3, html: '<b>Paper Girls: новый подход</b><br>Брайан К. Вон и Клифф Чианг создали историю о девочках-курьерах в 80-х. Это смесь научной фантастики, ностальгии и coming-of-age.' },
      { align: 'left', image: articleImg4, html: '<b>Влияние на индустрию</b><br>Эти работы показали, что комиксы могут быть литературой. Они получили премии, экранизации, признание критиков.' },
      { html: '<b>Новая волна</b><br>Успех этих комиксов вдохновил издателей на более рискованные проекты. Комиксы стали местом для серьёзных историй.' },
    ]
  }),
  defineArticle({
    slug: 'franco-belgijskaya-shkola',
    articleTitleLines: ['Как франко-бельгийская школа сформировала современные комиксы'],
    titleLines: ['Продумывание сюжета'],
    alt: 'Франко-бельгийская школа',
    heroImage: publisherImg4,
    topic: 'publisher',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Эрже и Тинтин</b><br>Бельгийский художник создал стиль «ligne claire» — чёткая линия, плоские цвета. Это стало эталоном европейских комиксов.' },
      { align: 'right', image: articleImg2, html: '<b>Астерикс и Обеликс</b><br>Рене Госинни и Альбер Удерзо создали сатирическую комедию о древней Галлии. Это было весело, умно и культурно значимо.' },
      { html: '<b>Влияние на мир</b><br>Франко-бельгийская школа вдохновила авторов по всему миру. Её стиль и подход повлияли на японскую мангу и американские комиксы.' },
      { html: '<b>Современное состояние</b><br>Сегодня школа продолжает развиваться. Новые авторы сохраняют традиции, но добавляют современные темы и техники.' },
    ]
  }),
  defineArticle({
    slug: 'dark-horse-i-demon',
    articleTitleLines: ['Как один демон стал символом Dark Horse Comics'],
    titleLines: ['Структура создания'],
    alt: 'Dark Horse Comics',
    heroImage: publisherImg5,
    topic: 'publisher',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Основание компании</b><br>Dark Horse была основана Майком Ричардсоном в 1986 году. Начинала с лицензий, но быстро нашла свой путь.' },
      { align: 'right', image: articleImg2, html: '<b>Появление Хелбоя</b><br>Майк Миньола создал демона-героя в 1994 году. Тёмный, мрачный, но с сердцем — Хелбой стал символом издательства.' },
      { html: '<b>Уникальный подход</b><br>Dark Horse позволяла авторам творить без ограничений. Это привлекло таких мастеров, как Фрэнк Миллер и Джон Ромита-младший.' },
      { html: '<b>Лицензии и оригиналы</b><br>Компания балансирует между лицензиями (Звёздные войны, Чужой) и оригинальными работами. Это редкое равновесие в индустрии.' },
    ]
  }),
  defineArticle({
    slug: 'idw-cherepashki-ninja',
    articleTitleLines: ['Как IDW перезапустила Teenage Mutant Ninja Turtles'],
    titleLines: ['Сюжетные приёмы'],
    alt: 'IDW и черепашки',
    heroImage: publisherImg6,
    topic: 'publisher',
    items: [
      { align: 'left', image: articleImg1, html: '<b>История IDW</b><br>Idea and Design Works была основана в 1999 году. Начинала с лицензий, но постепенно развивала собственные проекты.' },
      { align: 'right', image: articleImg2, html: '<b>Приобретение TMNT</b><br>В 2011 году IDW получила права на Черепашек-ниндзя. Это был рискованный шаг, который окупился.' },
      { align: 'full', image: articleImg3, html: '<b>Новый подход к классике</b><br>IDW не просто переиздала старые истории. Томас Waltz создал новую вселенную, уважая оригинал, но добавляя глубину.' },
      { html: '<b>Успех перезапуска</b><br>Новые Черепашки получили признание критиков и фанатов. Это показало, что старые бренды можно обновлять с уважением.' },
    ]
  }),
  defineArticle({
    slug: 'shonen-jump-rejting',
    articleTitleLines: ['Weekly Shonen Jump: рейтинги и роль в индустрии манги'],
    titleLines: ['Скетчинг'],
    alt: 'Weekly Shonen Jump',
    heroImage: publisherImg7,
    topic: 'publisher',
    items: [
      { align: 'left', image: articleImg1, html: '<b>История журнала</b><br>Weekly Shonen Jump выходит с 1968 года. Это самый популярный журнал манги в Японии с тиражом в миллионы экземпляров.' },
      { align: 'right', image: articleImg2, html: '<b>Система рейтингов</b><br>Опросы читателей определяют судьбу серий. Низкие рейтинги означают отмену, высокие — продолжение. Это жесткая, но эффективная система.' },
      { align: 'full', image: articleImg3, html: '<b>Хиты журнала</b><br>One Piece, Наруто, Dragon Ball — все начались в Shonen Jump. Журнал запустил самые успешные манги в истории.' },
      { align: 'left', image: articleImg4, html: '<b>Влияние на индустрию</b><br>Успех Shonen Jump определил направление манги на десятилетия. Сёнэн-жанр доминирует благодаря этому журналу.' },
      { align: 'right', image: articleImg5, html: '<b>Глобальная экспансия</b><br>Сегодня Shonen Jump доступен по всему миру. Цифровые версии, simulpub — журнал адаптируется к новой эпохе.' },
      { html: '<b>Будущее</b><br>Несмотря на цифровизацию, печатный журнал остаётся важным. Shonen Jump продолжает находить новых авторов и хиты.' },
    ]
  }),
  defineArticle({
    slug: 'pechat-komiksov-v-rossii',
    articleTitleLines: ['Как печатают комиксы в России: производство и издательский процесс'],
    titleLines: ['Как рисовать человека'],
    alt: 'Печать комиксов в России',
    heroImage: publisherImg8,
    topic: 'publisher',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Рынок комиксов в России</b><br>Российский рынок комиксов растёт. Азбука, Комильфо, АСТ — основные издатели, которые привозят и печатают мангу и комиксы.' },
      { align: 'right', image: articleImg2, html: '<b>Процесс лицензирования</b><br>Издатели приобретают права у японских и американских компаний. Это сложный процесс переговоров и контрактов.' },
      { align: 'full', image: articleImg3, html: '<b>Перевод и адаптация</b><br>Комиксы нужно не просто перевести, но и адаптировать. Термины, культурные отсылки, шутки — всё требует локализации.' },
      { align: 'left', image: articleImg4, html: '<b>Печать и производство</b><br>Комиксы печатаются в типографиях России и за рубежом. Качество бумаги, переплёт, цвет — всё важно для финального продукта.' },
      { html: '<b>Вызовы индустрии</b><br>Пиратство, высокие цены лицензий, конкуренция с цифровыми версиями — российские издатели сталкиваются с множеством проблем.' },
    ]
  }),

  defineArticle({
    slug: 'kak-manga-stala-fenomenom',
    titleLines: ['Как манга стала феноменом,', 'покорившим весь мир'],
    alt: 'Манга как феномен',
    heroImage: regionImg1,
    topic: 'region',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Истоки манги</b><br>Манга имеет глубокие корни в японском искусстве. От древних свитков до современных журналов — эволюция длилась столетия.' },
      { align: 'right', image: articleImg2, html: '<b>Послевоенный бум</b><br>После Второй мировой войны манга пережила ренессанс. Осаму Тедзука, «бог манги», создал современные стандарты повествования.' },
      { align: 'full', image: articleImg3, html: '<b>Жанровое разнообразие</b><br>Манга охватывает все жанры — от сёнэн и сёдзё до сейнэн и хоррор. Каждый жанр имеет свою аудиторию и традиции.' },
      { align: 'left', image: articleImg4, html: '<b>Влияние на аниме</b><br>Манга и аниме тесно связаны. Многие популярные аниме начинались как манга, и наоборот. Это синергия усиливает оба медиа.' },
      { align: 'right', image: articleImg5, html: '<b>Глобальная экспансия</b><br>В 90-х манга начала завоевывать мир. Dragon Ball, Sailor Moon, Наруто — хиты, которые покорили международную аудиторию.' },
      { align: 'left', image: articleImg6, html: '<b>Цифровая эпоха</b><br>Сегодня манга доступна онлайн. Платформы вроде Crunchyroll Manga и Viz Media делают мангу доступной для всех.' },
      { align: 'right', image: articleImg7, html: '<b>Культурное влияние</b><br>Манга повлияла на глобальную поп-культуру. От моды до видеоигр — её влияние无处不在.' },
      { html: '<b>Будущее манги</b><br>Индустрия продолжает развиваться. Новые авторы, новые жанры, новые технологии — манга остаётся живым и развивающимся искусством.' },
    ]
  }),
  defineArticle({
    slug: 'sever-francii-i-komiksy',
    titleLines: ['Север Франции и индустриальные комиксы'],
    alt: 'Север Франции',
    heroImage: regionImg2,
    topic: 'region',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Индустриальное наследие</b><br>Север Франции был центром промышленности. Комиксы отражали жизнь рабочих, шахтёров, заводских городов.' },
      { align: 'right', image: articleImg2, html: '<b>Реализм и социальные темы</b><br>В отличие от приключенческих комиксов, северные авторы фокусировались на реальности. Тяжёлый труд, бедность, классовая борьба.' },
      { align: 'full', image: articleImg3, html: '<b>Ключевые авторы</b><br>Жан-Пьер Дюбуа, Жан Граттон — художники, которые документировали жизнь региона через комиксы.' },
      { html: '<b>Наследие</b><br>Сегодня это направление признаётся важной частью истории комиксов. Оно показывает, что графические романы могут быть серьёзным искусством.' },
    ]
  }),
  defineArticle({
    slug: 'kazahstan-i-centralnaya-aziya',
    titleLines: ['Казахстан и Центральная Азия'],
    alt: 'Казахстан и Центральная Азия',
    heroImage: regionImg3,
    topic: 'region',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Традиции и современность</b><br>Центральная Азия имеет богатые традиции визуального искусства. Комиксы здесь — это синтез древних мотивов и современных форм.' },
      { align: 'right', image: articleImg2, html: '<b>Казахстанская сцена</b><br>В Казахстане развивается уникальная комикс-культура. Авторы используют национальные темы и языки.' },
      { align: 'full', image: articleImg3, html: '<b>Культурный обмен</b><br>Расположение на Шёлковом пути создаёт уникальный культурный микс. Влияния Востока и Запада переплетаются.' },
      { align: 'left', image: articleImg4, html: '<b>Вызовы и возможности</b><br>Маленький рынок, но растущий интерес. Авторы ищут способы достичь аудитории внутри и вне региона.' },
      { html: '<b>Будущее</b><br>Центральноазиатские комиксы — это emerging сцена с большим потенциалом. Уникальные голоса и истории ждут своего открытия.' },
    ]
  }),
  defineArticle({
    slug: 'vostochnogermanskie-komiksy',
    titleLines: ['Восточногерманские комиксы'],
    alt: 'Восточногерманские комиксы',
    heroImage: regionImg4,
    topic: 'region',
    items: [
      { align: 'left', image: articleImg1, html: '<b>ГДР и комиксы</b><br>В Восточной Германии комиксы развивались в изоляции от Запада. Это создало уникальный стиль и тематику.' },
      { align: 'right', image: articleImg2, html: '<b>Социалистический реализм</b><br>Многие комиксы следовали идеологии. Герои-рабочие, антифашистские темы — обязательные элементы.' },
      { html: '<b>Mosaik и другие</b><br>Mosaik — самый известный восточногерманский комикс. Приключения Digedags были популярны и политически корректны.' },
      { html: '<b>Наследие</b><br>После объединения Германии восточные комиксы были забыты, но сейчас интерес к ним возрождается как к историческому артефакту.' },
    ]
  }),
  defineArticle({
    slug: 'vostochnoevropejskie-komiksy',
    titleLines: ['Как восточноевропейские комиксы', 'пережили железный занавес'],
    alt: 'Восточноевропейские комиксы',
    heroImage: regionImg5,
    topic: 'region',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Железный занавес</b><br>Восточная Европа была изолирована от западных комиксов. Авторы создавали свои традиции в условиях цензуры.' },
      { align: 'right', image: articleImg2, html: '<b>Польша и Чехия</b><br>Эти страны имели сильные комикс-сцены. Сатирические журналы, политические карикатуры — популярные форматы.' },
      { align: 'full', image: articleImg3, html: '<b>Югославия</b><br>Югославия была более открыта западному влиянию. Здесь развивались и супергерои, и авторские комиксы.' },
      { align: 'left', image: articleImg4, html: '<b>Падение Берлинской стены</b><br>После 1989 года восточноевропейские комиксы столкнулись с западной конкуренцией. Многие издательства закрылись.' },
      { align: 'right', image: articleImg5, html: '<b>Возрождение</b><br>В 2000-х начался ренессанс. Новые авторы, фестивали, издательства — сцена оживает.' },
      { html: '<b>Уникальный голос</b><br>Восточноевропейские комиксы предлагают уникальную перспективу. История, политика, культура — всё это отражается в работах авторов.' },
    ]
  }),
  defineArticle({
    slug: 'manhua-cenzura-i-rynok',
    titleLines: ['Маньхуа, цензура и огромный рынок,', 'о котором вы ничего не знаете'],
    alt: 'Маньхуа и цензура',
    heroImage: regionImg6,
    topic: 'region',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Что такое маньхуа</b><br>Маньхуа — китайские комиксы. Термин охватывает работы из материкового Китая, Гонконга и Тайваня.' },
      { align: 'right', image: articleImg2, html: '<b>Историческое развитие</b><br>Маньхуа имеет долгую историю, но современная форма сформировалась под влиянием японской манги и западных комиксов.' },
      { align: 'full', image: articleImg3, html: '<b>Цифровая революция</b><br>Китайские платформы вроде Tencent Comics и Bilibili создали огромный онлайн-рынок. Маньхуа читают миллионы.' },
      { align: 'left', image: articleImg4, html: '<b>Цензура и ограничения</b><br>Китайская цензура влияет на контент. Политика, насилие, ЛГБТ-темы — всё регулируется государством.' },
      { align: 'right', image: articleImg5, html: '<b>Адаптации</b><br>Маньхуа активно адаптируются в аниме, дорамы, игры. Это создаёт дополнительные потоки дохода и глобальное признание.' },
      { align: 'left', image: articleImg6, html: '<b>Глобальная экспансия</b><br>Платформы вроде Webtoon делают маньхуа доступной международной аудитории. Жанры вроде cultivation и isekai становятся популярными.' },
      { html: '<b>Будущее</b><br>Китайский рынок продолжает расти. Несмотря на цензуру, маньхуа становится глобальным феноменом, конкурируя с мангой и западными комиксами.' },
    ]
  }),
  defineArticle({
    slug: 'shvejcariya-i-gollandiya',
    titleLines: ['Швейцария и Голландия'],
    alt: 'Швейцария и Голландия',
    heroImage: regionImg7,
    topic: 'region',
    items: [
      { align: 'left', image: articleImg1, html: '<b>Швейцарская школа</b><br>Швейцария известна качественными комиксами. Derib, Zep — авторы, которые создали уникальный стиль.' },
      { align: 'right', image: articleImg2, html: '<b>Голландская традиция</b><br>Нидерланды имеют богатую историю комиксов. Marten Toonder, Dick Matena — мастера графического повествования.' },
      { html: '<b>Влияние франко-бельгийской школы</b><br>Обе страны находятся под влиянием французско-бельгийской традиции, но развивают собственные направления.' },
      { html: '<b>Современное состояние</b><br>Сегодня обе страны продолжают производить качественные комиксы. Фестивали, издательства, новые авторы поддерживают сцену.' },
    ]
  }),
  defineArticle({
    slug: 'sibir-i-dalnij-vostok',
    titleLines: ['Сибирь и Дальний Восток'],
    alt: 'Сибирь и Дальний Восток',
    heroImage: regionImg8,
    topic: 'region',
    items: [
      { align: 'left', image: articleImg1, html: '<b>География и культура</b><br>Сибирь и Дальний Восток — огромные территории с уникальными культурами. Комиксы здесь отражают эту специфику.' },
      { align: 'right', image: articleImg2, html: '<b>Российская комикс-сцена</b><br>Российские авторы из этих регионов создают работы о местной жизни. Природа, климат, история — ключевые темы.' },
      { align: 'full', image: articleImg3, html: '<b>Коренные народы</b><br>Комиксы о культуре коренных народов Сибири становятся важным средством сохранения и передачи традиций.' },
      { align: 'left', image: articleImg4, html: '<b>Вызовы</b><br>Отдалённость, малая аудитория, ограниченные ресурсы — авторы сталкиваются с множеством проблем.' },
      { html: '<b>Потенциал</b><br>Уникальные истории и перспективы делают сибирские комиксы перспективным направлением. Это emerging сцена с большим будущим.' },
    ]
  }),
];

export const articles = Object.fromEntries(
  articleDefinitions.map((article) => [article.slug, article])
);

export const DEFAULT_ARTICLE_SLUG = 'top-10-anime-na-odin-vecher';

export function getArticle(slug) {
  return articles[slug] ?? articles[DEFAULT_ARTICLE_SLUG];
}

export function resolveRelatedArticles(article) {
  const slugs = article.relatedSlugs?.length
    ? article.relatedSlugs
    : Object.keys(articles).filter((s) => s !== article.slug).slice(0, 2);

  return slugs.map((s) => articles[s]).filter(Boolean).slice(0, 2);
}
