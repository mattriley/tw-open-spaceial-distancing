const deskStatus = require('./desk-status');

module.exports = ({ totalRows, desksPerRow, allocateDesks }) => percentAsDecimal => {
    const totalDesks = totalRows * desksPerRow;
    const quota = Math.floor(totalDesks * percentAsDecimal);
    const desks = allocateDesks(totalDesks, quota);
    const office = layoutOffice(totalRows, desksPerRow, desks);
    return quota ? ensureLastRowOccupied(office) : office;
};

const layoutOffice = (totalRows, desksPerRow, desks) => {
    const chunk = rowIndex => desks.slice(rowIndex * desksPerRow, rowIndex * desksPerRow + desksPerRow);
    return Array.from({ length: totalRows }, (_, rowIndex) => chunk(rowIndex));
};

const ensureLastRowOccupied = office => {
    const lastRowOccupied = isRowOccupied(office[office.length - 1]);
    if (lastRowOccupied) return office;
    return office.concat(office.splice(office.findIndex(isRowOccupied), 1));
};

const isRowOccupied = row => row.indexOf(deskStatus.occupied) != -1;
