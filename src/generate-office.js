const deskStatus = require('./desk-status');
const totalRows = 10;
const desksPerRow = 10;
const totalDesks = totalRows * desksPerRow;

module.exports = (p, rand) => {
    const allocateDesk = maxExclusive => Math.floor(rand * maxExclusive);
    const quota = totalDesks * p;

    let unoccupiedDesks = Array.from({ length: totalDesks }, (_, i) => i);
    let occupiedDesks = Array.from({ length: quota }, () => {
        const deskIndex = allocateDesk(unoccupiedDesks.length);
        return unoccupiedDesks.splice(deskIndex, 1);
    });

    const desks = new Array(totalDesks).fill(deskStatus.unoccupied);
    occupiedDesks.forEach(i => (desks[i] = deskStatus.occupied));
    const office = Array.from({ length: totalRows }, (_, rowIndex) => desks.slice(rowIndex * desksPerRow, rowIndex + desksPerRow));
    return office;
};
