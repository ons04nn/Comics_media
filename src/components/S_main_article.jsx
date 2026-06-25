import { getArticleUrl } from '../utils/articleSlug';
import { resolveRelatedArticles } from '../data/articles';

function ArticleTitle({ lines }) {
  return lines.map((line, index) => (
    <span key={index}>
      {index > 0 && <br />}
      {line}
    </span>
  ));
}

function ListItem({ item, index }) {
  const sideClass = item.align === 'right' ? 'anime-item--right' : 'anime-item--left';

  return (
    <div className={`anime-item ${sideClass}`}>
      {item.align === 'right' ? (
        <>
          <div className="anime-item-text">
            <p className="article-text" dangerouslySetInnerHTML={{ __html: item.html }} />
          </div>
          <div className="anime-item-image">
            <img src={item.image} alt="" className="anime-item-img" />
          </div>
        </>
      ) : (
        <>
          <div className="anime-item-image">
            <img src={item.image} alt="" className="anime-item-img" />
          </div>
          <div className="anime-item-text">
            <p className="article-text" dangerouslySetInnerHTML={{ __html: item.html }} />
          </div>
        </>
      )}
    </div>
  );
}

function RelatedCard({ related }) {
  const splitClass = related.split === 'large-small'
    ? 'placeholder placeholder--split-large'
    : 'placeholder placeholder--split-small';

  return (
    <a href={getArticleUrl(related.slug)} className={splitClass}>
      <img src={related.heroImage} alt={related.heroAlt} className="placeholder-image" />
      <div className="placeholder-content contest-title-white">
        <div className="placeholder-date">{related.date}</div>
        <h2 className="placeholder-title">
          <ArticleTitle lines={related.titleLines} />
        </h2>
      </div>
    </a>
  );
}

export default function S_main_article({ article }) {
  const related = resolveRelatedArticles(article);
  const breadcrumbTitle = article.titleLines.join(' ');

  return (
    <main id="content" className="page">
      <div className="article-hero-wrapper">
        <div className="article-hero">
          <div className="container breadcrumbs">
            <div className="breadcrumbs-list">
              <a href="./index.html">Главная</a>
              <span className="breadcrumb-separator">/</span>
              <a href={getArticleUrl(article.slug)}>{breadcrumbTitle}</a>
            </div>
          </div>
          <img src={article.heroImage} alt={article.heroAlt} className="article-hero-image" />
          <div className="article-hero-content">
            <div className="placeholder-date">{article.date}</div>
            <h1 className="placeholder-title">
              <ArticleTitle lines={article.titleLines} />
            </h1>
          </div>
        </div>
      </div>

      <section className="container section">
        <p className="article-text">{article.intro}</p>
      </section>

      <section className="container section">
        <div className="anime-list">
          {article.items.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </div>
      </section>

      <section className="container section">
        <h2 className="h2">Вам может понравиться</h2>
        <div className="placeholders placeholders--split">
          {related.map((item, index) => (
            <RelatedCard
              key={item.slug}
              related={{
                ...item,
                split: index === 0 ? 'small-large' : 'large-small',
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
