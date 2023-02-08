const doge = document.querySelector('.doge');
const u1 = document.querySelector('.u1');
const u2 = document.querySelector('.u2');
const u3 = document.querySelector('.u3');
const u4 = document.querySelector('.u4');
const u5 = document.querySelector('.u5');
const cpwr = document.querySelector('#cpwr');
const cps = document.querySelector('#cps');
const dc = document.querySelector('.dc');
const version = document.querySelector('.vers');
const change = document.querySelector('.changes');
const ex = document.querySelector('.ex');
const log = document.querySelector('.log');
const ne = document.querySelector('.ne');
const wat = document.querySelector('.wat');
const puaex = document.querySelector('.puaex');
const puqyes = document.querySelector('.puqyes');
const puqno = document.querySelector('.puqno');
const wtpss = document.querySelector('.wtpuss');
const wtpuqss = document.querySelector('.wtpuqss');
const pua = document.querySelector('.pua');
const puq = document.querySelector('.puq');
const pw = document.querySelector('.pw');
const obtwct = document.querySelector('.obtwct')
const dfp = document.querySelector('.dfp')
const dpp = document.querySelector('.dpp')

//TO DO
//1) MJ Doge (for hunter)
//2) Price Stack other upgrades
//3) Get Rid Of Reload On DF For cpsGo()

var ver = '1.0.0';
var page = window;
const ask = page.prompt;
const abs = Math.abs;

var selCos = '0'

var wtuss = wat.innerHTML
var wtass = '1) Working on animating some more costumes<br>2) Discord server, maybe?<br>3) Price-Stacking is on its way so enjoy<br> cheap upgrades while you can<br>4) TO ACCESS BETA TESTING:<br>type ctrl + alt + m<br>type beta<br>You will get an alert.'
var wtpuss = 'Makes Click Power Double For Thirty Seconds<br>COOLDOWN: 1 Min<br>This message wont show again'
var betaTxt = 'Beta Testing Engaged<br>Beta Features:<br>1) Price Stacking<br>'

var mul = 10
var mul2 = 10;
var nxt = 0;
var cbda = 0;
var doco = 0;
var doco1 = 0;
var clipo = 1;
var clipes = 0;
var cpsok = 0;
let a1 = 0;
let dfPrice = 100;
let dpPrice = 2000;

let pwBought = '0';
let qAns = '-1';

doge.addEventListener('click', function () {
    doco += clipo;
    dc.innerHTML = `DogeCoin: ${doco}`;
    localStorage.setItem('totalDc', doco)
    anim();
});

function createAlert(wts) {
    wtpss.innerHTML = wts;
    pua.style.opacity = 1;
    pua.style.zIndex = 2;
}

function createQuestion(q) {
    wtpuqss.innerHTML = q;
    puq.style.opacity = 1;
    puq.style.zIndex = 2;
}

var cbd = undefined;

function wait(time) {
    setTimeout(function () {
        return;
    }, time)
}

version.addEventListener('click', function () {
    change.style.opacity = 1;
    change.style.zIndex = 2;
})

function yes() {
    localStorage.setItem('qAns', 'yes')
    qAns = localStorage.getItem('qAns')
}

function no() {
    localStorage.setItem('qAns', 'no')
    qAns = localStorage.getItem('qAns')
}

ex.addEventListener('click', function () {
    change.style.opacity = 0;
    change.style.zIndex = 0;
})

puaex.addEventListener('click', function () {
    pua.style.opacity = 0;
    pua.style.zIndex = 0;
})

puqyes.addEventListener('click', function () {
    puq.style.opacity = 0;
    puq.style.zIndex = 0;
    yes();
})

puqno.addEventListener('click', function () {
    puq.style.opacity = 0;
    puq.style.zIndex = 0;
    no();
})



