const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants',  ({ I }) => {
    I.see('You don\'t have a favorite restaurant', '#main');
});


Scenario('liking one restaurant', async ({ I }) => {
    I.see('You don\'t have a favorite restaurant', '#main');

    I.amOnPage('/');

    I.seeElement('.card');
    const firstRestaurant = locate('.card .info h3').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant)

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.card');
    const likedRestaurantTitle = await I.grabTextFrom('.card .info h3');

    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle)
})