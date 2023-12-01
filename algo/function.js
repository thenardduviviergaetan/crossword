const compareArrays = (taba, b) => {
    let test = true;
    for (let index = 0;index < len(taba);index++){
        if (JSON.stringify(taba[index]) === JSON.stringify(b)){
            test = false;
        }
    }
    return test;
  }

function len(arg) {
    let compt = 0;
    if (typeof arg === 'undefined'){
        return -1;
    }
    if (Array.isArray(arg)){
        arg.forEach(_ => {
            compt++;
        });
    }else{
        compt = arg.length;
    }
    return compt;
}

module.exports = {len,compareArrays}