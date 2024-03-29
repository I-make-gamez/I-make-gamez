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
let disabled = false;

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

// $('.tdoge').hide()
// $('.bbread').hide()

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
    $('.loading').hide()
    popup.create('msg', "Hello, NitTwit here! I've been pretty indecisive when it comes to pushing out updates. Therefore, I would like to give a short road-map for the future of doge clicker. Starting immediately after I get the playlist feature pushed out, I will start working on lore of some kind. After I finish the lore update 1 of 2 things will happen:<br><br>1) A new large update <br>or<br>2) Slowed updates bringing periodic changes and/or bugfixes", '11/1/23 - Update 1.41 - Moving Forward')
    $('.close').click(()=>{
        popup.create('msg', 'Join the discord for a early member role!', 'Join the discord!')
        $('.close').click(()=>{
            close()
        })
    })
}

$('.changelog').hide()


ver.addEventListener('click', function () {
    $('.changelog').show()
    $('.powerups').hide()
    pu.style.opacity = 1;
})
ex.addEventListener('click', function () {
    $('.changelog').hide()
    $('.powerups').show()
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
        $(".av").fadeIn("slow")
        $(".doge").fadeOut("slow")
    } else {
        popup.create('msg', 'The avatar selection system is currently disabled while I redesign it. Check back soon!', 'Disabled')
    }
})
$(".cl").click(function () {
    $(".sett").fadeOut("slow")
    $(".doge").fadeIn('slow')
    $(".av").fadeOut("slow")

})

