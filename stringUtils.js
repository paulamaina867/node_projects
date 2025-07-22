function toUpperCase(str) {
    return str.toUpperCase();
}

function toLowerCase(str) {
    return str.toLowerCase();
}

function countLetters(str) {
    return str.replace(/[^a-zA-Z]/g, "").length;
}

module.exports = {
    toUpperCase,
    toLowerCase,
    countLetters
};
