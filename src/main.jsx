import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/manrope';
import './styles.css';
import App from './App.jsx';

const root = document.getElementById('root');
if (root.querySelector('main')) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
