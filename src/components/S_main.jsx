  import { getArticleUrl } from '../utils/articleSlug';

  import placeholderFeatured1 from '../assets/images/home/one-piece-the-story-that-conquered-the-world.jpg';
  import placeholderFeatured2 from '../assets/images/home/batman-character-evolution.jpg';

  import placeholderProstokvashino           from '../assets/images/home/prostokvashino/prostokvashino-cin-city.jpg';
  import prostokvashinoMatroskin              from '../assets/images/home/prostokvashino/prostokvashino_matroskin.jpg';
  import prostokvashinoGalchonok              from '../assets/images/home/prostokvashino/prostokvashino_galchonok.jpg';

  import placeholderAvengers                 from '../assets/images/home/avengers-famous-characters-history.jpg';

  import placeholderTintin                   from '../assets/images/home/tintin/the-adventures-of-tintin.jpg';
  import tintinPoster                        from '../assets/images/home/tintin/tintin-poster.jpg';
  import tintinCapitan                       from '../assets/images/home/tintin/tintin_and_capitan.jpg';

  import placeholderDeathNote                from '../assets/images/home/death-note-manga-vs-anime.jpg';
  import placeholderSinCity                  from '../assets/images/home/sin-city-before-adaptation.jpg';

  import placeholderAot                      from '../assets/images/home/attack-on-titan/attack-on-titan.jpg';
  import aotAdd1                             from '../assets/images/home/attack-on-titan/attack-on-titan-add.jpg';
  import aotAdd2                             from '../assets/images/home/attack-on-titan/attack-on-titan-add2.jpg';

  import placeholderSpiderMan                from '../assets/images/home/spider-man-1970s.jpg';
  import placeholderHowAvengersFormed        from '../assets/images/home/how-the-avengers-formed.jpg';

  import placeholderContestBg                from '../assets/images/home/competition/competition.jpg';
  import placeholderContestSide              from '../assets/images/home/competition/competition_2.jpg';

  import placeholderProductionBg             from '../assets/images/home/production/production.jpg';
  import productionAdd1                      from '../assets/images/home/production/production-add1.jpg';
  import productionAdd2                      from '../assets/images/home/production/production-add2.jpg';

  export default function HomePageMain() {
    return (
      <main id="content" className="page">
    <section id="featured" className="container section">
          <div className="placeholders placeholders--split">
            <a href={getArticleUrl('one-piece-istoriya-kotoraya-pokorila-mir')} className="placeholder placeholder--split-small small-large" aria-hidden="true">
              <img src={placeholderFeatured1} alt="One Piece, история, которая покорила мир" className="placeholder-image" />
              <div className="placeholder-content">
                <div className="placeholder-date">12.05</div>
                <h2 className="placeholder-title">One Piece, история, которая покорила мир</h2>
              </div>
            </a>
            <a href={getArticleUrl('batman-evolyutsiya-personazha')} className="placeholder placeholder--split-large large-small" aria-hidden="true">
              <img src={placeholderFeatured2} alt="Бэтмен — эволюция персонажа" className="placeholder-image" />
              <div className="placeholder-content">
                <div className="placeholder-date">18.06</div>
                <h2 className="placeholder-title">Бэтмен — эволюция персонажа</h2>
              </div>
            </a>
          </div>
        </section>

        <section id="universes" className="container section">
          <div className="section-header">
            <h2 className="h2">Вселенные</h2>
            <a href="#" className="see-all">Смотреть все →</a>
          </div>
          <div className="placeholders">
            <a href={getArticleUrl('prostokvashnyj-gorod-grehov')} className="placeholder-wrapper">
              <div className="placeholder placeholder-with-overlay" aria-hidden="true">
                <img src={placeholderProstokvashino} alt="Простоквашный Город Грехов" className="placeholder-image" />
                <div className="prostokvashino-quote">
                  Прошлое нельзя<br />
                  забывать, его стоит<br />
                  помнить и молиться,<br />
                  чтобы оно<br />
                  не повторилось
                </div>
                <div className="placeholder-content">
                  <div className="placeholder-date">23.08</div>
                  <h2 className="placeholder-title">Простоквашино — город грехов</h2>
                </div>
              </div>
              <div className="overlay-stack" data-for="prostokvashino">
                <img src={prostokvashinoMatroskin} alt="" className="overlay-img overlay-rotate-right" />
                <img src={prostokvashinoGalchonok} alt="" className="overlay-img overlay-rotate-left" />
              </div>
            </a>

            <a href={getArticleUrl('mstiteli-istoriya-personazhej')} className="placeholder" aria-hidden="true">
              <img src={placeholderAvengers} alt="Мстители" className="placeholder-image" />
              <div className="placeholder-content">
                <div className="placeholder-date">05.09</div>
                <h2 className="placeholder-title">Мстители, история известных персонажей</h2>
              </div>
            </a>

            <a href={getArticleUrl('priklyucheniya-tintina')} className="placeholder-wrapper">
              <div className="placeholder placeholder-with-overlay" aria-hidden="true">
                <img src={placeholderTintin} alt="Приключения Тинтина" className="placeholder-image" />
                <div className="tintin-quote">
                  Один из популярнейших<br />
                  европейских комиксов<br />
                  XX века. Его автор —<br />
                  бельгийский художник‑самоучка Эрже
                </div>
                <div className="placeholder-content">
                  <div className="placeholder-date">14.11</div>
                  <h2 className="placeholder-title">Приключения Тинтина</h2>
                </div>
              </div>
              <div className="overlay-stack" data-for="tintin">
                <img src={tintinPoster} alt="" className="overlay-img overlay-rotate-right" />
                <img src={tintinCapitan} alt="" className="overlay-img overlay-rotate-left" />
              </div>
            </a>
          </div>
        </section>

        <section id="new" className="container section">
          <h2 className="h2">Новое</h2>
          <div className="placeholders placeholders--split">
            <a href={getArticleUrl('tetrad-smerti-manga-protiv-anime')} className="placeholder placeholder--split-small small-large" aria-hidden="true">
              <img src={placeholderDeathNote} alt="Тетрадь Смерти" className="placeholder-image" />
              <div className="placeholder-content">
                <div className="placeholder-date">27.02</div>
                <h2 className="placeholder-title">Тетрадь смерти — манга против аниме</h2>
              </div>
            </a>
            <a href={getArticleUrl('gorod-grehov-do-ekranizacii')} className="placeholder placeholder--split-large large-small" aria-hidden="true">
              <img src={placeholderSinCity} alt="Город Грехов до Экранизации" className="placeholder-image" />
              <div className="placeholder-content">
                <div className="placeholder-date">03.04</div>
                <h2 className="placeholder-title">Город грехов до экранизации</h2>
              </div>
            </a>
          </div>

          <div className="placeholders">
            <a href={getArticleUrl('ataka-titanov')} className="placeholder-wrapper">
              <div className="placeholder placeholder-with-overlay" aria-hidden="true">
                <img src={placeholderAot} alt="Атака Титанов" className="placeholder-image" />
                <div className="titan-quote">
                  Глубокая философская история<br />
                  о борьбе за свободу, цене<br />
                  идеалов, власти, долге,<br />
                  цикличности истории<br />
                  и природе человечества
                </div>
                <div className="placeholder-content">
                  <div className="placeholder-date">19.10</div>
                  <h2 className="placeholder-title">Атака Титанов</h2>
                </div>
              </div>
              <div className="overlay-stack" data-for="titan">
                <img src={aotAdd1} alt="" className="overlay-img overlay-rotate-right" />
                <img src={aotAdd2} alt="" className="overlay-img overlay-rotate-left" />
              </div>
            </a>
          </div>

          <div className="placeholders placeholders--split">
            <a href={getArticleUrl('chelovek-pauk-70-h')} className="placeholder placeholder--split-large large-small" aria-hidden="true">
              <img src={placeholderSpiderMan} alt="Человек-паук 70-х" className="placeholder-image" />
              <div className="placeholder-content">
                <div className="placeholder-date">07.01</div>
                <h2 className="placeholder-title">Человек-Паук 70-х</h2>
              </div>
            </a>
            <a href={getArticleUrl('kak-poyavilis-mstiteli')} className="placeholder placeholder--split-small small-large" aria-hidden="true">
              <img src={placeholderHowAvengersFormed} alt="Как появились Мстители" className="placeholder-image" />
              <div className="placeholder-content">
                <div className="placeholder-date">22.03</div>
                <h2 className="placeholder-title">Как появились Мстители</h2>
              </div>
            </a>
          </div>
        </section>

        <section id="contest" className="container section">
          <h2 className="h2">Конкурс</h2>
          <div className="contest-container">
            <div className="contest-main">
              <div className="placeholder placeholder--split-large contest-title-white" aria-hidden="true">
                <img src={placeholderContestBg} alt="Конкурс" className="placeholder-image" />
                <div className="placeholder-content">
                  <h2 className="placeholder-title">
                    Мы ищем талантливых людей,<br />
                    которые умеют<br />
                    рисовать комиксы
                  </h2>
                </div>
              </div>
            </div>
            <div className="contest-sidebar">
              <div className="contest-image-wrapper" aria-hidden="true">
                <img src={placeholderContestSide} alt="Конкурс" className="contest-image" />
              </div>
              <button className="contest-button">Принять участие</button>
            </div>
          </div>
        </section>

        <section className="container section">
          <div className="section-header">
            <h2 className="h2">Производство</h2>
            <a href="./production.html" className="see-all">Узнать об этапах производства →</a>
          </div>
          <div className="placeholders">
            <a href="./production.html" className="placeholder-wrapper">
              <div className="placeholder placeholder-with-overlay contest-title-white" aria-hidden="true">
                <img src={placeholderProductionBg} alt="Производство" className="placeholder-image" />
                <div className="placeholder-content">
                  <h2 className="placeholder-title">
                    Узнай обо всех этапах<br />
                    производства комиксов<br />
                    и аниме прямо сейчас
                  </h2>
                </div>
              </div>
              <div className="overlay-stack" data-for="production">
                <img src={productionAdd1} alt="" className="overlay-img overlay-rotate-right" />
                <img src={productionAdd2} alt="" className="overlay-img overlay-rotate-left" />
              </div>
            </a>
          </div>
        </section>
      </main>
    );
  }