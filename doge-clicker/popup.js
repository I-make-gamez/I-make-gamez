const popupTitle = document.querySelector('.title')
const popupText = document.querySelector('.text')
const pop = document.querySelector('.popup')

function Popup() {
    this.create = function (type, message, title) {
        switch (type) {
            case "msg":
                popupTitle.innerHTML = title;
                popupText.innerHTML = message
                popupText.style.fontSize = "1.50vw"
                pop.style.display = 'inline'
                pop.style.height = '250px'
                break;
            case "lu":
                popupTitle.innerHTML = "LevelUp!";
                popupText.innerHTML = message
                popupText.style.fontSize = "2vw"
                pop.style.display = 'inline'
                pop.style.height = '200px'
                break;
            default: break;
        }
    }
}

document.querySelector('.close').addEventListener('click', function () {
    const pop = document.querySelector('.popup')
    pop.style.display = 'none'
})
