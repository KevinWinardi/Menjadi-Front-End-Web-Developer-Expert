const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
    I.amOnPage('/');
    I.seeElement('.card');
    I.click(locate('.card').first());
})

Scenario('See content customer review', ({ I }) => {
    I.seeElement('.review')
})

Scenario('Add review', async ({ I }) => {
    const nameReview = 'Test A';
    const textReview = 'Good Restaurant';

    I.seeElement('#input-name');
    I.fillField('#input-name', nameReview);

    I.seeElement('#input-review');
    I.fillField('#input-review', textReview);

    I.seeElement('#submit');
    I.click('#submit');

    const afterNameReview = await I.grabTextFrom(locate('.all-review h4').last());
    const afterTextReview = await I.grabTextFrom(locate('.all-review p:nth-child(2)').last());

    assert.strictEqual(nameReview, afterNameReview);
    assert.strictEqual(textReview, afterTextReview);
})