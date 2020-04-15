const deskStatus = require('./desk-status');
const shuffle = require('./shuffle');
const totalRows = 10;
const desksPerRow = 10;
const totalDesks = totalRows * desksPerRow;

module.exports = (p, rand = Math.random) => {
    const quota = Math.floor(totalDesks * p);
    const occupied = new Array(quota).fill(deskStatus.occupied);
    const unoccupied = new Array(totalDesks - quota).fill(deskStatus.unoccupied);
    const desks = shuffle(occupied.concat(unoccupied), rand);
    const chunk = rowIndex => desks.slice(rowIndex * desksPerRow, rowIndex * desksPerRow + desksPerRow);
    return Array.from({ length: totalRows }, (_, rowIndex) => chunk(rowIndex));
};
