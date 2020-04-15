const exitRow = 0;
const unoccupied = 0;
const occupied = 1;
const visited = 2;
const offsets = [-1, 1];

module.exports = (office, startCol = 0) => {
    if (!office.length) {
        throw new Error('Office without desks');
    }

    const deskExists = desk => office[desk.row] && office[desk.row][desk.col] !== undefined;

    const findExit = pos => {
        const { row, col } = pos;
        const desk = office[row][col];
        if (desk == unoccupied && row == exitRow) return true;
        if (desk == occupied || desk == visited) return false;
        office[row][col] = visited;

        const surroundings = Object.entries(pos).flatMap(([key, val]) => {
            return offsets.reduce((acc, offset) => {
                const nextDesk = { row, col, [key]: val + offset };
                return deskExists(nextDesk) ? acc.concat(nextDesk) : acc;
            }, []);
        });

        return surroundings.find(findExit);
    };

    const startRow = office.length - 1;
    return findExit({ row: startRow, col: startCol });
};
