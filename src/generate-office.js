const deskStatus = require('./desk-status');

module.exports = ({ totalRows, desksPerRow, allocateDesks }) => percentAsDecimal => {
    const totalDesks = totalRows * desksPerRow;
    const quota = Math.floor(totalDesks * percentAsDecimal);
    const desks = allocateDesks(totalDesks, quota);
    const chunk = rowIndex => desks.slice(rowIndex * desksPerRow, rowIndex * desksPerRow + desksPerRow);
    const office = Array.from({ length: totalRows }, (_, rowIndex) => chunk(rowIndex));
    if (!quota) return office;
    const lastRowOccupied = occupiedRow(office[office.length - 1]);
    return lastRowOccupied ? office : ensureLastRowOccupied(office);
};

const ensureLastRowOccupied = office => office.concat(office.splice(office.findIndex(occupiedRow), 1));
const occupiedRow = row => row.indexOf(deskStatus.occupied) != -1;
