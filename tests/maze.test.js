const test = require('tape');

test('Office without desks is not a valid scenario', t => {
    t.plan(1);
    t.throws(() => {
        const office = [];
        findSafeExit(office);
    }, 'Office without desks');
});

const findSafeExit = () => {
    throw new Error('Office without desks');
};
