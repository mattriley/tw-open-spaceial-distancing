const test = require('tape');
const deskStatus = require('../src/desk-status');
const generateOffice = require('../src/generate-office');

const totalRows = 2;
const desksPerRow = 5;

test('Office is unoccupied', t => {
    t.plan(3);
    const p = 0;
    const allocateDesks = (totalDesks, quota) => {
        t.equal(totalDesks, 10);
        t.equal(quota, 0);
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    };
    const office = generateOffice({ totalRows, desksPerRow, allocateDesks })(p);
    assertOccupied(t, office, 0);
});

test('Office is half occupied', t => {
    t.plan(3);
    const p = 0.5;
    const allocateDesks = (totalDesks, quota) => {
        t.equal(totalDesks, 10);
        t.equal(quota, 5);
        return [1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
    };
    const office = generateOffice({ totalRows, desksPerRow, allocateDesks })(p);
    assertOccupied(t, office, 5);
});

test('Office is fully occupied', t => {
    t.plan(3);
    const p = 1;
    const allocateDesks = (totalDesks, quota) => {
        t.equal(totalDesks, 10);
        t.equal(quota, 10);
        return [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    };
    const office = generateOffice({ totalRows, desksPerRow, allocateDesks })(p);
    assertOccupied(t, office, 10);
});

const assertOccupied = (t, office, expectedDesks) => {
    const occupied = office.reduce((sum, row) => sum + row.filter(desk => desk == deskStatus.occupied).length, 0);
    t.equal(occupied, expectedDesks);
};
