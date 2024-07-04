import CONFIG from '../../globals/config';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="detail" id=${restaurant.id}>
        <div id="main"> 
            <h1>${restaurant.name}</h1>
            <img crossorigin="anonymous" src=${CONFIG.BASE_IMAGE}/${restaurant.pictureId} alt="Gambar Resto">
            <ul tabindex=0 class="categories">${restaurant.categories.map((categories) => `<li>${categories.name}</li>`).join('')}.</ul>
            <p tabindex=0>${restaurant.description}</p>
        </div>
        <div class="menu">
            <div tabindex=0 class="menu-food">
                <p>Makanan:</p>
                <ul>${restaurant.menus.foods.map((food) => `<li>${food.name}</li><hr>`).join('')}</ul>
            </div>
            <div tabindex=0 class="menu-drink">
                <p>Minuman:</p>
                <ul>${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li><hr>`).join('')}</ul>
            </div>
        </div>
        <div tabindex=0 class="address-rating">
            <p class="gold"><i class="fa fa-star gold"></i> ${restaurant.rating}</p>
            <p><i class="fa fa-map-marker"></i>  ${restaurant.address}, ${restaurant.city}</p>
        </div>
        <div class="review">
            <p> Customer Review</p>
            <div class="all-review">
                ${restaurant.customerReviews.map((item) => `
                <section tabindex=0>
                    <h4>${item.name}</h4>
                    <p>${item.review}</p>
                    <hr>
                    <p>${item.date}</p>
                </section>
                `,).join('')}
            </div>
            <form>
                <input tabindex=0 id="input-name" placeholder="Your name" required>
                <textarea tabindex=0 id="input-review" placeholder="Add your review here" required></textarea>
                <button tabindex=0 id="submit">Submit</button>
            </form>
       </div>
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div tabIndex=0 id=${restaurant.id} class="card">
        <div class="img-container">
            <img class="lazyload" crossorigin="anonymous" data-src=${CONFIG.BASE_IMAGE}/${restaurant.pictureId} alt="Gambar Resto">
            <p class="gold"><i class="fa fa-star gold"></i> ${restaurant.rating}</p>
        </div>
        <div class="info">
            <h3>${restaurant.name}</h3>
            <p>${restaurant.description}</p>
            <p><i class="fa fa-map-marker"></i>  ${restaurant.city}</p>
        </div>
    </div>
`;

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
         <i class="fa fa-heart white" aria-hidden="true"></i>
    </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart red" aria-hidden="true"></i>
    </button>
`;

export { createRestaurantDetailTemplate, createRestaurantItemTemplate, createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate };
