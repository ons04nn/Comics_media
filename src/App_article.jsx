import React, { useEffect } from 'react';
import './stylesheets/reset.scss';
import './stylesheets/fonts.scss';
import './stylesheets/basics.scss';
import './stylesheets/index.scss';

import M_header from './components/M_header';
import S_main_article from './components/S_main_article';
import M_footer from './components/M_footer';

function App_article({ article }) {
  useEffect(() => {
    document.body.classList.add('bg-article');
    return () => document.body.classList.remove('bg-article');
  }, []);

  return (
    <div className="app-wrapper">
      <M_header />
      <div className="app-content">
        <S_main_article article={article} />
      </div>
      <M_footer />
    </div>
  );
}

export default App_article;
