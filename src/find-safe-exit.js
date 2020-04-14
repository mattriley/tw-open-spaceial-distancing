const drawOffice = require('./draw-office');

module.exports = office => {
    if (!office.length) {
        throw new Error('Office without desks');
    }

    const valueAt = (row, col) => office[row - 1][col - 1];
    const isBlocked = (row, col) => !!valueAt(row, col);
    const isEdge = (row, col) => valueAt(row, col) == undefined;

    let currentRow = office.length;
    let currentCol = 1;

    while (currentRow > 1) {
        // console.log(drawOffice(office, { row: currentRow, col: currentCol }));

        const nextRow = currentRow - 1;
        const nextCol = currentCol;
        const nextRowBlocked = isBlocked(nextRow, nextCol);
        if (nextRowBlocked) {
            const nextCol = currentCol + 1;
            const nextColExists = !isEdge(nextRow, nextCol);
            if (nextColExists) {
                currentCol++;
            } else {
                return false;
            }
        }
        currentRow--;
    }

    return true;
};
