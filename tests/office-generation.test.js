const test = require('tape');
const generateOffice = require('../src/generate-office');

const totalRows = 2;
const desksPerRow = 5;

test('Office is unoccupied', t => {
    t.plan(3);
    const percentAsDecimal = 0;
    const allocateDesks = (totalDesks, quota) => {
        t.equal(totalDesks, 10);
        t.equal(quota, 0);
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    };
    const office = generateOffice({ totalRows, desksPerRow, allocateDesks })(percentAsDecimal);
    t.deepEqual(office, [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ]);
});

test('Office is half occupied', t => {
    t.plan(3);
    const percentAsDecimal = 0.5;
    const allocateDesks = (totalDesks, quota) => {
        t.equal(totalDesks, 10);
        t.equal(quota, 5);
        return [1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
    };
    const office = generateOffice({ totalRows, desksPerRow, allocateDesks })(percentAsDecimal);
    t.deepEqual(office, [
        [1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0]
    ]);
});

test('Office is fully occupied', t => {
    t.plan(3);
    const percentAsDecimal = 1;
    const allocateDesks = (totalDesks, quota) => {
        t.equal(totalDesks, 10);
        t.equal(quota, 10);
        return [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    };
    const office = generateOffice({ totalRows, desksPerRow, allocateDesks })(percentAsDecimal);
    t.deepEqual(office, [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1]
    ]);
});

test('Ensures that the last row is occupied', t => {
    t.plan(1);
    const percentAsDecimal = 0.2;
    const allocateDesks = () => {
        return [1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
    };
    const office = generateOffice({ totalRows, desksPerRow, allocateDesks })(percentAsDecimal);
    t.deepEqual(office, [
        [0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0]
    ]);
});
