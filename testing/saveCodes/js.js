function genCode(num) {
    let result = '';
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numlen = num.toString().length;
    for (i = 0; i < numlen; i++) {
        var textnum = num.toString().split("")
        if (textnum[i] === '0') {
            result += "K"
        } else {
            result += characters.charAt(textnum[i] - 1);
        }
    }
    return result
}

var code = ''
var unscrambledCode = ''

function assembleCode(dogecoin, clickpower, clickspersec, lvl, xp) {
    code = ''
    let dc = genCode(dogecoin);
    let cp = genCode(clickpower)
    let cps = genCode(clickspersec)
    let levl = genCode(lvl)
    let exp = genCode(xp)
    code += dc;
    code += "rz";
    code += cp;
    code += "rz";
    code += cps;
    code += "rz";
    code += levl;
    code += "rz";
    code += exp;
    //return code.split('rz')
    code = code.split('rz').toString()
}

function unscrambleCode() {
    //const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    unscrambledCode = ['','','','','']
    let o = code.split(',')
    for (i = 0; i < 5; i++) {
        var k = o[i].split('')
        for (j = 0; j < o.length; j++) {
            if (k[j] === 'A') {
                unscrambledCode[i]+='1';
            }else if (k[j] === 'B') {
                unscrambledCode[i]+='2';
            }else if (k[j] === 'C') {
                unscrambledCode[i]+='3';
            }else if (k[j] === 'D') {
                unscrambledCode[i]+='4';
            }else if (k[j] === 'E') {
                unscrambledCode[i]+='5';
            }else if (k[j] === 'F') {
                unscrambledCode[i]+='6';
            }else if (k[j] === 'G') {
                unscrambledCode[i]+='7';
            }else if (k[j] === 'H') {
                unscrambledCode[i]+='8';
            }else if (k[j] === 'I') {
                unscrambledCode[i]+='9';
            }else if (k[j] === 'K') {
                unscrambledCode[i]+='0';
            }
        }
    }
    return unscrambledCode
}

