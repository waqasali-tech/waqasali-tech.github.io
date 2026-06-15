import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
import './script.js';

let mount = document.getElementById('react-root');
if(!mount){
  mount = document.createElement('div');
  mount.id = 'react-root';
  document.body.appendChild(mount);
}

const root = createRoot(mount);
root.render(<App />);
