import React from 'react';
import { createRoot } from 'react-dom/client';
import App_article from './App_article';
import { getArticle } from './data/articles';

const params = new URLSearchParams(window.location.search);
const slug = params.get('slug');
const article = getArticle(slug);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App_article article={article} />);
