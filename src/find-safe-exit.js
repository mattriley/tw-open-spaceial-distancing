const exitRow = 0;
const unoccupied = 0;
const occupied = 1;
const offsets = [-1, 1];

module.exports = (office, startCol = 0) => {
    const findExit = pos => {
        const { row, col } = pos;
        const desk = office[row] && office[row][col];
        if (desk == undefined || desk == occupied) return false;
        if (desk == unoccupied && row == exitRow) return true;
        delete office[row][col];
        const applyOffset = (key, val, offset) => ({ row, col, [key]: val + offset });
        const adjacentDesks = Object.entries(pos).flatMap(([key, val]) => offsets.map(offset => applyOffset(key, val, offset)));
        return adjacentDesks.find(findExit);
    };

    const startRow = office.length - 1;
    return findExit({ row: startRow, col: startCol });
};
