import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const getProductId = el => el.className.replace(/.*ecwid-product-id-([0-9]*)$/, '$1');
const products = [...document.querySelectorAll('.ecwid-productBrowser-productsGrid-cellTop')];
if (products.length) {
  const productsIds = products.map(getProductId);
  const btns = products.map((p) => {
    const btn = document.createElement('button');
    btn.className = 'quick-view-btn';
    btn.rel = getProductId(p);
    btn.innerText = 'Quick View';
    p.appendChild(btn);
    return btn;
  });

  const root = document.createElement('div');
  root.id = 'quick-view-app';
  document.body.appendChild(root);

  ReactDOM.render(
    <App products={productsIds} />,
    document.getElementById('quick-view-app'));
}