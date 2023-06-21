function removeAccent(str) {
    return s.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
}

module.exports = removeAccent;
