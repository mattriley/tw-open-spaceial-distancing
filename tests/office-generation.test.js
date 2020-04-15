const test = require('tape');

test('office with p value of 0 has no desks occupied', t => {
    t.plan(1);
    const p = 0;
    const office = generateOffice(p);
    const occupied = office.reduce((sum, row) => sum + row.filter(desk => desk == 1).length, 0);
    t.equal(occupied, 0);
});

test('office with p value of 0.1 has 10% of desks occupied', t => {
    t.plan(1);
    const p = 0.1;
    const office = generateOffice(p);
    const occupied = office.reduce((sum, row) => sum + row.filter(desk => desk == 1).length, 0);
    t.equal(occupied, 10);
});

const generateOffice = p => {
    const rows = 10;
    const desksPerRow = 10;
    const totalDesks = rows * desksPerRow;
    const occupied = totalDesks * p;
    const unoccupied = totalDesks - occupied;
    const desks = new Array(occupied).fill(1).concat(new Array(unoccupied).fill(0));

    const office = [];

    for (let i = 0; i < 100; i += 10) {
        const row = desks.slice(i, i + 10);
        office.push(row);
    }

    return office;
};
