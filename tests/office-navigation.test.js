const test = require('tape');
const navigateOffice = require('../src/navigate-office');

test('Already at exit when only 1 desk', t => {
    t.plan(1);
    const row1 = [0];
    const office = [row1];
    const exitFound = navigateOffice(office);
    t.true(exitFound);
});

test('Exit reached when only 1 column of empty desks', t => {
    t.plan(1);
    const row1 = [0];
    const row2 = [0];
    const row3 = [0];
    const office = [row1, row2, row3];
    const exitFound = navigateOffice(office);
    t.true(exitFound);
});

test('Exit blocked when only 1 column of empty desks', t => {
    t.plan(1);
    const row1 = [1];
    const row2 = [0];
    const row3 = [0];
    const office = [row1, row2, row3];
    const exitFound = navigateOffice(office);
    t.false(exitFound);
});

test('Exit found using right adjacent column', t => {
    t.plan(1);
    const row1 = [1, 0];
    const row2 = [1, 0];
    const row3 = [0, 0];
    const office = [row1, row2, row3];
    const exitFound = navigateOffice(office);
    t.true(exitFound);
});

test('Exit found using left adjacent column', t => {
    t.plan(1);
    const row1 = [0, 1];
    const row2 = [0, 1];
    const row3 = [0, 0];
    const office = [row1, row2, row3];
    const startColIndex = 1;
    const exitFound = navigateOffice(office, startColIndex);
    t.true(exitFound);
});

test('Exit found requiring moving both left and right', t => {
    t.plan(1);
    const row1 = [0, 1, 1];
    const row2 = [0, 0, 0];
    const row3 = [1, 1, 0];
    const row4 = [0, 0, 0];
    const office = [row1, row2, row3, row4];
    const exitFound = navigateOffice(office);
    t.true(exitFound);
});

test('Exit found requiring moving both left and right, and down', t => {
    t.plan(1);
    const row1 = [1, 1, 1, 0, 1];
    const row2 = [1, 1, 1, 0, 0];
    const row3 = [0, 0, 0, 1, 0];
    const row4 = [0, 1, 0, 1, 0];
    const row5 = [0, 1, 0, 0, 0];
    const office = [row1, row2, row3, row4, row5];
    const exitFound = navigateOffice(office);
    t.true(exitFound);
});
