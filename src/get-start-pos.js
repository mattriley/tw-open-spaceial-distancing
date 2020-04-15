const deskStatus = require('./desk-status');

module.exports = office => {
    const row = office.length - 1;
    const occupiedCol = office[row].indexOf(deskStatus.occupied);
    const col = occupiedCol >= 0 ? occupiedCol : 0;
    return { row, col };
};
