const deskStatus = require('./desk-status');
const shuffle = require('./lib/shuffle');

module.exports = office => {
    const row = office.length - 1;
    const occupied = office[row].reduce((acc, _, col) => (deskStatus.occupied ? acc.concat(col) : acc), []);
    const col = occupied.length ? shuffle(occupied)[0] : 0;
    return { row, col };
};
