import icon from '../../public/favicon.png';

class headerContent extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML += `
                <div class="brand-container">
                    <img src="${icon}" alt="Icon">
                    <h2>Yummy Apps</h2>
                    <button id="hamburger">☰</button>
                </div>
                <nav>
                    <ul id="navigation" class="">
                        <li><a href="/">Home</a></li>
                        <li><a href="#/favorite">Favorite</a></li>
                        <li><a href="https://id.linkedin.com/in/kevin-winardi-a266832b6">About Us</a></li>
                    </ul>
                </nav>
        `;
    }
}

export default headerContent;
