let popup = new Popup()
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
var unlock2 = false;
var unlock3 = false;
var unlock4 = false;
var unlock5 = false;

var plvl = "Locked";
var cos = 1;



//Version Start
var version = 'vb0.8.2'
vers.innerHTML = `Version: ${version}`
var page = window
$(".av").hide()

page.onload = function () {
    ver.innerHTML = `Version: ${version}`
    clipo = Math.floor(localStorage.getItem('clickp'))
    clicpo.innerHTML = `ClickPower: ${clipo}`
    dfPrice = Math.abs(localStorage.getItem('dfp'))
    if (clipo < 2) {
        dfPrice = 100
        clipo = 1;
        clicpo.innerHTML = `ClickPower: ${clipo}`
        dfCost.innerHTML = `Cost: ${dfPrice}DC`;

    } else {
        dfCost.innerHTML = `Cost: ${dfPrice}DC`;

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
    doExpProgression = localStorage.getItem('dep')
    doco += clipo;
    localStorage.setItem('tdc', doco)
    dc.innerHTML = `DogeCoin: ${doco}`
    
    switch (doExpProgression) {
        case 'true':
            if (plvl != "Locked") {
                expCalc();
            }
            break;
        default: break;
    }
    anim()
});

$(".avs").on('click', function () {
    $(".doge").fadeOut("slow")
    $(".av").fadeIn("slow")
})
$(".cl").click(function () {
    $(".av").fadeOut("slow")
    $(".doge").fadeIn("slow")
})

cd.addEventListener('click', function () {
    popup.create("msg", "Gives you 25% of click power for 30 seconds.<br>Cooldown: 1 minute", "Alert!");
})

let codes = [
    1807,
];

