const test = require('tape');
const generateOffice = require('../src/generate-office');

test('Office is unoccupied', t => {
    t.plan(1);
    const p = 0;
    const office = generateOffice(p);
    assertOccupied(t, office, 0);
});

test('Office is 10% occupied', t => {
    t.plan(1);
    const p = 0.1;
    const office = generateOffice(p);
    assertOccupied(t, office, 10);
});

test('Office is fully occupied', t => {
    t.plan(1);
    const p = 1;
    const office = generateOffice(p);
    assertOccupied(t, office, 100);
});

const assertOccupied = (t, office, expectedDesks) => {
    const occupied = office.reduce((sum, row) => sum + row.filter(desk => desk == 1).length, 0);
    t.equal(occupied, expectedDesks);
};
