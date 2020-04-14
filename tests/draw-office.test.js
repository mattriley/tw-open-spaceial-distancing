const test = require('tape');
const drawOffice = require('../src/draw-office');

test('Draws the office layout', t => {
    const row1 = [1, 1, 0];
    const row2 = [0, 1, 0];
    const row3 = [0, 0, 0];
    const office = [row1, row2, row3];
    const currentPosition = { row: 3, col: 2 };
    const drawing = drawOffice(office, currentPosition);
    const line1 = '1 > 1 1 0';
    const line2 = '2 > 0 1 0';
    const line3 = '3 > 0 X 0';
    const line4 = '    ^ ^ ^';
    const line5 = '    1 2 3';
    const expected = [line1, line2, line3, line4, line5].join('\n');
    t.equal(drawing, expected);
    t.end();
});
