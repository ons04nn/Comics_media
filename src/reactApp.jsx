import React from 'react';
import { createRoot } from 'react-dom/client';
import './stylesheets/reset.scss';
import './stylesheets/fonts.scss';
import './stylesheets/basics.scss';
import './stylesheets/index.scss';

function App() { 
 // return <h1>React жив</h1>; 
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
