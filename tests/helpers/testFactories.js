import LikeButtonPrsenter from "../../src/scripts/utils/like-button-presenter";
import FavoriteRestaurantIdb from "../../src/scripts/data/favorite-restaurant-idb";

const createLikeButtonPrsenterWithRestaurant = async (restaurant) => {
    await LikeButtonPrsenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant,
    });
};

export { createLikeButtonPrsenterWithRestaurant };