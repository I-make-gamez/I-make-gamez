const c1 = document.querySelector('.c1')
const c2 = document.querySelector('.c2')
const c3 = document.querySelector('.c3')
const c4 = document.querySelector('.c4')
const c5 = document.querySelector('.c5')
const D = document.querySelector('.D')
const HD = document.querySelector('.HD')
const PXD = document.querySelector('.PXD')
const FD = document.querySelector('.FD')
const DoC = document.querySelector('.DoC')
const CH = document.querySelector('.CH')
const dogeCos = document.querySelector('.dogeCos')
const dcCos = document.querySelector('.dcCos')
const Dh6 = document.querySelector('.Dh6')
const HDh6 = document.querySelector('.HDh6')
const FDh6 = document.querySelector('.FDh6')
const DoCh6 = document.querySelector('.DoCh6')
const CHh6 = document.querySelector('.CHh6')
const PXDh6 = document.querySelector('.PXDh6')
const cosData = document.querySelector('.cosData')

var selCos = '0';
let c1Un = false;
let c2Un = false;
let c3Un = false;
let c4Un = false;
let c5Un = false;

function checkC2(){
    switch(c2Un){
        case true:
            FD.style.opacity = 1;
            checkC3();
            break;
        case false:
            FD.style.opacity = 0;
            checkC3();
            break;
    }
}

function checkC3(){
    switch(c3Un){
        case true:
            DoC.style.opacity = 1;
            checkC4();
            break;
        case false:
            DoC.style.opacity = 0;
            checkC4();
            break;
    }
}

function checkC4(){
    switch(c4Un){
        case true:
            CH.style.opacity = 1;
            checkC5();
            break;
        case false:
            CH.style.opacity = 0;
            checkC5();
            break;
    }
}

function checkC5(){
    switch(c5Un){
        case true:
            PXD.style.opacity = 1;
            break;
        case false:
            PXD.style.opacity = 0;
            break;
    }
}

function loadCosData() {
    selCos = localStorage.getItem('cos')
    c1Un = JSON.parse(localStorage.getItem('c1Un'))
    c2Un = JSON.parse(localStorage.getItem('c2Un'))
    c3Un = JSON.parse(localStorage.getItem('c3Un'))
    c4Un = JSON.parse(localStorage.getItem('c4Un'))
    c5Un = JSON.parse(localStorage.getItem('c5Un'))
    doco1 = Math.abs(localStorage.getItem('totalDc'));
    dcCos.innerHTML = `DogeCoin: ${doco1}`;
    switch(selCos){
        case '0':
            dogeCos.style.content = 'url(./Assets/DOGE.png)'
            dogeCos.style.width = 'auto'
            dogeCos.style.border = '0px solid #000'
            Dh6.style.opacity = 1;
            HDh6.style.opacity = 0;
            FDh6.style.opacity = 0;
            DoCh6.style.opacity = 0;
            CHh6.style.opacity = 0;
            PXDh6.style.opacity = 0;
            break;
        case '1':
            HD.style.opacity = 1;
            dogeCos.style.content = 'url(./Assets/hevanly-doge.png)'
            dogeCos.style.width = 'auto'
            dogeCos.style.border = '5px solid #000'
            HDh6.style.opacity = 1;
            Dh6.style.opacity = 0;
            FDh6.style.opacity = 0;
            DoCh6.style.opacity = 0;
            CHh6.style.opacity = 0;
            PXDh6.style.opacity = 0;
            break;
        case '2':
            FD.style.opacity = 1;
            dogeCos.style.content = 'url(./Assets/fancy-doge.png)'
            dogeCos.style.width = 'auto'
            dogeCos.style.border = '5px solid #000'
            HDh6.style.opacity = 0;
            Dh6.style.opacity = 0;
            FDh6.style.opacity = 1;
            DoCh6.style.opacity = 0;
            CHh6.style.opacity = 0;
            PXDh6.style.opacity = 0;
            break;
        case '3':
            DoC.style.opacity = 1;
            dogeCos.style.content = 'url(./Assets/doges-cousin.png)'
            dogeCos.style.width = 'auto'
            dogeCos.style.border = '5px solid #000'
            HDh6.style.opacity = 0;
            Dh6.style.opacity = 0;
            FDh6.style.opacity = 0;
            DoCh6.style.opacity = 1;
            CHh6.style.opacity = 0;
            PXDh6.style.opacity = 0;
            break;
        case '4':
            CH.style.opacity = 1;
            dogeCos.style.content = 'url(./Assets/cheems.png)'
            dogeCos.style.width = 'auto'
            dogeCos.style.border = 'none'
            HDh6.style.opacity = 0;
            Dh6.style.opacity = 0;
            FDh6.style.opacity = 0;
            DoCh6.style.opacity = 0;
            PXDh6.style.opacity = 0;
            CHh6.style.opacity = 1;
            break;
        case '5':
            PXD.style.opacity = 1;
            dogeCos.style.content = 'url(./Assets/pxDoge.png)'
            dogeCos.style.width = 'auto'
            dogeCos.style.border = 'none'
            HDh6.style.opacity = 0;
            Dh6.style.opacity = 0;
            FDh6.style.opacity = 0;
            DoCh6.style.opacity = 0;
            CHh6.style.opacity = 0;
            PXDh6.style.opacity = 1;


            break;
    }
    switch(c1Un){
        case true:
            HD.style.opacity = 1;
            checkC2();
            break;
        case false:
            HD.style.opacity = 0;
            checkC2();
            break;
    }
};

