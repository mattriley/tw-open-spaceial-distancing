const drawOffice = require('./draw-office');

module.exports = office => {
    if (!office.length) {
        throw new Error('Office without desks');
    }

    let currentRow = office.length;
    let currentCol = 1;

    while (currentRow > 0) {        
        const isBlocked = office[currentRow - 1][currentCol - 1];
        if (isBlocked) return false;
        currentRow--;
    }

    return true;
};
