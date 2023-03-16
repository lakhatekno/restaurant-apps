import 'regenerator-runtime';
import './styles/main.css';
import './templates/card.js';
import './templates/footer-custom.js';
import './templates/detail-template.js';
import './templates/review-card.js';
import UrlParser from './routes/url-parser';
import routes from './routes/routes';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const renderPage = async () => {
  document.querySelector('#content_body').innerHTML = '';
  const url = UrlParser.parseActiveUrlWithCombiner();
  console.log(url);
  const page = routes[url];
  await page.afterRender();
};

window.onload = () => {
  renderPage();
  swRegister();
};

window.addEventListener('hashchange', async () => {
  renderPage();
});

const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('nav');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

const skipLinkElem = document.querySelector('.skip-link');
skipLinkElem.addEventListener('click', (event) => {
  document.querySelector('#recommend').focus();
  event.preventDefault();
});