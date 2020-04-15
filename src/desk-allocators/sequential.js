const deskStatus = require('../desk-status');

module.exports = (totalDesks, quota) => {
    const occupied = new Array(quota).fill(deskStatus.occupied);
    const unoccupied = new Array(totalDesks - quota).fill(deskStatus.unoccupied);
    return occupied.concat(unoccupied);
};
