import React, { useState, useEffect } from 'react';

import logo from '../assets/logo/logo.svg';
import vk from '../assets/icons/vk_b.svg';
import tg from '../assets/icons/tg_b.svg';

export default function M_header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header__inner">

        {/* ЛЕВОЕ МЕНЮ ДЛЯ DESKTOP */}
        <nav className="nav nav--left desktop-nav">
          <a href="./production.html">Производство</a>
          <a href="./region.html">Регион</a>
        </nav>

        {/* ЛОГО */}
        <a className="brand" href="./index.html">
          <img src={logo} alt="RetroNova" className="brand-logo" />
        </a>

        {/* ПРАВОЕ МЕНЮ ДЛЯ DESKTOP */}
        <nav className="nav nav--right desktop-nav">
  <a href="./era.html">Эпоха</a>
  <a href="./publisher.html">Издатель</a>

  <div className="social-links">
    <a href="#">
      <img src={vk} alt="VK" className="social-icon" />
    </a>

    <a href="#">
      <img src={tg} alt="Telegram" className="social-icon" />
    </a>
  </div>
</nav>

        {/* БУРГЕР */}
        <button
          className="burger"
          onClick={() => setOpen(v => !v)}
          aria-label="Menu"
        >
          {open ? '✕' : '☰'}
        </button>

        {/* МОБИЛЬНОЕ МЕНЮ */}
        <nav className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`}>
          <a onClick={() => setOpen(false)} href="./production.html">
            Производство
          </a>

          <a onClick={() => setOpen(false)} href="./region.html">
            Регион
          </a>

          <a onClick={() => setOpen(false)} href="./era.html">
            Эпоха
          </a>

          <a onClick={() => setOpen(false)} href="./publisher.html">
            Издатель
          </a>

          <div className="social-links">
            <a href="#">
              <img src={vk} alt="VK" />
            </a>

            <a href="#">
              <img src={tg} alt="Telegram" />
            </a>
          </div>
        </nav>

      </div>
    </header>
  );
}