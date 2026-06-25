import React from 'react';
import './stylesheets/reset.scss';
import './stylesheets/fonts.scss';
import './stylesheets/basics.scss';
import './stylesheets/index.scss';

import M_header from './components/M_header';
import S_main from './components/S_main';
import M_footer from './components/M_footer';

function App() {
  return (
    <div className="bg-main app-wrapper">
      <M_header />
      <div className="app-content">
        <S_main />
      </div>
      <M_footer />
    </div>
  );
}

export default App;