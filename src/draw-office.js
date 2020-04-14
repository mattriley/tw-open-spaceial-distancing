module.exports = (office, currentPosition) => {
    const rows = office.map((row, rowIndex) => {
        const rowNumber = rowIndex + 1;
        const vals = row.map((val, colIndex) => {
            const colNumber = colIndex + 1;
            const isCurrentPosition = currentPosition.row == rowNumber && currentPosition.col == colNumber;
            return isCurrentPosition ? 'X' : val.toString();
        });
        return `${rowNumber} > ${vals.join(' ')}`;
    });
    const numCols = office[0].length;
    const secondLastVals = [];
    const lastVals = [];
    for (let i = 0; i < numCols; i++) {
        secondLastVals.push('^');
        lastVals.push(i + 1);
    }
    const secondLastLine = '    ' + secondLastVals.join(' ');
    const lastLine = '    ' + lastVals.join(' ');
    return [...rows, secondLastLine, lastLine].join('\n');
};
