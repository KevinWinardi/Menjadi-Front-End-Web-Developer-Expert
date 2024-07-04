Feature('Unliking Restaurants');

Before(({ I }) => {
    I.amOnPage('/');
    I.seeElement('.card');
    I.click(locate('.card').first());

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
});

Scenario('showing one liked restaurants',  ({ I }) => {
    I.seeElement('.card');    
});

Scenario('unliking one restaurant', ({ I }) => {
    I.seeElement('.card');
    I.click('.card');
    
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.see('You don\'t have a favorite restaurant', '#main');
});