u1.addEventListener('click', function () {
    if (doco >= dfPrice) {
        clipo += 1;
        clicpo.innerHTML = `ClickPower: ${clipo}`
        doco -= dfPrice;
        var tempval = Math.round(0.1 * dfPrice)
        dfPrice += Math.trunc(tempval, 0)
        dfCost.innerHTML = `Cost: ${dfPrice}DC`;
        dc.innerHTML = `DogeCoin: ${doco}`
        localStorage.setItem('clickp', clipo)
        localStorage.setItem('dfp', dfPrice)
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
    exp += 1 + (Math.trunc(clipo - 1 / 10));
    ec.innerHTML = `Exp: ${exp} / ${expCap}`
    if (exp >= expCap) {
        plvl += 1;
        expCap += 250;
        exp = 0;
        ec.innerHTML = `Exp: ${exp} / ${expCap}`
        lvl.innerHTML = `Level: ${plvl}`
        popup.create('lu', `You Just Leveled Up To Level ${plvl}!`)
    }
    if (plvl >= 5) {
        if (unlock2 === false) {
            $(".c1tit").text("Click to equip");
            popup.create("msg", "You've just unlocked a new avatar!<br>Go check it out in the avatar selection menu!", "Avatar Unlock!");
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
            popup.create("msg", "You've just unlocked a new avatar!<br>Go check it out in the avatar selection menu!", "Avatar Unlock!");
            unlock5 = true
        }
    }
}

//Functions End

//Snipets

document.onkeyup = function (e) {
    var e = e || page.event;
    if (e.ctrlKey && e.altKey && e.key === 'm') {
        var coAns = ask('')
        var coAns2 = coAns.split(" ")
        if (coAns2[0] == codes[0]) {
            switch (coAns2[1]) {
                default: break;
                case '1':
                    var total = Math.floor(coAns2[2]);
                    doco += total;
                    dc.innerHTML = `DogeCoin: ${doco}`;
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
                    if(plvl != "Locked"){
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
    }
};

if (plvl === "Locked") {
    $(".c1tit").text("Click to equip")
    $(".c2tit").text("Click to equip")
    $(".c3tit").text("Click to equip")
    $(".c4tit").text("Click to equip")
    popup.create('msg', "All avatars are unlocked for a limited time :)", "Event - Free Avatars")
}

$(".c1").click(function () {
    if (plvl >=5 || plvl == "Locked") {
        if (cos != 2) {
            if(plvl >=10 || plvl === "Locked"){
                $(".c2tit").text("Click to equip")
                if(plvl >=15 || plvl === "Locked"){
                    $(".c3tit").text("Click to equip")
                    if(plvl >=20 || plvl === "Locked"){
                        $(".c4tit").text("Click to equip")
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
        } else if (cos = 2) {
            $(".c1tit").text("Click to equip")
            $(".doge").attr({
                "src": "assets/DOGE.png"
            })
            $(".dummyDoge").attr({
                "src": "assets/DOGE.png"
            })
            cos = 1
        }
    } else {
        popup.create('msg', 'You need to be level 5 to use this avatar!', 'Insufficient Level')
    }
})
$(".c2").click(function () {
    if (plvl >=10 || plvl == "Locked") {
        if (cos != 3) {
            if(plvl >=15 || plvl === "Locked"){
                $(".c3tit").text("Click to equip")
                if(plvl >=20 || plvl === "Locked"){
                    $(".c4tit").text("Click to equip")
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
        } else if (cos = 3) {
            $(".c2tit").text("Click to equip")
            $(".doge").attr({
                "src": "assets/DOGE.png"
            })
            $(".dummyDoge").attr({
                "src": "assets/DOGE.png"
            })
            cos = 1
        }
    } else {
        popup.create('msg', 'You need to be level 10 to use this avatar!', 'Insufficient Level')
    }
})

$(".c3").click(function () {
    if (plvl >=15 || plvl == "Locked") {
        if (cos != 4) {
            $(".c1tit").text("Click to equip")
            $(".c2tit").text("Click to equip")
            if(plvl >=20 || plvl === "Locked"){
                $(".c4tit").text("Click to equip")
            }            $(".c3tit").text("Equipped")
            $(".doge").attr({
                "src": "assets/COS4.png"
            })
            $(".dummyDoge").attr({
                "src": "assets/COS4.png"
            })
            cos = 4
        } else if (cos = 4) {
            $(".c3tit").text("Click to equip")
            $(".doge").attr({
                "src": "assets/DOGE.png"
            })
            $(".dummyDoge").attr({
                "src": "assets/DOGE.png"
            })
            cos = 1
        }
    } else {
        popup.create('msg', 'You need to be level 15 to use this avatar!', 'Insufficient Level')
    }
})

$(".c4").click(function () {
    if (plvl >=20 || plvl == "Locked") {
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
        } else if (cos = 5) {
            $(".c4tit").text("Click to equip")
            $(".doge").attr({
                "src": "assets/DOGE.png"
            })
            $(".dummyDoge").attr({
                "src": "assets/DOGE.png"
            })
            cos = 1
        }
    } else {
        popup.create('msg', 'You need to be level 20 to use this avatar!', 'Insufficient Level')
    }
})

var dfacP = 1000
var cps = 0
runCps = false;

$(".u2").click(function () {
    if (doco >= dfacP) {
        doco -= dfacP;
        dc.innerHTML = `DogeCoin: ${doco}`
        runCps = true
        localStorage.setItem("cps", JSON.stringify(runCps))
        cps += 1
        localStorage.setItem("clicksPs", cps)
        $(".clps").text("ClicksPerSec: " + cps)
    }
})

setInterval(function () {
    cps = Math.trunc(localStorage.getItem("clicksPs"))
    $(".clps").text("ClicksPerSec: " + cps)
    switch (localStorage.getItem("cps")) {
        case 'true':
            doco += cps;
            anim()
            dc.innerHTML = `DogeCoin: ${doco}`
            break;
    }
}, 1000)



document.onkeydown = function (e) {
    var e = e || page.event;
    if (e.ctrlKey && e.altKey && e.key === 'r') {
        window.location.href = "../../doge-clicker"
    }
}