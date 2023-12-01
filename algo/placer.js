const {len , e } = require("./function.js")

function placeVertical(co,plateau,str) {
    for (let line = co[0]; line < len(str)+co[0];line++) {
        plateau[line][co[1]] = str[line-co[0]]
    }
    return plateau
}

function placeHorizontal(co,plateau,str) {
    for (let col = co[1]; col < len(str)+co[1];col++) {
        plateau[co[0]][col] = str[col-co[1]]
    }
    return plateau
}

module.exports = {placeHorizontal,placeVertical}