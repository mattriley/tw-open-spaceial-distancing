const test = require('tape');

test('Office without desks is not a valid scenario', t => {
    t.plan(1);
    t.throws(() => {
        const office = [];
        findSafeExit(office);
    }, 'Office without desks');
});

test('Already at safe exit when only 1 desk', t => {
    t.plan(1);
    const row0 = [0];
    const office = [row0];
    const safeExitFound = findSafeExit(office);
    t.true(safeExitFound);
});

const findSafeExit = office => {
    if (!office.length) {
        throw new Error('Office without desks');
    }
    return true;
};
