const popup = new Popup()
//Player DOM
const doge = document.querySelector('.doge')
const doge2 = document.querySelector('.doge2')
const dc = document.querySelector('.dc')
const wbg = document.querySelector('.wbg')
//Upgrade DOM
const ec = document.querySelector('.ec')
const lvl = document.querySelector('.lvl')

const u1 = document.querySelector('.u1')
const dfCost = document.querySelector('.dfCost')
const clicpo = document.querySelector('.cpwr')
//Powerup DOM
const pu = document.querySelector('.powerups')
const cd = document.querySelector('.cd')
const bb = document.querySelector('.bb')
//Version DOM
const ver = document.querySelector('.vers')
const cl = document.querySelector('.changelog')
const ex = document.querySelector('.ex')
const vers = document.querySelector('.ver')

function initializeDoco() {
    doco = Math.abs(localStorage.getItem('tdc'))
    dc.innerHTML = `DogeCoin: ${doco}`
    if (doco < 1) {
        doco = 0;
    } else {
        doco = Math.abs(localStorage.getItem('tdc'))
    }
}

doge.ondragstart = () => {
    return false;
}

//MVVs
var page = window
var ask = page.prompt
var clipo = 1;
var dfPrice = 100;
var exp = 0;
var doco = 0;
var expCap = 500;
var doExpProgression = true;
localStorage.setItem('dep', doExpProgression)
var vw = page.innerWidth
var vh = page.innerHeight
var powerupEnable = true;
var unlock2 = false;
var unlock3 = false;
var unlock4 = false;
var unlock5 = false;
var unlock6 = false;
var coin = "Doge"

var plvl = 1//"Locked";
var cos = 1;



//Version Start
var version = 'v1.0.0'
vers.innerHTML = `Version: ${version}`
var page = window
$(".av").hide()
$(".sett").hide()

page.onload = function () {




    ver.innerHTML = `Version: ${version}`
    clipo = Math.floor(localStorage.getItem('clickp'))
    clicpo.innerHTML = `ClickPower: ${clipo}`
    dfPrice = Math.abs(localStorage.getItem('dfp'))
    if (clipo < 2) {
        dfPrice = 100
        clipo = 1;
        clicpo.innerHTML = `ClickPower: ${clipo}`
        dfCost.innerHTML = `Cost: ${dfPrice}$`;

    } else {
        dfCost.innerHTML = `Cost: ${dfPrice}$`;

    }
    $(".doge").attr({
        "src": "assets/citizen_doge.png"
    })
    setTimeout(function () {
        $(".doge").attr({
            "src": "assets/DOGE.png"
        })
    }, 10)
    initializeDoco()
    if (plvl != "Locked") {
        plvl = Math.floor(localStorage.getItem('plvl'))
        exp = Math.floor(localStorage.getItem('exp'))
        expCap = Math.floor(localStorage.getItem('expCap'))
        lvl.innerHTML = `Level: ${plvl}`
        ec.innerHTML = `Exp: ${exp} / ${expCap}`
        expCalc()
    }
    popup.create('msg', 'Ctrl + Alt + A<br>To bind a key instead of clicking', 'Alert')
    setTimeout(function () {
        popup.create('msg', 'First 50 people to join the discord get a role :)', 'Alert')

    }, 5000)
}



ver.addEventListener('click', function () {
    cl.style.zIndex = 1
    pu.style.opacity = 1;
})
ex.addEventListener('click', function () {
    cl.style.zIndex = -2
    pu.style.opacity = 1;
})
//Version End

//EL Start

doge.addEventListener('click', function () {
    if (key === undefined) {
        doExpProgression = localStorage.getItem('dep')
        doco += clipo;
        localStorage.setItem('tdc', doco)
        dc.innerHTML = `${coin}Coin: ${doco}`

        switch (doExpProgression) {
            case 'true':
                if (plvl != "Locked") {
                    expCalc();
                }
                break;
            default: break;
        }
        anim()
    } else { return }
});

$(".avs").on('click', function () {
    $(".doge").fadeOut("slow")
    $(".av").fadeIn("slow")
})
$(".cl").click(function () {
    $(".av").fadeOut("slow")
    $(".sett").fadeOut("slow")
    $(".doge").fadeIn("slow")
})

$(".set").on('click', function () {
    $(".doge").fadeOut("slow")
    $(".sett").fadeIn("slow")
})

