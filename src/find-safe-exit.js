const drawOffice = require('./draw-office');

module.exports = office => {
    if (!office.length) {
        throw new Error('Office without desks');
    }

    let currentRow = office.length;
    let currentCol = 1;

    while (currentRow > 1) {
        const nextRow = currentRow - 1;
        const nextCol = currentCol;
        const nextRowBlocked = office[nextRow - 1][nextCol - 1];
        if (nextRowBlocked) return false;
        currentRow--;
    }

    return true;
};
