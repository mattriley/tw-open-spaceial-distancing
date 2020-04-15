const test = require('tape');
const deskStatus = require('../src/desk-status');
const generateOffice = require('../src/generate-office');
const allocateSequentially = require('../src/desk-allocators/sequential');
const allocateRandomly = require('../src/desk-allocators/random');

const generateOfficeSequentially = generateOffice(allocateSequentially);
const generateOfficeRandomly = generateOffice(allocateRandomly);

test('Office is unoccupied', t => {
    t.plan(1);
    const p = 0;
    const office = generateOfficeSequentially(p);
    assertOccupied(t, office, 0);
});

test('Office is 10% occupied', t => {
    t.plan(1);
    const p = 0.1;
    const office = generateOfficeSequentially(p);
    assertOccupied(t, office, 10);
});

test('Office is fully occupied', t => {
    t.plan(1);
    const p = 1;
    const office = generateOfficeSequentially(p);
    assertOccupied(t, office, 100);
});

test('Office is 50% randomly occupied using Fisher-Yates shuffle (impure)', t => {
    t.plan(1);
    const p = 0.5;
    const office = generateOfficeRandomly(p);
    assertOccupied(t, office, 50);
});

const assertOccupied = (t, office, expectedDesks) => {
    const occupied = office.reduce((sum, row) => sum + row.filter(desk => desk == deskStatus.occupied).length, 0);
    t.equal(occupied, expectedDesks);
};
