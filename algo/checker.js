const {len , e } = require("./function.js")
const Blackcase = '.'

function testHorizontal(co,plateau,str) {
    let col = co[1];
    let index = 0;
    for (col; col < len(plateau[co[0]]);col++) {
        if (str[index] == undefined && plateau[co[0]][col] == Blackcase){
            return true;
        }
        if (plateau[co[0]][col] != str[col-co[1]] && plateau[co[0]][col] != ' '|| str[col-co[1]] == undefined && plateau[co[0]][col] == ' ' ) {
            return false;
        }
        index++;
    }
    if (col-co[1]<len(str)) {
        return false;
    }
    return true;
}

function testVertical(co,plateau,str) {
    let line = co[0];
    let index = 0;
    for (line; line < len(plateau);line++) {
        if (str[line-co[0]] == undefined && plateau[line][co[1]] == Blackcase){
            return true
        }
        if (plateau[line][co[1]] != str[line-co[0]] && plateau[line][co[1]] != ' '|| str[line-co[0]] == undefined && plateau[line][co[1]] == ' ') {
        return false;
        }
        index++;
    }
    if (line-co[0]<len(str)) {
        return false;
    }
    return true;
}

module.exports = {testHorizontal,testVertical,Blackcase}