pw.addEventListener('click', function () {
    pwBought = localStorage.getItem('pw')
    switch (pwBought) {
        default: break;
        case '1':
            pw.style.opacity = 0;
            cbd = 0
            pwBought = true;
            clipo *= 2;
            cpwr.innerHTML = `Clickpower: ${clipo}`
            setTimeout(function () {
                clipo /= 2;
                cpwr.innerHTML = `Clickpower: ${clipo}`
                setTimeout(function () {
                    cbd = 1;
                    pw.style.opacity = 1;
                }, 60000)
            }, 30000)
            break;
        case '0':
            createQuestion('Would You Like To Buy The<br>PowerWash Powerup For: 100K DogeCoin?')
            if (qAns == 'yes') {
                if (doco >= 100000) {
                    doco-=100000
                    dc.innerHTML = `DogeCoin: ${doco}`;
                    localStorage.setItem('totalDc', doco)
                    if (cbda === 0) {
                        cbda = 1;
                        localStorage.setItem('cbda', cbda)
                        createAlert(wtpuss);
                        return;
                    }
                    localStorage.setItem('pw', '1')
                } else {
                    createAlert('You Need More DogeCoin.')
                }
            } else if (qAns === 'no') {
                return;
            }
            break;
    }
})

ne.addEventListener('click', function () {
    if (nxt === 0) {
        nxt = 1
        ne.innerHTML = 'Back'
        wat.innerHTML = null;
        wat.innerHTML = wtass;
        log.innerHTML = `Alerts for ${ver}`
    } else if (nxt === 1) {
        nxt = 0
        ne.innerHTML = 'Next'
        wat.innerHTML = null;
        wat.innerHTML = wtuss;
        log.innerHTML = `Current Version: ${ver}`
    }
})

function rnd(min, max) {
    return Math.random() * (max - min) + min;
}

function anim() {
    selCos = localStorage.getItem('cos')
    switch (selCos) {
        case '0':
            doge.style.content = "url(./Assets/DOGE2.png)"
            setTimeout(function () {
                doge.style.content = "url(./Assets/DOGE.png)"
            }, 200)
            break;
        case '5':
            doge.style.content = "url(./Assets/pxDoge2.png)"
            setTimeout(function () {
                doge.style.content = "url(./Assets/pxDoge.png)"
            }, 200)
            break;
        default:
            break;
    }
}

function loadVersion() {
    version.innerHTML = `Version: ${ver}`
    log.innerHTML = `Current Version: ${ver}`
    cbda = localStorage.getItem('cbda')
};

var vh = document.innerHeight
var vw = document.innerWidth

function cpsGo() {
    setInterval(function () {
        if (a1 === 1) {
            doco += clipes;
            dc.innerHTML = `DogeCoin: ${doco}`;
            anim();
        } else {
            a1 = 0;
            localStorage.setItem('a1', a1)
        }
    }, 1000)
};

function reload() {
    window.location.href = window.location.href
}

function loadData() {
    doco = abs(localStorage.getItem('totalDc'));
    dc.innerHTML = `DogeCoin: ${doco}`;
    clipo = abs(localStorage.getItem('clickpower'));
    if (clipo == 0) {
        clipo = 1;
        cpwr.innerHTML = `Clickpower: ${clipo}`;
    } else {
        cpwr.innerHTML = `Clickpower: ${clipo}`;
    }
    a1 = abs(localStorage.getItem('a1'));
    if (a1 === 0) {
        clipes = 0;
        cps.innerHTML = `Clicks Per Second: ${clipes}`;
    } else {
        clipes = abs(localStorage.getItem('clipes'))
        cps.innerHTML = `Clicks Per Second: ${clipes}`;
        cpsGo();
    }
};

function loadDogeCos() {
    selCos = localStorage.getItem('cos')
    switch (selCos) {
        case '0':
            doge.style.content = 'url(./Assets/DOGE.png)'
            doge.style.width = 'auto'
            doge.style.border = '0px solid #000'
            break;
        case '1':
            doge.style.content = 'url(./Assets/hevanly-doge.png)'
            doge.style.width = 'auto'
            doge.style.border = '5px solid #000'
            break;
        case '2':
            doge.style.content = 'url(./Assets/fancy-doge.png)'
            doge.style.width = 'auto'
            doge.style.border = '5px solid #000'
            break;
        case '3':
            doge.style.content = 'url(./Assets/doges-cousin.png)'
            doge.style.width = 'auto'
            doge.style.border = '5px solid #000'
            break;
        case '4':
            doge.style.content = 'url(./Assets/cheems.png)'
            doge.style.width = 'auto'
            doge.style.border = '0px solid #000'
        case '5':
            doge.style.content = 'url(./Assets/pxDoge.png)'
            doge.style.width = 'auto'
            doge.style.border = '0px solid #000'
    }
    doco1 = Math.abs(localStorage.getItem('totalDc'));
    dcCos.innerHTML = `DogeCoin: ${doco1}`;
};

