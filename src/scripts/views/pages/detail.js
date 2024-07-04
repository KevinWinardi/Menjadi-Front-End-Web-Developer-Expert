import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPrsenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
    async render() {
        return `
            <div id="overlay"></div>
            <div id="loading-indicator">
                <div class="spinner"></div>
                <p>Loading...</p>
            </div>
            <div id="likeButtonContainer"></div>
            <div id="restaurant"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantSource.detailRestaurant(url.id);
        const restaurantContainer = document.querySelector('#restaurant');
        restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

        LikeButtonPrsenter.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favoriteRestaurants: FavoriteRestaurantIdb,
            restaurant: {
                id: restaurant.id,
                name: restaurant.name,
                city: restaurant.city,
                pictureId: restaurant.pictureId,
                description: restaurant.description,
                rating: restaurant.rating,
            },
        });

        document.querySelector('form').addEventListener('submit', async () => {
            await RestaurantSource.submitReview(url.id);
        });
    },
};

export default Detail;
