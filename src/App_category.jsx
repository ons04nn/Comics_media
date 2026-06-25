import React from 'react';
import './stylesheets/reset.scss';
import './stylesheets/fonts.scss';
import './stylesheets/basics.scss';
import './stylesheets/index.scss';

import M_header from './components/M_header';
import S_main_category from './components/S_main_category';
import M_footer from './components/M_footer';

function App_category({ page }) {
  return (
    <div className="bg-production app-wrapper">
      <M_header />
      <div className="app-content">
        <S_main_category page={page} />
      </div>
      <M_footer />
    </div>
  );
}

export default App_category;
