// import 'promise-polyfill';
// import 'isomorphic-fetch';
import { h, render } from 'preact';
import './style/index.scss';

let root;
function init() {
	const getProductId = el => el.className.replace(/.*ecwid-product-id-([0-9]*)$/, '$1');

	const products = [].slice.apply(document.querySelectorAll('.ecwid-productBrowser-productsGrid-cellTop'));
	
	if (products.length) {
		const productsIds = products.map(getProductId);
		products.forEach((p) => {
			if (!p.querySelector('.quick-view-btn')) {
				const btn = document.createElement('button');
				btn.className = 'quick-view-btn';
				btn.rel = getProductId(p);
				btn.innerText = 'Quick View';
				p.appendChild(btn);
			}
		});

		let App = require('./components/app').default;
		root = render(<App products={productsIds} />, document.body, root);
	}
}

// register ServiceWorker via OfflinePlugin, for prod only:
if (process.env.NODE_ENV==='production') {
	require('./pwa');
}

// in development, set up HMR:
if (module.hot) {
	//require('preact/devtools');   // turn this on if you want to enable React DevTools!
	module.hot.accept('./components/app', () => requestAnimationFrame(init) );
}

init();


