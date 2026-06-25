import React from 'react';
import { createRoot } from 'react-dom/client';
import App_category from './App_category';
import { categoryPages } from './data/categoryPages';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App_category page={categoryPages.production} />);
