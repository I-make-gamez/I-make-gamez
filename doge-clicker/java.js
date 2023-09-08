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
//Beta Avatars
let disabled = true;

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
var unlock4 = true;
var unlock5 = false;
var unlock6 = false;
var coin = "Doge"

var plvl = 1;//"Locked"
var cos = 1;

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

    popup.create('msg', 'First 50 people to join the discord get a role :)', 'Alert')
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
    if (!disabled) {
        $(".doge").fadeOut("slow")
        $(".av").fadeIn("slow")
    } else {
        popup.create('msg', 'The avatar selection system is currently disabled while I redesign it. Check back soon!', 'Disabled')
    }
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
    if (plvl >= 0) {
        if (unlock4 === true) {
            $(".c3tit").text("Click to equip")
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
    } else if (e.ctrlKey && e.altKey && e.key === 'u') {
        popup.create("msg", `Thanks for testing this out!<br>If you notice any bugs please make an issue request or contact me through discord!<br><br>Thx, -NitTwit`, 'Beta avatar selection enabled')
        disabled = false
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
                        if (plvl >= 30 || plvl === "Locked") {
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
                    if (plvl >= 30 || plvl === "Locked") {
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
    if (plvl >= 0 || plvl == "Locked") {
        if (cos != 4) {
            if (plvl >= 5 || plvl === "Locked") {
                $(".c1tit").text("Click to equip")
                if (plvl >= 20 || plvl === "Locked") {
                    $(".c2tit").text("Click to equip")
                    if (plvl >= 20 || plvl === "Locked") {
                        $(".c4tit").text("Click to equip")
                        if (plvl >= 30 || plvl === "Locked") {
                            $(".c5tit").text("Click to equip")
                        }
                    }
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
            switch (powerupEnable) {
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
    if (o.length < 5) {
        popup.create('msg', 'Please input a valid code and try again!', 'Invalid code!')
        return;
    } else {
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
    if (cps >= 1) {
        runCps = true
    } else {
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
    dfPrice = Number(unscrambledCode[5])
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


var logs = new Map()
logs.set('current', {
    'name': 'v1.2',
    'content': `1) Fixed changelog button positions<br><br>2) Avatar selection system closed. To re-enable type ctrl+alt+u<br><br>3) Removed Balltze notice<br><br>4) Added "Help" section<br><br>5) Added general info to help`
})
logs.set(10, {
    'name': 'v1.1',
    'content': '1) Quality of life changes<br><br>2) User-Friendly Changelog<br><br>3) Cheems permanently unlocked. RIP'
})
logs.set(9, {
    'name': 'v1.0.0',
    'content': "1) You can now move data across devices via save codes<br><br>2) Added settings tab<br><br>3) Added Breaking Bread powerup<br><br>4) Added Delete data button<br><br>5) Added Meth Addict avatar"
})
logs.set(8, {
    'name': 'vb9.4',
    'content': '1) You can click on powerups to find more info about them<br><br>2) Powerups will now be blacked out until you reach the propper level required.<br><br>3) Bug fixes :) '
})
logs.set(7, {
    'name': 'vb9.3',
    'content': '1) Changes to toony doge powerup'
})
logs.set(6, {
    'name': 'vb9.2',
    'content': '1) Removed drag from doge :)<br><br>2) Alerts now show in order of priority'
})
logs.set(5, {
    'name': 'vb9.1',
    'content': '1) Re-enabled leveling'
})
logs.set(4, {
    'name': 'vb9',
    'content': '1) Implemented "Factory Worker" powerup!<br><br>2) Level Progress now saves!<br><br>3) Fun coin names with costumes<br><br>4) You can now set a keybind instead of clicking (will not save on reload)<br><br>5) Moved the game to "/doge-clicker"'
})
logs.set(3, {
    'name': 'vb8.2',
    'content': '1) All avatars unlocked until monday Nov. 28th<br><br>2) Recoded the entire avatar selection system'
})
logs.set(2, {
    'name': 'vb8.1',
    'content': '1) Added data deletion ability. Type ctrl + alt + i for more info<br><br>2) DogeCoin no longer resets on reload'
})
logs.set(1, {
    'name': 'vb8',
    'content': '1) You can now scroll the changelog w/o that pesky scrollbar ;)<br><br>2) Clickpower now saves on exit.<br><br>3) Removed ability to drag alerts.<br><br>4) Fixed the issue where toony doge doesnt display on av selection screen.5) Added version history to changelog'
})


var version = `${logs.get('current').name}`
vers.innerHTML = `Version: ${version}`
$('.chl').html(logs.get('current').content)
$(".av").hide()
$(".sett").hide()
var that = logs.size

$('.fwd').click(() => {
    if (that != 1) {
        that--
        var version = `${logs.get(that).name}`
        vers.innerHTML = `Version: ${version}`
        $('.chl').html(logs.get(that).content)
    } else {
        that = logs.size
        var version = `${logs.get('current').name}`
        vers.innerHTML = `Version: ${version}`
        $('.chl').html(logs.get('current').content)
    }
})

$('.bck').click(() => {
    if (that != logs.size) {
        if (that != logs.size - 1) {
            that++
            var version = `${logs.get(that).name}`
            vers.innerHTML = `Version: ${version}`
            $('.chl').html(logs.get(that).content)
        } else {
            that = logs.size
            var version = `${logs.get('current').name}`
            vers.innerHTML = `Version: ${version}`
            $('.chl').html(logs.get('current').content)
        }
    } else {
        that = 1
        var version = `${logs.get(1).name}`
        vers.innerHTML = `Version: ${version}`
        $('.chl').html(logs.get(1).content)
    }
})