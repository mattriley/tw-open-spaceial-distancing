const drawOffice = require('./draw-office');

const unoccupied = 0;
const occupied = 1;
const visited = 2;

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

        const surroundings = [row, col].flatMap((num, i) => {
            return [1, -1].reduce((acc, offset) => {
                const pos = [row, col];
                pos[i] = num + offset;
                const nextRow = pos[0];
                const nextCol = pos[1];
                const nextDesk = office[nextRow] && office[nextRow][nextCol];
                return nextDesk !== undefined ? acc.concat([pos]) : acc;
            }, []);
        });

        return surroundings.find(pos => findExit(...pos));
    };

    return findExit(startRow, startCol);
};
