import { expect, assert } from 'chai';

import { Item, TickitShop } from '../app/tickit-shop';

const allItems = [
    { sellIn: 5, quality: 25, name: 'Sharp Cheddar' },
    { sellIn: 5, quality: 25, name: 'Ping-pong Paddle' },
    { sellIn: 5, quality: 25, name: 'Lady Gaga tickets' },
    { sellIn: 5, quality: 25, name: 'Conjured' },
    { sellIn: 5, quality: 25, name: 'Apple' },
    { sellIn: 5, quality: 25, name: 'Milk' },
]

describe('TickitShop', () => {
    it('should work', () => {
        expect(true).to.equal(true);
    });
});

describe('Check -Lady Gaga tickets- quality updates', () => {
    let tests = [
        { args: [new Item('Lady Gaga tickets', 0, 5)], expected: 0 },
        { args: [new Item('Lady Gaga tickets', 5, 0)], expected: 3 },
        { args: [new Item('Lady Gaga tickets', 10, 0)], expected: 2 },
        { args: [new Item('Lady Gaga tickets', 11, 0)], expected: 1 },
    ];

    tests.forEach(function(test) { 
        it('Should return quality of ' + test.expected, () => {
            const shop = new TickitShop(test.args);
            const res = shop.updateQuality();
            assert.equal(res[0].quality, test.expected);
        })
    });
});


describe('Check -Sharp Cheddar- quality updates', () => {
    let tests = [
        { args: [new Item('Sharp Cheddar', 5, 5)], expected: 6 },
        { args: [new Item('Sharp Cheddar', 5, 50)], expected: 50 },
        { args: [new Item('Sharp Cheddar', -1, 0)], expected: 2 },
    ];

    tests.forEach(function(test) { 
        it('Should return quality of ' + test.expected, () => {
            const shop = new TickitShop(test.args);
            const res = shop.updateQuality();
            assert.equal(res[0].quality, test.expected);
        })
    });
});

describe('Check -Ping-pong Paddle- quality updates', () => {
    let tests = [
        { args: [new Item('Ping-pong Paddle', 4, 80)], key: 'quality', expected: 80 },
        { args: [new Item('Ping-pong Paddle', 4, 80)], key: 'sellIn', expected: 4 },
    ];

    tests.forEach(function(test) { 
        it('Should return quality of ' + test.expected, () => {
            const shop = new TickitShop(test.args);
            const res = shop.updateQuality();
            assert.equal(res[0][test.key], test.expected);
        })
    });
});

describe('Check -Conjured- quality updates', () => {
    let tests = [
        { args: [new Item('Conjured', 4, 5)], expected: 3 },
        { args: [new Item('Conjured', -1, 5)], expected: 1 },
    ];

    tests.forEach(function(test) { 
        it('Should return quality of ' + test.expected, () => {
            const shop = new TickitShop(test.args);
            const res = shop.updateQuality();
            assert.equal(res[0].quality, test.expected);
        })
    });
});

describe('Check non-catalogued quality updates', () => {
    let tests = [
        { args: [new Item('Apple', 4, 5)], expected: 4 },
        { args: [new Item('Donut', -1, 5)], expected: 3 },
        { args: [new Item('Hamster', -1, 1)], expected: 0 },
    ];

    tests.forEach(function(test) { 
        it('Should return quality of ' + test.expected, () => {
            const shop = new TickitShop(test.args);
            const res = shop.updateQuality();
            assert.equal(res[0].quality, test.expected);
        })
    });
});
