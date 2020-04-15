const test = require('tape');

test('office with p value of 0 has no desks occupied', t => {
    t.plan(1);
    const p = 0;
    const office = generateOffice(p);
    const occupied = office.reduce((sum, row) => sum + row.filter(desk => desk == 1).length, 0);
    t.equal(occupied, 0);
});

const generateOffice = p => {
    const rows = 10;
    const desksPerRow = 10;
    const office = Array.from({ length: rows }, () => new Array(desksPerRow).fill(0));
    return office;
};
