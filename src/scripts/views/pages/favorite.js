import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
    async render() {
        return `
            <section id="list">
                <h2 id="main">Favorite List</h2>
                <div id="list-container"></div>
            </section>
        `;
    },

    async afterRender() {
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
        const restaurantsContainer = document.querySelector('#list-container');
        document.querySelector('#list>h2').style.paddingTop = '80px'

        if (restaurants.length === 0) {
            document.getElementById("main").innerText = `You don't have a favorite restaurant`;
        } else {
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
        }
    },
};

export default Favorite;