c1.addEventListener('click', function(){
    doco1 = Math.abs(localStorage.getItem('totalDc'));
    if(doco1 >= 5000){
        HD.style.opacity = 1;
        doco1 = Math.abs(localStorage.getItem('totalDc'));
        doco1 -= 5000
        dcCos.innerHTML = `DogeCoin: ${doco1}`;
        localStorage.setItem('totalDc', doco1)
        c1Un = true;
        localStorage.setItem('c1Un', c1Un)
    }
})

c2.addEventListener('click', function(){
    doco1 = Math.abs(localStorage.getItem('totalDc'));
    if(doco1 >= 50000){
        FD.style.opacity = 1;
        doco1 = Math.abs(localStorage.getItem('totalDc'));
        doco1 -= 50000
        dcCos.innerHTML = `DogeCoin: ${doco1}`;
        localStorage.setItem('totalDc', doco1)
        c2Un = true;
        localStorage.setItem('c2Un', c2Un)
    }
})

c3.addEventListener('click', function(){
    doco1 = Math.abs(localStorage.getItem('totalDc'));
    if(doco1 >= 100000){
        DoC.style.opacity = 1;
        doco1 = Math.abs(localStorage.getItem('totalDc'));
        doco1 -= 100000
        dcCos.innerHTML = `DogeCoin: ${doco1}`;
        localStorage.setItem('totalDc', doco1)
        c3Un = true;
        localStorage.setItem('c3Un', c3Un)
    }
})

c4.addEventListener('click', function(){
    doco1 = Math.abs(localStorage.getItem('totalDc'));
    if(doco1 >= 250000){
        CH.style.opacity = 1;
        doco1 = Math.abs(localStorage.getItem('totalDc'));
        doco1 -= 250000
        dcCos.innerHTML = `DogeCoin: ${doco1}`;
        localStorage.setItem('totalDc', doco1)
        c4Un = true;
        localStorage.setItem('c4Un', c4Un)
    }
})
c5.addEventListener('click', function(){
    doco1 = Math.abs(localStorage.getItem('totalDc'));
    if(doco1 >= 500000){
        PXD.style.opacity = 1;
        doco1 = Math.abs(localStorage.getItem('totalDc'));
        doco1 -= 500000
        dcCos.innerHTML = `DogeCoin: ${doco1}`;
        localStorage.setItem('totalDc', doco1)
        c5Un = true;
        localStorage.setItem('c5Un', c5Un)
    }
})

HD.addEventListener('click', function(){
    if(HD.style.opacity == 1){
        localStorage.setItem('cos', '1')
        dogeCos.style.content = 'url(./Assets/hevanly-doge.png)'
        dogeCos.style.width = 'auto'
        dogeCos.style.border = '5px solid #000'
        HDh6.style.opacity = 1;
        Dh6.style.opacity = 0;
        FDh6.style.opacity = 0;
        DoCh6.style.opacity = 0;
        CHh6.style.opacity = 0;
        PXDh6.style.opacity = 0;

    }
});

