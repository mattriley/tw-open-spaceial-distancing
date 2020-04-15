const deskStatus = require('./desk-status');
const shuffleArray = require('./shuffle-array');
const totalRows = 10;
const desksPerRow = 10;
const totalDesks = totalRows * desksPerRow;

module.exports = (p, shuffle = shuffleArray) => {
    const quota = Math.floor(totalDesks * p);
    const occupied = new Array(quota).fill(deskStatus.occupied);
    const unoccupied = new Array(totalDesks - quota).fill(deskStatus.unoccupied);
    const desks = shuffle(occupied.concat(unoccupied));
    const chunk = rowIndex => desks.slice(rowIndex * desksPerRow, rowIndex * desksPerRow + desksPerRow);
    return Array.from({ length: totalRows }, (_, rowIndex) => chunk(rowIndex));
};
