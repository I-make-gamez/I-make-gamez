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




//MVVs
var page = window
var ask = page.prompt
var doco = 0;
var clipo = 1;
var dfPrice = 100;
var exp = 0;
var expCap = 500;
var doExpProgression = true;
localStorage.setItem('dep', doExpProgression)
var vw = page.innerWidth
var vh = page.innerHeight
var unlock2 = false;


//Version Start
var version = 'vb0.8-hf1'
vers.innerHTML = `Version: ${version}`
var page = window
$(".av").hide()

page.onload = function () {
    ver.innerHTML = `Version: ${version}`
    let doco = Math.abs(localStorage.getItem('tdc'))
    dc.innerHTML = `DogeCoin: ${doco}`
    clipo = Math.floor(localStorage.getItem('clickp'))
    clicpo.innerHTML = `ClickPower: ${clipo}`
    dfPrice = Math.abs(localStorage.getItem('dfp'))
    if(clipo < 2 ){
        dfPrice = 100  
        clipo = 1;
        clicpo.innerHTML = `ClickPower: ${clipo}`
        dfCost.innerHTML = `Cost: ${dfPrice}DC`;

    }else{
        dfCost.innerHTML = `Cost: ${dfPrice}DC`;

    }
    $(".doge").attr({
        "src": "assets/citizen_doge.png"
    })
    setTimeout(function(){
        $(".doge").attr({
            "src": "assets/DOGE.png"
        })
    },10)
    
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
    if (plvl >= 5) {
        if (unlock2 === false) {
            $(".cos2").css("filter", "brightness(100%)");
            popup.create("msg", "You've just unlocked a new avatar!<br>Go check it out in the avatar selection menu!", "Avatar Unlock!");
            $(".cosTit").text("Toony Doge")
            unlock2 = true
        }
    }
    switch (doExpProgression) {
        case 'true':
            expCalc();
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
    switch (selCos) {
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

var plvl = 1;

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
}

//Functions End

//Snipets

document.onkeyup = function (e) {
    var e = e || page.event;
    if (e.ctrlKey && e.altKey && e.key === 'm') {
        var coAns = ask('Enter Admin Code\nThen Command ID\nThen Value(if any)')
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
                //localStorage.setItem('clickpower', clipo)
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
        }
    }
};

$(".left").hover(function () { //hover
    $(this).animate({ "left": "-=10px" }, "250");

},
    function () { //out
        $(this).animate({ "left": "+=10px" }, "250");
    }
);

$(".select").hover(function () { //hover
    $(this).animate({
        "font-size": "30px"
    }, 250);

},
    function () { //out
        $(this).animate({
            "font-size": "25px"
        }, 250);
    }
);

$(".right").hover(function () { //hover
    $(this).animate({ "left": "+=15px" }, "250");

},
    function () { //out
        $(this).animate({ "left": "-=15px" }, "250");
    }
);

var cosList = [1, 2]
var cos = 1
var cosMax = cosList.length;
var selCos = 1
$(".cos2").hide()



$(".right").click(function () {
    cos += 1
    if (cos > cosMax) {
        cos = 1;
    }
    switch (cos) {
        case 1:
            $(".cos1").fadeIn(250)
            $(".cos2").fadeOut(250)
            if (selCos === cos) {
                $(".cosTit").text("Doge (Equipped)")
            } else {
                $(".cosTit").text("Doge")
            }
            break;
        case 2:
            $(".cos2").fadeIn(250)
            $(".cos1").fadeOut(250)
            if (selCos === cos) {
                $(".cosTit").text("Toony Doge (Equipped)")
            } else {
                if (plvl <= 4) {
                    $(".cosTit").text("Toony Doge (Locked)")
                } else {
                    $(".cosTit").text("Toony Doge")
                }
            }
            break;
        default: break;
    }
})
$(".left").click(function () {
    cos -= 1
    if (cos < 1) {
        cos = cosMax;
    }
    switch (cos) {
        case 1:
            $(".cos1").fadeIn(250)
            $(".cos2").fadeOut(250)
            if (selCos === cos) {
                $(".cosTit").text("Doge (Equipped)")
            } else {
                $(".cosTit").text("Doge")
            }
            break;
        case 2:
            $(".cos2").fadeIn(250)
            $(".cos1").fadeOut(250)
            if (selCos === cos) {
                $(".cosTit").text("Toony Doge (Equipped)")
            } else {
                if (plvl <= 4) {
                    $(".cosTit").text("Toony Doge (Locked)")
                } else {
                    $(".cosTit").text("Toony Doge")
                }
            }
            break;
        default: break;
    }
})


$(".select").click(function () {
    selCos = cos;
    switch (selCos) {
        case 0:
            break;
        case 1:
            $(".cosTit").text("Doge (Equipped)")
            $(".doge").attr({
                "src": "assets/DOGE.png"
            })
            break;
        case 2:
            if (plvl >= 5) {
                $(".cosTit").text("Toony Doge (Equipped)")
                $(".doge").attr({
                    "src": "assets/citizen_doge.png"
                })
            } else {
                popup.create("msg", "You aren't able to use this avatar yet!<br>You must be Level 5 to unlock it!", "Insufficent Level!")
                selCos = 1;
            }
            break;
        default: break;
    }
})
var dfacP = 1000
var cps = 0
runCps = false;

$(".u2").click(function(){
    if(doco >= dfacP){
        doco-=dfacP;
        dc.innerHTML = `DogeCoin: ${doco}`
        runCps = true
        localStorage.setItem("cps", JSON.stringify(runCps))
        cps += 1
        localStorage.setItem("clicksPs", cps)
        $(".clps").text("ClicksPerSec: "+cps)
    }
})

setInterval(function(){
    cps = Math.trunc(localStorage.getItem("clicksPs"))
    $(".clps").text("ClicksPerSec: "+cps)
    switch(localStorage.getItem("cps")){
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