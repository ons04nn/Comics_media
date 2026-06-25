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

const DATE = '06.03';

function defineArticle(meta) {
  const titleLines = meta.articleTitleLines ?? meta.titleLines;
  const content = meta.customContent ?? generateArticleContent({
    slug: meta.slug,
    titleLines,
    alt: meta.alt,
    topic: meta.topic,
  });

  return {
    slug: meta.slug,
    titleLines,
    date: meta.date ?? DATE,
    heroImage: meta.heroImage,
    heroAlt: meta.alt,
    intro: content.intro,
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

  defineArticle({ slug: 'one-piece-istoriya-kotoraya-pokorila-mir', titleLines: ['One Piece, история, которая покорила мир'], alt: 'One Piece', heroImage: homeOnePiece, topic: 'manga' }),
  defineArticle({ slug: 'batman-evolyutsiya-personazha', titleLines: ['Бэтмен — эволюция персонажа'], alt: 'Бэтмен', heroImage: homeBatman, topic: 'comics' }),
  defineArticle({ slug: 'prostokvashnyj-gorod-grehov', titleLines: ['Простоквашный город грехов'], alt: 'Простоквашный Город Грехов', heroImage: homeProstokvashino, topic: 'comics' }),
  defineArticle({ slug: 'mstiteli-istoriya-personazhej', titleLines: ['Мстители, история известных персонажей'], alt: 'Мстители', heroImage: homeAvengers, topic: 'comics' }),
  defineArticle({ slug: 'priklyucheniya-tintina', titleLines: ['Приключения Тинтина'], alt: 'Приключения Тинтина', heroImage: homeTintin, topic: 'comics' }),
  defineArticle({ slug: 'tetrad-smerti-manga-protiv-anime', titleLines: ['Тетрадь смерти — манга против аниме'], alt: 'Тетрадь Смерти', heroImage: homeDeathNote, topic: 'manga' }),
  defineArticle({ slug: 'gorod-grehov-do-ekranizacii', titleLines: ['Город грехов до экранизации'], alt: 'Город Грехов', heroImage: homeSinCity, topic: 'comics' }),
  defineArticle({ slug: 'ataka-titanov', titleLines: ['Атака Титанов'], alt: 'Атака Титанов', heroImage: homeAot, topic: 'manga' }),
  defineArticle({ slug: 'chelovek-pauk-70-h', titleLines: ['Человек-Паук 70-х'], alt: 'Человек-паук 70-х', heroImage: homeSpiderMan, topic: 'comics' }),
  defineArticle({ slug: 'kak-poyavilis-mstiteli', titleLines: ['Как появились Мстители'], alt: 'Как появились Мстители', heroImage: homeHowAvengers, topic: 'comics' }),

  defineArticle({ slug: 'kak-sozdayutsya-komiksy', titleLines: ['Как создаются комиксы'], alt: 'Как создаются комиксы', heroImage: productionImg1, topic: 'production' }),
  defineArticle({ slug: 'kak-narisovat-svoj-komiks', titleLines: ['Как нарисовать свой комикс'], alt: 'Как нарисовать свой комикс', heroImage: productionImg2, topic: 'production' }),
  defineArticle({ slug: 'risovanie-dlya-nachinayushchikh', titleLines: ['Рисование для начинающих'], alt: 'Рисование для начинающих', heroImage: productionImg3, topic: 'production' }),
  defineArticle({ slug: 'produmyvanie-syuzheta', titleLines: ['Продумывание сюжета'], alt: 'Продумывание сюжета', heroImage: productionImg4, topic: 'production' }),
  defineArticle({ slug: 'struktura-sozdaniya', titleLines: ['Структура создания'], alt: 'Структура создания', heroImage: productionImg2, topic: 'production' }),
  defineArticle({ slug: 'syuzhetnye-priemy', titleLines: ['Сюжетные приёмы'], alt: 'Сюжетные приёмы', heroImage: productionImg5, topic: 'production' }),
  defineArticle({ slug: 'sketshing', titleLines: ['Скетчинг'], alt: 'Скетчинг', heroImage: productionImg6, topic: 'production' }),
  defineArticle({ slug: 'kak-risovat-cheloveka', titleLines: ['Как рисовать человека'], alt: 'Как рисовать человека', heroImage: productionImg7, topic: 'production' }),

  defineArticle({ slug: 'zolotoj-vek-rozhdenie-supergeroya', titleLines: ['Золотой век: Рождение супергероя', 'как культурного феномена'], alt: 'Золотой век супергероя', heroImage: eraImg1, topic: 'history' }),
  defineArticle({ slug: 'supermen-razdelil-istoriyu-komiksov', articleTitleLines: ['Как появление Супермена разделило историю комиксов на «до» и «после»'], titleLines: ['Как нарисовать свой комикс'], alt: 'Супермен и история комиксов', heroImage: eraImg2, topic: 'history' }),
  defineArticle({ slug: 'zabytye-geroi-zolotogo-veka', articleTitleLines: ['Забытые герои Золотого века'], titleLines: ['Рисование для начинающих'], alt: 'Забытые герои Золотого века', heroImage: eraImg3, topic: 'history' }),
  defineArticle({ slug: 'smert-v-komiksah', articleTitleLines: ['Как менялась смерть в комиксах'], titleLines: ['Продумывание сюжета'], alt: 'Смерть в комиксах', heroImage: eraImg4, topic: 'history' }),
  defineArticle({ slug: 'zhenshchiny-v-komiks-industrii', articleTitleLines: ['Как женщины-авторы меняли комикс-индустрию'], titleLines: ['Структура создания'], alt: 'Женщины в комикс-индустрии', heroImage: eraImg5, topic: 'history' }),
  defineArticle({ slug: 'dc-vernula-flasha', titleLines: ['Как DC вернула Флэша и запустила эру', 'научной фантастики'], alt: 'DC и Флэш', heroImage: eraImg6, topic: 'history' }),
  defineArticle({ slug: 'kapitan-amerika-propaganda', titleLines: ['Капитан Америка, пропаганда и патриотизм'], alt: 'Капитан Америка', heroImage: eraImg7, topic: 'history' }),
  defineArticle({ slug: 'kak-poyavilis-mstiteli-era', titleLines: ['Как появились мстители'], alt: 'Как появились мстители', heroImage: eraImg8, topic: 'history' }),

  defineArticle({ slug: 'dc-comics-evolyutsiya', articleTitleLines: ['Как DC Comics выросла из National Allied Publications'], titleLines: ['Как создаются комиксы'], alt: 'История DC Comics', heroImage: publisherImg1, topic: 'publisher' }),
  defineArticle({ slug: 'marvel-universe-stan-lee', articleTitleLines: ['Как Стэн Ли, Джек Кирби и Стив Дитко создали вселенную Marvel'], titleLines: ['Как нарисовать свой комикс'], alt: 'Marvel Universe', heroImage: publisherImg2, topic: 'publisher' }),
  defineArticle({ slug: 'walking-dead-i-paper-girls', articleTitleLines: ['Как «Ходячие мертвецы» и Paper Girls изменили современные комиксы'], titleLines: ['Рисование для начинающих'], alt: 'Walking Dead и Paper Girls', heroImage: publisherImg3, topic: 'publisher' }),
  defineArticle({ slug: 'franco-belgijskaya-shkola', articleTitleLines: ['Как франко-бельгийская школа сформировала современные комиксы'], titleLines: ['Продумывание сюжета'], alt: 'Франко-бельгийская школа', heroImage: publisherImg4, topic: 'publisher' }),
  defineArticle({ slug: 'dark-horse-i-demon', articleTitleLines: ['Как один демон стал символом Dark Horse Comics'], titleLines: ['Структура создания'], alt: 'Dark Horse Comics', heroImage: publisherImg5, topic: 'publisher' }),
  defineArticle({ slug: 'idw-cherepashki-ninja', articleTitleLines: ['Как IDW перезапустила Teenage Mutant Ninja Turtles'], titleLines: ['Сюжетные приёмы'], alt: 'IDW и черепашки', heroImage: publisherImg6, topic: 'publisher' }),
  defineArticle({ slug: 'shonen-jump-rejting', articleTitleLines: ['Weekly Shonen Jump: рейтинги и роль в индустрии манги'], titleLines: ['Скетчинг'], alt: 'Weekly Shonen Jump', heroImage: publisherImg7, topic: 'publisher' }),
  defineArticle({ slug: 'pechat-komiksov-v-rossii', articleTitleLines: ['Как печатают комиксы в России: производство и издательский процесс'], titleLines: ['Как рисовать человека'], alt: 'Печать комиксов в России', heroImage: publisherImg8, topic: 'publisher' }),

  defineArticle({ slug: 'kak-manga-stala-fenomenom', titleLines: ['Как манга стала феноменом,', 'покорившим весь мир'], alt: 'Манга как феномен', heroImage: regionImg1, topic: 'region' }),
  defineArticle({ slug: 'sever-francii-i-komiksy', titleLines: ['Север Франции и индустриальные комиксы'], alt: 'Север Франции', heroImage: regionImg2, topic: 'region' }),
  defineArticle({ slug: 'kazahstan-i-centralnaya-aziya', titleLines: ['Казахстан и Центральная Азия'], alt: 'Казахстан и Центральная Азия', heroImage: regionImg3, topic: 'region' }),
  defineArticle({ slug: 'vostochnogermanskie-komiksy', titleLines: ['Восточногерманские комиксы'], alt: 'Восточногерманские комиксы', heroImage: regionImg4, topic: 'region' }),
  defineArticle({ slug: 'vostochnoevropejskie-komiksy', titleLines: ['Как восточноевропейские комиксы', 'пережили железный занавес'], alt: 'Восточноевропейские комиксы', heroImage: regionImg5, topic: 'region' }),
  defineArticle({ slug: 'manhua-cenzura-i-rynok', titleLines: ['Маньхуа, цензура и огромный рынок,', 'о котором вы ничего не знаете'], alt: 'Маньхуа и цензура', heroImage: regionImg6, topic: 'region' }),
  defineArticle({ slug: 'shvejcariya-i-gollandiya', titleLines: ['Швейцария и Голландия'], alt: 'Швейцария и Голландия', heroImage: regionImg7, topic: 'region' }),
  defineArticle({ slug: 'sibir-i-dalnij-vostok', titleLines: ['Сибирь и Дальний Восток'], alt: 'Сибирь и Дальний Восток', heroImage: regionImg8, topic: 'region' }),
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
