const drawOffice = require('./draw-office');

module.exports = office => {
    if (!office.length) {
        throw new Error('Office without desks');
    }

    let currentRow = office.length;
    let currentCol = 1;

    while (currentRow > 1) {
        // console.log(drawOffice(office, { row: currentRow, col: currentCol }));

        const nextRow = currentRow - 1;
        const nextCol = currentCol;
        const nextRowBlocked = office[nextRow - 1][nextCol - 1];
        if (nextRowBlocked) {
            const nextCol = currentCol + 1;
            const nextColExists = office[nextRow - 1][nextCol - 1] !== undefined;
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