cd.addEventListener('click', function () {
    if (plvl >= 5) {
        if (powerupEnable === true) {
            clipo *= 2;
            clicpo.innerHTML = `ClickPower: ${clipo}`
            powerupEnable = false
            setTimeout(function () {
                powerupEnable = true
                clipo = ogClipo
                clicpo.innerHTML = `ClickPower: ${clipo}`
            }, 60000)
        } else if (powerupEnable === false) {
            popup.create('msg', 'You need to wait until any active powerup cooldown runs out!', 'Wait!')
        }
    }
})

bb.addEventListener('click', function () {
    if (plvl >= 20) {
        if (powerupEnable === true) {
            cps *= 2;
            localStorage.setItem("clicksPs", cps)
            $(".clps").text(`ClicksPerSec: ${cps}`)
            powerupEnable = false
            setTimeout(function () {
                powerupEnable = true
                cps = ogCps
                localStorage.getItem("clicksPs", ogCps)
                $(".clps").text(`ClicksPerSec: ${cps}`)
            }, 60000)
        } else if (powerupEnable === false) {
            popup.create('msg', 'You need to wait until any active powerup cooldown runs out!', 'Wait!')
        }
    }
})

let codes = [
    1807,
    0906,
];

var ogClipo = 1
var ogCps = 0
u1.addEventListener('click', function () {
    if (doco >= dfPrice) {
        clipo += 1;
        clicpo.innerHTML = `ClickPower: ${clipo}`
        doco -= dfPrice;
        var tempval = Math.round(0.1 * dfPrice)
        dfPrice += Math.trunc(tempval, 0)
        dfCost.innerHTML = `Cost: ${dfPrice}$`;
        dc.innerHTML = `${coin}Coin: ${doco}`
        localStorage.setItem('clickp', clipo)
        localStorage.setItem('dfp', dfPrice)
        ogClipo = clipo
    }
})

//EL End

//Functtions Start

function anim() {
    switch (cos) {
        case 1:
            $(".doge").attr({
                "src": "assets/DOGE2.png"
            })
            setTimeout(function () {
                $(".doge").attr({
                    "src": "assets/DOGE.png"
                })
            }, 200)
            break;
        default: break;
    }

}

function expCalc() {
    exp += clipo
    ec.innerHTML = `Exp: ${exp} / ${expCap}`
    if (exp >= expCap) {
        plvl += 1;
        expCap += 250;
        exp = 0;
        ec.innerHTML = `Exp: ${exp} / ${expCap}`
        lvl.innerHTML = `Level: ${plvl}`
        if (plvl != 1) {
            popup.create('lu', `You Just Leveled Up To Level ${plvl}!`)
        }
        localStorage.setItem('plvl', plvl)
        localStorage.setItem('expCap', expCap)
    }
    if (plvl >= 5) {
        if (unlock2 === false) {
            $(".c1tit").text("Click to equip");
            popup.create("msg", "You've just unlocked a new avatar and powerup!", "Unlock!");
            cd.style.filter = 'brightness(100%)'
            unlock2 = true
        }
    }
    if (plvl >= 10) {
        if (unlock3 === false) {
            $(".c2tit").text("Click to equip")
            popup.create("msg", "You've just unlocked a new avatar!<br>Go check it out in the avatar selection menu!", "Avatar Unlock!");
            unlock3 = true
        }
    }
    if (plvl >= 15) {
        if (unlock4 === false) {
            $(".c3tit").text("Click to equip")
            popup.create("msg", "You've just unlocked a new avatar!<br>Go check it out in the avatar selection menu!", "Avatar Unlock!");
            unlock4 = true
        }
    }
    if (plvl >= 20) {
        if (unlock5 === false) {
            $(".c4tit").text("Click to equip")
            popup.create("msg", "You've just unlocked a new avatar and powerup!", "Unlock!");
            bb.style.filter = 'brightness(100%)'
            unlock5 = true
        }
    }
    if (plvl >= 30) {
        if (unlock6 === false) {
            $(".c5tit").text("Click to equip")
            popup.create("msg", "You've just unlocked a new avatar!<br>Go check it out in the avatar selection menu!", "Avatar Unlock!");
            unlock6 = true
        }
    }
    localStorage.setItem('exp', exp)
}


//Functions End

//Snipets

