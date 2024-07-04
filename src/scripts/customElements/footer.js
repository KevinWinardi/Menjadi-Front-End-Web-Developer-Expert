class footerContent extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML += `
            <p>Copyright &#169 2024 - Yummy Apps</p>
        `;
    }
}

module.exports = footerContent;
