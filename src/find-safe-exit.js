const drawOffice = require('./draw-office');

module.exports = (office, startCol = 1) => {
    if (!office.length) {
        throw new Error('Office without desks');
    }

    const valueAt = (row, col) => office[row - 1][col - 1];
    const isBlocked = (row, col) => !!valueAt(row, col);
    const isEdge = (row, col) => valueAt(row, col) == undefined;

    let currentRow = office.length;
    let currentCol = startCol;
    let currentDir = 'U';

    while (currentRow > 1) {
        // console.log(drawOffice(office, { row: currentRow, col: currentCol }));

        const nextRow = currentRow - 1;
        const nextCol = currentCol;
        const nextRowBlocked = isBlocked(nextRow, nextCol);
        if (nextRowBlocked) {
            if (currentDir == 'U' || currentDir == 'R') {
                const rightCol = currentCol + 1;
                const rightColExists = !isEdge(currentRow, rightCol);
                if (rightColExists) {
                    currentCol++;
                    currentDir = 'R';
                } else {
                    currentDir = 'L';
                }
            }

            if (currentDir == 'L') {
                const leftCol = currentCol - 1;
                const leftColExists = !isEdge(currentRow, leftCol);
                if (leftColExists) {
                    currentCol--;
                    currentDir = 'L';
                } else {
                    return false;
                }
            }
        } else {
            currentRow--;
            currentDir = 'U';
        }
    }

    return true;
};
