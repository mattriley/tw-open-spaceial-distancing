const deskStatus = require('./desk-status');
const shuffle = require('./shuffle');
const totalRows = 10;
const desksPerRow = 10;
const totalDesks = totalRows * desksPerRow;

module.exports = (p, rand) => {
    const quota = Math.floor(totalDesks * p);
    const occupiedDesks = new Array(quota).fill(deskStatus.occupied);
    const unoccupiedDesks = new Array(totalDesks - quota).fill(deskStatus.unoccupied);
    const desks = occupiedDesks.concat(unoccupiedDesks);
    shuffle(desks, rand);
    const chunk = rowIndex => desks.slice(rowIndex * desksPerRow, rowIndex * desksPerRow + desksPerRow);
    return Array.from({ length: totalRows }, (_, rowIndex) => chunk(rowIndex));
};
