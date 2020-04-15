const rows = 10;
const desksPerRow = 10;
const totalDesks = rows * desksPerRow;

module.exports = (p, rand) => {
    const allocateDesk = maxExclusive => Math.floor(rand * maxExclusive);
    const quota = totalDesks * p;

    let unoccupiedDesks = Array.from({ length: totalDesks }, (_, i) => i);
    let occupiedDesks = Array.from({ length: quota }, () => {
        const deskIndex = allocateDesk(unoccupiedDesks.length);
        return unoccupiedDesks.splice(deskIndex, 1);
    });

    const desks = new Array(totalDesks).fill(0);
    occupiedDesks.forEach(i => (desks[i] = 1));
    const office = Array.from({ length: rows }, (_, rowIndex) => desks.slice(rowIndex * desksPerRow, rowIndex + desksPerRow));
    return office;
};
