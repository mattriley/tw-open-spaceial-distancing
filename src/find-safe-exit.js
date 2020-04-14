const drawOffice = require('./draw-office');

module.exports = (office, startColIndex = 0) => {
    if (!office.length) {
        throw new Error('Office without desks');
    }

    const officeData = office.map(row => {
        return row.map(desk => {
            return {
                safe: desk == 0,
                unsafe: desk == 1,
                visited: false
            };
        });
    });

    const startRowIndex = office.length - 1;
    const endRowIndex = 0;

    const isExitRow = rowIndex => rowIndex === endRowIndex;
    const offsets = [{ rowIndexOffset: -1 }, { rowIndexOffset: 1 }, { colIndexOffset: -1 }, { colIndexOffset: 1 }];

    const findExit = (rowIndex, colIndex) => {
        const desk = officeData[rowIndex][colIndex];
        if (desk.safe && isExitRow(rowIndex)) return true;
        if (desk.unsafe || desk.visited) return false;
        desk.visited = true;

        return offsets.find(offset => {
            const defaults = { rowIndexOffset: 0, colIndexOffset: 0 };
            const { rowIndexOffset, colIndexOffset } = { ...defaults, ...offset };
            const nextRowIndex = rowIndex + rowIndexOffset;
            const nextColIndex = colIndex + colIndexOffset;
            const nextDesk = officeData[nextRowIndex] && officeData[nextRowIndex][nextColIndex];
            return nextDesk ? findExit(nextRowIndex, nextColIndex) : false;
        });
    };

    return findExit(startRowIndex, startColIndex);
};
