module.exports = (value, precision) => {
    return value.toLocaleString(undefined, {
        minimumIntegerDigits: 1,
        maximumFractionDigits: precision,
        minimumFractionDigits: precision
    });
};
