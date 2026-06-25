import { getArticleUrl } from '../utils/articleSlug';
import imgContestBg from '../assets/images/home/competition/competition.jpg';
import imgContestSide from '../assets/images/home/competition/competition_2.jpg';

function CardTitle({ lines }) {
  return lines.map((line, index) => (
    <span key={index}>
      {index > 0 && <br />}
      {line}
    </span>
  ));
}

function CardContent({ date, titleLines }) {
  return (
    <div className="placeholder-content">
      {date && <div className="placeholder-date">{date}</div>}
      <h2 className="placeholder-title">
        <CardTitle lines={titleLines} />
      </h2>
    </div>
  );
}

function OverlayCard({ item }) {
  const card = (
    <>
      <div className="placeholder placeholder-with-overlay" aria-hidden="true">
        <img src={item.image} alt={item.alt} className="placeholder-image" />
        {item.quote && (
          <div className="titan-quote">
            Ключевые сюжетные приёмы,<br />
            коими мастера повествования<br />
            держат читателя в напряжении
          </div>
        )}
        <CardContent date={item.date} titleLines={item.titleLines} />
      </div>
      <div className="overlay-stack" data-for={item.overlayKey}>
        <img src={item.overlays[0]} alt="" className="overlay-img overlay-rotate-right" />
        <img src={item.overlays[1]} alt="" className="overlay-img overlay-rotate-left" />
      </div>
    </>
  );

  if (item.slug) {
    return (
      <a href={getArticleUrl(item.slug)} className="placeholder-wrapper">
        {card}
      </a>
    );
  }

  return <div className="placeholder-wrapper">{card}</div>;
}

function LinkCard({ item, className = 'placeholder' }) {
  return (
    <a href={item.slug ? getArticleUrl(item.slug) : item.href} className={className} aria-hidden="true">
      <img src={item.image} alt={item.alt} className="placeholder-image" />
      <CardContent date={item.date} titleLines={item.titleLines} />
    </a>
  );
}

export default function S_main_category({ page }) {
  const splitClass = {
    'small-large': 'placeholder placeholder--split-small small-large',
    'large-small': 'placeholder placeholder--split-large large-small',
  };

  return (
    <main id="content" className="page">
      <div className="container breadcrumbs">
        <div className="breadcrumbs-list">
          <a href="./index.html">Главная</a>
          <span className="breadcrumb-separator">/</span>
          <a href={page.breadcrumbHref}>{page.breadcrumbLabel}</a>
        </div>
      </div>

      <section id="universes" className="container section">
        <div className="section-header">
          <h2 className="h2">{page.title}</h2>
        </div>
        <div className="placeholders">
          {page.featured.map((item, index) =>
            item.type === 'overlay' ? (
              <OverlayCard key={index} item={item} />
            ) : (
              <LinkCard key={index} item={item} />
            )
          )}
        </div>
      </section>

      <section id="new" className="container section">
        <h2 className="h2">Мы также рекомендуем</h2>
        <div className="placeholders placeholders--split">
          {page.recommended.splitTop.map((item, index) => (
            <LinkCard key={index} item={item} className={splitClass[item.split]} />
          ))}
        </div>
        <div className="placeholders">
          <OverlayCard item={{ ...page.recommended.overlay, quote: true }} />
        </div>
        <div className="placeholders placeholders--split">
          {page.recommended.splitBottom.map((item, index) => (
            <LinkCard key={index} item={item} className={splitClass[item.split]} />
          ))}
        </div>
      </section>

      <section id="contest" className="container section">
        <h2 className="h2">Конкурс</h2>
        <div className="contest-container">
          <div className="contest-main">
            <div className="placeholder placeholder--split-large contest-title-white" aria-hidden="true">
              <img src={imgContestBg} alt="Конкурс" className="placeholder-image" />
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
              <img src={imgContestSide} alt="Конкурс" className="contest-image" />
            </div>
            <button className="contest-button">Принять участие</button>
          </div>
        </div>
      </section>
    </main>
  );
}
