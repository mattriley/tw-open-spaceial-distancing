module.exports = office => {
    if (!office.length) {
        throw new Error('Office without desks');
    }

    let row = office.length - 1;
    while (row > 0) {
        if (office[row][0]) return false;
        row--;
    }
    return true;
};
