import 'regenerator-runtime';
import '../styles/style.scss';
import headerContent from './customElements/header';
import footerContent from './customElements/footer';
import App from './views/app';
import swRegister from './utils/sw-register';

document.addEventListener('DOMContentLoaded', () => {
    customElements.define('header-content', headerContent);
    customElements.define('footer-content', footerContent);

    const app = new App({
        button: document.querySelector('#hamburger'),
        drawer: document.querySelector('#navigation'),
        content: document.querySelector('main-content'),
    });

    window.addEventListener('hashchange', () => {
        app.renderPage();
    });

    window.addEventListener('load', () => {
        app.renderPage();
        swRegister();
    });
});
