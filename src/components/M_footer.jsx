import logo from '../assets/logo/logo.svg';
import vk_w from '../assets/icons/vk_w.svg';
import tg_w from './../assets/icons/tg_w.svg';

export default function M_footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__inner">
        <div className="footer-grid">
          <div className="footer-row">
            <div className="footer-brand-column">
              <a className="brand footer-brand" href="#" aria-label="RetroNova">
                <img src={logo} alt="RetroNova" className="brand-logo" />
              </a>
              <div className="footer-social">
                <a href="#" className="social-link">
                  <img src={vk_w} alt="VK" className="social-icon" />
                </a>
                <a href="#" className="social-link">
                  <img src={tg_w} alt="Telegram" className="social-icon" />
                </a>
              </div>
            </div>

            <section className="footer-col" aria-label="Регион">
              <h3 className="footer-title">
                <a className="footer-title__link" href="./region.html">РЕГИОН</a>
              </h3>
              <ul className="footer-list">
                <li><a href="./region.html">Америка</a></li>
                <li><a href="./region.html">Япония</a></li>
                <li><a href="./region.html">Корея</a></li>
                <li><a href="./region.html">Россия</a></li>
                <li><a href="./region.html">Европа</a></li>
              </ul>
            </section>

            <section className="footer-col" aria-label="Эпоха">
              <h3 className="footer-title">
                <a className="footer-title__link" href="./era.html">ЭПОХА</a>
              </h3>
              <ul className="footer-list">
                <li><a href="./era.html">Золотой век</a></li>
                <li><a href="./era.html">Серебряный век</a></li>
                <li><a href="./era.html">Бронзовый век</a></li>
                <li><a href="./era.html">90‑е</a></li>
                <li><a href="./era.html">00‑е</a></li>
                <li><a href="./era.html">10‑е</a></li>
                <li><a href="./era.html">20‑е</a></li>
              </ul>
            </section>

            <section className="footer-col" aria-label="Издатель">
              <h3 className="footer-title">
                <a className="footer-title__link" href="./publisher.html">ИЗДАТЕЛЬ</a>
              </h3>
              <ul className="footer-list">
                <li><a href="./publisher.html">Marvel</a></li>
                <li><a href="./publisher.html">DC</a></li>
                <li><a href="./publisher.html">Kodansha</a></li>
                <li><a href="./publisher.html">Shueisha</a></li>
                <li><a href="./publisher.html">Shogakukan</a></li>
                <li><a href="./publisher.html">D&amp;C Media</a></li>
                <li><a href="./publisher.html">Kenaz</a></li>
                <li><a href="./publisher.html">Bubble</a></li>
              </ul>
            </section>
          </div>

          <div className="footer-column">
            <section className="footer-col" aria-label="Производство">
              <h3 className="footer-title">
                <a className="footer-title__link" href="./production.html">ПРОИЗВОДСТВО</a>
              </h3>
            </section>

            <section className="footer-col" aria-label="О нас">
              <h3 className="footer-title">
                <a className="footer-title__link" href="#">О НАС</a>
              </h3>
            </section>
          </div>
        </div>
      </div>

      <small className="muted footer-copy">RetroNova</small>
    </footer>
  );
}