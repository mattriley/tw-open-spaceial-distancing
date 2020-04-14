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

    const width = office[0].length;
    const height = office.length;
    const startRowIndex = office.length - 1;
    const endRowIndex = 0;

    const isExitRow = rowIndex => rowIndex === endRowIndex;

    const findExit = (rowIndex, colIndex) => {
        const desk = officeData[rowIndex][colIndex];
        if (desk.safe && isExitRow(rowIndex)) return true;
        if (desk.unsafe || desk.visited) return false;
        desk.visited = true;

        const funcs = [
            () => {
                if (rowIndex != 0) return findExit(rowIndex - 1, colIndex);
            },
            () => {
                if (rowIndex !== height - 1) return findExit(rowIndex + 1, colIndex);
            },
            () => {
                if (colIndex !== 0) return findExit(rowIndex, colIndex - 1);
            },
            () => {
                if (colIndex !== width - 1) return findExit(rowIndex, colIndex + 1);
            }
        ];

        return funcs.find(func => func());
    };

    return findExit(startRowIndex, startColIndex);
};
