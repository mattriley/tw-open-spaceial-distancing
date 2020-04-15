const deskStatus = require('./desk-status');
const exitRow = 0;
const offsets = [-1, 1];

module.exports = office => {
    const findExit = pos => {
        const { row, col } = pos;
        const desk = office[row] && office[row][col];
        if (desk == undefined || desk == deskStatus.occupied) return false;
        if (desk == deskStatus.unoccupied && row == exitRow) return true;
        delete office[row][col];
        const applyOffset = (key, val, offset) => ({ row, col, [key]: val + offset });
        const adjacentDesks = Object.entries(pos).flatMap(([key, val]) => offsets.map(offset => applyOffset(key, val, offset)));
        return adjacentDesks.find(findExit);
    };

    const startPos = getStartPos(office);
    office[startPos.row][startPos.col] = deskStatus.unoccupied;
    return findExit(startPos);
};

const getStartPos = office => {
    const row = office.length - 1;
    const occupiedCol = office[row].indexOf(deskStatus.occupied);
    const col = occupiedCol >= 0 ? occupiedCol : 0;
    return { row, col };
};
