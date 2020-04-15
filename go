#!/usr/bin/env node

const generateOffice = require('./src/generate-office');
const navigateOffice = require('./src/navigate-office');
const shuffle = require('./src/fisher-yates-shuffle');
const toFixed = require('./src/to-fixed');

const generateOfficeRandomly = generateOffice(shuffle);
const repeat = 10000;
const step = 0.1;

console.log(`Number of samples for each p: ${repeat}`);

for (let p = 1; p >= 0; p -= step) {
    let exitCount = 0;
    for (let i = 0; i <= repeat; i++) {
        const office = generateOfficeRandomly(p);
        const exitFound = navigateOffice(office);
        if (exitFound) exitCount++;
    }
    console.log(`${toFixed(p, 1)} ${toFixed(exitCount / repeat, 3)}`);
}