document.onkeyup = function (e) {
    var e = e || page.event;
    if (e.ctrlKey && e.altKey && e.key === 'm') {
        var coAns = ask('')
        var coAns2 = coAns.split(" ")
        if (coAns2[0] == codes[0] || coAns2[0] == codes[1]) {
            switch (coAns2[1]) {
                default: break;
                case '1':
                    var total = Math.floor(coAns2[2]);
                    doco += total;
                    dc.innerHTML = `${coin}Coin: ${doco}`
                    //localStorage.setItem('totalDc', doco)
                    break;
                case '2':
                    var total = Math.floor(coAns2[2]);
                    clipo += total;
                    clicpo.innerHTML = `Clickpower: ${clipo}`
                    //localStorage.setItem('clickpower', clipo)
                    break;
                case '3':
                    var total = Math.floor(coAns2[2]);
                    plvl += total;
                    lvl.innerHTML = `Level: ${plvl}`
                    if (plvl != "Locked") {
                        expCalc()
                    }
                    break;
                case 'exp':
                    switch (coAns2[2]) {
                        case 'true':
                            var doExpProgression = true;
                            localStorage.setItem('dep', doExpProgression)
                            console.log('expProgression Enabled')
                            break;
                        case 'false':
                            var doExpProgression = false;
                            localStorage.setItem('dep', doExpProgression)
                            console.log('expProgression Disabled')
                            break;
                    }
            }
        } else {
            switch (coAns2[0]) {
                case 'del':
                    localStorage.clear('all')
                    location.reload();
                    break;
            }
        }
    } else if (e.ctrlKey && e.altKey && e.key === 'i') {
        popup.create("msg", `1) Type Ctrl + Alt + M<br>2) Type "del"<br>3) You're done!`, 'How to delete data:')
    } else if (e.ctrlKey && e.altKey && e.key === 'a') {
        key = ask("Enter any key")
    } else if (e.key === key) {
        test()
    }
};

/*document.onkeyup = function (e) {
    var e = e || page.event
    if (e.key === key) {
          test()
    }
};*/

function test() {
    doExpProgression = localStorage.getItem('dep')
    doco += clipo;
    localStorage.setItem('tdc', doco)
    dc.innerHTML = `${coin}Coin: ${doco}`

    switch (doExpProgression) {
        case 'true':
            if (plvl != "Locked") {
                expCalc();
            }
            break;
        default: break;
    }
    anim()
}

var key;

if (plvl === "Locked") {
    $(".c1tit").text("Click to equip")
    $(".c2tit").text("Click to equip")
    $(".c3tit").text("Click to equip")
    $(".c4tit").text("Click to equip")
    $(".c5tit").text("Click to equip")
    popup.create('msg', "All avatars are unlocked for a limited time :)", "Event - Free Avatars")
}

$(".c1").click(function () {
    if (plvl >= 5 || plvl == "Locked") {
        if (cos != 2) {
            if (plvl >= 10 || plvl === "Locked") {
                $(".c2tit").text("Click to equip")
                if (plvl >= 15 || plvl === "Locked") {
                    $(".c3tit").text("Click to equip")
                    if (plvl >= 20 || plvl === "Locked") {
                        $(".c4tit").text("Click to equip")
                        if(plvl >=30 || plvl === "Locked"){
                            $(".c5tit").text("Click to equip")
                        }
                    }
                }
            }
            $(".c1tit").text("Equipped")
            $(".doge").attr({
                "src": "assets/COS3.png"
            })
            $(".dummyDoge").attr({
                "src": "assets/COS3.png"
            })
            cos = 2
            coin = "Buff"
            dc.innerHTML = `${coin}Coin: ${doco}`
        } else if (cos = 2) {
            $(".c1tit").text("Click to equip")
            $(".doge").attr({
                "src": "assets/DOGE.png"
            })
            $(".dummyDoge").attr({
                "src": "assets/DOGE.png"
            })
            cos = 1
            coin = "Doge"
            dc.innerHTML = `${coin}Coin: ${doco}`
        }
    } else {
        popup.create('msg', 'You need to be level 5 to use this avatar!', 'Insufficient Level')
    }
})
$(".c2").click(function () {
    if (plvl >= 10 || plvl == "Locked") {
        if (cos != 3) {
            if (plvl >= 15 || plvl === "Locked") {
                $(".c3tit").text("Click to equip")
                if (plvl >= 20 || plvl === "Locked") {
                    $(".c4tit").text("Click to equip")
                    if(plvl >= 30 || plvl === "Locked") {
                        $(".c5tit").text("Click to equip")
                    }
                }
            }
            $(".c1tit").text("Click to equip")
            $(".c2tit").text("Equipped")
            $(".doge").attr({
                "src": "assets/COS2.png"
            })
            $(".dummyDoge").attr({
                "src": "assets/COS2.png"
            })
            cos = 3
            coin = "Rich"
            dc.innerHTML = `${coin}Coin: ${doco}`

        } else if (cos = 3) {
            $(".c2tit").text("Click to equip")
            $(".doge").attr({
                "src": "assets/DOGE.png"
            })
            $(".dummyDoge").attr({
                "src": "assets/DOGE.png"
            })
            cos = 1
            coin = "Doge"
            dc.innerHTML = `${coin}Coin: ${doco}`
        }
    } else {
        popup.create('msg', 'You need to be level 10 to use this avatar!', 'Insufficient Level')
    }
})

