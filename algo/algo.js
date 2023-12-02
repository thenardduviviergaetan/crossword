const {len , compareArrays} = require("./function.js")
const {testHorizontal,testVertical,checkList,Blackcase} = require("./checker.js")
const {placeHorizontal,placeVertical} = require("./placer.js")

// recherche la procheine position a tester
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
    // test format et type des donner
    if (typeof tab !== 'string' || !Array.isArray(list)|| !tab.match('\n')) {
        console.log("\nError : wrong format");
        return;
    }
    // test si un mots et present en double
    if (checkList(list)) {
        console.log("\nError : words repetition");
        return;
    }
    // prepare les tableau pour le programme
    let placement = tab.split('\n').map((x) => x = x.split('').map((x) => { if (x!= '.'){x= parseInt(x)} return x}));
    let plateau = placement.map((ligne) => ligne = ligne.map( (x) => { if (x!= '.'){x=' '}else{x=Blackcase} return x}));
    // permet de verifier si il y a le même nombre d'emplacement et de mots
    let nb = 0
    placement.map((ligne) => ligne.map((x) => { if (x!='.'){nb += x}return 0}))
    if (nb!=len(list)){
        console.log("\nError : mismatch between number of input words and puzzle starting cells")
        return;
    }
    // lancement de l'algorithme recherchant la solution
    let rep = resolve(placement,plateau,list,[]);
    // verifie la sortie
    if (typeof rep === 'undefined' || len(rep)!=1){
        if (len(rep) < 1){
            console.log("\nError : no solution ");
        }else{
            console.log("\nError : multiple solutions");
        }
        return;
    }
    // print la solution en convertisant l'array en un string
    // console.log("\n",rep.map((line) => line.map((col) => col = col.join('')).join('\n')).join('\n'))
    console.log("\n"+rep[0].map((line) => line.join("")).join('\n'))
}

// function recurcive cherchant la ou les solutions
function resolve(placement,plateau,list,repfinal) {
    // recupere les coordoner x y de la prochaine case a placer
    let co = next(placement)
    // verifie si la liste et vide et qu'il n'y a plus de place
    if (!len(list) && co[0] == -1 && co[1] == -1) {
        if (compareArrays(repfinal,plateau)) {
            repfinal.push(plateau)
        }
        return repfinal
    }else if (!len(list)){
        return undefined
    }
    // boucle sur la liste de mots au coordoner trouver et teste d'y placer un mots 
    for (let index = 0; index < len(list);index++) {
        // test si le mots ce place a l'horizontal
        if (testHorizontal(co,plateau,list[index])){
            //decremente le placement au coordonne actuellement tester
            placement[co[0]][co[1]]--
            // place le mots et relance la fonction resolve a partir du nouveau plateau
            let tempplateau = placeHorizontal(co,plateau.map((line) => line.map((col) => col)),list[index])
            repfinal = resolve(placement,tempplateau,list.filter((str) => str != list[index]),repfinal) 
            if (typeof repfinal === 'undefined'){
                return undefined
            }
            //incremente le placement au coordonne actuellement pour pouvoir tester avec un autre mots
            placement[co[0]][co[1]]++
        }
        // fonctionne pareille que le if precedent mais pour la vertical
        if (testVertical(co,plateau,list[index])) {
            placement[co[0]][co[1]]--
            let tempplateau = placeVertical(co,plateau.map((line) => line.map((col) => col)),list[index])
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