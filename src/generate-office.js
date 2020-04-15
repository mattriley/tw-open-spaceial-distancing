module.exports = ({ totalRows, desksPerRow, allocateDesks }) => p => {
    const totalDesks = totalRows * desksPerRow;
    const quota = Math.floor(totalDesks * p);
    const desks = allocateDesks(totalDesks, quota);
    const chunk = rowIndex => desks.slice(rowIndex * desksPerRow, rowIndex * desksPerRow + desksPerRow);
    return Array.from({ length: totalRows }, (_, rowIndex) => chunk(rowIndex));
};
