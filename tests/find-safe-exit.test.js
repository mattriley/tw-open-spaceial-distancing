const test = require('tape');
const findSafeExit = require('../src/find-safe-exit');

test('Office without desks is not a valid scenario', t => {
    t.plan(1);
    t.throws(() => {
        const office = [];
        findSafeExit(office);
    }, 'Office without desks');
});

test('Already at safe exit when only 1 desk', t => {
    t.plan(1);
    const row1 = [0];
    const office = [row1];
    const safeExitFound = findSafeExit(office);
    t.true(safeExitFound);
});

test('Safe exit reached when only 1 column of empty desks', t => {
    t.plan(1);
    const row1 = [0];
    const row2 = [0];
    const row3 = [0];
    const office = [row1, row2, row3];
    const safeExitFound = findSafeExit(office);
    t.true(safeExitFound);
});

test('Safe exit blocked when only 1 column of empty desks', t => {
    t.plan(1);
    const row1 = [0];
    const row2 = [0];
    const row3 = [1]; // blocked
    const office = [row1, row2, row3];
    const safeExitFound = findSafeExit(office);
    t.false(safeExitFound);
});