$(".c3").click(function () {
    if (plvl >= 15 || plvl == "Locked") {
        if (cos != 4) {
            $(".c1tit").text("Click to equip")
            $(".c2tit").text("Click to equip")
            if (plvl >= 20 || plvl === "Locked") {
                $(".c4tit").text("Click to equip")
                if(plvl >= 30 || plvl === "Locked") {
                    $(".c5tit").text("Click to equip")
                }
            } $(".c3tit").text("Equipped")
            $(".doge").attr({
                "src": "assets/COS4.png"
            })
            $(".dummyDoge").attr({
                "src": "assets/COS4.png"
            })
            cos = 4
            coin = "Cheem"
            dc.innerHTML = `${coin}Coin: ${doco}`
        } else if (cos = 4) {
            $(".c3tit").text("Click to equip")
            $(".doge").attr({
                "src": "assets/DOGE.png"
            })
            $(".dummyDoge").attr({
                "src": "assets/DOGE.png"
            })
            cos = 1
            coin = "Doge"
            dc.innerHTML = `${coin}Coin: ${doco}`
        }
    } else {
        popup.create('msg', 'You need to be level 15 to use this avatar!', 'Insufficient Level')
    }
})

$(".c4").click(function () {
    if (plvl >= 20 || plvl == "Locked") {
        if (cos != 5) {
            $(".c1tit").text("Click to equip")
            $(".c2tit").text("Click to equip")
            $(".c3tit").text("Click to equip")
            $(".c4tit").text("Equipped")
            $(".doge").attr({
                "src": "assets/COS5.png"
            })
            $(".dummyDoge").attr({
                "src": "assets/COS5.png"
            })
            cos = 5
            coin = "Cat"
            dc.innerHTML = `${coin}Coin: ${doco}`
        } else if (cos = 5) {
            $(".c4tit").text("Click to equip")
            $(".doge").attr({
                "src": "assets/DOGE.png"
            })
            $(".dummyDoge").attr({
                "src": "assets/DOGE.png"
            })
            cos = 1
            coin = "Doge"
            dc.innerHTML = `${coin}Coin: ${doco}`
        }
    } else {
        popup.create('msg', 'You need to be level 20 to use this avatar!', 'Insufficient Level')
    }
})

$(".c5").click(function () {
    if (plvl >= 30 || plvl == "Locked") {
        if (cos != 6) {
            $(".c1tit").text("Click to equip")
            $(".c2tit").text("Click to equip")
            $(".c3tit").text("Click to equip")
            $(".c4tit").text("Click to equip")
            $(".c5tit").text("Equipped")
            $(".doge").attr({
                "src": "assets/COS6.png"
            })
            $(".dummyDoge").attr({
                "src": "assets/COS6.png"
            })
            cos = 6
            coin = "Doge"
            dc.innerHTML = `${coin}Coin: ${doco}`
        } else if (cos = 6) {
            $(".c5tit").text("Click to equip")
            $(".doge").attr({
                "src": "assets/DOGE.png"
            })
            $(".dummyDoge").attr({
                "src": "assets/DOGE.png"
            })
            cos = 1
            coin = "Doge"
            dc.innerHTML = `${coin}Coin: ${doco}`
        }
    } else {
        popup.create('msg', 'You need to be level 30 to use this avatar!', 'Insufficient Level')
    }
})

var dfacP = 1000
var cps = 0
runCps = false;

$(".u2").click(function () {
    if (doco >= dfacP) {
        doco -= dfacP;
        dc.innerHTML = `${coin}Coin: ${doco}`
        runCps = true
        localStorage.setItem("cps", JSON.stringify(runCps))
        cps += 1
        localStorage.setItem("clicksPs", cps)
        $(".clps").text("ClicksPerSec: " + cps)
        ogCps = cps
    }
})

