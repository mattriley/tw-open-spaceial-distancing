const test = require('tape');
const generateOffice = require('../src/generate-office');

test('office with p value of 0 has no desks occupied', t => {
    t.plan(1);
    const p = 0;
    const office = generateOffice(p, () => 0);
    assertOccupied(t, office, 0);
});

test('office with p value of 0.1 has 10% of desks occupied', t => {
    t.plan(1);
    const p = 0.1;
    const office = generateOffice(p, () => 0);
    assertOccupied(t, office, 10);
});

test('office with p value of 0.1 has 10% of desks randomly occupied', t => {
    t.plan(1);
    const p = 0.1;
    const office = generateOffice(p, Math.random);
    assertOccupied(t, office, 10);
});

test('office with p value of 1 has 100% of desks randomly occupied', t => {
    t.plan(1);
    const p = 1;
    const office = generateOffice(p, Math.random);
    assertOccupied(t, office, 100);
});

const assertOccupied = (t, office, expectedDesks) => {
    const occupied = office.reduce((sum, row) => sum + row.filter(desk => desk == 1).length, 0);
    t.equal(occupied, expectedDesks);
};
