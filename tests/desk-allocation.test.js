const test = require('tape');
const deskStatus = require('../src/desk-status');
const allocateSequentially = require('../src/desk-allocators/sequential');
const allocateRandomly = require('../src/desk-allocators/random');

test('allocates sequentially', t => {
    t.plan(1);
    const totalDesks = 5;
    const quota = 2;
    const desks = allocateSequentially(totalDesks, quota);
    t.deepEqual(desks, [1, 1, 0, 0, 0]);
});

test('allocates randomly', t => {
    t.plan(2);
    const totalDesks = 5;
    const quota = 2;
    const desks = allocateRandomly(totalDesks, quota);
    const occupied = desks.filter(desk => desk == deskStatus.occupied).length;
    const unoccupied = desks.filter(desk => desk == deskStatus.unoccupied).length;
    t.equal(occupied, 2);
    t.equal(unoccupied, 3);
});
