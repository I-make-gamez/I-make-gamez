const popupTitle = document.querySelector('.title')
const popupText = document.querySelector('.text')
const pop = document.querySelector('.popup')
const spop = document.querySelector('.spopup')
const spopupTitle = document.querySelector('.stitle')
const spopupText = document.querySelector('.stext')
const ispop = document.querySelector('.ispopup')
const ispopupTitle = document.querySelector('.istitle')
const ispopupText = document.querySelector('.istext')

function Popup() {
    this.create = function (type, message, title) {
        if (this.order = 1) {
            switch (type) {
                case "msg":
                    popupTitle.innerHTML = title;
                    popupText.innerHTML = message
                    popupText.style.fontSize = "1.50vw"
                    pop.style.display = 'inline'
                    pop.style.height = '250px'
                    this.order += 1;
                    break;
                case "lu":
                    popupTitle.innerHTML = "Level Up!";
                    popupText.innerHTML = message
                    popupText.style.fontSize = "2vw"
                    pop.style.display = 'inline'
                    pop.style.height = '200px'
                    this.order += 1;
                    break;
                case "save":
                    spopupTitle.innerHTML = "Copy-Paste This Code. KEEP SAFE";
                    spopupText.innerHTML = message
                    spopupText.style.fontSize = "2vw"
                    spop.style.display = 'inline'
                    spop.style.height = '200px'
                    this.order += 1;
                    break;
                case "importSave":
                    ispopupTitle.innerHTML = "Enter code here";
                    ispopupText.style.fontSize = "2vw"
                    ispop.style.display = 'inline'
                    ispop.style.height = '200px'
                    this.order += 1;
                default: break;
            }
        }
    }
this.order = 1;
}

function close() {
    $(".close").click(() => {
        const pop = document.querySelector('.popup')
        pop.style.display = 'none'
        popup.order -= 1        
    })
}

document.querySelector('.close').addEventListener('click', function () {
    const pop = document.querySelector('.popup')
    pop.style.display = 'none'
    popup.order -= 1
})

document.querySelector('.sclose').addEventListener('click', function () {
    const spop = document.querySelector('.spopup')
    spop.style.display = 'none'
    popup.order -= 1
})

document.querySelector('.isclose').addEventListener('click', function () {
    const ispop = document.querySelector('.ispopup')
    const ispopupText = document.querySelector('.istext')
    ispop.style.display = 'none'
    popup.order -= 1
    code = ispopupText.value.toString()
    console.log(code)
    unscrambleCode()
})
