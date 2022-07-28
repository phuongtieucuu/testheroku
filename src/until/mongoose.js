module.exports = {
    AraytoObject(aray) {
        return aray.map(item => item.toObject());
    },
    ItemtoObject(item) {
        return item ? item.toObject() : item
    }
}