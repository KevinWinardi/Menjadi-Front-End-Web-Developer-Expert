import RestaurantSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import heroLarge from '../../../public/hero/hero-image_2_large.jpg';
import heroSmall from '../../../public/hero/hero-image_2_small.jpg';

const List = {
    async render() {
        return `
            <section id="jumbotron">
                <picture>
                    <source type="image/jpg" media="(max-width: 600px)" srcset="${heroSmall}">
                    <img type="image/jpg" src="${heroLarge}" alt="hero image">
                </picture>
                <div>
                    <h1>Welcome to an unforgettable<br>culinary journey!</h1>
                    <a href="#list">Get Started</a>
                </div>
            </section>
            <div id="overlay"></div>
            <div id="loading-indicator">
                <div class="spinner"></div>
                <p>Loading...</p>
            </div>
            <section id="list">
                <h2 id="main">Resto List</h2>
                <div id="list-container"></div>
            </section>
        `;
    },

    async afterRender() {
        const restaurants = await RestaurantSource.listRestaurant();
        const restaurantsContainer = document.querySelector('#list-container');

        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });

        document.querySelectorAll('.card').forEach((event) => {
            event.addEventListener('click', () => {
                location.href = `#/detail/${event.id}`;
            });
            event.addEventListener('keydown', (keyboard) => {
                if (keyboard.key === 'Enter' || keyboard.key === ' ') {
                    location.href = `#/detail/${event.id}`;
                }
            });
        });
    },
};

export default List;
