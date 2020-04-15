const drawOffice = require('./draw-office');

const status = {
    unoccupied: 0,
    occupied: 1,
    visited: 2
};

module.exports = (office, startCol = 0) => {
    if (!office.length) {
        throw new Error('Office without desks');
    }

    const startRow = office.length - 1;
    const exitRow = 0;

    const offsets = [{ rowIndexOffset: -1 }, { rowIndexOffset: 1 }, { colIndexOffset: -1 }, { colIndexOffset: 1 }];

    const findExit = (row, col) => {
        const desk = office[row][col];
        if (desk == status.unoccupied && row == exitRow) return true;
        if (desk == status.occupied || desk == status.visited) return false;
        office[row][col] = 2;

        return offsets.find(offset => {
            const defaults = { rowIndexOffset: 0, colIndexOffset: 0 };
            const { rowIndexOffset, colIndexOffset } = { ...defaults, ...offset };
            const nextRowIndex = row + rowIndexOffset;
            const nextColIndex = col + colIndexOffset;
            const nextDesk = office[nextRowIndex] && office[nextRowIndex][nextColIndex];
            return nextDesk !== undefined ? findExit(nextRowIndex, nextColIndex) : false;
        });
    };

    return findExit(startRow, startCol);
};