let codes = [
    1807, 
    'beta'
];

function deleteData() {
    let ans = ask("Are you sure?\n[Y|N]")
    switch (ans) {
        case 'y' || 'Y':
            doco = 0;
            dc.innerHTML = `DogeCoin: ${doco}`;
            localStorage.removeItem('totalDc');
            clipo = 1;
            cpwr.innerHTML = `Clickpower: ${clipo}`
            localStorage.removeItem('clickpower');
            localStorage.removeItem('cos')
            selCos = '0'
            doge.style.content = 'url(./Assets/DOGE.png)'
            doge.style.width = 'auto'
            doge.style.border = '0px solid #000'
            localStorage.removeItem('clipes')
            clipes = 0;
            a1 = 0;
            cps.innerHTML = `Clicks Per Second: ${clipes}`;
            break;
        case 'n' || 'N':
            doco = doco
            clipo = clipo
    };
};

u1.addEventListener('click', function () {
    if (doco >= 100) {
        clipo += 1;
        doco -= 100
        localStorage.setItem('totalDc', doco)
        dc.innerHTML = `DogeCoin: ${doco}`;
        localStorage.setItem('clickpower', clipo);
        cpwr.innerHTML = `Clickpower: ${clipo}`
        switch(beta){
            case 'off': break;
            case 'on': 
                dfPrice = dfPrice + ((dfPrice/100)*10);
                dfp.innerHTML = `Cost: ${dfPrice}DC`
        }
    }
});

u2.addEventListener('click', function () {
    if (doco >= 2000) {
        doco -= 2000;
        localStorage.setItem('totalDc', doco)
        dc.innerHTML = `DogeCoin: ${doco}`;
        clipes += 1;
        localStorage.setItem('clipes', clipes)
        cps.innerHTML = `Clicks Per Second: ${clipes}`;
        cpsok = 1;
        switch(beta){
            case 'off': break;
            case 'on': 
                dpPrice = dpPrice + ((dfPrice/100)*10);
                dpp.innerHTML = `Cost: ${dpPrice}DC`
        }
        let a1 = 1;
        localStorage.setItem('a1', a1)
        reload();
        cpsGo();
    }
});

u3.addEventListener('click', function () {
    if (doco >= 10000) {
        doco -= 10000;
        localStorage.setItem('totalDc', doco)
        dc.innerHTML = `DogeCoin: ${doco}`;
        clipo += Math.round(clipo / 100 * mul);
        cpwr.innerHTML = `Clickpower: ${clipo}`;
        localStorage.setItem('clickpower', clipo);
    }
})

u4.addEventListener('click', function () {
    if (doco >= 50000) {
        doco -= 50000;
        localStorage.setItem('totalDc', doco)
        dc.innerHTML = `DogeCoin: ${doco}`;
        localStorage.setItem('totalDc', doco)
        mul = 20;
    }
});

u5.addEventListener('click', function () {
    if (doco >= 75000) {
        doco -= 75000;
        localStorage.setItem('totalDc', doco)
        dc.innerHTML = `DogeCoin: ${doco}`;
        clipes += Math.round(clipes / 100 * mul2);
        cps.innerHTML = `Clicks Per Second: ${clipes}`;
        localStorage.setItem('clipes', clipes);
    }
})


let beta = 'off'
document.onkeydown = function (e) {
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
                    localStorage.setItem('totalDc', doco)
                    break;
                case '2':
                    var total = Math.floor(coAns2[2]);
                    clipo += total;
                    cpwr.innerHTML = `Clickpower: ${clipo}`
                    localStorage.setItem('clickpower', clipo)
                    break;
                case '3':
                    var total = Math.floor(coAns2[2]);
                    clipes += total;
                    localStorage.setItem('clipes', clipes)
                    cps.innerHTML = `Clicks Per Second: ${clipes}`
                    reload();
                    break;
                case '4':
                    localStorage.setItem('pw', '0')
                    cbda = 0;
                    localStorage.setItem('cbda', cbda)
                    break;
            }
            //BETA TESTING 
        }else if(coAns2[0] == codes[1]){
            createAlert(betaTxt);
            pua.style.height = '250px;'
            beta = 'on'
            obtwct.innerHTML = "BETA TESTERS: Report Bugs Here"
            obtwct.href = './'
        }
    }
};

/*

*/