CH.addEventListener('click', function(){
    if(CH.style.opacity == 1){
        localStorage.setItem('cos', '4')
        dogeCos.style.content = 'url(./Assets/cheems.png)'
        dogeCos.style.width = 'auto'
        dogeCos.style.border = 'none'
        HDh6.style.opacity = 0;
        Dh6.style.opacity = 0;
        FDh6.style.opacity = 0;
        DoCh6.style.opacity = 0;
        CHh6.style.opacity = 1;
        PXDh6.style.opacity = 0;

    }
});

DoC.addEventListener('click', function(){
    if(DoC.style.opacity == 1){
        localStorage.setItem('cos', '3')
        dogeCos.style.content = 'url(./Assets/doges-cousin.png)'
        dogeCos.style.width = 'auto'
        dogeCos.style.border = '5px solid #000'
        HDh6.style.opacity = 0;
        Dh6.style.opacity = 0;
        FDh6.style.opacity = 0;
        DoCh6.style.opacity = 1;
        CHh6.style.opacity = 0;
        PXDh6.style.opacity = 0;


    }
});

FD.addEventListener('click', function(){
    if(FD.style.opacity == 1){
        localStorage.setItem('cos', '2')
        dogeCos.style.content = 'url(./Assets/fancy-doge.png)'
        dogeCos.style.width = 'auto'
        dogeCos.style.border = '5px solid #000'
        HDh6.style.opacity = 0;
        Dh6.style.opacity = 0;
        FDh6.style.opacity = 1;
        DoCh6.style.opacity = 0;
        CHh6.style.opacity = 0;
        PXDh6.style.opacity = 0;


    }
});

D.addEventListener('click', function(){
    localStorage.setItem('cos', '0')
    dogeCos.style.content = 'url(./Assets/DOGE.png)'
    dogeCos.style.width = 'auto'
    dogeCos.style.border = '0px solid #000'
    Dh6.style.opacity = 1;
    HDh6.style.opacity = 0;
    FDh6.style.opacity = 0;
    DoCh6.style.opacity = 0;
    CHh6.style.opacity = 0;
    PXDh6.style.opacity = 0;


});

PXD.addEventListener('click', function(){
    if(PXD.style.opacity == 1){
        localStorage.setItem('cos', '5')
        dogeCos.style.content = 'url(./Assets/pxDoge.png)'
        dogeCos.style.width = 'auto'
        dogeCos.style.border = '0px solid #000'
        HDh6.style.opacity = 0;
        Dh6.style.opacity = 0;
        FDh6.style.opacity = 0;
        DoCh6.style.opacity = 0;
        CHh6.style.opacity = 0;
        PXDh6.style.opacity = 1;

    }
});

cosData.addEventListener('click', function(){
    let ans = window.prompt("Are you sure?\n[Y|N]")
    switch (ans) {
        case 'y' || 'Y':
            dogeCos.style.content = 'url(./Assets/DOGE.png)'
            dogeCos.style.width = 'auto'
            dogeCos.style.border = '0px solid #000'
            Dh6.style.opacity = 1;
            HDh6.style.opacity = 0;
            FDh6.style.opacity = 0;
            DoCh6.style.opacity = 0;
            CHh6.style.opacity = 0;
            PXDh6.style.opacity = 0;
            HD.style.opacity = 0;
            PXD.style.opacity = 0;
            FD.style.opacity = 0;
            DoC.style.opacity = 0;
            CH.style.opacity = 0;
            selCos = '0';
            localStorage.removeItem('cos')
            c1Un = false;
            localStorage.removeItem('c1Un')
            c2Un = false;
            localStorage.removeItem('c2Un')
            c3Un = false;
            localStorage.removeItem('c3Un')
            c4Un = false;
            localStorage.removeItem('c4Un')
            c5Un = false
            localStorage.removeItem('c5Un')

            break;
        case 'n' || 'N':
            selCos = selCos;
    };
})