$(".set").on('click', function () {
    $(".doge").fadeOut("slow")
    $(".sett").fadeIn("slow")
    $(".popover").animate({
        height: '90%',
        width: '90%',
    });
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
    switch (e) {
        case false:
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
    checkLevel()
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
    } else if (e.ctrlKey && e.altKey && e.key === 'g') {
        popup.create("msg", `I wonder how you found this...`, 'Secret avatar added')
        costumes.set(costumes.size + 1, {
            'name': 'Hacker',
            "src": "assets/secret.jpg"
        })
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

    popup.create('msg', "All avatars are unlocked for a limited time :)", "Event - Free Avatars")
}

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
    let v = logs.get(current).name
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
    code += `RZ${v}`
    return code
}
let o;
function unscrambleCode() {
    unscrambledCode = ['', '', '', '', '', '', '']
    o = code.split('RZ')
    if (o.length < 7) {
        popup.create('msg', 'That is not a valid code!<br><br>Make sure you have the right save file', 'Invalid code!')
    } else {
        if (o[6] != logs.get(current).name) {
            console.log('test')
            popup.create('msg', 'Code not recognized.<br><br>Make sure the save file is from the current version', 'Error')
            $('.close').click(() => {
                close()
            })
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
        }
        convertCode()
        popup.create('msg', 'Successfully imported save file', 'Success')
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
    assembleCode(doco, clipo, cps, plvl, exp, dfPrice, logs.get(current).name);
    var blob = new Blob([code], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `DogeClicker-${logs.get(current).name}.save`);
    popup.create('msg', 'Code saved to a text file. DONT LOSE IT!', 'Success')
})
$(".impo").click(function () {
    var fileInput = document.querySelector('.fileInput');
    fileInput.click();
    fileInput.addEventListener('change', function (event) {
        var selectedFile = event.target.files[0];

        if (selectedFile) {
            var reader = new FileReader();

            reader.onload = function (event) {
                var fileContents = event.target.result;
                var test = fileContents;
                code = test
                unscrambleCode()
                $('.sett').fadeOut('fast')
                $('.doge').fadeIn('fast')
            };

            reader.readAsText(selectedFile);
        }
    });

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

// Avatar selection system 

var unlock2 = false;
var unlock3 = false;
var unlock4 = true;
var unlock5 = false;
var unlock6 = false;
var unlock7 = false;
var unlock8 = false;
var unlock9 = false;
var unlock10 = false;
var coin = "Doge"

var costumes = new Map();
costumes.set(2, {
    'name': 'Cheems',
    "src": 'assets/COS4.png'
})
costumes.set(1, {
    'name': 'Doge',
    "src": "assets/DOGE.png"
})

function checkLevel() {
    if (plvl >= 5) {
        if (unlock2 === false) {
            popup.create("msg", "You've just unlocked a new avatar and powerup!", "Unlock!");
            costumes.set(costumes.size + 1, {
                'name': 'Swole Doge',
                "src": 'assets/COS3.png'
            })
            unlock2 = true
        }
    }
    if (plvl >= 10) {
        if (unlock3 === false) {
            costumes.set(costumes.size + 1, {
                'name': 'Dapper Doge',
                "src": 'assets/COS2.png'
            })
            popup.create("msg", "You've just unlocked a new avatar!<br>Go check it out in the avatar selection menu!", "Avatar Unlock!");
            cd.style.filter = 'brightness(100%)'
            unlock3 = true
        }
    }
    if (plvl >= 0) {
        if (unlock4 === true) {
            unlock4 = true
        }
    }
    if (plvl >= 20) {
        if (unlock5 === false) {
            costumes.set(costumes.size + 1, {
                'name': 'Big Floppa',
                "src": 'assets/COS5.png'
            })
            popup.create("msg", "You've just unlocked a new avatar and powerup!", "Unlock!");
            bb.style.filter = 'brightness(100%)'
            unlock5 = true
        }
    }
    if (plvl >= 30) {
        if (unlock6 === false) {
            costumes.set(costumes.size + 1, {
                'name': 'Barking Doge',
                "src": 'assets/COS6.png'
            })
            popup.create("msg", "You've just unlocked a new avatar!<br>Go check it out in the avatar selection menu!", "Avatar Unlock!");
            unlock6 = true
        }
    }
    if (plvl >= 35) {
        if (unlock7 === false) {
            costumes.set(costumes.size + 1, {
                'name': 'HDoge',
                "src": 'assets/hd-doge.png'
            })
            popup.create("msg", "You've just unlocked a new avatar!<br>Go check it out in the avatar selection menu!", "Avatar Unlock!");
            unlock7 = true
        }
    }
    if (plvl >= 40) {
        if (unlock8 === false) {
            costumes.set(costumes.size + 1, {
                'name': 'Karen',
                "src": 'assets/karen.png'
            })
            popup.create("msg", "You've just unlocked a new avatar!<br>Go check it out in the avatar selection menu!", "Avatar Unlock!");
            unlock8 = true
        }
    }
    if (plvl >= 45) {
        if (unlock9 === false) {
            costumes.set(costumes.size + 1, {
                'name': 'Walter',
                "src": 'assets/walter.png'
            })
            popup.create("msg", "You've just unlocked a new avatar!<br>Go check it out in the avatar selection menu!", "Avatar Unlock!");
            unlock9 = true
        }
    }
    if (plvl >= 50) {
        if (unlock10 === false) {
            costumes.set(costumes.size + 1, {
                'name': 'Cheems Prime',
                "src": 'assets/cheems-prime.png'
            })
            popup.create("msg", "You've just unlocked a new avatar!<br>Go check it out in the avatar selection menu!", "Avatar Unlock!");
            unlock10 = true
        }
    }
}

var d = 1
var e = false

$('.lst').click(() => {
    if (d != 1) {
        d--
        $('.cos').text(`Costume: ${costumes.get(d).name}`)
        $('.dummyDoge').attr({
            'src': `${costumes.get(d).src}`
        })
    } else {
        d = costumes.size
        $('.cos').text(`Costume: ${costumes.get(d).name}`)
        $('.dummyDoge').attr({
            'src': `${costumes.get(d).src}`
        })
    }
})

$('.nxt').click(() => {
    if (d != costumes.size) {
        if (d != costumes.size - 1) {
            d++
            $('.cos').text(`Costume: ${costumes.get(d).name}`)
            $('.dummyDoge').attr({
                'src': `${costumes.get(d).src}`
            })
        } else {
            d = costumes.size
            $('.cos').text(`Costume: ${costumes.get(d).name}`)
            $('.dummyDoge').attr({
                'src': `${costumes.get(d).src}`
            })
        }
    } else {
        d = 1
        $('.cos').text(`Costume: ${costumes.get(d).name}`)
        $('.dummyDoge').attr({
            'src': `${costumes.get(d).src}`
        })
    }
})

$(".select").click(() => {
    $('.selc').text(`Selected: ${costumes.get(d).name}`)
    $('.doge').attr({
        'src': `${costumes.get(d).src}`
    })
    if (d != 1) {
        e = true
    } else {
        e = false
    }
    if ($('.selc').text() != `Selected: Karen`) {
        $('.doge').css('width', '15vw')
    } else {
        $('.doge').css('width', '10vw')
    }
})

let transitioning = false;
let boxHeight = $('.music').outerHeight() + 0.1
let plheight = $('.playlists').outerHeight() + 0.5
let bgHeight = $('.bg').outerHeight()
$('.mp3').css({
    top: `-${boxHeight}px`,
})
$('.playlists').css({
    top: `-${plheight}px`,
})
$('.box').css({
    top: `-${plheight}px`,
})
let inwdith = page.innerWidth + 31.5
$('.pl').css({
    height: `${100 * ($('.bg').outerHeight()/page.innerHeight)}vh`,
    top: `-${bgHeight}px`,
    left: `${100 * ($('.upgrades').outerWidth()/inwdith)}vw`
})
$('.playlists').click(() => {
    $('.pl').animate({
        top: `${0}px`,
        zIndex: $('.mp3').css("zIndex")+1
    })
})

$('.plcl').click(() => {
    $('.pl').animate({
        top: `-${bgHeight}px`,
        zIndex: $('.mp3').css("zIndex")+1
    })
})

$('.box').click(() => {
    if (!transitioning) {
        $('.pull-down').toggleClass('fa-angle-down fa-angle-up');
        if ($('.pull-down').hasClass('fa-angle-up')) {
            $('.mp3').animate({
                top: 0,
            }, () => {
                $('.playlists').animate({
                    top: `0px`,
                })
                $('.box').animate({
                    top: 0,
                })
            })
            return;
        } else if ($('.pull-down').hasClass('fa-angle-down')) {
            $('.mp3').animate({
                top: `-${boxHeight}px`,
            }, () => {
                $('.playlists').animate({
                    top: `-${plheight}px`,
                })
                $('.box').animate({
                    top: `-${plheight}px`,
                })
            })
        }
    }
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const audio = document.querySelector(".audio");

let song = songs.get(getRandomInt(1, songs.size))

audio.src = `${song.src}`
$('.song').text(`Now Playing: ${song.name}`)
$('.artist').text(`Artist: ${song.artist}`)

// Add an event listener to update the current time
audio.addEventListener("timeupdate", function () {
    const currentTime = audio.currentTime;
    const minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime % 60);
    const totalDuration = audio.duration;
    const dminutes = Math.floor(totalDuration / 60);
    let dseconds = Math.floor(totalDuration % 60);
    let dur;
    if (dseconds < 10) {
        dur = `${dminutes}:0${dseconds}`
    } else {
        dur = `${dminutes}:${dseconds}`
    }
    if (seconds < 10) {
        seconds = `0${seconds}`
    } else {
        seconds = seconds
    }
    $('.time').text(`${minutes}:${seconds} / ${dur}`)

    if (currentTime >= totalDuration) {
        let songQ = song.id + 1
        if (songQ > songs.size) {
            songQ = 1
            song = songs.get(songQ)
            audio.src = `${song.src}`
            $('.song').text(`Now Playing: ${song.name}`)
            $('.artist').text(`Artist: ${song.artist}`)
            $('.pull-down').toggleClass('fa-angle-down fa-angle-up');
            if ($('.pull-down').hasClass('fa-angle-up')) {
                transitioning = true;
                $('.vol').toggleClass('fa-volume-xmark fa-volume-high');
                audio.volume = 1
                $('.mp3').animate({
                    top: 0,
                })
                setTimeout(() => {
                    $('.mp3').animate({
                        top: `-${boxHeight}px`,
                    })
                    $('.pull-down').toggleClass('fa-angle-down fa-angle-up');
                    transitioning = false;
                }, 2500)
            } else {
                $('.vol').toggleClass('fa-volume-xmark fa-volume-high');
                audio.volume = 1
            }
        } else {
            song = songs.get(songQ)
            audio.src = `${song.src}`
            $('.song').text(`Now Playing: ${song.name}`)
            $('.artist').text(`Artist: ${song.artist}`)
            $('.pull-down').toggleClass('fa-angle-down fa-angle-up');
            if ($('.pull-down').hasClass('fa-angle-up')) {
                transitioning = true;
                $('.vol').toggleClass('fa-volume-xmark fa-volume-high');
                audio.volume = 1
                $('.mp3').animate({
                    top: 0,
                })
                setTimeout(() => {
                    $('.mp3').animate({
                        top: `-${boxHeight}px`,
                    })
                    $('.pull-down').toggleClass('fa-angle-down fa-angle-up');
                    transitioning = false;
                }, 2500)
            } else {
                $('.vol').toggleClass('fa-volume-xmark fa-volume-high');
                audio.volume = 1
            }
        }
    }

});

$('.pp').click(() => {
    $('.pp').toggleClass('fa-pause fa-play');
    if ($('.pp').hasClass('fa-play')) {
        audio.pause()
        return;
    } else if ($('.pp').hasClass('fa-pause')) {
        audio.play()
    }
})

$('.vol').click(() => {
    $('.vol').toggleClass('fa-volume-xmark fa-volume-high');
    if ($('.vol').hasClass('fa-volume-xmark')) {
        audio.volume = 0
    } else if ($('.vol').hasClass('fa-volume-high')) {
        audio.volume = 1
    }
})

$('.skip').click(() => {
    let songQ = song.id + 1
    if (songQ > songs.size) {
        songQ = 1
        song = songs.get(songQ)
        audio.src = `${song.src}`
        $('.song').text(`Now Playing: ${song.name}`)
        $('.artist').text(`Artist: ${song.artist}`)
    } else {
        song = songs.get(songQ)
        audio.src = `${song.src}`
        $('.song').text(`Now Playing: ${song.name}`)
        $('.artist').text(`Artist: ${song.artist}`)
    }
})