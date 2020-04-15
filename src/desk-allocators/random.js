const allocateSequentially = require('./sequential');
const shuffle = require('../lib/shuffle');

module.exports = (totalDesks, quota) => {
    const desks = allocateSequentially(totalDesks, quota);
    return shuffle(desks);
};
