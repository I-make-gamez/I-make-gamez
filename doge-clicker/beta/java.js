let popup = new Popup()
//Player DOM
const doge = document.querySelector('.doge')
const doge2 = document.querySelector('.doge2')
const dc = document.querySelector('.dc')
const wbg = document.querySelector('.wbg')
//Upgrade DOM
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



//MVVs
var page = window
var ask = page.prompt
var doco = 0;
var clipo = 1;
var dfPrice = 100;

//Version Start
var version = 'vb0.55'
var page = window

page.onload = function(){
    ver.innerHTML = `Version: ${version}`
    let doco = Math.floor(localStorage.getItem('tdc'))
    dc.innerHTML = `DogeCoin: ${doco}`
}

ver.addEventListener('click', function(){
    cl.style.zIndex = 1
    pu.style.opacity = 1;
})
ex.addEventListener('click', function(){
    cl.style.zIndex = -2
    pu.style.opacity = 1;
})
//Version End

//EL Start

doge.addEventListener('click', function(){
    doco += clipo;
    localStorage.setItem('tdc', doco)
    dc.innerHTML = `DogeCoin: ${doco}`
    anim()
});

cd.addEventListener('click', function(){
    popup.create("msg", "Alert", "Gives you 25% of click power for 30 seconds.<br>Cooldown: 1 minute");
})

let codes = [
    1807, 
];

u1.addEventListener('click', function(){
    if(doco >= dfPrice){
        clipo += 1;
        clicpo.innerHTML = `ClickPower: ${clipo}`
        doco -= dfPrice;
        dfPrice *= 2
        dfCost.innerHTML = `Cost: ${dfPrice}DC`;
        dc.innerHTML = `DogeCoin: ${doco}`
        
        
    }
})

//EL End

//Functtions Start

function anim(){
    doge.style.content = "url(./assets/DOGE2.png)"
    setTimeout(function () {
        doge.style.content = "url(./assets/DOGE.png)"
    }, 200)
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
            }
        }
    }
};

document.onkeydown = function(e){
    var e = e || page.event;
    if (e.ctrlKey && e.altKey && e.key === 'r'){
        window.location.href = "../../doge-clicker"
    }
}