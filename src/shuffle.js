module.exports = (a, rand = Math.random) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

// Modified copy of "Fisher-Yates Shuffle" from: https://stackoverflow.com/a/6274381
