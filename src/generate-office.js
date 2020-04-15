const totalRows = 10;
const desksPerRow = 10;
const totalDesks = totalRows * desksPerRow;

module.exports = allocateDesks => p => {
    const quota = Math.floor(totalDesks * p);
    const desks = allocateDesks(totalDesks, quota);
    const chunk = rowIndex => desks.slice(rowIndex * desksPerRow, rowIndex * desksPerRow + desksPerRow);
    return Array.from({ length: totalRows }, (_, rowIndex) => chunk(rowIndex));
};
