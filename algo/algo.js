const {len , compareArrays} = require("./function.js")
const {testHorizontal,testVertical,Blackcase} = require("./checker.js")
const {placeHorizontal,placeVertical} = require("./placer.js")

function next(placement) {
    let co = [-1,-1];
    for (let line = 0;line < len(placement); line++) {
        for (let col = 0; col < len(placement[line]);col++) {
            if (placement[line][col] != 0 && placement[line][col] != '.' ) {
                return [line,col];
            }
        }
    }
    return co;
}

function crosswordSolver(tab,list) {
    // console.log(functions)
    // return
    if (typeof tab !== 'string' || !Array.isArray(list)|| !tab.match('\n')) {
        console.log("\nError");
        return;
    }
    let placement = tab.split('\n').map((x) => x = x.split('').map((x) => { if (x!= '.'){x= parseInt(x)} return x}));
    let plateau = placement.map((ligne) => ligne = ligne.map( (x) => { if (x!= '.'){x=' '}else{x=Blackcase} return x}));
    let rep = resolve(placement,plateau,list,[]);
    if (typeof rep === 'undefined' || len(rep)!=1){
        console.log("\nError");
        return;
    }
    console.log("\n",rep.map((line) => line.map((line) => line = line.join('')).join('\n')).join('\n'))
}

function resolve(placement,plateau,list,repfinal) {
    let co = next(placement)
    if (!len(list) && co[0] == -1 && co[1] == -1) {
        if (compareArrays(repfinal,plateau)) {
            repfinal.push(plateau)
        }
        return repfinal
    }else if (!len(list)){
        return undefined
    }
    for (let index = 0; index < len(list);index++) {
        if (testHorizontal(co,plateau,list[index])){
            placement[co[0]][co[1]]--
            let tempplateau = placeHorizontal(co,plateau.map((line) => line.map((col) => col)),list[index])
            repfinal = resolve(placement,tempplateau,list.filter((str) => str != list[index]),repfinal) 
            if (typeof repfinal === 'undefined'){
                return undefined
            }
            placement[co[0]][co[1]]++
        }
        if (testVertical(co,plateau,list[index])) {
            placement[co[0]][co[1]]--
            let tempplateau = placeVertical(co,plateau.map((line) => line.map((col) => col)),list[index])
            // let rep = resolve(placement,tempplateau,list.filter((str) => str != list[index])) 
            repfinal = resolve(placement,tempplateau,list.filter((str) => str != list[index]),repfinal) 
            if (typeof repfinal === 'undefined'){
                return undefined
            }
            placement[co[0]][co[1]]++
        }
    }
    return repfinal
}

module.exports = crosswordSolver;