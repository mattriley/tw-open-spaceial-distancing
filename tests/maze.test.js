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

test('Safe exit reached when only 1 column of empty desks', t => {
    t.plan(1);
    const row0 = [0];
    const row1 = [0];
    const row2 = [0];
    const office = [row0, row1, row2];
    const safeExitFound = findSafeExit(office);
    t.true(safeExitFound);
});

const findSafeExit = office => {
    if (!office.length) {
        throw new Error('Office without desks');
    }

    let y = office.length - 1;
    while (y > 0) y--;
    return true;
};