$(".info1").click(function () {
    if (plvl < 5) {
        popup.create('msg', 'Unlocks @ lvl 5!', '???')
    } else if (plvl >= 5) {
        popup.create('msg', 'Clickpower doubled for one minute', 'Toony Doge:')

    }
})

$(".info2").click(function () {
    if (plvl < 20) {
        popup.create('msg', 'Unlocks @ lvl 20!', '???')
    } else if (plvl >= 20) {
        popup.create('msg', 'Clicks per sec doubled for one minute', 'Breaking Bread:')

    }
})

setInterval(function () {
    cps = Math.trunc(localStorage.getItem("clicksPs"))
    $(".clps").text("ClicksPerSec: " + cps)
    switch (localStorage.getItem("cps")) {
        case 'true':
            switch(powerupEnable){
                case true:
                    doco += cps;
                    anim()
                    dc.innerHTML = `${coin}Coin: ${doco}`
                    break;
                case false:
                    doco += cps;
                    anim()
                    dc.innerHTML = `${coin}Coin: ${doco}`
                    break;
            }
            break;
    }
}, 1000)

//SAVE CODES

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

function assembleCode(dogecoin, clickpower, clickspersec, lvl, xp, df) {
    code = ''
    let dc = genCode(dogecoin);
    let cp = genCode(clickpower)
    let cps = genCode(clickspersec)
    let levl = genCode(lvl)
    let exp = genCode(xp)
    let dfp = genCode(df)
    code += dc;
    code += "RZ";
    code += cp;
    code += "RZ";
    code += cps;
    code += "RZ";
    code += levl;
    code += "RZ";
    code += exp;
    code += "RZ";
    code += dfp;
    return code
}
function unscrambleCode() {
    unscrambledCode = ['', '', '', '', '', '']
    let o = code.split('RZ')
    if(o.length < 5){
        popup.create('msg', 'Please input a valid code and try again!', 'Invalid code!')
        return;
    }else{
        for (i = 0; i < 6; i++) {
            var k = o[i].split('')
            for (j = 0; j < o.length; j++) {
                if (k[j] === 'A') {
                    unscrambledCode[i] += '1';
                } else if (k[j] === 'B') {
                    unscrambledCode[i] += '2';
                } else if (k[j] === 'C') {
                    unscrambledCode[i] += '3';
                } else if (k[j] === 'D') {
                    unscrambledCode[i] += '4';
                } else if (k[j] === 'E') {
                    unscrambledCode[i] += '5';
                } else if (k[j] === 'F') {
                    unscrambledCode[i] += '6';
                } else if (k[j] === 'G') {
                    unscrambledCode[i] += '7';
                } else if (k[j] === 'H') {
                    unscrambledCode[i] += '8';
                } else if (k[j] === 'I') {
                    unscrambledCode[i] += '9';
                } else if (k[j] === 'K') {
                    unscrambledCode[i] += '0';
                }
            }
        }
        convertCode()
        return unscrambledCode
    }
    
}

function convertCode() {
    doco = Number(unscrambledCode[0])
    dc.innerHTML = `DogeCoin: ${doco}`
    localStorage.setItem('tdc', doco)
    clipo = Number(unscrambledCode[1])
    clicpo.innerHTML = `ClickPower: ${clipo}`
    localStorage.setItem('clickp', clipo)
    cps = Number(unscrambledCode[2])
    if(cps >= 1){
        runCps = true
    }else{
        runCps = false
    }
    localStorage.setItem("cps", JSON.stringify(runCps))
    localStorage.setItem("clicksPs", cps)
    $(".clps").text("ClicksPerSec: " + cps)
    plvl = Number(unscrambledCode[3])
    localStorage.setItem('plvl', plvl)
    exp = Number(unscrambledCode[4])
    localStorage.setItem('exp', exp)
    expCalc()
    dfPrice =  Number(unscrambledCode[5])
    localStorage.setItem('dfp', dfPrice)
    dfCost.innerHTML = `Cost: ${dfPrice}$`;
}

$(".ddata").click(function () {
    let ans = ask("are you sure?\n[Y/N]")
    switch (ans) {
        case 'Y' || 'y':
            localStorage.clear('all')
            location.reload();
            break;
        case 'N' || 'n':
            break;
    }
})



$(".expo").click(function () {
    assembleCode(doco, clipo, cps, plvl, exp, dfPrice);
    popup.create('save', code)
})

$(".impo").click(function () {
    popup.create('importSave')
})
