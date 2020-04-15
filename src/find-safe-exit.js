const drawOffice = require('./draw-office');

const unoccupied = 0;
const occupied = 1;
const visited = 2;

const offsets = [{ row: -1 }, { row: 1 }, { col: -1 }, { col: 1 }];
const offsetDefaults = { row: 0, col: 0 };

module.exports = (office, startCol = 0) => {
    if (!office.length) {
        throw new Error('Office without desks');
    }

    const startRow = office.length - 1;
    const exitRow = 0;

    const findExit = (row, col) => {
        const desk = office[row][col];
        if (desk == unoccupied && row == exitRow) return true;
        if (desk == occupied || desk == visited) return false;
        office[row][col] = visited;

        return offsets.find(offset => {
            const o = { ...offsetDefaults, ...offset };
            const nextRow = row + o.row;
            const nextCol = col + o.col;
            const nextDesk = office[nextRow] && office[nextRow][nextCol];
            return nextDesk !== undefined ? findExit(nextRow, nextCol) : false;
        });
    };

    return findExit(startRow, startCol);
};
