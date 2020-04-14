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

    while (currentRow > 1) {
        // console.log(drawOffice(office, { row: currentRow, col: currentCol }));

        const nextRow = currentRow - 1;
        const nextCol = currentCol;
        const nextRowBlocked = isBlocked(nextRow, nextCol);
        if (nextRowBlocked) {
            const rightCol = currentCol + 1;
            const rightColExists = !isEdge(currentRow, rightCol);
            if (rightColExists) {
                currentCol++;
            } else {
                const leftCol = currentCol - 1;
                const leftColExists = !isEdge(currentRow, leftCol);
                if (leftColExists) {
                    currentCol--;
                } else {
                    return false;
                }
            }
        } else {
            currentRow--;
        }
    }

    return true;
};
